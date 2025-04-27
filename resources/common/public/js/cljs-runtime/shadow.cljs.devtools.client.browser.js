goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___73332 = arguments.length;
var i__5723__auto___73333 = (0);
while(true){
if((i__5723__auto___73333 < len__5722__auto___73332)){
args__5728__auto__.push((arguments[i__5723__auto___73333]));

var G__73334 = (i__5723__auto___73333 + (1));
i__5723__auto___73333 = G__73334;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq72945){
var G__72946 = cljs.core.first(seq72945);
var seq72945__$1 = cljs.core.next(seq72945);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72946,seq72945__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__72955 = cljs.core.seq(sources);
var chunk__72956 = null;
var count__72957 = (0);
var i__72958 = (0);
while(true){
if((i__72958 < count__72957)){
var map__72968 = chunk__72956.cljs$core$IIndexed$_nth$arity$2(null,i__72958);
var map__72968__$1 = cljs.core.__destructure_map(map__72968);
var src = map__72968__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72968__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72968__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72968__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72968__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e72970){var e_73335 = e72970;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73335);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73335.message)].join('')));
}

var G__73336 = seq__72955;
var G__73337 = chunk__72956;
var G__73338 = count__72957;
var G__73339 = (i__72958 + (1));
seq__72955 = G__73336;
chunk__72956 = G__73337;
count__72957 = G__73338;
i__72958 = G__73339;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__72955);
if(temp__5823__auto__){
var seq__72955__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72955__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__72955__$1);
var G__73340 = cljs.core.chunk_rest(seq__72955__$1);
var G__73341 = c__5521__auto__;
var G__73342 = cljs.core.count(c__5521__auto__);
var G__73343 = (0);
seq__72955 = G__73340;
chunk__72956 = G__73341;
count__72957 = G__73342;
i__72958 = G__73343;
continue;
} else {
var map__72973 = cljs.core.first(seq__72955__$1);
var map__72973__$1 = cljs.core.__destructure_map(map__72973);
var src = map__72973__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72973__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72973__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72973__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72973__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e72975){var e_73344 = e72975;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73344);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73344.message)].join('')));
}

var G__73345 = cljs.core.next(seq__72955__$1);
var G__73346 = null;
var G__73347 = (0);
var G__73348 = (0);
seq__72955 = G__73345;
chunk__72956 = G__73346;
count__72957 = G__73347;
i__72958 = G__73348;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__72980 = cljs.core.seq(js_requires);
var chunk__72981 = null;
var count__72982 = (0);
var i__72983 = (0);
while(true){
if((i__72983 < count__72982)){
var js_ns = chunk__72981.cljs$core$IIndexed$_nth$arity$2(null,i__72983);
var require_str_73349 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73349);


var G__73350 = seq__72980;
var G__73351 = chunk__72981;
var G__73352 = count__72982;
var G__73353 = (i__72983 + (1));
seq__72980 = G__73350;
chunk__72981 = G__73351;
count__72982 = G__73352;
i__72983 = G__73353;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__72980);
if(temp__5823__auto__){
var seq__72980__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72980__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__72980__$1);
var G__73354 = cljs.core.chunk_rest(seq__72980__$1);
var G__73355 = c__5521__auto__;
var G__73356 = cljs.core.count(c__5521__auto__);
var G__73357 = (0);
seq__72980 = G__73354;
chunk__72981 = G__73355;
count__72982 = G__73356;
i__72983 = G__73357;
continue;
} else {
var js_ns = cljs.core.first(seq__72980__$1);
var require_str_73358 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73358);


var G__73359 = cljs.core.next(seq__72980__$1);
var G__73360 = null;
var G__73361 = (0);
var G__73362 = (0);
seq__72980 = G__73359;
chunk__72981 = G__73360;
count__72982 = G__73361;
i__72983 = G__73362;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__72990){
var map__72991 = p__72990;
var map__72991__$1 = cljs.core.__destructure_map(map__72991);
var msg = map__72991__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72991__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72991__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5476__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72992(s__72993){
return (new cljs.core.LazySeq(null,(function (){
var s__72993__$1 = s__72993;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__72993__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__72998 = cljs.core.first(xs__6383__auto__);
var map__72998__$1 = cljs.core.__destructure_map(map__72998);
var src = map__72998__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72998__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72998__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5472__auto__ = ((function (s__72993__$1,map__72998,map__72998__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__72991,map__72991__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72992_$_iter__72994(s__72995){
return (new cljs.core.LazySeq(null,((function (s__72993__$1,map__72998,map__72998__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__72991,map__72991__$1,msg,info,reload_info){
return (function (){
var s__72995__$1 = s__72995;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__72995__$1);
if(temp__5823__auto____$1){
var s__72995__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__72995__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__72995__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__72997 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__72996 = (0);
while(true){
if((i__72996 < size__5475__auto__)){
var warning = cljs.core._nth(c__5474__auto__,i__72996);
cljs.core.chunk_append(b__72997,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__73365 = (i__72996 + (1));
i__72996 = G__73365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72997),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72992_$_iter__72994(cljs.core.chunk_rest(s__72995__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72997),null);
}
} else {
var warning = cljs.core.first(s__72995__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72992_$_iter__72994(cljs.core.rest(s__72995__$2)));
}
} else {
return null;
}
break;
}
});})(s__72993__$1,map__72998,map__72998__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__72991,map__72991__$1,msg,info,reload_info))
,null,null));
});})(s__72993__$1,map__72998,map__72998__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__72991,map__72991__$1,msg,info,reload_info))
;
var fs__5473__auto__ = cljs.core.seq(iterys__5472__auto__(warnings));
if(fs__5473__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5473__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72992(cljs.core.rest(s__72993__$1)));
} else {
var G__73366 = cljs.core.rest(s__72993__$1);
s__72993__$1 = G__73366;
continue;
}
} else {
var G__73367 = cljs.core.rest(s__72993__$1);
s__72993__$1 = G__73367;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__73000_73368 = cljs.core.seq(warnings);
var chunk__73001_73369 = null;
var count__73002_73370 = (0);
var i__73003_73371 = (0);
while(true){
if((i__73003_73371 < count__73002_73370)){
var map__73008_73372 = chunk__73001_73369.cljs$core$IIndexed$_nth$arity$2(null,i__73003_73371);
var map__73008_73373__$1 = cljs.core.__destructure_map(map__73008_73372);
var w_73374 = map__73008_73373__$1;
var msg_73375__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73008_73373__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73008_73373__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73008_73373__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73008_73373__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73378)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73376),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73377),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73375__$1)].join(''));


var G__73379 = seq__73000_73368;
var G__73380 = chunk__73001_73369;
var G__73381 = count__73002_73370;
var G__73382 = (i__73003_73371 + (1));
seq__73000_73368 = G__73379;
chunk__73001_73369 = G__73380;
count__73002_73370 = G__73381;
i__73003_73371 = G__73382;
continue;
} else {
var temp__5823__auto___73383 = cljs.core.seq(seq__73000_73368);
if(temp__5823__auto___73383){
var seq__73000_73384__$1 = temp__5823__auto___73383;
if(cljs.core.chunked_seq_QMARK_(seq__73000_73384__$1)){
var c__5521__auto___73385 = cljs.core.chunk_first(seq__73000_73384__$1);
var G__73386 = cljs.core.chunk_rest(seq__73000_73384__$1);
var G__73387 = c__5521__auto___73385;
var G__73388 = cljs.core.count(c__5521__auto___73385);
var G__73389 = (0);
seq__73000_73368 = G__73386;
chunk__73001_73369 = G__73387;
count__73002_73370 = G__73388;
i__73003_73371 = G__73389;
continue;
} else {
var map__73009_73390 = cljs.core.first(seq__73000_73384__$1);
var map__73009_73391__$1 = cljs.core.__destructure_map(map__73009_73390);
var w_73392 = map__73009_73391__$1;
var msg_73393__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73009_73391__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73009_73391__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73009_73391__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73009_73391__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73396)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73394),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73395),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73393__$1)].join(''));


var G__73399 = cljs.core.next(seq__73000_73384__$1);
var G__73400 = null;
var G__73401 = (0);
var G__73402 = (0);
seq__73000_73368 = G__73399;
chunk__73001_73369 = G__73400;
count__73002_73370 = G__73401;
i__73003_73371 = G__73402;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__72987_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__72987_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4996__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4996__auto____$1){
return new$;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__73010){
var map__73011 = p__73010;
var map__73011__$1 = cljs.core.__destructure_map(map__73011);
var msg = map__73011__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73011__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73011__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__73012 = cljs.core.seq(updates);
var chunk__73014 = null;
var count__73015 = (0);
var i__73016 = (0);
while(true){
if((i__73016 < count__73015)){
var path = chunk__73014.cljs$core$IIndexed$_nth$arity$2(null,i__73016);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73143_73403 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73147_73404 = null;
var count__73148_73405 = (0);
var i__73149_73406 = (0);
while(true){
if((i__73149_73406 < count__73148_73405)){
var node_73407 = chunk__73147_73404.cljs$core$IIndexed$_nth$arity$2(null,i__73149_73406);
if(cljs.core.not(node_73407.shadow$old)){
var path_match_73408 = shadow.cljs.devtools.client.browser.match_paths(node_73407.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73408)){
var new_link_73409 = (function (){var G__73202 = node_73407.cloneNode(true);
G__73202.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73408),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73202;
})();
(node_73407.shadow$old = true);

(new_link_73409.onload = ((function (seq__73143_73403,chunk__73147_73404,count__73148_73405,i__73149_73406,seq__73012,chunk__73014,count__73015,i__73016,new_link_73409,path_match_73408,node_73407,path,map__73011,map__73011__$1,msg,updates,reload_info){
return (function (e){
var seq__73203_73410 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__73205_73411 = null;
var count__73206_73412 = (0);
var i__73207_73413 = (0);
while(true){
if((i__73207_73413 < count__73206_73412)){
var map__73211_73414 = chunk__73205_73411.cljs$core$IIndexed$_nth$arity$2(null,i__73207_73413);
var map__73211_73415__$1 = cljs.core.__destructure_map(map__73211_73414);
var task_73416 = map__73211_73415__$1;
var fn_str_73417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73211_73415__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73211_73415__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73419 = goog.getObjectByName(fn_str_73417,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73418)].join(''));

(fn_obj_73419.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73419.cljs$core$IFn$_invoke$arity$2(path,new_link_73409) : fn_obj_73419.call(null,path,new_link_73409));


var G__73420 = seq__73203_73410;
var G__73421 = chunk__73205_73411;
var G__73422 = count__73206_73412;
var G__73423 = (i__73207_73413 + (1));
seq__73203_73410 = G__73420;
chunk__73205_73411 = G__73421;
count__73206_73412 = G__73422;
i__73207_73413 = G__73423;
continue;
} else {
var temp__5823__auto___73424 = cljs.core.seq(seq__73203_73410);
if(temp__5823__auto___73424){
var seq__73203_73425__$1 = temp__5823__auto___73424;
if(cljs.core.chunked_seq_QMARK_(seq__73203_73425__$1)){
var c__5521__auto___73426 = cljs.core.chunk_first(seq__73203_73425__$1);
var G__73427 = cljs.core.chunk_rest(seq__73203_73425__$1);
var G__73428 = c__5521__auto___73426;
var G__73429 = cljs.core.count(c__5521__auto___73426);
var G__73430 = (0);
seq__73203_73410 = G__73427;
chunk__73205_73411 = G__73428;
count__73206_73412 = G__73429;
i__73207_73413 = G__73430;
continue;
} else {
var map__73212_73431 = cljs.core.first(seq__73203_73425__$1);
var map__73212_73432__$1 = cljs.core.__destructure_map(map__73212_73431);
var task_73433 = map__73212_73432__$1;
var fn_str_73434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73212_73432__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73212_73432__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73436 = goog.getObjectByName(fn_str_73434,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73435)].join(''));

(fn_obj_73436.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73436.cljs$core$IFn$_invoke$arity$2(path,new_link_73409) : fn_obj_73436.call(null,path,new_link_73409));


var G__73437 = cljs.core.next(seq__73203_73425__$1);
var G__73438 = null;
var G__73439 = (0);
var G__73440 = (0);
seq__73203_73410 = G__73437;
chunk__73205_73411 = G__73438;
count__73206_73412 = G__73439;
i__73207_73413 = G__73440;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_73407);
});})(seq__73143_73403,chunk__73147_73404,count__73148_73405,i__73149_73406,seq__73012,chunk__73014,count__73015,i__73016,new_link_73409,path_match_73408,node_73407,path,map__73011,map__73011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73408], 0));

goog.dom.insertSiblingAfter(new_link_73409,node_73407);


var G__73441 = seq__73143_73403;
var G__73442 = chunk__73147_73404;
var G__73443 = count__73148_73405;
var G__73444 = (i__73149_73406 + (1));
seq__73143_73403 = G__73441;
chunk__73147_73404 = G__73442;
count__73148_73405 = G__73443;
i__73149_73406 = G__73444;
continue;
} else {
var G__73445 = seq__73143_73403;
var G__73446 = chunk__73147_73404;
var G__73447 = count__73148_73405;
var G__73448 = (i__73149_73406 + (1));
seq__73143_73403 = G__73445;
chunk__73147_73404 = G__73446;
count__73148_73405 = G__73447;
i__73149_73406 = G__73448;
continue;
}
} else {
var G__73449 = seq__73143_73403;
var G__73450 = chunk__73147_73404;
var G__73451 = count__73148_73405;
var G__73452 = (i__73149_73406 + (1));
seq__73143_73403 = G__73449;
chunk__73147_73404 = G__73450;
count__73148_73405 = G__73451;
i__73149_73406 = G__73452;
continue;
}
} else {
var temp__5823__auto___73453 = cljs.core.seq(seq__73143_73403);
if(temp__5823__auto___73453){
var seq__73143_73454__$1 = temp__5823__auto___73453;
if(cljs.core.chunked_seq_QMARK_(seq__73143_73454__$1)){
var c__5521__auto___73455 = cljs.core.chunk_first(seq__73143_73454__$1);
var G__73456 = cljs.core.chunk_rest(seq__73143_73454__$1);
var G__73457 = c__5521__auto___73455;
var G__73458 = cljs.core.count(c__5521__auto___73455);
var G__73459 = (0);
seq__73143_73403 = G__73456;
chunk__73147_73404 = G__73457;
count__73148_73405 = G__73458;
i__73149_73406 = G__73459;
continue;
} else {
var node_73463 = cljs.core.first(seq__73143_73454__$1);
if(cljs.core.not(node_73463.shadow$old)){
var path_match_73464 = shadow.cljs.devtools.client.browser.match_paths(node_73463.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73464)){
var new_link_73466 = (function (){var G__73219 = node_73463.cloneNode(true);
G__73219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73464),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73219;
})();
(node_73463.shadow$old = true);

(new_link_73466.onload = ((function (seq__73143_73403,chunk__73147_73404,count__73148_73405,i__73149_73406,seq__73012,chunk__73014,count__73015,i__73016,new_link_73466,path_match_73464,node_73463,seq__73143_73454__$1,temp__5823__auto___73453,path,map__73011,map__73011__$1,msg,updates,reload_info){
return (function (e){
var seq__73220_73468 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__73222_73469 = null;
var count__73223_73470 = (0);
var i__73224_73471 = (0);
while(true){
if((i__73224_73471 < count__73223_73470)){
var map__73231_73472 = chunk__73222_73469.cljs$core$IIndexed$_nth$arity$2(null,i__73224_73471);
var map__73231_73473__$1 = cljs.core.__destructure_map(map__73231_73472);
var task_73474 = map__73231_73473__$1;
var fn_str_73475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73231_73473__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73231_73473__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73478 = goog.getObjectByName(fn_str_73475,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73476)].join(''));

(fn_obj_73478.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73478.cljs$core$IFn$_invoke$arity$2(path,new_link_73466) : fn_obj_73478.call(null,path,new_link_73466));


var G__73479 = seq__73220_73468;
var G__73480 = chunk__73222_73469;
var G__73481 = count__73223_73470;
var G__73482 = (i__73224_73471 + (1));
seq__73220_73468 = G__73479;
chunk__73222_73469 = G__73480;
count__73223_73470 = G__73481;
i__73224_73471 = G__73482;
continue;
} else {
var temp__5823__auto___73483__$1 = cljs.core.seq(seq__73220_73468);
if(temp__5823__auto___73483__$1){
var seq__73220_73484__$1 = temp__5823__auto___73483__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73220_73484__$1)){
var c__5521__auto___73485 = cljs.core.chunk_first(seq__73220_73484__$1);
var G__73486 = cljs.core.chunk_rest(seq__73220_73484__$1);
var G__73487 = c__5521__auto___73485;
var G__73488 = cljs.core.count(c__5521__auto___73485);
var G__73489 = (0);
seq__73220_73468 = G__73486;
chunk__73222_73469 = G__73487;
count__73223_73470 = G__73488;
i__73224_73471 = G__73489;
continue;
} else {
var map__73232_73490 = cljs.core.first(seq__73220_73484__$1);
var map__73232_73491__$1 = cljs.core.__destructure_map(map__73232_73490);
var task_73492 = map__73232_73491__$1;
var fn_str_73493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73232_73491__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73232_73491__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73495 = goog.getObjectByName(fn_str_73493,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73494)].join(''));

(fn_obj_73495.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73495.cljs$core$IFn$_invoke$arity$2(path,new_link_73466) : fn_obj_73495.call(null,path,new_link_73466));


var G__73496 = cljs.core.next(seq__73220_73484__$1);
var G__73497 = null;
var G__73498 = (0);
var G__73499 = (0);
seq__73220_73468 = G__73496;
chunk__73222_73469 = G__73497;
count__73223_73470 = G__73498;
i__73224_73471 = G__73499;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_73463);
});})(seq__73143_73403,chunk__73147_73404,count__73148_73405,i__73149_73406,seq__73012,chunk__73014,count__73015,i__73016,new_link_73466,path_match_73464,node_73463,seq__73143_73454__$1,temp__5823__auto___73453,path,map__73011,map__73011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73464], 0));

goog.dom.insertSiblingAfter(new_link_73466,node_73463);


var G__73500 = cljs.core.next(seq__73143_73454__$1);
var G__73501 = null;
var G__73502 = (0);
var G__73503 = (0);
seq__73143_73403 = G__73500;
chunk__73147_73404 = G__73501;
count__73148_73405 = G__73502;
i__73149_73406 = G__73503;
continue;
} else {
var G__73504 = cljs.core.next(seq__73143_73454__$1);
var G__73505 = null;
var G__73506 = (0);
var G__73507 = (0);
seq__73143_73403 = G__73504;
chunk__73147_73404 = G__73505;
count__73148_73405 = G__73506;
i__73149_73406 = G__73507;
continue;
}
} else {
var G__73508 = cljs.core.next(seq__73143_73454__$1);
var G__73509 = null;
var G__73510 = (0);
var G__73511 = (0);
seq__73143_73403 = G__73508;
chunk__73147_73404 = G__73509;
count__73148_73405 = G__73510;
i__73149_73406 = G__73511;
continue;
}
}
} else {
}
}
break;
}


var G__73512 = seq__73012;
var G__73513 = chunk__73014;
var G__73514 = count__73015;
var G__73515 = (i__73016 + (1));
seq__73012 = G__73512;
chunk__73014 = G__73513;
count__73015 = G__73514;
i__73016 = G__73515;
continue;
} else {
var G__73516 = seq__73012;
var G__73517 = chunk__73014;
var G__73518 = count__73015;
var G__73519 = (i__73016 + (1));
seq__73012 = G__73516;
chunk__73014 = G__73517;
count__73015 = G__73518;
i__73016 = G__73519;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__73012);
if(temp__5823__auto__){
var seq__73012__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73012__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__73012__$1);
var G__73520 = cljs.core.chunk_rest(seq__73012__$1);
var G__73521 = c__5521__auto__;
var G__73522 = cljs.core.count(c__5521__auto__);
var G__73523 = (0);
seq__73012 = G__73520;
chunk__73014 = G__73521;
count__73015 = G__73522;
i__73016 = G__73523;
continue;
} else {
var path = cljs.core.first(seq__73012__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73233_73524 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73237_73525 = null;
var count__73238_73526 = (0);
var i__73239_73527 = (0);
while(true){
if((i__73239_73527 < count__73238_73526)){
var node_73529 = chunk__73237_73525.cljs$core$IIndexed$_nth$arity$2(null,i__73239_73527);
if(cljs.core.not(node_73529.shadow$old)){
var path_match_73530 = shadow.cljs.devtools.client.browser.match_paths(node_73529.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73530)){
var new_link_73533 = (function (){var G__73292 = node_73529.cloneNode(true);
G__73292.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73530),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73292;
})();
(node_73529.shadow$old = true);

(new_link_73533.onload = ((function (seq__73233_73524,chunk__73237_73525,count__73238_73526,i__73239_73527,seq__73012,chunk__73014,count__73015,i__73016,new_link_73533,path_match_73530,node_73529,path,seq__73012__$1,temp__5823__auto__,map__73011,map__73011__$1,msg,updates,reload_info){
return (function (e){
var seq__73293_73535 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__73295_73536 = null;
var count__73296_73537 = (0);
var i__73297_73538 = (0);
while(true){
if((i__73297_73538 < count__73296_73537)){
var map__73301_73539 = chunk__73295_73536.cljs$core$IIndexed$_nth$arity$2(null,i__73297_73538);
var map__73301_73540__$1 = cljs.core.__destructure_map(map__73301_73539);
var task_73541 = map__73301_73540__$1;
var fn_str_73542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73301_73540__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73301_73540__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73544 = goog.getObjectByName(fn_str_73542,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73543)].join(''));

(fn_obj_73544.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73544.cljs$core$IFn$_invoke$arity$2(path,new_link_73533) : fn_obj_73544.call(null,path,new_link_73533));


var G__73545 = seq__73293_73535;
var G__73546 = chunk__73295_73536;
var G__73547 = count__73296_73537;
var G__73548 = (i__73297_73538 + (1));
seq__73293_73535 = G__73545;
chunk__73295_73536 = G__73546;
count__73296_73537 = G__73547;
i__73297_73538 = G__73548;
continue;
} else {
var temp__5823__auto___73549__$1 = cljs.core.seq(seq__73293_73535);
if(temp__5823__auto___73549__$1){
var seq__73293_73550__$1 = temp__5823__auto___73549__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73293_73550__$1)){
var c__5521__auto___73551 = cljs.core.chunk_first(seq__73293_73550__$1);
var G__73552 = cljs.core.chunk_rest(seq__73293_73550__$1);
var G__73553 = c__5521__auto___73551;
var G__73554 = cljs.core.count(c__5521__auto___73551);
var G__73555 = (0);
seq__73293_73535 = G__73552;
chunk__73295_73536 = G__73553;
count__73296_73537 = G__73554;
i__73297_73538 = G__73555;
continue;
} else {
var map__73302_73556 = cljs.core.first(seq__73293_73550__$1);
var map__73302_73557__$1 = cljs.core.__destructure_map(map__73302_73556);
var task_73558 = map__73302_73557__$1;
var fn_str_73559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73302_73557__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73302_73557__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73562 = goog.getObjectByName(fn_str_73559,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73560)].join(''));

(fn_obj_73562.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73562.cljs$core$IFn$_invoke$arity$2(path,new_link_73533) : fn_obj_73562.call(null,path,new_link_73533));


var G__73563 = cljs.core.next(seq__73293_73550__$1);
var G__73564 = null;
var G__73565 = (0);
var G__73566 = (0);
seq__73293_73535 = G__73563;
chunk__73295_73536 = G__73564;
count__73296_73537 = G__73565;
i__73297_73538 = G__73566;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_73529);
});})(seq__73233_73524,chunk__73237_73525,count__73238_73526,i__73239_73527,seq__73012,chunk__73014,count__73015,i__73016,new_link_73533,path_match_73530,node_73529,path,seq__73012__$1,temp__5823__auto__,map__73011,map__73011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73530], 0));

goog.dom.insertSiblingAfter(new_link_73533,node_73529);


var G__73567 = seq__73233_73524;
var G__73568 = chunk__73237_73525;
var G__73569 = count__73238_73526;
var G__73570 = (i__73239_73527 + (1));
seq__73233_73524 = G__73567;
chunk__73237_73525 = G__73568;
count__73238_73526 = G__73569;
i__73239_73527 = G__73570;
continue;
} else {
var G__73571 = seq__73233_73524;
var G__73572 = chunk__73237_73525;
var G__73573 = count__73238_73526;
var G__73574 = (i__73239_73527 + (1));
seq__73233_73524 = G__73571;
chunk__73237_73525 = G__73572;
count__73238_73526 = G__73573;
i__73239_73527 = G__73574;
continue;
}
} else {
var G__73577 = seq__73233_73524;
var G__73578 = chunk__73237_73525;
var G__73579 = count__73238_73526;
var G__73580 = (i__73239_73527 + (1));
seq__73233_73524 = G__73577;
chunk__73237_73525 = G__73578;
count__73238_73526 = G__73579;
i__73239_73527 = G__73580;
continue;
}
} else {
var temp__5823__auto___73581__$1 = cljs.core.seq(seq__73233_73524);
if(temp__5823__auto___73581__$1){
var seq__73233_73582__$1 = temp__5823__auto___73581__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73233_73582__$1)){
var c__5521__auto___73583 = cljs.core.chunk_first(seq__73233_73582__$1);
var G__73584 = cljs.core.chunk_rest(seq__73233_73582__$1);
var G__73585 = c__5521__auto___73583;
var G__73586 = cljs.core.count(c__5521__auto___73583);
var G__73587 = (0);
seq__73233_73524 = G__73584;
chunk__73237_73525 = G__73585;
count__73238_73526 = G__73586;
i__73239_73527 = G__73587;
continue;
} else {
var node_73590 = cljs.core.first(seq__73233_73582__$1);
if(cljs.core.not(node_73590.shadow$old)){
var path_match_73591 = shadow.cljs.devtools.client.browser.match_paths(node_73590.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73591)){
var new_link_73592 = (function (){var G__73303 = node_73590.cloneNode(true);
G__73303.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73591),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73303;
})();
(node_73590.shadow$old = true);

(new_link_73592.onload = ((function (seq__73233_73524,chunk__73237_73525,count__73238_73526,i__73239_73527,seq__73012,chunk__73014,count__73015,i__73016,new_link_73592,path_match_73591,node_73590,seq__73233_73582__$1,temp__5823__auto___73581__$1,path,seq__73012__$1,temp__5823__auto__,map__73011,map__73011__$1,msg,updates,reload_info){
return (function (e){
var seq__73304_73593 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__73306_73594 = null;
var count__73307_73595 = (0);
var i__73308_73596 = (0);
while(true){
if((i__73308_73596 < count__73307_73595)){
var map__73312_73598 = chunk__73306_73594.cljs$core$IIndexed$_nth$arity$2(null,i__73308_73596);
var map__73312_73599__$1 = cljs.core.__destructure_map(map__73312_73598);
var task_73600 = map__73312_73599__$1;
var fn_str_73601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73312_73599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73312_73599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73603 = goog.getObjectByName(fn_str_73601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73602)].join(''));

(fn_obj_73603.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73603.cljs$core$IFn$_invoke$arity$2(path,new_link_73592) : fn_obj_73603.call(null,path,new_link_73592));


var G__73604 = seq__73304_73593;
var G__73605 = chunk__73306_73594;
var G__73606 = count__73307_73595;
var G__73607 = (i__73308_73596 + (1));
seq__73304_73593 = G__73604;
chunk__73306_73594 = G__73605;
count__73307_73595 = G__73606;
i__73308_73596 = G__73607;
continue;
} else {
var temp__5823__auto___73608__$2 = cljs.core.seq(seq__73304_73593);
if(temp__5823__auto___73608__$2){
var seq__73304_73609__$1 = temp__5823__auto___73608__$2;
if(cljs.core.chunked_seq_QMARK_(seq__73304_73609__$1)){
var c__5521__auto___73612 = cljs.core.chunk_first(seq__73304_73609__$1);
var G__73613 = cljs.core.chunk_rest(seq__73304_73609__$1);
var G__73614 = c__5521__auto___73612;
var G__73615 = cljs.core.count(c__5521__auto___73612);
var G__73616 = (0);
seq__73304_73593 = G__73613;
chunk__73306_73594 = G__73614;
count__73307_73595 = G__73615;
i__73308_73596 = G__73616;
continue;
} else {
var map__73313_73617 = cljs.core.first(seq__73304_73609__$1);
var map__73313_73618__$1 = cljs.core.__destructure_map(map__73313_73617);
var task_73619 = map__73313_73618__$1;
var fn_str_73620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73313_73618__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73313_73618__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73622 = goog.getObjectByName(fn_str_73620,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73621)].join(''));

(fn_obj_73622.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73622.cljs$core$IFn$_invoke$arity$2(path,new_link_73592) : fn_obj_73622.call(null,path,new_link_73592));


var G__73623 = cljs.core.next(seq__73304_73609__$1);
var G__73624 = null;
var G__73625 = (0);
var G__73626 = (0);
seq__73304_73593 = G__73623;
chunk__73306_73594 = G__73624;
count__73307_73595 = G__73625;
i__73308_73596 = G__73626;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_73590);
});})(seq__73233_73524,chunk__73237_73525,count__73238_73526,i__73239_73527,seq__73012,chunk__73014,count__73015,i__73016,new_link_73592,path_match_73591,node_73590,seq__73233_73582__$1,temp__5823__auto___73581__$1,path,seq__73012__$1,temp__5823__auto__,map__73011,map__73011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73591], 0));

goog.dom.insertSiblingAfter(new_link_73592,node_73590);


var G__73627 = cljs.core.next(seq__73233_73582__$1);
var G__73628 = null;
var G__73629 = (0);
var G__73630 = (0);
seq__73233_73524 = G__73627;
chunk__73237_73525 = G__73628;
count__73238_73526 = G__73629;
i__73239_73527 = G__73630;
continue;
} else {
var G__73631 = cljs.core.next(seq__73233_73582__$1);
var G__73632 = null;
var G__73633 = (0);
var G__73634 = (0);
seq__73233_73524 = G__73631;
chunk__73237_73525 = G__73632;
count__73238_73526 = G__73633;
i__73239_73527 = G__73634;
continue;
}
} else {
var G__73635 = cljs.core.next(seq__73233_73582__$1);
var G__73636 = null;
var G__73637 = (0);
var G__73638 = (0);
seq__73233_73524 = G__73635;
chunk__73237_73525 = G__73636;
count__73238_73526 = G__73637;
i__73239_73527 = G__73638;
continue;
}
}
} else {
}
}
break;
}


var G__73641 = cljs.core.next(seq__73012__$1);
var G__73642 = null;
var G__73643 = (0);
var G__73644 = (0);
seq__73012 = G__73641;
chunk__73014 = G__73642;
count__73015 = G__73643;
i__73016 = G__73644;
continue;
} else {
var G__73645 = cljs.core.next(seq__73012__$1);
var G__73646 = null;
var G__73647 = (0);
var G__73648 = (0);
seq__73012 = G__73645;
chunk__73014 = G__73646;
count__73015 = G__73647;
i__73016 = G__73648;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__73314){
var map__73315 = p__73314;
var map__73315__$1 = cljs.core.__destructure_map(map__73315);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73315__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__73316,done,error){
var map__73317 = p__73316;
var map__73317__$1 = cljs.core.__destructure_map(map__73317);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73317__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__73318,done,error){
var map__73319 = p__73318;
var map__73319__$1 = cljs.core.__destructure_map(map__73319);
var msg = map__73319__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73319__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73319__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73319__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__73320){
var map__73321 = p__73320;
var map__73321__$1 = cljs.core.__destructure_map(map__73321);
var src = map__73321__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73321__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4996__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4996__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__73322 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__73322) : done.call(null,G__73322));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__73323){
var map__73324 = p__73323;
var map__73324__$1 = cljs.core.__destructure_map(map__73324);
var msg__$1 = map__73324__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73324__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e73325){var ex = e73325;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__73326){
var map__73327 = p__73326;
var map__73327__$1 = cljs.core.__destructure_map(map__73327);
var env = map__73327__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73327__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__73328){
var map__73329 = p__73328;
var map__73329__$1 = cljs.core.__destructure_map(map__73329);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73329__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73329__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__73330){
var map__73331 = p__73330;
var map__73331__$1 = cljs.core.__destructure_map(map__73331);
var svc = map__73331__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73331__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
