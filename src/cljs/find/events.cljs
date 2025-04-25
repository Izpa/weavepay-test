(ns find.events
  (:require
    [ajax.core :refer [json-response-format]]
    [clojure.string :as str]
    [re-frame.core :as rf]))


(rf/reg-event-db :add-keyword
                 (fn [db _] (update db :keywords conj "")))


(rf/reg-event-db :remove-keyword
                 (fn [db [_ idx]] (update db :keywords #(vec (concat (subvec % 0 idx) (subvec % (inc idx)))))))


(rf/reg-event-db :update-keyword
                 (fn [db [_ idx val]] (assoc-in db [:keywords idx] val)))


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
                    :response-format (json-response-format {:keywords? true})
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


(rf/reg-event-db :find-failure
                 (fn [db _] (assoc db :find-loading? false)))
