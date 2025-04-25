(ns find.result-section
  (:require
    [re-frame.core :as rf]))


(defn spinner
  []
  [:div.spinner])


(defn result-table
  [articles]
  [:table
   [:thead [:tr [:th "Publication"] [:th "Date"] [:th "Author"] [:th "DOI"]]]
   [:tbody
    (for [{:keys [publication_name cover_date creator doi]} articles]
      ^{:key doi}
      [:tr [:td publication_name] [:td cover_date] [:td creator] [:td doi]])]])


(defn result-section
  []
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
