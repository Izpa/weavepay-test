(ns user
  (:require
   [clojure-watch.core :refer [start-watch]]
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [clojure.repl.deps :as repl.deps]
   [clojure.string :as str]
   [config :refer [prepare]]
   [integrant.core :as ig]
   [integrant.repl :as igr]
   [shadow.cljs.devtools.api :as shadow]
   [shadow.cljs.devtools.server :as server]))

(defonce system (atom nil))
(defonce deps-state (atom nil))
(defonce watcher (atom nil))

(def aliases [:dev :cljs :test-common :unit-test :integration-test :e2e-test])

(defn log
  [& args]
  (apply println "[user]" args))

(defn read-deps
  []
  (let [deps-file (io/file "deps.edn")]
    (when (.exists deps-file)
      (-> deps-file
          slurp
          edn/read-string))))

(defn collect-deps
  [deps-map]
  (merge
   (:deps deps-map)
   (->> aliases
        (map (fn [alias] (get-in deps-map [:aliases alias :extra-deps])))
        (apply merge))))

(defn safe-add-libs
  [deps]
  (try
    (repl.deps/add-libs {:deps deps})
    (catch Exception e
      (log "Failed to add libs:" deps (.getMessage e)))))

(defn sync-deps!
  []
  (let [deps-map (read-deps)
        current (collect-deps deps-map)
        installed (or @deps-state {})]
    (if (= current installed)
      (log "deps.edn unchanged, no update needed.")
      (do
        (let [missing (apply dissoc current (keys installed))]
          (if (seq missing)
            (do
              (log "Adding missing deps:" (keys missing))
              (safe-add-libs missing))
            (log "No missing deps to add.")))
        (reset! deps-state current)))))

(defn reload-deps!
  []
  (log "Manual reload of deps.edn and aliases")
  (sync-deps!)
  (igr/reset))

(defn start-system!
  [_]
  (log "Starting system...")
  (sync-deps!)
  (integrant.repl/set-prep! #(ig/prep (prepare)))
  (reset! system (igr/go)))

(defn stop-system!
  []
  (log "Stopping system...")
  (when @system
    (try
      (@system)
      (catch Exception e
        (log "Error stopping system:" (.getMessage e)))))
  (igr/halt)
  (reset! system nil))

(defn start-shadow!
  []
  (log "Starting shadow server...")
  (server/start!)
  (shadow/watch :app))

(defn cljs!
  []
  (log "Selecting shadow-cljs app...")
  (shadow/nrepl-select :app))

(defn stop-shadow!
  []
  (log "Stopping shadow server...")
  (shadow/stop-worker :app)
  (server/stop!))

(def watch-paths
  ["resources/common"
   "src/clj"
   "src/cljs"
   "deps.edn"])

(defn stop-watcher!
  []
  (when @watcher
    (log "Stopping watchers...")
    (@watcher)
    (reset! watcher nil)))

(defn start-watcher!
  []
  (stop-watcher!)
  (log "Starting watchers for:" watch-paths)
  (reset! watcher
          (start-watch
           (for [path watch-paths]
             {:path path
              :event-types [:create :modify :delete]
              :bootstrap (fn [p]
                           (log "Watching" p))
              :callback (fn [_ filename]
                          (log "File changed:" filename)
                          (cond
                            (str/ends-with? (str filename) "deps.edn")
                            (do
                              (log "Detected deps.edn change, syncing deps and resetting system...")
                              (reload-deps!))

                            (or (str/starts-with? (str filename) "src/")
                                (str/starts-with? (str filename) "resources/common"))
                            (do
                              (log "Detected code/config change, resetting system...")
                              (igr/reset)))

                          :else
                          (log "Unknown file change detected, ignored."))
              :options {:recursive true}}))))

(defn start-all!
  [_]
  (log "Starting system, watchers and shadow-cljs...")
  (when (nil? @deps-state)
    (reset! deps-state (or (collect-deps (read-deps)) {})))
  (start-system! nil)
  (start-watcher!)
  (start-shadow!))

(defn stop-all!
  []
  (log "Stopping system, watchers and shadow-cljs...")
  (stop-shadow!)
  (stop-watcher!)
  (stop-system!))

(defn reload-all!
  []
  (log "Reloading system, watchers and shadow-cljs...")
  (stop-all!)
  (start-all! nil))

(comment
  (start-all! nil)
  
  (start-system! nil)
  
  (start-watcher!)

  (stop-system!)
  
  (stop-watcher!)

  (start-shadow!)

  (stop-shadow!)

  (cljs!)

  (reload-deps!)

  (reload-all!)

  (igr/reset))
