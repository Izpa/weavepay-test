(ns articles.subs
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub :articles-list (fn [db _] (:articles-list db)))
(rf/reg-sub :articles-total (fn [db _] (:articles-total db)))
(rf/reg-sub :articles-filter (fn [db _] (:articles-filter db)))
(rf/reg-sub :articles-page (fn [db _] (:articles-page db)))
(rf/reg-sub :articles-page-input (fn [db _] (:articles-page-input db)))
(rf/reg-sub :articles-per-page (fn [db _] (:articles-per-page db)))
