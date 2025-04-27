goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__73166 = e.target.readyState;
var fexpr__73165 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__73165.cljs$core$IFn$_invoke$arity$1 ? fexpr__73165.cljs$core$IFn$_invoke$arity$1(G__73166) : fexpr__73165.call(null,G__73166));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__73181,handler){
var map__73183 = p__73181;
var map__73183__$1 = cljs.core.__destructure_map(map__73183);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73183__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73183__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73183__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73183__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73183__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73183__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73183__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__73180_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__73180_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5823__auto___73263 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5823__auto___73263)){
var response_type_73264 = temp__5823__auto___73263;
(this$__$1.responseType = cljs.core.name(response_type_73264));
} else {
}

var seq__73185_73265 = cljs.core.seq(headers);
var chunk__73186_73266 = null;
var count__73187_73267 = (0);
var i__73188_73268 = (0);
while(true){
if((i__73188_73268 < count__73187_73267)){
var vec__73198_73270 = chunk__73186_73266.cljs$core$IIndexed$_nth$arity$2(null,i__73188_73268);
var k_73271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73198_73270,(0),null);
var v_73272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73198_73270,(1),null);
this$__$1.setRequestHeader(k_73271,v_73272);


var G__73273 = seq__73185_73265;
var G__73274 = chunk__73186_73266;
var G__73275 = count__73187_73267;
var G__73276 = (i__73188_73268 + (1));
seq__73185_73265 = G__73273;
chunk__73186_73266 = G__73274;
count__73187_73267 = G__73275;
i__73188_73268 = G__73276;
continue;
} else {
var temp__5823__auto___73277 = cljs.core.seq(seq__73185_73265);
if(temp__5823__auto___73277){
var seq__73185_73278__$1 = temp__5823__auto___73277;
if(cljs.core.chunked_seq_QMARK_(seq__73185_73278__$1)){
var c__5521__auto___73279 = cljs.core.chunk_first(seq__73185_73278__$1);
var G__73280 = cljs.core.chunk_rest(seq__73185_73278__$1);
var G__73281 = c__5521__auto___73279;
var G__73282 = cljs.core.count(c__5521__auto___73279);
var G__73283 = (0);
seq__73185_73265 = G__73280;
chunk__73186_73266 = G__73281;
count__73187_73267 = G__73282;
i__73188_73268 = G__73283;
continue;
} else {
var vec__73216_73284 = cljs.core.first(seq__73185_73278__$1);
var k_73285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73216_73284,(0),null);
var v_73286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73216_73284,(1),null);
this$__$1.setRequestHeader(k_73285,v_73286);


var G__73287 = cljs.core.next(seq__73185_73278__$1);
var G__73288 = null;
var G__73289 = (0);
var G__73290 = (0);
seq__73185_73265 = G__73287;
chunk__73186_73266 = G__73288;
count__73187_73267 = G__73289;
i__73188_73268 = G__73290;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4998__auto__ = body;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
