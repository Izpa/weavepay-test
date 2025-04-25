(ns user
  (:require
   [clojure-watch.core :refer [start-watch]]
   [config :refer [prepare]]
   [integrant.core :as ig]
   [integrant.repl :as igr]
   [shadow.cljs.devtools.api :as shadow]
   [shadow.cljs.devtools.server :as server]))

(defn start!
  []
  (integrant.repl/set-prep! #(ig/prep (prepare)))
  (igr/go)
  (start-watch [{:path "."
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

(defn start-shadow! []
  (server/start!)
  (shadow/watch :app))

(defn cljs! []
  (shadow/nrepl-select :app))

(defn stop-shadow! []
  (shadow/stop-worker :app)
  (server/stop!))

(comment
  (start-system!)

  (start-shadow!)

  (cljs!)

  (stop-system!) ;;stop watch

  (stop-shadow!)

  (igr/halt))
