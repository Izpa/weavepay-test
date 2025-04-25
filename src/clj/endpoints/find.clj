(ns endpoints.find
  (:require
   [integrant.core :as ig]
   [taoensso.timbre :as log]
   [ring.util.response :as response]))

(defmethod ig/init-key ::handler [_ {:keys [scopus-find]}]
  (fn [{{:keys [word]} :params :as request}]
     (log/info "Receive http: " request)
     (-> word
         scopus-find
         (response/response)
         (response/header "content-type" "text/html"))))
