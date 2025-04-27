goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__62282__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__62282__auto__["add"]).call(o__62282__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__62282__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__62282__auto__["delete"]).call(o__62282__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__62282__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__62282__auto__["has"]).call(o__62282__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__65753 = data;
var target__62296__auto__ = G__65753;
if(cljs.core.truth_(target__62296__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65753)].join(''),"\n","target__62296__auto__"].join('')));
}

(target__62296__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__65753;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_65804 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_65804);
} else {
var seq__65765_65806 = cljs.core.seq(json_ml);
var chunk__65766_65807 = null;
var count__65767_65808 = (0);
var i__65768_65809 = (0);
while(true){
if((i__65768_65809 < count__65767_65808)){
var item_65811 = chunk__65766_65807.cljs$core$IIndexed$_nth$arity$2(null,i__65768_65809);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_65811,new_depth_budget_65804) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_65811,new_depth_budget_65804));


var G__65814 = seq__65765_65806;
var G__65815 = chunk__65766_65807;
var G__65816 = count__65767_65808;
var G__65817 = (i__65768_65809 + (1));
seq__65765_65806 = G__65814;
chunk__65766_65807 = G__65815;
count__65767_65808 = G__65816;
i__65768_65809 = G__65817;
continue;
} else {
var temp__5823__auto___65819 = cljs.core.seq(seq__65765_65806);
if(temp__5823__auto___65819){
var seq__65765_65820__$1 = temp__5823__auto___65819;
if(cljs.core.chunked_seq_QMARK_(seq__65765_65820__$1)){
var c__5521__auto___65821 = cljs.core.chunk_first(seq__65765_65820__$1);
var G__65822 = cljs.core.chunk_rest(seq__65765_65820__$1);
var G__65823 = c__5521__auto___65821;
var G__65824 = cljs.core.count(c__5521__auto___65821);
var G__65825 = (0);
seq__65765_65806 = G__65822;
chunk__65766_65807 = G__65823;
count__65767_65808 = G__65824;
i__65768_65809 = G__65825;
continue;
} else {
var item_65826 = cljs.core.first(seq__65765_65820__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_65826,new_depth_budget_65804) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_65826,new_depth_budget_65804));


var G__65828 = cljs.core.next(seq__65765_65820__$1);
var G__65829 = null;
var G__65830 = (0);
var G__65831 = (0);
seq__65765_65806 = G__65828;
chunk__65766_65807 = G__65829;
count__65767_65808 = G__65830;
i__65768_65809 = G__65831;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5821__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5821__auto__)){
var initial_hierarchy_depth_budget = temp__5821__auto__;
var remaining_depth_budget = (function (){var or__4998__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
