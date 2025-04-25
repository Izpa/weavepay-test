(ns core
  (:require
   [articles.events]
   [articles.subs]
   [articles.ui :as articles-ui]
   [day8.re-frame.http-fx]
   [find.events]
   [find.keywords-input :as keywords-input]
   [find.result-section :as result-section]
   [find.subs]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom.client :as rdom]))

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:keywords [""]
    :find-results nil
    :find-loading? false
    :articles-list nil
    :articles-total 0
    :articles-filter ""
    :articles-page 1
    :articles-per-page 10
    :articles-page-input "1"}))

(defn app
  []
  [:div
   [keywords-input/keywords-input]
   [result-section/result-section]
   [articles-ui/article-section]])

(defonce root (rdom/create-root (.getElementById js/document "app")))

(defn mount
  []
  (.render root (r/as-element [app])))

(defn init
  []
  (rf/dispatch-sync [:initialize])
  (rf/dispatch [:fetch-articles nil])
  (mount))
