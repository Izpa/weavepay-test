(ns endpoints.common
  (:require
    [ring.util.response :as response]
    [schema :as schema]))


(defn handle-with-validation
  [data schema f]
  (if-let [errors (schema/validate schema data)]
    (-> {:errors errors}
        (response/response)
        (response/status 400)
        (response/header "content-type" "application/json"))
    (-> (f data)
        (response/response)
        (response/header "content-type" "application/json"))))
