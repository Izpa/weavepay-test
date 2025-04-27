goog.provide('find.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-keyword","add-keyword",-499948334),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"keywords","keywords",1526959054),cljs.core.conj,"");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-keyword","remove-keyword",-1152099743),(function (db,p__73055){
var vec__73056 = p__73055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73056,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73056,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"keywords","keywords",1526959054),(function (p1__73054_SHARP_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__73054_SHARP_,(0),idx),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(p1__73054_SHARP_,(idx + (1)))));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-keyword","update-keyword",1222264638),(function (db,p__73063){
var vec__73065 = p__73063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73065,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73065,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73065,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keywords","keywords",1526959054),idx], null),val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"do-find","do-find",1193032536),(function (p__73077,_){
var map__73078 = p__73077;
var map__73078__$1 = cljs.core.__destructure_map(map__73078);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73078__$1,new cljs.core.Keyword(null,"db","db",993250759));
var words = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(db));
var errors = (cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(schema.find_request,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"word","word",-420123725),cljs.core.vec(words)], null)))?null:"Please enter at least one valid keyword.");
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"find-error","find-error",-1639992273),errors)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"find-loading?","find-loading?",-1490035195),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"find-error","find-error",-1639992273),null], 0)),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["/find?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73076_SHARP_){
return ["word=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(p1__73076_SHARP_))].join('');
}),words))].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find-success","find-success",-568676156)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find-failure","find-failure",-463259616)], null)], null)], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"find-success","find-success",-568676156),(function (db,p__73085){
var vec__73086 = p__73085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73086,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73086,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"find-results","find-results",-321415749),result),new cljs.core.Keyword(null,"find-loading?","find-loading?",-1490035195),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"find-failure","find-failure",-463259616),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"find-loading?","find-loading?",-1490035195),false);
}));

//# sourceMappingURL=find.events.js.map
