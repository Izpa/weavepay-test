(ns services.db
  (:require
   [honey.sql :as sql]
   [integrant.core :as ig]
   [migratus.core :as migratus]
   [next.jdbc :as jdbc]
   [taoensso.timbre :as log]))

(defmethod ig/init-key ::spec [_ spec] spec)

(defmethod ig/init-key ::ds [_ db-spec]
  (next.jdbc/get-datasource db-spec))

(defmethod ig/halt-key! ::ds [_ ds]
  (when (instance? java.io.Closeable ds)
    (.close ^java.io.Closeable ds)))

(defmethod ig/init-key :services.db/migrate [_ {:keys [db ds migration-dir] :as config}]
  (let [db-path (:dbname db)]
    (when (and (string? db-path)
               (not (or (.startsWith ^String db-path "/")
                        (.startsWith ^String db-path "mem:")
                        (.contains ^String db-path ";"))))
      (let [dir (-> (java.io.File. ^String db-path) .getParent java.io.File.)]
        (when (and dir (not (.exists dir)))
          (log/info "Creating DB directory:" (.getPath dir))
          (.mkdirs dir)))))

  (migratus/migrate {:store :database
                     :migration-dir migration-dir
                     :db {:connection (jdbc/get-connection ds)
                          :managed-connection? true}})
  config)

(defmethod ig/init-key ::execute! [_ {:keys [ds]}]
  (fn [q]
    (log/info "Query: " q)
    (jdbc/execute! ds q)))

(defmethod ig/init-key ::execute-honey! [_ {:keys [execute!]}]
  (fn [query-map]
    (log/info "Query map: " query-map)
    (->> query-map
         sql/format
         execute!)))
