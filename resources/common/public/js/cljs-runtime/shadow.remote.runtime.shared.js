goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__68019){
var map__68020 = p__68019;
var map__68020__$1 = cljs.core.__destructure_map(map__68020);
var runtime = map__68020__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68020__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4998__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_68133 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_68133)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__68028 = runtime;
var G__68029 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_68133);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__68028,G__68029) : shadow.remote.runtime.shared.process.call(null,G__68028,G__68029));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__68030,res){
var map__68031 = p__68030;
var map__68031__$1 = cljs.core.__destructure_map(map__68031);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__68032 = res;
var G__68032__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68032,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__68032);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68032__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__68032__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__68034 = arguments.length;
switch (G__68034) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__68036,msg,handlers,timeout_after_ms){
var map__68037 = p__68036;
var map__68037__$1 = cljs.core.__destructure_map(map__68037);
var runtime = map__68037__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___68139 = arguments.length;
var i__5723__auto___68140 = (0);
while(true){
if((i__5723__auto___68140 < len__5722__auto___68139)){
args__5728__auto__.push((arguments[i__5723__auto___68140]));

var G__68141 = (i__5723__auto___68140 + (1));
i__5723__auto___68140 = G__68141;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__68045,ev,args){
var map__68046 = p__68045;
var map__68046__$1 = cljs.core.__destructure_map(map__68046);
var runtime = map__68046__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__68047 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68050 = null;
var count__68051 = (0);
var i__68052 = (0);
while(true){
if((i__68052 < count__68051)){
var ext = chunk__68050.cljs$core$IIndexed$_nth$arity$2(null,i__68052);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__68144 = seq__68047;
var G__68145 = chunk__68050;
var G__68146 = count__68051;
var G__68147 = (i__68052 + (1));
seq__68047 = G__68144;
chunk__68050 = G__68145;
count__68051 = G__68146;
i__68052 = G__68147;
continue;
} else {
var G__68148 = seq__68047;
var G__68149 = chunk__68050;
var G__68150 = count__68051;
var G__68151 = (i__68052 + (1));
seq__68047 = G__68148;
chunk__68050 = G__68149;
count__68051 = G__68150;
i__68052 = G__68151;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__68047);
if(temp__5823__auto__){
var seq__68047__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68047__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__68047__$1);
var G__68152 = cljs.core.chunk_rest(seq__68047__$1);
var G__68153 = c__5521__auto__;
var G__68154 = cljs.core.count(c__5521__auto__);
var G__68155 = (0);
seq__68047 = G__68152;
chunk__68050 = G__68153;
count__68051 = G__68154;
i__68052 = G__68155;
continue;
} else {
var ext = cljs.core.first(seq__68047__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__68156 = cljs.core.next(seq__68047__$1);
var G__68157 = null;
var G__68158 = (0);
var G__68159 = (0);
seq__68047 = G__68156;
chunk__68050 = G__68157;
count__68051 = G__68158;
i__68052 = G__68159;
continue;
} else {
var G__68160 = cljs.core.next(seq__68047__$1);
var G__68161 = null;
var G__68162 = (0);
var G__68163 = (0);
seq__68047 = G__68160;
chunk__68050 = G__68161;
count__68051 = G__68162;
i__68052 = G__68163;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq68041){
var G__68042 = cljs.core.first(seq68041);
var seq68041__$1 = cljs.core.next(seq68041);
var G__68043 = cljs.core.first(seq68041__$1);
var seq68041__$2 = cljs.core.next(seq68041__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68042,G__68043,seq68041__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__68058,p__68059){
var map__68060 = p__68058;
var map__68060__$1 = cljs.core.__destructure_map(map__68060);
var runtime = map__68060__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68061 = p__68059;
var map__68061__$1 = cljs.core.__destructure_map(map__68061);
var msg = map__68061__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68061__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__68062 = cljs.core.deref(state_ref);
var map__68062__$1 = cljs.core.__destructure_map(map__68062);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68062__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68062__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__68065,msg){
var map__68066 = p__68065;
var map__68066__$1 = cljs.core.__destructure_map(map__68066);
var runtime = map__68066__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68066__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__68067,key,p__68068){
var map__68069 = p__68067;
var map__68069__$1 = cljs.core.__destructure_map(map__68069);
var state = map__68069__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68069__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68070 = p__68068;
var map__68070__$1 = cljs.core.__destructure_map(map__68070);
var spec = map__68070__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68070__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68075,key,spec){
var map__68076 = p__68075;
var map__68076__$1 = cljs.core.__destructure_map(map__68076);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68076__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68078_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68078_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68079_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68079_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68080_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68080_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__68081_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__68081_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68082_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68082_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68083,key){
var map__68084 = p__68083;
var map__68084__$1 = cljs.core.__destructure_map(map__68084);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68084__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__68094,msg){
var map__68095 = p__68094;
var map__68095__$1 = cljs.core.__destructure_map(map__68095);
var runtime = map__68095__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68095__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68103,p__68104){
var map__68105 = p__68103;
var map__68105__$1 = cljs.core.__destructure_map(map__68105);
var runtime = map__68105__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68105__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68106 = p__68104;
var map__68106__$1 = cljs.core.__destructure_map(map__68106);
var msg = map__68106__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68106__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68106__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68117 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68119 = null;
var count__68120 = (0);
var i__68121 = (0);
while(true){
if((i__68121 < count__68120)){
var map__68125 = chunk__68119.cljs$core$IIndexed$_nth$arity$2(null,i__68121);
var map__68125__$1 = cljs.core.__destructure_map(map__68125);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68125__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68172 = seq__68117;
var G__68173 = chunk__68119;
var G__68174 = count__68120;
var G__68175 = (i__68121 + (1));
seq__68117 = G__68172;
chunk__68119 = G__68173;
count__68120 = G__68174;
i__68121 = G__68175;
continue;
} else {
var G__68176 = seq__68117;
var G__68177 = chunk__68119;
var G__68178 = count__68120;
var G__68179 = (i__68121 + (1));
seq__68117 = G__68176;
chunk__68119 = G__68177;
count__68120 = G__68178;
i__68121 = G__68179;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__68117);
if(temp__5823__auto__){
var seq__68117__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68117__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__68117__$1);
var G__68180 = cljs.core.chunk_rest(seq__68117__$1);
var G__68181 = c__5521__auto__;
var G__68182 = cljs.core.count(c__5521__auto__);
var G__68183 = (0);
seq__68117 = G__68180;
chunk__68119 = G__68181;
count__68120 = G__68182;
i__68121 = G__68183;
continue;
} else {
var map__68127 = cljs.core.first(seq__68117__$1);
var map__68127__$1 = cljs.core.__destructure_map(map__68127);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68127__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68184 = cljs.core.next(seq__68117__$1);
var G__68185 = null;
var G__68186 = (0);
var G__68187 = (0);
seq__68117 = G__68184;
chunk__68119 = G__68185;
count__68120 = G__68186;
i__68121 = G__68187;
continue;
} else {
var G__68188 = cljs.core.next(seq__68117__$1);
var G__68189 = null;
var G__68190 = (0);
var G__68191 = (0);
seq__68117 = G__68188;
chunk__68119 = G__68189;
count__68120 = G__68190;
i__68121 = G__68191;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
