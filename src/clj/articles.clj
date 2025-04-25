(ns articles
  (:require [integrant.core :as ig]
            [clojure.string :as str]
            [taoensso.timbre :as log]
            [clojure.set :as s]))

(defmethod ig/init-key ::insert! [_ {:keys [execute!]}]
  (fn [entries]
    (log/info "Entires: " entries)
    (let [all-articles
          (map #(s/rename-keys % {:prism:publicationName :publication_name
                                  :prism:coverDate       :cover_date
                                  :dc:creator            :creator
                                  :prism:doi             :doi})
               entries)

          dois (mapv :doi all-articles)

          existing-dois
          (->> {:select [:doi]
                :from [:articles]
                :where [:in :doi dois]}
               execute!
               (mapv ::doi)
               set)

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
                         q (conj [:or
                                  [:like [:lower :publication_name] (str "%" (str/lower-case q) "%")]
                                  [:like [:lower :creator] (str "%" (str/lower-case q) "%")]
                                  [:like [:lower :doi] (str "%" (str/lower-case q) "%")]]))
                :limit (or limit 20)
                :offset (or offset 0)}]
      {:articles (execute! base)
       :total (-> (assoc base :select [:%count.*])
                  (dissoc :limit :offset)
                  execute!
                  first
                  first
                  second)})))
