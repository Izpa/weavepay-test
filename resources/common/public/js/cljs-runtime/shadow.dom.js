goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_71664 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_71664(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_71668 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_71668(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__70480 = coll;
var G__70481 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__70480,G__70481) : shadow.dom.lazy_native_coll_seq.call(null,G__70480,G__70481));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4998__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__70512 = arguments.length;
switch (G__70512) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__70524 = arguments.length;
switch (G__70524) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__70534 = arguments.length;
switch (G__70534) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__70542 = arguments.length;
switch (G__70542) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__70552 = arguments.length;
switch (G__70552) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__70567 = arguments.length;
switch (G__70567) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4998__auto__ = (!((typeof document !== 'undefined')));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e70576){if((e70576 instanceof Object)){
var e = e70576;
return console.log("didnt support attachEvent",el,e);
} else {
throw e70576;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4998__auto__ = (!((typeof document !== 'undefined')));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__70587 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__70588 = null;
var count__70589 = (0);
var i__70590 = (0);
while(true){
if((i__70590 < count__70589)){
var el = chunk__70588.cljs$core$IIndexed$_nth$arity$2(null,i__70590);
var handler_71693__$1 = ((function (seq__70587,chunk__70588,count__70589,i__70590,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__70587,chunk__70588,count__70589,i__70590,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_71693__$1);


var G__71694 = seq__70587;
var G__71695 = chunk__70588;
var G__71696 = count__70589;
var G__71697 = (i__70590 + (1));
seq__70587 = G__71694;
chunk__70588 = G__71695;
count__70589 = G__71696;
i__70590 = G__71697;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__70587);
if(temp__5823__auto__){
var seq__70587__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70587__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__70587__$1);
var G__71698 = cljs.core.chunk_rest(seq__70587__$1);
var G__71699 = c__5521__auto__;
var G__71700 = cljs.core.count(c__5521__auto__);
var G__71701 = (0);
seq__70587 = G__71698;
chunk__70588 = G__71699;
count__70589 = G__71700;
i__70590 = G__71701;
continue;
} else {
var el = cljs.core.first(seq__70587__$1);
var handler_71702__$1 = ((function (seq__70587,chunk__70588,count__70589,i__70590,el,seq__70587__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__70587,chunk__70588,count__70589,i__70590,el,seq__70587__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_71702__$1);


var G__71703 = cljs.core.next(seq__70587__$1);
var G__71704 = null;
var G__71705 = (0);
var G__71706 = (0);
seq__70587 = G__71703;
chunk__70588 = G__71704;
count__70589 = G__71705;
i__70590 = G__71706;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__70610 = arguments.length;
switch (G__70610) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__70621 = cljs.core.seq(events);
var chunk__70622 = null;
var count__70623 = (0);
var i__70624 = (0);
while(true){
if((i__70624 < count__70623)){
var vec__70637 = chunk__70622.cljs$core$IIndexed$_nth$arity$2(null,i__70624);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70637,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__71708 = seq__70621;
var G__71709 = chunk__70622;
var G__71710 = count__70623;
var G__71711 = (i__70624 + (1));
seq__70621 = G__71708;
chunk__70622 = G__71709;
count__70623 = G__71710;
i__70624 = G__71711;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__70621);
if(temp__5823__auto__){
var seq__70621__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70621__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__70621__$1);
var G__71712 = cljs.core.chunk_rest(seq__70621__$1);
var G__71713 = c__5521__auto__;
var G__71714 = cljs.core.count(c__5521__auto__);
var G__71715 = (0);
seq__70621 = G__71712;
chunk__70622 = G__71713;
count__70623 = G__71714;
i__70624 = G__71715;
continue;
} else {
var vec__70640 = cljs.core.first(seq__70621__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70640,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__71716 = cljs.core.next(seq__70621__$1);
var G__71717 = null;
var G__71718 = (0);
var G__71719 = (0);
seq__70621 = G__71716;
chunk__70622 = G__71717;
count__70623 = G__71718;
i__70624 = G__71719;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__70646 = cljs.core.seq(styles);
var chunk__70647 = null;
var count__70648 = (0);
var i__70649 = (0);
while(true){
if((i__70649 < count__70648)){
var vec__70665 = chunk__70647.cljs$core$IIndexed$_nth$arity$2(null,i__70649);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70665,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__71723 = seq__70646;
var G__71724 = chunk__70647;
var G__71725 = count__70648;
var G__71726 = (i__70649 + (1));
seq__70646 = G__71723;
chunk__70647 = G__71724;
count__70648 = G__71725;
i__70649 = G__71726;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__70646);
if(temp__5823__auto__){
var seq__70646__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70646__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__70646__$1);
var G__71727 = cljs.core.chunk_rest(seq__70646__$1);
var G__71728 = c__5521__auto__;
var G__71729 = cljs.core.count(c__5521__auto__);
var G__71730 = (0);
seq__70646 = G__71727;
chunk__70647 = G__71728;
count__70648 = G__71729;
i__70649 = G__71730;
continue;
} else {
var vec__70670 = cljs.core.first(seq__70646__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70670,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__71731 = cljs.core.next(seq__70646__$1);
var G__71732 = null;
var G__71733 = (0);
var G__71734 = (0);
seq__70646 = G__71731;
chunk__70647 = G__71732;
count__70648 = G__71733;
i__70649 = G__71734;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__70680_71735 = key;
var G__70680_71736__$1 = (((G__70680_71735 instanceof cljs.core.Keyword))?G__70680_71735.fqn:null);
switch (G__70680_71736__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_71738 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4998__auto__ = goog.string.startsWith(ks_71738,"data-");
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return goog.string.startsWith(ks_71738,"aria-");
}
})())){
el.setAttribute(ks_71738,value);
} else {
(el[ks_71738] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__70715){
var map__70716 = p__70715;
var map__70716__$1 = cljs.core.__destructure_map(map__70716);
var props = map__70716__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70716__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__70719 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70719,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70719,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70719,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__70725 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__70725,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__70725;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__70735 = arguments.length;
switch (G__70735) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__70744){
var vec__70745 = p__70744;
var seq__70746 = cljs.core.seq(vec__70745);
var first__70747 = cljs.core.first(seq__70746);
var seq__70746__$1 = cljs.core.next(seq__70746);
var nn = first__70747;
var first__70747__$1 = cljs.core.first(seq__70746__$1);
var seq__70746__$2 = cljs.core.next(seq__70746__$1);
var np = first__70747__$1;
var nc = seq__70746__$2;
var node = vec__70745;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70755 = nn;
var G__70756 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__70755,G__70756) : create_fn.call(null,G__70755,G__70756));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70762 = nn;
var G__70763 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__70762,G__70763) : create_fn.call(null,G__70762,G__70763));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__70773 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70773,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70773,(1),null);
var seq__70778_71744 = cljs.core.seq(node_children);
var chunk__70779_71745 = null;
var count__70780_71746 = (0);
var i__70781_71747 = (0);
while(true){
if((i__70781_71747 < count__70780_71746)){
var child_struct_71748 = chunk__70779_71745.cljs$core$IIndexed$_nth$arity$2(null,i__70781_71747);
var children_71749 = shadow.dom.dom_node(child_struct_71748);
if(cljs.core.seq_QMARK_(children_71749)){
var seq__70926_71750 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_71749));
var chunk__70928_71751 = null;
var count__70929_71752 = (0);
var i__70930_71753 = (0);
while(true){
if((i__70930_71753 < count__70929_71752)){
var child_71754 = chunk__70928_71751.cljs$core$IIndexed$_nth$arity$2(null,i__70930_71753);
if(cljs.core.truth_(child_71754)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71754);


var G__71755 = seq__70926_71750;
var G__71756 = chunk__70928_71751;
var G__71757 = count__70929_71752;
var G__71758 = (i__70930_71753 + (1));
seq__70926_71750 = G__71755;
chunk__70928_71751 = G__71756;
count__70929_71752 = G__71757;
i__70930_71753 = G__71758;
continue;
} else {
var G__71759 = seq__70926_71750;
var G__71760 = chunk__70928_71751;
var G__71761 = count__70929_71752;
var G__71762 = (i__70930_71753 + (1));
seq__70926_71750 = G__71759;
chunk__70928_71751 = G__71760;
count__70929_71752 = G__71761;
i__70930_71753 = G__71762;
continue;
}
} else {
var temp__5823__auto___71763 = cljs.core.seq(seq__70926_71750);
if(temp__5823__auto___71763){
var seq__70926_71764__$1 = temp__5823__auto___71763;
if(cljs.core.chunked_seq_QMARK_(seq__70926_71764__$1)){
var c__5521__auto___71765 = cljs.core.chunk_first(seq__70926_71764__$1);
var G__71766 = cljs.core.chunk_rest(seq__70926_71764__$1);
var G__71767 = c__5521__auto___71765;
var G__71768 = cljs.core.count(c__5521__auto___71765);
var G__71769 = (0);
seq__70926_71750 = G__71766;
chunk__70928_71751 = G__71767;
count__70929_71752 = G__71768;
i__70930_71753 = G__71769;
continue;
} else {
var child_71770 = cljs.core.first(seq__70926_71764__$1);
if(cljs.core.truth_(child_71770)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71770);


var G__71771 = cljs.core.next(seq__70926_71764__$1);
var G__71772 = null;
var G__71773 = (0);
var G__71774 = (0);
seq__70926_71750 = G__71771;
chunk__70928_71751 = G__71772;
count__70929_71752 = G__71773;
i__70930_71753 = G__71774;
continue;
} else {
var G__71775 = cljs.core.next(seq__70926_71764__$1);
var G__71776 = null;
var G__71777 = (0);
var G__71778 = (0);
seq__70926_71750 = G__71775;
chunk__70928_71751 = G__71776;
count__70929_71752 = G__71777;
i__70930_71753 = G__71778;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_71749);
}


var G__71779 = seq__70778_71744;
var G__71780 = chunk__70779_71745;
var G__71781 = count__70780_71746;
var G__71782 = (i__70781_71747 + (1));
seq__70778_71744 = G__71779;
chunk__70779_71745 = G__71780;
count__70780_71746 = G__71781;
i__70781_71747 = G__71782;
continue;
} else {
var temp__5823__auto___71783 = cljs.core.seq(seq__70778_71744);
if(temp__5823__auto___71783){
var seq__70778_71784__$1 = temp__5823__auto___71783;
if(cljs.core.chunked_seq_QMARK_(seq__70778_71784__$1)){
var c__5521__auto___71785 = cljs.core.chunk_first(seq__70778_71784__$1);
var G__71786 = cljs.core.chunk_rest(seq__70778_71784__$1);
var G__71787 = c__5521__auto___71785;
var G__71788 = cljs.core.count(c__5521__auto___71785);
var G__71789 = (0);
seq__70778_71744 = G__71786;
chunk__70779_71745 = G__71787;
count__70780_71746 = G__71788;
i__70781_71747 = G__71789;
continue;
} else {
var child_struct_71790 = cljs.core.first(seq__70778_71784__$1);
var children_71791 = shadow.dom.dom_node(child_struct_71790);
if(cljs.core.seq_QMARK_(children_71791)){
var seq__70957_71792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_71791));
var chunk__70959_71793 = null;
var count__70960_71794 = (0);
var i__70961_71795 = (0);
while(true){
if((i__70961_71795 < count__70960_71794)){
var child_71796 = chunk__70959_71793.cljs$core$IIndexed$_nth$arity$2(null,i__70961_71795);
if(cljs.core.truth_(child_71796)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71796);


var G__71797 = seq__70957_71792;
var G__71798 = chunk__70959_71793;
var G__71799 = count__70960_71794;
var G__71800 = (i__70961_71795 + (1));
seq__70957_71792 = G__71797;
chunk__70959_71793 = G__71798;
count__70960_71794 = G__71799;
i__70961_71795 = G__71800;
continue;
} else {
var G__71801 = seq__70957_71792;
var G__71802 = chunk__70959_71793;
var G__71803 = count__70960_71794;
var G__71804 = (i__70961_71795 + (1));
seq__70957_71792 = G__71801;
chunk__70959_71793 = G__71802;
count__70960_71794 = G__71803;
i__70961_71795 = G__71804;
continue;
}
} else {
var temp__5823__auto___71805__$1 = cljs.core.seq(seq__70957_71792);
if(temp__5823__auto___71805__$1){
var seq__70957_71806__$1 = temp__5823__auto___71805__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70957_71806__$1)){
var c__5521__auto___71807 = cljs.core.chunk_first(seq__70957_71806__$1);
var G__71808 = cljs.core.chunk_rest(seq__70957_71806__$1);
var G__71809 = c__5521__auto___71807;
var G__71810 = cljs.core.count(c__5521__auto___71807);
var G__71811 = (0);
seq__70957_71792 = G__71808;
chunk__70959_71793 = G__71809;
count__70960_71794 = G__71810;
i__70961_71795 = G__71811;
continue;
} else {
var child_71812 = cljs.core.first(seq__70957_71806__$1);
if(cljs.core.truth_(child_71812)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71812);


var G__71813 = cljs.core.next(seq__70957_71806__$1);
var G__71814 = null;
var G__71815 = (0);
var G__71816 = (0);
seq__70957_71792 = G__71813;
chunk__70959_71793 = G__71814;
count__70960_71794 = G__71815;
i__70961_71795 = G__71816;
continue;
} else {
var G__71817 = cljs.core.next(seq__70957_71806__$1);
var G__71818 = null;
var G__71819 = (0);
var G__71820 = (0);
seq__70957_71792 = G__71817;
chunk__70959_71793 = G__71818;
count__70960_71794 = G__71819;
i__70961_71795 = G__71820;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_71791);
}


var G__71821 = cljs.core.next(seq__70778_71784__$1);
var G__71822 = null;
var G__71823 = (0);
var G__71824 = (0);
seq__70778_71744 = G__71821;
chunk__70779_71745 = G__71822;
count__70780_71746 = G__71823;
i__70781_71747 = G__71824;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__71012 = cljs.core.seq(node);
var chunk__71013 = null;
var count__71014 = (0);
var i__71015 = (0);
while(true){
if((i__71015 < count__71014)){
var n = chunk__71013.cljs$core$IIndexed$_nth$arity$2(null,i__71015);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__71827 = seq__71012;
var G__71828 = chunk__71013;
var G__71829 = count__71014;
var G__71830 = (i__71015 + (1));
seq__71012 = G__71827;
chunk__71013 = G__71828;
count__71014 = G__71829;
i__71015 = G__71830;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__71012);
if(temp__5823__auto__){
var seq__71012__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71012__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__71012__$1);
var G__71831 = cljs.core.chunk_rest(seq__71012__$1);
var G__71832 = c__5521__auto__;
var G__71833 = cljs.core.count(c__5521__auto__);
var G__71834 = (0);
seq__71012 = G__71831;
chunk__71013 = G__71832;
count__71014 = G__71833;
i__71015 = G__71834;
continue;
} else {
var n = cljs.core.first(seq__71012__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__71835 = cljs.core.next(seq__71012__$1);
var G__71836 = null;
var G__71837 = (0);
var G__71838 = (0);
seq__71012 = G__71835;
chunk__71013 = G__71836;
count__71014 = G__71837;
i__71015 = G__71838;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__71053 = arguments.length;
switch (G__71053) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__71063 = arguments.length;
switch (G__71063) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__71096 = arguments.length;
switch (G__71096) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4998__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5728__auto__ = [];
var len__5722__auto___71845 = arguments.length;
var i__5723__auto___71846 = (0);
while(true){
if((i__5723__auto___71846 < len__5722__auto___71845)){
args__5728__auto__.push((arguments[i__5723__auto___71846]));

var G__71847 = (i__5723__auto___71846 + (1));
i__5723__auto___71846 = G__71847;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__71159_71848 = cljs.core.seq(nodes);
var chunk__71160_71849 = null;
var count__71161_71850 = (0);
var i__71162_71851 = (0);
while(true){
if((i__71162_71851 < count__71161_71850)){
var node_71852 = chunk__71160_71849.cljs$core$IIndexed$_nth$arity$2(null,i__71162_71851);
fragment.appendChild(shadow.dom._to_dom(node_71852));


var G__71854 = seq__71159_71848;
var G__71855 = chunk__71160_71849;
var G__71856 = count__71161_71850;
var G__71857 = (i__71162_71851 + (1));
seq__71159_71848 = G__71854;
chunk__71160_71849 = G__71855;
count__71161_71850 = G__71856;
i__71162_71851 = G__71857;
continue;
} else {
var temp__5823__auto___71858 = cljs.core.seq(seq__71159_71848);
if(temp__5823__auto___71858){
var seq__71159_71859__$1 = temp__5823__auto___71858;
if(cljs.core.chunked_seq_QMARK_(seq__71159_71859__$1)){
var c__5521__auto___71861 = cljs.core.chunk_first(seq__71159_71859__$1);
var G__71863 = cljs.core.chunk_rest(seq__71159_71859__$1);
var G__71864 = c__5521__auto___71861;
var G__71865 = cljs.core.count(c__5521__auto___71861);
var G__71866 = (0);
seq__71159_71848 = G__71863;
chunk__71160_71849 = G__71864;
count__71161_71850 = G__71865;
i__71162_71851 = G__71866;
continue;
} else {
var node_71867 = cljs.core.first(seq__71159_71859__$1);
fragment.appendChild(shadow.dom._to_dom(node_71867));


var G__71868 = cljs.core.next(seq__71159_71859__$1);
var G__71869 = null;
var G__71870 = (0);
var G__71871 = (0);
seq__71159_71848 = G__71868;
chunk__71160_71849 = G__71869;
count__71161_71850 = G__71870;
i__71162_71851 = G__71871;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq71145){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71145));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__71171_71872 = cljs.core.seq(scripts);
var chunk__71172_71873 = null;
var count__71173_71874 = (0);
var i__71174_71875 = (0);
while(true){
if((i__71174_71875 < count__71173_71874)){
var vec__71190_71876 = chunk__71172_71873.cljs$core$IIndexed$_nth$arity$2(null,i__71174_71875);
var script_tag_71877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71190_71876,(0),null);
var script_body_71878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71190_71876,(1),null);
eval(script_body_71878);


var G__71879 = seq__71171_71872;
var G__71880 = chunk__71172_71873;
var G__71881 = count__71173_71874;
var G__71882 = (i__71174_71875 + (1));
seq__71171_71872 = G__71879;
chunk__71172_71873 = G__71880;
count__71173_71874 = G__71881;
i__71174_71875 = G__71882;
continue;
} else {
var temp__5823__auto___71883 = cljs.core.seq(seq__71171_71872);
if(temp__5823__auto___71883){
var seq__71171_71884__$1 = temp__5823__auto___71883;
if(cljs.core.chunked_seq_QMARK_(seq__71171_71884__$1)){
var c__5521__auto___71888 = cljs.core.chunk_first(seq__71171_71884__$1);
var G__71889 = cljs.core.chunk_rest(seq__71171_71884__$1);
var G__71890 = c__5521__auto___71888;
var G__71891 = cljs.core.count(c__5521__auto___71888);
var G__71892 = (0);
seq__71171_71872 = G__71889;
chunk__71172_71873 = G__71890;
count__71173_71874 = G__71891;
i__71174_71875 = G__71892;
continue;
} else {
var vec__71195_71893 = cljs.core.first(seq__71171_71884__$1);
var script_tag_71894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71195_71893,(0),null);
var script_body_71895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71195_71893,(1),null);
eval(script_body_71895);


var G__71896 = cljs.core.next(seq__71171_71884__$1);
var G__71897 = null;
var G__71898 = (0);
var G__71899 = (0);
seq__71171_71872 = G__71896;
chunk__71172_71873 = G__71897;
count__71173_71874 = G__71898;
i__71174_71875 = G__71899;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__71203){
var vec__71204 = p__71203;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71204,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71204,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__71217 = arguments.length;
switch (G__71217) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__71242 = cljs.core.seq(style_keys);
var chunk__71243 = null;
var count__71244 = (0);
var i__71245 = (0);
while(true){
if((i__71245 < count__71244)){
var it = chunk__71243.cljs$core$IIndexed$_nth$arity$2(null,i__71245);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__71907 = seq__71242;
var G__71908 = chunk__71243;
var G__71909 = count__71244;
var G__71910 = (i__71245 + (1));
seq__71242 = G__71907;
chunk__71243 = G__71908;
count__71244 = G__71909;
i__71245 = G__71910;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__71242);
if(temp__5823__auto__){
var seq__71242__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71242__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__71242__$1);
var G__71911 = cljs.core.chunk_rest(seq__71242__$1);
var G__71912 = c__5521__auto__;
var G__71913 = cljs.core.count(c__5521__auto__);
var G__71914 = (0);
seq__71242 = G__71911;
chunk__71243 = G__71912;
count__71244 = G__71913;
i__71245 = G__71914;
continue;
} else {
var it = cljs.core.first(seq__71242__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__71915 = cljs.core.next(seq__71242__$1);
var G__71916 = null;
var G__71917 = (0);
var G__71918 = (0);
seq__71242 = G__71915;
chunk__71243 = G__71916;
count__71244 = G__71917;
i__71245 = G__71918;
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k71258,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__71268 = k71258;
var G__71268__$1 = (((G__71268 instanceof cljs.core.Keyword))?G__71268.fqn:null);
switch (G__71268__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71258,else__5299__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__71273){
var vec__71274 = p__71273;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71274,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71274,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71257){
var self__ = this;
var G__71257__$1 = this;
return (new cljs.core.RecordIter((0),G__71257__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71259,other71260){
var self__ = this;
var this71259__$1 = this;
return (((!((other71260 == null)))) && ((((this71259__$1.constructor === other71260.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71259__$1.x,other71260.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71259__$1.y,other71260.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71259__$1.__extmap,other71260.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k71258){
var self__ = this;
var this__5303__auto____$1 = this;
var G__71289 = k71258;
var G__71289__$1 = (((G__71289 instanceof cljs.core.Keyword))?G__71289.fqn:null);
switch (G__71289__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71258);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__71257){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__71292 = cljs.core.keyword_identical_QMARK_;
var expr__71293 = k__5305__auto__;
if(cljs.core.truth_((pred__71292.cljs$core$IFn$_invoke$arity$2 ? pred__71292.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__71293) : pred__71292.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__71293)))){
return (new shadow.dom.Coordinate(G__71257,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71292.cljs$core$IFn$_invoke$arity$2 ? pred__71292.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__71293) : pred__71292.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__71293)))){
return (new shadow.dom.Coordinate(self__.x,G__71257,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__71257),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__71257){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__71257,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__71263){
var extmap__5338__auto__ = (function (){var G__71309 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71263,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__71263)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71309);
} else {
return G__71309;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__71263),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__71263),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k71324,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__71346 = k71324;
var G__71346__$1 = (((G__71346 instanceof cljs.core.Keyword))?G__71346.fqn:null);
switch (G__71346__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71324,else__5299__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__71353){
var vec__71355 = p__71353;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71355,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71355,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.dom.Size{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71323){
var self__ = this;
var G__71323__$1 = this;
return (new cljs.core.RecordIter((0),G__71323__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71325,other71326){
var self__ = this;
var this71325__$1 = this;
return (((!((other71326 == null)))) && ((((this71325__$1.constructor === other71326.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71325__$1.w,other71326.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71325__$1.h,other71326.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71325__$1.__extmap,other71326.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k71324){
var self__ = this;
var this__5303__auto____$1 = this;
var G__71388 = k71324;
var G__71388__$1 = (((G__71388 instanceof cljs.core.Keyword))?G__71388.fqn:null);
switch (G__71388__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71324);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__71323){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__71390 = cljs.core.keyword_identical_QMARK_;
var expr__71391 = k__5305__auto__;
if(cljs.core.truth_((pred__71390.cljs$core$IFn$_invoke$arity$2 ? pred__71390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__71391) : pred__71390.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__71391)))){
return (new shadow.dom.Size(G__71323,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71390.cljs$core$IFn$_invoke$arity$2 ? pred__71390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__71391) : pred__71390.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__71391)))){
return (new shadow.dom.Size(self__.w,G__71323,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__71323),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__71323){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__71323,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__71333){
var extmap__5338__auto__ = (function (){var G__71404 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71333,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__71333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71404);
} else {
return G__71404;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__71333),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__71333),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5586__auto__ = opts;
var l__5587__auto__ = a__5586__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5587__auto__)){
var G__71942 = (i + (1));
var G__71943 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__71942;
ret = G__71943;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71451){
var vec__71453 = p__71451;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71453,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71453,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__71466 = arguments.length;
switch (G__71466) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__71951 = ps;
var G__71952 = (i + (1));
el__$1 = G__71951;
i = G__71952;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__71493 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71493,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71493,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71493,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__71498_71959 = cljs.core.seq(props);
var chunk__71499_71960 = null;
var count__71500_71961 = (0);
var i__71501_71962 = (0);
while(true){
if((i__71501_71962 < count__71500_71961)){
var vec__71510_71963 = chunk__71499_71960.cljs$core$IIndexed$_nth$arity$2(null,i__71501_71962);
var k_71964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71510_71963,(0),null);
var v_71965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71510_71963,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_71964);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_71964),v_71965);


var G__71971 = seq__71498_71959;
var G__71972 = chunk__71499_71960;
var G__71973 = count__71500_71961;
var G__71974 = (i__71501_71962 + (1));
seq__71498_71959 = G__71971;
chunk__71499_71960 = G__71972;
count__71500_71961 = G__71973;
i__71501_71962 = G__71974;
continue;
} else {
var temp__5823__auto___71975 = cljs.core.seq(seq__71498_71959);
if(temp__5823__auto___71975){
var seq__71498_71976__$1 = temp__5823__auto___71975;
if(cljs.core.chunked_seq_QMARK_(seq__71498_71976__$1)){
var c__5521__auto___71977 = cljs.core.chunk_first(seq__71498_71976__$1);
var G__71981 = cljs.core.chunk_rest(seq__71498_71976__$1);
var G__71982 = c__5521__auto___71977;
var G__71983 = cljs.core.count(c__5521__auto___71977);
var G__71984 = (0);
seq__71498_71959 = G__71981;
chunk__71499_71960 = G__71982;
count__71500_71961 = G__71983;
i__71501_71962 = G__71984;
continue;
} else {
var vec__71525_71985 = cljs.core.first(seq__71498_71976__$1);
var k_71986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71525_71985,(0),null);
var v_71987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71525_71985,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_71986);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_71986),v_71987);


var G__71988 = cljs.core.next(seq__71498_71976__$1);
var G__71989 = null;
var G__71990 = (0);
var G__71991 = (0);
seq__71498_71959 = G__71988;
chunk__71499_71960 = G__71989;
count__71500_71961 = G__71990;
i__71501_71962 = G__71991;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__71535 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71535,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71535,(1),null);
var seq__71539_71993 = cljs.core.seq(node_children);
var chunk__71541_71994 = null;
var count__71542_71995 = (0);
var i__71543_71996 = (0);
while(true){
if((i__71543_71996 < count__71542_71995)){
var child_struct_71997 = chunk__71541_71994.cljs$core$IIndexed$_nth$arity$2(null,i__71543_71996);
if((!((child_struct_71997 == null)))){
if(typeof child_struct_71997 === 'string'){
var text_71998 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_71998),child_struct_71997].join(''));
} else {
var children_71999 = shadow.dom.svg_node(child_struct_71997);
if(cljs.core.seq_QMARK_(children_71999)){
var seq__71567_72000 = cljs.core.seq(children_71999);
var chunk__71569_72001 = null;
var count__71570_72002 = (0);
var i__71571_72003 = (0);
while(true){
if((i__71571_72003 < count__71570_72002)){
var child_72004 = chunk__71569_72001.cljs$core$IIndexed$_nth$arity$2(null,i__71571_72003);
if(cljs.core.truth_(child_72004)){
node.appendChild(child_72004);


var G__72005 = seq__71567_72000;
var G__72006 = chunk__71569_72001;
var G__72007 = count__71570_72002;
var G__72008 = (i__71571_72003 + (1));
seq__71567_72000 = G__72005;
chunk__71569_72001 = G__72006;
count__71570_72002 = G__72007;
i__71571_72003 = G__72008;
continue;
} else {
var G__72009 = seq__71567_72000;
var G__72010 = chunk__71569_72001;
var G__72011 = count__71570_72002;
var G__72012 = (i__71571_72003 + (1));
seq__71567_72000 = G__72009;
chunk__71569_72001 = G__72010;
count__71570_72002 = G__72011;
i__71571_72003 = G__72012;
continue;
}
} else {
var temp__5823__auto___72014 = cljs.core.seq(seq__71567_72000);
if(temp__5823__auto___72014){
var seq__71567_72015__$1 = temp__5823__auto___72014;
if(cljs.core.chunked_seq_QMARK_(seq__71567_72015__$1)){
var c__5521__auto___72016 = cljs.core.chunk_first(seq__71567_72015__$1);
var G__72020 = cljs.core.chunk_rest(seq__71567_72015__$1);
var G__72021 = c__5521__auto___72016;
var G__72022 = cljs.core.count(c__5521__auto___72016);
var G__72023 = (0);
seq__71567_72000 = G__72020;
chunk__71569_72001 = G__72021;
count__71570_72002 = G__72022;
i__71571_72003 = G__72023;
continue;
} else {
var child_72024 = cljs.core.first(seq__71567_72015__$1);
if(cljs.core.truth_(child_72024)){
node.appendChild(child_72024);


var G__72026 = cljs.core.next(seq__71567_72015__$1);
var G__72027 = null;
var G__72028 = (0);
var G__72029 = (0);
seq__71567_72000 = G__72026;
chunk__71569_72001 = G__72027;
count__71570_72002 = G__72028;
i__71571_72003 = G__72029;
continue;
} else {
var G__72030 = cljs.core.next(seq__71567_72015__$1);
var G__72031 = null;
var G__72032 = (0);
var G__72033 = (0);
seq__71567_72000 = G__72030;
chunk__71569_72001 = G__72031;
count__71570_72002 = G__72032;
i__71571_72003 = G__72033;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_71999);
}
}


var G__72034 = seq__71539_71993;
var G__72035 = chunk__71541_71994;
var G__72036 = count__71542_71995;
var G__72037 = (i__71543_71996 + (1));
seq__71539_71993 = G__72034;
chunk__71541_71994 = G__72035;
count__71542_71995 = G__72036;
i__71543_71996 = G__72037;
continue;
} else {
var G__72038 = seq__71539_71993;
var G__72039 = chunk__71541_71994;
var G__72040 = count__71542_71995;
var G__72041 = (i__71543_71996 + (1));
seq__71539_71993 = G__72038;
chunk__71541_71994 = G__72039;
count__71542_71995 = G__72040;
i__71543_71996 = G__72041;
continue;
}
} else {
var temp__5823__auto___72042 = cljs.core.seq(seq__71539_71993);
if(temp__5823__auto___72042){
var seq__71539_72043__$1 = temp__5823__auto___72042;
if(cljs.core.chunked_seq_QMARK_(seq__71539_72043__$1)){
var c__5521__auto___72045 = cljs.core.chunk_first(seq__71539_72043__$1);
var G__72046 = cljs.core.chunk_rest(seq__71539_72043__$1);
var G__72047 = c__5521__auto___72045;
var G__72048 = cljs.core.count(c__5521__auto___72045);
var G__72049 = (0);
seq__71539_71993 = G__72046;
chunk__71541_71994 = G__72047;
count__71542_71995 = G__72048;
i__71543_71996 = G__72049;
continue;
} else {
var child_struct_72050 = cljs.core.first(seq__71539_72043__$1);
if((!((child_struct_72050 == null)))){
if(typeof child_struct_72050 === 'string'){
var text_72051 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72051),child_struct_72050].join(''));
} else {
var children_72052 = shadow.dom.svg_node(child_struct_72050);
if(cljs.core.seq_QMARK_(children_72052)){
var seq__71580_72053 = cljs.core.seq(children_72052);
var chunk__71582_72054 = null;
var count__71583_72055 = (0);
var i__71584_72056 = (0);
while(true){
if((i__71584_72056 < count__71583_72055)){
var child_72057 = chunk__71582_72054.cljs$core$IIndexed$_nth$arity$2(null,i__71584_72056);
if(cljs.core.truth_(child_72057)){
node.appendChild(child_72057);


var G__72058 = seq__71580_72053;
var G__72059 = chunk__71582_72054;
var G__72060 = count__71583_72055;
var G__72061 = (i__71584_72056 + (1));
seq__71580_72053 = G__72058;
chunk__71582_72054 = G__72059;
count__71583_72055 = G__72060;
i__71584_72056 = G__72061;
continue;
} else {
var G__72062 = seq__71580_72053;
var G__72063 = chunk__71582_72054;
var G__72064 = count__71583_72055;
var G__72065 = (i__71584_72056 + (1));
seq__71580_72053 = G__72062;
chunk__71582_72054 = G__72063;
count__71583_72055 = G__72064;
i__71584_72056 = G__72065;
continue;
}
} else {
var temp__5823__auto___72066__$1 = cljs.core.seq(seq__71580_72053);
if(temp__5823__auto___72066__$1){
var seq__71580_72070__$1 = temp__5823__auto___72066__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71580_72070__$1)){
var c__5521__auto___72071 = cljs.core.chunk_first(seq__71580_72070__$1);
var G__72072 = cljs.core.chunk_rest(seq__71580_72070__$1);
var G__72073 = c__5521__auto___72071;
var G__72074 = cljs.core.count(c__5521__auto___72071);
var G__72075 = (0);
seq__71580_72053 = G__72072;
chunk__71582_72054 = G__72073;
count__71583_72055 = G__72074;
i__71584_72056 = G__72075;
continue;
} else {
var child_72076 = cljs.core.first(seq__71580_72070__$1);
if(cljs.core.truth_(child_72076)){
node.appendChild(child_72076);


var G__72077 = cljs.core.next(seq__71580_72070__$1);
var G__72078 = null;
var G__72079 = (0);
var G__72080 = (0);
seq__71580_72053 = G__72077;
chunk__71582_72054 = G__72078;
count__71583_72055 = G__72079;
i__71584_72056 = G__72080;
continue;
} else {
var G__72082 = cljs.core.next(seq__71580_72070__$1);
var G__72083 = null;
var G__72084 = (0);
var G__72085 = (0);
seq__71580_72053 = G__72082;
chunk__71582_72054 = G__72083;
count__71583_72055 = G__72084;
i__71584_72056 = G__72085;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72052);
}
}


var G__72087 = cljs.core.next(seq__71539_72043__$1);
var G__72088 = null;
var G__72089 = (0);
var G__72090 = (0);
seq__71539_71993 = G__72087;
chunk__71541_71994 = G__72088;
count__71542_71995 = G__72089;
i__71543_71996 = G__72090;
continue;
} else {
var G__72091 = cljs.core.next(seq__71539_72043__$1);
var G__72092 = null;
var G__72093 = (0);
var G__72094 = (0);
seq__71539_71993 = G__72091;
chunk__71541_71994 = G__72092;
count__71542_71995 = G__72093;
i__71543_71996 = G__72094;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___72099 = arguments.length;
var i__5723__auto___72100 = (0);
while(true){
if((i__5723__auto___72100 < len__5722__auto___72099)){
args__5728__auto__.push((arguments[i__5723__auto___72100]));

var G__72104 = (i__5723__auto___72100 + (1));
i__5723__auto___72100 = G__72104;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq71588){
var G__71589 = cljs.core.first(seq71588);
var seq71588__$1 = cljs.core.next(seq71588);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71589,seq71588__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__71591 = arguments.length;
switch (G__71591) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4996__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4996__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4996__auto__;
}
})())){
var c__67942__auto___72117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_71611){
var state_val_71614 = (state_71611[(1)]);
if((state_val_71614 === (1))){
var state_71611__$1 = state_71611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71611__$1,(2),once_or_cleanup);
} else {
if((state_val_71614 === (2))){
var inst_71604 = (state_71611[(2)]);
var inst_71605 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_71611__$1 = (function (){var statearr_71623 = state_71611;
(statearr_71623[(7)] = inst_71604);

return statearr_71623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71611__$1,inst_71605);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__67713__auto__ = null;
var shadow$dom$state_machine__67713__auto____0 = (function (){
var statearr_71625 = [null,null,null,null,null,null,null,null];
(statearr_71625[(0)] = shadow$dom$state_machine__67713__auto__);

(statearr_71625[(1)] = (1));

return statearr_71625;
});
var shadow$dom$state_machine__67713__auto____1 = (function (state_71611){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_71611);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e71626){var ex__67716__auto__ = e71626;
var statearr_71628_72123 = state_71611;
(statearr_71628_72123[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_71611[(4)]))){
var statearr_71630_72124 = state_71611;
(statearr_71630_72124[(1)] = cljs.core.first((state_71611[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72126 = state_71611;
state_71611 = G__72126;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
shadow$dom$state_machine__67713__auto__ = function(state_71611){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__67713__auto____0.call(this);
case 1:
return shadow$dom$state_machine__67713__auto____1.call(this,state_71611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__67713__auto____0;
shadow$dom$state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__67713__auto____1;
return shadow$dom$state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_71632 = f__67943__auto__();
(statearr_71632[(6)] = c__67942__auto___72117);

return statearr_71632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
