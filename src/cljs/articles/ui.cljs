(ns articles.ui
  (:require
   [re-frame.core :as rf]))

(defn pagination-controls
  []
  (let [total @(rf/subscribe [:articles-total])
        current-page @(rf/subscribe [:articles-page])
        per-page @(rf/subscribe [:articles-per-page])
        page-input @(rf/subscribe [:articles-page-input])
        max-page (max 1 (js/Math.ceil (/ total per-page)))]
    [:div.pagination
     [:button {:disabled (= current-page 1)
               :on-click #(rf/dispatch [:change-page 1])} "<<"]
     [:button {:disabled (= current-page 1)
               :on-click #(rf/dispatch [:change-page (dec current-page)])} "<"]
     [:span " Page "]
     [:input {:type "number" :min 1 :max max-page :value page-input
              :on-change #(rf/dispatch [:update-articles-page-input (.. % -target -value)])
              :on-key-down #(when (= (.-key %) "Enter")
                              (rf/dispatch [:change-page page-input]))}]
     [:span (str " of " max-page)]
     [:button {:on-click #(rf/dispatch [:change-page page-input])} "Go"]
     [:button {:disabled (= current-page max-page)
               :on-click #(rf/dispatch [:change-page (inc current-page)])} ">"]
     [:button {:disabled (= current-page max-page)
               :on-click #(rf/dispatch [:change-page max-page])} ">>"]]))

(defn article-table
  [articles]
  [:table
   [:thead [:tr [:th "Publication"] [:th "Author"] [:th "Date"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [title author date doi]} articles]
      ^{:key doi}
      [:tr [:td title] [:td author] [:td date] [:td doi]])]])

(defn article-section
  []
  (let [articles @(rf/subscribe [:articles-list])
        total @(rf/subscribe [:articles-total])
        f @(rf/subscribe [:articles-filter])
        per @(rf/subscribe [:articles-per-page])
        err @(rf/subscribe [:articles-error])]
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
      [:button {:on-click #(rf/dispatch [:fetch-articles 1])} "Apply"]
      (when err
        [:p {:style {:color "red"}} err])]
     (cond
       (nil? articles) [:p "No articles for your query..."]
       (empty? articles) [:p "No articles in db"]
       :else [article-table articles])
     (when (pos? total)
       [pagination-controls])]))
