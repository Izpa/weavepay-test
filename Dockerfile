# --- Stage 1: Build stage ---
FROM eclipse-temurin:21-jdk AS builder

# Install required packages
RUN apt-get update && \
    apt-get install -y curl unzip rlwrap gnupg git bash tar && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /tmp

# Install latest Clojure CLI (1.12.0.1530)
RUN curl -L -O https://github.com/clojure/brew-install/releases/latest/download/linux-install.sh && \
    chmod +x linux-install.sh && \
    ./linux-install.sh && \
    rm linux-install.sh

# Prepare application source
WORKDIR /app

# Copy dependency configs first
COPY deps.edn .
COPY build.clj .
COPY Makefile .
COPY shadow-cljs.edn .
COPY package.json .
COPY package-lock.json .

# Install deps
RUN clojure -P
RUN npm ci

# Copy sources
COPY src src
COPY resources/common resources/common

# Clean previous JS builds if any
RUN rm -rf resources/common/public/js

# Build frontend (shadow-cljs)
RUN clojure -M:cljs:cljs-opts release prod

# Build backend uberjar
ARG VERSION=local
ENV VERSION=$VERSION
RUN clojure -T:build uber

# --- Stage 2: Final image ---
FROM eclipse-temurin:21-jdk

# Set workdir
WORKDIR /app

# Create shared volume
RUN mkdir -p /app/shared

# Copy artifacts
COPY --from=builder /app/target/app.jar app.jar
COPY --from=builder /app/resources/common/public /app/resources/common/public

ARG VERSION=local
ENV APP_VERSION=$VERSION

# Run application
CMD ["java", "-jar", "app.jar"]
