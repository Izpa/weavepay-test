(ns services.db
  (:require
   [honey.sql :as sql]
   [integrant.core :as ig]
   [migratus.core :as migratus]
   [next.jdbc :as jdbc]
   [next.jdbc.connection :as conn]
   [taoensso.timbre :as log])
  (:import
   (com.zaxxer.hikari
    HikariDataSource)))

(defmethod ig/init-key ::spec [_ spec] spec)

(defmethod ig/init-key ::ds [_ db-spec]
  (conn/->pool HikariDataSource db-spec))

(defmethod ig/halt-key! ::ds [_ ds]
  (when (instance? java.io.Closeable ds)
    (.close ^java.io.Closeable ds)))

(defmethod ig/init-key :services.db/migrate [_ {:keys [db] :as config}]
  ;; Ensure the shared directory exists
  (let [db-path (:dbname db)]
    (when (and (string? db-path)
               (not (.startsWith ^String db-path "/"))) ; вот здесь ^String
      (let [dir (-> (java.io.File. ^String db-path) .getParent java.io.File.)] ; и здесь ^String
        (when (and dir (not (.exists dir)))
          (log/info "Creating DB directory:" (.getPath dir))
          (.mkdirs dir)))))
  ;; Log config
  (log/info "Running migratus with config:" config)
  ;; Run migrations
  (migratus/migrate config)
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
