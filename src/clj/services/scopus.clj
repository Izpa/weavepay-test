(ns services.scopus
  (:require [clj-http.client :as http]
            [cheshire.core :as json]
            [taoensso.timbre :as log]
            [integrant.core :as ig]))

(defn select-fields [entry]
  (select-keys entry
               [:prism:publicationName
                :prism:coverDate
                :dc:creator
                :prism:doi]))

(defmethod ig/init-key ::search-keyword [_ {:keys [base-url api-key]}]
  (fn [kwd]
    (log/info "Search in scopus: " kwd)
    (let [{:keys [status body] :as response}
          (http/get base-url
                    {:headers {"Accept" "application/json"}
                     :query-params {:apiKey api-key
                                    :count 10
                                    :httpaccept "application/json"
                                    :query kwd}})]
      (log/info "Scopus resonse: " response)
      (when (= status 200)
        (-> body
            (json/parse-string true)
            (get-in [:search-results :entry])
            (->> (mapv select-fields)))))))

(defmethod ig/init-key ::search-multiple [_ {:keys [search-keyword]}]
  (fn [keywords]
    (->> keywords
         (mapv search-keyword)
         (apply concat))))
