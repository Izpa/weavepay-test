(ns mock.services.scopus
  (:require
   [integrant.core :as ig]
   [test-data :refer [scopus-test-article]]))

(defmethod ig/init-key ::search-keyword [_ _]
  (fn [_]
    [scopus-test-article]))
