(ns swagger.generator
  (:require
    [integrant.core :as ig]
    [schema]
    [reitit.ring :as ring]
    [reitit.coercion.malli]
    [reitit.ring.coercion :as coercion]
    [reitit.ring.middleware.parameters :as parameters]
    [reitit.ring.middleware.muuntaja :as muuntaja-mw]
    [muuntaja.core :as muuntaja]
    [reitit.swagger :as swagger]
    [aero.core :as aero]
    [clojure.java.io :as io]))

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
                           :reitit.core/router router})] ;; вот ключевой момент!
    (spit "swagger.json" (:body response))
    (println "✅ swagger.json written.")))

(defn -main []
  (let [profile (or (some-> (System/getenv "PROFILE") keyword) :default)
        config (-> "config.edn"
                   io/resource
                   (aero/read-config {:profile profile})
                   (ig/load-namespaces))]
    (generate-swagger-json! config)))
