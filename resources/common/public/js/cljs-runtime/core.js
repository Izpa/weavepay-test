goog.provide('core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"articles-page-input","articles-page-input",-754459515),new cljs.core.Keyword(null,"find-loading?","find-loading?",-1490035195),new cljs.core.Keyword(null,"articles-page","articles-page",301875404),new cljs.core.Keyword(null,"articles-list","articles-list",-1449602610),new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.Keyword(null,"articles-filter","articles-filter",-1958182348),new cljs.core.Keyword(null,"articles-total","articles-total",-1636797224),new cljs.core.Keyword(null,"find-results","find-results",-321415749),new cljs.core.Keyword(null,"articles-per-page","articles-per-page",-252013793)],["1",false,(1),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),"",(0),null,(10)]);
}));
core.app = (function core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [find.keywords_input.keywords_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [find.result_section.result_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [articles.ui.article_section], null)], null);
});
if((typeof core !== 'undefined') && (typeof core.root !== 'undefined')){
} else {
core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
core.mount = (function core$mount(){
return core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [core.app], null)));
});
core.init = (function core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-articles","fetch-articles",-2111518162),null], null));

return core.mount();
});

//# sourceMappingURL=core.js.map
