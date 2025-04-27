goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_72350 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.object._id[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.object._id["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_72350(this$);
}
});

var shadow$object$IObject$_type$dyn_72351 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.object._type[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.object._type["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_72351(this$);
}
});

var shadow$object$IObject$_data$dyn_72352 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.object._data[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.object._data["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_72352(this$);
}
});

var shadow$object$IObject$_update$dyn_72353 = (function (this$,update_fn){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.object._update[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5347__auto__.call(null,this$,update_fn));
} else {
var m__5345__auto__ = (shadow.object._update["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5345__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_72353(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_72354 = (function (this$,cause){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5347__auto__.call(null,this$,cause));
} else {
var m__5345__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5345__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_72354(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__71722 = arguments.length;
switch (G__71722) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4998__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5823__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5823__auto__)){
var oid = temp__5823__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5823__auto__)){
var parent_id = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__72356 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__72356;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71743_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__71743_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__71826 = arguments.length;
switch (G__71826) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71840_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__71840_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__71843){
var map__71844 = p__71843;
var map__71844__$1 = cljs.core.__destructure_map(map__71844);
var oref = map__71844__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71844__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__71862 = arguments.length;
switch (G__71862) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71853_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__71853_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5821__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5821__auto__)){
var obj = temp__5821__auto__;
return obj;
} else {
var temp__5823__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
var G__72363 = parent;
dom = G__72363;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___72364 = arguments.length;
var i__5723__auto___72365 = (0);
while(true){
if((i__5723__auto___72365 < len__5722__auto___72364)){
args__5728__auto__.push((arguments[i__5723__auto___72365]));

var G__72366 = (i__5723__auto___72365 + (1));
i__5723__auto___72365 = G__72366;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5823__auto__)){
var reactions_to_trigger = temp__5823__auto__;
var seq__71900 = cljs.core.seq(reactions_to_trigger);
var chunk__71901 = null;
var count__71902 = (0);
var i__71903 = (0);
while(true){
if((i__71903 < count__71902)){
var rfn = chunk__71901.cljs$core$IIndexed$_nth$arity$2(null,i__71903);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__72367 = seq__71900;
var G__72368 = chunk__71901;
var G__72369 = count__71902;
var G__72370 = (i__71903 + (1));
seq__71900 = G__72367;
chunk__71901 = G__72368;
count__71902 = G__72369;
i__71903 = G__72370;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__71900);
if(temp__5823__auto____$1){
var seq__71900__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__71900__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__71900__$1);
var G__72371 = cljs.core.chunk_rest(seq__71900__$1);
var G__72372 = c__5521__auto__;
var G__72373 = cljs.core.count(c__5521__auto__);
var G__72374 = (0);
seq__71900 = G__72371;
chunk__71901 = G__72372;
count__71902 = G__72373;
i__71903 = G__72374;
continue;
} else {
var rfn = cljs.core.first(seq__71900__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__72375 = cljs.core.next(seq__71900__$1);
var G__72376 = null;
var G__72377 = (0);
var G__72378 = (0);
seq__71900 = G__72375;
chunk__71901 = G__72376;
count__71902 = G__72377;
i__71903 = G__72378;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq71885){
var G__71886 = cljs.core.first(seq71885);
var seq71885__$1 = cljs.core.next(seq71885);
var G__71887 = cljs.core.first(seq71885__$1);
var seq71885__$2 = cljs.core.next(seq71885__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71886,G__71887,seq71885__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__71920_72379 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__71921_72380 = null;
var count__71922_72381 = (0);
var i__71923_72382 = (0);
while(true){
if((i__71923_72382 < count__71922_72381)){
var child_72385 = chunk__71921_72380.cljs$core$IIndexed$_nth$arity$2(null,i__71923_72382);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_72385,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_72385,ev,notify_fn));


var G__72386 = seq__71920_72379;
var G__72387 = chunk__71921_72380;
var G__72388 = count__71922_72381;
var G__72389 = (i__71923_72382 + (1));
seq__71920_72379 = G__72386;
chunk__71921_72380 = G__72387;
count__71922_72381 = G__72388;
i__71923_72382 = G__72389;
continue;
} else {
var temp__5823__auto___72390 = cljs.core.seq(seq__71920_72379);
if(temp__5823__auto___72390){
var seq__71920_72391__$1 = temp__5823__auto___72390;
if(cljs.core.chunked_seq_QMARK_(seq__71920_72391__$1)){
var c__5521__auto___72392 = cljs.core.chunk_first(seq__71920_72391__$1);
var G__72393 = cljs.core.chunk_rest(seq__71920_72391__$1);
var G__72394 = c__5521__auto___72392;
var G__72395 = cljs.core.count(c__5521__auto___72392);
var G__72396 = (0);
seq__71920_72379 = G__72393;
chunk__71921_72380 = G__72394;
count__71922_72381 = G__72395;
i__71923_72382 = G__72396;
continue;
} else {
var child_72397 = cljs.core.first(seq__71920_72391__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_72397,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_72397,ev,notify_fn));


var G__72398 = cljs.core.next(seq__71920_72391__$1);
var G__72399 = null;
var G__72400 = (0);
var G__72401 = (0);
seq__71920_72379 = G__72398;
chunk__71921_72380 = G__72399;
count__71922_72381 = G__72400;
i__71923_72382 = G__72401;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___72404 = arguments.length;
var i__5723__auto___72405 = (0);
while(true){
if((i__5723__auto___72405 < len__5722__auto___72404)){
args__5728__auto__.push((arguments[i__5723__auto___72405]));

var G__72406 = (i__5723__auto___72405 + (1));
i__5723__auto___72405 = G__72406;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq71925){
var G__71926 = cljs.core.first(seq71925);
var seq71925__$1 = cljs.core.next(seq71925);
var G__71927 = cljs.core.first(seq71925__$1);
var seq71925__$2 = cljs.core.next(seq71925__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71926,G__71927,seq71925__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___72409 = arguments.length;
var i__5723__auto___72410 = (0);
while(true){
if((i__5723__auto___72410 < len__5722__auto___72409)){
args__5728__auto__.push((arguments[i__5723__auto___72410]));

var G__72411 = (i__5723__auto___72410 + (1));
i__5723__auto___72410 = G__72411;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__72412 = shadow.object.get_parent(current);
current = G__72412;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq71933){
var G__71934 = cljs.core.first(seq71933);
var seq71933__$1 = cljs.core.next(seq71933);
var G__71935 = cljs.core.first(seq71933__$1);
var seq71933__$2 = cljs.core.next(seq71933__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71934,G__71935,seq71933__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___72413 = arguments.length;
var i__5723__auto___72414 = (0);
while(true){
if((i__5723__auto___72414 < len__5722__auto___72413)){
args__5728__auto__.push((arguments[i__5723__auto___72414]));

var G__72415 = (i__5723__auto___72414 + (1));
i__5723__auto___72414 = G__72415;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq71936){
var G__71937 = cljs.core.first(seq71936);
var seq71936__$1 = cljs.core.next(seq71936);
var G__71938 = cljs.core.first(seq71936__$1);
var seq71936__$2 = cljs.core.next(seq71936__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71937,G__71938,seq71936__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5821__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5821__auto__)){
var custom_remove = temp__5821__auto__;
var G__71947 = this$;
var G__71948 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__71947,G__71948) : custom_remove.call(null,G__71947,G__71948));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__71953 = arguments.length;
switch (G__71953) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__71967 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__71968 = null;
var count__71969 = (0);
var i__71970 = (0);
while(true){
if((i__71970 < count__71969)){
var vec__72067 = chunk__71968.cljs$core$IIndexed$_nth$arity$2(null,i__71970);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72067,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72067,(1),null);
var ev_def = vec__72067;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_72430__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__71967,chunk__71968,count__71969,i__71970,vec__72067,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__71967,chunk__71968,count__71969,i__71970,vec__72067,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__71967,chunk__71968,count__71969,i__71970,handler_72430__$1,vec__72067,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_72430__$1.cljs$core$IFn$_invoke$arity$3 ? handler_72430__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_72430__$1.call(null,oref,e,el));
});})(seq__71967,chunk__71968,count__71969,i__71970,handler_72430__$1,vec__72067,ev,handler,ev_def))
);


var G__72431 = seq__71967;
var G__72432 = chunk__71968;
var G__72433 = count__71969;
var G__72434 = (i__71970 + (1));
seq__71967 = G__72431;
chunk__71968 = G__72432;
count__71969 = G__72433;
i__71970 = G__72434;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__71967);
if(temp__5823__auto__){
var seq__71967__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71967__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__71967__$1);
var G__72435 = cljs.core.chunk_rest(seq__71967__$1);
var G__72436 = c__5521__auto__;
var G__72437 = cljs.core.count(c__5521__auto__);
var G__72438 = (0);
seq__71967 = G__72435;
chunk__71968 = G__72436;
count__71969 = G__72437;
i__71970 = G__72438;
continue;
} else {
var vec__72101 = cljs.core.first(seq__71967__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72101,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72101,(1),null);
var ev_def = vec__72101;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_72440__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__71967,chunk__71968,count__71969,i__71970,vec__72101,ev,handler,ev_def,seq__71967__$1,temp__5823__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__71967,chunk__71968,count__71969,i__71970,vec__72101,ev,handler,ev_def,seq__71967__$1,temp__5823__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__71967,chunk__71968,count__71969,i__71970,handler_72440__$1,vec__72101,ev,handler,ev_def,seq__71967__$1,temp__5823__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_72440__$1.cljs$core$IFn$_invoke$arity$3 ? handler_72440__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_72440__$1.call(null,oref,e,el));
});})(seq__71967,chunk__71968,count__71969,i__71970,handler_72440__$1,vec__72101,ev,handler,ev_def,seq__71967__$1,temp__5823__auto__))
);


var G__72441 = cljs.core.next(seq__71967__$1);
var G__72442 = null;
var G__72443 = (0);
var G__72444 = (0);
seq__71967 = G__72441;
chunk__71968 = G__72442;
count__71969 = G__72443;
i__71970 = G__72444;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__72113){
var vec__72114 = p__72113;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72114,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72114,(1),null);
if(cljs.core.truth_((function (){var and__4996__auto__ = event;
if(cljs.core.truth_(and__4996__auto__)){
return handler;
} else {
return and__4996__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__5728__auto__ = [];
var len__5722__auto___72450 = arguments.length;
var i__5723__auto___72451 = (0);
while(true){
if((i__5723__auto___72451 < len__5722__auto___72450)){
args__5728__auto__.push((arguments[i__5723__auto___72451]));

var G__72452 = (i__5723__auto___72451 + (1));
i__5723__auto___72451 = G__72452;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e72136){if((e72136 instanceof Object)){
var e = e72136;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e72136;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq72132){
var G__72133 = cljs.core.first(seq72132);
var seq72132__$1 = cljs.core.next(seq72132);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72133,seq72132__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__72142 = arguments.length;
switch (G__72142) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__72147 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__72147) : shadow.dom.build.call(null,G__72147));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k72153,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__72157 = k72153;
var G__72157__$1 = (((G__72157 instanceof cljs.core.Keyword))?G__72157.fqn:null);
switch (G__72157__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72153,else__5299__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__72159){
var vec__72160 = p__72159;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72160,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72160,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.object.Watch{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72152){
var self__ = this;
var G__72152__$1 = this;
return (new cljs.core.RecordIter((0),G__72152__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72154,other72155){
var self__ = this;
var this72154__$1 = this;
return (((!((other72155 == null)))) && ((((this72154__$1.constructor === other72155.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72154__$1.key,other72155.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72154__$1.handler,other72155.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72154__$1.__extmap,other72155.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k72153){
var self__ = this;
var this__5303__auto____$1 = this;
var G__72170 = k72153;
var G__72170__$1 = (((G__72170 instanceof cljs.core.Keyword))?G__72170.fqn:null);
switch (G__72170__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72153);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__72152){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__72171 = cljs.core.keyword_identical_QMARK_;
var expr__72172 = k__5305__auto__;
if(cljs.core.truth_((pred__72171.cljs$core$IFn$_invoke$arity$2 ? pred__72171.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__72172) : pred__72171.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__72172)))){
return (new shadow.object.Watch(G__72152,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72171.cljs$core$IFn$_invoke$arity$2 ? pred__72171.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__72172) : pred__72171.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__72172)))){
return (new shadow.object.Watch(self__.key,G__72152,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__72152),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__72152){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__72152,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__72156){
var extmap__5338__auto__ = (function (){var G__72181 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72156,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__72156)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72181);
} else {
return G__72181;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__72156),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__72156),null,cljs.core.not_empty(extmap__5338__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__72186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__72186_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__72195 = cljs.core.seq(self__.watches);
var chunk__72196 = null;
var count__72197 = (0);
var i__72198 = (0);
while(true){
if((i__72198 < count__72197)){
var map__72203 = chunk__72196.cljs$core$IIndexed$_nth$arity$2(null,i__72198);
var map__72203__$1 = cljs.core.__destructure_map(map__72203);
var watch = map__72203__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72203__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72203__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__72474 = seq__72195;
var G__72475 = chunk__72196;
var G__72476 = count__72197;
var G__72477 = (i__72198 + (1));
seq__72195 = G__72474;
chunk__72196 = G__72475;
count__72197 = G__72476;
i__72198 = G__72477;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__72195);
if(temp__5823__auto__){
var seq__72195__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72195__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__72195__$1);
var G__72478 = cljs.core.chunk_rest(seq__72195__$1);
var G__72479 = c__5521__auto__;
var G__72480 = cljs.core.count(c__5521__auto__);
var G__72481 = (0);
seq__72195 = G__72478;
chunk__72196 = G__72479;
count__72197 = G__72480;
i__72198 = G__72481;
continue;
} else {
var map__72204 = cljs.core.first(seq__72195__$1);
var map__72204__$1 = cljs.core.__destructure_map(map__72204);
var watch = map__72204__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72204__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72204__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__72482 = cljs.core.next(seq__72195__$1);
var G__72483 = null;
var G__72484 = (0);
var G__72485 = (0);
seq__72195 = G__72482;
chunk__72196 = G__72483;
count__72197 = G__72484;
i__72198 = G__72485;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__72207_72489 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__72208_72490 = null;
var count__72209_72491 = (0);
var i__72210_72492 = (0);
while(true){
if((i__72210_72492 < count__72209_72491)){
var child_72494 = chunk__72208_72490.cljs$core$IIndexed$_nth$arity$2(null,i__72210_72492);
shadow.object._destroy_BANG_(child_72494,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__72496 = seq__72207_72489;
var G__72497 = chunk__72208_72490;
var G__72498 = count__72209_72491;
var G__72499 = (i__72210_72492 + (1));
seq__72207_72489 = G__72496;
chunk__72208_72490 = G__72497;
count__72209_72491 = G__72498;
i__72210_72492 = G__72499;
continue;
} else {
var temp__5823__auto___72500 = cljs.core.seq(seq__72207_72489);
if(temp__5823__auto___72500){
var seq__72207_72501__$1 = temp__5823__auto___72500;
if(cljs.core.chunked_seq_QMARK_(seq__72207_72501__$1)){
var c__5521__auto___72502 = cljs.core.chunk_first(seq__72207_72501__$1);
var G__72503 = cljs.core.chunk_rest(seq__72207_72501__$1);
var G__72504 = c__5521__auto___72502;
var G__72505 = cljs.core.count(c__5521__auto___72502);
var G__72506 = (0);
seq__72207_72489 = G__72503;
chunk__72208_72490 = G__72504;
count__72209_72491 = G__72505;
i__72210_72492 = G__72506;
continue;
} else {
var child_72507 = cljs.core.first(seq__72207_72501__$1);
shadow.object._destroy_BANG_(child_72507,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__72508 = cljs.core.next(seq__72207_72501__$1);
var G__72509 = null;
var G__72510 = (0);
var G__72511 = (0);
seq__72207_72489 = G__72508;
chunk__72208_72490 = G__72509;
count__72209_72491 = G__72510;
i__72210_72492 = G__72511;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_72512 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_72512 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_72512);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__72221 = arguments.length;
switch (G__72221) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__72225 = arguments.length;
switch (G__72225) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__5728__auto__ = [];
var len__5722__auto___72529 = arguments.length;
var i__5723__auto___72530 = (0);
while(true){
if((i__5723__auto___72530 < len__5722__auto___72529)){
args__5728__auto__.push((arguments[i__5723__auto___72530]));

var G__72531 = (i__5723__auto___72530 + (1));
i__5723__auto___72530 = G__72531;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_72540 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5821__auto___72541 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5821__auto___72541)){
var dom_72542 = temp__5821__auto___72541;
shadow.dom.set_data(dom_72542,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_72542,dom_events_72540);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_72542], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_72542], 0));
} else {
var temp__5823__auto___72543 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5823__auto___72543)){
var dom_fn_72544 = temp__5823__auto___72543;
var dom_72546 = (function (){var G__72236 = (dom_fn_72544.cljs$core$IFn$_invoke$arity$2 ? dom_fn_72544.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_72544.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__72236) : shadow.dom.build.call(null,G__72236));
})();
shadow.dom.set_data(dom_72546,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_72546], 0));

shadow.object.bind_dom_events(oref,dom_72546,dom_events_72540);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_72546], 0));
} else {
}
}

var temp__5823__auto___72547 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5823__auto___72547)){
var watches_72548 = temp__5823__auto___72547;
var seq__72238_72549 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_72548));
var chunk__72239_72550 = null;
var count__72240_72551 = (0);
var i__72241_72552 = (0);
while(true){
if((i__72241_72552 < count__72240_72551)){
var vec__72248_72554 = chunk__72239_72550.cljs$core$IIndexed$_nth$arity$2(null,i__72241_72552);
var attr_72555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72248_72554,(0),null);
var handler_72556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72248_72554,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_72555,((function (seq__72238_72549,chunk__72239_72550,count__72240_72551,i__72241_72552,vec__72248_72554,attr_72555,handler_72556,watches_72548,temp__5823__auto___72547,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_72556.cljs$core$IFn$_invoke$arity$3 ? handler_72556.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_72556.call(null,oref,old,new$));
});})(seq__72238_72549,chunk__72239_72550,count__72240_72551,i__72241_72552,vec__72248_72554,attr_72555,handler_72556,watches_72548,temp__5823__auto___72547,oid,parent,result_chan,odef,obj,oref))
);


var G__72559 = seq__72238_72549;
var G__72560 = chunk__72239_72550;
var G__72561 = count__72240_72551;
var G__72562 = (i__72241_72552 + (1));
seq__72238_72549 = G__72559;
chunk__72239_72550 = G__72560;
count__72240_72551 = G__72561;
i__72241_72552 = G__72562;
continue;
} else {
var temp__5823__auto___72563__$1 = cljs.core.seq(seq__72238_72549);
if(temp__5823__auto___72563__$1){
var seq__72238_72565__$1 = temp__5823__auto___72563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72238_72565__$1)){
var c__5521__auto___72566 = cljs.core.chunk_first(seq__72238_72565__$1);
var G__72567 = cljs.core.chunk_rest(seq__72238_72565__$1);
var G__72568 = c__5521__auto___72566;
var G__72569 = cljs.core.count(c__5521__auto___72566);
var G__72570 = (0);
seq__72238_72549 = G__72567;
chunk__72239_72550 = G__72568;
count__72240_72551 = G__72569;
i__72241_72552 = G__72570;
continue;
} else {
var vec__72251_72571 = cljs.core.first(seq__72238_72565__$1);
var attr_72572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72251_72571,(0),null);
var handler_72573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72251_72571,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_72572,((function (seq__72238_72549,chunk__72239_72550,count__72240_72551,i__72241_72552,vec__72251_72571,attr_72572,handler_72573,seq__72238_72565__$1,temp__5823__auto___72563__$1,watches_72548,temp__5823__auto___72547,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_72573.cljs$core$IFn$_invoke$arity$3 ? handler_72573.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_72573.call(null,oref,old,new$));
});})(seq__72238_72549,chunk__72239_72550,count__72240_72551,i__72241_72552,vec__72251_72571,attr_72572,handler_72573,seq__72238_72565__$1,temp__5823__auto___72563__$1,watches_72548,temp__5823__auto___72547,oid,parent,result_chan,odef,obj,oref))
);


var G__72575 = cljs.core.next(seq__72238_72565__$1);
var G__72576 = null;
var G__72577 = (0);
var G__72578 = (0);
seq__72238_72549 = G__72575;
chunk__72239_72550 = G__72576;
count__72240_72551 = G__72577;
i__72241_72552 = G__72578;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq72231){
var G__72232 = cljs.core.first(seq72231);
var seq72231__$1 = cljs.core.next(seq72231);
var G__72233 = cljs.core.first(seq72231__$1);
var seq72231__$2 = cljs.core.next(seq72231__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72232,G__72233,seq72231__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__72259 = arguments.length;
switch (G__72259) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__72256_SHARP_){
var G__72260 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__72256_SHARP_) : node_gen.call(null,p1__72256_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__72260) : shadow.dom.build.call(null,G__72260));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__72270_72582 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__72271_72583 = null;
var count__72272_72584 = (0);
var i__72273_72585 = (0);
while(true){
if((i__72273_72585 < count__72272_72584)){
var obj_72586 = chunk__72271_72583.cljs$core$IIndexed$_nth$arity$2(null,i__72273_72585);
var obj_72587__$1 = shadow.object.get_from_dom(obj_72586);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_72587__$1);


var G__72588 = seq__72270_72582;
var G__72589 = chunk__72271_72583;
var G__72590 = count__72272_72584;
var G__72591 = (i__72273_72585 + (1));
seq__72270_72582 = G__72588;
chunk__72271_72583 = G__72589;
count__72272_72584 = G__72590;
i__72273_72585 = G__72591;
continue;
} else {
var temp__5823__auto___72592 = cljs.core.seq(seq__72270_72582);
if(temp__5823__auto___72592){
var seq__72270_72593__$1 = temp__5823__auto___72592;
if(cljs.core.chunked_seq_QMARK_(seq__72270_72593__$1)){
var c__5521__auto___72594 = cljs.core.chunk_first(seq__72270_72593__$1);
var G__72595 = cljs.core.chunk_rest(seq__72270_72593__$1);
var G__72596 = c__5521__auto___72594;
var G__72597 = cljs.core.count(c__5521__auto___72594);
var G__72598 = (0);
seq__72270_72582 = G__72595;
chunk__72271_72583 = G__72596;
count__72272_72584 = G__72597;
i__72273_72585 = G__72598;
continue;
} else {
var obj_72599 = cljs.core.first(seq__72270_72593__$1);
var obj_72600__$1 = shadow.object.get_from_dom(obj_72599);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_72600__$1);


var G__72601 = cljs.core.next(seq__72270_72593__$1);
var G__72602 = null;
var G__72603 = (0);
var G__72604 = (0);
seq__72270_72582 = G__72601;
chunk__72271_72583 = G__72602;
count__72272_72584 = G__72603;
i__72273_72585 = G__72604;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__72277 = arguments.length;
switch (G__72277) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__72275_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__72275_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__72278){
var vec__72279 = p__72278;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72279,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72279,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__72282_72609 = cljs.core.seq((function (){var G__72287 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__72287) : coll_transform.call(null,G__72287));
})());
var chunk__72283_72610 = null;
var count__72284_72611 = (0);
var i__72285_72612 = (0);
while(true){
if((i__72285_72612 < count__72284_72611)){
var item_72613 = chunk__72283_72610.cljs$core$IIndexed$_nth$arity$2(null,i__72285_72612);
shadow.object.dom_enter(coll_dom,make_item_fn(item_72613));


var G__72614 = seq__72282_72609;
var G__72615 = chunk__72283_72610;
var G__72616 = count__72284_72611;
var G__72617 = (i__72285_72612 + (1));
seq__72282_72609 = G__72614;
chunk__72283_72610 = G__72615;
count__72284_72611 = G__72616;
i__72285_72612 = G__72617;
continue;
} else {
var temp__5823__auto___72618 = cljs.core.seq(seq__72282_72609);
if(temp__5823__auto___72618){
var seq__72282_72619__$1 = temp__5823__auto___72618;
if(cljs.core.chunked_seq_QMARK_(seq__72282_72619__$1)){
var c__5521__auto___72620 = cljs.core.chunk_first(seq__72282_72619__$1);
var G__72621 = cljs.core.chunk_rest(seq__72282_72619__$1);
var G__72622 = c__5521__auto___72620;
var G__72623 = cljs.core.count(c__5521__auto___72620);
var G__72624 = (0);
seq__72282_72609 = G__72621;
chunk__72283_72610 = G__72622;
count__72284_72611 = G__72623;
i__72285_72612 = G__72624;
continue;
} else {
var item_72625 = cljs.core.first(seq__72282_72619__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_72625));


var G__72626 = cljs.core.next(seq__72282_72619__$1);
var G__72627 = null;
var G__72628 = (0);
var G__72629 = (0);
seq__72282_72609 = G__72626;
chunk__72283_72610 = G__72627;
count__72284_72611 = G__72628;
i__72285_72612 = G__72629;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__5086__auto__ = count_new;
var y__5087__auto__ = count_children;
return ((x__5086__auto__ < y__5087__auto__) ? x__5086__auto__ : y__5087__auto__);
})();
var n__5589__auto___72630 = count_children__$1;
var idx_72631 = (0);
while(true){
if((idx_72631 < n__5589__auto___72630)){
var cn_72632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_72631);
var cc_72633 = shadow.object.get_from_dom(cn_72632);
var ckey_72634 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_72633);
var cval_72635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_72633,item_key);
var vec__72288_72636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_72631);
var nkey_72637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72288_72636,(0),null);
var nval_72638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72288_72636,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_72634,nkey_72637)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_72635,nval_72638)))){
} else {
var new_obj_72639 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_72637,nval_72638], null));
shadow.dom.replace_node(cn_72632,new_obj_72639);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_72633);

shadow.object.notify_tree_BANG_(new_obj_72639,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__72640 = (idx_72631 + (1));
idx_72631 = G__72640;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__72291_72641 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__72292_72642 = null;
var count__72293_72643 = (0);
var i__72294_72644 = (0);
while(true){
if((i__72294_72644 < count__72293_72643)){
var item_72645 = chunk__72292_72642.cljs$core$IIndexed$_nth$arity$2(null,i__72294_72644);
shadow.object.dom_enter(coll_dom,make_item_fn(item_72645));


var G__72646 = seq__72291_72641;
var G__72647 = chunk__72292_72642;
var G__72648 = count__72293_72643;
var G__72649 = (i__72294_72644 + (1));
seq__72291_72641 = G__72646;
chunk__72292_72642 = G__72647;
count__72293_72643 = G__72648;
i__72294_72644 = G__72649;
continue;
} else {
var temp__5823__auto___72650 = cljs.core.seq(seq__72291_72641);
if(temp__5823__auto___72650){
var seq__72291_72651__$1 = temp__5823__auto___72650;
if(cljs.core.chunked_seq_QMARK_(seq__72291_72651__$1)){
var c__5521__auto___72652 = cljs.core.chunk_first(seq__72291_72651__$1);
var G__72653 = cljs.core.chunk_rest(seq__72291_72651__$1);
var G__72654 = c__5521__auto___72652;
var G__72655 = cljs.core.count(c__5521__auto___72652);
var G__72656 = (0);
seq__72291_72641 = G__72653;
chunk__72292_72642 = G__72654;
count__72293_72643 = G__72655;
i__72294_72644 = G__72656;
continue;
} else {
var item_72657 = cljs.core.first(seq__72291_72651__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_72657));


var G__72658 = cljs.core.next(seq__72291_72651__$1);
var G__72659 = null;
var G__72660 = (0);
var G__72661 = (0);
seq__72291_72641 = G__72658;
chunk__72292_72642 = G__72659;
count__72293_72643 = G__72660;
i__72294_72644 = G__72661;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4996__auto__ = key;
if(cljs.core.truth_(and__4996__auto__)){
return path;
} else {
return and__4996__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__72296 = "inspect!";
var G__72297 = shadow.object._id(oref);
var G__72298 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__72299 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__72296,G__72297,G__72298,G__72299) : shadow.object.info.call(null,G__72296,G__72297,G__72298,G__72299));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__72304_72665 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__72305_72666 = null;
var count__72306_72667 = (0);
var i__72307_72668 = (0);
while(true){
if((i__72307_72668 < count__72306_72667)){
var vec__72324_72669 = chunk__72305_72666.cljs$core$IIndexed$_nth$arity$2(null,i__72307_72668);
var id_72670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72324_72669,(0),null);
var oref_72671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72324_72669,(1),null);
var G__72327_72672 = "dump";
var G__72328_72673 = id_72670;
var G__72329_72674 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_72671)], 0));
var G__72330_72675 = cljs.core.deref(shadow.object._data(oref_72671));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__72327_72672,G__72328_72673,G__72329_72674,G__72330_72675) : shadow.object.info.call(null,G__72327_72672,G__72328_72673,G__72329_72674,G__72330_72675));


var G__72676 = seq__72304_72665;
var G__72677 = chunk__72305_72666;
var G__72678 = count__72306_72667;
var G__72679 = (i__72307_72668 + (1));
seq__72304_72665 = G__72676;
chunk__72305_72666 = G__72677;
count__72306_72667 = G__72678;
i__72307_72668 = G__72679;
continue;
} else {
var temp__5823__auto___72680 = cljs.core.seq(seq__72304_72665);
if(temp__5823__auto___72680){
var seq__72304_72681__$1 = temp__5823__auto___72680;
if(cljs.core.chunked_seq_QMARK_(seq__72304_72681__$1)){
var c__5521__auto___72682 = cljs.core.chunk_first(seq__72304_72681__$1);
var G__72683 = cljs.core.chunk_rest(seq__72304_72681__$1);
var G__72684 = c__5521__auto___72682;
var G__72685 = cljs.core.count(c__5521__auto___72682);
var G__72686 = (0);
seq__72304_72665 = G__72683;
chunk__72305_72666 = G__72684;
count__72306_72667 = G__72685;
i__72307_72668 = G__72686;
continue;
} else {
var vec__72335_72687 = cljs.core.first(seq__72304_72681__$1);
var id_72688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72335_72687,(0),null);
var oref_72689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72335_72687,(1),null);
var G__72338_72690 = "dump";
var G__72339_72691 = id_72688;
var G__72340_72692 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_72689)], 0));
var G__72341_72693 = cljs.core.deref(shadow.object._data(oref_72689));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__72338_72690,G__72339_72691,G__72340_72692,G__72341_72693) : shadow.object.info.call(null,G__72338_72690,G__72339_72691,G__72340_72692,G__72341_72693));


var G__72694 = cljs.core.next(seq__72304_72681__$1);
var G__72695 = null;
var G__72696 = (0);
var G__72697 = (0);
seq__72304_72665 = G__72694;
chunk__72305_72666 = G__72695;
count__72306_72667 = G__72696;
i__72307_72668 = G__72697;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
