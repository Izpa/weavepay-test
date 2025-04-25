# WeavePay Test Project

This project is a full-stack Clojure/ClojureScript web application that allows users to query and explore scientific publications using the [Scopus API](https://dev.elsevier.com/sc_apis.html). It includes:

- a backend built on `http-kit`, `reitit`, `next.jdbc`, and `malli`
- a frontend written in `re-frame` and compiled via `shadow-cljs`
- a modular architecture with clear separation between application layers

## ✨ Main Features

- RESTful API for fetching articles via keyword search
- Frontend with keyword-based query UI
- SQLite database for local storage of results
- Configurable via environment variables and supports both Docker and local JVM setup

---

## 🛠️ Backend Architecture

**Main Libraries:**

- [`http-kit`](https://github.com/http-kit/http-kit) – HTTP server
- [`reitit`](https://github.com/metosin/reitit) – Routing
- [`malli`](https://github.com/metosin/malli) – Schema validation
- [`next.jdbc`](https://github.com/seancorfield/next-jdbc) – SQL access
- [`aero`](https://github.com/juxt/aero) – Config parsing
- [`integrant`](https://github.com/weavejester/integrant) – Lifecycle management
- [`timbre`](https://github.com/taoensso/timbre) – Logging

**Key Namespaces:**

| Namespace            | Responsibility                                          |
|----------------------|----------------------------------------------------------|
| `app`                | Main entry point when running the built application      |
| `user` (in `dev/`)   | Development namespace, used to start/stop the system     |
| `routes`             | API routing configuration                                |
| `handlers`           | HTTP handlers and API logic                              |
| `db`                 | Database access layer (SQL, migration, connection pool)  |

---

## 💻 Frontend Stack

**Main Libraries:**

- [`re-frame`](https://github.com/day8/re-frame) – Reactive UI framework
- [`shadow-cljs`](https://github.com/thheller/shadow-cljs) – ClojureScript build tool
- [`cljs-ajax`](https://github.com/JulianBirch/cljs-ajax) – HTTP requests
- `reitit` (shared across backend/frontend)

---

## 🚀 Getting Started

### 🔧 Required Environment Variable

| Variable         | Description                           | Required |
|------------------|---------------------------------------|----------|
| `SCOPUS_API_KEY` | API key for accessing Scopus data     | ✅ yes   |
| `APP_NAME`       | Docker container and image name       | optional |
| `SERVER_PORT`    | Port exposed by the web application   | optional (default: `8085`) |

💡 You can store these values in `local/.envrc` and use [`direnv`](https://direnv.net/) to manage them during development.

> You can obtain your Scopus API key [here](https://dev.elsevier.com/sc_apis.html).

---

## 🐳 Running with Docker

### One-time build

```bash
make docker-build
```

### Run with temporary data (no persistence)

```bash
make run-docker
```

### Run with persistent SQLite volume

```bash
make run-docker-persist
```

### Stop or clean container and shared data

```bash
make docker-stop      # stops and removes container
make docker-clean     # also removes files in ./shared/
```

---

## ☕ Running locally (JVM)

### Build and run uberjar

```bash
make build-all
make run-uberjar
```

---

## 🧪 Development Mode

You can start the development system with hot-reloading and REPL integration.

```bash
make run-dev
```

> For REPL-based dev, see `dev/user.clj`, which uses `integrant.repl`.

### Start frontend watcher

```bash
make dev-frontend
```

Or both backend and frontend together (in separate terminals):

```bash
make run-dev
make cljs-watch
```

---

## ✅ Tests & Checks

Run tests and linters with:

```bash
make unit-test
make integration-test
make all-checks
```

Other available tools:

- `make cljstyle-check` / `make cljstyle-fix` – formatting
- `make kibit`, `make kondo`, `make eastwood` – static analysis
- `make cljs-repl` – start ClojureScript REPL
- `make docker-logs`, `make docker-exec` – interact with running container

---

## 🧹 TODO

- Add proper unit and integration tests
- Add TailwindCSS for frontend styling
- Improve `malli` schema consistency and coverage
- Handle API limits and error retries gracefully
- Add pagination and caching for Scopus queries
- Add frontend filtering and sorting capabilities
- Improve logs

---

Made with ❤️ in Clojure.

