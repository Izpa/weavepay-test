goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__74797 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__74798 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__74798);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___74881 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___74881)){
var new_db_74882 = temp__5823__auto___74881;
var fexpr__74803_74883 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__74803_74883.cljs$core$IFn$_invoke$arity$1 ? fexpr__74803_74883.cljs$core$IFn$_invoke$arity$1(new_db_74882) : fexpr__74803_74883.call(null,new_db_74882));
} else {
}

var seq__74804 = cljs.core.seq(effects_without_db);
var chunk__74805 = null;
var count__74806 = (0);
var i__74807 = (0);
while(true){
if((i__74807 < count__74806)){
var vec__74814 = chunk__74805.cljs$core$IIndexed$_nth$arity$2(null,i__74807);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74814,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74814,(1),null);
var temp__5821__auto___74884 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___74884)){
var effect_fn_74885 = temp__5821__auto___74884;
(effect_fn_74885.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74885.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74885.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__74886 = seq__74804;
var G__74887 = chunk__74805;
var G__74888 = count__74806;
var G__74889 = (i__74807 + (1));
seq__74804 = G__74886;
chunk__74805 = G__74887;
count__74806 = G__74888;
i__74807 = G__74889;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__74804);
if(temp__5823__auto__){
var seq__74804__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74804__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__74804__$1);
var G__74890 = cljs.core.chunk_rest(seq__74804__$1);
var G__74891 = c__5521__auto__;
var G__74892 = cljs.core.count(c__5521__auto__);
var G__74893 = (0);
seq__74804 = G__74890;
chunk__74805 = G__74891;
count__74806 = G__74892;
i__74807 = G__74893;
continue;
} else {
var vec__74817 = cljs.core.first(seq__74804__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74817,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74817,(1),null);
var temp__5821__auto___74894 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___74894)){
var effect_fn_74895 = temp__5821__auto___74894;
(effect_fn_74895.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74895.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74895.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__74896 = cljs.core.next(seq__74804__$1);
var G__74897 = null;
var G__74898 = (0);
var G__74899 = (0);
seq__74804 = G__74896;
chunk__74805 = G__74897;
count__74806 = G__74898;
i__74807 = G__74899;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__74417__auto___74900 = re_frame.interop.now();
var duration__74418__auto___74901 = (end__74417__auto___74900 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__74418__auto___74901,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__74417__auto___74900);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__74797);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___74902 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___74902)){
var new_db_74903 = temp__5823__auto___74902;
var fexpr__74820_74904 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__74820_74904.cljs$core$IFn$_invoke$arity$1 ? fexpr__74820_74904.cljs$core$IFn$_invoke$arity$1(new_db_74903) : fexpr__74820_74904.call(null,new_db_74903));
} else {
}

var seq__74821 = cljs.core.seq(effects_without_db);
var chunk__74822 = null;
var count__74823 = (0);
var i__74824 = (0);
while(true){
if((i__74824 < count__74823)){
var vec__74831 = chunk__74822.cljs$core$IIndexed$_nth$arity$2(null,i__74824);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74831,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74831,(1),null);
var temp__5821__auto___74905 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___74905)){
var effect_fn_74906 = temp__5821__auto___74905;
(effect_fn_74906.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74906.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74906.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__74907 = seq__74821;
var G__74908 = chunk__74822;
var G__74909 = count__74823;
var G__74910 = (i__74824 + (1));
seq__74821 = G__74907;
chunk__74822 = G__74908;
count__74823 = G__74909;
i__74824 = G__74910;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__74821);
if(temp__5823__auto__){
var seq__74821__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74821__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__74821__$1);
var G__74911 = cljs.core.chunk_rest(seq__74821__$1);
var G__74912 = c__5521__auto__;
var G__74913 = cljs.core.count(c__5521__auto__);
var G__74914 = (0);
seq__74821 = G__74911;
chunk__74822 = G__74912;
count__74823 = G__74913;
i__74824 = G__74914;
continue;
} else {
var vec__74834 = cljs.core.first(seq__74821__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74834,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74834,(1),null);
var temp__5821__auto___74915 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___74915)){
var effect_fn_74916 = temp__5821__auto___74915;
(effect_fn_74916.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74916.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74916.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__74917 = cljs.core.next(seq__74821__$1);
var G__74918 = null;
var G__74919 = (0);
var G__74920 = (0);
seq__74821 = G__74917;
chunk__74822 = G__74918;
count__74823 = G__74919;
i__74824 = G__74920;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__74837){
var map__74838 = p__74837;
var map__74838__$1 = cljs.core.__destructure_map(map__74838);
var effect = map__74838__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74838__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74838__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__74839 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__74840 = null;
var count__74841 = (0);
var i__74842 = (0);
while(true){
if((i__74842 < count__74841)){
var effect = chunk__74840.cljs$core$IIndexed$_nth$arity$2(null,i__74842);
re_frame.fx.dispatch_later(effect);


var G__74921 = seq__74839;
var G__74922 = chunk__74840;
var G__74923 = count__74841;
var G__74924 = (i__74842 + (1));
seq__74839 = G__74921;
chunk__74840 = G__74922;
count__74841 = G__74923;
i__74842 = G__74924;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__74839);
if(temp__5823__auto__){
var seq__74839__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74839__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__74839__$1);
var G__74925 = cljs.core.chunk_rest(seq__74839__$1);
var G__74926 = c__5521__auto__;
var G__74927 = cljs.core.count(c__5521__auto__);
var G__74928 = (0);
seq__74839 = G__74925;
chunk__74840 = G__74926;
count__74841 = G__74927;
i__74842 = G__74928;
continue;
} else {
var effect = cljs.core.first(seq__74839__$1);
re_frame.fx.dispatch_later(effect);


var G__74929 = cljs.core.next(seq__74839__$1);
var G__74930 = null;
var G__74931 = (0);
var G__74932 = (0);
seq__74839 = G__74929;
chunk__74840 = G__74930;
count__74841 = G__74931;
i__74842 = G__74932;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__74843 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__74844 = null;
var count__74845 = (0);
var i__74846 = (0);
while(true){
if((i__74846 < count__74845)){
var vec__74859 = chunk__74844.cljs$core$IIndexed$_nth$arity$2(null,i__74846);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74859,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74859,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___74933 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___74933)){
var effect_fn_74934 = temp__5821__auto___74933;
(effect_fn_74934.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74934.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74934.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__74935 = seq__74843;
var G__74936 = chunk__74844;
var G__74937 = count__74845;
var G__74938 = (i__74846 + (1));
seq__74843 = G__74935;
chunk__74844 = G__74936;
count__74845 = G__74937;
i__74846 = G__74938;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__74843);
if(temp__5823__auto__){
var seq__74843__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74843__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__74843__$1);
var G__74939 = cljs.core.chunk_rest(seq__74843__$1);
var G__74940 = c__5521__auto__;
var G__74941 = cljs.core.count(c__5521__auto__);
var G__74942 = (0);
seq__74843 = G__74939;
chunk__74844 = G__74940;
count__74845 = G__74941;
i__74846 = G__74942;
continue;
} else {
var vec__74862 = cljs.core.first(seq__74843__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74862,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74862,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___74943 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___74943)){
var effect_fn_74944 = temp__5821__auto___74943;
(effect_fn_74944.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74944.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74944.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__74945 = cljs.core.next(seq__74843__$1);
var G__74946 = null;
var G__74947 = (0);
var G__74948 = (0);
seq__74843 = G__74945;
chunk__74844 = G__74946;
count__74845 = G__74947;
i__74846 = G__74948;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__74869 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__74870 = null;
var count__74871 = (0);
var i__74872 = (0);
while(true){
if((i__74872 < count__74871)){
var event = chunk__74870.cljs$core$IIndexed$_nth$arity$2(null,i__74872);
re_frame.router.dispatch(event);


var G__74949 = seq__74869;
var G__74950 = chunk__74870;
var G__74951 = count__74871;
var G__74952 = (i__74872 + (1));
seq__74869 = G__74949;
chunk__74870 = G__74950;
count__74871 = G__74951;
i__74872 = G__74952;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__74869);
if(temp__5823__auto__){
var seq__74869__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74869__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__74869__$1);
var G__74953 = cljs.core.chunk_rest(seq__74869__$1);
var G__74954 = c__5521__auto__;
var G__74955 = cljs.core.count(c__5521__auto__);
var G__74956 = (0);
seq__74869 = G__74953;
chunk__74870 = G__74954;
count__74871 = G__74955;
i__74872 = G__74956;
continue;
} else {
var event = cljs.core.first(seq__74869__$1);
re_frame.router.dispatch(event);


var G__74957 = cljs.core.next(seq__74869__$1);
var G__74958 = null;
var G__74959 = (0);
var G__74960 = (0);
seq__74869 = G__74957;
chunk__74870 = G__74958;
count__74871 = G__74959;
i__74872 = G__74960;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__74874 = cljs.core.seq(value);
var chunk__74875 = null;
var count__74876 = (0);
var i__74877 = (0);
while(true){
if((i__74877 < count__74876)){
var event = chunk__74875.cljs$core$IIndexed$_nth$arity$2(null,i__74877);
clear_event(event);


var G__74961 = seq__74874;
var G__74962 = chunk__74875;
var G__74963 = count__74876;
var G__74964 = (i__74877 + (1));
seq__74874 = G__74961;
chunk__74875 = G__74962;
count__74876 = G__74963;
i__74877 = G__74964;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__74874);
if(temp__5823__auto__){
var seq__74874__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74874__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__74874__$1);
var G__74965 = cljs.core.chunk_rest(seq__74874__$1);
var G__74966 = c__5521__auto__;
var G__74967 = cljs.core.count(c__5521__auto__);
var G__74968 = (0);
seq__74874 = G__74965;
chunk__74875 = G__74966;
count__74876 = G__74967;
i__74877 = G__74968;
continue;
} else {
var event = cljs.core.first(seq__74874__$1);
clear_event(event);


var G__74969 = cljs.core.next(seq__74874__$1);
var G__74970 = null;
var G__74971 = (0);
var G__74972 = (0);
seq__74874 = G__74969;
chunk__74875 = G__74970;
count__74876 = G__74971;
i__74877 = G__74972;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__74879 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__74880 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__74880);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__74417__auto___74973 = re_frame.interop.now();
var duration__74418__auto___74974 = (end__74417__auto___74973 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__74418__auto___74974,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__74417__auto___74973);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__74879);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
