goog.provide('devtools.reporter');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___64906 = arguments.length;
var i__5723__auto___64907 = (0);
while(true){
if((i__5723__auto___64907 < len__5722__auto___64906)){
args__5728__auto__.push((arguments[i__5723__auto___64907]));

var G__64908 = (i__5723__auto___64907 + (1));
i__5723__auto___64907 = G__64908;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__64896){
var vec__64897 = p__64896;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64897,(0),null);
var footer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64897,(1),null);
var console__$1 = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__4998__auto__ = e.message;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info(),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console__$1["groupCollapsed"]);
var log = (console__$1["log"]);
var group_end = (console__$1["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console__$1,header);

log.apply(console__$1,details);

return group_end.call(console__$1);
}catch (e64902){var e__$1 = e64902;
return console__$1.error("FATAL: report-internal-error! failed",e__$1);
}}));

(devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq64893){
var G__64894 = cljs.core.first(seq64893);
var seq64893__$1 = cljs.core.next(seq64893);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64894,seq64893__$1);
}));


//# sourceMappingURL=devtools.reporter.js.map
