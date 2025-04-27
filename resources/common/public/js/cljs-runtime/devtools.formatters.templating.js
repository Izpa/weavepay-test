goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x64895_65037 = value;
(x64895_65037.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x64903_65044 = value;
(x64903_65044.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x64905_65053 = value;
(x64905_65053.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__5728__auto__ = [];
var len__5722__auto___65055 = arguments.length;
var i__5723__auto___65060 = (0);
while(true){
if((i__5723__auto___65060 < len__5722__auto___65055)){
args__5728__auto__.push((arguments[i__5723__auto___65060]));

var G__65061 = (i__5723__auto___65060 + (1));
i__5723__auto___65060 = G__65061;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__64912_65063 = cljs.core.seq(items);
var chunk__64913_65064 = null;
var count__64914_65065 = (0);
var i__64915_65066 = (0);
while(true){
if((i__64915_65066 < count__64914_65065)){
var item_65068 = chunk__64913_65064.cljs$core$IIndexed$_nth$arity$2(null,i__64915_65066);
if((!((item_65068 == null)))){
if(cljs.core.coll_QMARK_(item_65068)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_65068)));
} else {
group.push(devtools.formatters.helpers.pref(item_65068));
}
} else {
}


var G__65069 = seq__64912_65063;
var G__65070 = chunk__64913_65064;
var G__65071 = count__64914_65065;
var G__65072 = (i__64915_65066 + (1));
seq__64912_65063 = G__65069;
chunk__64913_65064 = G__65070;
count__64914_65065 = G__65071;
i__64915_65066 = G__65072;
continue;
} else {
var temp__5823__auto___65073 = cljs.core.seq(seq__64912_65063);
if(temp__5823__auto___65073){
var seq__64912_65075__$1 = temp__5823__auto___65073;
if(cljs.core.chunked_seq_QMARK_(seq__64912_65075__$1)){
var c__5521__auto___65077 = cljs.core.chunk_first(seq__64912_65075__$1);
var G__65078 = cljs.core.chunk_rest(seq__64912_65075__$1);
var G__65079 = c__5521__auto___65077;
var G__65080 = cljs.core.count(c__5521__auto___65077);
var G__65081 = (0);
seq__64912_65063 = G__65078;
chunk__64913_65064 = G__65079;
count__64914_65065 = G__65080;
i__64915_65066 = G__65081;
continue;
} else {
var item_65083 = cljs.core.first(seq__64912_65075__$1);
if((!((item_65083 == null)))){
if(cljs.core.coll_QMARK_(item_65083)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_65083)));
} else {
group.push(devtools.formatters.helpers.pref(item_65083));
}
} else {
}


var G__65085 = cljs.core.next(seq__64912_65075__$1);
var G__65086 = null;
var G__65087 = (0);
var G__65088 = (0);
seq__64912_65063 = G__65085;
chunk__64913_65064 = G__65086;
count__64914_65065 = G__65087;
i__64915_65066 = G__65088;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq64911){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64911));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__5728__auto__ = [];
var len__5722__auto___65089 = arguments.length;
var i__5723__auto___65090 = (0);
while(true){
if((i__5723__auto___65090 < len__5722__auto___65089)){
args__5728__auto__.push((arguments[i__5723__auto___65090]));

var G__65093 = (i__5723__auto___65090 + (1));
i__5723__auto___65090 = G__65093;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__64928_65096 = cljs.core.seq(children);
var chunk__64929_65097 = null;
var count__64930_65098 = (0);
var i__64931_65099 = (0);
while(true){
if((i__64931_65099 < count__64930_65098)){
var child_65101 = chunk__64929_65097.cljs$core$IIndexed$_nth$arity$2(null,i__64931_65099);
if((!((child_65101 == null)))){
if(cljs.core.coll_QMARK_(child_65101)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_65101))));
} else {
var temp__5821__auto___65102 = devtools.formatters.helpers.pref(child_65101);
if(cljs.core.truth_(temp__5821__auto___65102)){
var child_value_65104 = temp__5821__auto___65102;
template.push(child_value_65104);
} else {
}
}
} else {
}


var G__65105 = seq__64928_65096;
var G__65106 = chunk__64929_65097;
var G__65107 = count__64930_65098;
var G__65108 = (i__64931_65099 + (1));
seq__64928_65096 = G__65105;
chunk__64929_65097 = G__65106;
count__64930_65098 = G__65107;
i__64931_65099 = G__65108;
continue;
} else {
var temp__5823__auto___65109 = cljs.core.seq(seq__64928_65096);
if(temp__5823__auto___65109){
var seq__64928_65110__$1 = temp__5823__auto___65109;
if(cljs.core.chunked_seq_QMARK_(seq__64928_65110__$1)){
var c__5521__auto___65111 = cljs.core.chunk_first(seq__64928_65110__$1);
var G__65112 = cljs.core.chunk_rest(seq__64928_65110__$1);
var G__65113 = c__5521__auto___65111;
var G__65114 = cljs.core.count(c__5521__auto___65111);
var G__65115 = (0);
seq__64928_65096 = G__65112;
chunk__64929_65097 = G__65113;
count__64930_65098 = G__65114;
i__64931_65099 = G__65115;
continue;
} else {
var child_65116 = cljs.core.first(seq__64928_65110__$1);
if((!((child_65116 == null)))){
if(cljs.core.coll_QMARK_(child_65116)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_65116))));
} else {
var temp__5821__auto___65122 = devtools.formatters.helpers.pref(child_65116);
if(cljs.core.truth_(temp__5821__auto___65122)){
var child_value_65124 = temp__5821__auto___65122;
template.push(child_value_65124);
} else {
}
}
} else {
}


var G__65127 = cljs.core.next(seq__64928_65110__$1);
var G__65128 = null;
var G__65129 = (0);
var G__65130 = (0);
seq__64928_65096 = G__65127;
chunk__64929_65097 = G__65128;
count__64930_65098 = G__65129;
i__64931_65099 = G__65130;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq64916){
var G__64917 = cljs.core.first(seq64916);
var seq64916__$1 = cljs.core.next(seq64916);
var G__64918 = cljs.core.first(seq64916__$1);
var seq64916__$2 = cljs.core.next(seq64916__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64917,G__64918,seq64916__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___65139 = arguments.length;
var i__5723__auto___65140 = (0);
while(true){
if((i__5723__auto___65140 < len__5722__auto___65139)){
args__5728__auto__.push((arguments[i__5723__auto___65140]));

var G__65142 = (i__5723__auto___65140 + (1));
i__5723__auto___65140 = G__65142;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq64945){
var G__64946 = cljs.core.first(seq64945);
var seq64945__$1 = cljs.core.next(seq64945);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64946,seq64945__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___65149 = arguments.length;
var i__5723__auto___65150 = (0);
while(true){
if((i__5723__auto___65150 < len__5722__auto___65149)){
args__5728__auto__.push((arguments[i__5723__auto___65150]));

var G__65155 = (i__5723__auto___65150 + (1));
i__5723__auto___65150 = G__65155;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq64962){
var G__64963 = cljs.core.first(seq64962);
var seq64962__$1 = cljs.core.next(seq64962);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64963,seq64962__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__64969 = arguments.length;
switch (G__64969) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj64972 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4998__auto__ = start_index;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (0);
}
})()});
return obj64972;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__5728__auto__ = [];
var len__5722__auto___65178 = arguments.length;
var i__5723__auto___65180 = (0);
while(true){
if((i__5723__auto___65180 < len__5722__auto___65178)){
args__5728__auto__.push((arguments[i__5723__auto___65180]));

var G__65185 = (i__5723__auto___65180 + (1));
i__5723__auto___65180 = G__65185;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__64984){
var vec__64985 = p__64984;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64985,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__64990 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__64990) : state_override_fn.call(null,G__64990));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq64978){
var G__64979 = cljs.core.first(seq64978);
var seq64978__$1 = cljs.core.next(seq64978);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64979,seq64978__$1);
}));

devtools.formatters.templating.make_annotation = (function devtools$formatters$templating$make_annotation(data,markups){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_group,"annotation",cljs.core.clj__GT_js(data),markups);
});
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__64993 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__64994 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64994);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64993);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__65016 = name;
switch (G__65016) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
case "annotation":
var data = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return devtools.formatters.templating.make_annotation(data,converted_args);

break;
default:
return devtools.formatters.templating.assert_markup_error(["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_(v)) || (((cljs.core.array_QMARK_(v)) || (typeof v === 'string'))))){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__65019 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65019,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65019,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__65022 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__65023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__65023);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error(["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__65022);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__65024 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__65025 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__65026 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__65027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__65026);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__65027);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__65025);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__65024);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"initial value: ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__65235 = initial_value;
var G__65236 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__65235;
value = G__65236;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__65245 = initial_value;
var G__65246 = devtools.formatters.helpers.pref(value);
initial_value = G__65245;
value = G__65246;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__65247 = initial_value;
var G__65248 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__65247;
value = G__65248;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});

//# sourceMappingURL=devtools.formatters.templating.js.map
