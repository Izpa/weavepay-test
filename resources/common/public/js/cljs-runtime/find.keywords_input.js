goog.provide('find.keywords_input');
find.keywords_input.keywords_input = (function find$keywords_input$keywords_input(){
var ks = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null)));
var err = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find-error","find-error",-1639992273)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5476__auto__ = (function find$keywords_input$keywords_input_$_iter__73027(s__73028){
return (new cljs.core.LazySeq(null,(function (){
var s__73028__$1 = s__73028;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__73028__$1);
if(temp__5823__auto__){
var s__73028__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73028__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__73028__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__73030 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__73029 = (0);
while(true){
if((i__73029 < size__5475__auto__)){
var vec__73035 = cljs.core._nth(c__5474__auto__,i__73029);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73035,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73035,(1),null);
cljs.core.chunk_append(b__73030,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__73029,vec__73035,i,k,c__5474__auto__,size__5475__auto__,b__73030,s__73028__$2,temp__5823__auto__,ks,err){
return (function (p1__73024_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-keyword","update-keyword",1222264638),i,p1__73024_SHARP_.target.value], null));
});})(i__73029,vec__73035,i,k,c__5474__auto__,size__5475__auto__,b__73030,s__73028__$2,temp__5823__auto__,ks,err))
], null)], null),(((cljs.core.count(ks) > (1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__73029,vec__73035,i,k,c__5474__auto__,size__5475__auto__,b__73030,s__73028__$2,temp__5823__auto__,ks,err){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-keyword","remove-keyword",-1152099743),i], null));
});})(i__73029,vec__73035,i,k,c__5474__auto__,size__5475__auto__,b__73030,s__73028__$2,temp__5823__auto__,ks,err))
], null),"-"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__73052 = (i__73029 + (1));
i__73029 = G__73052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73030),find$keywords_input$keywords_input_$_iter__73027(cljs.core.chunk_rest(s__73028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73030),null);
}
} else {
var vec__73040 = cljs.core.first(s__73028__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73040,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73040,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__73040,i,k,s__73028__$2,temp__5823__auto__,ks,err){
return (function (p1__73024_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-keyword","update-keyword",1222264638),i,p1__73024_SHARP_.target.value], null));
});})(vec__73040,i,k,s__73028__$2,temp__5823__auto__,ks,err))
], null)], null),(((cljs.core.count(ks) > (1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__73040,i,k,s__73028__$2,temp__5823__auto__,ks,err){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-keyword","remove-keyword",-1152099743),i], null));
});})(vec__73040,i,k,s__73028__$2,temp__5823__auto__,ks,err))
], null),"-"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),find$keywords_input$keywords_input_$_iter__73027(cljs.core.rest(s__73028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,ks));
})(),(cljs.core.truth_(err)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),err], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-keyword","add-keyword",-499948334)], null));
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"do-find","do-find",1193032536)], null));
})], null),"Find"], null)], null);
});

//# sourceMappingURL=find.keywords_input.js.map
