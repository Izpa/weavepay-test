(ns find
  (:require
   [re-frame.core :as rf]
   [clojure.string :as str]
   [ajax.core :refer [GET]]))

;; --- Events & Subs ---

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

(rf/reg-event-db :find-success
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

;; --- UI Components ---

(defn spinner [] [:div.spinner])

(defn result-table [articles]
  [:table
   [:thead [:tr [:th "Publication"] [:th "Date"] [:th "Author"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [publication_name cover_date creator doi]} articles]
      ^{:key doi}
      [:tr [:td publication_name] [:td cover_date] [:td creator] [:td doi]])]])

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
