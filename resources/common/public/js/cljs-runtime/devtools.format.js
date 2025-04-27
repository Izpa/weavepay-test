goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_62514 = (function (value){
var x__5346__auto__ = (((value == null))?null:value);
var m__5347__auto__ = (devtools.format._header[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5347__auto__.call(null,value));
} else {
var m__5345__auto__ = (devtools.format._header["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5345__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_62514(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_62524 = (function (value){
var x__5346__auto__ = (((value == null))?null:value);
var m__5347__auto__ = (devtools.format._has_body[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5347__auto__.call(null,value));
} else {
var m__5345__auto__ = (devtools.format._has_body["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5345__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_62524(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_62530 = (function (value){
var x__5346__auto__ = (((value == null))?null:value);
var m__5347__auto__ = (devtools.format._body[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5347__auto__.call(null,value));
} else {
var m__5345__auto__ = (devtools.format._body["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5345__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_62530(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o62377 = temp__5821__auto__;
var temp__5821__auto____$1 = (o62377["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o62378 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o62378["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o62379 = temp__5821__auto____$2;
return (o62379["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o62380 = temp__5821__auto__;
var temp__5821__auto____$1 = (o62380["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o62381 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o62381["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o62382 = temp__5821__auto____$2;
return (o62382["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o62383 = temp__5821__auto__;
var temp__5821__auto____$1 = (o62383["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o62384 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o62384["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o62385 = temp__5821__auto____$2;
return (o62385["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o62386 = temp__5821__auto__;
var temp__5821__auto____$1 = (o62386["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o62387 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o62387["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o62388 = temp__5821__auto____$2;
return (o62388["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o62389 = temp__5821__auto__;
var temp__5821__auto____$1 = (o62389["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o62390 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o62390["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o62391 = temp__5821__auto____$2;
return (o62391["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o62392 = temp__5821__auto__;
var temp__5821__auto____$1 = (o62392["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o62393 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o62393["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o62394 = temp__5821__auto____$2;
return (o62394["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o62395 = temp__5821__auto__;
var temp__5821__auto____$1 = (o62395["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o62396 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o62396["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o62397 = temp__5821__auto____$2;
return (o62397["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62593 = arguments.length;
var i__5723__auto___62594 = (0);
while(true){
if((i__5723__auto___62594 < len__5722__auto___62593)){
args__5728__auto__.push((arguments[i__5723__auto___62594]));

var G__62596 = (i__5723__auto___62594 + (1));
i__5723__auto___62594 = G__62596;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq62401){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62401));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62602 = arguments.length;
var i__5723__auto___62603 = (0);
while(true){
if((i__5723__auto___62603 < len__5722__auto___62602)){
args__5728__auto__.push((arguments[i__5723__auto___62603]));

var G__62605 = (i__5723__auto___62603 + (1));
i__5723__auto___62603 = G__62605;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq62407){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62407));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62620 = arguments.length;
var i__5723__auto___62622 = (0);
while(true){
if((i__5723__auto___62622 < len__5722__auto___62620)){
args__5728__auto__.push((arguments[i__5723__auto___62622]));

var G__62623 = (i__5723__auto___62622 + (1));
i__5723__auto___62622 = G__62623;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq62412){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62412));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62628 = arguments.length;
var i__5723__auto___62629 = (0);
while(true){
if((i__5723__auto___62629 < len__5722__auto___62628)){
args__5728__auto__.push((arguments[i__5723__auto___62629]));

var G__62630 = (i__5723__auto___62629 + (1));
i__5723__auto___62629 = G__62630;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq62419){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62419));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62642 = arguments.length;
var i__5723__auto___62643 = (0);
while(true){
if((i__5723__auto___62643 < len__5722__auto___62642)){
args__5728__auto__.push((arguments[i__5723__auto___62643]));

var G__62644 = (i__5723__auto___62643 + (1));
i__5723__auto___62643 = G__62644;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq62429){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62429));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62647 = arguments.length;
var i__5723__auto___62649 = (0);
while(true){
if((i__5723__auto___62649 < len__5722__auto___62647)){
args__5728__auto__.push((arguments[i__5723__auto___62649]));

var G__62652 = (i__5723__auto___62649 + (1));
i__5723__auto___62649 = G__62652;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq62440){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62440));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62665 = arguments.length;
var i__5723__auto___62669 = (0);
while(true){
if((i__5723__auto___62669 < len__5722__auto___62665)){
args__5728__auto__.push((arguments[i__5723__auto___62669]));

var G__62674 = (i__5723__auto___62669 + (1));
i__5723__auto___62669 = G__62674;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq62447){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62447));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62694 = arguments.length;
var i__5723__auto___62696 = (0);
while(true){
if((i__5723__auto___62696 < len__5722__auto___62694)){
args__5728__auto__.push((arguments[i__5723__auto___62696]));

var G__62701 = (i__5723__auto___62696 + (1));
i__5723__auto___62696 = G__62701;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__62465){
var vec__62466 = p__62465;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62466,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__62457_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__62457_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq62458){
var G__62459 = cljs.core.first(seq62458);
var seq62458__$1 = cljs.core.next(seq62458);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62459,seq62458__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__62472 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__62473 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__62474 = (function (){var G__62475 = new cljs.core.Keyword(null,"li","li",723558921);
var G__62476 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__62477 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__62475,G__62476,G__62477) : devtools.format.make_template_fn.call(null,G__62475,G__62476,G__62477));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__62472,G__62473,G__62474) : devtools.format.make_template_fn.call(null,G__62472,G__62473,G__62474));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62738 = arguments.length;
var i__5723__auto___62739 = (0);
while(true){
if((i__5723__auto___62739 < len__5722__auto___62738)){
args__5728__auto__.push((arguments[i__5723__auto___62739]));

var G__62740 = (i__5723__auto___62739 + (1));
i__5723__auto___62739 = G__62740;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq62478){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62478));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5728__auto__ = [];
var len__5722__auto___62757 = arguments.length;
var i__5723__auto___62758 = (0);
while(true){
if((i__5723__auto___62758 < len__5722__auto___62757)){
args__5728__auto__.push((arguments[i__5723__auto___62758]));

var G__62759 = (i__5723__auto___62758 + (1));
i__5723__auto___62758 = G__62759;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq62488){
var G__62489 = cljs.core.first(seq62488);
var seq62488__$1 = cljs.core.next(seq62488);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62489,seq62488__$1);
}));


//# sourceMappingURL=devtools.format.js.map
