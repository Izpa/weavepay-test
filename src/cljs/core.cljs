(ns core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom.client :as rdom]
   [ajax.core :refer [GET]]
   [day8.re-frame.http-fx])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;; --- DB ---
(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:keywords [""],
    :find-result nil,
    :article-query {:q "" :limit 10 :offset 0},
    :article-result {:articles [] :total 0}}))

;; --- FIND ---

(rf/reg-event-db
 :update-keyword
 (fn [db [_ idx value]]
   (assoc-in db [:keywords idx] value)))

(rf/reg-event-db
 :add-keyword
 (fn [db _]
   (update db :keywords conj "")))

(rf/reg-event-db
 :remove-keyword
 (fn [db [_ idx]]
   (update db :keywords #(vec (concat (subvec % 0 idx) (subvec % (inc idx)))))))

(rf/reg-event-fx
 :do-find
 (fn [{:keys [db]} _]
   {:http-xhrio {:method :get
                 :uri (str "/find?" (->> (:keywords db)
                                           (remove empty?)
                                           (map #(str "word=" %))
                                           (interpose "&")
                                           (apply str)))
                 :response-format (ajax.core/json-response-format {:keywords? true})
                 :on-success [:find-success]}}))

(rf/reg-event-db
 :find-success
 (fn [db [_ data]]
   (assoc db :find-result data)))

;; --- ARTICLES ---

(rf/reg-event-db
 :set-article-query
 (fn [db [_ k v]]
   (assoc-in db [:article-query k] v)))

(rf/reg-event-fx
 :fetch-articles
 (fn [{:keys [db]} _]
   {:http-xhrio {:method :get
                 :uri "/articles"
                 :params (:article-query db)
                 :response-format (ajax.core/json-response-format {:keywords? true})
                 :on-success [:articles-success]}}))

(rf/reg-event-db
 :articles-success
 (fn [db [_ result]]
   (assoc db :article-result result)))

;; --- SUBS ---

(rf/reg-sub :keywords (fn [db _] (:keywords db)))
(rf/reg-sub :find-result (fn [db _] (:find-result db)))
(rf/reg-sub :article-query (fn [db _] (:article-query db)))
(rf/reg-sub :article-result (fn [db _] (:article-result db)))

;; --- UI ---

(defn keywords-input []
  (let [ks @(rf/subscribe [:keywords])]
    [:div
     (into [:div]
           (map-indexed
            (fn [i k]
              [:div {:key i}
               [:input {:type "text"
                        :value k
                        :on-change #(rf/dispatch [:update-keyword i (.. % -target -value)])}]
               (when (> (count ks) 1)
                 [:button {:on-click #(rf/dispatch [:remove-keyword i])} "-"])]
              )
            ks)) ; <-- закрытие map-indexed
     [:button {:on-click #(rf/dispatch [:add-keyword])} "+"]
     [:button {:on-click #(rf/dispatch [:do-find])} "Find"]]))

(defn result-table [articles]
  [:table
   [:thead
    [:tr [:th "Title"] [:th "Author"] [:th "Date"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [title author date doi]} articles]
      [:tr {:key doi}
       [:td title] [:td author] [:td date] [:td doi]])]])

(defn find-results []
  (let [{:keys [new existed]} @(rf/subscribe [:find-result])]
    [:div
     [:details
      [:summary (str "New Articles (" (count new) ")")]
      [result-table new]]
     [:details
      [:summary (str "Existed Articles (" (count existed) ")")]
      [result-table existed]]]))

(defn article-controls []
  (let [{:keys [q limit offset]} @(rf/subscribe [:article-query])
        {:keys [total]} @(rf/subscribe [:article-result])
        page (quot offset limit)
        pages (int (Math/ceil (/ total limit)))]
    [:div
     [:input {:placeholder "Search..."
              :value q
              :on-change #(rf/dispatch [:set-article-query :q (.. % -target -value)])}]
     [:input {:type "number"
              :min 1
              :value limit
              :on-change #(rf/dispatch [:set-article-query :limit (js/parseInt (.. % -target -value))])}]
     [:button {:on-click #(rf/dispatch [:set-article-query :offset 0])} "<<"]
     [:button {:on-click #(rf/dispatch [:set-article-query :offset (max 0 (- offset limit))])} "<"]
     (for [i (range pages)]
       [:button {:key i
                 :on-click #(rf/dispatch [:set-article-query :offset (* i limit)])} (inc i)])
     [:button {:on-click #(rf/dispatch [:set-article-query :offset (min (* (dec pages) limit) (+ offset limit))])} ">"]
     [:button {:on-click #(rf/dispatch [:set-article-query :offset (* (dec pages) limit)])} ">>"]
     [:button {:on-click #(rf/dispatch [:fetch-articles])} "Search"]]))

(defn article-list []
  (let [{:keys [articles]} @(rf/subscribe [:article-result])]
    [result-table articles]))

(defn app []
  [:div
   [:h1 "Scopus Search"]
   [keywords-input]
   [find-results]
   [:hr]
   [:h2 "Article Explorer"]
   [article-controls]
   [article-list]])

;; --- Mount ---
(defonce root (rdom/create-root (.getElementById js/document "app")))

(defn mount []
  (.render root (r/as-element [app])))

(defn init []
  (rf/dispatch-sync [:initialize])
  (mount))
