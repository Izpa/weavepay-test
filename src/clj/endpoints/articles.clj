(ns endpoints.articles
  (:require
    [cheshire.core :as json]
    [integrant.core :as ig]
    [ring.util.response :as response]
    [taoensso.timbre :as log]))


(defmethod ig/init-key ::handler [_ {:keys [search]}]
  (fn [{{:keys [q offset limit]} :params :as request}]
    (log/info "Receive http: " request)
    (-> {:filter filter :q q :offset offset :limit limit}
        search
        (json/generate-string)
        (response/response)
        (response/header "content-type" "application/json"))))
