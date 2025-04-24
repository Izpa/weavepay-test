(ns core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom.client :as rdom]
   [ajax.core :refer [GET]]
   [day8.re-frame.http-fx]))

;; Event handlers
(rf/reg-event-db
 :initialize
 (fn [_ _] {:message "Nothing yet"}))

(rf/reg-event-fx
 :fetch-foo
 (fn [{:keys [db]} _]
   {:http-xhrio {:method :get
                 :uri "/foo"
                 :response-format (ajax.core/text-response-format)
                 :on-success [:foo-success]
                 :on-failure [:foo-fail]}}))

(rf/reg-event-db
 :foo-success
 (fn [db [_ msg]]
   (assoc db :message msg)))

(rf/reg-sub
 :message
 (fn [db _] (:message db)))

;; UI
(defn app []
  [:div
   [:button {:on-click #(rf/dispatch [:fetch-foo])} "Get Foo"]
   [:p @(rf/subscribe [:message])]])

;; Mounting
(defonce root (rdom/create-root (.getElementById js/document "app")))

(defn mount []
  (.render root (r/as-element [app])))

(defn init []
  (rf/dispatch-sync [:initialize])
  (mount))
