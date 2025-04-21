(ns http-server
  (:require
   [integrant.core :as ig]
   [org.httpkit.server :as hk-server]
   [taoensso.timbre :as log]))

(defmethod ig/init-key ::handler [_ _]
  #(do
     (log/info "Receive http:" %)
     {:status  200
      :body "foo"
      :headers {"Content-Type" "text/html"}}))

(defmethod ig/init-key ::server [_ {:keys [handler port]}]
  (log/info "Start http-server on port " port)
  (hk-server/run-server handler {:port (->> port
                                            str
                                            (re-find  #"\d+")
                                            Integer/parseInt)}))

(defmethod ig/halt-key! ::server [_ server]
  (log/info "Stopping server" server)
  (when server
    (server :timeout 100)))
