(ns find.keywords-input
  (:require
   [re-frame.core :as rf]))

(defn keywords-input
  []
  (let [ks @(rf/subscribe [:keywords])
        err @(rf/subscribe [:find-error])]
    [:div
     (for [[i k] (map-indexed vector ks)]
       ^{:key i}
       [:div
        [:input {:type "text"
                 :value k
                 :on-change #(rf/dispatch [:update-keyword i (.. % -target -value)])}]
        (when (> (count ks) 1)
          [:button {:on-click #(rf/dispatch [:remove-keyword i])} "-"])])
     (when err [:p {:style {:color "red"}} err])
     [:button {:on-click #(rf/dispatch [:add-keyword])} "+"]
     [:button {:on-click #(rf/dispatch [:do-find])} "Find"]]))
