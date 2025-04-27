goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68025 = (function (f,blockable,meta68026){
this.f = f;
this.blockable = blockable;
this.meta68026 = meta68026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68027,meta68026__$1){
var self__ = this;
var _68027__$1 = this;
return (new cljs.core.async.t_cljs$core$async68025(self__.f,self__.blockable,meta68026__$1));
}));

(cljs.core.async.t_cljs$core$async68025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68027){
var self__ = this;
var _68027__$1 = this;
return self__.meta68026;
}));

(cljs.core.async.t_cljs$core$async68025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async68025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async68025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async68025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta68026","meta68026",-1308274231,null)], null);
}));

(cljs.core.async.t_cljs$core$async68025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68025");

(cljs.core.async.t_cljs$core$async68025.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async68025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68025.
 */
cljs.core.async.__GT_t_cljs$core$async68025 = (function cljs$core$async$__GT_t_cljs$core$async68025(f,blockable,meta68026){
return (new cljs.core.async.t_cljs$core$async68025(f,blockable,meta68026));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__68018 = arguments.length;
switch (G__68018) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async68025(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__68039 = arguments.length;
switch (G__68039) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__68057 = arguments.length;
switch (G__68057) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__68064 = arguments.length;
switch (G__68064) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_70395 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_70395) : fn1.call(null,val_70395));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_70395) : fn1.call(null,val_70395));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__68072 = arguments.length;
switch (G__68072) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5589__auto___70397 = n;
var x_70398 = (0);
while(true){
if((x_70398 < n__5589__auto___70397)){
(a[x_70398] = x_70398);

var G__70399 = (x_70398 + (1));
x_70398 = G__70399;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68085 = (function (flag,meta68086){
this.flag = flag;
this.meta68086 = meta68086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68087,meta68086__$1){
var self__ = this;
var _68087__$1 = this;
return (new cljs.core.async.t_cljs$core$async68085(self__.flag,meta68086__$1));
}));

(cljs.core.async.t_cljs$core$async68085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68087){
var self__ = this;
var _68087__$1 = this;
return self__.meta68086;
}));

(cljs.core.async.t_cljs$core$async68085.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async68085.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async68085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async68085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta68086","meta68086",-1329682563,null)], null);
}));

(cljs.core.async.t_cljs$core$async68085.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68085");

(cljs.core.async.t_cljs$core$async68085.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async68085");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68085.
 */
cljs.core.async.__GT_t_cljs$core$async68085 = (function cljs$core$async$__GT_t_cljs$core$async68085(flag,meta68086){
return (new cljs.core.async.t_cljs$core$async68085(flag,meta68086));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async68085(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68113 = (function (flag,cb,meta68114){
this.flag = flag;
this.cb = cb;
this.meta68114 = meta68114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68115,meta68114__$1){
var self__ = this;
var _68115__$1 = this;
return (new cljs.core.async.t_cljs$core$async68113(self__.flag,self__.cb,meta68114__$1));
}));

(cljs.core.async.t_cljs$core$async68113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68115){
var self__ = this;
var _68115__$1 = this;
return self__.meta68114;
}));

(cljs.core.async.t_cljs$core$async68113.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async68113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async68113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async68113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta68114","meta68114",1889485417,null)], null);
}));

(cljs.core.async.t_cljs$core$async68113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68113");

(cljs.core.async.t_cljs$core$async68113.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async68113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68113.
 */
cljs.core.async.__GT_t_cljs$core$async68113 = (function cljs$core$async$__GT_t_cljs$core$async68113(flag,cb,meta68114){
return (new cljs.core.async.t_cljs$core$async68113(flag,cb,meta68114));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async68113(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68126_SHARP_){
var G__68132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68126_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__68132) : fret.call(null,G__68132));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68128_SHARP_){
var G__68135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68128_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__68135) : fret.call(null,G__68135));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4998__auto__ = wport;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return port;
}
})()], null));
} else {
var G__70404 = (i + (1));
i = G__70404;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4998__auto__ = ret;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__4996__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4996__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4996__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___70405 = arguments.length;
var i__5723__auto___70407 = (0);
while(true){
if((i__5723__auto___70407 < len__5722__auto___70405)){
args__5728__auto__.push((arguments[i__5723__auto___70407]));

var G__70408 = (i__5723__auto___70407 + (1));
i__5723__auto___70407 = G__70408;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__68142){
var map__68143 = p__68142;
var map__68143__$1 = cljs.core.__destructure_map(map__68143);
var opts = map__68143__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq68137){
var G__68138 = cljs.core.first(seq68137);
var seq68137__$1 = cljs.core.next(seq68137);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68138,seq68137__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__68165 = arguments.length;
switch (G__68165) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__67942__auto___70416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_68225){
var state_val_68237 = (state_68225[(1)]);
if((state_val_68237 === (7))){
var inst_68219 = (state_68225[(2)]);
var state_68225__$1 = state_68225;
var statearr_68254_70418 = state_68225__$1;
(statearr_68254_70418[(2)] = inst_68219);

(statearr_68254_70418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (1))){
var state_68225__$1 = state_68225;
var statearr_68256_70419 = state_68225__$1;
(statearr_68256_70419[(2)] = null);

(statearr_68256_70419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (4))){
var inst_68199 = (state_68225[(7)]);
var inst_68199__$1 = (state_68225[(2)]);
var inst_68201 = (inst_68199__$1 == null);
var state_68225__$1 = (function (){var statearr_68257 = state_68225;
(statearr_68257[(7)] = inst_68199__$1);

return statearr_68257;
})();
if(cljs.core.truth_(inst_68201)){
var statearr_68258_70421 = state_68225__$1;
(statearr_68258_70421[(1)] = (5));

} else {
var statearr_68259_70422 = state_68225__$1;
(statearr_68259_70422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (13))){
var state_68225__$1 = state_68225;
var statearr_68277_70423 = state_68225__$1;
(statearr_68277_70423[(2)] = null);

(statearr_68277_70423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (6))){
var inst_68199 = (state_68225[(7)]);
var state_68225__$1 = state_68225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68225__$1,(11),to,inst_68199);
} else {
if((state_val_68237 === (3))){
var inst_68221 = (state_68225[(2)]);
var state_68225__$1 = state_68225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68225__$1,inst_68221);
} else {
if((state_val_68237 === (12))){
var state_68225__$1 = state_68225;
var statearr_68292_70424 = state_68225__$1;
(statearr_68292_70424[(2)] = null);

(statearr_68292_70424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (2))){
var state_68225__$1 = state_68225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68225__$1,(4),from);
} else {
if((state_val_68237 === (11))){
var inst_68212 = (state_68225[(2)]);
var state_68225__$1 = state_68225;
if(cljs.core.truth_(inst_68212)){
var statearr_68305_70425 = state_68225__$1;
(statearr_68305_70425[(1)] = (12));

} else {
var statearr_68306_70427 = state_68225__$1;
(statearr_68306_70427[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (9))){
var state_68225__$1 = state_68225;
var statearr_68312_70431 = state_68225__$1;
(statearr_68312_70431[(2)] = null);

(statearr_68312_70431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (5))){
var state_68225__$1 = state_68225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68326_70433 = state_68225__$1;
(statearr_68326_70433[(1)] = (8));

} else {
var statearr_68331_70434 = state_68225__$1;
(statearr_68331_70434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (14))){
var inst_68217 = (state_68225[(2)]);
var state_68225__$1 = state_68225;
var statearr_68332_70437 = state_68225__$1;
(statearr_68332_70437[(2)] = inst_68217);

(statearr_68332_70437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (10))){
var inst_68209 = (state_68225[(2)]);
var state_68225__$1 = state_68225;
var statearr_68333_70439 = state_68225__$1;
(statearr_68333_70439[(2)] = inst_68209);

(statearr_68333_70439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68237 === (8))){
var inst_68204 = cljs.core.async.close_BANG_(to);
var state_68225__$1 = state_68225;
var statearr_68334_70442 = state_68225__$1;
(statearr_68334_70442[(2)] = inst_68204);

(statearr_68334_70442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_68337 = [null,null,null,null,null,null,null,null];
(statearr_68337[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_68337[(1)] = (1));

return statearr_68337;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_68225){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68225);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68338){var ex__67716__auto__ = e68338;
var statearr_68339_70451 = state_68225;
(statearr_68339_70451[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68225[(4)]))){
var statearr_68340_70452 = state_68225;
(statearr_68340_70452[(1)] = cljs.core.first((state_68225[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70455 = state_68225;
state_68225 = G__70455;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_68225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_68225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_68341 = f__67943__auto__();
(statearr_68341[(6)] = c__67942__auto___70416);

return statearr_68341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__68355){
var vec__68357 = p__68355;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68357,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68357,(1),null);
var job = vec__68357;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__67942__auto___70458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_68365){
var state_val_68366 = (state_68365[(1)]);
if((state_val_68366 === (1))){
var state_68365__$1 = state_68365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68365__$1,(2),res,v);
} else {
if((state_val_68366 === (2))){
var inst_68362 = (state_68365[(2)]);
var inst_68363 = cljs.core.async.close_BANG_(res);
var state_68365__$1 = (function (){var statearr_68367 = state_68365;
(statearr_68367[(7)] = inst_68362);

return statearr_68367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68365__$1,inst_68363);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0 = (function (){
var statearr_68368 = [null,null,null,null,null,null,null,null];
(statearr_68368[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__);

(statearr_68368[(1)] = (1));

return statearr_68368;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1 = (function (state_68365){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68365);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68370){var ex__67716__auto__ = e68370;
var statearr_68371_70459 = state_68365;
(statearr_68371_70459[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68365[(4)]))){
var statearr_68372_70460 = state_68365;
(statearr_68372_70460[(1)] = cljs.core.first((state_68365[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70461 = state_68365;
state_68365 = G__70461;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = function(state_68365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1.call(this,state_68365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_68373 = f__67943__auto__();
(statearr_68373[(6)] = c__67942__auto___70458);

return statearr_68373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__68374){
var vec__68375 = p__68374;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68375,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68375,(1),null);
var job = vec__68375;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5589__auto___70462 = n;
var __70463 = (0);
while(true){
if((__70463 < n__5589__auto___70462)){
var G__68379_70464 = type;
var G__68379_70465__$1 = (((G__68379_70464 instanceof cljs.core.Keyword))?G__68379_70464.fqn:null);
switch (G__68379_70465__$1) {
case "compute":
var c__67942__auto___70467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__70463,c__67942__auto___70467,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async){
return (function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = ((function (__70463,c__67942__auto___70467,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async){
return (function (state_68392){
var state_val_68393 = (state_68392[(1)]);
if((state_val_68393 === (1))){
var state_68392__$1 = state_68392;
var statearr_68394_70468 = state_68392__$1;
(statearr_68394_70468[(2)] = null);

(statearr_68394_70468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68393 === (2))){
var state_68392__$1 = state_68392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68392__$1,(4),jobs);
} else {
if((state_val_68393 === (3))){
var inst_68390 = (state_68392[(2)]);
var state_68392__$1 = state_68392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68392__$1,inst_68390);
} else {
if((state_val_68393 === (4))){
var inst_68382 = (state_68392[(2)]);
var inst_68383 = process__$1(inst_68382);
var state_68392__$1 = state_68392;
if(cljs.core.truth_(inst_68383)){
var statearr_68396_70471 = state_68392__$1;
(statearr_68396_70471[(1)] = (5));

} else {
var statearr_68397_70472 = state_68392__$1;
(statearr_68397_70472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68393 === (5))){
var state_68392__$1 = state_68392;
var statearr_68398_70473 = state_68392__$1;
(statearr_68398_70473[(2)] = null);

(statearr_68398_70473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68393 === (6))){
var state_68392__$1 = state_68392;
var statearr_68399_70474 = state_68392__$1;
(statearr_68399_70474[(2)] = null);

(statearr_68399_70474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68393 === (7))){
var inst_68388 = (state_68392[(2)]);
var state_68392__$1 = state_68392;
var statearr_68400_70475 = state_68392__$1;
(statearr_68400_70475[(2)] = inst_68388);

(statearr_68400_70475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__70463,c__67942__auto___70467,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async))
;
return ((function (__70463,switch__67712__auto__,c__67942__auto___70467,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0 = (function (){
var statearr_68401 = [null,null,null,null,null,null,null];
(statearr_68401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__);

(statearr_68401[(1)] = (1));

return statearr_68401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1 = (function (state_68392){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68392);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68402){var ex__67716__auto__ = e68402;
var statearr_68404_70476 = state_68392;
(statearr_68404_70476[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68392[(4)]))){
var statearr_68405_70477 = state_68392;
(statearr_68405_70477[(1)] = cljs.core.first((state_68392[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70478 = state_68392;
state_68392 = G__70478;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = function(state_68392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1.call(this,state_68392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__;
})()
;})(__70463,switch__67712__auto__,c__67942__auto___70467,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async))
})();
var state__67944__auto__ = (function (){var statearr_68406 = f__67943__auto__();
(statearr_68406[(6)] = c__67942__auto___70467);

return statearr_68406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
});})(__70463,c__67942__auto___70467,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async))
);


break;
case "async":
var c__67942__auto___70479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__70463,c__67942__auto___70479,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async){
return (function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = ((function (__70463,c__67942__auto___70479,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async){
return (function (state_68419){
var state_val_68420 = (state_68419[(1)]);
if((state_val_68420 === (1))){
var state_68419__$1 = state_68419;
var statearr_68421_70482 = state_68419__$1;
(statearr_68421_70482[(2)] = null);

(statearr_68421_70482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68420 === (2))){
var state_68419__$1 = state_68419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68419__$1,(4),jobs);
} else {
if((state_val_68420 === (3))){
var inst_68417 = (state_68419[(2)]);
var state_68419__$1 = state_68419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68419__$1,inst_68417);
} else {
if((state_val_68420 === (4))){
var inst_68409 = (state_68419[(2)]);
var inst_68410 = async(inst_68409);
var state_68419__$1 = state_68419;
if(cljs.core.truth_(inst_68410)){
var statearr_68422_70483 = state_68419__$1;
(statearr_68422_70483[(1)] = (5));

} else {
var statearr_68423_70484 = state_68419__$1;
(statearr_68423_70484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68420 === (5))){
var state_68419__$1 = state_68419;
var statearr_68424_70485 = state_68419__$1;
(statearr_68424_70485[(2)] = null);

(statearr_68424_70485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68420 === (6))){
var state_68419__$1 = state_68419;
var statearr_68425_70486 = state_68419__$1;
(statearr_68425_70486[(2)] = null);

(statearr_68425_70486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68420 === (7))){
var inst_68415 = (state_68419[(2)]);
var state_68419__$1 = state_68419;
var statearr_68427_70487 = state_68419__$1;
(statearr_68427_70487[(2)] = inst_68415);

(statearr_68427_70487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__70463,c__67942__auto___70479,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async))
;
return ((function (__70463,switch__67712__auto__,c__67942__auto___70479,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0 = (function (){
var statearr_68428 = [null,null,null,null,null,null,null];
(statearr_68428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__);

(statearr_68428[(1)] = (1));

return statearr_68428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1 = (function (state_68419){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68419);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68429){var ex__67716__auto__ = e68429;
var statearr_68430_70488 = state_68419;
(statearr_68430_70488[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68419[(4)]))){
var statearr_68431_70489 = state_68419;
(statearr_68431_70489[(1)] = cljs.core.first((state_68419[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70490 = state_68419;
state_68419 = G__70490;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = function(state_68419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1.call(this,state_68419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__;
})()
;})(__70463,switch__67712__auto__,c__67942__auto___70479,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async))
})();
var state__67944__auto__ = (function (){var statearr_68432 = f__67943__auto__();
(statearr_68432[(6)] = c__67942__auto___70479);

return statearr_68432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
});})(__70463,c__67942__auto___70479,G__68379_70464,G__68379_70465__$1,n__5589__auto___70462,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68379_70465__$1)].join('')));

}

var G__70491 = (__70463 + (1));
__70463 = G__70491;
continue;
} else {
}
break;
}

var c__67942__auto___70492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_68455){
var state_val_68456 = (state_68455[(1)]);
if((state_val_68456 === (7))){
var inst_68451 = (state_68455[(2)]);
var state_68455__$1 = state_68455;
var statearr_68458_70493 = state_68455__$1;
(statearr_68458_70493[(2)] = inst_68451);

(statearr_68458_70493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68456 === (1))){
var state_68455__$1 = state_68455;
var statearr_68459_70494 = state_68455__$1;
(statearr_68459_70494[(2)] = null);

(statearr_68459_70494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68456 === (4))){
var inst_68436 = (state_68455[(7)]);
var inst_68436__$1 = (state_68455[(2)]);
var inst_68437 = (inst_68436__$1 == null);
var state_68455__$1 = (function (){var statearr_68460 = state_68455;
(statearr_68460[(7)] = inst_68436__$1);

return statearr_68460;
})();
if(cljs.core.truth_(inst_68437)){
var statearr_68461_70495 = state_68455__$1;
(statearr_68461_70495[(1)] = (5));

} else {
var statearr_68463_70496 = state_68455__$1;
(statearr_68463_70496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68456 === (6))){
var inst_68441 = (state_68455[(8)]);
var inst_68436 = (state_68455[(7)]);
var inst_68441__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_68442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68443 = [inst_68436,inst_68441__$1];
var inst_68444 = (new cljs.core.PersistentVector(null,2,(5),inst_68442,inst_68443,null));
var state_68455__$1 = (function (){var statearr_68464 = state_68455;
(statearr_68464[(8)] = inst_68441__$1);

return statearr_68464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68455__$1,(8),jobs,inst_68444);
} else {
if((state_val_68456 === (3))){
var inst_68453 = (state_68455[(2)]);
var state_68455__$1 = state_68455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68455__$1,inst_68453);
} else {
if((state_val_68456 === (2))){
var state_68455__$1 = state_68455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68455__$1,(4),from);
} else {
if((state_val_68456 === (9))){
var inst_68448 = (state_68455[(2)]);
var state_68455__$1 = (function (){var statearr_68465 = state_68455;
(statearr_68465[(9)] = inst_68448);

return statearr_68465;
})();
var statearr_68466_70497 = state_68455__$1;
(statearr_68466_70497[(2)] = null);

(statearr_68466_70497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68456 === (5))){
var inst_68439 = cljs.core.async.close_BANG_(jobs);
var state_68455__$1 = state_68455;
var statearr_68468_70498 = state_68455__$1;
(statearr_68468_70498[(2)] = inst_68439);

(statearr_68468_70498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68456 === (8))){
var inst_68441 = (state_68455[(8)]);
var inst_68446 = (state_68455[(2)]);
var state_68455__$1 = (function (){var statearr_68469 = state_68455;
(statearr_68469[(10)] = inst_68446);

return statearr_68469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68455__$1,(9),results,inst_68441);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0 = (function (){
var statearr_68470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__);

(statearr_68470[(1)] = (1));

return statearr_68470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1 = (function (state_68455){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68455);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68471){var ex__67716__auto__ = e68471;
var statearr_68472_70499 = state_68455;
(statearr_68472_70499[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68455[(4)]))){
var statearr_68473_70502 = state_68455;
(statearr_68473_70502[(1)] = cljs.core.first((state_68455[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70506 = state_68455;
state_68455 = G__70506;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = function(state_68455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1.call(this,state_68455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_68475 = f__67943__auto__();
(statearr_68475[(6)] = c__67942__auto___70492);

return statearr_68475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


var c__67942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_68525){
var state_val_68526 = (state_68525[(1)]);
if((state_val_68526 === (7))){
var inst_68521 = (state_68525[(2)]);
var state_68525__$1 = state_68525;
var statearr_68528_70507 = state_68525__$1;
(statearr_68528_70507[(2)] = inst_68521);

(statearr_68528_70507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (20))){
var state_68525__$1 = state_68525;
var statearr_68529_70508 = state_68525__$1;
(statearr_68529_70508[(2)] = null);

(statearr_68529_70508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (1))){
var state_68525__$1 = state_68525;
var statearr_68530_70509 = state_68525__$1;
(statearr_68530_70509[(2)] = null);

(statearr_68530_70509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (4))){
var inst_68478 = (state_68525[(7)]);
var inst_68478__$1 = (state_68525[(2)]);
var inst_68479 = (inst_68478__$1 == null);
var state_68525__$1 = (function (){var statearr_68531 = state_68525;
(statearr_68531[(7)] = inst_68478__$1);

return statearr_68531;
})();
if(cljs.core.truth_(inst_68479)){
var statearr_68532_70511 = state_68525__$1;
(statearr_68532_70511[(1)] = (5));

} else {
var statearr_68533_70513 = state_68525__$1;
(statearr_68533_70513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (15))){
var inst_68503 = (state_68525[(8)]);
var state_68525__$1 = state_68525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68525__$1,(18),to,inst_68503);
} else {
if((state_val_68526 === (21))){
var inst_68516 = (state_68525[(2)]);
var state_68525__$1 = state_68525;
var statearr_68535_70517 = state_68525__$1;
(statearr_68535_70517[(2)] = inst_68516);

(statearr_68535_70517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (13))){
var inst_68518 = (state_68525[(2)]);
var state_68525__$1 = (function (){var statearr_68536 = state_68525;
(statearr_68536[(9)] = inst_68518);

return statearr_68536;
})();
var statearr_68537_70518 = state_68525__$1;
(statearr_68537_70518[(2)] = null);

(statearr_68537_70518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (6))){
var inst_68478 = (state_68525[(7)]);
var state_68525__$1 = state_68525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68525__$1,(11),inst_68478);
} else {
if((state_val_68526 === (17))){
var inst_68511 = (state_68525[(2)]);
var state_68525__$1 = state_68525;
if(cljs.core.truth_(inst_68511)){
var statearr_68538_70519 = state_68525__$1;
(statearr_68538_70519[(1)] = (19));

} else {
var statearr_68539_70520 = state_68525__$1;
(statearr_68539_70520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (3))){
var inst_68523 = (state_68525[(2)]);
var state_68525__$1 = state_68525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68525__$1,inst_68523);
} else {
if((state_val_68526 === (12))){
var inst_68500 = (state_68525[(10)]);
var state_68525__$1 = state_68525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68525__$1,(14),inst_68500);
} else {
if((state_val_68526 === (2))){
var state_68525__$1 = state_68525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68525__$1,(4),results);
} else {
if((state_val_68526 === (19))){
var state_68525__$1 = state_68525;
var statearr_68541_70521 = state_68525__$1;
(statearr_68541_70521[(2)] = null);

(statearr_68541_70521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (11))){
var inst_68500 = (state_68525[(2)]);
var state_68525__$1 = (function (){var statearr_68542 = state_68525;
(statearr_68542[(10)] = inst_68500);

return statearr_68542;
})();
var statearr_68543_70523 = state_68525__$1;
(statearr_68543_70523[(2)] = null);

(statearr_68543_70523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (9))){
var state_68525__$1 = state_68525;
var statearr_68544_70525 = state_68525__$1;
(statearr_68544_70525[(2)] = null);

(statearr_68544_70525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (5))){
var state_68525__$1 = state_68525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68545_70526 = state_68525__$1;
(statearr_68545_70526[(1)] = (8));

} else {
var statearr_68546_70527 = state_68525__$1;
(statearr_68546_70527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (14))){
var inst_68503 = (state_68525[(8)]);
var inst_68505 = (state_68525[(11)]);
var inst_68503__$1 = (state_68525[(2)]);
var inst_68504 = (inst_68503__$1 == null);
var inst_68505__$1 = cljs.core.not(inst_68504);
var state_68525__$1 = (function (){var statearr_68549 = state_68525;
(statearr_68549[(8)] = inst_68503__$1);

(statearr_68549[(11)] = inst_68505__$1);

return statearr_68549;
})();
if(inst_68505__$1){
var statearr_68550_70528 = state_68525__$1;
(statearr_68550_70528[(1)] = (15));

} else {
var statearr_68551_70529 = state_68525__$1;
(statearr_68551_70529[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (16))){
var inst_68505 = (state_68525[(11)]);
var state_68525__$1 = state_68525;
var statearr_68552_70530 = state_68525__$1;
(statearr_68552_70530[(2)] = inst_68505);

(statearr_68552_70530[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (10))){
var inst_68497 = (state_68525[(2)]);
var state_68525__$1 = state_68525;
var statearr_68553_70531 = state_68525__$1;
(statearr_68553_70531[(2)] = inst_68497);

(statearr_68553_70531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (18))){
var inst_68508 = (state_68525[(2)]);
var state_68525__$1 = state_68525;
var statearr_68554_70533 = state_68525__$1;
(statearr_68554_70533[(2)] = inst_68508);

(statearr_68554_70533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68526 === (8))){
var inst_68482 = cljs.core.async.close_BANG_(to);
var state_68525__$1 = state_68525;
var statearr_68555_70535 = state_68525__$1;
(statearr_68555_70535[(2)] = inst_68482);

(statearr_68555_70535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0 = (function (){
var statearr_68556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__);

(statearr_68556[(1)] = (1));

return statearr_68556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1 = (function (state_68525){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68525);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68557){var ex__67716__auto__ = e68557;
var statearr_68558_70536 = state_68525;
(statearr_68558_70536[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68525[(4)]))){
var statearr_68559_70537 = state_68525;
(statearr_68559_70537[(1)] = cljs.core.first((state_68525[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70538 = state_68525;
state_68525 = G__70538;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__ = function(state_68525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1.call(this,state_68525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_68562 = f__67943__auto__();
(statearr_68562[(6)] = c__67942__auto__);

return statearr_68562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));

return c__67942__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__68564 = arguments.length;
switch (G__68564) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__68566 = arguments.length;
switch (G__68566) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__68570 = arguments.length;
switch (G__68570) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__67942__auto___70545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_68596){
var state_val_68597 = (state_68596[(1)]);
if((state_val_68597 === (7))){
var inst_68592 = (state_68596[(2)]);
var state_68596__$1 = state_68596;
var statearr_68598_70549 = state_68596__$1;
(statearr_68598_70549[(2)] = inst_68592);

(statearr_68598_70549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (1))){
var state_68596__$1 = state_68596;
var statearr_68599_70551 = state_68596__$1;
(statearr_68599_70551[(2)] = null);

(statearr_68599_70551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (4))){
var inst_68573 = (state_68596[(7)]);
var inst_68573__$1 = (state_68596[(2)]);
var inst_68574 = (inst_68573__$1 == null);
var state_68596__$1 = (function (){var statearr_68600 = state_68596;
(statearr_68600[(7)] = inst_68573__$1);

return statearr_68600;
})();
if(cljs.core.truth_(inst_68574)){
var statearr_68601_70553 = state_68596__$1;
(statearr_68601_70553[(1)] = (5));

} else {
var statearr_68602_70554 = state_68596__$1;
(statearr_68602_70554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (13))){
var state_68596__$1 = state_68596;
var statearr_68606_70555 = state_68596__$1;
(statearr_68606_70555[(2)] = null);

(statearr_68606_70555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (6))){
var inst_68573 = (state_68596[(7)]);
var inst_68579 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_68573) : p.call(null,inst_68573));
var state_68596__$1 = state_68596;
if(cljs.core.truth_(inst_68579)){
var statearr_68607_70556 = state_68596__$1;
(statearr_68607_70556[(1)] = (9));

} else {
var statearr_68608_70557 = state_68596__$1;
(statearr_68608_70557[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (3))){
var inst_68594 = (state_68596[(2)]);
var state_68596__$1 = state_68596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68596__$1,inst_68594);
} else {
if((state_val_68597 === (12))){
var state_68596__$1 = state_68596;
var statearr_68612_70558 = state_68596__$1;
(statearr_68612_70558[(2)] = null);

(statearr_68612_70558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (2))){
var state_68596__$1 = state_68596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68596__$1,(4),ch);
} else {
if((state_val_68597 === (11))){
var inst_68573 = (state_68596[(7)]);
var inst_68583 = (state_68596[(2)]);
var state_68596__$1 = state_68596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68596__$1,(8),inst_68583,inst_68573);
} else {
if((state_val_68597 === (9))){
var state_68596__$1 = state_68596;
var statearr_68616_70559 = state_68596__$1;
(statearr_68616_70559[(2)] = tc);

(statearr_68616_70559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (5))){
var inst_68576 = cljs.core.async.close_BANG_(tc);
var inst_68577 = cljs.core.async.close_BANG_(fc);
var state_68596__$1 = (function (){var statearr_68617 = state_68596;
(statearr_68617[(8)] = inst_68576);

return statearr_68617;
})();
var statearr_68618_70560 = state_68596__$1;
(statearr_68618_70560[(2)] = inst_68577);

(statearr_68618_70560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (14))){
var inst_68590 = (state_68596[(2)]);
var state_68596__$1 = state_68596;
var statearr_68619_70561 = state_68596__$1;
(statearr_68619_70561[(2)] = inst_68590);

(statearr_68619_70561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (10))){
var state_68596__$1 = state_68596;
var statearr_68621_70562 = state_68596__$1;
(statearr_68621_70562[(2)] = fc);

(statearr_68621_70562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68597 === (8))){
var inst_68585 = (state_68596[(2)]);
var state_68596__$1 = state_68596;
if(cljs.core.truth_(inst_68585)){
var statearr_68622_70563 = state_68596__$1;
(statearr_68622_70563[(1)] = (12));

} else {
var statearr_68625_70564 = state_68596__$1;
(statearr_68625_70564[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_68628 = [null,null,null,null,null,null,null,null,null];
(statearr_68628[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_68628[(1)] = (1));

return statearr_68628;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_68596){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68596);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68631){var ex__67716__auto__ = e68631;
var statearr_68633_70566 = state_68596;
(statearr_68633_70566[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68596[(4)]))){
var statearr_68634_70568 = state_68596;
(statearr_68634_70568[(1)] = cljs.core.first((state_68596[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70569 = state_68596;
state_68596 = G__70569;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_68596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_68596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_68638 = f__67943__auto__();
(statearr_68638[(6)] = c__67942__auto___70545);

return statearr_68638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__67942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_68674){
var state_val_68675 = (state_68674[(1)]);
if((state_val_68675 === (7))){
var inst_68669 = (state_68674[(2)]);
var state_68674__$1 = state_68674;
var statearr_68682_70570 = state_68674__$1;
(statearr_68682_70570[(2)] = inst_68669);

(statearr_68682_70570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68675 === (1))){
var inst_68645 = init;
var inst_68649 = inst_68645;
var state_68674__$1 = (function (){var statearr_68684 = state_68674;
(statearr_68684[(7)] = inst_68649);

return statearr_68684;
})();
var statearr_68686_70571 = state_68674__$1;
(statearr_68686_70571[(2)] = null);

(statearr_68686_70571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68675 === (4))){
var inst_68653 = (state_68674[(8)]);
var inst_68653__$1 = (state_68674[(2)]);
var inst_68654 = (inst_68653__$1 == null);
var state_68674__$1 = (function (){var statearr_68690 = state_68674;
(statearr_68690[(8)] = inst_68653__$1);

return statearr_68690;
})();
if(cljs.core.truth_(inst_68654)){
var statearr_68692_70572 = state_68674__$1;
(statearr_68692_70572[(1)] = (5));

} else {
var statearr_68693_70573 = state_68674__$1;
(statearr_68693_70573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68675 === (6))){
var inst_68653 = (state_68674[(8)]);
var inst_68659 = (state_68674[(9)]);
var inst_68649 = (state_68674[(7)]);
var inst_68659__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_68649,inst_68653) : f.call(null,inst_68649,inst_68653));
var inst_68661 = cljs.core.reduced_QMARK_(inst_68659__$1);
var state_68674__$1 = (function (){var statearr_68698 = state_68674;
(statearr_68698[(9)] = inst_68659__$1);

return statearr_68698;
})();
if(inst_68661){
var statearr_68699_70574 = state_68674__$1;
(statearr_68699_70574[(1)] = (8));

} else {
var statearr_68703_70575 = state_68674__$1;
(statearr_68703_70575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68675 === (3))){
var inst_68671 = (state_68674[(2)]);
var state_68674__$1 = state_68674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68674__$1,inst_68671);
} else {
if((state_val_68675 === (2))){
var state_68674__$1 = state_68674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68674__$1,(4),ch);
} else {
if((state_val_68675 === (9))){
var inst_68659 = (state_68674[(9)]);
var inst_68649 = inst_68659;
var state_68674__$1 = (function (){var statearr_68708 = state_68674;
(statearr_68708[(7)] = inst_68649);

return statearr_68708;
})();
var statearr_68710_70577 = state_68674__$1;
(statearr_68710_70577[(2)] = null);

(statearr_68710_70577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68675 === (5))){
var inst_68649 = (state_68674[(7)]);
var state_68674__$1 = state_68674;
var statearr_68714_70578 = state_68674__$1;
(statearr_68714_70578[(2)] = inst_68649);

(statearr_68714_70578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68675 === (10))){
var inst_68667 = (state_68674[(2)]);
var state_68674__$1 = state_68674;
var statearr_68716_70579 = state_68674__$1;
(statearr_68716_70579[(2)] = inst_68667);

(statearr_68716_70579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68675 === (8))){
var inst_68659 = (state_68674[(9)]);
var inst_68663 = cljs.core.deref(inst_68659);
var state_68674__$1 = state_68674;
var statearr_68720_70580 = state_68674__$1;
(statearr_68720_70580[(2)] = inst_68663);

(statearr_68720_70580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__67713__auto__ = null;
var cljs$core$async$reduce_$_state_machine__67713__auto____0 = (function (){
var statearr_68725 = [null,null,null,null,null,null,null,null,null,null];
(statearr_68725[(0)] = cljs$core$async$reduce_$_state_machine__67713__auto__);

(statearr_68725[(1)] = (1));

return statearr_68725;
});
var cljs$core$async$reduce_$_state_machine__67713__auto____1 = (function (state_68674){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68674);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68727){var ex__67716__auto__ = e68727;
var statearr_68728_70581 = state_68674;
(statearr_68728_70581[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68674[(4)]))){
var statearr_68729_70582 = state_68674;
(statearr_68729_70582[(1)] = cljs.core.first((state_68674[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70584 = state_68674;
state_68674 = G__70584;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__67713__auto__ = function(state_68674){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__67713__auto____1.call(this,state_68674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__67713__auto____0;
cljs$core$async$reduce_$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__67713__auto____1;
return cljs$core$async$reduce_$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_68733 = f__67943__auto__();
(statearr_68733[(6)] = c__67942__auto__);

return statearr_68733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));

return c__67942__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__67942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_68747){
var state_val_68748 = (state_68747[(1)]);
if((state_val_68748 === (1))){
var inst_68742 = cljs.core.async.reduce(f__$1,init,ch);
var state_68747__$1 = state_68747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68747__$1,(2),inst_68742);
} else {
if((state_val_68748 === (2))){
var inst_68744 = (state_68747[(2)]);
var inst_68745 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_68744) : f__$1.call(null,inst_68744));
var state_68747__$1 = state_68747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68747__$1,inst_68745);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__67713__auto__ = null;
var cljs$core$async$transduce_$_state_machine__67713__auto____0 = (function (){
var statearr_68758 = [null,null,null,null,null,null,null];
(statearr_68758[(0)] = cljs$core$async$transduce_$_state_machine__67713__auto__);

(statearr_68758[(1)] = (1));

return statearr_68758;
});
var cljs$core$async$transduce_$_state_machine__67713__auto____1 = (function (state_68747){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68747);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68760){var ex__67716__auto__ = e68760;
var statearr_68763_70591 = state_68747;
(statearr_68763_70591[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68747[(4)]))){
var statearr_68765_70592 = state_68747;
(statearr_68765_70592[(1)] = cljs.core.first((state_68747[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70593 = state_68747;
state_68747 = G__70593;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__67713__auto__ = function(state_68747){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__67713__auto____1.call(this,state_68747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__67713__auto____0;
cljs$core$async$transduce_$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__67713__auto____1;
return cljs$core$async$transduce_$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_68769 = f__67943__auto__();
(statearr_68769[(6)] = c__67942__auto__);

return statearr_68769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));

return c__67942__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__68776 = arguments.length;
switch (G__68776) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__67942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_68811){
var state_val_68812 = (state_68811[(1)]);
if((state_val_68812 === (7))){
var inst_68790 = (state_68811[(2)]);
var state_68811__$1 = state_68811;
var statearr_68816_70595 = state_68811__$1;
(statearr_68816_70595[(2)] = inst_68790);

(statearr_68816_70595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (1))){
var inst_68782 = cljs.core.seq(coll);
var inst_68783 = inst_68782;
var state_68811__$1 = (function (){var statearr_68818 = state_68811;
(statearr_68818[(7)] = inst_68783);

return statearr_68818;
})();
var statearr_68820_70596 = state_68811__$1;
(statearr_68820_70596[(2)] = null);

(statearr_68820_70596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (4))){
var inst_68783 = (state_68811[(7)]);
var inst_68788 = cljs.core.first(inst_68783);
var state_68811__$1 = state_68811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68811__$1,(7),ch,inst_68788);
} else {
if((state_val_68812 === (13))){
var inst_68802 = (state_68811[(2)]);
var state_68811__$1 = state_68811;
var statearr_68824_70597 = state_68811__$1;
(statearr_68824_70597[(2)] = inst_68802);

(statearr_68824_70597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (6))){
var inst_68793 = (state_68811[(2)]);
var state_68811__$1 = state_68811;
if(cljs.core.truth_(inst_68793)){
var statearr_68826_70598 = state_68811__$1;
(statearr_68826_70598[(1)] = (8));

} else {
var statearr_68827_70599 = state_68811__$1;
(statearr_68827_70599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (3))){
var inst_68807 = (state_68811[(2)]);
var state_68811__$1 = state_68811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68811__$1,inst_68807);
} else {
if((state_val_68812 === (12))){
var state_68811__$1 = state_68811;
var statearr_68831_70600 = state_68811__$1;
(statearr_68831_70600[(2)] = null);

(statearr_68831_70600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (2))){
var inst_68783 = (state_68811[(7)]);
var state_68811__$1 = state_68811;
if(cljs.core.truth_(inst_68783)){
var statearr_68833_70601 = state_68811__$1;
(statearr_68833_70601[(1)] = (4));

} else {
var statearr_68835_70602 = state_68811__$1;
(statearr_68835_70602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (11))){
var inst_68799 = cljs.core.async.close_BANG_(ch);
var state_68811__$1 = state_68811;
var statearr_68836_70603 = state_68811__$1;
(statearr_68836_70603[(2)] = inst_68799);

(statearr_68836_70603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (9))){
var state_68811__$1 = state_68811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68840_70604 = state_68811__$1;
(statearr_68840_70604[(1)] = (11));

} else {
var statearr_68841_70605 = state_68811__$1;
(statearr_68841_70605[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (5))){
var inst_68783 = (state_68811[(7)]);
var state_68811__$1 = state_68811;
var statearr_68846_70606 = state_68811__$1;
(statearr_68846_70606[(2)] = inst_68783);

(statearr_68846_70606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (10))){
var inst_68804 = (state_68811[(2)]);
var state_68811__$1 = state_68811;
var statearr_68847_70607 = state_68811__$1;
(statearr_68847_70607[(2)] = inst_68804);

(statearr_68847_70607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68812 === (8))){
var inst_68783 = (state_68811[(7)]);
var inst_68795 = cljs.core.next(inst_68783);
var inst_68783__$1 = inst_68795;
var state_68811__$1 = (function (){var statearr_68850 = state_68811;
(statearr_68850[(7)] = inst_68783__$1);

return statearr_68850;
})();
var statearr_68852_70609 = state_68811__$1;
(statearr_68852_70609[(2)] = null);

(statearr_68852_70609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_68854 = [null,null,null,null,null,null,null,null];
(statearr_68854[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_68854[(1)] = (1));

return statearr_68854;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_68811){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_68811);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e68855){var ex__67716__auto__ = e68855;
var statearr_68856_70611 = state_68811;
(statearr_68856_70611[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_68811[(4)]))){
var statearr_68859_70612 = state_68811;
(statearr_68859_70612[(1)] = cljs.core.first((state_68811[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70613 = state_68811;
state_68811 = G__70613;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_68811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_68811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_68863 = f__67943__auto__();
(statearr_68863[(6)] = c__67942__auto__);

return statearr_68863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));

return c__67942__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__68872 = arguments.length;
switch (G__68872) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_70615 = (function (_){
var x__5346__auto__ = (((_ == null))?null:_);
var m__5347__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5347__auto__.call(null,_));
} else {
var m__5345__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5345__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_70615(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_70616 = (function (m,ch,close_QMARK_){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5347__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5345__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5345__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_70616(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_70625 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_70625(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_70633 = (function (m){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5347__auto__.call(null,m));
} else {
var m__5345__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5345__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_70633(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68911 = (function (ch,cs,meta68912){
this.ch = ch;
this.cs = cs;
this.meta68912 = meta68912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68913,meta68912__$1){
var self__ = this;
var _68913__$1 = this;
return (new cljs.core.async.t_cljs$core$async68911(self__.ch,self__.cs,meta68912__$1));
}));

(cljs.core.async.t_cljs$core$async68911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68913){
var self__ = this;
var _68913__$1 = this;
return self__.meta68912;
}));

(cljs.core.async.t_cljs$core$async68911.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async68911.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68911.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async68911.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async68911.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async68911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta68912","meta68912",-204145945,null)], null);
}));

(cljs.core.async.t_cljs$core$async68911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68911");

(cljs.core.async.t_cljs$core$async68911.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async68911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68911.
 */
cljs.core.async.__GT_t_cljs$core$async68911 = (function cljs$core$async$__GT_t_cljs$core$async68911(ch,cs,meta68912){
return (new cljs.core.async.t_cljs$core$async68911(ch,cs,meta68912));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async68911(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__67942__auto___70643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_69064){
var state_val_69066 = (state_69064[(1)]);
if((state_val_69066 === (7))){
var inst_69053 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69070_70644 = state_69064__$1;
(statearr_69070_70644[(2)] = inst_69053);

(statearr_69070_70644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (20))){
var inst_68947 = (state_69064[(7)]);
var inst_68959 = cljs.core.first(inst_68947);
var inst_68962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68959,(0),null);
var inst_68963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68959,(1),null);
var state_69064__$1 = (function (){var statearr_69072 = state_69064;
(statearr_69072[(8)] = inst_68962);

return statearr_69072;
})();
if(cljs.core.truth_(inst_68963)){
var statearr_69073_70645 = state_69064__$1;
(statearr_69073_70645[(1)] = (22));

} else {
var statearr_69077_70650 = state_69064__$1;
(statearr_69077_70650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (27))){
var inst_68998 = (state_69064[(9)]);
var inst_68991 = (state_69064[(10)]);
var inst_68993 = (state_69064[(11)]);
var inst_68916 = (state_69064[(12)]);
var inst_68998__$1 = cljs.core._nth(inst_68991,inst_68993);
var inst_68999 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_68998__$1,inst_68916,done);
var state_69064__$1 = (function (){var statearr_69079 = state_69064;
(statearr_69079[(9)] = inst_68998__$1);

return statearr_69079;
})();
if(cljs.core.truth_(inst_68999)){
var statearr_69080_70654 = state_69064__$1;
(statearr_69080_70654[(1)] = (30));

} else {
var statearr_69081_70655 = state_69064__$1;
(statearr_69081_70655[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (1))){
var state_69064__$1 = state_69064;
var statearr_69085_70656 = state_69064__$1;
(statearr_69085_70656[(2)] = null);

(statearr_69085_70656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (24))){
var inst_68947 = (state_69064[(7)]);
var inst_68968 = (state_69064[(2)]);
var inst_68969 = cljs.core.next(inst_68947);
var inst_68925 = inst_68969;
var inst_68926 = null;
var inst_68927 = (0);
var inst_68928 = (0);
var state_69064__$1 = (function (){var statearr_69087 = state_69064;
(statearr_69087[(13)] = inst_68925);

(statearr_69087[(14)] = inst_68927);

(statearr_69087[(15)] = inst_68968);

(statearr_69087[(16)] = inst_68926);

(statearr_69087[(17)] = inst_68928);

return statearr_69087;
})();
var statearr_69088_70657 = state_69064__$1;
(statearr_69088_70657[(2)] = null);

(statearr_69088_70657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (39))){
var state_69064__$1 = state_69064;
var statearr_69101_70658 = state_69064__$1;
(statearr_69101_70658[(2)] = null);

(statearr_69101_70658[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (4))){
var inst_68916 = (state_69064[(12)]);
var inst_68916__$1 = (state_69064[(2)]);
var inst_68917 = (inst_68916__$1 == null);
var state_69064__$1 = (function (){var statearr_69102 = state_69064;
(statearr_69102[(12)] = inst_68916__$1);

return statearr_69102;
})();
if(cljs.core.truth_(inst_68917)){
var statearr_69103_70659 = state_69064__$1;
(statearr_69103_70659[(1)] = (5));

} else {
var statearr_69104_70660 = state_69064__$1;
(statearr_69104_70660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (15))){
var inst_68925 = (state_69064[(13)]);
var inst_68927 = (state_69064[(14)]);
var inst_68926 = (state_69064[(16)]);
var inst_68928 = (state_69064[(17)]);
var inst_68943 = (state_69064[(2)]);
var inst_68944 = (inst_68928 + (1));
var tmp69090 = inst_68925;
var tmp69091 = inst_68927;
var tmp69092 = inst_68926;
var inst_68925__$1 = tmp69090;
var inst_68926__$1 = tmp69092;
var inst_68927__$1 = tmp69091;
var inst_68928__$1 = inst_68944;
var state_69064__$1 = (function (){var statearr_69109 = state_69064;
(statearr_69109[(13)] = inst_68925__$1);

(statearr_69109[(18)] = inst_68943);

(statearr_69109[(14)] = inst_68927__$1);

(statearr_69109[(16)] = inst_68926__$1);

(statearr_69109[(17)] = inst_68928__$1);

return statearr_69109;
})();
var statearr_69110_70664 = state_69064__$1;
(statearr_69110_70664[(2)] = null);

(statearr_69110_70664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (21))){
var inst_68972 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69117_70668 = state_69064__$1;
(statearr_69117_70668[(2)] = inst_68972);

(statearr_69117_70668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (31))){
var inst_68998 = (state_69064[(9)]);
var inst_69006 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_68998);
var state_69064__$1 = state_69064;
var statearr_69119_70669 = state_69064__$1;
(statearr_69119_70669[(2)] = inst_69006);

(statearr_69119_70669[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (32))){
var inst_68990 = (state_69064[(19)]);
var inst_68991 = (state_69064[(10)]);
var inst_68992 = (state_69064[(20)]);
var inst_68993 = (state_69064[(11)]);
var inst_69008 = (state_69064[(2)]);
var inst_69009 = (inst_68993 + (1));
var tmp69114 = inst_68990;
var tmp69115 = inst_68991;
var tmp69116 = inst_68992;
var inst_68990__$1 = tmp69114;
var inst_68991__$1 = tmp69115;
var inst_68992__$1 = tmp69116;
var inst_68993__$1 = inst_69009;
var state_69064__$1 = (function (){var statearr_69123 = state_69064;
(statearr_69123[(19)] = inst_68990__$1);

(statearr_69123[(21)] = inst_69008);

(statearr_69123[(10)] = inst_68991__$1);

(statearr_69123[(20)] = inst_68992__$1);

(statearr_69123[(11)] = inst_68993__$1);

return statearr_69123;
})();
var statearr_69125_70673 = state_69064__$1;
(statearr_69125_70673[(2)] = null);

(statearr_69125_70673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (40))){
var inst_69026 = (state_69064[(22)]);
var inst_69030 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_69026);
var state_69064__$1 = state_69064;
var statearr_69126_70674 = state_69064__$1;
(statearr_69126_70674[(2)] = inst_69030);

(statearr_69126_70674[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (33))){
var inst_69012 = (state_69064[(23)]);
var inst_69019 = cljs.core.chunked_seq_QMARK_(inst_69012);
var state_69064__$1 = state_69064;
if(inst_69019){
var statearr_69128_70675 = state_69064__$1;
(statearr_69128_70675[(1)] = (36));

} else {
var statearr_69129_70676 = state_69064__$1;
(statearr_69129_70676[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (13))){
var inst_68937 = (state_69064[(24)]);
var inst_68940 = cljs.core.async.close_BANG_(inst_68937);
var state_69064__$1 = state_69064;
var statearr_69130_70677 = state_69064__$1;
(statearr_69130_70677[(2)] = inst_68940);

(statearr_69130_70677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (22))){
var inst_68962 = (state_69064[(8)]);
var inst_68965 = cljs.core.async.close_BANG_(inst_68962);
var state_69064__$1 = state_69064;
var statearr_69131_70678 = state_69064__$1;
(statearr_69131_70678[(2)] = inst_68965);

(statearr_69131_70678[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (36))){
var inst_69012 = (state_69064[(23)]);
var inst_69021 = cljs.core.chunk_first(inst_69012);
var inst_69022 = cljs.core.chunk_rest(inst_69012);
var inst_69023 = cljs.core.count(inst_69021);
var inst_68990 = inst_69022;
var inst_68991 = inst_69021;
var inst_68992 = inst_69023;
var inst_68993 = (0);
var state_69064__$1 = (function (){var statearr_69139 = state_69064;
(statearr_69139[(19)] = inst_68990);

(statearr_69139[(10)] = inst_68991);

(statearr_69139[(20)] = inst_68992);

(statearr_69139[(11)] = inst_68993);

return statearr_69139;
})();
var statearr_69141_70679 = state_69064__$1;
(statearr_69141_70679[(2)] = null);

(statearr_69141_70679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (41))){
var inst_69012 = (state_69064[(23)]);
var inst_69032 = (state_69064[(2)]);
var inst_69033 = cljs.core.next(inst_69012);
var inst_68990 = inst_69033;
var inst_68991 = null;
var inst_68992 = (0);
var inst_68993 = (0);
var state_69064__$1 = (function (){var statearr_69142 = state_69064;
(statearr_69142[(19)] = inst_68990);

(statearr_69142[(10)] = inst_68991);

(statearr_69142[(20)] = inst_68992);

(statearr_69142[(11)] = inst_68993);

(statearr_69142[(25)] = inst_69032);

return statearr_69142;
})();
var statearr_69143_70681 = state_69064__$1;
(statearr_69143_70681[(2)] = null);

(statearr_69143_70681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (43))){
var state_69064__$1 = state_69064;
var statearr_69147_70682 = state_69064__$1;
(statearr_69147_70682[(2)] = null);

(statearr_69147_70682[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (29))){
var inst_69041 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69149_70683 = state_69064__$1;
(statearr_69149_70683[(2)] = inst_69041);

(statearr_69149_70683[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (44))){
var inst_69050 = (state_69064[(2)]);
var state_69064__$1 = (function (){var statearr_69153 = state_69064;
(statearr_69153[(26)] = inst_69050);

return statearr_69153;
})();
var statearr_69155_70684 = state_69064__$1;
(statearr_69155_70684[(2)] = null);

(statearr_69155_70684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (6))){
var inst_68982 = (state_69064[(27)]);
var inst_68981 = cljs.core.deref(cs);
var inst_68982__$1 = cljs.core.keys(inst_68981);
var inst_68983 = cljs.core.count(inst_68982__$1);
var inst_68984 = cljs.core.reset_BANG_(dctr,inst_68983);
var inst_68989 = cljs.core.seq(inst_68982__$1);
var inst_68990 = inst_68989;
var inst_68991 = null;
var inst_68992 = (0);
var inst_68993 = (0);
var state_69064__$1 = (function (){var statearr_69156 = state_69064;
(statearr_69156[(19)] = inst_68990);

(statearr_69156[(10)] = inst_68991);

(statearr_69156[(20)] = inst_68992);

(statearr_69156[(11)] = inst_68993);

(statearr_69156[(28)] = inst_68984);

(statearr_69156[(27)] = inst_68982__$1);

return statearr_69156;
})();
var statearr_69160_70685 = state_69064__$1;
(statearr_69160_70685[(2)] = null);

(statearr_69160_70685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (28))){
var inst_68990 = (state_69064[(19)]);
var inst_69012 = (state_69064[(23)]);
var inst_69012__$1 = cljs.core.seq(inst_68990);
var state_69064__$1 = (function (){var statearr_69162 = state_69064;
(statearr_69162[(23)] = inst_69012__$1);

return statearr_69162;
})();
if(inst_69012__$1){
var statearr_69163_70686 = state_69064__$1;
(statearr_69163_70686[(1)] = (33));

} else {
var statearr_69164_70687 = state_69064__$1;
(statearr_69164_70687[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (25))){
var inst_68992 = (state_69064[(20)]);
var inst_68993 = (state_69064[(11)]);
var inst_68995 = (inst_68993 < inst_68992);
var inst_68996 = inst_68995;
var state_69064__$1 = state_69064;
if(cljs.core.truth_(inst_68996)){
var statearr_69166_70689 = state_69064__$1;
(statearr_69166_70689[(1)] = (27));

} else {
var statearr_69167_70690 = state_69064__$1;
(statearr_69167_70690[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (34))){
var state_69064__$1 = state_69064;
var statearr_69168_70691 = state_69064__$1;
(statearr_69168_70691[(2)] = null);

(statearr_69168_70691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (17))){
var state_69064__$1 = state_69064;
var statearr_69169_70692 = state_69064__$1;
(statearr_69169_70692[(2)] = null);

(statearr_69169_70692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (3))){
var inst_69055 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69064__$1,inst_69055);
} else {
if((state_val_69066 === (12))){
var inst_68977 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69174_70694 = state_69064__$1;
(statearr_69174_70694[(2)] = inst_68977);

(statearr_69174_70694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (2))){
var state_69064__$1 = state_69064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69064__$1,(4),ch);
} else {
if((state_val_69066 === (23))){
var state_69064__$1 = state_69064;
var statearr_69179_70695 = state_69064__$1;
(statearr_69179_70695[(2)] = null);

(statearr_69179_70695[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (35))){
var inst_69039 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69180_70697 = state_69064__$1;
(statearr_69180_70697[(2)] = inst_69039);

(statearr_69180_70697[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (19))){
var inst_68947 = (state_69064[(7)]);
var inst_68951 = cljs.core.chunk_first(inst_68947);
var inst_68952 = cljs.core.chunk_rest(inst_68947);
var inst_68953 = cljs.core.count(inst_68951);
var inst_68925 = inst_68952;
var inst_68926 = inst_68951;
var inst_68927 = inst_68953;
var inst_68928 = (0);
var state_69064__$1 = (function (){var statearr_69184 = state_69064;
(statearr_69184[(13)] = inst_68925);

(statearr_69184[(14)] = inst_68927);

(statearr_69184[(16)] = inst_68926);

(statearr_69184[(17)] = inst_68928);

return statearr_69184;
})();
var statearr_69186_70698 = state_69064__$1;
(statearr_69186_70698[(2)] = null);

(statearr_69186_70698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (11))){
var inst_68925 = (state_69064[(13)]);
var inst_68947 = (state_69064[(7)]);
var inst_68947__$1 = cljs.core.seq(inst_68925);
var state_69064__$1 = (function (){var statearr_69187 = state_69064;
(statearr_69187[(7)] = inst_68947__$1);

return statearr_69187;
})();
if(inst_68947__$1){
var statearr_69191_70700 = state_69064__$1;
(statearr_69191_70700[(1)] = (16));

} else {
var statearr_69192_70701 = state_69064__$1;
(statearr_69192_70701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (9))){
var inst_68979 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69194_70702 = state_69064__$1;
(statearr_69194_70702[(2)] = inst_68979);

(statearr_69194_70702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (5))){
var inst_68923 = cljs.core.deref(cs);
var inst_68924 = cljs.core.seq(inst_68923);
var inst_68925 = inst_68924;
var inst_68926 = null;
var inst_68927 = (0);
var inst_68928 = (0);
var state_69064__$1 = (function (){var statearr_69195 = state_69064;
(statearr_69195[(13)] = inst_68925);

(statearr_69195[(14)] = inst_68927);

(statearr_69195[(16)] = inst_68926);

(statearr_69195[(17)] = inst_68928);

return statearr_69195;
})();
var statearr_69199_70704 = state_69064__$1;
(statearr_69199_70704[(2)] = null);

(statearr_69199_70704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (14))){
var state_69064__$1 = state_69064;
var statearr_69201_70705 = state_69064__$1;
(statearr_69201_70705[(2)] = null);

(statearr_69201_70705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (45))){
var inst_69047 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69202_70706 = state_69064__$1;
(statearr_69202_70706[(2)] = inst_69047);

(statearr_69202_70706[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (26))){
var inst_68982 = (state_69064[(27)]);
var inst_69043 = (state_69064[(2)]);
var inst_69044 = cljs.core.seq(inst_68982);
var state_69064__$1 = (function (){var statearr_69203 = state_69064;
(statearr_69203[(29)] = inst_69043);

return statearr_69203;
})();
if(inst_69044){
var statearr_69204_70708 = state_69064__$1;
(statearr_69204_70708[(1)] = (42));

} else {
var statearr_69205_70709 = state_69064__$1;
(statearr_69205_70709[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (16))){
var inst_68947 = (state_69064[(7)]);
var inst_68949 = cljs.core.chunked_seq_QMARK_(inst_68947);
var state_69064__$1 = state_69064;
if(inst_68949){
var statearr_69206_70710 = state_69064__$1;
(statearr_69206_70710[(1)] = (19));

} else {
var statearr_69207_70711 = state_69064__$1;
(statearr_69207_70711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (38))){
var inst_69036 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69208_70712 = state_69064__$1;
(statearr_69208_70712[(2)] = inst_69036);

(statearr_69208_70712[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (30))){
var state_69064__$1 = state_69064;
var statearr_69209_70714 = state_69064__$1;
(statearr_69209_70714[(2)] = null);

(statearr_69209_70714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (10))){
var inst_68926 = (state_69064[(16)]);
var inst_68928 = (state_69064[(17)]);
var inst_68936 = cljs.core._nth(inst_68926,inst_68928);
var inst_68937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68936,(0),null);
var inst_68938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68936,(1),null);
var state_69064__$1 = (function (){var statearr_69214 = state_69064;
(statearr_69214[(24)] = inst_68937);

return statearr_69214;
})();
if(cljs.core.truth_(inst_68938)){
var statearr_69215_70717 = state_69064__$1;
(statearr_69215_70717[(1)] = (13));

} else {
var statearr_69216_70718 = state_69064__$1;
(statearr_69216_70718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (18))){
var inst_68975 = (state_69064[(2)]);
var state_69064__$1 = state_69064;
var statearr_69217_70724 = state_69064__$1;
(statearr_69217_70724[(2)] = inst_68975);

(statearr_69217_70724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (42))){
var state_69064__$1 = state_69064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69064__$1,(45),dchan);
} else {
if((state_val_69066 === (37))){
var inst_69026 = (state_69064[(22)]);
var inst_68916 = (state_69064[(12)]);
var inst_69012 = (state_69064[(23)]);
var inst_69026__$1 = cljs.core.first(inst_69012);
var inst_69027 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69026__$1,inst_68916,done);
var state_69064__$1 = (function (){var statearr_69219 = state_69064;
(statearr_69219[(22)] = inst_69026__$1);

return statearr_69219;
})();
if(cljs.core.truth_(inst_69027)){
var statearr_69220_70726 = state_69064__$1;
(statearr_69220_70726[(1)] = (39));

} else {
var statearr_69221_70727 = state_69064__$1;
(statearr_69221_70727[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69066 === (8))){
var inst_68927 = (state_69064[(14)]);
var inst_68928 = (state_69064[(17)]);
var inst_68930 = (inst_68928 < inst_68927);
var inst_68931 = inst_68930;
var state_69064__$1 = state_69064;
if(cljs.core.truth_(inst_68931)){
var statearr_69222_70728 = state_69064__$1;
(statearr_69222_70728[(1)] = (10));

} else {
var statearr_69223_70729 = state_69064__$1;
(statearr_69223_70729[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__67713__auto__ = null;
var cljs$core$async$mult_$_state_machine__67713__auto____0 = (function (){
var statearr_69224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69224[(0)] = cljs$core$async$mult_$_state_machine__67713__auto__);

(statearr_69224[(1)] = (1));

return statearr_69224;
});
var cljs$core$async$mult_$_state_machine__67713__auto____1 = (function (state_69064){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_69064);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e69225){var ex__67716__auto__ = e69225;
var statearr_69226_70736 = state_69064;
(statearr_69226_70736[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_69064[(4)]))){
var statearr_69227_70737 = state_69064;
(statearr_69227_70737[(1)] = cljs.core.first((state_69064[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70738 = state_69064;
state_69064 = G__70738;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__67713__auto__ = function(state_69064){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__67713__auto____1.call(this,state_69064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__67713__auto____0;
cljs$core$async$mult_$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__67713__auto____1;
return cljs$core$async$mult_$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_69230 = f__67943__auto__();
(statearr_69230[(6)] = c__67942__auto___70643);

return statearr_69230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__69232 = arguments.length;
switch (G__69232) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_70742 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_70742(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_70748 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_70748(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_70749 = (function (m){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5347__auto__.call(null,m));
} else {
var m__5345__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5345__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_70749(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_70754 = (function (m,state_map){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5347__auto__.call(null,m,state_map));
} else {
var m__5345__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5345__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_70754(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_70764 = (function (m,mode){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5347__auto__.call(null,m,mode));
} else {
var m__5345__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5345__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_70764(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___70766 = arguments.length;
var i__5723__auto___70767 = (0);
while(true){
if((i__5723__auto___70767 < len__5722__auto___70766)){
args__5728__auto__.push((arguments[i__5723__auto___70767]));

var G__70768 = (i__5723__auto___70767 + (1));
i__5723__auto___70767 = G__70768;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((3) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5729__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__69239){
var map__69240 = p__69239;
var map__69240__$1 = cljs.core.__destructure_map(map__69240);
var opts = map__69240__$1;
var statearr_69241_70776 = state;
(statearr_69241_70776[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_69242_70777 = state;
(statearr_69242_70777[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_69243_70782 = state;
(statearr_69243_70782[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq69233){
var G__69234 = cljs.core.first(seq69233);
var seq69233__$1 = cljs.core.next(seq69233);
var G__69235 = cljs.core.first(seq69233__$1);
var seq69233__$2 = cljs.core.next(seq69233__$1);
var G__69236 = cljs.core.first(seq69233__$2);
var seq69233__$3 = cljs.core.next(seq69233__$2);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69234,G__69235,G__69236,seq69233__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69248 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta69249){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta69249 = meta69249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69250,meta69249__$1){
var self__ = this;
var _69250__$1 = this;
return (new cljs.core.async.t_cljs$core$async69248(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta69249__$1));
}));

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69250){
var self__ = this;
var _69250__$1 = this;
return self__.meta69249;
}));

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69248.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async69248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta69249","meta69249",809287819,null)], null);
}));

(cljs.core.async.t_cljs$core$async69248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69248");

(cljs.core.async.t_cljs$core$async69248.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async69248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69248.
 */
cljs.core.async.__GT_t_cljs$core$async69248 = (function cljs$core$async$__GT_t_cljs$core$async69248(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta69249){
return (new cljs.core.async.t_cljs$core$async69248(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta69249));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async69248(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__67942__auto___70825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_69326){
var state_val_69327 = (state_69326[(1)]);
if((state_val_69327 === (7))){
var inst_69284 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
if(cljs.core.truth_(inst_69284)){
var statearr_69331_70830 = state_69326__$1;
(statearr_69331_70830[(1)] = (8));

} else {
var statearr_69332_70832 = state_69326__$1;
(statearr_69332_70832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (20))){
var inst_69277 = (state_69326[(7)]);
var state_69326__$1 = state_69326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69326__$1,(23),out,inst_69277);
} else {
if((state_val_69327 === (1))){
var inst_69256 = calc_state();
var inst_69257 = cljs.core.__destructure_map(inst_69256);
var inst_69258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69257,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69257,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69257,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_69261 = inst_69256;
var state_69326__$1 = (function (){var statearr_69336 = state_69326;
(statearr_69336[(8)] = inst_69260);

(statearr_69336[(9)] = inst_69259);

(statearr_69336[(10)] = inst_69258);

(statearr_69336[(11)] = inst_69261);

return statearr_69336;
})();
var statearr_69337_70842 = state_69326__$1;
(statearr_69337_70842[(2)] = null);

(statearr_69337_70842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (24))){
var inst_69264 = (state_69326[(12)]);
var inst_69261 = inst_69264;
var state_69326__$1 = (function (){var statearr_69338 = state_69326;
(statearr_69338[(11)] = inst_69261);

return statearr_69338;
})();
var statearr_69339_70851 = state_69326__$1;
(statearr_69339_70851[(2)] = null);

(statearr_69339_70851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (4))){
var inst_69277 = (state_69326[(7)]);
var inst_69279 = (state_69326[(13)]);
var inst_69276 = (state_69326[(2)]);
var inst_69277__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69276,(0),null);
var inst_69278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69276,(1),null);
var inst_69279__$1 = (inst_69277__$1 == null);
var state_69326__$1 = (function (){var statearr_69340 = state_69326;
(statearr_69340[(14)] = inst_69278);

(statearr_69340[(7)] = inst_69277__$1);

(statearr_69340[(13)] = inst_69279__$1);

return statearr_69340;
})();
if(cljs.core.truth_(inst_69279__$1)){
var statearr_69341_70874 = state_69326__$1;
(statearr_69341_70874[(1)] = (5));

} else {
var statearr_69342_70875 = state_69326__$1;
(statearr_69342_70875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (15))){
var inst_69265 = (state_69326[(15)]);
var inst_69298 = (state_69326[(16)]);
var inst_69298__$1 = cljs.core.empty_QMARK_(inst_69265);
var state_69326__$1 = (function (){var statearr_69343 = state_69326;
(statearr_69343[(16)] = inst_69298__$1);

return statearr_69343;
})();
if(inst_69298__$1){
var statearr_69350_70876 = state_69326__$1;
(statearr_69350_70876[(1)] = (17));

} else {
var statearr_69352_70877 = state_69326__$1;
(statearr_69352_70877[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (21))){
var inst_69264 = (state_69326[(12)]);
var inst_69261 = inst_69264;
var state_69326__$1 = (function (){var statearr_69359 = state_69326;
(statearr_69359[(11)] = inst_69261);

return statearr_69359;
})();
var statearr_69360_70885 = state_69326__$1;
(statearr_69360_70885[(2)] = null);

(statearr_69360_70885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (13))){
var inst_69291 = (state_69326[(2)]);
var inst_69292 = calc_state();
var inst_69261 = inst_69292;
var state_69326__$1 = (function (){var statearr_69367 = state_69326;
(statearr_69367[(17)] = inst_69291);

(statearr_69367[(11)] = inst_69261);

return statearr_69367;
})();
var statearr_69368_70886 = state_69326__$1;
(statearr_69368_70886[(2)] = null);

(statearr_69368_70886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (22))){
var inst_69319 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
var statearr_69369_70887 = state_69326__$1;
(statearr_69369_70887[(2)] = inst_69319);

(statearr_69369_70887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (6))){
var inst_69278 = (state_69326[(14)]);
var inst_69282 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69278,change);
var state_69326__$1 = state_69326;
var statearr_69370_70893 = state_69326__$1;
(statearr_69370_70893[(2)] = inst_69282);

(statearr_69370_70893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (25))){
var state_69326__$1 = state_69326;
var statearr_69371_70900 = state_69326__$1;
(statearr_69371_70900[(2)] = null);

(statearr_69371_70900[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (17))){
var inst_69278 = (state_69326[(14)]);
var inst_69267 = (state_69326[(18)]);
var inst_69300 = (inst_69267.cljs$core$IFn$_invoke$arity$1 ? inst_69267.cljs$core$IFn$_invoke$arity$1(inst_69278) : inst_69267.call(null,inst_69278));
var inst_69301 = cljs.core.not(inst_69300);
var state_69326__$1 = state_69326;
var statearr_69379_70904 = state_69326__$1;
(statearr_69379_70904[(2)] = inst_69301);

(statearr_69379_70904[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (3))){
var inst_69323 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69326__$1,inst_69323);
} else {
if((state_val_69327 === (12))){
var state_69326__$1 = state_69326;
var statearr_69383_70913 = state_69326__$1;
(statearr_69383_70913[(2)] = null);

(statearr_69383_70913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (2))){
var inst_69264 = (state_69326[(12)]);
var inst_69261 = (state_69326[(11)]);
var inst_69264__$1 = cljs.core.__destructure_map(inst_69261);
var inst_69265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69264__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69264__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69264__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_69326__$1 = (function (){var statearr_69384 = state_69326;
(statearr_69384[(15)] = inst_69265);

(statearr_69384[(18)] = inst_69267);

(statearr_69384[(12)] = inst_69264__$1);

return statearr_69384;
})();
return cljs.core.async.ioc_alts_BANG_(state_69326__$1,(4),inst_69268);
} else {
if((state_val_69327 === (23))){
var inst_69310 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
if(cljs.core.truth_(inst_69310)){
var statearr_69388_70914 = state_69326__$1;
(statearr_69388_70914[(1)] = (24));

} else {
var statearr_69389_70915 = state_69326__$1;
(statearr_69389_70915[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (19))){
var inst_69304 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
var statearr_69390_70916 = state_69326__$1;
(statearr_69390_70916[(2)] = inst_69304);

(statearr_69390_70916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (11))){
var inst_69278 = (state_69326[(14)]);
var inst_69288 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_69278);
var state_69326__$1 = state_69326;
var statearr_69391_70921 = state_69326__$1;
(statearr_69391_70921[(2)] = inst_69288);

(statearr_69391_70921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (9))){
var inst_69265 = (state_69326[(15)]);
var inst_69295 = (state_69326[(19)]);
var inst_69278 = (state_69326[(14)]);
var inst_69295__$1 = (inst_69265.cljs$core$IFn$_invoke$arity$1 ? inst_69265.cljs$core$IFn$_invoke$arity$1(inst_69278) : inst_69265.call(null,inst_69278));
var state_69326__$1 = (function (){var statearr_69392 = state_69326;
(statearr_69392[(19)] = inst_69295__$1);

return statearr_69392;
})();
if(cljs.core.truth_(inst_69295__$1)){
var statearr_69393_70922 = state_69326__$1;
(statearr_69393_70922[(1)] = (14));

} else {
var statearr_69394_70923 = state_69326__$1;
(statearr_69394_70923[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (5))){
var inst_69279 = (state_69326[(13)]);
var state_69326__$1 = state_69326;
var statearr_69395_70924 = state_69326__$1;
(statearr_69395_70924[(2)] = inst_69279);

(statearr_69395_70924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (14))){
var inst_69295 = (state_69326[(19)]);
var state_69326__$1 = state_69326;
var statearr_69400_70925 = state_69326__$1;
(statearr_69400_70925[(2)] = inst_69295);

(statearr_69400_70925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (26))){
var inst_69315 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
var statearr_69401_70933 = state_69326__$1;
(statearr_69401_70933[(2)] = inst_69315);

(statearr_69401_70933[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (16))){
var inst_69306 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
if(cljs.core.truth_(inst_69306)){
var statearr_69402_70934 = state_69326__$1;
(statearr_69402_70934[(1)] = (20));

} else {
var statearr_69403_70935 = state_69326__$1;
(statearr_69403_70935[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (10))){
var inst_69321 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
var statearr_69404_70936 = state_69326__$1;
(statearr_69404_70936[(2)] = inst_69321);

(statearr_69404_70936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (18))){
var inst_69298 = (state_69326[(16)]);
var state_69326__$1 = state_69326;
var statearr_69405_70937 = state_69326__$1;
(statearr_69405_70937[(2)] = inst_69298);

(statearr_69405_70937[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (8))){
var inst_69277 = (state_69326[(7)]);
var inst_69286 = (inst_69277 == null);
var state_69326__$1 = state_69326;
if(cljs.core.truth_(inst_69286)){
var statearr_69406_70941 = state_69326__$1;
(statearr_69406_70941[(1)] = (11));

} else {
var statearr_69407_70942 = state_69326__$1;
(statearr_69407_70942[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__67713__auto__ = null;
var cljs$core$async$mix_$_state_machine__67713__auto____0 = (function (){
var statearr_69408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69408[(0)] = cljs$core$async$mix_$_state_machine__67713__auto__);

(statearr_69408[(1)] = (1));

return statearr_69408;
});
var cljs$core$async$mix_$_state_machine__67713__auto____1 = (function (state_69326){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_69326);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e69409){var ex__67716__auto__ = e69409;
var statearr_69410_70944 = state_69326;
(statearr_69410_70944[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_69326[(4)]))){
var statearr_69411_70948 = state_69326;
(statearr_69411_70948[(1)] = cljs.core.first((state_69326[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70949 = state_69326;
state_69326 = G__70949;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__67713__auto__ = function(state_69326){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__67713__auto____1.call(this,state_69326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__67713__auto____0;
cljs$core$async$mix_$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__67713__auto____1;
return cljs$core$async$mix_$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_69416 = f__67943__auto__();
(statearr_69416[(6)] = c__67942__auto___70825);

return statearr_69416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_70951 = (function (p,v,ch,close_QMARK_){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5347__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5345__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5345__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_70951(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_70956 = (function (p,v,ch){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5347__auto__.call(null,p,v,ch));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5345__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_70956(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_70969 = (function() {
var G__70970 = null;
var G__70970__1 = (function (p){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5347__auto__.call(null,p));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5345__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__70970__2 = (function (p,v){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5347__auto__.call(null,p,v));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5345__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__70970 = function(p,v){
switch(arguments.length){
case 1:
return G__70970__1.call(this,p);
case 2:
return G__70970__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__70970.cljs$core$IFn$_invoke$arity$1 = G__70970__1;
G__70970.cljs$core$IFn$_invoke$arity$2 = G__70970__2;
return G__70970;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__69429 = arguments.length;
switch (G__69429) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_70969(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_70969(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69433 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta69434){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta69434 = meta69434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69435,meta69434__$1){
var self__ = this;
var _69435__$1 = this;
return (new cljs.core.async.t_cljs$core$async69433(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta69434__$1));
}));

(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69435){
var self__ = this;
var _69435__$1 = this;
return self__.meta69434;
}));

(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async69433.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async69433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta69434","meta69434",-1501608476,null)], null);
}));

(cljs.core.async.t_cljs$core$async69433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69433");

(cljs.core.async.t_cljs$core$async69433.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async69433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69433.
 */
cljs.core.async.__GT_t_cljs$core$async69433 = (function cljs$core$async$__GT_t_cljs$core$async69433(ch,topic_fn,buf_fn,mults,ensure_mult,meta69434){
return (new cljs.core.async.t_cljs$core$async69433(ch,topic_fn,buf_fn,mults,ensure_mult,meta69434));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__69432 = arguments.length;
switch (G__69432) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__69430_SHARP_){
if(cljs.core.truth_((p1__69430_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69430_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__69430_SHARP_.call(null,topic)))){
return p1__69430_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__69430_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async69433(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__67942__auto___70982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_69519){
var state_val_69520 = (state_69519[(1)]);
if((state_val_69520 === (7))){
var inst_69515 = (state_69519[(2)]);
var state_69519__$1 = state_69519;
var statearr_69521_70984 = state_69519__$1;
(statearr_69521_70984[(2)] = inst_69515);

(statearr_69521_70984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (20))){
var state_69519__$1 = state_69519;
var statearr_69522_70987 = state_69519__$1;
(statearr_69522_70987[(2)] = null);

(statearr_69522_70987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (1))){
var state_69519__$1 = state_69519;
var statearr_69523_70991 = state_69519__$1;
(statearr_69523_70991[(2)] = null);

(statearr_69523_70991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (24))){
var inst_69498 = (state_69519[(7)]);
var inst_69507 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_69498);
var state_69519__$1 = state_69519;
var statearr_69528_70993 = state_69519__$1;
(statearr_69528_70993[(2)] = inst_69507);

(statearr_69528_70993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (4))){
var inst_69446 = (state_69519[(8)]);
var inst_69446__$1 = (state_69519[(2)]);
var inst_69448 = (inst_69446__$1 == null);
var state_69519__$1 = (function (){var statearr_69529 = state_69519;
(statearr_69529[(8)] = inst_69446__$1);

return statearr_69529;
})();
if(cljs.core.truth_(inst_69448)){
var statearr_69530_70994 = state_69519__$1;
(statearr_69530_70994[(1)] = (5));

} else {
var statearr_69531_70995 = state_69519__$1;
(statearr_69531_70995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (15))){
var inst_69492 = (state_69519[(2)]);
var state_69519__$1 = state_69519;
var statearr_69532_70996 = state_69519__$1;
(statearr_69532_70996[(2)] = inst_69492);

(statearr_69532_70996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (21))){
var inst_69512 = (state_69519[(2)]);
var state_69519__$1 = (function (){var statearr_69537 = state_69519;
(statearr_69537[(9)] = inst_69512);

return statearr_69537;
})();
var statearr_69538_71001 = state_69519__$1;
(statearr_69538_71001[(2)] = null);

(statearr_69538_71001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (13))){
var inst_69474 = (state_69519[(10)]);
var inst_69476 = cljs.core.chunked_seq_QMARK_(inst_69474);
var state_69519__$1 = state_69519;
if(inst_69476){
var statearr_69539_71002 = state_69519__$1;
(statearr_69539_71002[(1)] = (16));

} else {
var statearr_69540_71003 = state_69519__$1;
(statearr_69540_71003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (22))){
var inst_69504 = (state_69519[(2)]);
var state_69519__$1 = state_69519;
if(cljs.core.truth_(inst_69504)){
var statearr_69541_71006 = state_69519__$1;
(statearr_69541_71006[(1)] = (23));

} else {
var statearr_69542_71007 = state_69519__$1;
(statearr_69542_71007[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (6))){
var inst_69500 = (state_69519[(11)]);
var inst_69498 = (state_69519[(7)]);
var inst_69446 = (state_69519[(8)]);
var inst_69498__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_69446) : topic_fn.call(null,inst_69446));
var inst_69499 = cljs.core.deref(mults);
var inst_69500__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69499,inst_69498__$1);
var state_69519__$1 = (function (){var statearr_69543 = state_69519;
(statearr_69543[(11)] = inst_69500__$1);

(statearr_69543[(7)] = inst_69498__$1);

return statearr_69543;
})();
if(cljs.core.truth_(inst_69500__$1)){
var statearr_69544_71016 = state_69519__$1;
(statearr_69544_71016[(1)] = (19));

} else {
var statearr_69545_71021 = state_69519__$1;
(statearr_69545_71021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (25))){
var inst_69509 = (state_69519[(2)]);
var state_69519__$1 = state_69519;
var statearr_69546_71022 = state_69519__$1;
(statearr_69546_71022[(2)] = inst_69509);

(statearr_69546_71022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (17))){
var inst_69474 = (state_69519[(10)]);
var inst_69483 = cljs.core.first(inst_69474);
var inst_69484 = cljs.core.async.muxch_STAR_(inst_69483);
var inst_69485 = cljs.core.async.close_BANG_(inst_69484);
var inst_69486 = cljs.core.next(inst_69474);
var inst_69457 = inst_69486;
var inst_69458 = null;
var inst_69459 = (0);
var inst_69460 = (0);
var state_69519__$1 = (function (){var statearr_69547 = state_69519;
(statearr_69547[(12)] = inst_69457);

(statearr_69547[(13)] = inst_69458);

(statearr_69547[(14)] = inst_69485);

(statearr_69547[(15)] = inst_69459);

(statearr_69547[(16)] = inst_69460);

return statearr_69547;
})();
var statearr_69548_71023 = state_69519__$1;
(statearr_69548_71023[(2)] = null);

(statearr_69548_71023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (3))){
var inst_69517 = (state_69519[(2)]);
var state_69519__$1 = state_69519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69519__$1,inst_69517);
} else {
if((state_val_69520 === (12))){
var inst_69494 = (state_69519[(2)]);
var state_69519__$1 = state_69519;
var statearr_69549_71029 = state_69519__$1;
(statearr_69549_71029[(2)] = inst_69494);

(statearr_69549_71029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (2))){
var state_69519__$1 = state_69519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69519__$1,(4),ch);
} else {
if((state_val_69520 === (23))){
var state_69519__$1 = state_69519;
var statearr_69550_71035 = state_69519__$1;
(statearr_69550_71035[(2)] = null);

(statearr_69550_71035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (19))){
var inst_69500 = (state_69519[(11)]);
var inst_69446 = (state_69519[(8)]);
var inst_69502 = cljs.core.async.muxch_STAR_(inst_69500);
var state_69519__$1 = state_69519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69519__$1,(22),inst_69502,inst_69446);
} else {
if((state_val_69520 === (11))){
var inst_69457 = (state_69519[(12)]);
var inst_69474 = (state_69519[(10)]);
var inst_69474__$1 = cljs.core.seq(inst_69457);
var state_69519__$1 = (function (){var statearr_69551 = state_69519;
(statearr_69551[(10)] = inst_69474__$1);

return statearr_69551;
})();
if(inst_69474__$1){
var statearr_69552_71045 = state_69519__$1;
(statearr_69552_71045[(1)] = (13));

} else {
var statearr_69553_71046 = state_69519__$1;
(statearr_69553_71046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (9))){
var inst_69496 = (state_69519[(2)]);
var state_69519__$1 = state_69519;
var statearr_69555_71051 = state_69519__$1;
(statearr_69555_71051[(2)] = inst_69496);

(statearr_69555_71051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (5))){
var inst_69454 = cljs.core.deref(mults);
var inst_69455 = cljs.core.vals(inst_69454);
var inst_69456 = cljs.core.seq(inst_69455);
var inst_69457 = inst_69456;
var inst_69458 = null;
var inst_69459 = (0);
var inst_69460 = (0);
var state_69519__$1 = (function (){var statearr_69557 = state_69519;
(statearr_69557[(12)] = inst_69457);

(statearr_69557[(13)] = inst_69458);

(statearr_69557[(15)] = inst_69459);

(statearr_69557[(16)] = inst_69460);

return statearr_69557;
})();
var statearr_69558_71054 = state_69519__$1;
(statearr_69558_71054[(2)] = null);

(statearr_69558_71054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (14))){
var state_69519__$1 = state_69519;
var statearr_69562_71055 = state_69519__$1;
(statearr_69562_71055[(2)] = null);

(statearr_69562_71055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (16))){
var inst_69474 = (state_69519[(10)]);
var inst_69478 = cljs.core.chunk_first(inst_69474);
var inst_69479 = cljs.core.chunk_rest(inst_69474);
var inst_69480 = cljs.core.count(inst_69478);
var inst_69457 = inst_69479;
var inst_69458 = inst_69478;
var inst_69459 = inst_69480;
var inst_69460 = (0);
var state_69519__$1 = (function (){var statearr_69566 = state_69519;
(statearr_69566[(12)] = inst_69457);

(statearr_69566[(13)] = inst_69458);

(statearr_69566[(15)] = inst_69459);

(statearr_69566[(16)] = inst_69460);

return statearr_69566;
})();
var statearr_69567_71061 = state_69519__$1;
(statearr_69567_71061[(2)] = null);

(statearr_69567_71061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (10))){
var inst_69457 = (state_69519[(12)]);
var inst_69458 = (state_69519[(13)]);
var inst_69459 = (state_69519[(15)]);
var inst_69460 = (state_69519[(16)]);
var inst_69468 = cljs.core._nth(inst_69458,inst_69460);
var inst_69469 = cljs.core.async.muxch_STAR_(inst_69468);
var inst_69470 = cljs.core.async.close_BANG_(inst_69469);
var inst_69471 = (inst_69460 + (1));
var tmp69559 = inst_69457;
var tmp69560 = inst_69458;
var tmp69561 = inst_69459;
var inst_69457__$1 = tmp69559;
var inst_69458__$1 = tmp69560;
var inst_69459__$1 = tmp69561;
var inst_69460__$1 = inst_69471;
var state_69519__$1 = (function (){var statearr_69568 = state_69519;
(statearr_69568[(17)] = inst_69470);

(statearr_69568[(12)] = inst_69457__$1);

(statearr_69568[(13)] = inst_69458__$1);

(statearr_69568[(15)] = inst_69459__$1);

(statearr_69568[(16)] = inst_69460__$1);

return statearr_69568;
})();
var statearr_69569_71064 = state_69519__$1;
(statearr_69569_71064[(2)] = null);

(statearr_69569_71064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (18))){
var inst_69489 = (state_69519[(2)]);
var state_69519__$1 = state_69519;
var statearr_69570_71065 = state_69519__$1;
(statearr_69570_71065[(2)] = inst_69489);

(statearr_69570_71065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69520 === (8))){
var inst_69459 = (state_69519[(15)]);
var inst_69460 = (state_69519[(16)]);
var inst_69465 = (inst_69460 < inst_69459);
var inst_69466 = inst_69465;
var state_69519__$1 = state_69519;
if(cljs.core.truth_(inst_69466)){
var statearr_69571_71066 = state_69519__$1;
(statearr_69571_71066[(1)] = (10));

} else {
var statearr_69572_71067 = state_69519__$1;
(statearr_69572_71067[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_69573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69573[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_69573[(1)] = (1));

return statearr_69573;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_69519){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_69519);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e69574){var ex__67716__auto__ = e69574;
var statearr_69575_71068 = state_69519;
(statearr_69575_71068[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_69519[(4)]))){
var statearr_69576_71069 = state_69519;
(statearr_69576_71069[(1)] = cljs.core.first((state_69519[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71070 = state_69519;
state_69519 = G__71070;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_69519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_69519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_69577 = f__67943__auto__();
(statearr_69577[(6)] = c__67942__auto___70982);

return statearr_69577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__69579 = arguments.length;
switch (G__69579) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__69581 = arguments.length;
switch (G__69581) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__69583 = arguments.length;
switch (G__69583) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__67942__auto___71109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_69630){
var state_val_69631 = (state_69630[(1)]);
if((state_val_69631 === (7))){
var state_69630__$1 = state_69630;
var statearr_69636_71115 = state_69630__$1;
(statearr_69636_71115[(2)] = null);

(statearr_69636_71115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (1))){
var state_69630__$1 = state_69630;
var statearr_69637_71118 = state_69630__$1;
(statearr_69637_71118[(2)] = null);

(statearr_69637_71118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (4))){
var inst_69587 = (state_69630[(7)]);
var inst_69586 = (state_69630[(8)]);
var inst_69589 = (inst_69587 < inst_69586);
var state_69630__$1 = state_69630;
if(cljs.core.truth_(inst_69589)){
var statearr_69638_71129 = state_69630__$1;
(statearr_69638_71129[(1)] = (6));

} else {
var statearr_69639_71130 = state_69630__$1;
(statearr_69639_71130[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (15))){
var inst_69616 = (state_69630[(9)]);
var inst_69621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_69616);
var state_69630__$1 = state_69630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69630__$1,(17),out,inst_69621);
} else {
if((state_val_69631 === (13))){
var inst_69616 = (state_69630[(9)]);
var inst_69616__$1 = (state_69630[(2)]);
var inst_69617 = cljs.core.some(cljs.core.nil_QMARK_,inst_69616__$1);
var state_69630__$1 = (function (){var statearr_69640 = state_69630;
(statearr_69640[(9)] = inst_69616__$1);

return statearr_69640;
})();
if(cljs.core.truth_(inst_69617)){
var statearr_69641_71135 = state_69630__$1;
(statearr_69641_71135[(1)] = (14));

} else {
var statearr_69642_71136 = state_69630__$1;
(statearr_69642_71136[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (6))){
var state_69630__$1 = state_69630;
var statearr_69643_71137 = state_69630__$1;
(statearr_69643_71137[(2)] = null);

(statearr_69643_71137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (17))){
var inst_69623 = (state_69630[(2)]);
var state_69630__$1 = (function (){var statearr_69645 = state_69630;
(statearr_69645[(10)] = inst_69623);

return statearr_69645;
})();
var statearr_69646_71140 = state_69630__$1;
(statearr_69646_71140[(2)] = null);

(statearr_69646_71140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (3))){
var inst_69628 = (state_69630[(2)]);
var state_69630__$1 = state_69630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69630__$1,inst_69628);
} else {
if((state_val_69631 === (12))){
var _ = (function (){var statearr_69647 = state_69630;
(statearr_69647[(4)] = cljs.core.rest((state_69630[(4)])));

return statearr_69647;
})();
var state_69630__$1 = state_69630;
var ex69644 = (state_69630__$1[(2)]);
var statearr_69648_71150 = state_69630__$1;
(statearr_69648_71150[(5)] = ex69644);


if((ex69644 instanceof Object)){
var statearr_69649_71151 = state_69630__$1;
(statearr_69649_71151[(1)] = (11));

(statearr_69649_71151[(5)] = null);

} else {
throw ex69644;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (2))){
var inst_69585 = cljs.core.reset_BANG_(dctr,cnt);
var inst_69586 = cnt;
var inst_69587 = (0);
var state_69630__$1 = (function (){var statearr_69664 = state_69630;
(statearr_69664[(11)] = inst_69585);

(statearr_69664[(7)] = inst_69587);

(statearr_69664[(8)] = inst_69586);

return statearr_69664;
})();
var statearr_69671_71158 = state_69630__$1;
(statearr_69671_71158[(2)] = null);

(statearr_69671_71158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (11))){
var inst_69595 = (state_69630[(2)]);
var inst_69596 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_69630__$1 = (function (){var statearr_69672 = state_69630;
(statearr_69672[(12)] = inst_69595);

return statearr_69672;
})();
var statearr_69673_71163 = state_69630__$1;
(statearr_69673_71163[(2)] = inst_69596);

(statearr_69673_71163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (9))){
var inst_69587 = (state_69630[(7)]);
var _ = (function (){var statearr_69674 = state_69630;
(statearr_69674[(4)] = cljs.core.cons((12),(state_69630[(4)])));

return statearr_69674;
})();
var inst_69602 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_69587) : chs__$1.call(null,inst_69587));
var inst_69603 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_69587) : done.call(null,inst_69587));
var inst_69604 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69602,inst_69603);
var ___$1 = (function (){var statearr_69675 = state_69630;
(statearr_69675[(4)] = cljs.core.rest((state_69630[(4)])));

return statearr_69675;
})();
var state_69630__$1 = state_69630;
var statearr_69676_71165 = state_69630__$1;
(statearr_69676_71165[(2)] = inst_69604);

(statearr_69676_71165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (5))){
var inst_69614 = (state_69630[(2)]);
var state_69630__$1 = (function (){var statearr_69677 = state_69630;
(statearr_69677[(13)] = inst_69614);

return statearr_69677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69630__$1,(13),dchan);
} else {
if((state_val_69631 === (14))){
var inst_69619 = cljs.core.async.close_BANG_(out);
var state_69630__$1 = state_69630;
var statearr_69692_71167 = state_69630__$1;
(statearr_69692_71167[(2)] = inst_69619);

(statearr_69692_71167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (16))){
var inst_69626 = (state_69630[(2)]);
var state_69630__$1 = state_69630;
var statearr_69693_71168 = state_69630__$1;
(statearr_69693_71168[(2)] = inst_69626);

(statearr_69693_71168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (10))){
var inst_69587 = (state_69630[(7)]);
var inst_69607 = (state_69630[(2)]);
var inst_69608 = (inst_69587 + (1));
var inst_69587__$1 = inst_69608;
var state_69630__$1 = (function (){var statearr_69700 = state_69630;
(statearr_69700[(7)] = inst_69587__$1);

(statearr_69700[(14)] = inst_69607);

return statearr_69700;
})();
var statearr_69701_71169 = state_69630__$1;
(statearr_69701_71169[(2)] = null);

(statearr_69701_71169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69631 === (8))){
var inst_69612 = (state_69630[(2)]);
var state_69630__$1 = state_69630;
var statearr_69702_71170 = state_69630__$1;
(statearr_69702_71170[(2)] = inst_69612);

(statearr_69702_71170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_69703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69703[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_69703[(1)] = (1));

return statearr_69703;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_69630){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_69630);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e69704){var ex__67716__auto__ = e69704;
var statearr_69705_71175 = state_69630;
(statearr_69705_71175[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_69630[(4)]))){
var statearr_69706_71176 = state_69630;
(statearr_69706_71176[(1)] = cljs.core.first((state_69630[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71182 = state_69630;
state_69630 = G__71182;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_69630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_69630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_69709 = f__67943__auto__();
(statearr_69709[(6)] = c__67942__auto___71109);

return statearr_69709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__69713 = arguments.length;
switch (G__69713) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__67942__auto___71189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_69748){
var state_val_69749 = (state_69748[(1)]);
if((state_val_69749 === (7))){
var inst_69724 = (state_69748[(7)]);
var inst_69725 = (state_69748[(8)]);
var inst_69724__$1 = (state_69748[(2)]);
var inst_69725__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69724__$1,(0),null);
var inst_69726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69724__$1,(1),null);
var inst_69730 = (inst_69725__$1 == null);
var state_69748__$1 = (function (){var statearr_69750 = state_69748;
(statearr_69750[(7)] = inst_69724__$1);

(statearr_69750[(9)] = inst_69726);

(statearr_69750[(8)] = inst_69725__$1);

return statearr_69750;
})();
if(cljs.core.truth_(inst_69730)){
var statearr_69751_71193 = state_69748__$1;
(statearr_69751_71193[(1)] = (8));

} else {
var statearr_69752_71194 = state_69748__$1;
(statearr_69752_71194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (1))){
var inst_69714 = cljs.core.vec(chs);
var inst_69715 = inst_69714;
var state_69748__$1 = (function (){var statearr_69753 = state_69748;
(statearr_69753[(10)] = inst_69715);

return statearr_69753;
})();
var statearr_69754_71198 = state_69748__$1;
(statearr_69754_71198[(2)] = null);

(statearr_69754_71198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (4))){
var inst_69715 = (state_69748[(10)]);
var state_69748__$1 = state_69748;
return cljs.core.async.ioc_alts_BANG_(state_69748__$1,(7),inst_69715);
} else {
if((state_val_69749 === (6))){
var inst_69744 = (state_69748[(2)]);
var state_69748__$1 = state_69748;
var statearr_69755_71207 = state_69748__$1;
(statearr_69755_71207[(2)] = inst_69744);

(statearr_69755_71207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (3))){
var inst_69746 = (state_69748[(2)]);
var state_69748__$1 = state_69748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69748__$1,inst_69746);
} else {
if((state_val_69749 === (2))){
var inst_69715 = (state_69748[(10)]);
var inst_69717 = cljs.core.count(inst_69715);
var inst_69718 = (inst_69717 > (0));
var state_69748__$1 = state_69748;
if(cljs.core.truth_(inst_69718)){
var statearr_69757_71209 = state_69748__$1;
(statearr_69757_71209[(1)] = (4));

} else {
var statearr_69758_71210 = state_69748__$1;
(statearr_69758_71210[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (11))){
var inst_69715 = (state_69748[(10)]);
var inst_69737 = (state_69748[(2)]);
var tmp69756 = inst_69715;
var inst_69715__$1 = tmp69756;
var state_69748__$1 = (function (){var statearr_69759 = state_69748;
(statearr_69759[(10)] = inst_69715__$1);

(statearr_69759[(11)] = inst_69737);

return statearr_69759;
})();
var statearr_69760_71211 = state_69748__$1;
(statearr_69760_71211[(2)] = null);

(statearr_69760_71211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (9))){
var inst_69725 = (state_69748[(8)]);
var state_69748__$1 = state_69748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69748__$1,(11),out,inst_69725);
} else {
if((state_val_69749 === (5))){
var inst_69742 = cljs.core.async.close_BANG_(out);
var state_69748__$1 = state_69748;
var statearr_69761_71213 = state_69748__$1;
(statearr_69761_71213[(2)] = inst_69742);

(statearr_69761_71213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (10))){
var inst_69740 = (state_69748[(2)]);
var state_69748__$1 = state_69748;
var statearr_69762_71215 = state_69748__$1;
(statearr_69762_71215[(2)] = inst_69740);

(statearr_69762_71215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (8))){
var inst_69715 = (state_69748[(10)]);
var inst_69724 = (state_69748[(7)]);
var inst_69726 = (state_69748[(9)]);
var inst_69725 = (state_69748[(8)]);
var inst_69732 = (function (){var cs = inst_69715;
var vec__69720 = inst_69724;
var v = inst_69725;
var c = inst_69726;
return (function (p1__69710_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__69710_SHARP_);
});
})();
var inst_69733 = cljs.core.filterv(inst_69732,inst_69715);
var inst_69715__$1 = inst_69733;
var state_69748__$1 = (function (){var statearr_69763 = state_69748;
(statearr_69763[(10)] = inst_69715__$1);

return statearr_69763;
})();
var statearr_69764_71222 = state_69748__$1;
(statearr_69764_71222[(2)] = null);

(statearr_69764_71222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_69765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69765[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_69765[(1)] = (1));

return statearr_69765;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_69748){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_69748);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e69766){var ex__67716__auto__ = e69766;
var statearr_69767_71224 = state_69748;
(statearr_69767_71224[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_69748[(4)]))){
var statearr_69768_71229 = state_69748;
(statearr_69768_71229[(1)] = cljs.core.first((state_69748[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71230 = state_69748;
state_69748 = G__71230;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_69748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_69748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_69769 = f__67943__auto__();
(statearr_69769[(6)] = c__67942__auto___71189);

return statearr_69769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__69771 = arguments.length;
switch (G__69771) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__67942__auto___71232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_69806){
var state_val_69807 = (state_69806[(1)]);
if((state_val_69807 === (7))){
var inst_69785 = (state_69806[(7)]);
var inst_69785__$1 = (state_69806[(2)]);
var inst_69786 = (inst_69785__$1 == null);
var inst_69787 = cljs.core.not(inst_69786);
var state_69806__$1 = (function (){var statearr_69808 = state_69806;
(statearr_69808[(7)] = inst_69785__$1);

return statearr_69808;
})();
if(inst_69787){
var statearr_69809_71233 = state_69806__$1;
(statearr_69809_71233[(1)] = (8));

} else {
var statearr_69810_71234 = state_69806__$1;
(statearr_69810_71234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69807 === (1))){
var inst_69780 = (0);
var state_69806__$1 = (function (){var statearr_69811 = state_69806;
(statearr_69811[(8)] = inst_69780);

return statearr_69811;
})();
var statearr_69812_71235 = state_69806__$1;
(statearr_69812_71235[(2)] = null);

(statearr_69812_71235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69807 === (4))){
var state_69806__$1 = state_69806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69806__$1,(7),ch);
} else {
if((state_val_69807 === (6))){
var inst_69801 = (state_69806[(2)]);
var state_69806__$1 = state_69806;
var statearr_69813_71241 = state_69806__$1;
(statearr_69813_71241[(2)] = inst_69801);

(statearr_69813_71241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69807 === (3))){
var inst_69803 = (state_69806[(2)]);
var inst_69804 = cljs.core.async.close_BANG_(out);
var state_69806__$1 = (function (){var statearr_69814 = state_69806;
(statearr_69814[(9)] = inst_69803);

return statearr_69814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69806__$1,inst_69804);
} else {
if((state_val_69807 === (2))){
var inst_69780 = (state_69806[(8)]);
var inst_69782 = (inst_69780 < n);
var state_69806__$1 = state_69806;
if(cljs.core.truth_(inst_69782)){
var statearr_69815_71246 = state_69806__$1;
(statearr_69815_71246[(1)] = (4));

} else {
var statearr_69816_71247 = state_69806__$1;
(statearr_69816_71247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69807 === (11))){
var inst_69780 = (state_69806[(8)]);
var inst_69793 = (state_69806[(2)]);
var inst_69794 = (inst_69780 + (1));
var inst_69780__$1 = inst_69794;
var state_69806__$1 = (function (){var statearr_69817 = state_69806;
(statearr_69817[(10)] = inst_69793);

(statearr_69817[(8)] = inst_69780__$1);

return statearr_69817;
})();
var statearr_69818_71249 = state_69806__$1;
(statearr_69818_71249[(2)] = null);

(statearr_69818_71249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69807 === (9))){
var state_69806__$1 = state_69806;
var statearr_69819_71250 = state_69806__$1;
(statearr_69819_71250[(2)] = null);

(statearr_69819_71250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69807 === (5))){
var state_69806__$1 = state_69806;
var statearr_69820_71254 = state_69806__$1;
(statearr_69820_71254[(2)] = null);

(statearr_69820_71254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69807 === (10))){
var inst_69798 = (state_69806[(2)]);
var state_69806__$1 = state_69806;
var statearr_69821_71256 = state_69806__$1;
(statearr_69821_71256[(2)] = inst_69798);

(statearr_69821_71256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69807 === (8))){
var inst_69785 = (state_69806[(7)]);
var state_69806__$1 = state_69806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69806__$1,(11),out,inst_69785);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_69822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69822[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_69822[(1)] = (1));

return statearr_69822;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_69806){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_69806);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e69823){var ex__67716__auto__ = e69823;
var statearr_69824_71261 = state_69806;
(statearr_69824_71261[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_69806[(4)]))){
var statearr_69825_71262 = state_69806;
(statearr_69825_71262[(1)] = cljs.core.first((state_69806[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71264 = state_69806;
state_69806 = G__71264;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_69806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_69806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_69826 = f__67943__auto__();
(statearr_69826[(6)] = c__67942__auto___71232);

return statearr_69826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69835 = (function (f,ch,meta69830,_,fn1,meta69836){
this.f = f;
this.ch = ch;
this.meta69830 = meta69830;
this._ = _;
this.fn1 = fn1;
this.meta69836 = meta69836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69837,meta69836__$1){
var self__ = this;
var _69837__$1 = this;
return (new cljs.core.async.t_cljs$core$async69835(self__.f,self__.ch,self__.meta69830,self__._,self__.fn1,meta69836__$1));
}));

(cljs.core.async.t_cljs$core$async69835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69837){
var self__ = this;
var _69837__$1 = this;
return self__.meta69836;
}));

(cljs.core.async.t_cljs$core$async69835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async69835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__69827_SHARP_){
var G__69842 = (((p1__69827_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__69827_SHARP_) : self__.f.call(null,p1__69827_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__69842) : f1.call(null,G__69842));
});
}));

(cljs.core.async.t_cljs$core$async69835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69830","meta69830",-1984501717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async69829","cljs.core.async/t_cljs$core$async69829",27648393,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta69836","meta69836",1655671472,null)], null);
}));

(cljs.core.async.t_cljs$core$async69835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69835");

(cljs.core.async.t_cljs$core$async69835.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async69835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69835.
 */
cljs.core.async.__GT_t_cljs$core$async69835 = (function cljs$core$async$__GT_t_cljs$core$async69835(f,ch,meta69830,_,fn1,meta69836){
return (new cljs.core.async.t_cljs$core$async69835(f,ch,meta69830,_,fn1,meta69836));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69829 = (function (f,ch,meta69830){
this.f = f;
this.ch = ch;
this.meta69830 = meta69830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69831,meta69830__$1){
var self__ = this;
var _69831__$1 = this;
return (new cljs.core.async.t_cljs$core$async69829(self__.f,self__.ch,meta69830__$1));
}));

(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69831){
var self__ = this;
var _69831__$1 = this;
return self__.meta69830;
}));

(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async69835(self__.f,self__.ch,self__.meta69830,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__4996__auto__ = ret;
if(cljs.core.truth_(and__4996__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4996__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__69843 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__69843) : self__.f.call(null,G__69843));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async69829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69830","meta69830",-1984501717,null)], null);
}));

(cljs.core.async.t_cljs$core$async69829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69829");

(cljs.core.async.t_cljs$core$async69829.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async69829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69829.
 */
cljs.core.async.__GT_t_cljs$core$async69829 = (function cljs$core$async$__GT_t_cljs$core$async69829(f,ch,meta69830){
return (new cljs.core.async.t_cljs$core$async69829(f,ch,meta69830));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async69829(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69844 = (function (f,ch,meta69845){
this.f = f;
this.ch = ch;
this.meta69845 = meta69845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69846,meta69845__$1){
var self__ = this;
var _69846__$1 = this;
return (new cljs.core.async.t_cljs$core$async69844(self__.f,self__.ch,meta69845__$1));
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69846){
var self__ = this;
var _69846__$1 = this;
return self__.meta69845;
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async69844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69845","meta69845",-558615412,null)], null);
}));

(cljs.core.async.t_cljs$core$async69844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69844");

(cljs.core.async.t_cljs$core$async69844.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async69844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69844.
 */
cljs.core.async.__GT_t_cljs$core$async69844 = (function cljs$core$async$__GT_t_cljs$core$async69844(f,ch,meta69845){
return (new cljs.core.async.t_cljs$core$async69844(f,ch,meta69845));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async69844(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69863 = (function (p,ch,meta69864){
this.p = p;
this.ch = ch;
this.meta69864 = meta69864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69865,meta69864__$1){
var self__ = this;
var _69865__$1 = this;
return (new cljs.core.async.t_cljs$core$async69863(self__.p,self__.ch,meta69864__$1));
}));

(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69865){
var self__ = this;
var _69865__$1 = this;
return self__.meta69864;
}));

(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async69863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69864","meta69864",2106407705,null)], null);
}));

(cljs.core.async.t_cljs$core$async69863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69863");

(cljs.core.async.t_cljs$core$async69863.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async69863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69863.
 */
cljs.core.async.__GT_t_cljs$core$async69863 = (function cljs$core$async$__GT_t_cljs$core$async69863(p,ch,meta69864){
return (new cljs.core.async.t_cljs$core$async69863(p,ch,meta69864));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async69863(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__69896 = arguments.length;
switch (G__69896) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__67942__auto___71281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_69917){
var state_val_69918 = (state_69917[(1)]);
if((state_val_69918 === (7))){
var inst_69913 = (state_69917[(2)]);
var state_69917__$1 = state_69917;
var statearr_69919_71284 = state_69917__$1;
(statearr_69919_71284[(2)] = inst_69913);

(statearr_69919_71284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (1))){
var state_69917__$1 = state_69917;
var statearr_69920_71286 = state_69917__$1;
(statearr_69920_71286[(2)] = null);

(statearr_69920_71286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (4))){
var inst_69899 = (state_69917[(7)]);
var inst_69899__$1 = (state_69917[(2)]);
var inst_69900 = (inst_69899__$1 == null);
var state_69917__$1 = (function (){var statearr_69921 = state_69917;
(statearr_69921[(7)] = inst_69899__$1);

return statearr_69921;
})();
if(cljs.core.truth_(inst_69900)){
var statearr_69922_71287 = state_69917__$1;
(statearr_69922_71287[(1)] = (5));

} else {
var statearr_69923_71288 = state_69917__$1;
(statearr_69923_71288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (6))){
var inst_69899 = (state_69917[(7)]);
var inst_69904 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_69899) : p.call(null,inst_69899));
var state_69917__$1 = state_69917;
if(cljs.core.truth_(inst_69904)){
var statearr_69924_71290 = state_69917__$1;
(statearr_69924_71290[(1)] = (8));

} else {
var statearr_69925_71291 = state_69917__$1;
(statearr_69925_71291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (3))){
var inst_69915 = (state_69917[(2)]);
var state_69917__$1 = state_69917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69917__$1,inst_69915);
} else {
if((state_val_69918 === (2))){
var state_69917__$1 = state_69917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69917__$1,(4),ch);
} else {
if((state_val_69918 === (11))){
var inst_69907 = (state_69917[(2)]);
var state_69917__$1 = state_69917;
var statearr_69926_71295 = state_69917__$1;
(statearr_69926_71295[(2)] = inst_69907);

(statearr_69926_71295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (9))){
var state_69917__$1 = state_69917;
var statearr_69927_71296 = state_69917__$1;
(statearr_69927_71296[(2)] = null);

(statearr_69927_71296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (5))){
var inst_69902 = cljs.core.async.close_BANG_(out);
var state_69917__$1 = state_69917;
var statearr_69928_71297 = state_69917__$1;
(statearr_69928_71297[(2)] = inst_69902);

(statearr_69928_71297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (10))){
var inst_69910 = (state_69917[(2)]);
var state_69917__$1 = (function (){var statearr_69929 = state_69917;
(statearr_69929[(8)] = inst_69910);

return statearr_69929;
})();
var statearr_69930_71298 = state_69917__$1;
(statearr_69930_71298[(2)] = null);

(statearr_69930_71298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (8))){
var inst_69899 = (state_69917[(7)]);
var state_69917__$1 = state_69917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69917__$1,(11),out,inst_69899);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_69931 = [null,null,null,null,null,null,null,null,null];
(statearr_69931[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_69931[(1)] = (1));

return statearr_69931;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_69917){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_69917);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e69932){var ex__67716__auto__ = e69932;
var statearr_69933_71301 = state_69917;
(statearr_69933_71301[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_69917[(4)]))){
var statearr_69934_71302 = state_69917;
(statearr_69934_71302[(1)] = cljs.core.first((state_69917[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71305 = state_69917;
state_69917 = G__71305;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_69917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_69917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_69935 = f__67943__auto__();
(statearr_69935[(6)] = c__67942__auto___71281);

return statearr_69935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__69937 = arguments.length;
switch (G__69937) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__67942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_70014){
var state_val_70015 = (state_70014[(1)]);
if((state_val_70015 === (7))){
var inst_70009 = (state_70014[(2)]);
var state_70014__$1 = state_70014;
var statearr_70016_71310 = state_70014__$1;
(statearr_70016_71310[(2)] = inst_70009);

(statearr_70016_71310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (20))){
var inst_69978 = (state_70014[(7)]);
var inst_69989 = (state_70014[(2)]);
var inst_69990 = cljs.core.next(inst_69978);
var inst_69954 = inst_69990;
var inst_69955 = null;
var inst_69956 = (0);
var inst_69957 = (0);
var state_70014__$1 = (function (){var statearr_70017 = state_70014;
(statearr_70017[(8)] = inst_69954);

(statearr_70017[(9)] = inst_69956);

(statearr_70017[(10)] = inst_69957);

(statearr_70017[(11)] = inst_69955);

(statearr_70017[(12)] = inst_69989);

return statearr_70017;
})();
var statearr_70018_71313 = state_70014__$1;
(statearr_70018_71313[(2)] = null);

(statearr_70018_71313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (1))){
var state_70014__$1 = state_70014;
var statearr_70019_71314 = state_70014__$1;
(statearr_70019_71314[(2)] = null);

(statearr_70019_71314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (4))){
var inst_69942 = (state_70014[(13)]);
var inst_69942__$1 = (state_70014[(2)]);
var inst_69943 = (inst_69942__$1 == null);
var state_70014__$1 = (function (){var statearr_70020 = state_70014;
(statearr_70020[(13)] = inst_69942__$1);

return statearr_70020;
})();
if(cljs.core.truth_(inst_69943)){
var statearr_70021_71315 = state_70014__$1;
(statearr_70021_71315[(1)] = (5));

} else {
var statearr_70022_71319 = state_70014__$1;
(statearr_70022_71319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (15))){
var state_70014__$1 = state_70014;
var statearr_70026_71320 = state_70014__$1;
(statearr_70026_71320[(2)] = null);

(statearr_70026_71320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (21))){
var state_70014__$1 = state_70014;
var statearr_70027_71321 = state_70014__$1;
(statearr_70027_71321[(2)] = null);

(statearr_70027_71321[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (13))){
var inst_69954 = (state_70014[(8)]);
var inst_69956 = (state_70014[(9)]);
var inst_69957 = (state_70014[(10)]);
var inst_69955 = (state_70014[(11)]);
var inst_69974 = (state_70014[(2)]);
var inst_69975 = (inst_69957 + (1));
var tmp70023 = inst_69954;
var tmp70024 = inst_69956;
var tmp70025 = inst_69955;
var inst_69954__$1 = tmp70023;
var inst_69955__$1 = tmp70025;
var inst_69956__$1 = tmp70024;
var inst_69957__$1 = inst_69975;
var state_70014__$1 = (function (){var statearr_70028 = state_70014;
(statearr_70028[(8)] = inst_69954__$1);

(statearr_70028[(9)] = inst_69956__$1);

(statearr_70028[(10)] = inst_69957__$1);

(statearr_70028[(11)] = inst_69955__$1);

(statearr_70028[(14)] = inst_69974);

return statearr_70028;
})();
var statearr_70029_71329 = state_70014__$1;
(statearr_70029_71329[(2)] = null);

(statearr_70029_71329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (22))){
var state_70014__$1 = state_70014;
var statearr_70030_71332 = state_70014__$1;
(statearr_70030_71332[(2)] = null);

(statearr_70030_71332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (6))){
var inst_69942 = (state_70014[(13)]);
var inst_69951 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_69942) : f.call(null,inst_69942));
var inst_69952 = cljs.core.seq(inst_69951);
var inst_69954 = inst_69952;
var inst_69955 = null;
var inst_69956 = (0);
var inst_69957 = (0);
var state_70014__$1 = (function (){var statearr_70031 = state_70014;
(statearr_70031[(8)] = inst_69954);

(statearr_70031[(9)] = inst_69956);

(statearr_70031[(10)] = inst_69957);

(statearr_70031[(11)] = inst_69955);

return statearr_70031;
})();
var statearr_70032_71336 = state_70014__$1;
(statearr_70032_71336[(2)] = null);

(statearr_70032_71336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (17))){
var inst_69978 = (state_70014[(7)]);
var inst_69982 = cljs.core.chunk_first(inst_69978);
var inst_69983 = cljs.core.chunk_rest(inst_69978);
var inst_69984 = cljs.core.count(inst_69982);
var inst_69954 = inst_69983;
var inst_69955 = inst_69982;
var inst_69956 = inst_69984;
var inst_69957 = (0);
var state_70014__$1 = (function (){var statearr_70035 = state_70014;
(statearr_70035[(8)] = inst_69954);

(statearr_70035[(9)] = inst_69956);

(statearr_70035[(10)] = inst_69957);

(statearr_70035[(11)] = inst_69955);

return statearr_70035;
})();
var statearr_70036_71341 = state_70014__$1;
(statearr_70036_71341[(2)] = null);

(statearr_70036_71341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (3))){
var inst_70011 = (state_70014[(2)]);
var state_70014__$1 = state_70014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70014__$1,inst_70011);
} else {
if((state_val_70015 === (12))){
var inst_69998 = (state_70014[(2)]);
var state_70014__$1 = state_70014;
var statearr_70038_71345 = state_70014__$1;
(statearr_70038_71345[(2)] = inst_69998);

(statearr_70038_71345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (2))){
var state_70014__$1 = state_70014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70014__$1,(4),in$);
} else {
if((state_val_70015 === (23))){
var inst_70007 = (state_70014[(2)]);
var state_70014__$1 = state_70014;
var statearr_70039_71351 = state_70014__$1;
(statearr_70039_71351[(2)] = inst_70007);

(statearr_70039_71351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (19))){
var inst_69993 = (state_70014[(2)]);
var state_70014__$1 = state_70014;
var statearr_70040_71352 = state_70014__$1;
(statearr_70040_71352[(2)] = inst_69993);

(statearr_70040_71352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (11))){
var inst_69954 = (state_70014[(8)]);
var inst_69978 = (state_70014[(7)]);
var inst_69978__$1 = cljs.core.seq(inst_69954);
var state_70014__$1 = (function (){var statearr_70041 = state_70014;
(statearr_70041[(7)] = inst_69978__$1);

return statearr_70041;
})();
if(inst_69978__$1){
var statearr_70042_71354 = state_70014__$1;
(statearr_70042_71354[(1)] = (14));

} else {
var statearr_70043_71358 = state_70014__$1;
(statearr_70043_71358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (9))){
var inst_70000 = (state_70014[(2)]);
var inst_70002 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_70014__$1 = (function (){var statearr_70044 = state_70014;
(statearr_70044[(15)] = inst_70000);

return statearr_70044;
})();
if(cljs.core.truth_(inst_70002)){
var statearr_70045_71361 = state_70014__$1;
(statearr_70045_71361[(1)] = (21));

} else {
var statearr_70046_71362 = state_70014__$1;
(statearr_70046_71362[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (5))){
var inst_69945 = cljs.core.async.close_BANG_(out);
var state_70014__$1 = state_70014;
var statearr_70056_71363 = state_70014__$1;
(statearr_70056_71363[(2)] = inst_69945);

(statearr_70056_71363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (14))){
var inst_69978 = (state_70014[(7)]);
var inst_69980 = cljs.core.chunked_seq_QMARK_(inst_69978);
var state_70014__$1 = state_70014;
if(inst_69980){
var statearr_70057_71364 = state_70014__$1;
(statearr_70057_71364[(1)] = (17));

} else {
var statearr_70058_71365 = state_70014__$1;
(statearr_70058_71365[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (16))){
var inst_69996 = (state_70014[(2)]);
var state_70014__$1 = state_70014;
var statearr_70059_71366 = state_70014__$1;
(statearr_70059_71366[(2)] = inst_69996);

(statearr_70059_71366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70015 === (10))){
var inst_69957 = (state_70014[(10)]);
var inst_69955 = (state_70014[(11)]);
var inst_69972 = cljs.core._nth(inst_69955,inst_69957);
var state_70014__$1 = state_70014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70014__$1,(13),out,inst_69972);
} else {
if((state_val_70015 === (18))){
var inst_69978 = (state_70014[(7)]);
var inst_69987 = cljs.core.first(inst_69978);
var state_70014__$1 = state_70014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70014__$1,(20),out,inst_69987);
} else {
if((state_val_70015 === (8))){
var inst_69956 = (state_70014[(9)]);
var inst_69957 = (state_70014[(10)]);
var inst_69959 = (inst_69957 < inst_69956);
var inst_69960 = inst_69959;
var state_70014__$1 = state_70014;
if(cljs.core.truth_(inst_69960)){
var statearr_70061_71369 = state_70014__$1;
(statearr_70061_71369[(1)] = (10));

} else {
var statearr_70062_71370 = state_70014__$1;
(statearr_70062_71370[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__67713__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__67713__auto____0 = (function (){
var statearr_70063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70063[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__67713__auto__);

(statearr_70063[(1)] = (1));

return statearr_70063;
});
var cljs$core$async$mapcat_STAR__$_state_machine__67713__auto____1 = (function (state_70014){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_70014);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e70064){var ex__67716__auto__ = e70064;
var statearr_70065_71371 = state_70014;
(statearr_70065_71371[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_70014[(4)]))){
var statearr_70066_71374 = state_70014;
(statearr_70066_71374[(1)] = cljs.core.first((state_70014[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71375 = state_70014;
state_70014 = G__71375;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__67713__auto__ = function(state_70014){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__67713__auto____1.call(this,state_70014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__67713__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__67713__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_70067 = f__67943__auto__();
(statearr_70067[(6)] = c__67942__auto__);

return statearr_70067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));

return c__67942__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__70069 = arguments.length;
switch (G__70069) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__70073 = arguments.length;
switch (G__70073) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__70077 = arguments.length;
switch (G__70077) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__67942__auto___71384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_70109){
var state_val_70110 = (state_70109[(1)]);
if((state_val_70110 === (7))){
var inst_70104 = (state_70109[(2)]);
var state_70109__$1 = state_70109;
var statearr_70120_71387 = state_70109__$1;
(statearr_70120_71387[(2)] = inst_70104);

(statearr_70120_71387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70110 === (1))){
var inst_70085 = null;
var state_70109__$1 = (function (){var statearr_70122 = state_70109;
(statearr_70122[(7)] = inst_70085);

return statearr_70122;
})();
var statearr_70125_71389 = state_70109__$1;
(statearr_70125_71389[(2)] = null);

(statearr_70125_71389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70110 === (4))){
var inst_70088 = (state_70109[(8)]);
var inst_70088__$1 = (state_70109[(2)]);
var inst_70090 = (inst_70088__$1 == null);
var inst_70091 = cljs.core.not(inst_70090);
var state_70109__$1 = (function (){var statearr_70127 = state_70109;
(statearr_70127[(8)] = inst_70088__$1);

return statearr_70127;
})();
if(inst_70091){
var statearr_70128_71393 = state_70109__$1;
(statearr_70128_71393[(1)] = (5));

} else {
var statearr_70129_71394 = state_70109__$1;
(statearr_70129_71394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70110 === (6))){
var state_70109__$1 = state_70109;
var statearr_70137_71395 = state_70109__$1;
(statearr_70137_71395[(2)] = null);

(statearr_70137_71395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70110 === (3))){
var inst_70106 = (state_70109[(2)]);
var inst_70107 = cljs.core.async.close_BANG_(out);
var state_70109__$1 = (function (){var statearr_70138 = state_70109;
(statearr_70138[(9)] = inst_70106);

return statearr_70138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70109__$1,inst_70107);
} else {
if((state_val_70110 === (2))){
var state_70109__$1 = state_70109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70109__$1,(4),ch);
} else {
if((state_val_70110 === (11))){
var inst_70088 = (state_70109[(8)]);
var inst_70098 = (state_70109[(2)]);
var inst_70085 = inst_70088;
var state_70109__$1 = (function (){var statearr_70140 = state_70109;
(statearr_70140[(10)] = inst_70098);

(statearr_70140[(7)] = inst_70085);

return statearr_70140;
})();
var statearr_70141_71396 = state_70109__$1;
(statearr_70141_71396[(2)] = null);

(statearr_70141_71396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70110 === (9))){
var inst_70088 = (state_70109[(8)]);
var state_70109__$1 = state_70109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70109__$1,(11),out,inst_70088);
} else {
if((state_val_70110 === (5))){
var inst_70088 = (state_70109[(8)]);
var inst_70085 = (state_70109[(7)]);
var inst_70093 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70088,inst_70085);
var state_70109__$1 = state_70109;
if(inst_70093){
var statearr_70143_71397 = state_70109__$1;
(statearr_70143_71397[(1)] = (8));

} else {
var statearr_70146_71398 = state_70109__$1;
(statearr_70146_71398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70110 === (10))){
var inst_70101 = (state_70109[(2)]);
var state_70109__$1 = state_70109;
var statearr_70147_71399 = state_70109__$1;
(statearr_70147_71399[(2)] = inst_70101);

(statearr_70147_71399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70110 === (8))){
var inst_70085 = (state_70109[(7)]);
var tmp70142 = inst_70085;
var inst_70085__$1 = tmp70142;
var state_70109__$1 = (function (){var statearr_70151 = state_70109;
(statearr_70151[(7)] = inst_70085__$1);

return statearr_70151;
})();
var statearr_70154_71400 = state_70109__$1;
(statearr_70154_71400[(2)] = null);

(statearr_70154_71400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_70155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70155[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_70155[(1)] = (1));

return statearr_70155;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_70109){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_70109);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e70156){var ex__67716__auto__ = e70156;
var statearr_70157_71401 = state_70109;
(statearr_70157_71401[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_70109[(4)]))){
var statearr_70158_71402 = state_70109;
(statearr_70158_71402[(1)] = cljs.core.first((state_70109[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71403 = state_70109;
state_70109 = G__71403;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_70109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_70109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_70160 = f__67943__auto__();
(statearr_70160[(6)] = c__67942__auto___71384);

return statearr_70160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__70166 = arguments.length;
switch (G__70166) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__67942__auto___71409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_70212){
var state_val_70213 = (state_70212[(1)]);
if((state_val_70213 === (7))){
var inst_70208 = (state_70212[(2)]);
var state_70212__$1 = state_70212;
var statearr_70215_71410 = state_70212__$1;
(statearr_70215_71410[(2)] = inst_70208);

(statearr_70215_71410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (1))){
var inst_70168 = (new Array(n));
var inst_70169 = inst_70168;
var inst_70170 = (0);
var state_70212__$1 = (function (){var statearr_70216 = state_70212;
(statearr_70216[(7)] = inst_70170);

(statearr_70216[(8)] = inst_70169);

return statearr_70216;
})();
var statearr_70217_71411 = state_70212__$1;
(statearr_70217_71411[(2)] = null);

(statearr_70217_71411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (4))){
var inst_70173 = (state_70212[(9)]);
var inst_70173__$1 = (state_70212[(2)]);
var inst_70174 = (inst_70173__$1 == null);
var inst_70175 = cljs.core.not(inst_70174);
var state_70212__$1 = (function (){var statearr_70220 = state_70212;
(statearr_70220[(9)] = inst_70173__$1);

return statearr_70220;
})();
if(inst_70175){
var statearr_70221_71413 = state_70212__$1;
(statearr_70221_71413[(1)] = (5));

} else {
var statearr_70222_71414 = state_70212__$1;
(statearr_70222_71414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (15))){
var inst_70202 = (state_70212[(2)]);
var state_70212__$1 = state_70212;
var statearr_70225_71415 = state_70212__$1;
(statearr_70225_71415[(2)] = inst_70202);

(statearr_70225_71415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (13))){
var state_70212__$1 = state_70212;
var statearr_70226_71416 = state_70212__$1;
(statearr_70226_71416[(2)] = null);

(statearr_70226_71416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (6))){
var inst_70170 = (state_70212[(7)]);
var inst_70198 = (inst_70170 > (0));
var state_70212__$1 = state_70212;
if(cljs.core.truth_(inst_70198)){
var statearr_70227_71417 = state_70212__$1;
(statearr_70227_71417[(1)] = (12));

} else {
var statearr_70228_71418 = state_70212__$1;
(statearr_70228_71418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (3))){
var inst_70210 = (state_70212[(2)]);
var state_70212__$1 = state_70212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70212__$1,inst_70210);
} else {
if((state_val_70213 === (12))){
var inst_70169 = (state_70212[(8)]);
var inst_70200 = cljs.core.vec(inst_70169);
var state_70212__$1 = state_70212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70212__$1,(15),out,inst_70200);
} else {
if((state_val_70213 === (2))){
var state_70212__$1 = state_70212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70212__$1,(4),ch);
} else {
if((state_val_70213 === (11))){
var inst_70192 = (state_70212[(2)]);
var inst_70193 = (new Array(n));
var inst_70169 = inst_70193;
var inst_70170 = (0);
var state_70212__$1 = (function (){var statearr_70230 = state_70212;
(statearr_70230[(7)] = inst_70170);

(statearr_70230[(8)] = inst_70169);

(statearr_70230[(10)] = inst_70192);

return statearr_70230;
})();
var statearr_70232_71420 = state_70212__$1;
(statearr_70232_71420[(2)] = null);

(statearr_70232_71420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (9))){
var inst_70169 = (state_70212[(8)]);
var inst_70190 = cljs.core.vec(inst_70169);
var state_70212__$1 = state_70212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70212__$1,(11),out,inst_70190);
} else {
if((state_val_70213 === (5))){
var inst_70178 = (state_70212[(11)]);
var inst_70170 = (state_70212[(7)]);
var inst_70169 = (state_70212[(8)]);
var inst_70173 = (state_70212[(9)]);
var inst_70177 = (inst_70169[inst_70170] = inst_70173);
var inst_70178__$1 = (inst_70170 + (1));
var inst_70180 = (inst_70178__$1 < n);
var state_70212__$1 = (function (){var statearr_70233 = state_70212;
(statearr_70233[(11)] = inst_70178__$1);

(statearr_70233[(12)] = inst_70177);

return statearr_70233;
})();
if(cljs.core.truth_(inst_70180)){
var statearr_70234_71423 = state_70212__$1;
(statearr_70234_71423[(1)] = (8));

} else {
var statearr_70235_71424 = state_70212__$1;
(statearr_70235_71424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (14))){
var inst_70205 = (state_70212[(2)]);
var inst_70206 = cljs.core.async.close_BANG_(out);
var state_70212__$1 = (function (){var statearr_70237 = state_70212;
(statearr_70237[(13)] = inst_70205);

return statearr_70237;
})();
var statearr_70238_71425 = state_70212__$1;
(statearr_70238_71425[(2)] = inst_70206);

(statearr_70238_71425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (10))){
var inst_70196 = (state_70212[(2)]);
var state_70212__$1 = state_70212;
var statearr_70239_71426 = state_70212__$1;
(statearr_70239_71426[(2)] = inst_70196);

(statearr_70239_71426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70213 === (8))){
var inst_70178 = (state_70212[(11)]);
var inst_70169 = (state_70212[(8)]);
var tmp70236 = inst_70169;
var inst_70169__$1 = tmp70236;
var inst_70170 = inst_70178;
var state_70212__$1 = (function (){var statearr_70240 = state_70212;
(statearr_70240[(7)] = inst_70170);

(statearr_70240[(8)] = inst_70169__$1);

return statearr_70240;
})();
var statearr_70241_71427 = state_70212__$1;
(statearr_70241_71427[(2)] = null);

(statearr_70241_71427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_70242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70242[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_70242[(1)] = (1));

return statearr_70242;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_70212){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_70212);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e70243){var ex__67716__auto__ = e70243;
var statearr_70244_71437 = state_70212;
(statearr_70244_71437[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_70212[(4)]))){
var statearr_70249_71438 = state_70212;
(statearr_70249_71438[(1)] = cljs.core.first((state_70212[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71439 = state_70212;
state_70212 = G__71439;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_70212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_70212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_70250 = f__67943__auto__();
(statearr_70250[(6)] = c__67942__auto___71409);

return statearr_70250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__70254 = arguments.length;
switch (G__70254) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__67942__auto___71441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_70311){
var state_val_70318 = (state_70311[(1)]);
if((state_val_70318 === (7))){
var inst_70307 = (state_70311[(2)]);
var state_70311__$1 = state_70311;
var statearr_70319_71442 = state_70311__$1;
(statearr_70319_71442[(2)] = inst_70307);

(statearr_70319_71442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (1))){
var inst_70264 = [];
var inst_70265 = inst_70264;
var inst_70266 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_70311__$1 = (function (){var statearr_70326 = state_70311;
(statearr_70326[(7)] = inst_70265);

(statearr_70326[(8)] = inst_70266);

return statearr_70326;
})();
var statearr_70327_71444 = state_70311__$1;
(statearr_70327_71444[(2)] = null);

(statearr_70327_71444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (4))){
var inst_70272 = (state_70311[(9)]);
var inst_70272__$1 = (state_70311[(2)]);
var inst_70273 = (inst_70272__$1 == null);
var inst_70274 = cljs.core.not(inst_70273);
var state_70311__$1 = (function (){var statearr_70328 = state_70311;
(statearr_70328[(9)] = inst_70272__$1);

return statearr_70328;
})();
if(inst_70274){
var statearr_70329_71448 = state_70311__$1;
(statearr_70329_71448[(1)] = (5));

} else {
var statearr_70330_71449 = state_70311__$1;
(statearr_70330_71449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (15))){
var inst_70265 = (state_70311[(7)]);
var inst_70299 = cljs.core.vec(inst_70265);
var state_70311__$1 = state_70311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70311__$1,(18),out,inst_70299);
} else {
if((state_val_70318 === (13))){
var inst_70294 = (state_70311[(2)]);
var state_70311__$1 = state_70311;
var statearr_70332_71450 = state_70311__$1;
(statearr_70332_71450[(2)] = inst_70294);

(statearr_70332_71450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (6))){
var inst_70265 = (state_70311[(7)]);
var inst_70296 = inst_70265.length;
var inst_70297 = (inst_70296 > (0));
var state_70311__$1 = state_70311;
if(cljs.core.truth_(inst_70297)){
var statearr_70333_71452 = state_70311__$1;
(statearr_70333_71452[(1)] = (15));

} else {
var statearr_70334_71456 = state_70311__$1;
(statearr_70334_71456[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (17))){
var inst_70304 = (state_70311[(2)]);
var inst_70305 = cljs.core.async.close_BANG_(out);
var state_70311__$1 = (function (){var statearr_70336 = state_70311;
(statearr_70336[(10)] = inst_70304);

return statearr_70336;
})();
var statearr_70337_71463 = state_70311__$1;
(statearr_70337_71463[(2)] = inst_70305);

(statearr_70337_71463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (3))){
var inst_70309 = (state_70311[(2)]);
var state_70311__$1 = state_70311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70311__$1,inst_70309);
} else {
if((state_val_70318 === (12))){
var inst_70265 = (state_70311[(7)]);
var inst_70287 = cljs.core.vec(inst_70265);
var state_70311__$1 = state_70311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70311__$1,(14),out,inst_70287);
} else {
if((state_val_70318 === (2))){
var state_70311__$1 = state_70311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70311__$1,(4),ch);
} else {
if((state_val_70318 === (11))){
var inst_70265 = (state_70311[(7)]);
var inst_70276 = (state_70311[(11)]);
var inst_70272 = (state_70311[(9)]);
var inst_70284 = inst_70265.push(inst_70272);
var tmp70338 = inst_70265;
var inst_70265__$1 = tmp70338;
var inst_70266 = inst_70276;
var state_70311__$1 = (function (){var statearr_70339 = state_70311;
(statearr_70339[(7)] = inst_70265__$1);

(statearr_70339[(8)] = inst_70266);

(statearr_70339[(12)] = inst_70284);

return statearr_70339;
})();
var statearr_70340_71467 = state_70311__$1;
(statearr_70340_71467[(2)] = null);

(statearr_70340_71467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (9))){
var inst_70266 = (state_70311[(8)]);
var inst_70280 = cljs.core.keyword_identical_QMARK_(inst_70266,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_70311__$1 = state_70311;
var statearr_70346_71468 = state_70311__$1;
(statearr_70346_71468[(2)] = inst_70280);

(statearr_70346_71468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (5))){
var inst_70277 = (state_70311[(13)]);
var inst_70276 = (state_70311[(11)]);
var inst_70266 = (state_70311[(8)]);
var inst_70272 = (state_70311[(9)]);
var inst_70276__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_70272) : f.call(null,inst_70272));
var inst_70277__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70276__$1,inst_70266);
var state_70311__$1 = (function (){var statearr_70352 = state_70311;
(statearr_70352[(13)] = inst_70277__$1);

(statearr_70352[(11)] = inst_70276__$1);

return statearr_70352;
})();
if(inst_70277__$1){
var statearr_70353_71471 = state_70311__$1;
(statearr_70353_71471[(1)] = (8));

} else {
var statearr_70354_71472 = state_70311__$1;
(statearr_70354_71472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (14))){
var inst_70276 = (state_70311[(11)]);
var inst_70272 = (state_70311[(9)]);
var inst_70289 = (state_70311[(2)]);
var inst_70290 = [];
var inst_70291 = inst_70290.push(inst_70272);
var inst_70265 = inst_70290;
var inst_70266 = inst_70276;
var state_70311__$1 = (function (){var statearr_70355 = state_70311;
(statearr_70355[(14)] = inst_70289);

(statearr_70355[(15)] = inst_70291);

(statearr_70355[(7)] = inst_70265);

(statearr_70355[(8)] = inst_70266);

return statearr_70355;
})();
var statearr_70356_71473 = state_70311__$1;
(statearr_70356_71473[(2)] = null);

(statearr_70356_71473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (16))){
var state_70311__$1 = state_70311;
var statearr_70357_71474 = state_70311__$1;
(statearr_70357_71474[(2)] = null);

(statearr_70357_71474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (10))){
var inst_70282 = (state_70311[(2)]);
var state_70311__$1 = state_70311;
if(cljs.core.truth_(inst_70282)){
var statearr_70359_71475 = state_70311__$1;
(statearr_70359_71475[(1)] = (11));

} else {
var statearr_70360_71476 = state_70311__$1;
(statearr_70360_71476[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (18))){
var inst_70301 = (state_70311[(2)]);
var state_70311__$1 = state_70311;
var statearr_70361_71477 = state_70311__$1;
(statearr_70361_71477[(2)] = inst_70301);

(statearr_70361_71477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70318 === (8))){
var inst_70277 = (state_70311[(13)]);
var state_70311__$1 = state_70311;
var statearr_70363_71478 = state_70311__$1;
(statearr_70363_71478[(2)] = inst_70277);

(statearr_70363_71478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__67713__auto__ = null;
var cljs$core$async$state_machine__67713__auto____0 = (function (){
var statearr_70369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70369[(0)] = cljs$core$async$state_machine__67713__auto__);

(statearr_70369[(1)] = (1));

return statearr_70369;
});
var cljs$core$async$state_machine__67713__auto____1 = (function (state_70311){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_70311);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e70370){var ex__67716__auto__ = e70370;
var statearr_70371_71479 = state_70311;
(statearr_70371_71479[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_70311[(4)]))){
var statearr_70372_71480 = state_70311;
(statearr_70372_71480[(1)] = cljs.core.first((state_70311[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71481 = state_70311;
state_70311 = G__71481;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
cljs$core$async$state_machine__67713__auto__ = function(state_70311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67713__auto____1.call(this,state_70311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67713__auto____0;
cljs$core$async$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67713__auto____1;
return cljs$core$async$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_70373 = f__67943__auto__();
(statearr_70373[(6)] = c__67942__auto___71441);

return statearr_70373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
