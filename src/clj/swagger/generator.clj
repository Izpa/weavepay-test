(ns swagger.generator
  (:require
   [aero.core :as aero]
   [clojure.java.io :as io]
   [integrant.core :as ig]
   [muuntaja.core :as muuntaja]
   [reitit.coercion.malli]
   [reitit.ring :as ring]
   [reitit.ring.coercion :as coercion]
   [reitit.ring.middleware.muuntaja :as muuntaja-mw]
   [reitit.ring.middleware.parameters :as parameters]
   [reitit.swagger :as swagger]
   [schema]))

(defmethod aero/reader 'ig/ref [_ _ value]
  (ig/ref value))

(defmethod aero/reader 'ig/refset [_ _ value]
  (ig/refset value))

(defn generate-swagger-json!
  [config]
  (let [routes (get config :http-server/route-handler)
        router (ring/router routes
                            {:data {:coercion reitit.coercion.malli/coercion
                                    :muuntaja muuntaja/instance
                                    :middleware [parameters/parameters-middleware
                                                 muuntaja-mw/format-negotiate-middleware
                                                 muuntaja-mw/format-response-middleware
                                                 muuntaja-mw/format-request-middleware
                                                 coercion/coerce-request-middleware
                                                 coercion/coerce-response-middleware]}})
        handler (swagger/create-swagger-handler)
        response (handler {:request-method :get
                           :uri "/swagger.json"
                           :reitit.core/router router})] ; вот ключевой момент!
    (spit "swagger.json" (:body response))
    (println "✅ swagger.json written.")))

(defn -main
  []
  (let [profile (or (some-> (System/getenv "PROFILE") keyword) :default)
        config (-> "config.edn"
                   io/resource
                   (aero/read-config {:profile profile})
                   (ig/load-namespaces))]
    (generate-swagger-json! config)))
