goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__74439){
var map__74440 = p__74439;
var map__74440__$1 = cljs.core.__destructure_map(map__74440);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74440__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74440__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74440__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74440__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4998__auto__ = child_of;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__74443_74472 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__74444_74473 = null;
var count__74445_74474 = (0);
var i__74446_74475 = (0);
while(true){
if((i__74446_74475 < count__74445_74474)){
var vec__74459_74476 = chunk__74444_74473.cljs$core$IIndexed$_nth$arity$2(null,i__74446_74475);
var k_74477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74459_74476,(0),null);
var cb_74478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74459_74476,(1),null);
try{var G__74463_74479 = cljs.core.deref(re_frame.trace.traces);
(cb_74478.cljs$core$IFn$_invoke$arity$1 ? cb_74478.cljs$core$IFn$_invoke$arity$1(G__74463_74479) : cb_74478.call(null,G__74463_74479));
}catch (e74462){var e_74480 = e74462;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_74477,"while storing",cljs.core.deref(re_frame.trace.traces),e_74480], 0));
}

var G__74481 = seq__74443_74472;
var G__74482 = chunk__74444_74473;
var G__74483 = count__74445_74474;
var G__74484 = (i__74446_74475 + (1));
seq__74443_74472 = G__74481;
chunk__74444_74473 = G__74482;
count__74445_74474 = G__74483;
i__74446_74475 = G__74484;
continue;
} else {
var temp__5823__auto___74485 = cljs.core.seq(seq__74443_74472);
if(temp__5823__auto___74485){
var seq__74443_74486__$1 = temp__5823__auto___74485;
if(cljs.core.chunked_seq_QMARK_(seq__74443_74486__$1)){
var c__5521__auto___74487 = cljs.core.chunk_first(seq__74443_74486__$1);
var G__74488 = cljs.core.chunk_rest(seq__74443_74486__$1);
var G__74489 = c__5521__auto___74487;
var G__74490 = cljs.core.count(c__5521__auto___74487);
var G__74491 = (0);
seq__74443_74472 = G__74488;
chunk__74444_74473 = G__74489;
count__74445_74474 = G__74490;
i__74446_74475 = G__74491;
continue;
} else {
var vec__74464_74492 = cljs.core.first(seq__74443_74486__$1);
var k_74493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74464_74492,(0),null);
var cb_74494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74464_74492,(1),null);
try{var G__74468_74495 = cljs.core.deref(re_frame.trace.traces);
(cb_74494.cljs$core$IFn$_invoke$arity$1 ? cb_74494.cljs$core$IFn$_invoke$arity$1(G__74468_74495) : cb_74494.call(null,G__74468_74495));
}catch (e74467){var e_74496 = e74467;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_74493,"while storing",cljs.core.deref(re_frame.trace.traces),e_74496], 0));
}

var G__74497 = cljs.core.next(seq__74443_74486__$1);
var G__74498 = null;
var G__74499 = (0);
var G__74500 = (0);
seq__74443_74472 = G__74497;
chunk__74444_74473 = G__74498;
count__74445_74474 = G__74499;
i__74446_74475 = G__74500;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
