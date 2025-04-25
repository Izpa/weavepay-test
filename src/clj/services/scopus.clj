(ns services.scopus
  (:require [clj-http.client :as http]
            [cheshire.core :as json]
            [taoensso.timbre :as log]
            [integrant.core :as ig]))

(defmethod ig/init-key ::search-keyword [_ {:keys [base-url api-key]}]
  (fn [keyword]
    (log/info "Search in scopus: " keyword)
    (let [{:keys [status body] :as response}
          (http/get base-url
                    {:headers {"Accept" "application/json"
                               "User-Agent" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
                               "Referer" "https://www.scopus.com"}
                     :query-params {:apiKey api-key
                                    :count 10
                                    :httpaccept "application/json"
                                    :query keyword}})]
      (log/info "Scopus resonse: " response)
      (when (= status 200)
        (-> body
            (json/parse-string true)
            (get-in [:search-results :entry]))))))

(defmethod ig/init-key ::search-multiple [_ {:keys [search-keyword]}]
  (fn [keywords]
    (reduce (fn [acc kw]
              (assoc acc kw (search-keyword kw)))
            {}
            keywords)))
