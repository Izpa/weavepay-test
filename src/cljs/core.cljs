(ns core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom.client :as rdom]
   [ajax.core :refer [GET]]
   [day8.re-frame.http-fx]
   [clojure.string :as str]))

;; Event handlers
(rf/reg-event-db
 :initialize
 (fn [_ _] {:keywords [""], :find-results nil, :filter "", :page 1, :per-page 10, :articles nil}))

(rf/reg-event-db
 :add-keyword
 (fn [db _]
   (update db :keywords conj "")))

(rf/reg-event-db
 :remove-keyword
 (fn [db [_ idx]]
   (update db :keywords #(vec (concat (subvec % 0 idx) (subvec % (inc idx)))))))

(rf/reg-event-db
 :update-keyword
 (fn [db [_ idx val]]
   (assoc-in db [:keywords idx] val)))

(rf/reg-event-fx
 :do-find
 (fn [{:keys [db]} _]
   (let [words (get db :keywords)
         query-params (->> words
                           (filter #(not (str/blank? %)))
                           (map #(str "word=" (js/encodeURIComponent %)))
                           (str/join "&"))]
     {:http-xhrio {:method :get
                   :uri (str "/find?" query-params)
                   :response-format (ajax.core/json-response-format {:keywords? true})
                   :on-success [:find-success]}})))

(rf/reg-event-db
 :find-success
 (fn [db [_ result]]
   (assoc db :find-results {:new (get result 0) :existed (get result 1)})))

(rf/reg-event-db
 :update-filter
 (fn [db [_ val]]
   (assoc db :filter val)))

(rf/reg-event-db
 :update-page
 (fn [db [_ page]]
   (assoc db :page page)))

(rf/reg-event-db
 :update-per-page
 (fn [db [_ val]]
   (assoc db :per-page val)))

(rf/reg-event-fx
 :fetch-articles
 (fn [{:keys [db]} _]
   (let [q (get db :filter)
         page (get db :page)
         per-page (get db :per-page)]
     {:http-xhrio {:method :get
                   :uri (str "/articles?q=" (js/encodeURIComponent q) "&page=" page "&per_page=" per-page)
                   :response-format (ajax.core/json-response-format {:keywords? true})
                   :on-success [:articles-success]}})))

(rf/reg-event-db
 :articles-success
 (fn [db [_ result]]
   (assoc db :articles result)))

(rf/reg-sub
 :keywords (fn [db _] (:keywords db)))
(rf/reg-sub
 :find-results (fn [db _] (:find-results db)))
(rf/reg-sub
 :filter (fn [db _] (:filter db)))
(rf/reg-sub
 :page (fn [db _] (:page db)))
(rf/reg-sub
 :per-page (fn [db _] (:per-page db)))
(rf/reg-sub
 :articles (fn [db _] (:articles db)))

;; UI
(defn keywords-input []
  (let [ks @(rf/subscribe [:keywords])]
    [:div
     (for [[i k] (map-indexed vector ks)]
       ^{:key i}
       [:div
        [:input {:type "text" :value k :on-change #(rf/dispatch [:update-keyword i (.. % -target -value)])}]
        (when (> (count ks) 1)
          [:button {:on-click #(rf/dispatch [:remove-keyword i])} "-"])])
     [:button {:on-click #(rf/dispatch [:add-keyword])} "+"]
     [:button {:on-click #(rf/dispatch [:do-find])} "Find"]]))

(defn result-table [articles]
  [:table
   [:thead
    [:tr [:th "Keyword"] [:th "Publication"] [:th "Date"] [:th "Author"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [keyword publication_name cover_date creator doi]} articles]
      ^{:key doi}
      [:tr
       [:td keyword] [:td publication_name] [:td cover_date] [:td creator] [:td doi]])]])

(defn result-section []
  (let [{:keys [new existed]} @(rf/subscribe [:find-results])]
    [:div
     (when new
       [:details {:open true}
        [:summary (str "New articles (" (count new) ")")]
        [result-table new]])
     (when existed
       [:details {:open false}
        [:summary (str "Existed articles (" (count existed) ")")]
        [result-table existed]])]))

(defn article-table [articles]
  [:table
   [:thead
    [:tr [:th "Title"] [:th "Author"] [:th "Date"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [title author date doi]} (:articles articles)]
      ^{:key doi}
      [:tr [:td title] [:td author] [:td date] [:td doi]])]])

(defn article-section []
  (let [f @(rf/subscribe [:filter])
        p @(rf/subscribe [:page])
        per @(rf/subscribe [:per-page])
        articles @(rf/subscribe [:articles])
        total (:total articles)]
    [:div
     [:div
      [:label "Filter: "]
      [:input {:type "text" :value f :on-change #(rf/dispatch [:update-filter (.. % -target -value)])}]
      [:label " Per page: "]
      [:input {:type "number" :value per :on-change #(rf/dispatch [:update-per-page (int (.. % -target -value))])}]
      [:button {:on-click #(rf/dispatch [:fetch-articles])} "Apply"]]
     (cond
       (nil? articles) [:p "Loading..."]
       (empty? (:articles articles)) [:p "No articles in db"]
       :else [article-table articles])
     (when total
       [:div
        [:button {:on-click #(rf/dispatch [:update-page 1])} "<<"]
        [:button {:on-click #(rf/dispatch [:update-page (dec p)])} "<"]
        [:span (str " Page " p " ")]
        [:button {:on-click #(rf/dispatch [:update-page (inc p)])} ">"]
        [:button {:on-click #(rf/dispatch [:update-page (int (Math/ceil (/ total per)))])} ">>"]])]))

(defn app []
  [:div
   [keywords-input]
   [result-section]
   [article-section]])

(defonce root (rdom/create-root (.getElementById js/document "app")))

(defn mount []
  (.render root (r/as-element [app])))

(defn init []
  (rf/dispatch-sync [:initialize])
  (rf/dispatch [:fetch-articles])
  (mount))
