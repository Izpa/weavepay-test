(ns build
  (:require
   [clojure.tools.build.api :as b]))

(def lib 'izpa/weavepay-test)
(def version (format "0.0.%s" (b/git-count-revs nil)))
(def basis (b/create-basis {:project "deps.edn"}))

(defn clean
  [_]
  (b/delete {:path "target"}))

(def class-dir "target/classes")
(def uber-file "target/app.jar")

(defn uber
  [{:keys [version]
    :or   {version version}}]
  (println "Cleaning up before build")
  (clean nil)

  (println "Bundling sources")
  (b/copy-dir {:src-dirs   ["src/clj" "src/cljc" "resources"]
               :target-dir class-dir})

  (println "Compiling server. Version:" version)
  (b/compile-clj {:basis      basis
                  :src-dirs   ["src/clj" "src/cljc" "resources"]
                  :ns-compile '[app]
                  :class-dir  class-dir})

  (println "Building uberjar")
  (b/uber {:class-dir class-dir
           :uber-file uber-file
           :basis     basis
           :main      'app}))

(defn noop
  [_])                         ; run to preload mvn deps
