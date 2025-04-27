(ns main-test
  (:require
   [clojure.test :refer [deftest is use-fixtures]]
   [common :as c]
   [etaoin.api :as e]
   [fixtures :refer [with-server]]))

(use-fixtures :each with-server c/with-driver)

#_(deftest main-page-test
  (c/testing "Check content on main page"
    (e/go c/*driver* "0.0.0.0")
    (e/wait 1)
    (is (e/has-text? c/*driver* "TODO replace me!"))))
