(ns http-server
  (:require
    [clojure.java.io :as io]
    [integrant.core :as ig]
    [malli.core :as m]
    [muuntaja.core :as muuntaja]
    [org.httpkit.server :as hk-server]
    [reitit.coercion.malli :as malli-coercion]
    [reitit.ring :as ring]
    [reitit.ring.coercion :as coercion]
    [reitit.ring.middleware.muuntaja :as muuntaja-mw]
    [reitit.ring.middleware.parameters :as params]
    [reitit.swagger :as swagger]
    [reitit.swagger-ui :as swagger-ui]
    [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
    [ring.util.response :as response]
    [schema :as schema]
    [taoensso.timbre :as log]))

(defn index-page
  [_]
  (-> (io/resource "public/index.html")
      (slurp)
      (response/response)
      (response/content-type "text/html")))

(def swagger-routes
  [["/swagger.json"
    {:get {:no-doc true
           :swagger {:info {:title "Articles API" :version "0.1"}}
           :handler (swagger/create-swagger-handler)}}]

   ["/swagger/*"
    (swagger-ui/create-swagger-ui-handler {:url "/swagger.json"})]])

(defmethod ig/init-key ::route-handler [_ routes]
  (let [all-routes (concat routes swagger-routes)]
    (ring/ring-handler
      (ring/router all-routes
                   {:data {:coercion malli-coercion/coercion
                           :muuntaja muuntaja/instance
                           :middleware [params/parameters-middleware
                                        muuntaja-mw/format-negotiate-middleware
                                        muuntaja-mw/format-response-middleware
                                        muuntaja-mw/format-request-middleware
                                        coercion/coerce-request-middleware
                                        coercion/coerce-response-middleware]}})
      (constantly (index-page nil)))))

(defmethod response/resource-data :resource
  [^java.net.URL url]
  (let [resource (.openConnection url)
        len (#'ring.util.response/connection-content-length resource)]
    (when (pos? len)
      {:content        (.getInputStream resource)
       :content-length len
       :last-modified  (#'ring.util.response/connection-last-modified resource)})))

(defmethod ig/init-key ::server [_ {:keys [route-handler port] :as config}]
  (when-not (m/validate schema/server-config config)
    (throw (ex-info "Invalid server config" {:errors (m/explain schema/server-config config)})))
  (log/info "Start http-server on port" port)
  (hk-server/run-server
    (wrap-defaults route-handler (assoc api-defaults :static {:resources "public"}))
    {:port port}))

(defmethod ig/halt-key! ::server [_ server]
  (log/info "Stopping server" server)
  (when server
    (server :timeout 100)))
