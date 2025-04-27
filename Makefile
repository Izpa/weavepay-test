APP_NAME ?= app
SERVER_PORT ?= 8085
VERSION ?= $(shell git rev-parse --short HEAD)

DOCKER_RUN_OPTS = -e SCOPUS_API_KEY=${SCOPUS_API_KEY} \
                  -e SERVER_PORT=${SERVER_PORT} \
                  -p ${SERVER_PORT}:${SERVER_PORT} \
                  --name ${APP_NAME} -d ${APP_NAME}:${VERSION}

.PHONY: unit-test
unit-test:
	clojure -M:run-test:test-common:unit-test unit-test

.PHONY: integration-test
integration-test:
	clojure -M:run-test:test-common:integration-test integration

.PHONY: e2e-test
e2e-test:
	clojure -M:run-test:test-common:e2e-test e2e

.PHONY: kibit
kibit:
	clojure -M:unit-test:integration-test:e2e-test:test-common:cljs:kibit --paths src,test

.PHONY: kondo
kondo:
	clojure -M:unit-test:integration-test:e2e-test:test-common:cljs:kondo --lint src test --parallel --cache false

.PHONY: eastwood
eastwood:
	clojure -M:unit-test:integration-test:e2e-test:test-common:cljs:eastwood

.PHONY: cljstyle-check
cljstyle-check:
	cljstyle check

.PHONY: cljstyle-fix
cljstyle-fix:
	cljstyle fix

.PHONY: build-uberjar
build-uberjar:
	clojure -T:build uber

.PHONY: run-uberjar
run-uberjar:
	java -jar target/app.jar

.PHONY: run-dev
run-dev:
	clj -M:dev:cljs:test-common:unit-test:integration-test:e2e-test -X user/run-system!

.PHONY: clj-deps
clj-deps:
	clj -X:deps prep 

.PHONY: all-checks
all-checks: cljstyle-check kibit kondo eastwood unit-test integration-test e2e-test

.PHONY: npm-install
npm-install:
	npm install

.PHONY: cljs-build
cljs-build:
	clojure -M:cljs:cljs-opts release app

.PHONY: cljs-watch
cljs-watch:
	clojure -M:cljs:cljs-opts watch app

.PHONY: cljs-repl
cljs-repl:
	clojure -M:cljs:cljs-opts cljs-repl app

.PHONY: dev-frontend
dev-frontend: npm-install cljs-watch

.PHONY: dev-full
dev-full: npm-install
	$(MAKE) run-dev

.PHONY: build-all
build-all: npm-install cljs-build build-uberjar

.PHONY: docker-build
docker-build:
	docker build --build-arg VERSION=${VERSION} -t ${APP_NAME}:${VERSION} .

.PHONY: run-docker
run-docker:
	docker run ${DOCKER_RUN_OPTS}

.PHONY: run-docker-persist
run-docker-persist:
	@mkdir -p shared
	docker run -v $(shell pwd)/shared:/app/shared ${DOCKER_RUN_OPTS}

.PHONY: docker-stop
docker-stop:
	@docker stop ${APP_NAME} || true
	@docker rm ${APP_NAME} || true

.PHONY: docker-clean
docker-clean: docker-stop
	@echo "Cleaning shared volume..."
	@rm -rf ./shared/*
	@mkdir -p shared

.PHONY: docker-logs
docker-logs:
	docker logs -f ${APP_NAME}

.PHONY: docker-exec
docker-exec:
	docker exec -it ${APP_NAME} /bin/bash
