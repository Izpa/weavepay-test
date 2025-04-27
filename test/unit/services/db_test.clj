(ns services.db-test
  (:require
   [clojure.test :refer [deftest testing is]]
   [test-utils :as utils]))

(def sut-execute-honey!
  (utils/ig-init-and-get-key :services.db/execute-honey!))

(deftest execute-honey!-test
  (testing "simple query"
    (is (= [{:? 1}] (sut-execute-honey! {:select 1})))))
