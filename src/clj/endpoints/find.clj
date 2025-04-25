(ns endpoints.find
  (:require
   [integrant.core :as ig]
   [taoensso.timbre :as log]
   [ring.util.response :as response]))

(defmethod ig/init-key ::handler [_ {:keys [scopus-find insert-articles!]}]
  (fn [{{:keys [word]} :params :as request}]
     (log/info "Receive http: " request)
     (-> word
         scopus-find
         insert-articles!
         (response/response)
         (response/header "content-type" "text/html"))))
