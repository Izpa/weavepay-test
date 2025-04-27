goog.provide('integrant.core');

/**
 * @interface
 */
integrant.core.RefLike = function(){};

var integrant$core$RefLike$ref_key$dyn_70706 = (function (r){
var x__5346__auto__ = (((r == null))?null:r);
var m__5347__auto__ = (integrant.core.ref_key[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(r) : m__5347__auto__.call(null,r));
} else {
var m__5345__auto__ = (integrant.core.ref_key["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(r) : m__5345__auto__.call(null,r));
} else {
throw cljs.core.missing_protocol("RefLike.ref-key",r);
}
}
});
/**
 * Return the key of the reference.
 */
integrant.core.ref_key = (function integrant$core$ref_key(r){
if((((!((r == null)))) && ((!((r.integrant$core$RefLike$ref_key$arity$1 == null)))))){
return r.integrant$core$RefLike$ref_key$arity$1(r);
} else {
return integrant$core$RefLike$ref_key$dyn_70706(r);
}
});

var integrant$core$RefLike$ref_resolve$dyn_70707 = (function (r,config,resolvef){
var x__5346__auto__ = (((r == null))?null:r);
var m__5347__auto__ = (integrant.core.ref_resolve[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(r,config,resolvef) : m__5347__auto__.call(null,r,config,resolvef));
} else {
var m__5345__auto__ = (integrant.core.ref_resolve["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(r,config,resolvef) : m__5345__auto__.call(null,r,config,resolvef));
} else {
throw cljs.core.missing_protocol("RefLike.ref-resolve",r);
}
}
});
/**
 * Return the resolved value.
 */
integrant.core.ref_resolve = (function integrant$core$ref_resolve(r,config,resolvef){
if((((!((r == null)))) && ((!((r.integrant$core$RefLike$ref_resolve$arity$3 == null)))))){
return r.integrant$core$RefLike$ref_resolve$arity$3(r,config,resolvef);
} else {
return integrant$core$RefLike$ref_resolve$dyn_70707(r,config,resolvef);
}
});

if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.composite_keyword !== 'undefined')){
} else {
/**
 * Return a unique keyword that is derived from an ordered collection of
 *   keywords. The function will return the same keyword for the same collection.
 */
integrant.core.composite_keyword = cljs.core.memoize((function (kws){
var parts = (function (){var iter__5476__auto__ = (function integrant$core$iter__70465(s__70466){
return (new cljs.core.LazySeq(null,(function (){
var s__70466__$1 = s__70466;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__70466__$1);
if(temp__5823__auto__){
var s__70466__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70466__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__70466__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__70468 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__70467 = (0);
while(true){
if((i__70467 < size__5475__auto__)){
var kw = cljs.core._nth(c__5474__auto__,i__70467);
cljs.core.chunk_append(b__70468,[cljs.core.namespace(kw),".",cljs.core.name(kw)].join(''));

var G__70712 = (i__70467 + (1));
i__70467 = G__70712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70468),integrant$core$iter__70465(cljs.core.chunk_rest(s__70466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70468),null);
}
} else {
var kw = cljs.core.first(s__70466__$2);
return cljs.core.cons([cljs.core.namespace(kw),".",cljs.core.name(kw)].join(''),integrant$core$iter__70465(cljs.core.rest(s__70466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(kws);
})();
var prefix = [clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",parts),"_"].join('');
var composite = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("integrant.composite",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(prefix)));
var seq__70479_70713 = cljs.core.seq(kws);
var chunk__70480_70714 = null;
var count__70481_70715 = (0);
var i__70482_70716 = (0);
while(true){
if((i__70482_70716 < count__70481_70715)){
var kw_70717 = chunk__70480_70714.cljs$core$IIndexed$_nth$arity$2(null,i__70482_70716);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(composite,kw_70717);


var G__70718 = seq__70479_70713;
var G__70719 = chunk__70480_70714;
var G__70720 = count__70481_70715;
var G__70721 = (i__70482_70716 + (1));
seq__70479_70713 = G__70718;
chunk__70480_70714 = G__70719;
count__70481_70715 = G__70720;
i__70482_70716 = G__70721;
continue;
} else {
var temp__5823__auto___70722 = cljs.core.seq(seq__70479_70713);
if(temp__5823__auto___70722){
var seq__70479_70723__$1 = temp__5823__auto___70722;
if(cljs.core.chunked_seq_QMARK_(seq__70479_70723__$1)){
var c__5521__auto___70724 = cljs.core.chunk_first(seq__70479_70723__$1);
var G__70725 = cljs.core.chunk_rest(seq__70479_70723__$1);
var G__70726 = c__5521__auto___70724;
var G__70727 = cljs.core.count(c__5521__auto___70724);
var G__70728 = (0);
seq__70479_70713 = G__70725;
chunk__70480_70714 = G__70726;
count__70481_70715 = G__70727;
i__70482_70716 = G__70728;
continue;
} else {
var kw_70729 = cljs.core.first(seq__70479_70723__$1);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(composite,kw_70729);


var G__70730 = cljs.core.next(seq__70479_70723__$1);
var G__70731 = null;
var G__70732 = (0);
var G__70733 = (0);
seq__70479_70713 = G__70730;
chunk__70480_70714 = G__70731;
count__70481_70715 = G__70732;
i__70482_70716 = G__70733;
continue;
}
} else {
}
}
break;
}

return composite;
}));
}
integrant.core.invalid_ref_exception = (function integrant$core$invalid_ref_exception(ref){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid reference: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref),". Must be a qualified keyword or a ","vector of qualified keywords."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","invalid-ref","integrant.core/invalid-ref",1043165466),new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
});
integrant.core.composite_key_QMARK_ = (function integrant$core$composite_key_QMARK_(keys){
return ((cljs.core.vector_QMARK_(keys)) && (cljs.core.every_QMARK_(cljs.core.qualified_keyword_QMARK_,keys)));
});
/**
 * Return true if the key is a keyword or valid composite key.
 */
integrant.core.valid_config_key_QMARK_ = (function integrant$core$valid_config_key_QMARK_(key){
return ((cljs.core.qualified_keyword_QMARK_(key)) || (integrant.core.composite_key_QMARK_(key)));
});
/**
 * Given a valid Integrant key, return a keyword that uniquely identifies it.
 */
integrant.core.normalize_key = (function integrant$core$normalize_key(key){
if(integrant.core.valid_config_key_QMARK_(key)){
} else {
throw (new Error("Assert failed: (valid-config-key? key)"));
}

if(integrant.core.composite_key_QMARK_(key)){
return integrant.core.composite_keyword(key);
} else {
return key;
}
});
/**
 * Return true if a key is derived from candidate keyword or vector of
 *   keywords.
 */
integrant.core.derived_from_QMARK_ = (function integrant$core$derived_from_QMARK_(key,candidate){
var key__$1 = integrant.core.normalize_key(key);
if(cljs.core.vector_QMARK_(candidate)){
return cljs.core.every_QMARK_((function (p1__70496_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(key__$1,p1__70496_SHARP_);
}),candidate);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(key__$1,candidate);
}
});
/**
 * Return a seq of all entries in a map, m, where the key is derived from the
 *   a candidate key, k. If there are no matching keys, nil is returned. The
 *   candidate key may be a keyword, or vector of keywords.
 */
integrant.core.find_derived = (function integrant$core$find_derived(m,k){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__70497_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.key(p1__70497_SHARP_),k)) || (integrant.core.derived_from_QMARK_(cljs.core.key(p1__70497_SHARP_),k)));
}),m));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {integrant.core.RefLike}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
integrant.core.Ref = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k70501,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__70506 = k70501;
var G__70506__$1 = (((G__70506 instanceof cljs.core.Keyword))?G__70506.fqn:null);
switch (G__70506__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70501,else__5299__auto__);

}
}));

(integrant.core.Ref.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__70508){
var vec__70510 = p__70508;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70510,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70510,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(integrant.core.Ref.prototype.integrant$core$RefLike$ = cljs.core.PROTOCOL_SENTINEL);

(integrant.core.Ref.prototype.integrant$core$RefLike$ref_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
}));

(integrant.core.Ref.prototype.integrant$core$RefLike$ref_resolve$arity$3 = (function (_,config,resolvef){
var self__ = this;
var ___$1 = this;
var vec__70514 = cljs.core.first(integrant.core.find_derived(config,self__.key));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70514,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70514,(1),null);
return (resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v));
}));

(integrant.core.Ref.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#integrant.core.Ref{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70500){
var self__ = this;
var G__70500__$1 = this;
return (new cljs.core.RecordIter((0),G__70500__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(integrant.core.Ref.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(integrant.core.Ref.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new integrant.core.Ref(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(integrant.core.Ref.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (2146506987 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(integrant.core.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70502,other70503){
var self__ = this;
var this70502__$1 = this;
return (((!((other70503 == null)))) && ((((this70502__$1.constructor === other70503.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70502__$1.key,other70503.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70502__$1.__extmap,other70503.__extmap)))))));
}));

(integrant.core.Ref.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(integrant.core.Ref.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k70501){
var self__ = this;
var this__5303__auto____$1 = this;
var G__70534 = k70501;
var G__70534__$1 = (((G__70534 instanceof cljs.core.Keyword))?G__70534.fqn:null);
switch (G__70534__$1) {
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k70501);

}
}));

(integrant.core.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__70500){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__70535 = cljs.core.keyword_identical_QMARK_;
var expr__70536 = k__5305__auto__;
if(cljs.core.truth_((pred__70535.cljs$core$IFn$_invoke$arity$2 ? pred__70535.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__70536) : pred__70535.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__70536)))){
return (new integrant.core.Ref(G__70500,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__70500),null));
}
}));

(integrant.core.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__70500){
var self__ = this;
var this__5295__auto____$1 = this;
return (new integrant.core.Ref(self__.key,G__70500,self__.__extmap,self__.__hash));
}));

(integrant.core.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(integrant.core.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(integrant.core.Ref.cljs$lang$type = true);

(integrant.core.Ref.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"integrant.core/Ref",null,(1),null));
}));

(integrant.core.Ref.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"integrant.core/Ref");
}));

/**
 * Positional factory function for integrant.core/Ref.
 */
integrant.core.__GT_Ref = (function integrant$core$__GT_Ref(key){
return (new integrant.core.Ref(key,null,null,null));
});

/**
 * Factory function for integrant.core/Ref, taking a map of keywords to field values.
 */
integrant.core.map__GT_Ref = (function integrant$core$map__GT_Ref(G__70504){
var extmap__5338__auto__ = (function (){var G__70542 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70504,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_(G__70504)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70542);
} else {
return G__70542;
}
})();
return (new integrant.core.Ref(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__70504),null,cljs.core.not_empty(extmap__5338__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {integrant.core.RefLike}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
integrant.core.RefSet = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(integrant.core.RefSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(integrant.core.RefSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k70546,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__70555 = k70546;
var G__70555__$1 = (((G__70555 instanceof cljs.core.Keyword))?G__70555.fqn:null);
switch (G__70555__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70546,else__5299__auto__);

}
}));

(integrant.core.RefSet.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__70558){
var vec__70560 = p__70558;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70560,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70560,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(integrant.core.RefSet.prototype.integrant$core$RefLike$ = cljs.core.PROTOCOL_SENTINEL);

(integrant.core.RefSet.prototype.integrant$core$RefLike$ref_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
}));

(integrant.core.RefSet.prototype.integrant$core$RefLike$ref_resolve$arity$3 = (function (_,config,resolvef){
var self__ = this;
var ___$1 = this;
return cljs.core.set((function (){var iter__5476__auto__ = (function integrant$core$iter__70563(s__70564){
return (new cljs.core.LazySeq(null,(function (){
var s__70564__$1 = s__70564;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__70564__$1);
if(temp__5823__auto__){
var s__70564__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70564__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__70564__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__70566 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__70565 = (0);
while(true){
if((i__70565 < size__5475__auto__)){
var vec__70567 = cljs.core._nth(c__5474__auto__,i__70565);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70567,(1),null);
cljs.core.chunk_append(b__70566,(resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v)));

var G__70743 = (i__70565 + (1));
i__70565 = G__70743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70566),integrant$core$iter__70563(cljs.core.chunk_rest(s__70564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70566),null);
}
} else {
var vec__70570 = cljs.core.first(s__70564__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70570,(1),null);
return cljs.core.cons((resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v)),integrant$core$iter__70563(cljs.core.rest(s__70564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(integrant.core.find_derived(config,self__.key));
})());
}));

(integrant.core.RefSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#integrant.core.RefSet{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70545){
var self__ = this;
var G__70545__$1 = this;
return (new cljs.core.RecordIter((0),G__70545__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(integrant.core.RefSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(integrant.core.RefSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new integrant.core.RefSet(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(integrant.core.RefSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (-1045019366 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(integrant.core.RefSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70547,other70548){
var self__ = this;
var this70547__$1 = this;
return (((!((other70548 == null)))) && ((((this70547__$1.constructor === other70548.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70547__$1.key,other70548.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70547__$1.__extmap,other70548.__extmap)))))));
}));

(integrant.core.RefSet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new integrant.core.RefSet(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(integrant.core.RefSet.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k70546){
var self__ = this;
var this__5303__auto____$1 = this;
var G__70576 = k70546;
var G__70576__$1 = (((G__70576 instanceof cljs.core.Keyword))?G__70576.fqn:null);
switch (G__70576__$1) {
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k70546);

}
}));

(integrant.core.RefSet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__70545){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__70577 = cljs.core.keyword_identical_QMARK_;
var expr__70578 = k__5305__auto__;
if(cljs.core.truth_((pred__70577.cljs$core$IFn$_invoke$arity$2 ? pred__70577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__70578) : pred__70577.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__70578)))){
return (new integrant.core.RefSet(G__70545,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.RefSet(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__70545),null));
}
}));

(integrant.core.RefSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__70545){
var self__ = this;
var this__5295__auto____$1 = this;
return (new integrant.core.RefSet(self__.key,G__70545,self__.__extmap,self__.__hash));
}));

(integrant.core.RefSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(integrant.core.RefSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(integrant.core.RefSet.cljs$lang$type = true);

(integrant.core.RefSet.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"integrant.core/RefSet",null,(1),null));
}));

(integrant.core.RefSet.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"integrant.core/RefSet");
}));

/**
 * Positional factory function for integrant.core/RefSet.
 */
integrant.core.__GT_RefSet = (function integrant$core$__GT_RefSet(key){
return (new integrant.core.RefSet(key,null,null,null));
});

/**
 * Factory function for integrant.core/RefSet, taking a map of keywords to field values.
 */
integrant.core.map__GT_RefSet = (function integrant$core$map__GT_RefSet(G__70549){
var extmap__5338__auto__ = (function (){var G__70582 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70549,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_(G__70549)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70582);
} else {
return G__70582;
}
})();
return (new integrant.core.RefSet(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__70549),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

/**
 * Create a reference to a top-level key in a config map.
 */
integrant.core.ref = (function integrant$core$ref(key){
if(integrant.core.valid_config_key_QMARK_(key)){
} else {
throw integrant.core.invalid_ref_exception(key);
}

return integrant.core.__GT_Ref(key);
});
/**
 * Create a set of references to all matching top-level keys in a config map.
 */
integrant.core.refset = (function integrant$core$refset(key){
if(integrant.core.valid_config_key_QMARK_(key)){
} else {
throw integrant.core.invalid_ref_exception(key);
}

return integrant.core.__GT_RefSet(key);
});
/**
 * Return true if its argument is a ref.
 */
integrant.core.ref_QMARK_ = (function integrant$core$ref_QMARK_(x){
return (x instanceof integrant.core.Ref);
});
/**
 * Return true if its argument is a refset.
 */
integrant.core.refset_QMARK_ = (function integrant$core$refset_QMARK_(x){
return (x instanceof integrant.core.RefSet);
});
/**
 * Return true if its argument is a ref or a refset.
 */
integrant.core.reflike_QMARK_ = (function integrant$core$reflike_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.integrant$core$RefLike$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(integrant.core.RefLike,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(integrant.core.RefLike,x);
}
});
integrant.core.depth_search = (function integrant$core$depth_search(pred_QMARK_,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,coll));
});
integrant.core.ambiguous_key_exception = (function integrant$core$ambiguous_key_exception(config,key,matching_keys){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Ambiguous key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Found multiple candidates: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",matching_keys)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","ambiguous-key","integrant.core/ambiguous-key",953529055),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"matching-keys","matching-keys",-1609370737),matching_keys], null));
});
/**
 * Return the map entry in a map, m, where the key is derived from the keyword,
 *   k. If there are no matching keys, nil is returned. If there is more than one
 *   matching key, an ambiguous key exception is raised.
 */
integrant.core.find_derived_1 = (function integrant$core$find_derived_1(m,k){
var kvs = integrant.core.find_derived(m,k);
if(cljs.core.next(kvs)){
throw integrant.core.ambiguous_key_exception(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,kvs));
} else {
}

return cljs.core.first(kvs);
});
integrant.core.find_derived_refs = (function integrant$core$find_derived_refs(config,v,include_refsets_QMARK_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__70593_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,p1__70593_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search((cljs.core.truth_(include_refsets_QMARK_)?integrant.core.reflike_QMARK_:integrant.core.ref_QMARK_),v))], 0));
});
/**
 * Return a dependency graph of all the refs and refsets in a config. Resolves
 *   derived dependencies. Takes the following options:
 * 
 *   `:include-refsets?`
 *   : whether to include refsets in the dependency graph (defaults to true)
 */
integrant.core.dependency_graph = (function integrant$core$dependency_graph(var_args){
var G__70597 = arguments.length;
switch (G__70597) {
case 1:
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2(config,cljs.core.PersistentArrayMap.EMPTY);
}));

(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2 = (function (config,p__70598){
var map__70599 = p__70598;
var map__70599__$1 = cljs.core.__destructure_map(map__70599);
var include_refsets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70599__$1,new cljs.core.Keyword(null,"include-refsets?","include-refsets?",-1173964472),true);
var find_refs = (function integrant$core$find_refs(v){
return integrant.core.find_derived_refs(config,v,include_refsets_QMARK_);
});
return cljs.core.reduce_kv((function (g,k,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__70594_SHARP_,p2__70595_SHARP_){
return weavejester.dependency.depend(p1__70594_SHARP_,k,p2__70595_SHARP_);
}),g,find_refs(v));
}),weavejester.dependency.graph(),config);
}));

(integrant.core.dependency_graph.cljs$lang$maxFixedArity = 2);

/**
 * Create a key comparator from the dependency graph of a configuration map.
 *   The comparator is deterministic; it will always result in the same key
 *   order.
 */
integrant.core.key_comparator = (function integrant$core$key_comparator(graph){
return weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$2((function (p1__70600_SHARP_,p2__70601_SHARP_){
return cljs.core.compare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70600_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__70601_SHARP_));
}),graph);
});
integrant.core.find_keys = (function integrant$core$find_keys(config,keys,f){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-refsets?","include-refsets?",-1173964472),false], null));
var keyset = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__70602_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,p1__70602_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys], 0)));
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(config)),clojure.set.union.cljs$core$IFn$_invoke$arity$2(keyset,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(graph,keyset) : f.call(null,graph,keyset))));
});
integrant.core.dependent_keys = (function integrant$core$dependent_keys(config,keys){
return integrant.core.find_keys(config,keys,weavejester.dependency.transitive_dependencies_set);
});
integrant.core.reverse_dependent_keys = (function integrant$core$reverse_dependent_keys(config,keys){
return cljs.core.reverse(integrant.core.find_keys(config,keys,weavejester.dependency.transitive_dependents_set));
});
integrant.core.default_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("ig","ref","ig/ref",-1364534932,null),integrant.core.ref,new cljs.core.Symbol("ig","refset","ig/refset",1839005826,null),integrant.core.refset], null);
/**
 * Read a config from a string of edn. Refs may be denotied by tagging keywords
 *   with #ig/ref.
 */
integrant.core.read_string = (function integrant$core$read_string(var_args){
var G__70604 = arguments.length;
switch (G__70604) {
case 1:
return integrant.core.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return integrant.core.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(integrant.core.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
var readers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([integrant.core.default_readers,new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentArrayMap.EMPTY)], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers),s);
}));

(integrant.core.read_string.cljs$lang$maxFixedArity = 2);

integrant.core.missing_refs_exception = (function integrant$core$missing_refs_exception(config,refs){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing definitions for refs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",refs)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","missing-refs","integrant.core/missing-refs",-232418620),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"missing-refs","missing-refs",-2034637127),refs], null));
});
integrant.core.ambiguous_refs = (function integrant$core$ambiguous_refs(config){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__70606_SHARP_){
return cljs.core.next(integrant.core.find_derived(config,p1__70606_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search(integrant.core.ref_QMARK_,config)));
});
integrant.core.missing_refs = (function integrant$core$missing_refs(config){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70607_SHARP_){
return integrant.core.find_derived(config,p1__70607_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search(integrant.core.ref_QMARK_,config)));
});
integrant.core.invalid_composite_keys = (function integrant$core$invalid_composite_keys(config){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(integrant.core.composite_key_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.keys(config)));
});
integrant.core.invalid_composite_key_exception = (function integrant$core$invalid_composite_key_exception(config,key){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid composite key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". ","Every keyword must be namespaced."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","invalid-composite-key","integrant.core/invalid-composite-key",-858672303),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});
integrant.core.expand_key = (function integrant$core$expand_key(config,resolvef,value){
return clojure.walk.postwalk((function (p1__70608_SHARP_){
if(integrant.core.reflike_QMARK_(p1__70608_SHARP_)){
return integrant.core.ref_resolve(p1__70608_SHARP_,config,resolvef);
} else {
return p1__70608_SHARP_;
}
}),value);
});
integrant.core.run_exception = (function integrant$core$run_exception(system,completed,remaining,f,k,v,t){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when running system"].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","run-threw-exception","integrant.core/run-threw-exception",1175352467),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"completed-keys","completed-keys",-988226740),cljs.core.reverse(completed),new cljs.core.Keyword(null,"remaining-keys","remaining-keys",-607706590),cljs.core.rest(remaining),new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null),t);
});
integrant.core.try_run_action = (function integrant$core$try_run_action(system,completed,remaining,f,k){
var v = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k));
try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
}catch (e70609){var t = e70609;
throw integrant.core.run_exception(system,completed,remaining,f,k,v,t);
}});
integrant.core.run_loop = (function integrant$core$run_loop(system,keys,f){
var completed = cljs.core.List.EMPTY;
var remaining = keys;
while(true){
if(cljs.core.seq(remaining)){
var k = cljs.core.first(remaining);
integrant.core.try_run_action(system,completed,remaining,f,k);

var G__70756 = cljs.core.cons(k,completed);
var G__70757 = cljs.core.rest(remaining);
completed = G__70756;
remaining = G__70757;
continue;
} else {
return null;
}
break;
}
});
integrant.core.system_origin = (function integrant$core$system_origin(system){
return cljs.core.select_keys(new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)),cljs.core.keys(system));
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.run_BANG_ = (function integrant$core$run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__70615 = system;
var G__70615__$1 = (((G__70615 == null))?null:cljs.core.meta(G__70615));
if((G__70615__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__70615__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop(system,integrant.core.dependent_keys(integrant.core.system_origin(system),keys),f);
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in reverse dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.reverse_run_BANG_ = (function integrant$core$reverse_run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__70616 = system;
var G__70616__$1 = (((G__70616 == null))?null:cljs.core.meta(G__70616));
if((G__70616__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__70616__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop(system,integrant.core.reverse_dependent_keys(integrant.core.system_origin(system),keys),f);
});
/**
 * Reduce all the key value pairs in system map in dependency order, starting
 *   from an initial value. The function should take three arguments: the
 *   accumulator, the current key and the current value.
 */
integrant.core.fold = (function integrant$core$fold(system,f,val){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(integrant.core.system_origin(system));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__70617_SHARP_,p2__70618_SHARP_){
var G__70619 = p1__70617_SHARP_;
var G__70620 = p2__70618_SHARP_;
var G__70621 = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(p2__70618_SHARP_) : system.call(null,p2__70618_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__70619,G__70620,G__70621) : f.call(null,G__70619,G__70620,G__70621));
}),val,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(graph),cljs.core.keys(system)));
});
integrant.core.build_exception = (function integrant$core$build_exception(system,f,k,v,t){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system"].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","build-threw-exception","integrant.core/build-threw-exception",-205617592),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null),t);
});
integrant.core.try_build_action = (function integrant$core$try_build_action(system,f,k,v){
try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
}catch (e70622){var t = e70622;
throw integrant.core.build_exception(system,f,k,v,t);
}});
integrant.core.build_key = (function integrant$core$build_key(f,assertf,resolvef,system,p__70627){
var vec__70628 = p__70627;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70628,(1),null);
var v_SINGLEQUOTE_ = integrant.core.expand_key(system,resolvef,v);
(assertf.cljs$core$IFn$_invoke$arity$3 ? assertf.cljs$core$IFn$_invoke$arity$3(system,k,v_SINGLEQUOTE_) : assertf.call(null,system,k,v_SINGLEQUOTE_));

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,k,integrant.core.try_build_action(system,f,k,v_SINGLEQUOTE_)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("integrant.core","build","integrant.core/build",-1937237701),k], null),v_SINGLEQUOTE_);
});
/**
 * Apply a function f to each key value pair in a configuration map. Keys are
 *   traversed in dependency order, and any references in the value expanded. The
 *   function should take two arguments, a key and value, and return a new value.
 *   An optional fourth argument, assertf, may be supplied to provide an assertion
 *   check on the system, key and expanded value.
 */
integrant.core.build = (function integrant$core$build(var_args){
var G__70632 = arguments.length;
switch (G__70632) {
case 3:
return integrant.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return integrant.core.build.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return integrant.core.build.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.build.cljs$core$IFn$_invoke$arity$3 = (function (config,keys,f){
return integrant.core.build.cljs$core$IFn$_invoke$arity$4(config,keys,f,(function (_,___$1,___$2){
return null;
}));
}));

(integrant.core.build.cljs$core$IFn$_invoke$arity$4 = (function (config,keys,f,assertf){
return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,f,assertf,(function (_,v){
return v;
}));
}));

(integrant.core.build.cljs$core$IFn$_invoke$arity$5 = (function (config,keys,f,assertf,resolvef){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var relevant_keys = integrant.core.dependent_keys(config,keys);
var relevant_config = cljs.core.select_keys(config,relevant_keys);
var temp__5823__auto___70759 = cljs.core.first(integrant.core.invalid_composite_keys(config));
if(cljs.core.truth_(temp__5823__auto___70759)){
var invalid_key_70760 = temp__5823__auto___70759;
throw integrant.core.invalid_composite_key_exception(config,invalid_key_70760);
} else {
}

var temp__5823__auto___70761 = cljs.core.first(integrant.core.ambiguous_refs(relevant_config));
if(cljs.core.truth_(temp__5823__auto___70761)){
var ref_70762 = temp__5823__auto___70761;
throw integrant.core.ambiguous_key_exception(config,ref_70762,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,ref_70762)));
} else {
}

var temp__5823__auto___70763 = cljs.core.seq(integrant.core.missing_refs(relevant_config));
if(temp__5823__auto___70763){
var refs_70764 = temp__5823__auto___70763;
throw integrant.core.missing_refs_exception(config,refs_70764);
} else {
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(integrant.core.build_key,f,assertf,resolvef),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839),config], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(config.cljs$core$IFn$_invoke$arity$1 ? config.cljs$core$IFn$_invoke$arity$1(k) : config.call(null,k))], null);
}),relevant_keys));
}));

(integrant.core.build.cljs$lang$maxFixedArity = 5);

if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.resolve_key !== 'undefined')){
} else {
/**
 * Return a value to substitute for a reference prior to initiation. By default
 *   the value of the key is returned unaltered. This can be used to hide
 *   information that is only necessary to halt or suspend the key.
 */
integrant.core.resolve_key = (function (){var method_table__5595__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5596__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5597__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5598__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5599__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70637 = cljs.core.get_global_hierarchy;
return (fexpr__70637.cljs$core$IFn$_invoke$arity$0 ? fexpr__70637.cljs$core$IFn$_invoke$arity$0() : fexpr__70637.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","resolve-key"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5599__auto__,method_table__5595__auto__,prefer_table__5596__auto__,method_cache__5597__auto__,cached_hierarchy__5598__auto__));
})();
}
integrant.core.resolve_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,v){
return v;
}));
/**
 * Replace all refs with the values they correspond to.
 */
integrant.core.expand = (function integrant$core$expand(config){
return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,cljs.core.keys(config),(function (_,v){
return v;
}),(function (_,___$1,___$2){
return null;
}),integrant.core.resolve_key);
});
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.prep_key !== 'undefined')){
} else {
/**
 * Prepare the configuration associated with a key for initiation. This is
 *   generally used to add in default values and references. By default the
 *   method returns the value unaltered.
 */
integrant.core.prep_key = (function (){var method_table__5595__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5596__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5597__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5598__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5599__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70638 = cljs.core.get_global_hierarchy;
return (fexpr__70638.cljs$core$IFn$_invoke$arity$0 ? fexpr__70638.cljs$core$IFn$_invoke$arity$0() : fexpr__70638.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","prep-key"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5599__auto__,method_table__5595__auto__,prefer_table__5596__auto__,method_cache__5597__auto__,cached_hierarchy__5598__auto__));
})();
}
integrant.core.prep_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,v){
return v;
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.init_key !== 'undefined')){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation.
 *   For example, a database URL might be turned into a database connection.
 */
integrant.core.init_key = (function (){var method_table__5595__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5596__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5597__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5598__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5599__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70641 = cljs.core.get_global_hierarchy;
return (fexpr__70641.cljs$core$IFn$_invoke$arity$0 ? fexpr__70641.cljs$core$IFn$_invoke$arity$0() : fexpr__70641.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","init-key"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5599__auto__,method_table__5595__auto__,prefer_table__5596__auto__,method_cache__5597__auto__,cached_hierarchy__5598__auto__));
})();
}
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.halt_key_BANG_ !== 'undefined')){
} else {
/**
 * Halt a running or suspended implementation associated with a key. This is
 *   often used for stopping processes or cleaning up resources. For example, a
 *   database connection might be closed. This multimethod must be idempotent.
 *   The return value of this multimethod is discarded.
 */
integrant.core.halt_key_BANG_ = (function (){var method_table__5595__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5596__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5597__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5598__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5599__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70645 = cljs.core.get_global_hierarchy;
return (fexpr__70645.cljs$core$IFn$_invoke$arity$0 ? fexpr__70645.cljs$core$IFn$_invoke$arity$0() : fexpr__70645.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","halt-key!"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5599__auto__,method_table__5595__auto__,prefer_table__5596__auto__,method_cache__5597__auto__,cached_hierarchy__5598__auto__));
})();
}
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.resume_key !== 'undefined')){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation,
 *   but reuse resources (e.g. connections, running threads, etc) from an existing
 *   implementation. By default this multimethod calls init-key and ignores the
 *   additional argument.
 */
integrant.core.resume_key = (function (){var method_table__5595__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5596__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5597__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5598__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5599__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70646 = cljs.core.get_global_hierarchy;
return (fexpr__70646.cljs$core$IFn$_invoke$arity$0 ? fexpr__70646.cljs$core$IFn$_invoke$arity$0() : fexpr__70646.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","resume-key"),(function (key,_value,_old_value,_old_impl){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5599__auto__,method_table__5595__auto__,prefer_table__5596__auto__,method_cache__5597__auto__,cached_hierarchy__5598__auto__));
})();
}
integrant.core.resume_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v,_,___$1){
return integrant.core.init_key.cljs$core$IFn$_invoke$arity$2(k,v);
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.suspend_key_BANG_ !== 'undefined')){
} else {
/**
 * Suspend a running implementation associated with a key, so that it may be
 *   eventually passed to resume-key. By default this multimethod calls halt-key!,
 *   but it may be customized to do things like keep a server running, but buffer
 *   incoming requests until the server is resumed.
 */
integrant.core.suspend_key_BANG_ = (function (){var method_table__5595__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5596__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5597__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5598__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5599__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70650 = cljs.core.get_global_hierarchy;
return (fexpr__70650.cljs$core$IFn$_invoke$arity$0 ? fexpr__70650.cljs$core$IFn$_invoke$arity$0() : fexpr__70650.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","suspend-key!"),(function (key,_value){
return integrant.core.normalize_key(key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5599__auto__,method_table__5595__auto__,prefer_table__5596__auto__,method_cache__5597__auto__,cached_hierarchy__5598__auto__));
})();
}
integrant.core.suspend_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v){
return integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(k,v);
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.pre_init_spec !== 'undefined')){
} else {
/**
 * Return a spec for the supplied key that is used to check the associated
 *   value before the key is initiated.
 */
integrant.core.pre_init_spec = (function (){var method_table__5595__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5596__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5597__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5598__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5599__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70651 = cljs.core.get_global_hierarchy;
return (fexpr__70651.cljs$core$IFn$_invoke$arity$0 ? fexpr__70651.cljs$core$IFn$_invoke$arity$0() : fexpr__70651.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","pre-init-spec"),integrant.core.normalize_key,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5599__auto__,method_table__5595__auto__,prefer_table__5596__auto__,method_cache__5597__auto__,cached_hierarchy__5598__auto__));
})();
}
integrant.core.pre_init_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
integrant.core.spec_exception = (function integrant$core$spec_exception(system,k,v,spec,ed){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Spec failed on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system\n",(function (){var sb__5643__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70660_70767 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70661_70768 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70662_70769 = true;
var _STAR_print_fn_STAR__temp_val__70663_70770 = (function (x__5644__auto__){
return sb__5643__auto__.append(x__5644__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70662_70769);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70663_70770);

try{cljs.spec.alpha.explain_out(ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70661_70768);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70660_70767);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5643__auto__);
})()].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","build-failed-spec","integrant.core/build-failed-spec",1167262590),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"explain","explain",484226146),ed], null));
});
integrant.core.assert_pre_init_spec = (function integrant$core$assert_pre_init_spec(system,key,value){
var temp__5823__auto__ = integrant.core.pre_init_spec.cljs$core$IFn$_invoke$arity$1(key);
if(cljs.core.truth_(temp__5823__auto__)){
var spec = temp__5823__auto__;
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,value)){
return null;
} else {
throw integrant.core.spec_exception(system,key,value,spec,cljs.spec.alpha.explain_data(spec,value));
}
} else {
return null;
}
});
/**
 * Prepare a config map for initiation. The prep-key method is applied to each
 *   entry in the map, and the values replaced with the return value. This is used
 *   for adding default values and references to the configuration.
 */
integrant.core.prep = (function integrant$core$prep(var_args){
var G__70665 = arguments.length;
switch (G__70665) {
case 1:
return integrant.core.prep.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.prep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.prep.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.prep.cljs$core$IFn$_invoke$arity$2(config,cljs.core.keys(config));
}));

(integrant.core.prep.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var keyset = cljs.core.set(keys);
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(cljs.core.truth_((keyset.cljs$core$IFn$_invoke$arity$1 ? keyset.cljs$core$IFn$_invoke$arity$1(k) : keyset.call(null,k)))?integrant.core.prep_key.cljs$core$IFn$_invoke$arity$2(k,v):v));
}),cljs.core.PersistentArrayMap.EMPTY,config);
}));

(integrant.core.prep.cljs$lang$maxFixedArity = 2);

/**
 * Turn a config map into an system map. Keys are traversed in dependency
 *   order, initiated via the init-key multimethod, then the refs associated with
 *   the key are expanded.
 */
integrant.core.init = (function integrant$core$init(var_args){
var G__70667 = arguments.length;
switch (G__70667) {
case 1:
return integrant.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.init.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.init.cljs$core$IFn$_invoke$arity$2(config,cljs.core.keys(config));
}));

(integrant.core.init.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,integrant.core.init_key,integrant.core.assert_pre_init_spec,integrant.core.resolve_key);
}));

(integrant.core.init.cljs$lang$maxFixedArity = 2);

/**
 * Halt a system map by applying halt-key! in reverse dependency order.
 */
integrant.core.halt_BANG_ = (function integrant$core$halt_BANG_(var_args){
var G__70674 = arguments.length;
switch (G__70674) {
case 1:
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (system){
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
}));

(integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__70675 = system;
var G__70675__$1 = (((G__70675 == null))?null:cljs.core.meta(G__70675));
if((G__70675__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__70675__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_(system,keys,integrant.core.halt_key_BANG_);
}));

(integrant.core.halt_BANG_.cljs$lang$maxFixedArity = 2);

integrant.core.missing_keys = (function integrant$core$missing_keys(system,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ks),cljs.core.keys(system));
});
integrant.core.halt_missing_keys_BANG_ = (function integrant$core$halt_missing_keys_BANG_(config,system,keys){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)));
var missing_keys = integrant.core.missing_keys(system,integrant.core.dependent_keys(config,keys));
var seq__70679 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(graph),missing_keys));
var chunk__70680 = null;
var count__70681 = (0);
var i__70682 = (0);
while(true){
if((i__70682 < count__70681)){
var k = chunk__70680.cljs$core$IIndexed$_nth$arity$2(null,i__70682);
integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(k,(system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k)));


var G__70779 = seq__70679;
var G__70780 = chunk__70680;
var G__70781 = count__70681;
var G__70782 = (i__70682 + (1));
seq__70679 = G__70779;
chunk__70680 = G__70780;
count__70681 = G__70781;
i__70682 = G__70782;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__70679);
if(temp__5823__auto__){
var seq__70679__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70679__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__70679__$1);
var G__70783 = cljs.core.chunk_rest(seq__70679__$1);
var G__70784 = c__5521__auto__;
var G__70785 = cljs.core.count(c__5521__auto__);
var G__70786 = (0);
seq__70679 = G__70783;
chunk__70680 = G__70784;
count__70681 = G__70785;
i__70682 = G__70786;
continue;
} else {
var k = cljs.core.first(seq__70679__$1);
integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(k,(system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k)));


var G__70788 = cljs.core.next(seq__70679__$1);
var G__70789 = null;
var G__70790 = (0);
var G__70791 = (0);
seq__70679 = G__70788;
chunk__70680 = G__70789;
count__70681 = G__70790;
i__70682 = G__70791;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Turn a config map into a system map, reusing resources from an existing
 *   system when it's possible to do so. Keys are traversed in dependency order,
 *   resumed with the resume-key multimethod, then the refs associated with the
 *   key are expanded.
 */
integrant.core.resume = (function integrant$core$resume(var_args){
var G__70688 = arguments.length;
switch (G__70688) {
case 2:
return integrant.core.resume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return integrant.core.resume.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.resume.cljs$core$IFn$_invoke$arity$2 = (function (config,system){
return integrant.core.resume.cljs$core$IFn$_invoke$arity$3(config,system,cljs.core.keys(config));
}));

(integrant.core.resume.cljs$core$IFn$_invoke$arity$3 = (function (config,system,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__70693 = system;
var G__70693__$1 = (((G__70693 == null))?null:cljs.core.meta(G__70693));
if((G__70693__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__70693__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

integrant.core.halt_missing_keys_BANG_(config,system,keys);

return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,(function (k,v){
if(cljs.core.contains_QMARK_(system,k)){
return integrant.core.resume_key.cljs$core$IFn$_invoke$arity$4(k,v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("integrant.core","build","integrant.core/build",-1937237701).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)),k),(system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k)));
} else {
return integrant.core.init_key.cljs$core$IFn$_invoke$arity$2(k,v);
}
}),integrant.core.assert_pre_init_spec,integrant.core.resolve_key);
}));

(integrant.core.resume.cljs$lang$maxFixedArity = 3);

/**
 * Suspend a system map by applying suspend-key! in reverse dependency order.
 */
integrant.core.suspend_BANG_ = (function integrant$core$suspend_BANG_(var_args){
var G__70695 = arguments.length;
switch (G__70695) {
case 1:
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (system){
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
}));

(integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__70700 = system;
var G__70700__$1 = (((G__70700 == null))?null:cljs.core.meta(G__70700));
if((G__70700__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__70700__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_(system,keys,integrant.core.suspend_key_BANG_);
}));

(integrant.core.suspend_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=integrant.core.js.map
