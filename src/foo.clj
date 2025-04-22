(ns foo
  (:require
   [integrant.core :as ig]
   [taoensso.timbre :as log]
   [ring.util.response :as response]))

(defmethod ig/init-key ::handler [_ _]
  #(do
     (log/info "Receive http: " %)
     (-> "foo"
         (response/response)
         (response/header "content-type" "text/html"))))
