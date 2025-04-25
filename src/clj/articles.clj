(ns articles
  (:require [integrant.core :as ig]))

(defmethod ig/init-key ::insert! [_ {:keys [execute!]}]
  (fn [entries]
    (execute! {:insert-into :articles
               :values (mapcat (fn [[kwd publications]]
                                 (map (fn [{:keys [prism:publicationName
                                                   prism:coverDate
                                                   dc:creator
                                                   prism:doi]}]
                                        {:keyword kwd
                                         :publication_name prism:publicationName
                                         :cover_date prism:coverDate
                                         :creator dc:creator
                                         :doi prism:doi})
                                      publications))
                               entries)
               :on-conflict [:doi]
               :do-nothing true})))
