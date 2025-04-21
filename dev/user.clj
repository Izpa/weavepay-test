(ns user
  (:require
   [clojure-watch.core :refer [start-watch]]
   [config :refer [prepare]]
   [integrant.core :as ig]
   [integrant.repl :as igr]))

(defn start!
  []
  (integrant.repl/set-prep! #(ig/prep (prepare)))
  (igr/go)
  (start-watch [{:path "src"
                 :event-types [:create
                               :modify
                               :delete]
                 :bootstrap (fn [path]
                              (println "Starting to watch " path))
                 :callback (fn [event filename]
                             (println event filename)
                             (binding [*ns* *ns*]
                               (igr/reset)))
                 :options {:recursive true}}]))

(defonce system (atom nil))

(defn start-system!
  []
  (reset! system (start!)))

(defn stop-watch!
  []
  (when @system (@system)))

(defn stop-system!
  []
  (stop-watch!)
  (igr/halt))

(comment
  (start-system!)

  (stop-system!) ;;stop watch

  (igr/halt))
