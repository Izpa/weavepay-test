(ns main-test
  (:require
   [clojure.test :refer [deftest is use-fixtures]]
   [common :as c]
   [etaoin.api :as e]
   [fixtures :refer [with-server]]
   [test-utils :refer [server-address]]))

(use-fixtures :each with-server c/with-driver)

(deftest main-page-test
  (c/testing "Check content on main page"
    (e/go c/*driver* server-address)
    (e/wait 1)
    (is (e/has-text? c/*driver* "Filter"))
    (is (not (e/has-text? c/*driver* "foo")))))
