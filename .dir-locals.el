((nil . ((cider-clojure-cli-aliases        . ":dev:test-common:unit-test:integration-test:e2e-test:cljs")
         (cider-preferred-build-tool       . clojure-cli)
         (cider-default-cljs-repl          . custom)
         (cider-custom-cljs-repl-init-form . "(do (user/start-shadow!) (user/cljs!))")
         (eval . (progn
                   (make-variable-buffer-local 'cider-jack-in-nrepl-middlewares)
                   (add-to-list 'cider-jack-in-nrepl-middlewares "shadow.cljs.devtools.server.nrepl/middleware"))))))
