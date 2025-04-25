(ns core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom.client :as rdom]
   [ajax.core :refer [GET]]
   [day8.re-frame.http-fx]
   [clojure.string :as str]))

;; Initial state
(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:keywords [""]
    :find-results nil
    :articles-list nil
    :articles-total 0
    :articles-filter ""
    :articles-page 1
    :articles-per-page 10}))

;; Keywords logic
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

;; Find
(rf/reg-event-fx
 :do-find
 (fn [{:keys [db]} _]
   (let [words (->> (:keywords db)
                    (filter #(not (str/blank? %)))
                    (map #(str "word=" (js/encodeURIComponent %)))
                    (str/join "&"))]
     {:http-xhrio {:method :get
                   :uri (str "/find?" words)
                   :response-format (ajax.core/json-response-format {:keywords? true})
                   :on-success [:find-success]}})))

(rf/reg-event-db
 :find-success
 (fn [db [_ result]]
   (let [normalize (fn [a]
                     {:publication_name (:publication_name a)
                      :cover_date (:cover_date a)
                      :creator (:creator a)
                      :doi (:doi a)})
         new (mapv normalize (:new result))
         existed (mapv normalize (:existed result))]
     (assoc db :find-results {:new new :existed existed}))))

;; Subscriptions
(rf/reg-sub :keywords (fn [db _] (:keywords db)))
(rf/reg-sub :find-results (fn [db _] (:find-results db)))
(rf/reg-sub :articles-list (fn [db _] (:articles-list db)))
(rf/reg-sub :articles-total (fn [db _] (:articles-total db)))
(rf/reg-sub :articles-filter (fn [db _] (:articles-filter db)))
(rf/reg-sub :articles-page (fn [db _] (:articles-page db)))
(rf/reg-sub :articles-per-page (fn [db _] (:articles-per-page db)))

;; Filter / Pagination events
(rf/reg-event-db
 :update-articles-filter
 (fn [db [_ val]]
   (assoc db :articles-filter val)))

(rf/reg-event-fx
 :update-articles-page
 (fn [{:keys [db]} [_ val]]
   {:db (assoc db :articles-page val)
    :dispatch [:fetch-articles]}))

(rf/reg-event-fx
 :update-articles-per-page
 (fn [{:keys [db]} [_ val]]
   {:db (assoc db :articles-per-page val)
    :dispatch [:fetch-articles]}))

;; Fetch articles
(rf/reg-event-fx
 :fetch-articles
 (fn [{:keys [db]} _]
   (let [{:keys [articles-filter articles-page articles-per-page]} db
         offset (* (max 0 (dec articles-page)) articles-per-page)]
     {:http-xhrio {:method :get
                   :uri (str "/articles"
                             "?q=" (js/encodeURIComponent articles-filter)
                             "&offset=" offset
                             "&limit=" articles-per-page)
                   :response-format (ajax.core/json-response-format {:keywords? true})
                   :on-success [:articles-success]}})))

(rf/reg-event-db
 :articles-success
 (fn [db [_ result]]
   (let [{:keys [articles total]} result
         simplify-keys (fn [article]
                         {:title (:articles/publication_name article)
                          :author (:articles/creator article)
                          :date (:articles/cover_date article)
                          :doi (:articles/doi article)})
         simplified (mapv simplify-keys articles)]
     (assoc db
            :articles-list simplified
            :articles-total total))))

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
    [:tr [:th "Publication"] [:th "Date"] [:th "Author"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [publication_name cover_date creator doi]} articles]
      ^{:key doi}
      [:tr
       [:td publication_name] [:td cover_date] [:td creator] [:td doi]])]])

(defn result-section []
  (let [{:keys [new existed]} @(rf/subscribe [:find-results])]
    [:div
     (when (seq new)
       [:details {:open true}
        [:summary (str "New articles (" (count new) ")")]
        [result-table new]])
     (when (seq existed)
       [:details {:open false}
        [:summary (str "Existed articles (" (count existed) ")")]
        [result-table existed]])]))

(defn article-table [articles]
  [:table
   [:thead
    [:tr [:th "Title"] [:th "Author"] [:th "Date"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [title author date doi]} articles]
      ^{:key doi}
      [:tr [:td title] [:td author] [:td date] [:td doi]])]])

(defn article-section []
  (let [f @(rf/subscribe [:articles-filter])
        p @(rf/subscribe [:articles-page])
        per @(rf/subscribe [:articles-per-page])
        articles @(rf/subscribe [:articles-list])
        total @(rf/subscribe [:articles-total])]
    [:div
     [:div
      [:label "Filter: "]
      [:input {:type "text" :value f :on-change #(rf/dispatch [:update-articles-filter (.. % -target -value)])}]
      [:label " Per page: "]
      [:input {:type "number" :value per :on-change #(rf/dispatch [:update-articles-per-page (js/parseInt (.. % -target -value))])}]
      [:button {:on-click #(rf/dispatch [:fetch-articles])} "Apply"]]
     (cond
       (nil? articles) [:p "Loading..."]
       (empty? articles) [:p "No articles in db"]
       :else [article-table articles])
     (when total
       (let [max-page (max 1 (js/Math.ceil (/ total per)))]
         [:div
          [:button {:on-click #(rf/dispatch [:update-articles-page 1])} "<<"]
          [:button {:on-click #(rf/dispatch [:update-articles-page (max 1 (dec p))])} "<"]
          [:span (str " Page " p " of " max-page " ")]
          [:button {:on-click #(rf/dispatch [:update-articles-page (min max-page (inc p))])} ">"]
          [:button {:on-click #(rf/dispatch [:update-articles-page max-page])} ">>"]]))]))

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
