(ns services.scopus
  (:require
    [cheshire.core :as json]
    [clj-http.client :as http]
    [integrant.core :as ig]
    [malli.core :as m]
    [malli.error :as me]
    [schema :as schema]
    [taoensso.timbre :as log]))

(defn select-fields
  [entry]
  (select-keys entry
               [:prism:publicationName
                :prism:coverDate
                :dc:creator
                :prism:doi]))

(defmethod ig/init-key ::search-keyword [_ {:keys [base-url api-key]}]
  (fn [kwd]
    (log/info "Search in scopus:" kwd)
    (let [{:keys [status body]}
          (http/get base-url
                    {:headers {"Accept" "application/json"}
                     :query-params {:apiKey api-key
                                    :count 10
                                    :httpaccept "application/json"
                                    :query kwd}})]
      (log/info "Scopus response status:" status)
      (when (= status 200)
        (let [entries (-> body
                          (json/parse-string true)
                          (get-in [:search-results :entry]))]
          (if (m/validate schema/scopus-response entries)
            (mapv select-fields entries)
            (log/warn "Invalid scopus entries:" (-> (m/explain schema/scopus-response entries)
                                                    (me/humanize)))))))))

(defmethod ig/init-key ::search-multiple [_ {:keys [search-keyword]}]
  (fn [keywords]
    (->> keywords
         (mapv search-keyword)
         (apply concat))))
