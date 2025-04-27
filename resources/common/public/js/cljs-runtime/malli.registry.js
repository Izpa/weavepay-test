goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_69610 = (function (this$,type){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (malli.registry._schema[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5347__auto__.call(null,this$,type));
} else {
var m__5345__auto__ = (malli.registry._schema["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5345__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_69610(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_69619 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (malli.registry._schemas[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (malli.registry._schemas["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_69619(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry69499 = (function (m,fm,meta69500){
this.m = m;
this.fm = fm;
this.meta69500 = meta69500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry69499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69501,meta69500__$1){
var self__ = this;
var _69501__$1 = this;
return (new malli.registry.t_malli$registry69499(self__.m,self__.fm,meta69500__$1));
}));

(malli.registry.t_malli$registry69499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69501){
var self__ = this;
var _69501__$1 = this;
return self__.meta69500;
}));

(malli.registry.t_malli$registry69499.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry69499.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry69499.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry69499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta69500","meta69500",1215816795,null)], null);
}));

(malli.registry.t_malli$registry69499.cljs$lang$type = true);

(malli.registry.t_malli$registry69499.cljs$lang$ctorStr = "malli.registry/t_malli$registry69499");

(malli.registry.t_malli$registry69499.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry69499");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry69499.
 */
malli.registry.__GT_t_malli$registry69499 = (function malli$registry$__GT_t_malli$registry69499(m,fm,meta69500){
return (new malli.registry.t_malli$registry69499(m,fm,meta69500));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry69499(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry69515 = (function (m,meta69516){
this.m = m;
this.meta69516 = meta69516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry69515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69517,meta69516__$1){
var self__ = this;
var _69517__$1 = this;
return (new malli.registry.t_malli$registry69515(self__.m,meta69516__$1));
}));

(malli.registry.t_malli$registry69515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69517){
var self__ = this;
var _69517__$1 = this;
return self__.meta69516;
}));

(malli.registry.t_malli$registry69515.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry69515.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry69515.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry69515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta69516","meta69516",1178415131,null)], null);
}));

(malli.registry.t_malli$registry69515.cljs$lang$type = true);

(malli.registry.t_malli$registry69515.cljs$lang$ctorStr = "malli.registry/t_malli$registry69515");

(malli.registry.t_malli$registry69515.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry69515");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry69515.
 */
malli.registry.__GT_t_malli$registry69515 = (function malli$registry$__GT_t_malli$registry69515(m,meta69516){
return (new malli.registry.t_malli$registry69515(m,meta69516));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry69515(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry69531 = (function (meta69532){
this.meta69532 = meta69532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry69531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69533,meta69532__$1){
var self__ = this;
var _69533__$1 = this;
return (new malli.registry.t_malli$registry69531(meta69532__$1));
}));

(malli.registry.t_malli$registry69531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69533){
var self__ = this;
var _69533__$1 = this;
return self__.meta69532;
}));

(malli.registry.t_malli$registry69531.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry69531.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry69531.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry69531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta69532","meta69532",760533701,null)], null);
}));

(malli.registry.t_malli$registry69531.cljs$lang$type = true);

(malli.registry.t_malli$registry69531.cljs$lang$ctorStr = "malli.registry/t_malli$registry69531");

(malli.registry.t_malli$registry69531.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry69531");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry69531.
 */
malli.registry.__GT_t_malli$registry69531 = (function malli$registry$__GT_t_malli$registry69531(meta69532){
return (new malli.registry.t_malli$registry69531(meta69532));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry69531(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry69543 = (function (_QMARK_registries,registries,meta69544){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta69544 = meta69544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry69543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69545,meta69544__$1){
var self__ = this;
var _69545__$1 = this;
return (new malli.registry.t_malli$registry69543(self__._QMARK_registries,self__.registries,meta69544__$1));
}));

(malli.registry.t_malli$registry69543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69545){
var self__ = this;
var _69545__$1 = this;
return self__.meta69544;
}));

(malli.registry.t_malli$registry69543.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry69543.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__69539_SHARP_){
return malli.registry._schema(p1__69539_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry69543.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry69543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta69544","meta69544",1697492013,null)], null);
}));

(malli.registry.t_malli$registry69543.cljs$lang$type = true);

(malli.registry.t_malli$registry69543.cljs$lang$ctorStr = "malli.registry/t_malli$registry69543");

(malli.registry.t_malli$registry69543.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry69543");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry69543.
 */
malli.registry.__GT_t_malli$registry69543 = (function malli$registry$__GT_t_malli$registry69543(_QMARK_registries,registries,meta69544){
return (new malli.registry.t_malli$registry69543(_QMARK_registries,registries,meta69544));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5728__auto__ = [];
var len__5722__auto___69633 = arguments.length;
var i__5723__auto___69634 = (0);
while(true){
if((i__5723__auto___69634 < len__5722__auto___69633)){
args__5728__auto__.push((arguments[i__5723__auto___69634]));

var G__69635 = (i__5723__auto___69634 + (1));
i__5723__auto___69634 = G__69635;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry69543(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq69541){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69541));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry69556 = (function (db,meta69557){
this.db = db;
this.meta69557 = meta69557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry69556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69558,meta69557__$1){
var self__ = this;
var _69558__$1 = this;
return (new malli.registry.t_malli$registry69556(self__.db,meta69557__$1));
}));

(malli.registry.t_malli$registry69556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69558){
var self__ = this;
var _69558__$1 = this;
return self__.meta69557;
}));

(malli.registry.t_malli$registry69556.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry69556.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry69556.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry69556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta69557","meta69557",-1301716785,null)], null);
}));

(malli.registry.t_malli$registry69556.cljs$lang$type = true);

(malli.registry.t_malli$registry69556.cljs$lang$ctorStr = "malli.registry/t_malli$registry69556");

(malli.registry.t_malli$registry69556.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry69556");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry69556.
 */
malli.registry.__GT_t_malli$registry69556 = (function malli$registry$__GT_t_malli$registry69556(db,meta69557){
return (new malli.registry.t_malli$registry69556(db,meta69557));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry69556(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry69572 = (function (meta69573){
this.meta69573 = meta69573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry69572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69574,meta69573__$1){
var self__ = this;
var _69574__$1 = this;
return (new malli.registry.t_malli$registry69572(meta69573__$1));
}));

(malli.registry.t_malli$registry69572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69574){
var self__ = this;
var _69574__$1 = this;
return self__.meta69573;
}));

(malli.registry.t_malli$registry69572.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry69572.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry69572.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry69572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta69573","meta69573",-2045950637,null)], null);
}));

(malli.registry.t_malli$registry69572.cljs$lang$type = true);

(malli.registry.t_malli$registry69572.cljs$lang$ctorStr = "malli.registry/t_malli$registry69572");

(malli.registry.t_malli$registry69572.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry69572");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry69572.
 */
malli.registry.__GT_t_malli$registry69572 = (function malli$registry$__GT_t_malli$registry69572(meta69573){
return (new malli.registry.t_malli$registry69572(meta69573));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry69572(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry69585 = (function (meta69586){
this.meta69586 = meta69586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry69585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69587,meta69586__$1){
var self__ = this;
var _69587__$1 = this;
return (new malli.registry.t_malli$registry69585(meta69586__$1));
}));

(malli.registry.t_malli$registry69585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69587){
var self__ = this;
var _69587__$1 = this;
return self__.meta69586;
}));

(malli.registry.t_malli$registry69585.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry69585.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry69585.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry69585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta69586","meta69586",1888679602,null)], null);
}));

(malli.registry.t_malli$registry69585.cljs$lang$type = true);

(malli.registry.t_malli$registry69585.cljs$lang$ctorStr = "malli.registry/t_malli$registry69585");

(malli.registry.t_malli$registry69585.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry69585");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry69585.
 */
malli.registry.__GT_t_malli$registry69585 = (function malli$registry$__GT_t_malli$registry69585(meta69586){
return (new malli.registry.t_malli$registry69585(meta69586));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry69585(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry69598 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta69599){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta69599 = meta69599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry69598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69600,meta69599__$1){
var self__ = this;
var _69600__$1 = this;
return (new malli.registry.t_malli$registry69598(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta69599__$1));
}));

(malli.registry.t_malli$registry69598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69600){
var self__ = this;
var _69600__$1 = this;
return self__.meta69599;
}));

(malli.registry.t_malli$registry69598.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry69598.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4998__auto__ = (function (){var fexpr__69605 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__69605.cljs$core$IFn$_invoke$arity$1 ? fexpr__69605.cljs$core$IFn$_invoke$arity$1(name) : fexpr__69605.call(null,name));
})();
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var temp__5823__auto__ = (function (){var G__69606 = name;
var G__69607 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__69606,G__69607) : self__.provider.call(null,G__69606,G__69607));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var schema__$1 = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema__$1);

return schema__$1;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry69598.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry69598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta69599","meta69599",-1929623912,null)], null);
}));

(malli.registry.t_malli$registry69598.cljs$lang$type = true);

(malli.registry.t_malli$registry69598.cljs$lang$ctorStr = "malli.registry/t_malli$registry69598");

(malli.registry.t_malli$registry69598.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry69598");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry69598.
 */
malli.registry.__GT_t_malli$registry69598 = (function malli$registry$__GT_t_malli$registry69598(default_registry,provider,cache_STAR_,registry_STAR_,meta69599){
return (new malli.registry.t_malli$registry69598(default_registry,provider,cache_STAR_,registry_STAR_,meta69599));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry69598(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
