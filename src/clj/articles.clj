(ns articles
  (:require [integrant.core :as ig]
            [taoensso.timbre :as log]))

(defmethod ig/init-key ::insert! [_ {:keys [execute!]}]
  (fn [entries]
    (let [all-articles
          (mapcat (fn [[kwd publications]]
                    (map (fn [{:keys [prism:publicationName
                                      prism:coverDate
                                      dc:creator
                                      prism:doi]}]
                           {:keyword kwd
                            :publication_name prism:publicationName
                            :cover_date prism:coverDate
                            :creator dc:creator
                            :doi prism:doi})
                         publications))
                  entries)
          dois (mapv :doi all-articles)

          _ (log/info "ALL-DOIS: " dois)

          existing-dois
          (->> {:select [:doi]
                :from [:articles]
                :where [:in :doi dois]}
               execute!
               (mapv ::doi)
               set)

          _ (log/info "existing-dois: " existing-dois)

          [new-articles existed-articles]
          (reduce (fn [[new exist] article]
                    (if (contains? existing-dois (:doi article))
                      [new (conj exist article)]
                      [(conj new article) exist]))
                  [[] []]
                  all-articles)]

      (when (seq new-articles)
        (execute! {:insert-into :articles
                   :values new-articles
                   :on-conflict [:doi]
                   :do-nothing true}))

      {:new new-articles
       :existed existed-articles})))

(defmethod ig/init-key ::search [_ {:keys [execute!]}]
  (fn [{:keys [q offset limit]}]
    (let [base {:select [:publication_name :creator :cover_date :doi]
                :from [:articles]
                :where (cond-> []
                         q [:or
                            [:ilike :publication_name (str "%" q "%")]
                            [:ilike :keyword (str "%" q "%")]
                            [:ilike :creator (str "%" q "%")]
                            [:ilike :doi (str "%" q "%")]])
                :limit (or limit 20)
                :offset (or offset 0)}]
      {:articles (execute! base)
       :total (-> (assoc base :select [:%count.*])
                  (dissoc :limit :offset)
                  execute!
                  first
                  first
                  second)})))
