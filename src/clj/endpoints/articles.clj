(ns endpoints.articles
  (:require
   [endpoints.common :as common]
   [integrant.core :as ig]
   [schema :as schema]
   [taoensso.timbre :as log]))

(defmethod ig/init-key ::handler [_ {:keys [search]}]
  (fn [{{:keys [q offset limit] :as params} :params :as request}]
    (log/info "Receive http: " request)
    (common/handle-with-validation
     params
     schema/article-query
     (fn [_]
       (search {:filter filter :q q :offset offset :limit limit})))))
