(ns find.subs
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub :keywords (fn [db _] (:keywords db)))
(rf/reg-sub :find-results (fn [db _] (:find-results db)))
(rf/reg-sub :find-loading? (fn [db _] (:find-loading? db)))
