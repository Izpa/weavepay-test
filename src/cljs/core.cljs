(ns core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom.client :as rdom]
   [ajax.core :refer [GET]]
   [day8.re-frame.http-fx]
   [clojure.string :as str]))

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

(rf/reg-event-db :add-keyword (fn [db _] (update db :keywords conj "")))
(rf/reg-event-db :remove-keyword (fn [db [_ idx]] (update db :keywords #(vec (concat (subvec % 0 idx) (subvec % (inc idx)))))))
(rf/reg-event-db :update-keyword (fn [db [_ idx val]] (assoc-in db [:keywords idx] val)))

(rf/reg-event-fx
 :do-find
 (fn [{:keys [db]} _]
   (let [words (->> (:keywords db)
                    (filter #(not (str/blank? %)))
                    (map #(str "word=" (js/encodeURIComponent %)))
                    (str/join "&"))]
     {:db (assoc db :find-loading? true)
      :http-xhrio {:method :get
                   :uri (str "/find?" words)
                   :response-format (ajax.core/json-response-format {:keywords? true})
                   :on-success [:find-success]
                   :on-failure [:find-failure]}})))

(rf/reg-event-db
 :find-success
 (fn [db [_ result]]
   (let [normalize (fn [a]
                     {:keyword (:keyword a)
                      :publication_name (:publication_name a)
                      :cover_date (:cover_date a)
                      :creator (:creator a)
                      :doi (:doi a)})
         new (mapv normalize (:new result))
         existed (mapv normalize (:existed result))]
     (-> db
         (assoc :find-results {:new new :existed existed})
         (assoc :find-loading? false)))))

(rf/reg-event-db :find-failure (fn [db _] (assoc db :find-loading? false)))

(rf/reg-sub :keywords (fn [db _] (:keywords db)))
(rf/reg-sub :find-results (fn [db _] (:find-results db)))
(rf/reg-sub :find-loading? (fn [db _] (:find-loading? db)))
(rf/reg-sub :articles-list (fn [db _] (:articles-list db)))
(rf/reg-sub :articles-total (fn [db _] (:articles-total db)))
(rf/reg-sub :articles-filter (fn [db _] (:articles-filter db)))
(rf/reg-sub :articles-page (fn [db _] (:articles-page db)))
(rf/reg-sub :articles-page-input (fn [db _] (:articles-page-input db)))
(rf/reg-sub :articles-per-page (fn [db _] (:articles-per-page db)))

(rf/reg-event-db :update-articles-filter (fn [db [_ val]] (assoc db :articles-filter val)))
(rf/reg-event-db :update-articles-per-page (fn [db [_ val]] (assoc db :articles-per-page val)))
(rf/reg-event-db :update-articles-page-input (fn [db [_ val]] (assoc db :articles-page-input val)))

(rf/reg-event-fx
 :fetch-articles
 (fn [{:keys [db]} [_ page]]
   (let [current-page (:articles-page db)
         new-page (or page current-page)
         per-page (:articles-per-page db)
         offset (* (dec new-page) per-page)
         query (:articles-filter db)]
     {:db (assoc db 
                 :articles-page new-page
                 :articles-page-input (str new-page))
      :http-xhrio {:method :get
                   :uri (str "/articles?q=" (js/encodeURIComponent query)
                             "&offset=" offset "&limit=" per-page)
                   :response-format (ajax.core/json-response-format {:keywords? true})
                   :on-success [:articles-success]}})))

(rf/reg-event-db
 :articles-success
 (fn [db [_ result]]
   (let [{:keys [articles total]} result
         simplify (fn [a] {:title (:articles/publication_name a)
                           :author (:articles/creator a)
                           :date (:articles/cover_date a)
                           :doi (:articles/doi a)})]
     (assoc db :articles-list (mapv simplify articles)
               :articles-total total))))

(rf/reg-event-fx
 :change-page
 (fn [{:keys [db]} [_ new-page]]
   (let [per-page (:articles-per-page db)
         total (:articles-total db)
         max-page (max 1 (js/Math.ceil (/ total per-page)))
         validated-page (cond
                         (string? new-page) (let [parsed (js/parseInt new-page)]
                                             (if (js/isNaN parsed)
                                               (:articles-page db)
                                               (max 1 (min parsed max-page))))
                         (number? new-page) (max 1 (min new-page max-page))
                         :else (:articles-page db))]
     {:dispatch [:fetch-articles validated-page]})))

(defn pagination-controls []
  (let [total @(rf/subscribe [:articles-total])
        current-page @(rf/subscribe [:articles-page])
        per-page @(rf/subscribe [:articles-per-page])
        page-input @(rf/subscribe [:articles-page-input])
        max-page (max 1 (js/Math.ceil (/ total per-page)))]
    [:div.pagination
     [:button 
      {:disabled (= current-page 1)
       :on-click #(rf/dispatch [:change-page 1])}
      "<<"]
     [:button 
      {:disabled (= current-page 1)
       :on-click #(rf/dispatch [:change-page (dec current-page)])}
      "<"]
     [:span " Page "]
     [:input 
      {:type "number"
       :min 1
       :max max-page
       :value page-input
       :on-change #(rf/dispatch [:update-articles-page-input (.. % -target -value)])
       :on-key-down #(when (= (.-key %) "Enter")
                      (rf/dispatch [:change-page page-input]))}]
     [:span (str " of " max-page)]
     [:button 
      {:on-click #(rf/dispatch [:change-page page-input])}
      "Go"]
     [:button 
      {:disabled (= current-page max-page)
       :on-click #(rf/dispatch [:change-page (inc current-page)])}
      ">"]
     [:button 
      {:disabled (= current-page max-page)
       :on-click #(rf/dispatch [:change-page max-page])}
      ">>"]]))

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

(defn spinner []
  [:div.spinner])

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
  (let [loading? @(rf/subscribe [:find-loading?])
        {:keys [new existed]} @(rf/subscribe [:find-results])]
    [:div
     (when loading? [spinner])
     (when (seq new)
       [:details
        [:summary (str "New articles (" (count new) ")")]
        [result-table new]])
     (when (seq existed)
       [:details
        [:summary (str "Existed articles (" (count existed) ")")]
        [result-table existed]])]))

(defn article-table [articles]
  [:table
   [:thead
    [:tr [:th "Publication"] [:th "Author"] [:th "Date"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [title author date doi]} articles]
      ^{:key doi}
      [:tr [:td title] [:td author] [:td date] [:td doi]])]])

(defn article-section []
  (let [articles @(rf/subscribe [:articles-list])
        total @(rf/subscribe [:articles-total])
        f @(rf/subscribe [:articles-filter])
        per @(rf/subscribe [:articles-per-page])]
    [:div
     [:div
      [:label "Filter: "]
      [:input {:type "text"
               :value f
               :on-change #(rf/dispatch [:update-articles-filter (.. % -target -value)])}]
      [:label " Per page: "]
      [:input {:type "number"
               :min 1
               :value per
               :on-change #(rf/dispatch [:update-articles-per-page (js/parseInt (.. % -target -value))])}]
      [:button {:on-click #(rf/dispatch [:fetch-articles 1])} "Apply"]]
     (cond
       (nil? articles) [:p "Loading..."]
       (empty? articles) [:p "No articles in db"]
       :else [article-table articles])
     (when (pos? total)
       [pagination-controls])]))

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
  (rf/dispatch [:fetch-articles nil])
  (mount))
