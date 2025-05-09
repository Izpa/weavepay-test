(ns config
  (:gen-class)
  (:require
   [aero.core :as aero]
   [clojure.java.io :as io]
   [clojure.string]
   [integrant.core :as ig]
   [malli.core :as m]
   [schema :as schema]))

(defmethod aero/reader 'ig/ref [_ _ value]
  (ig/ref value))

(defmethod aero/reader 'ig/refset [_ _ value]
  (ig/refset value))

(defn load-config
  ([] (load-config (or (keyword (System/getProperty "Profile"))
                       :default)))
  ([profile]
   (-> "config.edn"
       io/resource
       (aero/read-config {:profile profile}))))

(defn load-namespaces
  [cfg]
  (ig/load-namespaces cfg)
  cfg)

(defn prepare
  ([] (prepare :default))
  ([profile] (-> profile
                 load-config
                 load-namespaces)))

(defn init!
  ([] (init! :default))
  ([profile]
   (let [cfg (prepare profile)]
     (when (System/getenv "VALIDATE_CONFIG")
       (when-not (m/validate schema/config cfg)
         (throw (ex-info "Invalid config" {:errors (m/explain schema/config cfg)}))))
     (ig/init cfg))))

(defn stop!
  [system]
  (ig/halt! system))
