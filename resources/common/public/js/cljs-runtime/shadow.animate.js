goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_72776 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_72776(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_72777 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_72777(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_72778 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_72778(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_72779 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_72779(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_72780 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_72780(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72359){
var vec__72360 = p__72359;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72360,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72360,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4996__auto__ = delay;
if(cljs.core.truth_(and__4996__auto__)){
return (delay > (0));
} else {
return and__4996__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_72784 = (function (animator){
var x__5346__auto__ = (((animator == null))?null:animator);
var m__5347__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5347__auto__.call(null,animator));
} else {
var m__5345__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5345__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_72784(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_72785 = (function (animator){
var x__5346__auto__ = (((animator == null))?null:animator);
var m__5347__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5347__auto__.call(null,animator));
} else {
var m__5345__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5345__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_72785(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_72786 = (function (animator){
var x__5346__auto__ = (((animator == null))?null:animator);
var m__5347__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5347__auto__.call(null,animator));
} else {
var m__5345__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5345__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_72786(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_72787 = (function (animator){
var x__5346__auto__ = (((animator == null))?null:animator);
var m__5347__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5347__auto__.call(null,animator));
} else {
var m__5345__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5345__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_72787(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5589__auto__ = self__.items.length;
var i__67762__auto__ = (0);
while(true){
if((i__67762__auto__ < n__5589__auto__)){
var map__72416_72790 = (self__.items[i__67762__auto__]);
var map__72416_72791__$1 = cljs.core.__destructure_map(map__72416_72790);
var el_72792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72416_72791__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_72793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72416_72791__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_72792,from_72793);

var G__72794 = (i__67762__auto__ + (1));
i__67762__auto__ = G__72794;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5589__auto__ = self__.items.length;
var i__67762__auto__ = (0);
while(true){
if((i__67762__auto__ < n__5589__auto__)){
var map__72417_72795 = (self__.items[i__67762__auto__]);
var map__72417_72796__$1 = cljs.core.__destructure_map(map__72417_72795);
var el_72797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72417_72796__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_72798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72417_72796__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_72799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72417_72796__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_72798["transition"] = transition_72799);

goog.style.setStyle(el_72797,to_72798);

var G__72802 = (i__67762__auto__ + (1));
i__67762__auto__ = G__72802;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5589__auto__ = self__.items.length;
var i__67762__auto__ = (0);
while(true){
if((i__67762__auto__ < n__5589__auto__)){
var map__72419_72803 = (self__.items[i__67762__auto__]);
var map__72419_72804__$1 = cljs.core.__destructure_map(map__72419_72803);
var el_72805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72419_72804__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_72806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72419_72804__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_72806["transition"] = null);

goog.style.setStyle(el_72805,toggles_72806);

var G__72807 = (i__67762__auto__ + (1));
i__67762__auto__ = G__72807;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k72425,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__72439 = k72425;
var G__72439__$1 = (((G__72439 instanceof cljs.core.Keyword))?G__72439.fqn:null);
switch (G__72439__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72425,else__5299__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__72445){
var vec__72446 = p__72445;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72446,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72446,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72424){
var self__ = this;
var G__72424__$1 = this;
return (new cljs.core.RecordIter((0),G__72424__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72426,other72427){
var self__ = this;
var this72426__$1 = this;
return (((!((other72427 == null)))) && ((((this72426__$1.constructor === other72427.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72426__$1.el,other72427.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72426__$1.from,other72427.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72426__$1.to,other72427.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72426__$1.toggles,other72427.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72426__$1.transition,other72427.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72426__$1.__extmap,other72427.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k72425){
var self__ = this;
var this__5303__auto____$1 = this;
var G__72459 = k72425;
var G__72459__$1 = (((G__72459 instanceof cljs.core.Keyword))?G__72459.fqn:null);
switch (G__72459__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72425);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__72424){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__72464 = cljs.core.keyword_identical_QMARK_;
var expr__72465 = k__5305__auto__;
if(cljs.core.truth_((pred__72464.cljs$core$IFn$_invoke$arity$2 ? pred__72464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__72465) : pred__72464.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__72465)))){
return (new shadow.animate.AnimationStep(G__72424,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72464.cljs$core$IFn$_invoke$arity$2 ? pred__72464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__72465) : pred__72464.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__72465)))){
return (new shadow.animate.AnimationStep(self__.el,G__72424,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72464.cljs$core$IFn$_invoke$arity$2 ? pred__72464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__72465) : pred__72464.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__72465)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__72424,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72464.cljs$core$IFn$_invoke$arity$2 ? pred__72464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__72465) : pred__72464.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__72465)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__72424,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72464.cljs$core$IFn$_invoke$arity$2 ? pred__72464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__72465) : pred__72464.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__72465)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__72424,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__72424),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__72424){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__72424,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__72428){
var extmap__5338__auto__ = (function (){var G__72469 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72428,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__72428)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72469);
} else {
return G__72469;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__72428),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__72428),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__72428),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__72428),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__72428),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5476__auto__ = (function shadow$animate$setup_$_iter__72470(s__72471){
return (new cljs.core.LazySeq(null,(function (){
var s__72471__$1 = s__72471;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__72471__$1);
if(temp__5823__auto__){
var s__72471__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72471__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__72471__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__72473 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__72472 = (0);
while(true){
if((i__72472 < size__5475__auto__)){
var vec__72486 = cljs.core._nth(c__5474__auto__,i__72472);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72486,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72486,(1),null);
cljs.core.chunk_append(b__72473,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__72839 = (i__72472 + (1));
i__72472 = G__72839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72473),shadow$animate$setup_$_iter__72470(cljs.core.chunk_rest(s__72471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72473),null);
}
} else {
var vec__72517 = cljs.core.first(s__72471__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72517,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72517,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__72470(cljs.core.rest(s__72471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__67942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67943__auto__ = (function (){var switch__67712__auto__ = (function (state_72538){
var state_val_72539 = (state_72538[(1)]);
if((state_val_72539 === (1))){
var inst_72532 = shadow.animate.get_duration(animator);
var inst_72533 = cljs.core.async.timeout(inst_72532);
var state_72538__$1 = state_72538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72538__$1,(2),inst_72533);
} else {
if((state_val_72539 === (2))){
var inst_72535 = (state_72538[(2)]);
var inst_72536 = shadow.animate.finish_BANG_(animator);
var state_72538__$1 = (function (){var statearr_72545 = state_72538;
(statearr_72545[(7)] = inst_72536);

(statearr_72545[(8)] = inst_72535);

return statearr_72545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72538__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__67713__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__67713__auto____0 = (function (){
var statearr_72553 = [null,null,null,null,null,null,null,null,null];
(statearr_72553[(0)] = shadow$animate$continue_BANG__$_state_machine__67713__auto__);

(statearr_72553[(1)] = (1));

return statearr_72553;
});
var shadow$animate$continue_BANG__$_state_machine__67713__auto____1 = (function (state_72538){
while(true){
var ret_value__67714__auto__ = (function (){try{while(true){
var result__67715__auto__ = switch__67712__auto__(state_72538);
if(cljs.core.keyword_identical_QMARK_(result__67715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67715__auto__;
}
break;
}
}catch (e72557){var ex__67716__auto__ = e72557;
var statearr_72558_72849 = state_72538;
(statearr_72558_72849[(2)] = ex__67716__auto__);


if(cljs.core.seq((state_72538[(4)]))){
var statearr_72564_72850 = state_72538;
(statearr_72564_72850[(1)] = cljs.core.first((state_72538[(4)])));

} else {
throw ex__67716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72851 = state_72538;
state_72538 = G__72851;
continue;
} else {
return ret_value__67714__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__67713__auto__ = function(state_72538){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__67713__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__67713__auto____1.call(this,state_72538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__67713__auto____0;
shadow$animate$continue_BANG__$_state_machine__67713__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__67713__auto____1;
return shadow$animate$continue_BANG__$_state_machine__67713__auto__;
})()
})();
var state__67944__auto__ = (function (){var statearr_72574 = f__67943__auto__();
(statearr_72574[(6)] = c__67942__auto__);

return statearr_72574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67944__auto__);
}));

return c__67942__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate72606 = (function (attr,from,to,timing,delay,meta72607){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta72607 = meta72607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate72606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72608,meta72607__$1){
var self__ = this;
var _72608__$1 = this;
return (new shadow.animate.t_shadow$animate72606(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta72607__$1));
}));

(shadow.animate.t_shadow$animate72606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72608){
var self__ = this;
var _72608__$1 = this;
return self__.meta72607;
}));

(shadow.animate.t_shadow$animate72606.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate72606.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate72606.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate72606.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72606.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate72606.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate72606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta72607","meta72607",-209682043,null)], null);
}));

(shadow.animate.t_shadow$animate72606.cljs$lang$type = true);

(shadow.animate.t_shadow$animate72606.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate72606");

(shadow.animate.t_shadow$animate72606.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/t_shadow$animate72606");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate72606.
 */
shadow.animate.__GT_t_shadow$animate72606 = (function shadow$animate$__GT_t_shadow$animate72606(attr,from,to,timing,delay,meta72607){
return (new shadow.animate.t_shadow$animate72606(attr,from,to,timing,delay,meta72607));
});


/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__72581 = arguments.length;
switch (G__72581) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
return (new shadow.animate.t_shadow$animate72606(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate72662 = (function (attr,from,to,meta72663){
this.attr = attr;
this.from = from;
this.to = to;
this.meta72663 = meta72663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate72662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72664,meta72663__$1){
var self__ = this;
var _72664__$1 = this;
return (new shadow.animate.t_shadow$animate72662(self__.attr,self__.from,self__.to,meta72663__$1));
}));

(shadow.animate.t_shadow$animate72662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72664){
var self__ = this;
var _72664__$1 = this;
return self__.meta72663;
}));

(shadow.animate.t_shadow$animate72662.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate72662.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72662.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate72662.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate72662.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72662.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta72663","meta72663",-434485146,null)], null);
}));

(shadow.animate.t_shadow$animate72662.cljs$lang$type = true);

(shadow.animate.t_shadow$animate72662.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate72662");

(shadow.animate.t_shadow$animate72662.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/t_shadow$animate72662");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate72662.
 */
shadow.animate.__GT_t_shadow$animate72662 = (function shadow$animate$__GT_t_shadow$animate72662(attr,from,to,meta72663){
return (new shadow.animate.t_shadow$animate72662(attr,from,to,meta72663));
});


shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
return (new shadow.animate.t_shadow$animate72662(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate72704 = (function (attrs,meta72705){
this.attrs = attrs;
this.meta72705 = meta72705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate72704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72706,meta72705__$1){
var self__ = this;
var _72706__$1 = this;
return (new shadow.animate.t_shadow$animate72704(self__.attrs,meta72705__$1));
}));

(shadow.animate.t_shadow$animate72704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72706){
var self__ = this;
var _72706__$1 = this;
return self__.meta72705;
}));

(shadow.animate.t_shadow$animate72704.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate72704.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72704.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate72704.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72704.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72704.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta72705","meta72705",-870141536,null)], null);
}));

(shadow.animate.t_shadow$animate72704.cljs$lang$type = true);

(shadow.animate.t_shadow$animate72704.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate72704");

(shadow.animate.t_shadow$animate72704.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/t_shadow$animate72704");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate72704.
 */
shadow.animate.__GT_t_shadow$animate72704 = (function shadow$animate$__GT_t_shadow$animate72704(attrs,meta72705){
return (new shadow.animate.t_shadow$animate72704(attrs,meta72705));
});


/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__72703 = arguments.length;
switch (G__72703) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
return (new shadow.animate.t_shadow$animate72704(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate72708 = (function (attr,meta72709){
this.attr = attr;
this.meta72709 = meta72709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate72708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72710,meta72709__$1){
var self__ = this;
var _72710__$1 = this;
return (new shadow.animate.t_shadow$animate72708(self__.attr,meta72709__$1));
}));

(shadow.animate.t_shadow$animate72708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72710){
var self__ = this;
var _72710__$1 = this;
return self__.meta72709;
}));

(shadow.animate.t_shadow$animate72708.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate72708.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72708.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72708.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate72708.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72708.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta72709","meta72709",1642963824,null)], null);
}));

(shadow.animate.t_shadow$animate72708.cljs$lang$type = true);

(shadow.animate.t_shadow$animate72708.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate72708");

(shadow.animate.t_shadow$animate72708.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/t_shadow$animate72708");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate72708.
 */
shadow.animate.__GT_t_shadow$animate72708 = (function shadow$animate$__GT_t_shadow$animate72708(attr,meta72709){
return (new shadow.animate.t_shadow$animate72708(attr,meta72709));
});


/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
return (new shadow.animate.t_shadow$animate72708(attr,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate72718 = (function (transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta72719){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5821__auto__ = temp__5821__auto__;
this.meta72719 = meta72719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate72718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72720,meta72719__$1){
var self__ = this;
var _72720__$1 = this;
return (new shadow.animate.t_shadow$animate72718(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5821__auto__,meta72719__$1));
}));

(shadow.animate.t_shadow$animate72718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72720){
var self__ = this;
var _72720__$1 = this;
return self__.meta72719;
}));

(shadow.animate.t_shadow$animate72718.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate72718.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate72718.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate72718.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate72718.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate72718.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate72718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5821__auto__","temp__5821__auto__",-711172737,null),new cljs.core.Symbol(null,"meta72719","meta72719",1080926237,null)], null);
}));

(shadow.animate.t_shadow$animate72718.cljs$lang$type = true);

(shadow.animate.t_shadow$animate72718.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate72718");

(shadow.animate.t_shadow$animate72718.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/t_shadow$animate72718");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate72718.
 */
shadow.animate.__GT_t_shadow$animate72718 = (function shadow$animate$__GT_t_shadow$animate72718(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta72719){
return (new shadow.animate.t_shadow$animate72718(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta72719));
});



/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate72732 = (function (transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta72733){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5821__auto__ = temp__5821__auto__;
this.meta72733 = meta72733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate72732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72734,meta72733__$1){
var self__ = this;
var _72734__$1 = this;
return (new shadow.animate.t_shadow$animate72732(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5821__auto__,meta72733__$1));
}));

(shadow.animate.t_shadow$animate72732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72734){
var self__ = this;
var _72734__$1 = this;
return self__.meta72733;
}));

(shadow.animate.t_shadow$animate72732.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate72732.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate72732.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate72732.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate72732.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate72732.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate72732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5821__auto__","temp__5821__auto__",-711172737,null),new cljs.core.Symbol(null,"meta72733","meta72733",184452007,null)], null);
}));

(shadow.animate.t_shadow$animate72732.cljs$lang$type = true);

(shadow.animate.t_shadow$animate72732.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate72732");

(shadow.animate.t_shadow$animate72732.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/t_shadow$animate72732");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate72732.
 */
shadow.animate.__GT_t_shadow$animate72732 = (function shadow$animate$__GT_t_shadow$animate72732(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta72733){
return (new shadow.animate.t_shadow$animate72732(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta72733));
});


shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5728__auto__ = [];
var len__5722__auto___72880 = arguments.length;
var i__5723__auto___72881 = (0);
while(true){
if((i__5723__auto___72881 < len__5722__auto___72880)){
args__5728__auto__.push((arguments[i__5723__auto___72881]));

var G__72882 = (i__5723__auto___72881 + (1));
i__5723__auto___72881 = G__72882;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5821__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var adef = temp__5821__auto__;
var G__72884 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__72885 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__72886 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__72887 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__72888 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__72889 = cljs.core.rest(transitions__$1);
to = G__72884;
from = G__72885;
toggles = G__72886;
timings = G__72887;
delays = G__72888;
transitions__$1 = G__72889;
continue;
} else {
return (new shadow.animate.t_shadow$animate72732(transitions__$1,to,from,toggles,timings,delays,temp__5821__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq72717){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72717));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__72745 = arguments.length;
switch (G__72745) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__72747 = arguments.length;
switch (G__72747) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate72751 = (function (from,to,timing,delay,meta72752){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta72752 = meta72752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate72751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72753,meta72752__$1){
var self__ = this;
var _72753__$1 = this;
return (new shadow.animate.t_shadow$animate72751(self__.from,self__.to,self__.timing,self__.delay,meta72752__$1));
}));

(shadow.animate.t_shadow$animate72751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72753){
var self__ = this;
var _72753__$1 = this;
return self__.meta72752;
}));

(shadow.animate.t_shadow$animate72751.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate72751.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate72751.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate72751.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate72751.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72751.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate72751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta72752","meta72752",-790261433,null)], null);
}));

(shadow.animate.t_shadow$animate72751.cljs$lang$type = true);

(shadow.animate.t_shadow$animate72751.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate72751");

(shadow.animate.t_shadow$animate72751.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/t_shadow$animate72751");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate72751.
 */
shadow.animate.__GT_t_shadow$animate72751 = (function shadow$animate$__GT_t_shadow$animate72751(from,to,timing,delay,meta72752){
return (new shadow.animate.t_shadow$animate72751(from,to,timing,delay,meta72752));
});


shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__72749 = arguments.length;
switch (G__72749) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate72751(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate72760 = (function (from,to,timing,delay,meta72761){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta72761 = meta72761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate72760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72762,meta72761__$1){
var self__ = this;
var _72762__$1 = this;
return (new shadow.animate.t_shadow$animate72760(self__.from,self__.to,self__.timing,self__.delay,meta72761__$1));
}));

(shadow.animate.t_shadow$animate72760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72762){
var self__ = this;
var _72762__$1 = this;
return self__.meta72761;
}));

(shadow.animate.t_shadow$animate72760.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate72760.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate72760.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate72760.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate72760.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate72760.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate72760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta72761","meta72761",-650034711,null)], null);
}));

(shadow.animate.t_shadow$animate72760.cljs$lang$type = true);

(shadow.animate.t_shadow$animate72760.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate72760");

(shadow.animate.t_shadow$animate72760.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.animate/t_shadow$animate72760");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate72760.
 */
shadow.animate.__GT_t_shadow$animate72760 = (function shadow$animate$__GT_t_shadow$animate72760(from,to,timing,delay,meta72761){
return (new shadow.animate.t_shadow$animate72760(from,to,timing,delay,meta72761));
});


shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__72759 = arguments.length;
switch (G__72759) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate72760(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
