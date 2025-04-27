(ns fixtures
  (:require
   [config]
   [integrant.core :as ig]
   [shadow.cljs.devtools.api :as shadow-cljs]
   [taoensso.timbre :as log]))

(defn with-server
  [f]
  (let [_ (shadow-cljs/release :test)
        system (config/init! :test)]
    (try (f)
         (catch Exception e
           (log/error "Exception on test: " (ex-message e))
           (log/error (ex-data e)))
         (finally (ig/halt! system)))))
