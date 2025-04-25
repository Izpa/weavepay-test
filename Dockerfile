# --- Stage 1: Build stage ---
FROM clojure:openjdk-17 AS builder

RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

WORKDIR /app

# copy deps & configs
COPY deps.edn .
COPY build.clj .
COPY Makefile .
COPY shadow-cljs.edn .
COPY package.json .
COPY package-lock.json .

# install clojure and npm deps
RUN clojure -P && npm ci

# copy sources
COPY src src
COPY resources resources

# clean old JS build if exists
RUN rm -rf resources/public/js

# build production frontend
RUN clojure -M:cljs:cljs-opts release app

# build backend uberjar
ARG VERSION=local
ENV VERSION=$VERSION
RUN clojure -T:build uber

# --- Stage 2: Final image ---
FROM openjdk:11

WORKDIR /

COPY --from=builder /app/target/app.jar app.jar
COPY --from=builder /app/resources/public /app/resources/public

ARG VERSION=local
ENV APP_VERSION=$VERSION

CMD ["java", "-jar", "app.jar"]
