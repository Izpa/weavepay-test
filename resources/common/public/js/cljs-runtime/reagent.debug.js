goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__73753__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__73753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73754__i = 0, G__73754__a = new Array(arguments.length -  0);
while (G__73754__i < G__73754__a.length) {G__73754__a[G__73754__i] = arguments[G__73754__i + 0]; ++G__73754__i;}
  args = new cljs.core.IndexedSeq(G__73754__a,0,null);
} 
return G__73753__delegate.call(this,args);};
G__73753.cljs$lang$maxFixedArity = 0;
G__73753.cljs$lang$applyTo = (function (arglist__73755){
var args = cljs.core.seq(arglist__73755);
return G__73753__delegate(args);
});
G__73753.cljs$core$IFn$_invoke$arity$variadic = G__73753__delegate;
return G__73753;
})()
);

(o.error = (function() { 
var G__73756__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__73756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73757__i = 0, G__73757__a = new Array(arguments.length -  0);
while (G__73757__i < G__73757__a.length) {G__73757__a[G__73757__i] = arguments[G__73757__i + 0]; ++G__73757__i;}
  args = new cljs.core.IndexedSeq(G__73757__a,0,null);
} 
return G__73756__delegate.call(this,args);};
G__73756.cljs$lang$maxFixedArity = 0;
G__73756.cljs$lang$applyTo = (function (arglist__73758){
var args = cljs.core.seq(arglist__73758);
return G__73756__delegate(args);
});
G__73756.cljs$core$IFn$_invoke$arity$variadic = G__73756__delegate;
return G__73756;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
