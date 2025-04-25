(ns find.keywords-input
  (:require
    [re-frame.core :as rf]))


(defn keywords-input
  []
  (let [ks @(rf/subscribe [:keywords])]
    [:div
     (for [[i k] (map-indexed vector ks)]
       ^{:key i}
       [:div
        [:input {:type "text"
                 :value k
                 :on-change #(rf/dispatch [:update-keyword i (.. % -target -value)])}]
        (when (> (count ks) 1)
          [:button {:on-click #(rf/dispatch [:remove-keyword i])} "-"])])
     [:button {:on-click #(rf/dispatch [:add-keyword])} "+"]
     [:button {:on-click #(rf/dispatch [:do-find])} "Find"]]))
