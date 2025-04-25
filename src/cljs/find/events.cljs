(ns find.events
  (:require
   [ajax.core :refer [json-response-format]]
   [clojure.string :as str]
   [malli.core :as m]
   [re-frame.core :as rf]
   [schema :as schema]))

(rf/reg-event-db :add-keyword
                 (fn [db _] (update db :keywords conj "")))

(rf/reg-event-db :remove-keyword
                 (fn [db [_ idx]] (update db :keywords #(vec (concat (subvec % 0 idx) (subvec % (inc idx)))))))

(rf/reg-event-db :update-keyword
                 (fn [db [_ idx val]] (assoc-in db [:keywords idx] val)))

(rf/reg-event-fx
 :do-find
 (fn [{:keys [db]} _]
   (let [words (remove str/blank? (:keywords db))
         errors (when-not (m/validate schema/find-request {:word (vec words)})
                  "Please enter at least one valid keyword.")]
     (if errors
       {:db (assoc db :find-error errors)}
       {:db (assoc db :find-loading? true :find-error nil)
        :http-xhrio {:method :get
                     :uri (str "/find?" (str/join "&" (map #(str "word=" (js/encodeURIComponent %)) words)))
                     :response-format (json-response-format {:keywords? true})
                     :on-success [:find-success]
                     :on-failure [:find-failure]}}))))

(rf/reg-event-db :find-success
                 (fn [db [_ result]]
                   (-> db
                       (assoc :find-results result)
                       (assoc :find-loading? false))))

(rf/reg-event-db :find-failure
                 (fn [db _] (assoc db :find-loading? false)))
