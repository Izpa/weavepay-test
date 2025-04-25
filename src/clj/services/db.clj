(ns services.db
  (:require [integrant.core :as ig]
            [next.jdbc.connection :as conn]
            [taoensso.timbre :as log]
            [next.jdbc :as jdbc]
            [honey.sql :as sql]
            [migratus.core :as migratus])
  (:import [com.zaxxer.hikari HikariDataSource]))

(defmethod ig/init-key ::spec [_ spec] spec)

(defmethod ig/init-key ::ds [_ db-spec]
  (conn/->pool HikariDataSource db-spec))

(defmethod ig/halt-key! ::ds [_ ds]
  (when (instance? java.io.Closeable ds)
    (.close ^java.io.Closeable ds)))

(defmethod ig/init-key ::migrate [_ config]
  (migratus/migrate config)
  config)

(defmethod ig/init-key ::execute! [_ {:keys [ds]}]
  (fn [q]
    (log/info "Query: " q)
    (jdbc/execute! ds q)))

(defmethod ig/init-key ::execute-honey! [_ {:keys [execute!]}]
  (fn [query-map]
    (log/info "Query map: " query-map)
    (-> query-map
        sql/format
        execute!)))
