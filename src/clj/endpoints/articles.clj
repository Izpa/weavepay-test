(ns endpoints.articles
  (:require
   [integrant.core :as ig]
   [taoensso.timbre :as log]
   [cheshire.core :as json]
   [ring.util.response :as response]))

(defmethod ig/init-key ::handler [_ {:keys [search]}]
  (fn [{{:keys [q offset limit]} :params :as request}]
    (log/info "Receive http: " request)
    (-> {:filter filter :q q :offset offset :limit limit}
        search
        (json/generate-string)
        (response/response)
        (response/header "content-type" "application/json"))))

