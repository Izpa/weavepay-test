(ns endpoints.find
  (:require
   [integrant.core :as ig]
   [taoensso.timbre :as log]
   [cheshire.core :as json]
   [ring.util.response :as response]))

(defmethod ig/init-key ::handler [_ {:keys [scopus-find insert-articles!]}]
  (fn [{{:keys [word]} :params :as request}]
    (log/info "Receive http: " request)
    (-> (if (sequential? word) word [word])
        scopus-find
        insert-articles!
        (json/generate-string)
        (response/response)
        (response/header "content-type" "application/json"))))
