(ns schema
  (:require
   [malli.core :as m]
   [malli.error :as me]
   [malli.registry :as mr]
   [integrant.core :as ig]
   [clojure.string :as str]))

(defn validate
  [schema data]
  (when-not (m/validate schema data)
    (me/humanize (m/explain schema data))))

(def find-request
  [:map
   [:word [:or :string [:vector :string]]]])

(def article-query
  [:map
   [:q {:optional true} :string]
   [:offset {:optional true} [:or :int [:re #"^\d+$"]]]
   [:limit {:optional true} [:or :int [:re #"^\d+$"]]]])

(def scopus-entry
  [:map
   {:closed false}
   [:prism:publicationName :string]
   [:prism:coverDate :string]
   [:dc:creator :string]
   [:prism:doi {:optional true} :string]])

(def scopus-response
  [:vector scopus-entry])

(def internal-article
  [:map
   [:articles/publication_name :string]
   [:articles/cover_date :string]
   [:articles/creator :string]
   [:articles/doi {:optional true} :string]])

(def server-config
  [:map
   [:port pos-int?]
   [:route-handler :any]])

(def config
  [:map
   [:http-server/route-handler :any]
   [:http-server/server :any]
   [:services.db/spec :map]
   [:services.db/ds :any]
   [:services.db/execute! :any]
   [:services.db/execute-honey! :any]])

(def find-request-parameters
  {:query find-request})

(def article-query-parameters
  {:query article-query})

(def find-response
  {:body [:map
          [:new [:vector
                 internal-article]]
          [:existed [:vector internal-article]]]})

(def articles-response
  {:body
   [:map
    [:articles [:vector internal-article]]
    [:total :int]]})

(defmethod ig/init-key :schema/find-request-parameters [_ _] find-request-parameters)
(defmethod ig/init-key :schema/article-query-parameters [_ _] article-query-parameters)
(defmethod ig/init-key :schema/find-response [_ _] find-response)
(defmethod ig/init-key :schema/articles-response [_ _] articles-response)
