goog.provide('articles.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-articles-filter","update-articles-filter",-2077641356),(function (db,p__73059){
var vec__73060 = p__73059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73060,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73060,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles-filter","articles-filter",-1958182348),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-articles-per-page","update-articles-per-page",1123047078),(function (db,p__73064){
var vec__73068 = p__73064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73068,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73068,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles-per-page","articles-per-page",-252013793),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-articles-page-input","update-articles-page-input",1315165725),(function (db,p__73071){
var vec__73073 = p__73071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73073,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73073,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles-page-input","articles-page-input",-754459515),val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-articles","fetch-articles",-2111518162),(function (p__73079,p__73080){
var map__73081 = p__73079;
var map__73081__$1 = cljs.core.__destructure_map(map__73081);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73081__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__73082 = p__73080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73082,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73082,(1),null);
var current_page = new cljs.core.Keyword(null,"articles-page","articles-page",301875404).cljs$core$IFn$_invoke$arity$1(db);
var new_page = (function (){var or__4998__auto__ = page;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return current_page;
}
})();
var per_page = new cljs.core.Keyword(null,"articles-per-page","articles-per-page",-252013793).cljs$core$IFn$_invoke$arity$1(db);
var offset = ((new_page - (1)) * per_page);
var query = new cljs.core.Keyword(null,"articles-filter","articles-filter",-1958182348).cljs$core$IFn$_invoke$arity$1(db);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"q","q",689001697),query,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"limit","limit",-1355822363),per_page], null);
if(cljs.core.not(malli.core.validate.cljs$core$IFn$_invoke$arity$2(schema.article_query,params))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles-error","articles-error",95671191),"Invalid input")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles-error","articles-error",95671191),null),new cljs.core.Keyword(null,"articles-page","articles-page",301875404),new_page),new cljs.core.Keyword(null,"articles-page-input","articles-page-input",-754459515),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_page)),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["/articles?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(query)),"&offset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"&limit=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(per_page)].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles-success","articles-success",-1981567209)], null)], null)], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"articles-success","articles-success",-1981567209),(function (db,p__73089){
var vec__73090 = p__73089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73090,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73090,(1),null);
var map__73093 = result;
var map__73093__$1 = cljs.core.__destructure_map(map__73093);
var articles__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73093__$1,new cljs.core.Keyword(null,"articles","articles",-454771639));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73093__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var simplify = (function (a){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("articles","publication_name","articles/publication_name",1147163528).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword("articles","creator","articles/creator",2013625405).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword("articles","cover_date","articles/cover_date",-1456565402).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"doi","doi",-2042355282),new cljs.core.Keyword("articles","doi","articles/doi",-813232273).cljs$core$IFn$_invoke$arity$1(a)], null);
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"articles-list","articles-list",-1449602610),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(simplify,articles__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"articles-total","articles-total",-1636797224),total], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-page","change-page",-1758403218),(function (p__73094,p__73095){
var map__73096 = p__73094;
var map__73096__$1 = cljs.core.__destructure_map(map__73096);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__73097 = p__73095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73097,(0),null);
var new_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73097,(1),null);
var per_page = new cljs.core.Keyword(null,"articles-per-page","articles-per-page",-252013793).cljs$core$IFn$_invoke$arity$1(db);
var total = new cljs.core.Keyword(null,"articles-total","articles-total",-1636797224).cljs$core$IFn$_invoke$arity$1(db);
var max_page = (function (){var x__5083__auto__ = (1);
var y__5084__auto__ = Math.ceil((total / per_page));
return ((x__5083__auto__ > y__5084__auto__) ? x__5083__auto__ : y__5084__auto__);
})();
var validated_page = ((typeof new_page === 'string')?(function (){var parsed = parseInt(new_page);
if(cljs.core.truth_(isNaN(parsed))){
return new cljs.core.Keyword(null,"articles-page","articles-page",301875404).cljs$core$IFn$_invoke$arity$1(db);
} else {
var x__5083__auto__ = (1);
var y__5084__auto__ = (function (){var x__5086__auto__ = parsed;
var y__5087__auto__ = max_page;
return ((x__5086__auto__ < y__5087__auto__) ? x__5086__auto__ : y__5087__auto__);
})();
return ((x__5083__auto__ > y__5084__auto__) ? x__5083__auto__ : y__5084__auto__);
}
})():((typeof new_page === 'number')?(function (){var x__5083__auto__ = (1);
var y__5084__auto__ = (function (){var x__5086__auto__ = new_page;
var y__5087__auto__ = max_page;
return ((x__5086__auto__ < y__5087__auto__) ? x__5086__auto__ : y__5087__auto__);
})();
return ((x__5083__auto__ > y__5084__auto__) ? x__5083__auto__ : y__5084__auto__);
})():new cljs.core.Keyword(null,"articles-page","articles-page",301875404).cljs$core$IFn$_invoke$arity$1(db)
));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-articles","fetch-articles",-2111518162),validated_page], null)], null);
}));

//# sourceMappingURL=articles.events.js.map
