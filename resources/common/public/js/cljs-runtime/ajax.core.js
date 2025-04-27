goog.provide('ajax.core');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
/**
 * Call this on the result of `ajax-request` to cancel the request.
 */
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.success_QMARK_ = ajax.util.success_QMARK_;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73681 = arguments.length;
var i__5723__auto___73682 = (0);
while(true){
if((i__5723__auto___73682 < len__5722__auto___73681)){
args__5728__auto__.push((arguments[i__5723__auto___73682]));

var G__73683 = (i__5723__auto___73682 + (1));
i__5723__auto___73682 = G__73683;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.GET.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.GET.cljs$lang$applyTo = (function (seq73363){
var G__73364 = cljs.core.first(seq73363);
var seq73363__$1 = cljs.core.next(seq73363);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73364,seq73363__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73686 = arguments.length;
var i__5723__auto___73687 = (0);
while(true){
if((i__5723__auto___73687 < len__5722__auto___73686)){
args__5728__auto__.push((arguments[i__5723__auto___73687]));

var G__73688 = (i__5723__auto___73687 + (1));
i__5723__auto___73687 = G__73688;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.HEAD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.HEAD.cljs$lang$applyTo = (function (seq73460){
var G__73462 = cljs.core.first(seq73460);
var seq73460__$1 = cljs.core.next(seq73460);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73462,seq73460__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73690 = arguments.length;
var i__5723__auto___73691 = (0);
while(true){
if((i__5723__auto___73691 < len__5722__auto___73690)){
args__5728__auto__.push((arguments[i__5723__auto___73691]));

var G__73692 = (i__5723__auto___73691 + (1));
i__5723__auto___73691 = G__73692;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.POST.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.POST.cljs$lang$applyTo = (function (seq73639){
var G__73640 = cljs.core.first(seq73639);
var seq73639__$1 = cljs.core.next(seq73639);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73640,seq73639__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73694 = arguments.length;
var i__5723__auto___73695 = (0);
while(true){
if((i__5723__auto___73695 < len__5722__auto___73694)){
args__5728__auto__.push((arguments[i__5723__auto___73695]));

var G__73696 = (i__5723__auto___73695 + (1));
i__5723__auto___73695 = G__73696;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.PUT.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PUT.cljs$lang$applyTo = (function (seq73651){
var G__73652 = cljs.core.first(seq73651);
var seq73651__$1 = cljs.core.next(seq73651);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73652,seq73651__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73697 = arguments.length;
var i__5723__auto___73698 = (0);
while(true){
if((i__5723__auto___73698 < len__5722__auto___73697)){
args__5728__auto__.push((arguments[i__5723__auto___73698]));

var G__73699 = (i__5723__auto___73698 + (1));
i__5723__auto___73698 = G__73699;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.DELETE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.DELETE.cljs$lang$applyTo = (function (seq73656){
var G__73657 = cljs.core.first(seq73656);
var seq73656__$1 = cljs.core.next(seq73656);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73657,seq73656__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73700 = arguments.length;
var i__5723__auto___73701 = (0);
while(true){
if((i__5723__auto___73701 < len__5722__auto___73700)){
args__5728__auto__.push((arguments[i__5723__auto___73701]));

var G__73702 = (i__5723__auto___73701 + (1));
i__5723__auto___73701 = G__73702;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq73660){
var G__73661 = cljs.core.first(seq73660);
var seq73660__$1 = cljs.core.next(seq73660);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73661,seq73660__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73703 = arguments.length;
var i__5723__auto___73704 = (0);
while(true){
if((i__5723__auto___73704 < len__5722__auto___73703)){
args__5728__auto__.push((arguments[i__5723__auto___73704]));

var G__73705 = (i__5723__auto___73704 + (1));
i__5723__auto___73704 = G__73705;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.TRACE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.TRACE.cljs$lang$applyTo = (function (seq73663){
var G__73664 = cljs.core.first(seq73663);
var seq73663__$1 = cljs.core.next(seq73663);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73664,seq73663__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73706 = arguments.length;
var i__5723__auto___73707 = (0);
while(true){
if((i__5723__auto___73707 < len__5722__auto___73706)){
args__5728__auto__.push((arguments[i__5723__auto___73707]));

var G__73708 = (i__5723__auto___73707 + (1));
i__5723__auto___73707 = G__73708;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.PATCH.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PATCH.cljs$lang$applyTo = (function (seq73669){
var G__73670 = cljs.core.first(seq73669);
var seq73669__$1 = cljs.core.next(seq73669);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73670,seq73669__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73711 = arguments.length;
var i__5723__auto___73712 = (0);
while(true){
if((i__5723__auto___73712 < len__5722__auto___73711)){
args__5728__auto__.push((arguments[i__5723__auto___73712]));

var G__73713 = (i__5723__auto___73712 + (1));
i__5723__auto___73712 = G__73713;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__72429__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__72429__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__72429__auto__));
}));

(ajax.core.PURGE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PURGE.cljs$lang$applyTo = (function (seq73674){
var G__73675 = cljs.core.first(seq73674);
var seq73674__$1 = cljs.core.next(seq73674);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73675,seq73674__$1);
}));


//# sourceMappingURL=ajax.core.js.map
