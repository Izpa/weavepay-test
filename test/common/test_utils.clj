(ns test-utils
  (:require
   [config :refer [load-config load-namespaces]]
   [integrant.core :as ig]))

(def test-config
  (-> :test
      load-config
      load-namespaces))

(defn ig-init-and-get-key
  [k]
  (-> test-config
      (ig/init [k])
      k))

(def server-address
  (str "http://0.0.0.0:"
       (get-in test-config [:http-server/server :port])))
