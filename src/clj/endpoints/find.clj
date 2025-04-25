(ns endpoints.find
  (:require
    [cheshire.core :as json]
    [integrant.core :as ig]
    [ring.util.response :as response]
    [taoensso.timbre :as log]))


(defmethod ig/init-key ::handler [_ {:keys [scopus-find insert-articles!]}]
  (fn [{{:keys [word]} :params :as request}]
    (log/info "Receive http: " request)
    (-> (if (sequential? word) word [word])
        scopus-find
        insert-articles!
        (json/generate-string)
        (response/response)
        (response/header "content-type" "application/json"))))
