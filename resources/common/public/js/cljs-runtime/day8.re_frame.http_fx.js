goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__75071){
var vec__75074 = p__75071;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75074,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75074,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__75085){
var map__75086 = p__75085;
var map__75086__$1 = cljs.core.__destructure_map(map__75086);
var request = map__75086__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75086__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75086__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__75082_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__75082_SHARP_));
}),(function (p1__75084_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__75084_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5821__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5821__auto__)){
var on_request = temp__5821__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__75130 = cljs.core.seq(seq_request_maps);
var chunk__75131 = null;
var count__75132 = (0);
var i__75133 = (0);
while(true){
if((i__75133 < count__75132)){
var request__$1 = chunk__75131.cljs$core$IIndexed$_nth$arity$2(null,i__75133);
var xhrio_75151 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_75151);


var G__75152 = seq__75130;
var G__75153 = chunk__75131;
var G__75154 = count__75132;
var G__75155 = (i__75133 + (1));
seq__75130 = G__75152;
chunk__75131 = G__75153;
count__75132 = G__75154;
i__75133 = G__75155;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__75130);
if(temp__5823__auto__){
var seq__75130__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75130__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__75130__$1);
var G__75156 = cljs.core.chunk_rest(seq__75130__$1);
var G__75157 = c__5521__auto__;
var G__75158 = cljs.core.count(c__5521__auto__);
var G__75159 = (0);
seq__75130 = G__75156;
chunk__75131 = G__75157;
count__75132 = G__75158;
i__75133 = G__75159;
continue;
} else {
var request__$1 = cljs.core.first(seq__75130__$1);
var xhrio_75160 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_75160);


var G__75161 = cljs.core.next(seq__75130__$1);
var G__75162 = null;
var G__75163 = (0);
var G__75164 = (0);
seq__75130 = G__75161;
chunk__75131 = G__75162;
count__75132 = G__75163;
i__75133 = G__75164;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
