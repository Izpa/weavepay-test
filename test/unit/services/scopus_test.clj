(ns services.scopus-test
  (:require
   [clojure.test :refer [deftest testing is]]
   [test-data :refer [scopus-test-article]]
   [test-utils :as utils]))

(def sut-search-multiple
  (utils/ig-init-and-get-key :services.scopus/search-multiple))

(deftest search-multiple-test
  (testing "search one keyword"
    (is (= [scopus-test-article]
           (sut-search-multiple [:foo]))))
  (testing "search many keyword"
    (is (= [scopus-test-article
            scopus-test-article]
           (sut-search-multiple [:foo
                                 :bar])))))
