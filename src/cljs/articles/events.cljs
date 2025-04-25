(ns articles.events
  (:require
    [ajax.core :refer [json-response-format]]
    [schema :as schema]
    [malli.core :as m]
    [re-frame.core :as rf]))


(rf/reg-event-db :update-articles-filter
                 (fn [db [_ val]] (assoc db :articles-filter val)))


(rf/reg-event-db :update-articles-per-page
                 (fn [db [_ val]] (assoc db :articles-per-page val)))


(rf/reg-event-db :update-articles-page-input
                 (fn [db [_ val]] (assoc db :articles-page-input val)))


(rf/reg-event-fx
  :fetch-articles
  (fn [{:keys [db]} [_ page]]
    (let [current-page (:articles-page db)
          new-page (or page current-page)
          per-page (:articles-per-page db)
          offset (* (dec new-page) per-page)
          query (:articles-filter db)

          params {:q query :offset offset :limit per-page}]
      (if-not (m/validate schema/article-query params)
        {:db (assoc db :articles-error "Invalid input")}
        {:db (-> db
                 (assoc :articles-error nil)
                 (assoc :articles-page new-page)
                 (assoc :articles-page-input (str new-page)))
         :http-xhrio {:method :get
                      :uri (str "/articles?q=" (js/encodeURIComponent query)
                                "&offset=" offset "&limit=" per-page)
                      :response-format (json-response-format {:keywords? true})
                      :on-success [:articles-success]}}))))


(rf/reg-event-db
  :articles-success
  (fn [db [_ result]]
    (let [{:keys [articles total]} result
          simplify (fn [a]
                     {:title (:articles/publication_name a)
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
