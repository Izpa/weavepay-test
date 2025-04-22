(ns http-server
  (:require
   [integrant.core :as ig]
   [org.httpkit.server :as hk-server]
   [reitit.ring :as ring]
   [ring.middleware.defaults
    :refer [wrap-defaults api-defaults]]
   [reitit.ring.middleware.parameters :as params]
   [taoensso.timbre :as log]
   [ring.util.response :as response]
   [clojure.java.io :as io]))

(defn index-page [_]
  (-> (io/resource "public/index.html")
      (slurp)
      (response/response)
      (response/content-type "text/html")))

(defmethod ig/init-key ::route-handler [_ routes]
  (ring/ring-handler
   (ring/router routes)
   (constantly (index-page nil)) ;; fallback
    {:middleware [params/parameters-middleware]}))

(defmethod response/resource-data :resource
  [^java.net.URL url]
  (let [resource (.openConnection url)
        len (#'ring.util.response/connection-content-length resource)]
    (when (pos? len)
      {:content        (.getInputStream resource)
       :content-length len
       :last-modified  (#'ring.util.response/connection-last-modified resource)})))

(defmethod ig/init-key ::server [_ {:keys [route-handler port]}]
  (log/info "Start http-server on port " port)
  (hk-server/run-server (wrap-defaults
                         route-handler
                         (assoc api-defaults :static {:resources "public"}))
                        {:port (->> port
                                    str
                                    (re-find  #"\d+")
                                    Integer/parseInt)}))

(defmethod ig/halt-key! ::server [_ server]
  (log/info "Stopping server" server)
  (when server
    (server :timeout 100)))
