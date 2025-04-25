(ns endpoints.find
  (:require
   [endpoints.common :as common]
   [integrant.core :as ig]
   [schema :as schema]
   [taoensso.timbre :as log]))

(defmethod ig/init-key ::handler [_ {:keys [scopus-find insert-articles!]}]
  (fn [{{:keys [word] :as params} :params :as request}]
    (log/info "Receive http: " request)
    (common/handle-with-validation
     params
     schema/find-request
     (fn [_]
       (-> (if (sequential? word) word [word])
           scopus-find
           insert-articles!)))))
