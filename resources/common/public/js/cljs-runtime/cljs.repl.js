goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70722){
var map__70723 = p__70722;
var map__70723__$1 = cljs.core.__destructure_map(map__70723);
var m = map__70723__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70723__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4998__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70731_71071 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70732_71072 = null;
var count__70733_71073 = (0);
var i__70734_71074 = (0);
while(true){
if((i__70734_71074 < count__70733_71073)){
var f_71075 = chunk__70732_71072.cljs$core$IIndexed$_nth$arity$2(null,i__70734_71074);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_71075], 0));


var G__71077 = seq__70731_71071;
var G__71078 = chunk__70732_71072;
var G__71079 = count__70733_71073;
var G__71080 = (i__70734_71074 + (1));
seq__70731_71071 = G__71077;
chunk__70732_71072 = G__71078;
count__70733_71073 = G__71079;
i__70734_71074 = G__71080;
continue;
} else {
var temp__5823__auto___71081 = cljs.core.seq(seq__70731_71071);
if(temp__5823__auto___71081){
var seq__70731_71082__$1 = temp__5823__auto___71081;
if(cljs.core.chunked_seq_QMARK_(seq__70731_71082__$1)){
var c__5521__auto___71083 = cljs.core.chunk_first(seq__70731_71082__$1);
var G__71084 = cljs.core.chunk_rest(seq__70731_71082__$1);
var G__71085 = c__5521__auto___71083;
var G__71086 = cljs.core.count(c__5521__auto___71083);
var G__71087 = (0);
seq__70731_71071 = G__71084;
chunk__70732_71072 = G__71085;
count__70733_71073 = G__71086;
i__70734_71074 = G__71087;
continue;
} else {
var f_71088 = cljs.core.first(seq__70731_71082__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_71088], 0));


var G__71089 = cljs.core.next(seq__70731_71082__$1);
var G__71090 = null;
var G__71091 = (0);
var G__71092 = (0);
seq__70731_71071 = G__71089;
chunk__70732_71072 = G__71090;
count__70733_71073 = G__71091;
i__70734_71074 = G__71092;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_71093 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4998__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_71093], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_71093)))?cljs.core.second(arglists_71093):arglists_71093)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70750_71099 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70751_71100 = null;
var count__70752_71101 = (0);
var i__70753_71102 = (0);
while(true){
if((i__70753_71102 < count__70752_71101)){
var vec__70783_71103 = chunk__70751_71100.cljs$core$IIndexed$_nth$arity$2(null,i__70753_71102);
var name_71104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70783_71103,(0),null);
var map__70786_71105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70783_71103,(1),null);
var map__70786_71106__$1 = cljs.core.__destructure_map(map__70786_71105);
var doc_71107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70786_71106__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_71108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70786_71106__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_71104], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_71108], 0));

if(cljs.core.truth_(doc_71107)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_71107], 0));
} else {
}


var G__71110 = seq__70750_71099;
var G__71111 = chunk__70751_71100;
var G__71112 = count__70752_71101;
var G__71113 = (i__70753_71102 + (1));
seq__70750_71099 = G__71110;
chunk__70751_71100 = G__71111;
count__70752_71101 = G__71112;
i__70753_71102 = G__71113;
continue;
} else {
var temp__5823__auto___71114 = cljs.core.seq(seq__70750_71099);
if(temp__5823__auto___71114){
var seq__70750_71116__$1 = temp__5823__auto___71114;
if(cljs.core.chunked_seq_QMARK_(seq__70750_71116__$1)){
var c__5521__auto___71117 = cljs.core.chunk_first(seq__70750_71116__$1);
var G__71119 = cljs.core.chunk_rest(seq__70750_71116__$1);
var G__71120 = c__5521__auto___71117;
var G__71121 = cljs.core.count(c__5521__auto___71117);
var G__71122 = (0);
seq__70750_71099 = G__71119;
chunk__70751_71100 = G__71120;
count__70752_71101 = G__71121;
i__70753_71102 = G__71122;
continue;
} else {
var vec__70793_71123 = cljs.core.first(seq__70750_71116__$1);
var name_71124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70793_71123,(0),null);
var map__70796_71125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70793_71123,(1),null);
var map__70796_71126__$1 = cljs.core.__destructure_map(map__70796_71125);
var doc_71127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70796_71126__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_71128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70796_71126__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_71124], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_71128], 0));

if(cljs.core.truth_(doc_71127)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_71127], 0));
} else {
}


var G__71131 = cljs.core.next(seq__70750_71116__$1);
var G__71132 = null;
var G__71133 = (0);
var G__71134 = (0);
seq__70750_71099 = G__71131;
chunk__70751_71100 = G__71132;
count__70752_71101 = G__71133;
i__70753_71102 = G__71134;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__70818 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70819 = null;
var count__70820 = (0);
var i__70821 = (0);
while(true){
if((i__70821 < count__70820)){
var role = chunk__70819.cljs$core$IIndexed$_nth$arity$2(null,i__70821);
var temp__5823__auto___71138__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___71138__$1)){
var spec_71139 = temp__5823__auto___71138__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_71139)], 0));
} else {
}


var G__71141 = seq__70818;
var G__71142 = chunk__70819;
var G__71143 = count__70820;
var G__71144 = (i__70821 + (1));
seq__70818 = G__71141;
chunk__70819 = G__71142;
count__70820 = G__71143;
i__70821 = G__71144;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__70818);
if(temp__5823__auto____$1){
var seq__70818__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__70818__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__70818__$1);
var G__71146 = cljs.core.chunk_rest(seq__70818__$1);
var G__71147 = c__5521__auto__;
var G__71148 = cljs.core.count(c__5521__auto__);
var G__71149 = (0);
seq__70818 = G__71146;
chunk__70819 = G__71147;
count__70820 = G__71148;
i__70821 = G__71149;
continue;
} else {
var role = cljs.core.first(seq__70818__$1);
var temp__5823__auto___71152__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___71152__$2)){
var spec_71153 = temp__5823__auto___71152__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_71153)], 0));
} else {
}


var G__71154 = cljs.core.next(seq__70818__$1);
var G__71155 = null;
var G__71156 = (0);
var G__71157 = (0);
seq__70818 = G__71154;
chunk__70819 = G__71155;
count__70820 = G__71156;
i__70821 = G__71157;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__70943 = datafied_throwable;
var map__70943__$1 = cljs.core.__destructure_map(map__70943);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70943__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70943__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70943__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__70945 = cljs.core.last(via);
var map__70945__$1 = cljs.core.__destructure_map(map__70945);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70945__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70945__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70945__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__70946 = data;
var map__70946__$1 = cljs.core.__destructure_map(map__70946);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70946__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70946__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70946__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__70947 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__70947__$1 = cljs.core.__destructure_map(map__70947);
var top_data = map__70947__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__70950 = phase;
var G__70950__$1 = (((G__70950 instanceof cljs.core.Keyword))?G__70950.fqn:null);
switch (G__70950__$1) {
case "read-source":
var map__70952 = data;
var map__70952__$1 = cljs.core.__destructure_map(map__70952);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70952__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70952__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__70953 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__70953__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70953,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70953);
var G__70953__$2 = (cljs.core.truth_((function (){var fexpr__70955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70955.cljs$core$IFn$_invoke$arity$1 ? fexpr__70955.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70955.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70953__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70953__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70953__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__70963 = top_data;
var G__70963__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70963,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70963);
var G__70963__$2 = (cljs.core.truth_((function (){var fexpr__70964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70964.cljs$core$IFn$_invoke$arity$1 ? fexpr__70964.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70964.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70963__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70963__$1);
var G__70963__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70963__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70963__$2);
var G__70963__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70963__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70963__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70963__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70963__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__70966 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70966,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70966,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70966,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70966,(3),null);
var G__70971 = top_data;
var G__70971__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70971,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__70971);
var G__70971__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70971__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__70971__$1);
var G__70971__$3 = (cljs.core.truth_((function (){var and__4996__auto__ = source__$1;
if(cljs.core.truth_(and__4996__auto__)){
return method;
} else {
return and__4996__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70971__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__70971__$2);
var G__70971__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70971__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70971__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70971__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70971__$4;
}

break;
case "execution":
var vec__70973 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70973,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70973,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70973,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70973,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70939_SHARP_){
var or__4998__auto__ = (p1__70939_SHARP_ == null);
if(or__4998__auto__){
return or__4998__auto__;
} else {
var fexpr__70977 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70977.cljs$core$IFn$_invoke$arity$1 ? fexpr__70977.cljs$core$IFn$_invoke$arity$1(p1__70939_SHARP_) : fexpr__70977.call(null,p1__70939_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4998__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return line;
}
})();
var G__70978 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__70978__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70978,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__70978);
var G__70978__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70978__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70978__$1);
var G__70978__$3 = (cljs.core.truth_((function (){var or__4998__auto__ = fn;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var and__4996__auto__ = source__$1;
if(cljs.core.truth_(and__4996__auto__)){
return method;
} else {
return and__4996__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70978__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4998__auto__ = fn;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__70978__$2);
var G__70978__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70978__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__70978__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70978__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70978__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70950__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__70990){
var map__70992 = p__70990;
var map__70992__$1 = cljs.core.__destructure_map(map__70992);
var triage_data = map__70992__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4998__auto__ = source;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4998__auto__ = line;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4998__auto__ = class$;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__71005 = phase;
var G__71005__$1 = (((G__71005 instanceof cljs.core.Keyword))?G__71005.fqn:null);
switch (G__71005__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__71008 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__71009 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71010 = loc;
var G__71011 = (cljs.core.truth_(spec)?(function (){var sb__5643__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__71017_71225 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__71018_71226 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__71019_71227 = true;
var _STAR_print_fn_STAR__temp_val__71020_71228 = (function (x__5644__auto__){
return sb__5643__auto__.append(x__5644__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__71019_71227);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__71020_71228);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70981_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70981_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__71018_71226);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__71017_71225);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5643__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__71008,G__71009,G__71010,G__71011) : format.call(null,G__71008,G__71009,G__71010,G__71011));

break;
case "macroexpansion":
var G__71024 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__71025 = cause_type;
var G__71026 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71027 = loc;
var G__71028 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__71024,G__71025,G__71026,G__71027,G__71028) : format.call(null,G__71024,G__71025,G__71026,G__71027,G__71028));

break;
case "compile-syntax-check":
var G__71030 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__71031 = cause_type;
var G__71032 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71033 = loc;
var G__71034 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__71030,G__71031,G__71032,G__71033,G__71034) : format.call(null,G__71030,G__71031,G__71032,G__71033,G__71034));

break;
case "compilation":
var G__71036 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__71037 = cause_type;
var G__71038 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71039 = loc;
var G__71040 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__71036,G__71037,G__71038,G__71039,G__71040) : format.call(null,G__71036,G__71037,G__71038,G__71039,G__71040));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__71041 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__71042 = symbol;
var G__71043 = loc;
var G__71044 = (function (){var sb__5643__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__71047_71237 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__71048_71238 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__71049_71239 = true;
var _STAR_print_fn_STAR__temp_val__71050_71240 = (function (x__5644__auto__){
return sb__5643__auto__.append(x__5644__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__71049_71239);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__71050_71240);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70983_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70983_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__71048_71238);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__71047_71237);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5643__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__71041,G__71042,G__71043,G__71044) : format.call(null,G__71041,G__71042,G__71043,G__71044));
} else {
var G__71056 = "Execution error%s at %s(%s).\n%s\n";
var G__71057 = cause_type;
var G__71058 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71059 = loc;
var G__71060 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__71056,G__71057,G__71058,G__71059,G__71060) : format.call(null,G__71056,G__71057,G__71058,G__71059,G__71060));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71005__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
