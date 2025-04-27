goog.provide('find.result_section');
find.result_section.spinner = (function find$result_section$spinner(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner","div.spinner",-1989566624)], null);
});
find.result_section.result_table = (function find$result_section$result_table(articles__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Publication"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Author"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"DOI"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5476__auto__ = (function find$result_section$result_table_$_iter__73031(s__73032){
return (new cljs.core.LazySeq(null,(function (){
var s__73032__$1 = s__73032;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__73032__$1);
if(temp__5823__auto__){
var s__73032__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73032__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__73032__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__73034 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__73033 = (0);
while(true){
if((i__73033 < size__5475__auto__)){
var map__73038 = cljs.core._nth(c__5474__auto__,i__73033);
var map__73038__$1 = cljs.core.__destructure_map(map__73038);
var publication_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73038__$1,new cljs.core.Keyword("articles","publication_name","articles/publication_name",1147163528));
var cover_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73038__$1,new cljs.core.Keyword("articles","cover_date","articles/cover_date",-1456565402));
var creator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73038__$1,new cljs.core.Keyword("articles","creator","articles/creator",2013625405));
var doi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73038__$1,new cljs.core.Keyword("articles","doi","articles/doi",-813232273));
cljs.core.chunk_append(b__73034,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),publication_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cover_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),creator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),doi], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__4998__auto__ = doi;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return publication_name;
}
})()], null)));

var G__73053 = (i__73033 + (1));
i__73033 = G__73053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73034),find$result_section$result_table_$_iter__73031(cljs.core.chunk_rest(s__73032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73034),null);
}
} else {
var map__73039 = cljs.core.first(s__73032__$2);
var map__73039__$1 = cljs.core.__destructure_map(map__73039);
var publication_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73039__$1,new cljs.core.Keyword("articles","publication_name","articles/publication_name",1147163528));
var cover_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73039__$1,new cljs.core.Keyword("articles","cover_date","articles/cover_date",-1456565402));
var creator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73039__$1,new cljs.core.Keyword("articles","creator","articles/creator",2013625405));
var doi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73039__$1,new cljs.core.Keyword("articles","doi","articles/doi",-813232273));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),publication_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cover_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),creator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),doi], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__4998__auto__ = doi;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return publication_name;
}
})()], null)),find$result_section$result_table_$_iter__73031(cljs.core.rest(s__73032__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(articles__$1);
})()], null)], null);
});
find.result_section.result_section = (function find$result_section$result_section(){
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find-loading?","find-loading?",-1490035195)], null)));
var map__73047 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find-results","find-results",-321415749)], null)));
var map__73047__$1 = cljs.core.__destructure_map(map__73047);
var new$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73047__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var existed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73047__$1,new cljs.core.Keyword(null,"existed","existed",-1636752448));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [find.result_section.spinner], null):null),((cljs.core.seq(new$))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),["New articles (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new$)),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [find.result_section.result_table,new$], null)], null):null),((cljs.core.seq(existed))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),["Existed articles (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(existed)),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [find.result_section.result_table,existed], null)], null):null)], null);
});

//# sourceMappingURL=find.result_section.js.map
