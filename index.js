/*
 React v16.0.0
 react.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
'use strict';function y(){function q(){}function n(a,b,c,d,e,f,g){return{$$typeof:J,type:a,key:b,ref:c,props:g,_owner:f}}function z(a){for(var b=arguments.length-1,c="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,d=0;d<b;d++)c+="\x26args[]\x3d"+encodeURIComponent(arguments[d+1]);b=Error(c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=
1;throw b;}function r(a,b,c){this.props=a;this.context=b;this.refs=A;this.updater=c||B}function C(a,b,c){this.props=a;this.context=b;this.refs=A;this.updater=c||B}function D(){}function E(a,b,c){this.props=a;this.context=b;this.refs=A;this.updater=c||B}function v(a){return function(){return a}}function R(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function K(a,b,c,d){if(w.length){var e=w.pop();e.result=a;e.keyPrefix=b;e.func=c;e.context=d;e.count=
0;return e}return{result:a,keyPrefix:b,func:c,context:d,count:0}}function L(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>w.length&&w.push(a)}function u(a,b,c,d){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;if(null===a||"string"===e||"number"===e||"object"===e&&a.$$typeof===S)return c(d,a,""===b?"."+F(a,0):b),1;var f=0;b=""===b?".":b+":";if(Array.isArray(a))for(var g=0;g<a.length;g++){e=a[g];var h=b+F(e,g);f+=u(e,h,c,d)}else if(h=M&&a[M]||a["@@iterator"],"function"===
typeof h)for(a=h.call(a),g=0;!(e=a.next()).done;)e=e.value,h=b+F(e,g++),f+=u(e,h,c,d);else"object"===e&&(c=""+a,z("31","[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return f}function F(a,b){return"object"===typeof a&&null!==a&&null!=a.key?R(a.key):b.toString(36)}function T(a,b){a.func.call(a.context,b,a.count++)}function U(a,b,c){var d=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?G(a,d,c,H.thatReturnsArgument):null!=a&&(t.isValidElement(a)&&
(a=t.cloneAndReplaceKey(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(N,"$\x26/")+"/")+c)),d.push(a))}function G(a,b,c,d,e){var f="";null!=c&&(f=(""+c).replace(N,"$\x26/")+"/");b=K(b,f,d,e);null==a||u(a,"",U,b);L(b)}var O=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,x=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+String.fromCharCode(a)]=
a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},c)).join("")?!1:!0}catch(d){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var c=Object(a);for(var d,e=1;e<arguments.length;e++){var f=Object(arguments[e]);for(var g in f)V.call(f,
g)&&(c[g]=f[g]);if(O){d=O(f);for(var h=0;h<d.length;h++)W.call(f,d[h])&&(c[d[h]]=f[d[h]])}}return c},B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A={};r.prototype.isReactComponent={};r.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?z("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};r.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
D.prototype=r.prototype;var k=C.prototype=new D;k.constructor=C;x(k,r.prototype);k.isPureReactComponent=!0;k=E.prototype=new D;k.constructor=E;x(k,r.prototype);k.unstable_isAsyncReactComponent=!0;k.render=function(){return this.props.children};var I={current:null},P=Object.prototype.hasOwnProperty,J="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,Q={key:!0,ref:!0,__self:!0,__source:!0};n.createElement=function(a,b,c){var d,e={},f=null,g=null,h=null,k=null;if(null!=
b)for(d in void 0!==b.ref&&(g=b.ref),void 0!==b.key&&(f=""+b.key),h=void 0===b.__self?null:b.__self,k=void 0===b.__source?null:b.__source,b)P.call(b,d)&&!Q.hasOwnProperty(d)&&(e[d]=b[d]);var m=arguments.length-2;if(1===m)e.children=c;else if(1<m){for(var l=Array(m),p=0;p<m;p++)l[p]=arguments[p+2];e.children=l}if(a&&a.defaultProps)for(d in m=a.defaultProps,m)void 0===e[d]&&(e[d]=m[d]);return n(a,f,g,h,k,I.current,e)};n.createFactory=function(a){var b=n.createElement.bind(null,a);b.type=a;return b};
n.cloneAndReplaceKey=function(a,b){return n(a.type,b,a.ref,a._self,a._source,a._owner,a.props)};n.cloneElement=function(a,b,c){var d=x({},a.props),e=a.key,f=a.ref,g=a._self,h=a._source,k=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,k=I.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var m=a.type.defaultProps;for(l in b)P.call(b,l)&&!Q.hasOwnProperty(l)&&(d[l]=void 0===b[l]&&void 0!==m?m[l]:b[l])}var l=arguments.length-2;if(1===l)d.children=c;else if(1<l){m=Array(l);for(var p=
0;p<l;p++)m[p]=arguments[p+2];d.children=m}return n(a.type,e,f,g,h,k,d)};n.isValidElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===J};var t=n;q.thatReturns=v;q.thatReturnsFalse=v(!1);q.thatReturnsTrue=v(!0);q.thatReturnsNull=v(null);q.thatReturnsThis=function(){return this};q.thatReturnsArgument=function(a){return a};var H=q,M="function"===typeof Symbol&&Symbol.iterator,S="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,N=/\/+/g,w=[];return{Children:{map:function(a,
b,c){if(null==a)return a;var d=[];G(a,d,null,b,c);return d},forEach:function(a,b,c){if(null==a)return a;b=K(null,null,b,c);null==a||u(a,"",T,b);L(b)},count:function(a){return null==a?0:u(a,"",H.thatReturnsNull,null)},toArray:function(a){var b=[];G(a,b,null,H.thatReturnsArgument);return b},only:function(a){t.isValidElement(a)?void 0:z("143");return a}},Component:r,PureComponent:C,unstable_AsyncComponent:E,createElement:t.createElement,cloneElement:t.cloneElement,isValidElement:t.isValidElement,createFactory:t.createFactory,
version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,assign:x}}}"object"===typeof exports&&"undefined"!==typeof module?module.exports=y():"function"===typeof define&&define.amd?define(y):this.React=y();

/*
 React v16.0.0
 react-dom.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';function Nb(Za){function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Sc(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function Me(a){return a[1].toUpperCase()}function $a(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;return 32<=a||13===a?a:0}function Pb(){return Ne}function Tc(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Oe[a.type]:"textarea"===b?!0:!1}function ab(a){if(null==
a)return null;if(1===a.nodeType)return a;var b=fa.get(a);if(b)return"number"===typeof b.tag?Uc(b):Vc(b);"function"===typeof a.render?m("188"):m("213",Object.keys(a))}function Vc(){m("212")}function Uc(){m("211")}function Qb(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Wc(a){var b=(a?a.ownerDocument||a:document).defaultView||window;return!!(a&&("function"===typeof b.Node?a instanceof
b.Node:"object"===typeof a&&"number"===typeof a.nodeType&&"string"===typeof a.nodeName))&&3==a.nodeType}function Xc(){!Rb&&z&&(Rb="textContent"in document.documentElement?"textContent":"innerText");return Rb}function Yc(a,b){var c=Zc(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Zc(c)}}function $c(){m("196")}function Pe(a){function b(){for(;null!==w&&0===w.current.pendingWorkPriority;){w.isScheduled=
!1;var a=w.nextScheduledRoot;w.nextScheduledRoot=null;if(w===I)return I=w=null,y=0,null;w=a}a=w;for(var b=null,c=0;null!==a;)0!==a.current.pendingWorkPriority&&(0===c||c>a.current.pendingWorkPriority)&&(c=a.current.pendingWorkPriority,b=a),a=a.nextScheduledRoot;if(null!==b){for(y=c;-1<da;)bb[da]=null,da--;cb=ba;ca.current=ba;S.current=!1;p();D=ad(b.current,c);b!==V&&(U=0,V=b)}else y=0,V=D=null}function c(c){X=!0;q=null;var d=c.stateNode;d.current===c?m("177"):void 0;1!==y&&2!==y||U++;db.current=null;
if(1<c.effectTag)if(null!==c.lastEffect){c.lastEffect.nextEffect=c;var p=c.firstEffect}else p=c;else p=c.firstEffect;N();for(u=p;null!==u;){var n=!1,e=void 0;try{for(;null!==u;){var f=u.effectTag;f&16&&a.resetTextContent(u.stateNode);if(f&128){var g=u.alternate;null!==g&&t(g)}switch(f&-242){case 2:E(u);u.effectTag&=-3;break;case 6:E(u);u.effectTag&=-3;bd(u.alternate,u);break;case 4:bd(u.alternate,u);break;case 8:Y=!0,Qe(u),Y=!1}u=u.nextEffect}}catch(Sb){n=!0,e=Sb}n&&(null===u?m("178"):void 0,T(u,
e),null!==u&&(u=u.nextEffect))}O();d.current=c;for(u=p;null!==u;){d=!1;p=void 0;try{for(;null!==u;){var h=u.effectTag;h&36&&Re(u.alternate,u);h&128&&r(u);if(h&64)switch(n=u,e=void 0,null!==P&&(e=P.get(n),P["delete"](n),null==e&&null!==n.alternate&&(n=n.alternate,e=P.get(n),P["delete"](n))),null==e?m("184"):void 0,n.tag){case 2:n.stateNode.componentDidCatch(e.error,{componentStack:e.componentStack});break;case 3:null===M&&(M=e.error);break;default:m("157")}var v=u.nextEffect;u.nextEffect=null;u=v}}catch(Sb){d=
!0,p=Sb}d&&(null===u?m("178"):void 0,T(u,p),null!==u&&(u=u.nextEffect))}X=!1;"function"===typeof cd&&cd(c.stateNode);B&&(B.forEach(Z),B=null);b()}function d(a){for(;;){var b=Se(a.alternate,a,y),c=a["return"],d=a.sibling;var n=a;if(!(0!==n.pendingWorkPriority&&n.pendingWorkPriority>y)){var p=n.updateQueue;p=null===p||2!==n.tag&&3!==n.tag?0:null!==p.first?p.first.priorityLevel:0;for(var e=n.child;null!==e;){var f=e.pendingWorkPriority;p=0!==p&&(0===f||f>p)?p:f;e=e.sibling}n.pendingWorkPriority=p}if(null!==
b)return b;null!==c&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{q=a;break}}return null}function e(a){var b=pa(a.alternate,a,y);null===b&&(b=d(a));db.current=null;return b}function f(a){var b=Ub(a.alternate,a,y);null===b&&(b=d(a));db.current=null;
return b}function g(a){Q(5,a)}function h(){if(null!==P&&0<P.size&&2===y)for(;null!==D;){var a=D;D=null!==P&&(P.has(a)||null!==a.alternate&&P.has(a.alternate))?f(D):e(D);if(null===D&&(null===q?m("179"):void 0,J=2,c(q),J=y,null===P||0===P.size||2!==y))break}}function k(a,d){null!==q?(J=2,c(q),h()):null===D&&b();if(!(0===y||y>a)){J=y;a:do{if(2>=y)for(;null!==D&&!(D=e(D),null===D&&(null===q?m("179"):void 0,J=2,c(q),J=y,h(),0===y||y>a||2<y)););else if(null!==d)for(;null!==D&&!F;)if(1<d.timeRemaining()){if(D=
e(D),null===D)if(null===q?m("179"):void 0,1<d.timeRemaining()){if(J=2,c(q),J=y,h(),0===y||y>a||3>y)break}else F=!0}else F=!0;switch(y){case 1:case 2:if(y<=a)continue a;break a;case 3:case 4:case 5:if(null===d)break a;if(!F&&y<=a)continue a;break a;case 0:break a;default:m("181")}}while(1)}}function Q(a,b){z?m("182"):void 0;z=!0;var c=J,d=!1,p=null;try{k(a,b)}catch(Tb){d=!0,p=Tb}for(;d;){if(R){M=p;break}var e=D;if(null===e)R=!0;else{var E=T(e,p);null===E?m("183"):void 0;if(!R){try{d=E;p=a;E=b;for(var h=
d;null!==e;){switch(e.tag){case 2:dd(e);break;case 5:n(e);break;case 3:x(e);break;case 4:x(e)}if(e===h||e.alternate===h)break;e=e["return"]}D=f(d);k(p,E)}catch(Tb){d=!0;p=Tb;continue}break}}}J=c;null!==b&&(L=!1);2<y&&!L&&(A(g),L=!0);a=M;R=F=z=!1;V=C=P=M=null;U=0;if(null!==a)throw a;}function T(a,b){var c=db.current=null,d=!1,p=!1,n=null;if(3===a.tag)c=a,eb(a)&&(R=!0);else for(var e=a["return"];null!==e&&null===c;){2===e.tag?"function"===typeof e.stateNode.componentDidCatch&&(d=!0,n=Ba(e),c=e,p=!0):
3===e.tag&&(c=e);if(eb(e)){if(Y||null!==B&&(B.has(e)||null!==e.alternate&&B.has(e.alternate)))return null;c=null;p=!1}e=e["return"]}if(null!==c){null===C&&(C=new Set);C.add(c);var f="";e=a;do{a:switch(e.tag){case 0:case 1:case 2:case 5:var E=e._debugOwner,g=e._debugSource;var h=Ba(e);var v=null;E&&(v=Ba(E));E=g;h="\n    in "+(h||"Unknown")+(E?" (at "+E.fileName.replace(/^.*[\\\/]/,"")+":"+E.lineNumber+")":v?" (created by "+v+")":"");break a;default:h=""}f+=h;e=e["return"]}while(e);e=f;a=Ba(a);null===
P&&(P=new Map);b={componentName:a,componentStack:e,error:b,errorBoundary:d?c.stateNode:null,errorBoundaryFound:d,errorBoundaryName:n,willRetry:p};P.set(c,b);try{console.error(b.error)}catch(Te){console.error(Te)}X?(null===B&&(B=new Set),B.add(c)):Z(c);return c}null===M&&(M=b);return null}function eb(a){return null!==C&&(C.has(a)||null!==a.alternate&&C.has(a.alternate))}function fb(a,b){return ed(a,b,!1)}function ed(a,b){U>aa&&(R=!0,m("185"));!z&&b<=y&&(D=null);for(var c=!0;null!==a&&c;){c=!1;if(0===
a.pendingWorkPriority||a.pendingWorkPriority>b)c=!0,a.pendingWorkPriority=b;null!==a.alternate&&(0===a.alternate.pendingWorkPriority||a.alternate.pendingWorkPriority>b)&&(c=!0,a.alternate.pendingWorkPriority=b);if(null===a["return"])if(3===a.tag){var d=a.stateNode;0===b||d.isScheduled||(d.isScheduled=!0,I?I.nextScheduledRoot=d:w=d,I=d);if(!z)switch(b){case 1:K?Q(1,null):Q(2,null);break;case 2:W?void 0:m("186");break;default:L||(A(g),L=!0)}}else break;a=a["return"]}}function l(a,b){var c=J;0===c&&
(c=!G||a.internalContextTag&1||b?4:1);return 1===c&&(z||W)?2:c}function Z(a){ed(a,2,!0)}var H=Ue(a),fd=Ve(a),x=H.popHostContainer,n=H.popHostContext,p=H.resetHostContainer,v=We(a,H,fd,fb,l),pa=v.beginWork,Ub=v.beginFailedWork,Se=Xe(a,H,fd).completeWork;H=Ye(a,T);var E=H.commitPlacement,Qe=H.commitDeletion,bd=H.commitWork,Re=H.commitLifeCycles,r=H.commitAttachRef,t=H.commitDetachRef,A=a.scheduleDeferredCallback,G=a.useSyncScheduling,N=a.prepareForCommit,O=a.resetAfterCommit,J=0,z=!1,F=!1,W=!1,K=!1,
D=null,y=0,u=null,q=null,w=null,I=null,L=!1,P=null,C=null,B=null,M=null,R=!1,X=!1,Y=!1,aa=1E3,U=0,V=null;return{scheduleUpdate:fb,getPriorityContext:l,batchedUpdates:function(a,b){var c=W;W=!0;try{return a(b)}finally{W=c,z||W||Q(2,null)}},unbatchedUpdates:function(a){var b=K,c=W;K=W;W=!1;try{return a()}finally{W=c,K=b}},flushSync:function(a){var b=W,c=J;W=!0;J=1;try{return a()}finally{W=b,J=c,z?m("187"):void 0,Q(2,null)}},deferredUpdates:function(a){var b=J;J=4;try{return a()}finally{J=b}}}}function cd(a){"function"===
typeof Vb&&Vb(a)}function Ve(a){function b(a,b){var c=new F(5,null,0);c.type="DELETED";c.stateNode=b;c["return"]=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function c(a,b){switch(a.tag){case 5:return f(b,a.type,a.pendingProps);case 6:return g(b,a.pendingProps);default:return!1}}function d(a){for(a=a["return"];null!==a&&5!==a.tag&&3!==a.tag;)a=a["return"];l=a}var e=a.shouldSetTextContent,f=a.canHydrateInstance,g=a.canHydrateTextInstance,
h=a.getNextHydratableSibling,k=a.getFirstHydratableChild,Q=a.hydrateInstance,T=a.hydrateTextInstance,eb=a.didNotHydrateInstance,fb=a.didNotFindHydratableInstance;a=a.didNotFindHydratableTextInstance;if(!(f&&g&&h&&k&&Q&&T&&eb&&fb&&a))return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){m("175")},prepareToHydrateHostTextInstance:function(){m("176")},popHydrationState:function(){return!1}};
var l=null,r=null,Z=!1;return{enterHydrationState:function(a){r=k(a.stateNode.containerInfo);l=a;return Z=!0},resetHydrationState:function(){r=l=null;Z=!1},tryToClaimNextHydratableInstance:function(a){if(Z){var d=r;if(d){if(!c(a,d)){d=h(d);if(!d||!c(a,d)){a.effectTag|=2;Z=!1;l=a;return}b(l,r)}a.stateNode=d;l=a;r=k(d)}else a.effectTag|=2,Z=!1,l=a}},prepareToHydrateHostInstance:function(a,b,c){b=Q(a.stateNode,a.type,a.memoizedProps,b,c,a);a.updateQueue=b;return null!==b?!0:!1},prepareToHydrateHostTextInstance:function(a){return T(a.stateNode,
a.memoizedProps,a)},popHydrationState:function(a){if(a!==l)return!1;if(!Z)return d(a),Z=!0,!1;var c=a.type;if(5!==a.tag||"head"!==c&&"body"!==c&&!e(c,a.memoizedProps))for(c=r;c;)b(a,c),c=h(c);d(a);r=l?h(a.stateNode):null;return!0}}}function Ue(a){function b(a){a===qa?m("174"):void 0;return a}var c=a.getChildHostContext,d=a.getRootHostContext,e={current:qa},f={current:qa},g={current:qa};return{getHostContext:function(){return b(e.current)},getRootHostContainer:function(){return b(g.current)},popHostContainer:function(a){K(e,
a);K(f,a);K(g,a)},popHostContext:function(a){f.current===a&&(K(e,a),K(f,a))},pushHostContainer:function(a,b){L(g,b,a);b=d(b);L(f,a,a);L(e,b,a)},pushHostContext:function(a){var d=b(g.current),h=b(e.current);d=c(h,a.type,d);h!==d&&(L(f,a,a),L(e,d,a))},resetHostContainer:function(){e.current=qa;g.current=qa}}}function Ye(a,b){function c(a){var c=a.ref;if(null!==c)try{c(null)}catch(p){b(a,p)}}function d(a){return 5===a.tag||3===a.tag||4===a.tag}function e(a){for(var b=a;;)if(g(b),null!==b.child&&4!==
b.tag)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}function f(a){for(var b=a,c=!1,d=void 0,f=void 0;;){if(!c){c=b["return"];a:for(;;){null===c?m("160"):void 0;switch(c.tag){case 5:d=c.stateNode;f=!1;break a;case 3:d=c.stateNode.containerInfo;f=!0;break a;case 4:d=c.stateNode.containerInfo;f=!0;break a}c=c["return"]}c=!0}if(5===b.tag||6===b.tag)e(b),f?H(d,b.stateNode):
Z(d,b.stateNode);else if(4===b.tag?d=b.stateNode.containerInfo:g(b),null!==b.child){b.child["return"]=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"];4===b.tag&&(c=!1)}b.sibling["return"]=b["return"];b=b.sibling}}function g(a){"function"===typeof gd&&gd(a);switch(a.tag){case 2:c(a);var d=a.stateNode;if("function"===typeof d.componentWillUnmount)try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(p){b(a,
p)}break;case 5:c(a);break;case 7:e(a.stateNode);break;case 4:f(a)}}var h=a.commitMount,k=a.commitUpdate,Q=a.resetTextContent,T=a.commitTextUpdate,l=a.appendChild,r=a.appendChildToContainer,t=a.insertBefore,q=a.insertInContainerBefore,Z=a.removeChild,H=a.removeChildFromContainer,w=a.getPublicInstance;return{commitPlacement:function(a){a:{for(var b=a["return"];null!==b;){if(d(b)){var c=b;break a}b=b["return"]}m("160");c=void 0}var e=b=void 0;switch(c.tag){case 5:b=c.stateNode;e=!1;break;case 3:b=c.stateNode.containerInfo;
e=!0;break;case 4:b=c.stateNode.containerInfo;e=!0;break;default:m("161")}c.effectTag&16&&(Q(b),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c["return"]||d(c["return"])){c=null;break a}c=c["return"]}c.sibling["return"]=c["return"];for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child["return"]=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var f=a;;){if(5===f.tag||6===f.tag)c?e?q(b,f.stateNode,c):
t(b,f.stateNode,c):e?r(b,f.stateNode):l(b,f.stateNode);else if(4!==f.tag&&null!==f.child){f.child["return"]=f;f=f.child;continue}if(f===a)break;for(;null===f.sibling;){if(null===f["return"]||f["return"]===a)return;f=f["return"]}f.sibling["return"]=f["return"];f=f.sibling}},commitDeletion:function(a){f(a);a["return"]=null;a.child=null;a.alternate&&(a.alternate.child=null,a.alternate["return"]=null)},commitWork:function(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;
a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&k(c,f,e,a,d,b)}break;case 6:null===b.stateNode?m("162"):void 0;c=b.memoizedProps;T(b.stateNode,null!==a?a.memoizedProps:c,c);break;case 3:break;case 4:break;default:m("163")}},commitLifeCycles:function(a,b){switch(b.tag){case 2:var c=b.stateNode;if(b.effectTag&4)if(null===a)c.props=b.memoizedProps,c.state=b.memoizedState,c.componentDidMount();else{var d=a.memoizedProps;a=a.memoizedState;c.props=b.memoizedProps;
c.state=b.memoizedState;c.componentDidUpdate(d,a)}b.effectTag&32&&null!==b.updateQueue&&hd(b,b.updateQueue,c);break;case 3:a=b.updateQueue;null!==a&&hd(b,a,b.child&&b.child.stateNode);break;case 5:c=b.stateNode;null===a&&b.effectTag&4&&h(c,b.type,b.memoizedProps,b);break;case 6:break;case 4:break;default:m("163")}},commitAttachRef:function(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:b(w(c));break;default:b(c)}}},commitDetachRef:function(a){a=a.ref;null!==a&&a(null)}}}function gd(a){"function"===
typeof Wb&&Wb(a)}function hd(a,b,c){a=b.callbackList;if(null!==a)for(b.callbackList=null,b=0;b<a.length;b++){var d=a[b];"function"!==typeof d?m("191",d):void 0;d.call(c)}}function Xe(a,b,c){var d=a.createInstance,e=a.createTextInstance,f=a.appendInitialChild,g=a.finalizeInitialChildren,h=a.prepareUpdate,k=b.getRootHostContainer,Q=b.popHostContext,T=b.getHostContext,l=b.popHostContainer,r=c.prepareToHydrateHostInstance,t=c.prepareToHydrateHostTextInstance,q=c.popHydrationState;return{completeWork:function(a,
b,c){var x=b.pendingProps;if(null===x)x=b.memoizedProps;else if(5!==b.pendingWorkPriority||5===c)b.pendingProps=null;switch(b.tag){case 1:return null;case 2:return dd(b),null;case 3:l(b);K(S,b);K(ca,b);x=b.stateNode;x.pendingContext&&(x.context=x.pendingContext,x.pendingContext=null);if(null===a||null===a.child)q(b),b.effectTag&=-3;return null;case 5:Q(b);c=k();var n=b.type;if(null!==a&&null!=b.stateNode){var p=a.memoizedProps,v=b.stateNode,pa=T();x=h(v,n,p,x,c,pa);if(b.updateQueue=x)b.effectTag|=
4;a.ref!==b.ref&&(b.effectTag|=128)}else{if(!x)return null===b.stateNode?m("166"):void 0,null;a=T();if(q(b))r(b,c,a)&&(b.effectTag|=4);else{a=d(n,x,c,a,b);a:for(p=b.child;null!==p;){if(5===p.tag||6===p.tag)f(a,p.stateNode);else if(4!==p.tag&&null!==p.child){p=p.child;continue}if(p===b)break a;for(;null===p.sibling;){if(null===p["return"]||p["return"]===b)break a;p=p["return"]}p=p.sibling}g(a,n,x,c)&&(b.effectTag|=4);b.stateNode=a}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)a.memoizedProps!==
x&&(b.effectTag|=4);else{if("string"!==typeof x)return null===b.stateNode?m("166"):void 0,null;a=k();c=T();q(b)?t(b)&&(b.effectTag|=4):b.stateNode=e(x,a,c,b)}return null;case 7:(x=b.memoizedProps)?void 0:m("165");b.tag=8;c=[];a:for((n=b.stateNode)&&(n["return"]=b);null!==n;){if(5===n.tag||6===n.tag||4===n.tag)m("164");else if(9===n.tag)c.push(n.type);else if(null!==n.child){n.child["return"]=n;n=n.child;continue}for(;null===n.sibling;){if(null===n["return"]||n["return"]===b)break a;n=n["return"]}n.sibling["return"]=
n["return"];n=n.sibling}n=x.handler;x=n(x.props,c);b.child=Xb(b,null!==a?a.child:null,x,b.pendingWorkPriority);return b.child;case 8:return b.tag=7,null;case 9:return null;case 10:return null;case 4:return b.effectTag|=4,l(b),null;case 0:m("167");default:m("156")}}}}function We(a,b,c,d,e){function f(a,b,c){g(a,b,c,b.pendingWorkPriority)}function g(a,b,c,d){b.child=null===a?Yb(b,b.child,c,d):a.child===b.child?Xb(b,b.child,c,d):Zb(b,b.child,c,d)}function h(a,b){var c=b.ref;null===c||a&&a.ref===c||(b.effectTag|=
128)}function k(a,b,c,d){h(a,b);if(!c)return d&&id(b,!1),l(a,b);c=b.stateNode;Ze.current=b;var e=c.render();b.effectTag|=1;f(a,b,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&id(b,!0);return b.child}function Q(a){var b=a.stateNode;b.pendingContext?jd(a,b.pendingContext,b.pendingContext!==b.context):b.context&&jd(a,b.context,!1);H(a,b.containerInfo)}function l(a,b){null!==a&&b.child!==a.child?m("153"):void 0;if(null!==b.child){a=b.child;var c=$b(a,a.pendingWorkPriority);c.pendingProps=a.pendingProps;
b.child=c;for(c["return"]=b;null!==a.sibling;)a=a.sibling,c=c.sibling=$b(a,a.pendingWorkPriority),c.pendingProps=a.pendingProps,c["return"]=b;c.sibling=null}return b.child}function r(a,b){switch(b.tag){case 3:Q(b);break;case 2:gb(b);break;case 4:H(b,b.stateNode.containerInfo)}return null}var q=a.shouldSetTextContent,t=a.useSyncScheduling,w=a.shouldDeprioritizeSubtree,z=b.pushHostContext,H=b.pushHostContainer,A=c.enterHydrationState,x=c.resetHydrationState,n=c.tryToClaimNextHydratableInstance;a=$e(d,
e,function(a,b){a.memoizedProps=b},function(a,b){a.memoizedState=b});var p=a.adoptClassInstance,v=a.constructClassInstance,pa=a.mountClassInstance,Ub=a.updateClassInstance;return{beginWork:function(a,b,c){if(0===b.pendingWorkPriority||b.pendingWorkPriority>c)return r(a,b);switch(b.tag){case 0:null!==a?m("155"):void 0;var d=b.type,e=b.pendingProps,g=Ca(b);g=Da(b,g);d=d(e,g);b.effectTag|=1;"object"===typeof d&&null!==d&&"function"===typeof d.render?(b.tag=2,e=gb(b),p(b,d),pa(b,c),b=k(a,b,!0,e)):(b.tag=
1,f(a,b,d),b.memoizedProps=e,b=b.child);return b;case 1:a:{e=b.type;c=b.pendingProps;d=b.memoizedProps;if(S.current)null===c&&(c=d);else if(null===c||d===c){b=l(a,b);break a}d=Ca(b);d=Da(b,d);e=e(c,d);b.effectTag|=1;f(a,b,e);b.memoizedProps=c;b=b.child}return b;case 2:return e=gb(b),d=void 0,null===a?b.stateNode?m("153"):(v(b,b.pendingProps),pa(b,c),d=!0):d=Ub(a,b,c),k(a,b,d,e);case 3:return Q(b),d=b.updateQueue,null!==d?(e=b.memoizedState,d=ac(a,b,d,null,e,null,c),e===d?(x(),b=l(a,b)):(e=d.element,
null!==a&&null!==a.child||!A(b)?(x(),f(a,b,e)):(b.effectTag|=2,b.child=Yb(b,b.child,e,c)),b.memoizedState=d,b=b.child)):(x(),b=l(a,b)),b;case 5:z(b);null===a&&n(b);e=b.type;var E=b.memoizedProps;d=b.pendingProps;null===d&&(d=E,null===d?m("154"):void 0);g=null!==a?a.memoizedProps:null;S.current||null!==d&&E!==d?(E=d.children,q(e,d)?E=null:g&&q(e,g)&&(b.effectTag|=16),h(a,b),5!==c&&!t&&w(e,d)?(b.pendingWorkPriority=5,b=null):(f(a,b,E),b.memoizedProps=d,b=b.child)):b=l(a,b);return b;case 6:return null===
a&&n(b),a=b.pendingProps,null===a&&(a=b.memoizedProps),b.memoizedProps=a,null;case 8:b.tag=7;case 7:c=b.pendingProps;if(S.current)null===c&&(c=a&&a.memoizedProps,null===c?m("154"):void 0);else if(null===c||b.memoizedProps===c)c=b.memoizedProps;e=c.children;d=b.pendingWorkPriority;b.stateNode=null===a?Yb(b,b.stateNode,e,d):a.child===b.child?Xb(b,b.stateNode,e,d):Zb(b,b.stateNode,e,d);b.memoizedProps=c;return b.stateNode;case 9:return null;case 4:a:{H(b,b.stateNode.containerInfo);c=b.pendingWorkPriority;
e=b.pendingProps;if(S.current)null===e&&(e=a&&a.memoizedProps,null==e?m("154"):void 0);else if(null===e||b.memoizedProps===e){b=l(a,b);break a}null===a?b.child=Zb(b,b.child,e,c):f(a,b,e);b.memoizedProps=e;b=b.child}return b;case 10:a:{c=b.pendingProps;if(S.current)null===c&&(c=b.memoizedProps);else if(null===c||b.memoizedProps===c){b=l(a,b);break a}f(a,b,c);b.memoizedProps=c;b=b.child}return b;default:m("156")}},beginFailedWork:function(a,b,c){switch(b.tag){case 2:gb(b);break;case 3:Q(b);break;default:m("157")}b.effectTag|=
64;null===a?b.child=null:b.child!==a.child&&(b.child=a.child);if(0===b.pendingWorkPriority||b.pendingWorkPriority>c)return r(a,b);b.firstEffect=null;b.lastEffect=null;g(a,b,null,c);2===b.tag&&(a=b.stateNode,b.memoizedProps=a.props,b.memoizedState=a.state);return b.child}}}function id(a,b){var c=a.stateNode;c?void 0:m("169");if(b){var d=kd(a,cb,!0);c.__reactInternalMemoizedMergedChildContext=d;K(S,a);K(ca,a);L(ca,d,a)}else K(S,a);L(S,b,a)}function jd(a,b,c){null!=ca.cursor?m("168"):void 0;L(ca,b,a);
L(S,c,a)}function gb(a){if(!Ea(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||ba;cb=ca.current;L(ca,b,a);L(S,S.current,a);return!0}function $e(a,b,c,d){function e(a,b){b.updater=f;a.stateNode=b;fa.set(b,a)}var f={isMounted:af,enqueueSetState:function(c,d,e){c=fa.get(c);var f=b(c,!1);hb(c,{priorityLevel:f,partialState:d,callback:void 0===e?null:e,isReplace:!1,isForced:!1,isTopLevelUnmount:!1,next:null});a(c,f)},enqueueReplaceState:function(c,d,e){c=fa.get(c);var f=
b(c,!1);hb(c,{priorityLevel:f,partialState:d,callback:void 0===e?null:e,isReplace:!0,isForced:!1,isTopLevelUnmount:!1,next:null});a(c,f)},enqueueForceUpdate:function(c,d){c=fa.get(c);var e=b(c,!1);hb(c,{priorityLevel:e,partialState:null,callback:void 0===d?null:d,isReplace:!1,isForced:!0,isTopLevelUnmount:!1,next:null});a(c,e)}};return{adoptClassInstance:e,constructClassInstance:function(a,b){var c=a.type,d=Ca(a),f=2===a.tag&&null!=a.type.contextTypes,g=f?Da(a,d):ba;b=new c(b,g);e(a,b);f&&(a=a.stateNode,
a.__reactInternalMemoizedUnmaskedChildContext=d,a.__reactInternalMemoizedMaskedChildContext=g);return b},mountClassInstance:function(a,b){var c=a.alternate,d=a.stateNode,e=d.state||null,g=a.pendingProps;g?void 0:m("158");var h=Ca(a);d.props=g;d.state=e;d.refs=ba;d.context=Da(a,h);null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent&&(a.internalContextTag|=1);"function"===typeof d.componentWillMount&&(h=d.state,d.componentWillMount(),h!==d.state&&f.enqueueReplaceState(d,
d.state,null),h=a.updateQueue,null!==h&&(d.state=ac(c,a,h,d,e,g,b)));"function"===typeof d.componentDidMount&&(a.effectTag|=4)},updateClassInstance:function(a,b,e){var g=b.stateNode;g.props=b.memoizedProps;g.state=b.memoizedState;var h=b.memoizedProps,k=b.pendingProps;k||(k=h,null==k?m("159"):void 0);var l=g.context,r=Ca(b);r=Da(b,r);"function"!==typeof g.componentWillReceiveProps||h===k&&l===r||(l=g.state,g.componentWillReceiveProps(k,r),g.state!==l&&f.enqueueReplaceState(g,g.state,null));l=b.memoizedState;
e=null!==b.updateQueue?ac(a,b,b.updateQueue,g,l,k,e):l;if(!(h!==k||l!==e||S.current||null!==b.updateQueue&&b.updateQueue.hasForceUpdate))return"function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),!1;var q=k;if(null===h||null!==b.updateQueue&&b.updateQueue.hasForceUpdate)q=!0;else{var t=b.stateNode,w=b.type;q="function"===typeof t.shouldComponentUpdate?t.shouldComponentUpdate(q,e,r):w.prototype&&w.prototype.isPureReactComponent?!bc(h,q)||!bc(l,e):!0}q?
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(k,e,r),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),c(b,k),d(b,e));g.props=k;g.state=e;g.context=r;return q}}}function bc(a,b){if(ld(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!bf.call(b,
c[d])||!ld(a[c[d]],b[c[d]]))return!1;return!0}function cc(a,b,c){b=new F(4,a.key,b);b.pendingProps=a.children||[];b.pendingWorkPriority=c;b.stateNode={containerInfo:a.containerInfo,implementation:a.implementation};return b}function dc(a,b,c){b=new F(7,a.key,b);b.type=a.handler;b.pendingProps=a;b.pendingWorkPriority=c;return b}function ec(a,b,c){b=new F(6,null,b);b.pendingProps=a;b.pendingWorkPriority=c;return b}function md(a,b,c){b=new F(10,null,b);b.pendingProps=a;b.pendingWorkPriority=c;return b}
function fc(a,b,c){var d=a.type,e=a.key,f=void 0;"function"===typeof d?(f=d.prototype&&d.prototype.isReactComponent?new F(2,e,b):new F(0,e,b),f.type=d):"string"===typeof d?(f=new F(5,e,b),f.type=d):"object"===typeof d&&null!==d&&"number"===typeof d.tag?f=d:m("130",null==d?d:typeof d,"");b=f;b.pendingProps=a.props;b.pendingWorkPriority=c;return b}function ad(a,b){var c=a.alternate;null===c?(c=new F(a.tag,a.key,a.internalContextTag),c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):
(c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.pendingWorkPriority=b;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function dd(a){Ea(a)&&(K(S,a),K(ca,a))}function Da(a,b){var c=a.type.contextTypes;if(!c)return ba;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=
b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ca(a){return Ea(a)?cb:ca.current}function L(a,b){da++;bb[da]=a.current;a.current=b}function K(a){0>da||(a.current=bb[da],bb[da]=null,da--)}function ac(a,b,c,d,e,f,g){null!==a&&a.updateQueue===c&&(c=b.updateQueue={first:c.first,last:c.last,callbackList:null,hasForceUpdate:!1});a=c.callbackList;for(var h=c.hasForceUpdate,m=!0,l=c.first;null!==l&&0>=gc(l.priorityLevel,
g);){c.first=l.next;null===c.first&&(c.last=null);var r;if(l.isReplace)e=nd(l,d,e,f),m=!0;else if(r=nd(l,d,e,f))e=m?q({},e,r):q(e,r),m=!1;l.isForced&&(h=!0);null===l.callback||l.isTopLevelUnmount&&null!==l.next||(a=null!==a?a:[],a.push(l.callback),b.effectTag|=32);l=l.next}c.callbackList=a;c.hasForceUpdate=h;null!==c.first||null!==a||h||(b.updateQueue=null);return e}function od(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function hc(a,
b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function ic(a,b){b&&(cf[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?m("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?m("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?
void 0:m("61")),null!=b.style&&"object"!==typeof b.style?m("62",""):void 0)}function ib(a){if(jc[a])return jc[a];if(!ra[a])return a;var b=ra[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in pd)return jc[a]=b[c];return""}function Fa(a,b){if(!z||b&&!("addEventListener"in document))return!1;b="on"+a;var c=b in document;c||(c=document.createElement("div"),c.setAttribute(b,"return;"),c="function"===typeof c[b]);!c&&qd&&"wheel"===a&&(c=document.implementation.hasFeature("Events.wheel","3.0"));return c}function df(a){return rd(a,
!1)}function ef(a){return rd(a,!0)}function rd(a,b){a&&(Ga.executeDispatchesInOrder(a,b),a.isPersistent()||a.constructor.release(a))}function Ha(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}function sa(a,b){null==b?m("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===
a.nodeType?a.parentNode:a}function sd(a,b){return a(b)}function kc(a,b,c,d,e,f){return a(b,c,d,e,f)}function ff(){if(t._hasRethrowError){var a=t._rethrowError;t._rethrowError=null;t._hasRethrowError=!1;throw a;}}function td(a,b,c,d,e,f,g,h,m){t._hasCaughtError=!1;t._caughtError=null;var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(T){t._caughtError=T,t._hasCaughtError=!0}}function Ba(a){if("function"===typeof a.getName)return a.getName();if("number"===typeof a.tag){a=a.type;if("string"===
typeof a)return a;if("function"===typeof a)return a.displayName||a.name}return null}function ka(){}function m(a){for(var b=arguments.length-1,c="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,d=0;d<b;d++)c+="\x26args[]\x3d"+encodeURIComponent(arguments[d+1]);b=Error(c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}function Sc(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";
case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(){if(kb)for(var a in ta){var b=ta[a],c=kb.indexOf(a);-1<c?void 0:m("96",a);if(!ha.plugins[c]){b.extractEvents?void 0:m("97",a);ha.plugins[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;ha.eventNameDispatchConfigs.hasOwnProperty(h)?m("99",h):void 0;ha.eventNameDispatchConfigs[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&vd(k[e],g,h);e=!0}else f.registrationName?
(vd(f.registrationName,g,h),e=!0):e=!1;e?void 0:m("98",d,a)}}}}function vd(a,b,c){ha.registrationNameModules[a]?m("100",a):void 0;ha.registrationNameModules[a]=b;ha.registrationNameDependencies[a]=b.eventTypes[c].dependencies}function lb(a){return function(){return a}}function ua(a,b){return(a&b)===b}function wd(a){for(var b;b=a._renderedComponent;)a=b;return a}function xd(a,b){a=wd(a);a._hostNode=b;b[M]=a}function lc(a,b){if(!(a._flags&yd.hasCachedChildNodes)){var c=a._renderedChildren;b=b.firstChild;
var d;a:for(d in c)if(c.hasOwnProperty(d)){var e=c[d],f=wd(e)._domID;if(0!==f){for(;null!==b;b=b.nextSibling){var g=b,h=f;if(1===g.nodeType&&g.getAttribute(gf)===""+h||8===g.nodeType&&g.nodeValue===" react-text: "+h+" "||8===g.nodeType&&g.nodeValue===" react-empty: "+h+" "){xd(e,b);continue a}}m("32",f)}}a._flags|=yd.hasCachedChildNodes}}function zd(a){if(a[M])return a[M];for(var b=[];!a[M];)if(b.push(a),a.parentNode)a=a.parentNode;else return null;var c=a[M];if(5===c.tag||6===c.tag)return c;for(;a&&
(c=a[M]);a=b.pop()){var d=c;b.length&&lc(c,a)}return d}function mb(a){var b=a;if(a.alternate)for(;b["return"];)b=b["return"];else{if(0!==(b.effectTag&2))return 1;for(;b["return"];)if(b=b["return"],0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function Ad(a){2!==mb(a)?m("188"):void 0}function mc(a){var b=a.alternate;if(!b)return b=mb(a),3===b?m("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c["return"],f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===
c)return Ad(e),a;if(g===d)return Ad(e),b;g=g.sibling}m("188")}if(c["return"]!==d["return"])c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?void 0:m("189")}}c.alternate!==d?m("190"):void 0}3!==c.tag?m("188"):void 0;return c.stateNode.current===c?a:b}function Bd(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=nc.getNodeFromInstance(d);Cd.invokeGuardedCallbackAndCatchFirstError(b,
c,void 0,a);a.currentTarget=null}function Dd(a){if(a=Ga.getInstanceFromNode(a))if("number"===typeof a.tag){nb&&"function"===typeof nb.restoreControlledState?void 0:m("194");var b=Ga.getFiberCurrentPropsFromNode(a.stateNode);nb.restoreControlledState(a.stateNode,a.type,b)}else"function"!==typeof a.restoreControlledState?m("195"):void 0,a.restoreControlledState()}function Ed(a,b){return sd(a,b)}function hf(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c=b;if("number"===typeof c.tag){for(;c["return"];)c=
c["return"];c=3!==c.tag?null:c.stateNode.containerInfo}else{for(;c._hostParent;)c=c._hostParent;c=N.getNodeFromInstance(c).parentNode}if(!c)break;a.ancestors.push(b);b=N.getClosestInstanceFromNode(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],ia._handleTopLevel(a.topLevelType,b,a.nativeEvent,jb(a.nativeEvent))}function Fd(a,b,c){switch(a){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":return!(!c.disabled||
"button"!==b&&"input"!==b&&"select"!==b&&"textarea"!==b);default:return!1}}function ob(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}function Gd(a){Object.prototype.hasOwnProperty.call(a,pb)||(a[pb]=jf++,Hd[a[pb]]={});return Hd[a[pb]]}function kf(a){if(Id.hasOwnProperty(a))return!0;if(Jd.hasOwnProperty(a))return!1;if(lf.test(a))return Id[a]=!0;Jd[a]=!0;return!1}function Kd(){return null}function mf(a){var b=
"";Za.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function va(a,b,c){a=a.options;if(b){b={};for(var d=0;d<c.length;d++)b["$"+c[d]]=!0;for(c=0;c<a.length;c++)d=b.hasOwnProperty("$"+a[c].value),a[c].selected!==d&&(a[c].selected=d)}else{c=""+c;b=null;for(d=0;d<a.length;d++){if(a[d].value===c){a[d].selected=!0;return}null!==b||a[d].disabled||(b=a[d])}null!==b&&(b.selected=!0)}}function Ld(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&
("checkbox"===b||"radio"===b)}function nf(a){var b=Ld(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"function"===typeof c.get&&"function"===typeof c.set)return Object.defineProperty(a,b,{enumerable:c.enumerable,configurable:!0,get:function(){return c.get.call(this)},set:function(a){d=""+a;c.set.call(this,a)}}),{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}
function R(a,b){of(b,9===a.nodeType||11===a.nodeType?a:a.ownerDocument)}function gc(a,b){return 2!==a&&1!==a||2!==b&&1!==b?0===a&&0!==b?-255:0!==a&&0===b?255:a-b:0}function Md(){return{first:null,last:null,hasForceUpdate:!1,callbackList:null}}function oc(a,b,c,d){null!==c?c.next=b:(b.next=a.first,a.first=b);null!==d?b.next=d:a.last=b}function Nd(a,b){b=b.priorityLevel;var c=null;if(null!==a.last&&0>=gc(a.last.priorityLevel,b))c=a.last;else for(a=a.first;null!==a&&0>=gc(a.priorityLevel,b);)c=a,a=a.next;
return c}function hb(a,b){var c=a.alternate,d=a.updateQueue;null===d&&(d=a.updateQueue=Md());null!==c?(a=c.updateQueue,null===a&&(a=c.updateQueue=Md())):a=null;pc=d;qc=a!==d?a:null;var e=pc;c=qc;var f=Nd(e,b),g=null!==f?f.next:e.first;if(null===c)return oc(e,b,f,g),null;d=Nd(c,b);a=null!==d?d.next:c.first;oc(e,b,f,g);if(g===a&&null!==g||f===d&&null!==f)return null===d&&(c.first=b),null===a&&(c.last=null),null;b={priorityLevel:b.priorityLevel,partialState:b.partialState,callback:b.callback,isReplace:b.isReplace,
isForced:b.isForced,isTopLevelUnmount:b.isTopLevelUnmount,next:null};oc(c,b,d,a);return b}function nd(a,b,c,d){a=a.partialState;return"function"===typeof a?a.call(b,c,d):a}function Ea(a){return 2===a.tag&&null!=a.type.childContextTypes}function kd(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:m("108",Ba(a)||"Unknown",e);return q({},b,c)}function F(a,b,c){this.tag=a;this.key=b;this.stateNode=this.type=
null;this.sibling=this.child=this["return"]=null;this.index=0;this.memoizedState=this.updateQueue=this.memoizedProps=this.pendingProps=this.ref=null;this.internalContextTag=c;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.pendingWorkPriority=0;this.alternate=null}function Ia(a){if(null===a||"undefined"===typeof a)return null;a=Od&&a[Od]||a["@@iterator"];return"function"===typeof a?a:null}function Ja(a,b){var c=b.ref;if(null!==c&&"function"!==typeof c){if(b._owner){b=b._owner;
var d=void 0;b&&("number"===typeof b.tag?(2!==b.tag?m("110"):void 0,d=b.stateNode):d=b.getPublicInstance());d?void 0:m("147",c);var e=""+c;if(null!==a&&null!==a.ref&&a.ref._stringRef===e)return a.ref;a=function(a){var b=d.refs===ba?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};a._stringRef=e;return a}"string"!==typeof c?m("148"):void 0;b._owner?void 0:m("149",c)}return c}function qb(a,b){"textarea"!==a.type&&m("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+
"}":b,"")}function rc(a,b){function c(c,d){if(b){if(!a){if(null===d.alternate)return;d=d.alternate}var e=c.lastEffect;null!==e?(e.nextEffect=d,c.lastEffect=d):c.firstEffect=c.lastEffect=d;d.nextEffect=null;d.effectTag=8}}function d(a,d){if(!b)return null;for(;null!==d;)c(a,d),d=d.sibling;return null}function e(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function f(b,c){if(a)return b=$b(b,c),b.index=0,b.sibling=null,b;b.pendingWorkPriority=c;b.effectTag=
0;b.index=0;b.sibling=null;return b}function g(a,c,d){a.index=d;if(!b)return c;d=a.alternate;if(null!==d)return d=d.index,d<c?(a.effectTag=2,c):d;a.effectTag=2;return c}function h(a){b&&null===a.alternate&&(a.effectTag=2);return a}function k(a,b,c,d){if(null===b||6!==b.tag)return c=ec(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function l(a,b,c,d){if(null===b||b.type!==c.type)return d=fc(c,a.internalContextTag,d),d.ref=Ja(b,c),d["return"]=a,d;d=f(b,d);
d.ref=Ja(b,c);d.pendingProps=c.props;d["return"]=a;return d}function r(a,b,c,d){if(null===b||7!==b.tag)return c=dc(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function q(a,b,c,d){if(null===b||9!==b.tag)return b=new F(9,null,a.internalContextTag),b.type=c.value,b["return"]=a,b;b=f(b,d);b.type=c.value;b["return"]=a;return b}function t(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return c=
cc(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c.children||[];b["return"]=a;return b}function w(a,b,c,d){if(null===b||10!==b.tag)return c=md(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function z(a,b,c){if("string"===typeof b||"number"===typeof b)return b=ec(""+b,a.internalContextTag,c),b["return"]=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case rb:return c=fc(b,a.internalContextTag,c),c.ref=Ja(null,b),c["return"]=
a,c;case sb:return b=dc(b,a.internalContextTag,c),b["return"]=a,b;case tb:return c=new F(9,null,a.internalContextTag),c.type=b.value,c["return"]=a,c;case ub:return b=cc(b,a.internalContextTag,c),b["return"]=a,b}if(vb(b)||Ia(b))return b=md(b,a.internalContextTag,c),b["return"]=a,b;qb(a,b)}return null}function A(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:k(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case rb:return c.key===
e?l(a,b,c,d):null;case sb:return c.key===e?r(a,b,c,d):null;case tb:return null===e?q(a,b,c,d):null;case ub:return c.key===e?t(a,b,c,d):null}if(vb(c)||Ia(c))return null!==e?null:w(a,b,c,d);qb(a,c)}return null}function B(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,k(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case rb:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case sb:return a=a.get(null===d.key?c:d.key)||null,r(b,a,d,e);case tb:return a=
a.get(c)||null,q(b,a,d,e);case ub:return a=a.get(null===d.key?c:d.key)||null,t(b,a,d,e)}if(vb(d)||Ia(d))return a=a.get(c)||null,w(b,a,d,e);qb(b,d)}return null}function C(a,f,h,m){for(var p=null,n=null,l=f,k=f=0,v=null;null!==l&&k<h.length;k++){l.index>k?(v=l,l=null):v=l.sibling;var r=A(a,l,h[k],m);if(null===r){null===l&&(l=v);break}b&&l&&null===r.alternate&&c(a,l);f=g(r,f,k);null===n?p=r:n.sibling=r;n=r;l=v}if(k===h.length)return d(a,l),p;if(null===l){for(;k<h.length;k++)if(l=z(a,h[k],m))f=g(l,f,
k),null===n?p=l:n.sibling=l,n=l;return p}for(l=e(a,l);k<h.length;k++)if(v=B(l,a,k,h[k],m)){if(b&&null!==v.alternate)l["delete"](null===v.key?k:v.key);f=g(v,f,k);null===n?p=v:n.sibling=v;n=v}b&&l.forEach(function(b){return c(a,b)});return p}function x(a,f,h,l){var p=Ia(h);"function"!==typeof p?m("150"):void 0;h=p.call(h);null==h?m("151"):void 0;for(var n=p=null,k=f,v=f=0,r=null,q=h.next();null!==k&&!q.done;v++,q=h.next()){k.index>v?(r=k,k=null):r=k.sibling;var t=A(a,k,q.value,l);if(null===t){k||(k=
r);break}b&&k&&null===t.alternate&&c(a,k);f=g(t,f,v);null===n?p=t:n.sibling=t;n=t;k=r}if(q.done)return d(a,k),p;if(null===k){for(;!q.done;v++,q=h.next())q=z(a,q.value,l),null!==q&&(f=g(q,f,v),null===n?p=q:n.sibling=q,n=q);return p}for(k=e(a,k);!q.done;v++,q=h.next())if(q=B(k,a,v,q.value,l),null!==q){if(b&&null!==q.alternate)k["delete"](null===q.key?v:q.key);f=g(q,f,v);null===n?p=q:n.sibling=q;n=q}b&&k.forEach(function(b){return c(a,b)});return p}return function(a,b,e,g){var k="object"===typeof e&&
null!==e;if(k)switch(e.$$typeof){case rb:a:{var l=e.key;for(k=b;null!==k;){if(k.key===l)if(k.type===e.type){d(a,k.sibling);b=f(k,g);b.ref=Ja(k,e);b.pendingProps=e.props;b["return"]=a;a=b;break a}else{d(a,k);break}else c(a,k);k=k.sibling}g=fc(e,a.internalContextTag,g);g.ref=Ja(b,e);g["return"]=a;a=g}return h(a);case sb:a:{for(k=e.key;null!==b;){if(b.key===k)if(7===b.tag){d(a,b.sibling);b=f(b,g);b.pendingProps=e;b["return"]=a;a=b;break a}else{d(a,b);break}else c(a,b);b=b.sibling}e=dc(e,a.internalContextTag,
g);e["return"]=a;a=e}return h(a);case tb:a:{if(null!==b)if(9===b.tag){d(a,b.sibling);b=f(b,g);b.type=e.value;b["return"]=a;a=b;break a}else d(a,b);b=new F(9,null,a.internalContextTag);b.type=e.value;b["return"]=a;a=b}return h(a);case ub:a:{for(k=e.key;null!==b;){if(b.key===k)if(4===b.tag&&b.stateNode.containerInfo===e.containerInfo&&b.stateNode.implementation===e.implementation){d(a,b.sibling);b=f(b,g);b.pendingProps=e.children||[];b["return"]=a;a=b;break a}else{d(a,b);break}else c(a,b);b=b.sibling}e=
cc(e,a.internalContextTag,g);e["return"]=a;a=e}return h(a)}if("string"===typeof e||"number"===typeof e)return e=""+e,null!==b&&6===b.tag?(d(a,b.sibling),b=f(b,g),b.pendingProps=e,b["return"]=a,a=b):(d(a,b),e=ec(e,a.internalContextTag,g),e["return"]=a,a=e),h(a);if(vb(e))return C(a,b,e,g);if(Ia(e))return x(a,b,e,g);k&&qb(a,e);if("undefined"===typeof e)switch(a.tag){case 2:case 1:e=a.type,m("152",e.displayName||e.name||"Component")}return d(a,b)}}function ld(a,b){return a===b?0!==a||0!==b||1/a===1/b:
a!==a&&b!==b}function Pd(a){return function(b){try{return a(b)}catch(c){}}}function sc(a){if(!a)return ba;a=fa.get(a);return"number"===typeof a.tag?$c(a):a._processChildContext(a._context)}function Zc(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Qd(a,b){return a&&b?a===b?!0:Wc(a)?!1:Wc(b)?Qd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function C(a){if(void 0!==a._hostParent)return a._hostParent;if("number"===typeof a.tag){do a=
a["return"];while(a&&5!==a.tag);if(a)return a}return null}function Rd(a,b){for(var c=0,d=a;d;d=C(d))c++;d=0;for(var e=b;e;e=C(e))d++;for(;0<c-d;)a=C(a),c--;for(;0<d-c;)b=C(b),d--;for(;c--;){if(a===b||a===b.alternate)return a;a=C(a);b=C(b)}return null}function Sd(a,b,c){if(b=Td(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=sa(c._dispatchListeners,b),c._dispatchInstances=sa(c._dispatchInstances,a)}function pf(a){a&&a.dispatchConfig.phasedRegistrationNames&&wb.traverseTwoPhase(a._targetInst,
Sd,a)}function qf(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?wb.getParentInstance(b):null;wb.traverseTwoPhase(b,Sd,a)}}function Ud(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Td(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=sa(c._dispatchListeners,b),c._dispatchInstances=sa(c._dispatchInstances,a))}function rf(a){a&&a.dispatchConfig.registrationName&&Ud(a._targetInst,null,a)}function Ka(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=
c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?w.thatReturnsTrue:w.thatReturnsFalse;this.isPropagationStopped=w.thatReturnsFalse;return this}function sf(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function tf(a){a instanceof this?void 0:m("223");a.destructor();
10>this.eventPool.length&&this.eventPool.push(a)}function Vd(a){a.eventPool=[];a.getPooled=sf;a.release=tf}function Wd(a,b,c,d){return O.call(this,a,b,c,d)}function Xd(a,b,c,d){return O.call(this,a,b,c,d)}function uf(){var a=window.opera;return"object"===typeof a&&"function"===typeof a.version&&12>=parseInt(a.version(),10)}function Yd(a,b){switch(a){case "topKeyUp":return-1!==vf.indexOf(b.keyCode);case "topKeyDown":return 229!==b.keyCode;case "topKeyPress":case "topMouseDown":case "topBlur":return!0;
default:return!1}}function Zd(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}function wf(a,b){switch(a){case "topCompositionEnd":return Zd(b);case "topKeyPress":if(32!==b.which)return null;$d=!0;return ae;case "topTextInput":return a=b.data,a===ae&&$d?null:a;default:return null}}function xf(a,b){if(wa)return"topCompositionEnd"===a||!tc&&Yd(a,b)?(a=xb.getData(),xb.reset(),wa=!1,a):null;switch(a){case "topPaste":return null;case "topKeyPress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&
b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "topCompositionEnd":return be?null:b.data;default:return null}}function ce(a,b,c){a=O.getPooled(de.change,a,b,c);a.type="change";yb.enqueueStateRestore(c);la.accumulateTwoPhaseDispatches(a);return a}function yf(a){X.enqueueEvents(a);X.processEventQueue(!1)}function zb(a){var b=N.getNodeFromInstance(a);if(xa.updateValueIfChanged(b))return a}function zf(a,b){if("topChange"===a)return b}
function ee(){La&&(La.detachEvent("onpropertychange",fe),Ma=La=null)}function fe(a){"value"===a.propertyName&&zb(Ma)&&(a=ce(Ma,a,jb(a)),Ab.batchedUpdates(yf,a))}function Af(a,b,c){"topFocus"===a?(ee(),La=b,Ma=c,La.attachEvent("onpropertychange",fe)):"topBlur"===a&&ee()}function Bf(a){if("topSelectionChange"===a||"topKeyUp"===a||"topKeyDown"===a)return zb(Ma)}function Cf(a,b){if("topClick"===a)return zb(b)}function Df(a,b){if("topInput"===a||"topChange"===a)return zb(b)}function ge(a,b,c,d){return O.call(this,
a,b,c,d)}function Ne(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Ef[a])?!!b[a]:!1}function he(a,b,c,d){return Y.call(this,a,b,c,d)}function ie(a,b){if(uc||null==ya||ya!==Qb())return null;var c=ya;"selectionStart"in c&&vc.hasSelectionCapabilities(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return Na&&bc(Na,
c)?null:(Na=c,a=O.getPooled(je.select,wc,a,b),a.type="select",a.target=ya,la.accumulateTwoPhaseDispatches(a),a)}function ke(a,b,c,d){return O.call(this,a,b,c,d)}function le(a,b,c,d){return O.call(this,a,b,c,d)}function me(a,b,c,d){return Y.call(this,a,b,c,d)}function ne(a,b,c,d){return Y.call(this,a,b,c,d)}function oe(a,b,c,d){return ma.call(this,a,b,c,d)}function pe(a,b,c,d){return Y.call(this,a,b,c,d)}function qe(a,b,c,d){return O.call(this,a,b,c,d)}function re(a,b,c,d){return ma.call(this,a,b,
c,d)}function xc(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Ff(a){a=a?9===a.nodeType?a.documentElement:a.firstChild:null;return!(!a||1!==a.nodeType||!a.hasAttribute(Gf))}function Bb(a,b,c,d,e){xc(c)?void 0:m("200");var f=c._reactRootContainer;if(f)B.updateContainer(b,f,a,e);else{if(!d&&!Ff(c))for(d=void 0;d=c.lastChild;)c.removeChild(d);var g=B.createContainer(c);f=c._reactRootContainer=g;B.unbatchedUpdates(function(){B.updateContainer(b,
g,a,e)})}return B.getPublicRootInstance(f)}function se(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;xc(b)?void 0:m("200");return te.createPortal(a,b,null,c)}Za?void 0:m("227");var z=!("undefined"===typeof window||!window.document||!window.document.createElement),q=Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign,kb=null,ta={},ha={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},possibleRegistrationNames:null,injectEventPluginOrder:function(a){kb?
m("101"):void 0;kb=Array.prototype.slice.call(a);ud()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ta.hasOwnProperty(c)&&ta[c]===d||(ta[c]?m("102",c):void 0,ta[c]=d,b=!0)}b&&ud()}},na=ha;ka.thatReturns=lb;ka.thatReturnsFalse=lb(!1);ka.thatReturnsTrue=lb(!0);ka.thatReturnsNull=lb(null);ka.thatReturnsThis=function(){return this};ka.thatReturnsArgument=function(a){return a};var w=ka,ue={listen:function(a,b,c){if(a.addEventListener)return a.addEventListener(b,
c,!1),{remove:function(){a.removeEventListener(b,c,!1)}};if(a.attachEvent)return a.attachEvent("on"+b,c),{remove:function(){a.detachEvent("on"+b,c)}}},capture:function(a,b,c){return a.addEventListener?(a.addEventListener(b,c,!0),{remove:function(){a.removeEventListener(b,c,!0)}}):{remove:w}},registerDefault:function(){}},Hf={children:!0,dangerouslySetInnerHTML:!0,autoFocus:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,style:!0},ve={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,
HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=ve,c=a.Properties||{},d=a.DOMAttributeNamespaces||{},e=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in c){aa.properties.hasOwnProperty(f)?m("48",f):void 0;var g=f.toLowerCase(),h=c[f];g={attributeName:g,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:ua(h,b.MUST_USE_PROPERTY),hasBooleanValue:ua(h,b.HAS_BOOLEAN_VALUE),
hasNumericValue:ua(h,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:ua(h,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:ua(h,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:ua(h,b.HAS_STRING_BOOLEAN_VALUE)};1>=g.hasBooleanValue+g.hasNumericValue+g.hasOverloadedBooleanValue?void 0:m("50",f);e.hasOwnProperty(f)&&(g.attributeName=e[f]);d.hasOwnProperty(f)&&(g.attributeNamespace=d[f]);a.hasOwnProperty(f)&&(g.mutationMethod=a[f]);aa.properties[f]=g}}},aa={ID_ATTRIBUTE_NAME:"data-reactid",
ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ATTRIBUTE_NAME_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",properties:{},shouldSetAttribute:function(a,
b){if(aa.isReservedProp(a)||!("o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return aa.shouldAttributeAcceptBooleanValue(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}},getPropertyInfo:function(a){return aa.properties.hasOwnProperty(a)?aa.properties[a]:null},shouldAttributeAcceptBooleanValue:function(a){if(aa.isReservedProp(a))return!0;var b=aa.getPropertyInfo(a);if(b)return b.hasBooleanValue||
b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a},isReservedProp:function(a){return Hf.hasOwnProperty(a)},injection:ve},A=aa,gf=A.ID_ATTRIBUTE_NAME,yd={hasCachedChildNodes:1},we=Math.random().toString(36).slice(2),M="__reactInternalInstance$"+we,xe="__reactEventHandlers$"+we,N={getClosestInstanceFromNode:zd,getInstanceFromNode:function(a){var b=a[M];if(b)return 5===b.tag||6===b.tag?b:b._hostNode===a?b:null;b=zd(a);return null!=b&&b._hostNode===
a?b:null},getNodeFromInstance:function(a){if(5===a.tag||6===a.tag)return a.stateNode;void 0===a._hostNode?m("33"):void 0;if(a._hostNode)return a._hostNode;for(var b=[];!a._hostNode;)b.push(a),a._hostParent?void 0:m("34"),a=a._hostParent;for(;b.length;a=b.pop())lc(a,a._hostNode);return a._hostNode},precacheChildNodes:lc,precacheNode:xd,uncacheNode:function(a){var b=a._hostNode;b&&(delete b[M],a._hostNode=null)},precacheFiberNode:function(a,b){b[M]=a},getFiberCurrentPropsFromNode:function(a){return a[xe]||
null},updateFiberProps:function(a,b){a[xe]=b}},fa={remove:function(a){a._reactInternalFiber=void 0},get:function(a){return a._reactInternalFiber},has:function(a){return void 0!==a._reactInternalFiber},set:function(a,b){a._reactInternalFiber=b}},yc={ReactCurrentOwner:Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner},Oa={isFiberMounted:function(a){return 2===mb(a)},isMounted:function(a){return(a=fa.get(a))?2===mb(a):!1},findCurrentFiberUsingSlowPath:mc,findCurrentHostFiber:function(a){a=
mc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null},findCurrentHostFiberWithNoPortals:function(a){a=mc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===
a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}},t={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(a){"function"!==typeof a.invokeGuardedCallback?m("197"):void 0;td=a.invokeGuardedCallback}},invokeGuardedCallback:function(a,b,c,d,e,f,g,h,k){td.apply(t,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){t.invokeGuardedCallback.apply(this,arguments);if(t.hasCaughtError()){var l=
t.clearCaughtError();t._hasRethrowError||(t._hasRethrowError=!0,t._rethrowError=l)}},rethrowCaughtError:function(){return ff.apply(t,arguments)},hasCaughtError:function(){return t._hasCaughtError},clearCaughtError:function(){if(t._hasCaughtError){var a=t._caughtError;t._caughtError=null;t._hasCaughtError=!1;return a}m("198")}},Cd=t,Cb,nc={isEndish:function(a){return"topMouseUp"===a||"topTouchEnd"===a||"topTouchCancel"===a},isMoveish:function(a){return"topMouseMove"===a||"topTouchMove"===a},isStartish:function(a){return"topMouseDown"===
a||"topTouchStart"===a},executeDirectDispatch:function(a){var b=a._dispatchListeners,c=a._dispatchInstances;Array.isArray(b)?m("103"):void 0;a.currentTarget=b?nc.getNodeFromInstance(c):null;b=b?b(a):null;a.currentTarget=null;a._dispatchListeners=null;a._dispatchInstances=null;return b},executeDispatchesInOrder:function(a,b){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)Bd(a,b,c[e],d[e]);else c&&Bd(a,b,c,d);a._dispatchListeners=
null;a._dispatchInstances=null},executeDispatchesInOrderStopAtTrue:function(a){a:{var b=a._dispatchListeners;var c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++){if(b[d](a,c[d])){b=c[d];break a}}else if(b&&b(a,c)){b=c;break a}b=null}a._dispatchInstances=null;a._dispatchListeners=null;return b},hasDispatches:function(a){return!!a._dispatchListeners},getFiberCurrentPropsFromNode:function(a){return Cb.getFiberCurrentPropsFromNode(a)},getInstanceFromNode:function(a){return Cb.getInstanceFromNode(a)},
getNodeFromInstance:function(a){return Cb.getNodeFromInstance(a)},injection:{injectComponentTree:function(a){Cb=a}}},Ga=nc,nb=null,Pa=null,Qa=null,yb={injection:{injectFiberControlledHostComponent:function(a){nb=a}},enqueueStateRestore:function(a){Pa?Qa?Qa.push(a):Qa=[a]:Pa=a},restoreStateIfNeeded:function(){if(Pa){var a=Pa,b=Qa;Qa=Pa=null;Dd(a);if(b)for(a=0;a<b.length;a++)Dd(b[a])}}},zc=!1,Ab={batchedUpdates:function(a,b){if(zc)return kc(Ed,a,b);zc=!0;try{return kc(Ed,a,b)}finally{zc=!1,yb.restoreStateIfNeeded()}},
injection:{injectStackBatchedUpdates:function(a){kc=a},injectFiberBatchedUpdates:function(a){sd=a}}},Db=[],ia={_enabled:!0,_handleTopLevel:null,setHandleTopLevel:function(a){ia._handleTopLevel=a},setEnabled:function(a){ia._enabled=!!a},isEnabled:function(){return ia._enabled},trapBubbledEvent:function(a,b,c){return c?ue.listen(c,b,ia.dispatchEvent.bind(null,a)):null},trapCapturedEvent:function(a,b,c){return c?ue.capture(c,b,ia.dispatchEvent.bind(null,a)):null},dispatchEvent:function(a,b){if(ia._enabled){var c=
jb(b);c=N.getClosestInstanceFromNode(c);null===c||"number"!==typeof c.tag||Oa.isFiberMounted(c)||(c=null);if(Db.length){var d=Db.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Ab.batchedUpdates(hf,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Db.length&&Db.push(a)}}}},G=ia,Ra=null,X={injection:{injectEventPluginOrder:na.injectEventPluginOrder,injectEventPluginsByName:na.injectEventPluginsByName},
getListener:function(a,b){if("number"===typeof a.tag){var c=a.stateNode;if(!c)return null;var d=Ga.getFiberCurrentPropsFromNode(c);if(!d)return null;c=d[b];if(Fd(b,a.type,d))return null}else{d=a._currentElement;if("string"===typeof d||"number"===typeof d||!a._rootNodeID)return null;a=d.props;c=a[b];if(Fd(b,d.type,a))return null}c&&"function"!==typeof c?m("231",b,typeof c):void 0;return c},extractEvents:function(a,b,c,d){for(var e,f=na.plugins,g=0;g<f.length;g++){var h=f[g];h&&(h=h.extractEvents(a,
b,c,d))&&(e=sa(e,h))}return e},enqueueEvents:function(a){a&&(Ra=sa(Ra,a))},processEventQueue:function(a){var b=Ra;Ra=null;a?Ha(b,ef):Ha(b,df);Ra?m("95"):void 0;Cd.rethrowCaughtError()}},qd;z&&(qd=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var ra={animationend:ob("Animation","AnimationEnd"),animationiteration:ob("Animation","AnimationIteration"),animationstart:ob("Animation","AnimationStart"),transitionend:ob("Transition","TransitionEnd")},
jc={},pd={};z&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);var ye={topAbort:"abort",topAnimationEnd:ib("animationend")||"animationend",topAnimationIteration:ib("animationiteration")||"animationiteration",topAnimationStart:ib("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",
topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",
topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",
topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:ib("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},Hd={},jf=0,pb="_reactListenersID"+(""+Math.random()).slice(2),l=q({},{handleTopLevel:function(a,
b,c,d){a=X.extractEvents(a,b,c,d);X.enqueueEvents(a);X.processEventQueue(!1)}},{setEnabled:function(a){G&&G.setEnabled(a)},isEnabled:function(){return!(!G||!G.isEnabled())},listenTo:function(a,b){var c=Gd(b);a=na.registrationNameDependencies[a];for(var d=0;d<a.length;d++){var e=a[d];c.hasOwnProperty(e)&&c[e]||("topWheel"===e?Fa("wheel")?G.trapBubbledEvent("topWheel","wheel",b):Fa("mousewheel")?G.trapBubbledEvent("topWheel","mousewheel",b):G.trapBubbledEvent("topWheel","DOMMouseScroll",b):"topScroll"===
e?G.trapCapturedEvent("topScroll","scroll",b):"topFocus"===e||"topBlur"===e?(G.trapCapturedEvent("topFocus","focus",b),G.trapCapturedEvent("topBlur","blur",b),c.topBlur=!0,c.topFocus=!0):"topCancel"===e?(Fa("cancel",!0)&&G.trapCapturedEvent("topCancel","cancel",b),c.topCancel=!0):"topClose"===e?(Fa("close",!0)&&G.trapCapturedEvent("topClose","close",b),c.topClose=!0):ye.hasOwnProperty(e)&&G.trapBubbledEvent(e,ye[e],b),c[e]=!0)}},isListeningToAllDependencies:function(a,b){b=Gd(b);a=na.registrationNameDependencies[a];
for(var c=0;c<a.length;c++){var d=a[c];if(!b.hasOwnProperty(d)||!b[d])return!1}return!0},trapBubbledEvent:function(a,b,c){return G.trapBubbledEvent(a,b,c)},trapCapturedEvent:function(a,b,c){return G.trapCapturedEvent(a,b,c)}}),Sa={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,
gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},If=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(a){If.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Sa[b]=Sa[a]})});var Jf={background:{backgroundAttachment:!0,
backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},
font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},ze=!1;if(z){var Kf=document.createElement("div").style;try{Kf.font=""}catch(a){ze=!0}}var Ae={createDangerousStringForStyles:function(){},setValueForStyles:function(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Sa.hasOwnProperty(e)&&
Sa[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");if(d)a.setProperty(c,e);else if(e)a[c]=e;else if(d=ze&&Jf[c])for(var g in d)a[g]="";else a[c]=""}}},lf=new RegExp("^["+A.ATTRIBUTE_NAME_START_CHAR+"]["+A.ATTRIBUTE_NAME_CHAR+"]*$"),Jd={},Id={},Ac={setAttributeForID:function(a,b){a.setAttribute(A.ID_ATTRIBUTE_NAME,b)},setAttributeForRoot:function(a){a.setAttribute(A.ROOT_ATTRIBUTE_NAME,"")},getValueForProperty:function(){},getValueForAttribute:function(){},setValueForProperty:function(a,b,c){var d=
A.getPropertyInfo(b);if(d&&A.shouldSetAttribute(b,c)){var e=d.mutationMethod;e?e(a,c):null==c||d.hasBooleanValue&&!c||d.hasNumericValue&&isNaN(c)||d.hasPositiveNumericValue&&1>c||d.hasOverloadedBooleanValue&&!1===c?Ac.deleteValueForProperty(a,b):d.mustUseProperty?a[d.propertyName]=c:(b=d.attributeName,(e=d.attributeNamespace)?a.setAttributeNS(e,b,""+c):d.hasBooleanValue||d.hasOverloadedBooleanValue&&!0===c?a.setAttribute(b,""):a.setAttribute(b,""+c))}else Ac.setValueForAttribute(a,b,A.shouldSetAttribute(b,
c)?c:null)},setValueForAttribute:function(a,b,c){kf(b)&&(null==c?a.removeAttribute(b):a.setAttribute(b,""+c))},deleteValueForAttribute:function(a,b){a.removeAttribute(b)},deleteValueForProperty:function(a,b){var c=A.getPropertyInfo(b);c?(b=c.mutationMethod)?b(a,void 0):c.mustUseProperty?a[c.propertyName]=c.hasBooleanValue?!1:"":a.removeAttribute(c.attributeName):a.removeAttribute(b)}},oa=Ac,Be=yc.ReactDebugCurrentFrame,Ta={current:null,phase:null,resetCurrentFiber:function(){Be.getCurrentStack=null;
Ta.current=null;Ta.phase=null},setCurrentFiber:function(a,b){Be.getCurrentStack=Kd;Ta.current=a;Ta.phase=b},getCurrentFiberOwnerName:function(){return null},getCurrentFiberStackAddendum:Kd},Lf=Ta,Bc={getHostProps:function(a,b){var c=b.value,d=b.checked;return q({type:void 0,step:void 0,min:void 0,max:void 0},b,{defaultChecked:void 0,defaultValue:void 0,value:null!=c?c:a._wrapperState.initialValue,checked:null!=d?d:a._wrapperState.initialChecked})},initWrapperState:function(a,b){var c=b.defaultValue;
a._wrapperState={initialChecked:null!=b.checked?b.checked:b.defaultChecked,initialValue:null!=b.value?b.value:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}},updateWrapper:function(a,b){var c=b.checked;null!=c&&oa.setValueForProperty(a,"checked",c||!1);c=b.value;if(null!=c)if(0===c&&""===a.value)a.value="0";else if("number"===b.type){if(b=parseFloat(a.value)||0,c!=b||c==b&&a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else null==b.value&&null!=b.defaultValue&&
a.defaultValue!==""+b.defaultValue&&(a.defaultValue=""+b.defaultValue),null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)},postMountWrapper:function(a,b){switch(b.type){case "submit":case "reset":break;case "color":case "date":case "datetime":case "datetime-local":case "month":case "time":case "week":a.value="";a.value=a.defaultValue;break;default:a.value=a.value}b=a.name;""!==b&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==b&&
(a.name=b)},restoreControlledState:function(a,b){Bc.updateWrapper(a,b);var c=b.name;if("radio"===b.type&&null!=c){for(b=a;b.parentNode;)b=b.parentNode;c=b.querySelectorAll("input[name\x3d"+JSON.stringify(""+c)+'][type\x3d"radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=N.getFiberCurrentPropsFromNode(d);e?void 0:m("90");Bc.updateWrapper(d,e)}}}}},U=Bc,za={validateProps:function(){},postMountWrapper:function(a,b){null!=b.value&&a.setAttribute("value",b.value)},getHostProps:function(a,
b){a=q({children:void 0},b);if(b=mf(b.children))a.children=b;return a}},ja={getHostProps:function(a,b){return q({},b,{value:void 0})},initWrapperState:function(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}},postMountWrapper:function(a,b){a.multiple=!!b.multiple;var c=b.value;null!=c?va(a,!!b.multiple,c):null!=b.defaultValue&&va(a,!!b.multiple,b.defaultValue)},postUpdateWrapper:function(a,b){a._wrapperState.initialValue=void 0;var c=a._wrapperState.wasMultiple;
a._wrapperState.wasMultiple=!!b.multiple;var d=b.value;null!=d?va(a,!!b.multiple,d):c!==!!b.multiple&&(null!=b.defaultValue?va(a,!!b.multiple,b.defaultValue):va(a,!!b.multiple,b.multiple?[]:""))},restoreControlledState:function(a,b){var c=b.value;null!=c&&va(a,!!b.multiple,c)}},Ce={getHostProps:function(a,b){null!=b.dangerouslySetInnerHTML?m("91"):void 0;return q({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})},initWrapperState:function(a,b){var c=b.value,d=c;null==
c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?m("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:m("93"),b=b[0]),c=""+b),null==c&&(c=""),d=c);a._wrapperState={initialValue:""+d}},updateWrapper:function(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)},postMountWrapper:function(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)},restoreControlledState:function(a,b){Ce.updateWrapper(a,
b)}},V=Ce,cf=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),xa={_getTrackerFromNode:function(a){return a._valueTracker},track:function(a){a._valueTracker||(a._valueTracker=nf(a))},updateValueIfChanged:function(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ld(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1},stopTracking:function(a){(a=a._valueTracker)&&
a.stopTracking()}},Eb,Cc=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else for(Eb=Eb||document.createElement("div"),Eb.innerHTML="\x3csvg\x3e"+b+"\x3c/svg\x3e",b=Eb.firstChild;b.firstChild;)a.appendChild(b.firstChild)}),Mf=/["'&<>]/;z&&("textContent"in document.documentElement||(od=function(a,
b){if(3===a.nodeType)a.nodeValue=b;else{if("boolean"===typeof b||"number"===typeof b)b=""+b;else{b=""+b;var c=Mf.exec(b);if(c){var d="",e,f=0;for(e=c.index;e<b.length;e++){switch(b.charCodeAt(e)){case 34:c="\x26quot;";break;case 38:c="\x26amp;";break;case 39:c="\x26#x27;";break;case 60:c="\x26lt;";break;case 62:c="\x26gt;";break;default:continue}f!==e&&(d+=b.substring(f,e));f=e+1;d+=c}b=f!==e?d+b.substring(f,e):d}}Cc(a,b)}}));var Dc=od,Ec=Lf.getCurrentFiberOwnerName,of=l.listenTo,Fb=na.registrationNameModules,
Aa={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",
topWaiting:"waiting"},I={createElement:function(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;"http://www.w3.org/1999/xhtml"===d&&(d=Sc(a));"http://www.w3.org/1999/xhtml"===d?"script"===a?(a=c.createElement("div"),a.innerHTML="\x3cscript\x3e\x3c/script\x3e",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a},createTextNode:function(a,b){return(9===b.nodeType?b:b.ownerDocument).createTextNode(a)},setInitialProperties:function(a,
b,c,d){var e=hc(b,c);switch(b){case "iframe":case "object":l.trapBubbledEvent("topLoad","load",a);var f=c;break;case "video":case "audio":for(f in Aa)Aa.hasOwnProperty(f)&&l.trapBubbledEvent(f,Aa[f],a);f=c;break;case "source":l.trapBubbledEvent("topError","error",a);f=c;break;case "img":case "image":l.trapBubbledEvent("topError","error",a);l.trapBubbledEvent("topLoad","load",a);f=c;break;case "form":l.trapBubbledEvent("topReset","reset",a);l.trapBubbledEvent("topSubmit","submit",a);f=c;break;case "details":l.trapBubbledEvent("topToggle",
"toggle",a);f=c;break;case "input":U.initWrapperState(a,c);f=U.getHostProps(a,c);l.trapBubbledEvent("topInvalid","invalid",a);R(d,"onChange");break;case "option":za.validateProps(a,c);f=za.getHostProps(a,c);break;case "select":ja.initWrapperState(a,c);f=ja.getHostProps(a,c);l.trapBubbledEvent("topInvalid","invalid",a);R(d,"onChange");break;case "textarea":V.initWrapperState(a,c);f=V.getHostProps(a,c);l.trapBubbledEvent("topInvalid","invalid",a);R(d,"onChange");break;default:f=c}ic(b,f,Ec);var g=f,
h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===h?Ae.setValueForStyles(a,k):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&Cc(a,k)):"children"===h?"string"===typeof k?Dc(a,k):"number"===typeof k&&Dc(a,""+k):"suppressContentEditableWarning"!==h&&(Fb.hasOwnProperty(h)?null!=k&&R(d,h):e?oa.setValueForAttribute(a,h,k):null!=k&&oa.setValueForProperty(a,h,k))}switch(b){case "input":xa.track(a);U.postMountWrapper(a,c);break;case "textarea":xa.track(a);V.postMountWrapper(a,c);break;
case "option":za.postMountWrapper(a,c);break;case "select":ja.postMountWrapper(a,c);break;default:"function"===typeof f.onClick&&(a.onclick=w)}},diffProperties:function(a,b,c,d,e){var f=null;switch(b){case "input":c=U.getHostProps(a,c);d=U.getHostProps(a,d);f=[];break;case "option":c=za.getHostProps(a,c);d=za.getHostProps(a,d);f=[];break;case "select":c=ja.getHostProps(a,c);d=ja.getHostProps(a,d);f=[];break;case "textarea":c=V.getHostProps(a,c);d=V.getHostProps(a,d);f=[];break;default:"function"!==
typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=w)}ic(b,d,Ec);var g,h;a=null;for(g in c)if(!d.hasOwnProperty(g)&&c.hasOwnProperty(g)&&null!=c[g])if("style"===g)for(h in b=c[g],b)b.hasOwnProperty(h)&&(a||(a={}),a[h]="");else"dangerouslySetInnerHTML"!==g&&"children"!==g&&"suppressContentEditableWarning"!==g&&(Fb.hasOwnProperty(g)?f||(f=[]):(f=f||[]).push(g,null));for(g in d){var k=d[g];b=null!=c?c[g]:void 0;if(d.hasOwnProperty(g)&&k!==b&&(null!=k||null!=b))if("style"===g)if(b){for(h in b)!b.hasOwnProperty(h)||
k&&k.hasOwnProperty(h)||(a||(a={}),a[h]="");for(h in k)k.hasOwnProperty(h)&&b[h]!==k[h]&&(a||(a={}),a[h]=k[h])}else a||(f||(f=[]),f.push(g,a)),a=k;else"dangerouslySetInnerHTML"===g?(k=k?k.__html:void 0,b=b?b.__html:void 0,null!=k&&b!==k&&(f=f||[]).push(g,""+k)):"children"===g?b===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(g,""+k):"suppressContentEditableWarning"!==g&&(Fb.hasOwnProperty(g)?(null!=k&&R(e,g),f||b===k||(f=[])):(f=f||[]).push(g,k))}a&&(f=f||[]).push("style",a);return f},
updateProperties:function(a,b,c,d,e){hc(c,d);d=hc(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?Ae.setValueForStyles(a,h):"dangerouslySetInnerHTML"===g?Cc(a,h):"children"===g?Dc(a,h):d?null!=h?oa.setValueForAttribute(a,g,h):oa.deleteValueForAttribute(a,g):null!=h?oa.setValueForProperty(a,g,h):oa.deleteValueForProperty(a,g)}switch(c){case "input":U.updateWrapper(a,e);xa.updateValueIfChanged(a);break;case "textarea":V.updateWrapper(a,e);break;case "select":ja.postUpdateWrapper(a,
e)}},diffHydratedProperties:function(a,b,c,d,e){switch(b){case "iframe":case "object":l.trapBubbledEvent("topLoad","load",a);break;case "video":case "audio":for(var f in Aa)Aa.hasOwnProperty(f)&&l.trapBubbledEvent(f,Aa[f],a);break;case "source":l.trapBubbledEvent("topError","error",a);break;case "img":case "image":l.trapBubbledEvent("topError","error",a);l.trapBubbledEvent("topLoad","load",a);break;case "form":l.trapBubbledEvent("topReset","reset",a);l.trapBubbledEvent("topSubmit","submit",a);break;
case "details":l.trapBubbledEvent("topToggle","toggle",a);break;case "input":U.initWrapperState(a,c);l.trapBubbledEvent("topInvalid","invalid",a);R(e,"onChange");break;case "option":za.validateProps(a,c);break;case "select":ja.initWrapperState(a,c);l.trapBubbledEvent("topInvalid","invalid",a);R(e,"onChange");break;case "textarea":V.initWrapperState(a,c),l.trapBubbledEvent("topInvalid","invalid",a),R(e,"onChange")}ic(b,c,Ec);d=null;for(var g in c)c.hasOwnProperty(g)&&(f=c[g],"children"===g?"string"===
typeof f?a.textContent!==f&&(d=["children",f]):"number"===typeof f&&a.textContent!==""+f&&(d=["children",""+f]):Fb.hasOwnProperty(g)&&null!=f&&R(e,g));switch(b){case "input":xa.track(a);U.postMountWrapper(a,c);break;case "textarea":xa.track(a);V.postMountWrapper(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&(a.onclick=w)}return d},diffHydratedText:function(a,b){return a.nodeValue!==b},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},
warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":U.restoreControlledState(a,c);break;case "textarea":V.restoreControlledState(a,c);break;case "select":ja.restoreControlledState(a,c)}}},Gb=void 0;if(z)if("function"!==typeof requestIdleCallback){var De=null,Fc=null,Gc=!1,Hc=!1,Hb=0,Ib=33,Ua=33,Nf={timeRemaining:"object"===typeof performance&&"function"===typeof performance.now?function(){return Hb-performance.now()}:
function(){return Hb-Date.now()}},Ee="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){a.source===window&&a.data===Ee&&(Gc=!1,a=Fc,Fc=null,null!==a&&a(Nf))},!1);var Of=function(a){Hc=!1;var b=a-Hb+Ua;b<Ua&&Ib<Ua?(8>b&&(b=8),Ua=b<Ib?Ib:b):Ib=b;Hb=a+Ua;Gc||(Gc=!0,window.postMessage(Ee,"*"));b=De;De=null;null!==b&&b(a)};Gb=function(a){Fc=a;Hc||(Hc=!0,requestAnimationFrame(Of));return 0}}else Gb=requestIdleCallback;else Gb=function(a){setTimeout(function(){a({timeRemaining:function(){return Infinity}})});
return 0};var Pf=Gb,pc=void 0,qc=void 0,ba={},bb=[],da=-1,Qf=Oa.isFiberMounted,ca={current:ba},S={current:!1},cb=ba;if("function"===typeof Symbol&&Symbol["for"]){var Fe=Symbol["for"]("react.coroutine");var Ge=Symbol["for"]("react.yield")}else Fe=60104,Ge=60105;var Rf=Ge,Sf=Fe,Ic="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.portal")||60106,te={createPortal:function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ic,key:null==d?null:""+d,children:a,
containerInfo:b,implementation:c}},isPortal:function(a){return"object"===typeof a&&null!==a&&a.$$typeof===Ic},REACT_PORTAL_TYPE:Ic},sb=Sf,tb=Rf,ub=te.REACT_PORTAL_TYPE,$b=ad,vb=Array.isArray,Od="function"===typeof Symbol&&Symbol.iterator,rb="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,Xb=rc(!0,!0),Zb=rc(!1,!0),Yb=rc(!1,!1),bf=Object.prototype.hasOwnProperty,af=Oa.isMounted,Ze=yc.ReactCurrentOwner,Vb=null,Wb=null,qa={},db=yc.ReactCurrentOwner;sc._injectFiber=function(a){$c=
a};var Tf=Oa.findCurrentHostFiber,Uf=Oa.findCurrentHostFiberWithNoPortals;sc._injectFiber(function(a){var b;a:{Qf(a)&&2===a.tag?void 0:m("170");for(b=a;3!==b.tag;){if(Ea(b)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}(b=b["return"])?void 0:m("171")}b=b.stateNode.context}return Ea(a)?kd(a,b,!1):b});var Rb=null,He={getOffsets:function(a){var b=window.getSelection&&window.getSelection();if(!b||0===b.rangeCount)return null;var c=b.anchorNode,d=b.anchorOffset,e=b.focusNode,f=b.focusOffset,
g=b.getRangeAt(0);try{g.startContainer.nodeType,g.endContainer.nodeType}catch(k){return null}b=b.anchorNode===b.focusNode&&b.anchorOffset===b.focusOffset?0:g.toString().length;var h=g.cloneRange();h.selectNodeContents(a);h.setEnd(g.startContainer,g.startOffset);a=h.startContainer===h.endContainer&&h.startOffset===h.endOffset?0:h.toString().length;g=a+b;b=document.createRange();b.setStart(c,d);b.setEnd(e,f);c=b.collapsed;return{start:c?g:a,end:c?a:g}},setOffsets:function(a,b){if(window.getSelection){var c=
window.getSelection(),d=a[Xc()].length,e=Math.min(b.start,d);b=void 0===b.end?e:Math.min(b.end,d);!c.extend&&e>b&&(d=b,b=e,e=d);d=Yc(a,e);a=Yc(a,b);if(d&&a){var f=document.createRange();f.setStart(d.node,d.offset);c.removeAllRanges();e>b?(c.addRange(f),c.extend(a.node,a.offset)):(f.setEnd(a.node,a.offset),c.addRange(f))}}}},Va={hasSelectionCapabilities:function(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&"text"===a.type||"textarea"===b||"true"===a.contentEditable)},getSelectionInformation:function(){var a=
Qb();return{focusedElem:a,selectionRange:Va.hasSelectionCapabilities(a)?Va.getSelection(a):null}},restoreSelection:function(a){var b=Qb(),c=a.focusedElem;a=a.selectionRange;if(b!==c&&Qd(document.documentElement,c)){Va.hasSelectionCapabilities(c)&&Va.setSelection(c,a);b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});try{c.focus()}catch(d){}for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}},getSelection:function(a){return("selectionStart"in
a?{start:a.selectionStart,end:a.selectionEnd}:He.getOffsets(a))||{start:0,end:0}},setSelection:function(a,b){var c=b.start,d=b.end;void 0===d&&(d=c);"selectionStart"in a?(a.selectionStart=c,a.selectionEnd=Math.min(d,a.value.length)):He.setOffsets(a,b)}},vc=Va;ab._injectFiber=function(a){Uc=a};ab._injectStack=function(a){Vc=a};var wb={isAncestor:function(a,b){for(;b;){if(a===b||a===b.alternate)return!0;b=C(b)}return!1},getLowestCommonAncestor:Rd,getParentInstance:function(a){return C(a)},traverseTwoPhase:function(a,
b,c){for(var d=[];a;)d.push(a),a=C(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)},traverseEnterLeave:function(a,b,c,d,e){for(var f=a&&b?Rd(a,b):null,g=[];a&&a!==f;)g.push(a),a=C(a);for(a=[];b&&b!==f;)a.push(b),b=C(b);for(b=0;b<g.length;b++)c(g[b],"bubbled",d);for(b=a.length;0<b--;)c(a[b],"captured",e)}},Td=X.getListener,la={accumulateTwoPhaseDispatches:function(a){Ha(a,pf)},accumulateTwoPhaseDispatchesSkipTarget:function(a){Ha(a,qf)},accumulateDirectDispatches:function(a){Ha(a,
rf)},accumulateEnterLeaveDispatches:function(a,b,c,d){wb.traverseEnterLeave(c,d,Ud,a,b)}},Wa=null,Jc=null,Jb=null,Kc={initialize:function(a){Wa=a;Jc=Kc.getText();return!0},reset:function(){Jb=Jc=Wa=null},getData:function(){if(Jb)return Jb;var a,b=Jc,c=b.length,d,e=Kc.getText(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return Jb=e.slice(a,1<d?1-d:void 0)},getText:function(){return"value"in Wa?Wa.value:Wa[Xc()]}},xb=Kc,Ie="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
Vf={type:null,target:null,currentTarget:w.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};q(Ka.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=w.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():
"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=w.thatReturnsTrue)},persist:function(){this.isPersistent=w.thatReturnsTrue},isPersistent:w.thatReturnsFalse,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<Ie.length;a++)this[Ie[a]]=null}});Ka.Interface=Vf;Ka.augmentClass=function(a,b){function c(){}c.prototype=this.prototype;var d=new c;q(d,a.prototype);a.prototype=d;a.prototype.constructor=a;a.Interface=q({},this.Interface,
b);a.augmentClass=this.augmentClass;Vd(a)};Vd(Ka);var O=Ka;O.augmentClass(Wd,{data:null});O.augmentClass(Xd,{data:null});var vf=[9,13,27,32],tc=z&&"CompositionEvent"in window,Xa=null;z&&"documentMode"in document&&(Xa=document.documentMode);var Wf=z&&"TextEvent"in window&&!Xa&&!uf(),be=z&&(!tc||Xa&&8<Xa&&11>=Xa),ae=String.fromCharCode(32),ea={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput",
"topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},
dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},$d=!1,wa=!1,Xf={eventTypes:ea,extractEvents:function(a,b,c,d){var e;if(tc)b:{switch(a){case "topCompositionStart":var f=ea.compositionStart;break b;case "topCompositionEnd":f=ea.compositionEnd;break b;case "topCompositionUpdate":f=ea.compositionUpdate;break b}f=void 0}else wa?Yd(a,c)&&(f=ea.compositionEnd):"topKeyDown"===a&&229===c.keyCode&&(f=ea.compositionStart);f?(be&&(wa||f!==ea.compositionStart?
f===ea.compositionEnd&&wa&&(e=xb.getData()):wa=xb.initialize(d)),f=Wd.getPooled(f,b,c,d),e?f.data=e:(e=Zd(c),null!==e&&(f.data=e)),la.accumulateTwoPhaseDispatches(f),e=f):e=null;(a=Wf?wf(a,c):xf(a,c))?(b=Xd.getPooled(ea.beforeInput,b,c,d),b.data=a,la.accumulateTwoPhaseDispatches(b)):b=null;return[e,b]}},Oe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},de={change:{phasedRegistrationNames:{bubbled:"onChange",
captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}},La=null,Ma=null,Lc=!1;z&&(Lc=Fa("input")&&(!document.documentMode||9<document.documentMode));var Yf={eventTypes:de,_isInputEventSupported:Lc,extractEvents:function(a,b,c,d){var e=b?N.getNodeFromInstance(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=zf;else if(Tc(e))if(Lc)g=Df;else{g=Bf;var h=Af}else f=e.nodeName,
!f||"input"!==f.toLowerCase()||"checkbox"!==e.type&&"radio"!==e.type||(g=Cf);if(g&&(g=g(a,b)))return ce(g,c,d);h&&h(a,e,b);"topBlur"===a&&null!=b&&(a=b._wrapperState||e._wrapperState)&&a.controlled&&"number"===e.type&&(a=""+e.value,e.getAttribute("value")!==a&&e.setAttribute("value",a))}};O.augmentClass(ge,{view:function(a){if(a.view)return a.view;a=jb(a);return a.window===a?a:(a=a.ownerDocument)?a.defaultView||a.parentWindow:window},detail:function(a){return a.detail||0}});var Y=ge,Ef={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};Y.augmentClass(he,{screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Pb,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}});var ma=he,Mc={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut",
"topMouseOver"]}},Zf={eventTypes:Mc,extractEvents:function(a,b,c,d){if("topMouseOver"===a&&(c.relatedTarget||c.fromElement)||"topMouseOut"!==a&&"topMouseOver"!==a)return null;var e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;"topMouseOut"===a?(a=b,b=(b=c.relatedTarget||c.toElement)?N.getClosestInstanceFromNode(b):null):a=null;if(a===b)return null;var f=null==a?e:N.getNodeFromInstance(a);e=null==b?e:N.getNodeFromInstance(b);var g=ma.getPooled(Mc.mouseLeave,a,c,d);g.type=
"mouseleave";g.target=f;g.relatedTarget=e;c=ma.getPooled(Mc.mouseEnter,b,c,d);c.type="mouseenter";c.target=e;c.relatedTarget=f;la.accumulateEnterLeaveDispatches(g,c,a,b);return[g,c]}},$f=z&&"documentMode"in document&&11>=document.documentMode,je={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},ya=null,wc=null,Na=null,uc=!1,ag=l.isListeningToAllDependencies,
bg={eventTypes:je,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument;if(!e||!ag("onSelect",e))return null;e=b?N.getNodeFromInstance(b):window;switch(a){case "topFocus":if(Tc(e)||"true"===e.contentEditable)ya=e,wc=b,Na=null;break;case "topBlur":Na=wc=ya=null;break;case "topMouseDown":uc=!0;break;case "topContextMenu":case "topMouseUp":return uc=!1,ie(c,d);case "topSelectionChange":if($f)break;case "topKeyDown":case "topKeyUp":return ie(c,d)}return null}};
O.augmentClass(ke,{animationName:null,elapsedTime:null,pseudoElement:null});O.augmentClass(le,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}});Y.augmentClass(me,{relatedTarget:null});var cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",
18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};Y.augmentClass(ne,{key:function(a){if(a.key){var b=cg[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=$a(a),13===a?"Enter":String.fromCharCode(a)):
"keydown"===a.type||"keyup"===a.type?dg[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Pb,charCode:function(a){return"keypress"===a.type?$a(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?$a(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}});ma.augmentClass(oe,{dataTransfer:null});Y.augmentClass(pe,{touches:null,targetTouches:null,
changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Pb});O.augmentClass(qe,{propertyName:null,elapsedTime:null,pseudoElement:null});ma.augmentClass(re,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null});var Je={},Ke={};"abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(a){var b=
a[0].toUpperCase()+a.slice(1),c="on"+b;b="top"+b;c={phasedRegistrationNames:{bubbled:c,captured:c+"Capture"},dependencies:[b]};Je[a]=c;Ke[b]=c});var eg={eventTypes:Je,extractEvents:function(a,b,c,d){var e=Ke[a];if(!e)return null;switch(a){case "topAbort":case "topCancel":case "topCanPlay":case "topCanPlayThrough":case "topClose":case "topDurationChange":case "topEmptied":case "topEncrypted":case "topEnded":case "topError":case "topInput":case "topInvalid":case "topLoad":case "topLoadedData":case "topLoadedMetadata":case "topLoadStart":case "topPause":case "topPlay":case "topPlaying":case "topProgress":case "topRateChange":case "topReset":case "topSeeked":case "topSeeking":case "topStalled":case "topSubmit":case "topSuspend":case "topTimeUpdate":case "topToggle":case "topVolumeChange":case "topWaiting":var f=
O;break;case "topKeyPress":if(0===$a(c))return null;case "topKeyDown":case "topKeyUp":f=ne;break;case "topBlur":case "topFocus":f=me;break;case "topClick":if(2===c.button)return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":f=ma;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":f=oe;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":f=
pe;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":f=ke;break;case "topTransitionEnd":f=qe;break;case "topScroll":f=Y;break;case "topWheel":f=re;break;case "topCopy":case "topCut":case "topPaste":f=le}f?void 0:m("86",a);a=f.getPooled(e,b,c,d);la.accumulateTwoPhaseDispatches(a);return a}};G.setHandleTopLevel(l.handleTopLevel);X.injection.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
Ga.injection.injectComponentTree(N);X.injection.injectEventPluginsByName({SimpleEventPlugin:eg,EnterLeaveEventPlugin:Zf,ChangeEventPlugin:Yf,SelectEventPlugin:bg,BeforeInputEventPlugin:Xf});var Kb=A.injection.MUST_USE_PROPERTY,r=A.injection.HAS_BOOLEAN_VALUE,Le=A.injection.HAS_NUMERIC_VALUE,Lb=A.injection.HAS_POSITIVE_NUMERIC_VALUE,Ya=A.injection.HAS_STRING_BOOLEAN_VALUE,fg={Properties:{allowFullScreen:r,allowTransparency:Ya,async:r,autoPlay:r,capture:r,checked:Kb|r,cols:Lb,contentEditable:Ya,controls:r,
"default":r,defer:r,disabled:r,download:A.injection.HAS_OVERLOADED_BOOLEAN_VALUE,draggable:Ya,formNoValidate:r,hidden:r,loop:r,multiple:Kb|r,muted:Kb|r,noValidate:r,open:r,playsInline:r,readOnly:r,required:r,reversed:r,rows:Lb,rowSpan:Le,scoped:r,seamless:r,selected:Kb|r,size:Lb,start:Le,span:Lb,spellCheck:Ya,style:0,itemScope:r,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:Ya},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,
b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+b)}}},Nc=A.injection.HAS_STRING_BOOLEAN_VALUE,Oc={Properties:{autoReverse:Nc,externalResourcesRequired:Nc,preserveAlpha:Nc},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:"http://www.w3.org/1999/xlink",
xlinkArcrole:"http://www.w3.org/1999/xlink",xlinkHref:"http://www.w3.org/1999/xlink",xlinkRole:"http://www.w3.org/1999/xlink",xlinkShow:"http://www.w3.org/1999/xlink",xlinkTitle:"http://www.w3.org/1999/xlink",xlinkType:"http://www.w3.org/1999/xlink",xmlBase:"http://www.w3.org/XML/1998/namespace",xmlLang:"http://www.w3.org/XML/1998/namespace",xmlSpace:"http://www.w3.org/XML/1998/namespace"}},gg=/[\-\:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=
a.replace(gg,Me);Oc.Properties[b]=0;Oc.DOMAttributeNames[b]=a});A.injection.injectDOMPropertyConfig(fg);A.injection.injectDOMPropertyConfig(Oc);var Gf=A.ROOT_ATTRIBUTE_NAME,hg=I.createElement,ig=I.createTextNode,jg=I.setInitialProperties,kg=I.diffProperties,lg=I.updateProperties,mg=I.diffHydratedProperties,ng=I.diffHydratedText,og=I.warnForDeletedHydratableElement,pg=I.warnForDeletedHydratableText,qg=I.warnForInsertedHydratedElement,rg=I.warnForInsertedHydratedText,Mb=N.precacheFiberNode,Pc=N.updateFiberProps;
yb.injection.injectFiberControlledHostComponent(I);ab._injectFiber(function(a){return B.findHostInstance(a)});var Qc=null,Rc=null,B=function(a){var b=a.getPublicInstance;a=Pe(a);var c=a.scheduleUpdate,d=a.getPriorityContext;return{createContainer:function(a){var b=new F(3,null,0);a={current:b,containerInfo:a,isScheduled:!1,nextScheduledRoot:null,context:null,pendingContext:null};return b.stateNode=a},updateContainer:function(a,b,g,h){var e=b.current;g=sc(g);null===b.context?b.context=g:b.pendingContext=
g;b=d(e,null!=a&&null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent);g={element:a};a=null===g.element;h={priorityLevel:b,partialState:g,callback:void 0===h?null:h,isReplace:!1,isForced:!1,isTopLevelUnmount:a,next:null};g=hb(e,h);if(a){a=pc;var f=qc;null!==a&&null!==h.next&&(h.next=null,a.last=h);null!==f&&null!==g&&null!==g.next&&(g.next=null,f.last=h)}c(e,b)},batchedUpdates:a.batchedUpdates,unbatchedUpdates:a.unbatchedUpdates,deferredUpdates:a.deferredUpdates,
flushSync:a.flushSync,getPublicRootInstance:function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return b(a.child.stateNode);default:return a.child.stateNode}},findHostInstance:function(a){a=Tf(a);return null===a?null:a.stateNode},findHostInstanceWithNoPortals:function(a){a=Uf(a);return null===a?null:a.stateNode}}}({getRootHostContext:function(a){if(9===a.nodeType)a=(a=a.documentElement)?a.namespaceURI:Ob(null,"");else{var b=8===a.nodeType?a.parentNode:a;a=b.namespaceURI||null;
b=b.tagName;a=Ob(a,b)}return a},getChildHostContext:function(a,b){return Ob(a,b)},getPublicInstance:function(a){return a},prepareForCommit:function(){Qc=l.isEnabled();Rc=vc.getSelectionInformation();l.setEnabled(!1)},resetAfterCommit:function(){vc.restoreSelection(Rc);Rc=null;l.setEnabled(Qc);Qc=null},createInstance:function(a,b,c,d,e){a=hg(a,b,c,d);Mb(e,a);Pc(a,b);return a},appendInitialChild:function(a,b){a.appendChild(b)},finalizeInitialChildren:function(a,b,c,d){jg(a,b,c,d);a:{switch(b){case "button":case "input":case "select":case "textarea":a=
!!c.autoFocus;break a}a=!1}return a},prepareUpdate:function(a,b,c,d,e){return kg(a,b,c,d,e)},commitMount:function(a){a.focus()},commitUpdate:function(a,b,c,d,e){Pc(a,e);lg(a,b,c,d,e)},shouldSetTextContent:function(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===typeof b.dangerouslySetInnerHTML.__html},resetTextContent:function(a){a.textContent=""},shouldDeprioritizeSubtree:function(a,
b){return!!b.hidden},createTextInstance:function(a,b,c,d){a=ig(a,b);Mb(d,a);return a},commitTextUpdate:function(a,b,c){a.nodeValue=c},appendChild:function(a,b){a.appendChild(b)},appendChildToContainer:function(a,b){8===a.nodeType?a.parentNode.insertBefore(b,a):a.appendChild(b)},insertBefore:function(a,b,c){a.insertBefore(b,c)},insertInContainerBefore:function(a,b,c){8===a.nodeType?a.parentNode.insertBefore(b,c):a.insertBefore(b,c)},removeChild:function(a,b){a.removeChild(b)},removeChildFromContainer:function(a,
b){8===a.nodeType?a.parentNode.removeChild(b):a.removeChild(b)},canHydrateInstance:function(a,b){return 1===a.nodeType&&b===a.nodeName.toLowerCase()},canHydrateTextInstance:function(a,b){return""===b?!1:3===a.nodeType},getNextHydratableSibling:function(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a},getFirstHydratableChild:function(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a},hydrateInstance:function(a,b,c,d,e,f){Mb(f,a);Pc(a,
c);return mg(a,b,c,e,d)},hydrateTextInstance:function(a,b,c){Mb(c,a);return ng(a,b)},didNotHydrateInstance:function(a,b){1===b.nodeType?og(a,b):pg(a,b)},didNotFindHydratableInstance:function(a,b,c){qg(a,b,c)},didNotFindHydratableTextInstance:function(a,b){rg(a,b)},scheduleDeferredCallback:Pf,useSyncScheduling:!0});Ab.injection.injectFiberBatchedUpdates(B.batchedUpdates);var sg={createPortal:se,hydrate:function(a,b,c){return Bb(null,a,b,!0,c)},render:function(a,b,c){return Bb(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,
b,c,d){null!=a&&fa.has(a)?void 0:m("38");return Bb(a,b,c,!1,d)},unmountComponentAtNode:function(a){xc(a)?void 0:m("40");return a._reactRootContainer?(B.unbatchedUpdates(function(){Bb(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},findDOMNode:ab,unstable_createPortal:se,unstable_batchedUpdates:Ab.batchedUpdates,unstable_deferredUpdates:B.deferredUpdates,flushSync:B.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:X,EventPluginRegistry:na,EventPropagators:la,
ReactControlledComponent:yb,ReactDOMComponentTree:N,ReactDOMEventListener:G}};(function(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!b.supportsFiber)return!0;try{var c=b.inject(a);Vb=Pd(function(a){return b.onCommitFiberRoot(c,a)});Wb=Pd(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0})({findFiberByHostInstance:N.getClosestInstanceFromNode,findHostInstanceByFiber:B.findHostInstance,bundleType:0,version:"16.0.0",rendererPackageName:"react-dom"});
return sg}"object"===typeof exports&&"undefined"!==typeof module?module.exports=Nb(require("react")):"function"===typeof define&&define.amd?define(["react"],Nb):this.ReactDOM=Nb(this.React);

/* Path
------------------------------------------------------------------------------*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.routeParser=t()}}(function(){return function t(e,n,i){function r(o,a){if(!n[o]){if(!e[o]){var c="function"==typeof require&&require;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var l=n[o]={exports:{}};e[o][0].call(l.exports,function(t){var n=e[o][1][t];return r(n?n:t)},l,l.exports,t,e,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,e,n){"use strict";var i=t("./lib/route");e.exports=i},{"./lib/route":2}],2:[function(t,e,n){"use strict";function i(t){var e;if(e=this?this:Object.create(i.prototype),"undefined"==typeof t)throw new Error("A route spec is required");return e.spec=t,e.ast=r.parse(t),e}var r=t("./route/parser"),s=t("./route/visitors/regexp"),o=t("./route/visitors/reverse");i.prototype=Object.create(null),i.prototype.match=function(t){var e=s.visit(this.ast),n=e.match(t);return!!n&&n},i.prototype.reverse=function(t){return o.visit(this.ast,t)},e.exports=i},{"./route/parser":5,"./route/visitors/regexp":7,"./route/visitors/reverse":8}],3:[function(t,e,n){var i=function(){function t(){this.yy={}}var e=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},n=[1,9],i=[1,10],r=[1,11],s=[1,12],o=[5,11,12,13,14,15],a={trace:function(){},yy:{},symbols_:{error:2,root:3,expressions:4,EOF:5,expression:6,optional:7,literal:8,splat:9,param:10,"(":11,")":12,LITERAL:13,SPLAT:14,PARAM:15,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"(",12:")",13:"LITERAL",14:"SPLAT",15:"PARAM"},productions_:[0,[3,2],[3,1],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,1],[9,1],[10,1]],performAction:function(t,e,n,i,r,s,o){var a=s.length-1;switch(r){case 1:return new i.Root({},[s[a-1]]);case 2:return new i.Root({},[new i.Literal({value:""})]);case 3:this.$=new i.Concat({},[s[a-1],s[a]]);break;case 4:case 5:this.$=s[a];break;case 6:this.$=new i.Literal({value:s[a]});break;case 7:this.$=new i.Splat({name:s[a]});break;case 8:this.$=new i.Param({name:s[a]});break;case 9:this.$=new i.Optional({},[s[a-1]]);break;case 10:this.$=t;break;case 11:case 12:this.$=t.slice(1)}},table:[{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:n,13:i,14:r,15:s},{1:[3]},{5:[1,13],6:14,7:5,8:6,9:7,10:8,11:n,13:i,14:r,15:s},{1:[2,2]},e(o,[2,4]),e(o,[2,5]),e(o,[2,6]),e(o,[2,7]),e(o,[2,8]),{4:15,6:4,7:5,8:6,9:7,10:8,11:n,13:i,14:r,15:s},e(o,[2,10]),e(o,[2,11]),e(o,[2,12]),{1:[2,1]},e(o,[2,3]),{6:14,7:5,8:6,9:7,10:8,11:n,12:[1,16],13:i,14:r,15:s},e(o,[2,9])],defaultActions:{3:[2,2],13:[2,1]},parseError:function(t,e){function n(t,e){this.message=t,this.hash=e}if(!e.recoverable)throw n.prototype=Error,new n(t,e);this.trace(t)},parse:function(t){var e=this,n=[0],i=[null],r=[],s=this.table,o="",a=0,c=0,h=0,l=2,u=1,p=r.slice.call(arguments,1),y=Object.create(this.lexer),f={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(f.yy[d]=this.yy[d]);y.setInput(t,f.yy),f.yy.lexer=y,f.yy.parser=this,"undefined"==typeof y.yylloc&&(y.yylloc={});var m=y.yylloc;r.push(m);var g=y.options&&y.options.ranges;"function"==typeof f.yy.parseError?this.parseError=f.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,v,x,k,b,w,E,S,A,I=function(){var t;return t=y.lex()||u,"number"!=typeof t&&(t=e.symbols_[t]||t),t},P={};;){if(x=n[n.length-1],this.defaultActions[x]?k=this.defaultActions[x]:(null!==_&&"undefined"!=typeof _||(_=I()),k=s[x]&&s[x][_]),"undefined"==typeof k||!k.length||!k[0]){var L="";A=[];for(w in s[x])this.terminals_[w]&&w>l&&A.push("'"+this.terminals_[w]+"'");L=y.showPosition?"Parse error on line "+(a+1)+":\n"+y.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(a+1)+": Unexpected "+(_==u?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(L,{text:y.match,token:this.terminals_[_]||_,line:y.yylineno,loc:m,expected:A})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+x+", token: "+_);switch(k[0]){case 1:n.push(_),i.push(y.yytext),r.push(y.yylloc),n.push(k[1]),_=null,v?(_=v,v=null):(c=y.yyleng,o=y.yytext,a=y.yylineno,m=y.yylloc,h>0&&h--);break;case 2:if(E=this.productions_[k[1]][1],P.$=i[i.length-E],P._$={first_line:r[r.length-(E||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(E||1)].first_column,last_column:r[r.length-1].last_column},g&&(P._$.range=[r[r.length-(E||1)].range[0],r[r.length-1].range[1]]),b=this.performAction.apply(P,[o,c,a,f.yy,k[1],i,r].concat(p)),"undefined"!=typeof b)return b;E&&(n=n.slice(0,-1*E*2),i=i.slice(0,-1*E),r=r.slice(0,-1*E)),n.push(this.productions_[k[1]][0]),i.push(P.$),r.push(P._$),S=s[n[n.length-2]][n[n.length-1]],n.push(S);break;case 3:return!0}}return!0}},c=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),i=t[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,n,i;this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if(n=this._input.match(this.rules[r[s]]),n&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(t=this.test_match(n,r[s]),t!==!1)return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?(t=this.test_match(e,r[i]),t!==!1&&t):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,n,i){switch(n){case 0:return"(";case 1:return")";case 2:return"SPLAT";case 3:return"PARAM";case 4:return"LITERAL";case 5:return"LITERAL";case 6:return"EOF"}},rules:[/^(?:\()/,/^(?:\))/,/^(?:\*+\w+)/,/^(?::+\w+)/,/^(?:[\w%\-~\n]+)/,/^(?:.)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};return t}();return a.lexer=c,t.prototype=a,a.Parser=t,new t}();"undefined"!=typeof t&&"undefined"!=typeof n&&(n.parser=i,n.Parser=i.Parser,n.parse=function(){return i.parse.apply(i,arguments)})},{}],4:[function(t,e,n){"use strict";function i(t){return function(e,n){return{displayName:t,props:e,children:n||[]}}}e.exports={Root:i("Root"),Concat:i("Concat"),Literal:i("Literal"),Splat:i("Splat"),Param:i("Param"),Optional:i("Optional")}},{}],5:[function(t,e,n){"use strict";var i=t("./compiled-grammar").parser;i.yy=t("./nodes"),e.exports=i},{"./compiled-grammar":3,"./nodes":4}],6:[function(t,e,n){"use strict";function i(t){return r.forEach(function(e){if("undefined"==typeof t[e])throw new Error("No handler defined for "+e.displayName)}),{visit:function(t,e){return this.handlers[t.displayName].call(this,t,e)},handlers:t}}var r=Object.keys(t("../nodes"));e.exports=i},{"../nodes":4}],7:[function(t,e,n){"use strict";function i(t){this.captures=t.captures,this.re=t.re}var r=t("./create_visitor"),s=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.prototype.match=function(t){var e=this.re.exec(t),n={};if(e)return this.captures.forEach(function(t,i){"undefined"==typeof e[i+1]?n[t]=void 0:n[t]=decodeURIComponent(e[i+1])}),n};var o=r({Concat:function(t){return t.children.reduce(function(t,e){var n=this.visit(e);return{re:t.re+n.re,captures:t.captures.concat(n.captures)}}.bind(this),{re:"",captures:[]})},Literal:function(t){return{re:t.props.value.replace(s,"\\$&"),captures:[]}},Splat:function(t){return{re:"([^?]*?)",captures:[t.props.name]}},Param:function(t){return{re:"([^\\/\\?]+)",captures:[t.props.name]}},Optional:function(t){var e=this.visit(t.children[0]);return{re:"(?:"+e.re+")?",captures:e.captures}},Root:function(t){var e=this.visit(t.children[0]);return new i({re:new RegExp("^"+e.re+"(?=\\?|$)"),captures:e.captures})}});e.exports=o},{"./create_visitor":6}],8:[function(t,e,n){"use strict";var i=t("./create_visitor"),r=i({Concat:function(t,e){var n=t.children.map(function(t){return this.visit(t,e)}.bind(this));return!n.some(function(t){return t===!1})&&n.join("")},Literal:function(t){return decodeURI(t.props.value)},Splat:function(t,e){return!!e[t.props.name]&&e[t.props.name]},Param:function(t,e){return!!e[t.props.name]&&e[t.props.name]},Optional:function(t,e){var n=this.visit(t.children[0],e);return n?n:""},Root:function(t,e){e=e||{};var n=this.visit(t.children[0],e);return!!n&&encodeURI(n)}});e.exports=r},{"./create_visitor":6}]},{},[1])(1)});

/* Date Fns
------------------------------------------------------------------------------*/
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory();else if(typeof define==="function"&&define.amd)define([],factory);else if(typeof exports==="object")exports["dateFns"]=factory();else root["dateFns"]=factory()})(this,function(){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)}([function(module,exports,__webpack_require__){module.exports={addDays:__webpack_require__(1),addHours:__webpack_require__(4),addISOYears:__webpack_require__(6),addMilliseconds:__webpack_require__(5),addMinutes:__webpack_require__(14),addMonths:__webpack_require__(15),addQuarters:__webpack_require__(17),addSeconds:__webpack_require__(18),addWeeks:__webpack_require__(19),addYears:__webpack_require__(20),areRangesOverlapping:__webpack_require__(21),closestIndexTo:__webpack_require__(22),closestTo:__webpack_require__(23),compareAsc:__webpack_require__(24),compareDesc:__webpack_require__(25),differenceInCalendarDays:__webpack_require__(12),differenceInCalendarISOWeeks:__webpack_require__(26),differenceInCalendarISOYears:__webpack_require__(27),differenceInCalendarMonths:__webpack_require__(28),differenceInCalendarQuarters:__webpack_require__(29),differenceInCalendarWeeks:__webpack_require__(31),differenceInCalendarYears:__webpack_require__(32),differenceInDays:__webpack_require__(33),differenceInHours:__webpack_require__(34),differenceInISOYears:__webpack_require__(36),differenceInMilliseconds:__webpack_require__(35),differenceInMinutes:__webpack_require__(38),differenceInMonths:__webpack_require__(39),differenceInQuarters:__webpack_require__(40),differenceInSeconds:__webpack_require__(41),differenceInWeeks:__webpack_require__(42),differenceInYears:__webpack_require__(43),distanceInWords:__webpack_require__(44),distanceInWordsStrict:__webpack_require__(49),distanceInWordsToNow:__webpack_require__(50),eachDay:__webpack_require__(51),endOfDay:__webpack_require__(52),endOfHour:__webpack_require__(53),endOfISOWeek:__webpack_require__(54),endOfISOYear:__webpack_require__(56),endOfMinute:__webpack_require__(57),endOfMonth:__webpack_require__(58),endOfQuarter:__webpack_require__(59),endOfSecond:__webpack_require__(60),endOfToday:__webpack_require__(61),endOfTomorrow:__webpack_require__(62),endOfWeek:__webpack_require__(55),endOfYear:__webpack_require__(63),endOfYesterday:__webpack_require__(64),format:__webpack_require__(65),getDate:__webpack_require__(70),getDay:__webpack_require__(71),getDayOfYear:__webpack_require__(66),getDaysInMonth:__webpack_require__(16),getDaysInYear:__webpack_require__(72),getHours:__webpack_require__(74),getISODay:__webpack_require__(75),getISOWeek:__webpack_require__(68),getISOWeeksInYear:__webpack_require__(76),getISOYear:__webpack_require__(7),getMilliseconds:__webpack_require__(77),getMinutes:__webpack_require__(78),getMonth:__webpack_require__(79),getOverlappingDaysInRanges:__webpack_require__(80),getQuarter:__webpack_require__(30),getSeconds:__webpack_require__(81),getTime:__webpack_require__(82),getYear:__webpack_require__(83),isAfter:__webpack_require__(84),isBefore:__webpack_require__(85),isDate:__webpack_require__(3),isEqual:__webpack_require__(86),isFirstDayOfMonth:__webpack_require__(87),isFriday:__webpack_require__(88),isFuture:__webpack_require__(89),isLastDayOfMonth:__webpack_require__(90),isLeapYear:__webpack_require__(73),isMonday:__webpack_require__(91),isPast:__webpack_require__(92),isSameDay:__webpack_require__(93),isSameHour:__webpack_require__(94),isSameISOWeek:__webpack_require__(96),isSameISOYear:__webpack_require__(98),isSameMinute:__webpack_require__(99),isSameMonth:__webpack_require__(101),isSameQuarter:__webpack_require__(102),isSameSecond:__webpack_require__(104),isSameWeek:__webpack_require__(97),isSameYear:__webpack_require__(106),isSaturday:__webpack_require__(107),isSunday:__webpack_require__(108),isThisHour:__webpack_require__(109),isThisISOWeek:__webpack_require__(110),isThisISOYear:__webpack_require__(111),isThisMinute:__webpack_require__(112),isThisMonth:__webpack_require__(113),isThisQuarter:__webpack_require__(114),isThisSecond:__webpack_require__(115),isThisWeek:__webpack_require__(116),isThisYear:__webpack_require__(117),isThursday:__webpack_require__(118),isToday:__webpack_require__(119),isTomorrow:__webpack_require__(120),isTuesday:__webpack_require__(121),isValid:__webpack_require__(69),isWednesday:__webpack_require__(122),isWeekend:__webpack_require__(123),isWithinRange:__webpack_require__(124),isYesterday:__webpack_require__(125),lastDayOfISOWeek:__webpack_require__(126),lastDayOfISOYear:__webpack_require__(128),lastDayOfMonth:__webpack_require__(129),lastDayOfQuarter:__webpack_require__(130),lastDayOfWeek:__webpack_require__(127),lastDayOfYear:__webpack_require__(131),max:__webpack_require__(132),min:__webpack_require__(133),parse:__webpack_require__(2),setDate:__webpack_require__(134),setDay:__webpack_require__(135),setDayOfYear:__webpack_require__(136),setHours:__webpack_require__(137),setISODay:__webpack_require__(138),setISOWeek:__webpack_require__(139),setISOYear:__webpack_require__(10),setMilliseconds:__webpack_require__(140),setMinutes:__webpack_require__(141),setMonth:__webpack_require__(142),setQuarter:__webpack_require__(143),setSeconds:__webpack_require__(144),setYear:__webpack_require__(145),startOfDay:__webpack_require__(13),startOfHour:__webpack_require__(95),startOfISOWeek:__webpack_require__(8),startOfISOYear:__webpack_require__(11),startOfMinute:__webpack_require__(100),startOfMonth:__webpack_require__(146),startOfQuarter:__webpack_require__(103),startOfSecond:__webpack_require__(105),startOfToday:__webpack_require__(147),startOfTomorrow:__webpack_require__(148),startOfWeek:__webpack_require__(9),startOfYear:__webpack_require__(67),startOfYesterday:__webpack_require__(149),subDays:__webpack_require__(150),subHours:__webpack_require__(151),subISOYears:__webpack_require__(37),subMilliseconds:__webpack_require__(152),subMinutes:__webpack_require__(153),subMonths:__webpack_require__(154),subQuarters:__webpack_require__(155),subSeconds:__webpack_require__(156),subWeeks:__webpack_require__(157),subYears:__webpack_require__(158)}},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function addDays(dirtyDate,dirtyAmount){var date=parse(dirtyDate);var amount=Number(dirtyAmount);date.setDate(date.getDate()+amount);return date}module.exports=addDays},function(module,exports,__webpack_require__){var isDate=__webpack_require__(3);var MILLISECONDS_IN_HOUR=36e5;var MILLISECONDS_IN_MINUTE=6e4;var DEFAULT_ADDITIONAL_DIGITS=2;var parseTokenDateTimeDelimeter=/[T ]/;var parseTokenPlainTime=/:/;var parseTokenYY=/^(\d{2})$/;var parseTokensYYY=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/];var parseTokenYYYY=/^(\d{4})/;var parseTokensYYYYY=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/];var parseTokenMM=/^-(\d{2})$/;var parseTokenDDD=/^-?(\d{3})$/;var parseTokenMMDD=/^-?(\d{2})-?(\d{2})$/;var parseTokenWww=/^-?W(\d{2})$/;var parseTokenWwwD=/^-?W(\d{2})-?(\d{1})$/;var parseTokenHH=/^(\d{2}([.,]\d*)?)$/;var parseTokenHHMM=/^(\d{2}):?(\d{2}([.,]\d*)?)$/;var parseTokenHHMMSS=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;var parseTokenTimezone=/([Z+-].*)$/;var parseTokenTimezoneZ=/^(Z)$/;var parseTokenTimezoneHH=/^([+-])(\d{2})$/;var parseTokenTimezoneHHMM=/^([+-])(\d{2}):?(\d{2})$/;function parse(argument,dirtyOptions){if(isDate(argument)){return new Date(argument.getTime())}else if(typeof argument!=="string"){return new Date(argument)}var options=dirtyOptions||{};var additionalDigits=options.additionalDigits;if(additionalDigits==null){additionalDigits=DEFAULT_ADDITIONAL_DIGITS}else{additionalDigits=Number(additionalDigits)}var dateStrings=splitDateString(argument);var parseYearResult=parseYear(dateStrings.date,additionalDigits);var year=parseYearResult.year;var restDateString=parseYearResult.restDateString;var date=parseDate(restDateString,year);if(date){var timestamp=date.getTime();var time=0;var offset;if(dateStrings.time){time=parseTime(dateStrings.time)}if(dateStrings.timezone){offset=parseTimezone(dateStrings.timezone)}else{offset=new Date(timestamp+time).getTimezoneOffset();offset=new Date(timestamp+time+offset*MILLISECONDS_IN_MINUTE).getTimezoneOffset()}return new Date(timestamp+time+offset*MILLISECONDS_IN_MINUTE)}else{return new Date(argument)}}function splitDateString(dateString){var dateStrings={};var array=dateString.split(parseTokenDateTimeDelimeter);var timeString;if(parseTokenPlainTime.test(array[0])){dateStrings.date=null;timeString=array[0]}else{dateStrings.date=array[0];timeString=array[1]}if(timeString){var token=parseTokenTimezone.exec(timeString);if(token){dateStrings.time=timeString.replace(token[1],"");dateStrings.timezone=token[1]}else{dateStrings.time=timeString}}return dateStrings}function parseYear(dateString,additionalDigits){var parseTokenYYY=parseTokensYYY[additionalDigits];var parseTokenYYYYY=parseTokensYYYYY[additionalDigits];var token;token=parseTokenYYYY.exec(dateString)||parseTokenYYYYY.exec(dateString);if(token){var yearString=token[1];return{year:parseInt(yearString,10),restDateString:dateString.slice(yearString.length)}}token=parseTokenYY.exec(dateString)||parseTokenYYY.exec(dateString);if(token){var centuryString=token[1];return{year:parseInt(centuryString,10)*100,restDateString:dateString.slice(centuryString.length)}}return{year:null}}function parseDate(dateString,year){if(year===null){return null}var token;var date;var month;var week;if(dateString.length===0){date=new Date(0);date.setUTCFullYear(year);return date}token=parseTokenMM.exec(dateString);if(token){date=new Date(0);month=parseInt(token[1],10)-1;date.setUTCFullYear(year,month);return date}token=parseTokenDDD.exec(dateString);if(token){date=new Date(0);var dayOfYear=parseInt(token[1],10);date.setUTCFullYear(year,0,dayOfYear);return date}token=parseTokenMMDD.exec(dateString);if(token){date=new Date(0);month=parseInt(token[1],10)-1;var day=parseInt(token[2],10);date.setUTCFullYear(year,month,day);return date}token=parseTokenWww.exec(dateString);if(token){week=parseInt(token[1],10)-1;return dayOfISOYear(year,week)}token=parseTokenWwwD.exec(dateString);if(token){week=parseInt(token[1],10)-1;var dayOfWeek=parseInt(token[2],10)-1;return dayOfISOYear(year,week,dayOfWeek)}return null}function parseTime(timeString){var token;var hours;var minutes;token=parseTokenHH.exec(timeString);if(token){hours=parseFloat(token[1].replace(",","."));return hours%24*MILLISECONDS_IN_HOUR}token=parseTokenHHMM.exec(timeString);if(token){hours=parseInt(token[1],10);minutes=parseFloat(token[2].replace(",","."));return hours%24*MILLISECONDS_IN_HOUR+minutes*MILLISECONDS_IN_MINUTE}token=parseTokenHHMMSS.exec(timeString);if(token){hours=parseInt(token[1],10);minutes=parseInt(token[2],10);var seconds=parseFloat(token[3].replace(",","."));return hours%24*MILLISECONDS_IN_HOUR+minutes*MILLISECONDS_IN_MINUTE+seconds*1e3}return null}function parseTimezone(timezoneString){var token;var absoluteOffset;token=parseTokenTimezoneZ.exec(timezoneString);if(token){return 0}token=parseTokenTimezoneHH.exec(timezoneString);if(token){absoluteOffset=parseInt(token[2],10)*60;return token[1]==="+"?-absoluteOffset:absoluteOffset}token=parseTokenTimezoneHHMM.exec(timezoneString);if(token){absoluteOffset=parseInt(token[2],10)*60+parseInt(token[3],10);return token[1]==="+"?-absoluteOffset:absoluteOffset}return 0}function dayOfISOYear(isoYear,week,day){week=week||0;day=day||0;var date=new Date(0);date.setUTCFullYear(isoYear,0,4);var fourthOfJanuaryDay=date.getUTCDay()||7;var diff=week*7+day+1-fourthOfJanuaryDay;date.setUTCDate(date.getUTCDate()+diff);return date}module.exports=parse},function(module,exports){function isDate(argument){return argument instanceof Date}module.exports=isDate},function(module,exports,__webpack_require__){var addMilliseconds=__webpack_require__(5);var MILLISECONDS_IN_HOUR=36e5;function addHours(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addMilliseconds(dirtyDate,amount*MILLISECONDS_IN_HOUR)}module.exports=addHours},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function addMilliseconds(dirtyDate,dirtyAmount){var timestamp=parse(dirtyDate).getTime();var amount=Number(dirtyAmount);return new Date(timestamp+amount)}module.exports=addMilliseconds},function(module,exports,__webpack_require__){var getISOYear=__webpack_require__(7);var setISOYear=__webpack_require__(10);function addISOYears(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return setISOYear(dirtyDate,getISOYear(dirtyDate)+amount)}module.exports=addISOYears},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var startOfISOWeek=__webpack_require__(8);function getISOYear(dirtyDate){var date=parse(dirtyDate);var year=date.getFullYear();var fourthOfJanuaryOfNextYear=new Date(0);fourthOfJanuaryOfNextYear.setFullYear(year+1,0,4);fourthOfJanuaryOfNextYear.setHours(0,0,0,0);var startOfNextYear=startOfISOWeek(fourthOfJanuaryOfNextYear);var fourthOfJanuaryOfThisYear=new Date(0);fourthOfJanuaryOfThisYear.setFullYear(year,0,4);fourthOfJanuaryOfThisYear.setHours(0,0,0,0);var startOfThisYear=startOfISOWeek(fourthOfJanuaryOfThisYear);if(date.getTime()>=startOfNextYear.getTime()){return year+1}else if(date.getTime()>=startOfThisYear.getTime()){return year}else{return year-1}}module.exports=getISOYear},function(module,exports,__webpack_require__){var startOfWeek=__webpack_require__(9);function startOfISOWeek(dirtyDate){return startOfWeek(dirtyDate,{weekStartsOn:1})}module.exports=startOfISOWeek},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function startOfWeek(dirtyDate,dirtyOptions){var weekStartsOn=dirtyOptions?Number(dirtyOptions.weekStartsOn)||0:0;var date=parse(dirtyDate);var day=date.getDay();var diff=(day<weekStartsOn?7:0)+day-weekStartsOn;date.setDate(date.getDate()-diff);date.setHours(0,0,0,0);return date}module.exports=startOfWeek},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var startOfISOYear=__webpack_require__(11);var differenceInCalendarDays=__webpack_require__(12);function setISOYear(dirtyDate,dirtyISOYear){var date=parse(dirtyDate);var isoYear=Number(dirtyISOYear);var diff=differenceInCalendarDays(date,startOfISOYear(date));var fourthOfJanuary=new Date(0);fourthOfJanuary.setFullYear(isoYear,0,4);fourthOfJanuary.setHours(0,0,0,0);date=startOfISOYear(fourthOfJanuary);date.setDate(date.getDate()+diff);return date}module.exports=setISOYear},function(module,exports,__webpack_require__){var getISOYear=__webpack_require__(7);var startOfISOWeek=__webpack_require__(8);function startOfISOYear(dirtyDate){var year=getISOYear(dirtyDate);var fourthOfJanuary=new Date(0);fourthOfJanuary.setFullYear(year,0,4);fourthOfJanuary.setHours(0,0,0,0);var date=startOfISOWeek(fourthOfJanuary);return date}module.exports=startOfISOYear},function(module,exports,__webpack_require__){var startOfDay=__webpack_require__(13);var MILLISECONDS_IN_MINUTE=6e4;var MILLISECONDS_IN_DAY=864e5;function differenceInCalendarDays(dirtyDateLeft,dirtyDateRight){var startOfDayLeft=startOfDay(dirtyDateLeft);var startOfDayRight=startOfDay(dirtyDateRight);var timestampLeft=startOfDayLeft.getTime()-startOfDayLeft.getTimezoneOffset()*MILLISECONDS_IN_MINUTE;var timestampRight=startOfDayRight.getTime()-startOfDayRight.getTimezoneOffset()*MILLISECONDS_IN_MINUTE;return Math.round((timestampLeft-timestampRight)/MILLISECONDS_IN_DAY)}module.exports=differenceInCalendarDays},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function startOfDay(dirtyDate){var date=parse(dirtyDate);date.setHours(0,0,0,0);return date}module.exports=startOfDay},function(module,exports,__webpack_require__){var addMilliseconds=__webpack_require__(5);var MILLISECONDS_IN_MINUTE=6e4;function addMinutes(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addMilliseconds(dirtyDate,amount*MILLISECONDS_IN_MINUTE)}module.exports=addMinutes},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var getDaysInMonth=__webpack_require__(16);function addMonths(dirtyDate,dirtyAmount){var date=parse(dirtyDate);var amount=Number(dirtyAmount);var desiredMonth=date.getMonth()+amount;var dateWithDesiredMonth=new Date(0);dateWithDesiredMonth.setFullYear(date.getFullYear(),desiredMonth,1);dateWithDesiredMonth.setHours(0,0,0,0);var daysInMonth=getDaysInMonth(dateWithDesiredMonth);date.setMonth(desiredMonth,Math.min(daysInMonth,date.getDate()));return date}module.exports=addMonths},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getDaysInMonth(dirtyDate){var date=parse(dirtyDate);var year=date.getFullYear();var monthIndex=date.getMonth();var lastDayOfMonth=new Date(0);lastDayOfMonth.setFullYear(year,monthIndex+1,0);lastDayOfMonth.setHours(0,0,0,0);return lastDayOfMonth.getDate()}module.exports=getDaysInMonth},function(module,exports,__webpack_require__){var addMonths=__webpack_require__(15);function addQuarters(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);var months=amount*3;return addMonths(dirtyDate,months)}module.exports=addQuarters},function(module,exports,__webpack_require__){var addMilliseconds=__webpack_require__(5);function addSeconds(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addMilliseconds(dirtyDate,amount*1e3)}module.exports=addSeconds},function(module,exports,__webpack_require__){var addDays=__webpack_require__(1);function addWeeks(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);var days=amount*7;return addDays(dirtyDate,days)}module.exports=addWeeks},function(module,exports,__webpack_require__){var addMonths=__webpack_require__(15);function addYears(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addMonths(dirtyDate,amount*12)}module.exports=addYears},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function areRangesOverlapping(dirtyInitialRangeStartDate,dirtyInitialRangeEndDate,dirtyComparedRangeStartDate,dirtyComparedRangeEndDate){var initialStartTime=parse(dirtyInitialRangeStartDate).getTime();var initialEndTime=parse(dirtyInitialRangeEndDate).getTime();var comparedStartTime=parse(dirtyComparedRangeStartDate).getTime();var comparedEndTime=parse(dirtyComparedRangeEndDate).getTime();if(initialStartTime>initialEndTime||comparedStartTime>comparedEndTime){throw new Error("The start of the range cannot be after the end of the range")}return initialStartTime<comparedEndTime&&comparedStartTime<initialEndTime}module.exports=areRangesOverlapping},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function closestIndexTo(dirtyDateToCompare,dirtyDatesArray){if(!(dirtyDatesArray instanceof Array)){throw new TypeError(toString.call(dirtyDatesArray)+" is not an instance of Array")}var dateToCompare=parse(dirtyDateToCompare);var timeToCompare=dateToCompare.getTime();var result;var minDistance;dirtyDatesArray.forEach(function(dirtyDate,index){var currentDate=parse(dirtyDate);var distance=Math.abs(timeToCompare-currentDate.getTime());if(result===undefined||distance<minDistance){result=index;minDistance=distance}});return result}module.exports=closestIndexTo},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function closestTo(dirtyDateToCompare,dirtyDatesArray){if(!(dirtyDatesArray instanceof Array)){throw new TypeError(toString.call(dirtyDatesArray)+" is not an instance of Array")}var dateToCompare=parse(dirtyDateToCompare);var timeToCompare=dateToCompare.getTime();var result;var minDistance;dirtyDatesArray.forEach(function(dirtyDate){var currentDate=parse(dirtyDate);var distance=Math.abs(timeToCompare-currentDate.getTime());if(result===undefined||distance<minDistance){result=currentDate;minDistance=distance}});return result}module.exports=closestTo},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function compareAsc(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var timeLeft=dateLeft.getTime();var dateRight=parse(dirtyDateRight);var timeRight=dateRight.getTime();if(timeLeft<timeRight){return-1}else if(timeLeft>timeRight){return 1}else{return 0}}module.exports=compareAsc},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function compareDesc(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var timeLeft=dateLeft.getTime();var dateRight=parse(dirtyDateRight);var timeRight=dateRight.getTime();if(timeLeft>timeRight){return-1}else if(timeLeft<timeRight){return 1}else{return 0}}module.exports=compareDesc},function(module,exports,__webpack_require__){var startOfISOWeek=__webpack_require__(8);var MILLISECONDS_IN_MINUTE=6e4;var MILLISECONDS_IN_WEEK=6048e5;function differenceInCalendarISOWeeks(dirtyDateLeft,dirtyDateRight){var startOfISOWeekLeft=startOfISOWeek(dirtyDateLeft);var startOfISOWeekRight=startOfISOWeek(dirtyDateRight);var timestampLeft=startOfISOWeekLeft.getTime()-startOfISOWeekLeft.getTimezoneOffset()*MILLISECONDS_IN_MINUTE;var timestampRight=startOfISOWeekRight.getTime()-startOfISOWeekRight.getTimezoneOffset()*MILLISECONDS_IN_MINUTE;return Math.round((timestampLeft-timestampRight)/MILLISECONDS_IN_WEEK)}module.exports=differenceInCalendarISOWeeks},function(module,exports,__webpack_require__){var getISOYear=__webpack_require__(7);function differenceInCalendarISOYears(dirtyDateLeft,dirtyDateRight){return getISOYear(dirtyDateLeft)-getISOYear(dirtyDateRight)}module.exports=differenceInCalendarISOYears},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function differenceInCalendarMonths(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);var yearDiff=dateLeft.getFullYear()-dateRight.getFullYear();var monthDiff=dateLeft.getMonth()-dateRight.getMonth();return yearDiff*12+monthDiff}module.exports=differenceInCalendarMonths},function(module,exports,__webpack_require__){var getQuarter=__webpack_require__(30);var parse=__webpack_require__(2);function differenceInCalendarQuarters(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);var yearDiff=dateLeft.getFullYear()-dateRight.getFullYear();var quarterDiff=getQuarter(dateLeft)-getQuarter(dateRight);return yearDiff*4+quarterDiff}module.exports=differenceInCalendarQuarters},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getQuarter(dirtyDate){var date=parse(dirtyDate);var quarter=Math.floor(date.getMonth()/3)+1;return quarter}module.exports=getQuarter},function(module,exports,__webpack_require__){var startOfWeek=__webpack_require__(9);var MILLISECONDS_IN_MINUTE=6e4;var MILLISECONDS_IN_WEEK=6048e5;function differenceInCalendarWeeks(dirtyDateLeft,dirtyDateRight,dirtyOptions){var startOfWeekLeft=startOfWeek(dirtyDateLeft,dirtyOptions);var startOfWeekRight=startOfWeek(dirtyDateRight,dirtyOptions);var timestampLeft=startOfWeekLeft.getTime()-startOfWeekLeft.getTimezoneOffset()*MILLISECONDS_IN_MINUTE;var timestampRight=startOfWeekRight.getTime()-startOfWeekRight.getTimezoneOffset()*MILLISECONDS_IN_MINUTE;return Math.round((timestampLeft-timestampRight)/MILLISECONDS_IN_WEEK)}module.exports=differenceInCalendarWeeks},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function differenceInCalendarYears(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);return dateLeft.getFullYear()-dateRight.getFullYear()}module.exports=differenceInCalendarYears},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var differenceInCalendarDays=__webpack_require__(12);var compareAsc=__webpack_require__(24);function differenceInDays(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);var sign=compareAsc(dateLeft,dateRight);var difference=Math.abs(differenceInCalendarDays(dateLeft,dateRight));dateLeft.setDate(dateLeft.getDate()-sign*difference);var isLastDayNotFull=compareAsc(dateLeft,dateRight)===-sign;return sign*(difference-isLastDayNotFull)}module.exports=differenceInDays},function(module,exports,__webpack_require__){var differenceInMilliseconds=__webpack_require__(35);var MILLISECONDS_IN_HOUR=36e5;function differenceInHours(dirtyDateLeft,dirtyDateRight){var diff=differenceInMilliseconds(dirtyDateLeft,dirtyDateRight)/MILLISECONDS_IN_HOUR;return diff>0?Math.floor(diff):Math.ceil(diff)}module.exports=differenceInHours},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function differenceInMilliseconds(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);return dateLeft.getTime()-dateRight.getTime()}module.exports=differenceInMilliseconds},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var differenceInCalendarISOYears=__webpack_require__(27);var compareAsc=__webpack_require__(24);var subISOYears=__webpack_require__(37);function differenceInISOYears(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);var sign=compareAsc(dateLeft,dateRight);var difference=Math.abs(differenceInCalendarISOYears(dateLeft,dateRight));dateLeft=subISOYears(dateLeft,sign*difference);var isLastISOYearNotFull=compareAsc(dateLeft,dateRight)===-sign;return sign*(difference-isLastISOYearNotFull)}module.exports=differenceInISOYears},function(module,exports,__webpack_require__){var addISOYears=__webpack_require__(6);function subISOYears(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addISOYears(dirtyDate,-amount)}module.exports=subISOYears},function(module,exports,__webpack_require__){var differenceInMilliseconds=__webpack_require__(35);var MILLISECONDS_IN_MINUTE=6e4;function differenceInMinutes(dirtyDateLeft,dirtyDateRight){var diff=differenceInMilliseconds(dirtyDateLeft,dirtyDateRight)/MILLISECONDS_IN_MINUTE;return diff>0?Math.floor(diff):Math.ceil(diff)}module.exports=differenceInMinutes},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var differenceInCalendarMonths=__webpack_require__(28);var compareAsc=__webpack_require__(24);function differenceInMonths(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);var sign=compareAsc(dateLeft,dateRight);var difference=Math.abs(differenceInCalendarMonths(dateLeft,dateRight));dateLeft.setMonth(dateLeft.getMonth()-sign*difference);var isLastMonthNotFull=compareAsc(dateLeft,dateRight)===-sign;return sign*(difference-isLastMonthNotFull)}module.exports=differenceInMonths},function(module,exports,__webpack_require__){var differenceInMonths=__webpack_require__(39);function differenceInQuarters(dirtyDateLeft,dirtyDateRight){var diff=differenceInMonths(dirtyDateLeft,dirtyDateRight)/3;return diff>0?Math.floor(diff):Math.ceil(diff)}module.exports=differenceInQuarters},function(module,exports,__webpack_require__){var differenceInMilliseconds=__webpack_require__(35);function differenceInSeconds(dirtyDateLeft,dirtyDateRight){var diff=differenceInMilliseconds(dirtyDateLeft,dirtyDateRight)/1e3;return diff>0?Math.floor(diff):Math.ceil(diff)}module.exports=differenceInSeconds},function(module,exports,__webpack_require__){var differenceInDays=__webpack_require__(33);function differenceInWeeks(dirtyDateLeft,dirtyDateRight){var diff=differenceInDays(dirtyDateLeft,dirtyDateRight)/7;return diff>0?Math.floor(diff):Math.ceil(diff)}module.exports=differenceInWeeks},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var differenceInCalendarYears=__webpack_require__(32);var compareAsc=__webpack_require__(24);function differenceInYears(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);var sign=compareAsc(dateLeft,dateRight);var difference=Math.abs(differenceInCalendarYears(dateLeft,dateRight));dateLeft.setFullYear(dateLeft.getFullYear()-sign*difference);var isLastYearNotFull=compareAsc(dateLeft,dateRight)===-sign;return sign*(difference-isLastYearNotFull)}module.exports=differenceInYears},function(module,exports,__webpack_require__){var compareDesc=__webpack_require__(25);var parse=__webpack_require__(2);var differenceInSeconds=__webpack_require__(41);var differenceInMonths=__webpack_require__(39);var enLocale=__webpack_require__(45);var MINUTES_IN_DAY=1440;var MINUTES_IN_ALMOST_TWO_DAYS=2520;var MINUTES_IN_MONTH=43200;var MINUTES_IN_TWO_MONTHS=86400;function distanceInWords(dirtyDateToCompare,dirtyDate,dirtyOptions){var options=dirtyOptions||{};var comparison=compareDesc(dirtyDateToCompare,dirtyDate);var locale=options.locale;var localize=enLocale.distanceInWords.localize;if(locale&&locale.distanceInWords&&locale.distanceInWords.localize){localize=locale.distanceInWords.localize}var localizeOptions={addSuffix:Boolean(options.addSuffix),comparison:comparison};var dateLeft,dateRight;if(comparison>0){dateLeft=parse(dirtyDateToCompare);dateRight=parse(dirtyDate)}else{dateLeft=parse(dirtyDate);dateRight=parse(dirtyDateToCompare)}var seconds=differenceInSeconds(dateRight,dateLeft);var offset=dateRight.getTimezoneOffset()-dateLeft.getTimezoneOffset();var minutes=Math.round(seconds/60)-offset;var months;if(minutes<2){if(options.includeSeconds){if(seconds<5){return localize("lessThanXSeconds",5,localizeOptions)}else if(seconds<10){return localize("lessThanXSeconds",10,localizeOptions)}else if(seconds<20){return localize("lessThanXSeconds",20,localizeOptions)}else if(seconds<40){return localize("halfAMinute",null,localizeOptions)}else if(seconds<60){return localize("lessThanXMinutes",1,localizeOptions)}else{return localize("xMinutes",1,localizeOptions)}}else{if(minutes===0){return localize("lessThanXMinutes",1,localizeOptions)}else{return localize("xMinutes",minutes,localizeOptions)}}}else if(minutes<45){return localize("xMinutes",minutes,localizeOptions)}else if(minutes<90){return localize("aboutXHours",1,localizeOptions)}else if(minutes<MINUTES_IN_DAY){var hours=Math.round(minutes/60);return localize("aboutXHours",hours,localizeOptions)}else if(minutes<MINUTES_IN_ALMOST_TWO_DAYS){return localize("xDays",1,localizeOptions)}else if(minutes<MINUTES_IN_MONTH){var days=Math.round(minutes/MINUTES_IN_DAY);return localize("xDays",days,localizeOptions)}else if(minutes<MINUTES_IN_TWO_MONTHS){months=Math.round(minutes/MINUTES_IN_MONTH);return localize("aboutXMonths",months,localizeOptions)}months=differenceInMonths(dateRight,dateLeft);if(months<12){var nearestMonth=Math.round(minutes/MINUTES_IN_MONTH);return localize("xMonths",nearestMonth,localizeOptions)}else{var monthsSinceStartOfYear=months%12;var years=Math.floor(months/12);if(monthsSinceStartOfYear<3){return localize("aboutXYears",years,localizeOptions)}else if(monthsSinceStartOfYear<9){return localize("overXYears",years,localizeOptions)}else{return localize("almostXYears",years+1,localizeOptions)}}}module.exports=distanceInWords},function(module,exports,__webpack_require__){var buildDistanceInWordsLocale=__webpack_require__(46);var buildFormatLocale=__webpack_require__(47);module.exports={distanceInWords:buildDistanceInWordsLocale(),format:buildFormatLocale()}},function(module,exports){function buildDistanceInWordsLocale(){var distanceInWordsLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{
one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function localize(token,count,options){options=options||{};var result;if(typeof distanceInWordsLocale[token]==="string"){result=distanceInWordsLocale[token]}else if(count===1){result=distanceInWordsLocale[token].one}else{result=distanceInWordsLocale[token].other.replace("{{count}}",count)}if(options.addSuffix){if(options.comparison>0){return"in "+result}else{return result+" ago"}}return result}return{localize:localize}}module.exports=buildDistanceInWordsLocale},function(module,exports,__webpack_require__){var buildFormattingTokensRegExp=__webpack_require__(48);function buildFormatLocale(){var months3char=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var monthsFull=["January","February","March","April","May","June","July","August","September","October","November","December"];var weekdays2char=["Su","Mo","Tu","We","Th","Fr","Sa"];var weekdays3char=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var weekdaysFull=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var meridiemUppercase=["AM","PM"];var meridiemLowercase=["am","pm"];var meridiemFull=["a.m.","p.m."];var formatters={MMM:function(date){return months3char[date.getMonth()]},MMMM:function(date){return monthsFull[date.getMonth()]},dd:function(date){return weekdays2char[date.getDay()]},ddd:function(date){return weekdays3char[date.getDay()]},dddd:function(date){return weekdaysFull[date.getDay()]},A:function(date){return date.getHours()/12>=1?meridiemUppercase[1]:meridiemUppercase[0]},a:function(date){return date.getHours()/12>=1?meridiemLowercase[1]:meridiemLowercase[0]},aa:function(date){return date.getHours()/12>=1?meridiemFull[1]:meridiemFull[0]}};var ordinalFormatters=["M","D","DDD","d","Q","W"];ordinalFormatters.forEach(function(formatterToken){formatters[formatterToken+"o"]=function(date,formatters){return ordinal(formatters[formatterToken](date))}});return{formatters:formatters,formattingTokensRegExp:buildFormattingTokensRegExp(formatters)}}function ordinal(number){var rem100=number%100;if(rem100>20||rem100<10){switch(rem100%10){case 1:return number+"st";case 2:return number+"nd";case 3:return number+"rd"}}return number+"th"}module.exports=buildFormatLocale},function(module,exports){var commonFormatterKeys=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];function buildFormattingTokensRegExp(formatters){var formatterKeys=[];for(var key in formatters){if(formatters.hasOwnProperty(key)){formatterKeys.push(key)}}var formattingTokens=commonFormatterKeys.concat(formatterKeys).sort().reverse();var formattingTokensRegExp=new RegExp("(\\[[^\\[]*\\])|(\\\\)?"+"("+formattingTokens.join("|")+"|.)","g");return formattingTokensRegExp}module.exports=buildFormattingTokensRegExp},function(module,exports,__webpack_require__){var compareDesc=__webpack_require__(25);var parse=__webpack_require__(2);var differenceInSeconds=__webpack_require__(41);var enLocale=__webpack_require__(45);var MINUTES_IN_DAY=1440;var MINUTES_IN_MONTH=43200;var MINUTES_IN_YEAR=525600;function distanceInWordsStrict(dirtyDateToCompare,dirtyDate,dirtyOptions){var options=dirtyOptions||{};var comparison=compareDesc(dirtyDateToCompare,dirtyDate);var locale=options.locale;var localize=enLocale.distanceInWords.localize;if(locale&&locale.distanceInWords&&locale.distanceInWords.localize){localize=locale.distanceInWords.localize}var localizeOptions={addSuffix:Boolean(options.addSuffix),comparison:comparison};var dateLeft,dateRight;if(comparison>0){dateLeft=parse(dirtyDateToCompare);dateRight=parse(dirtyDate)}else{dateLeft=parse(dirtyDate);dateRight=parse(dirtyDateToCompare)}var unit;var mathPartial=Math[options.partialMethod?String(options.partialMethod):"floor"];var seconds=differenceInSeconds(dateRight,dateLeft);var offset=dateRight.getTimezoneOffset()-dateLeft.getTimezoneOffset();var minutes=mathPartial(seconds/60)-offset;var hours,days,months,years;if(options.unit){unit=String(options.unit)}else{if(minutes<1){unit="s"}else if(minutes<60){unit="m"}else if(minutes<MINUTES_IN_DAY){unit="h"}else if(minutes<MINUTES_IN_MONTH){unit="d"}else if(minutes<MINUTES_IN_YEAR){unit="M"}else{unit="Y"}}if(unit==="s"){return localize("xSeconds",seconds,localizeOptions)}else if(unit==="m"){return localize("xMinutes",minutes,localizeOptions)}else if(unit==="h"){hours=mathPartial(minutes/60);return localize("xHours",hours,localizeOptions)}else if(unit==="d"){days=mathPartial(minutes/MINUTES_IN_DAY);return localize("xDays",days,localizeOptions)}else if(unit==="M"){months=mathPartial(minutes/MINUTES_IN_MONTH);return localize("xMonths",months,localizeOptions)}else if(unit==="Y"){years=mathPartial(minutes/MINUTES_IN_YEAR);return localize("xYears",years,localizeOptions)}throw new Error("Unknown unit: "+unit)}module.exports=distanceInWordsStrict},function(module,exports,__webpack_require__){var distanceInWords=__webpack_require__(44);function distanceInWordsToNow(dirtyDate,dirtyOptions){return distanceInWords(Date.now(),dirtyDate,dirtyOptions)}module.exports=distanceInWordsToNow},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function eachDay(dirtyStartDate,dirtyEndDate,dirtyStep){var startDate=parse(dirtyStartDate);var endDate=parse(dirtyEndDate);var step=dirtyStep!==undefined?dirtyStep:1;var endTime=endDate.getTime();if(startDate.getTime()>endTime){throw new Error("The first date cannot be after the second date")}var dates=[];var currentDate=startDate;currentDate.setHours(0,0,0,0);while(currentDate.getTime()<=endTime){dates.push(parse(currentDate));currentDate.setDate(currentDate.getDate()+step)}return dates}module.exports=eachDay},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function endOfDay(dirtyDate){var date=parse(dirtyDate);date.setHours(23,59,59,999);return date}module.exports=endOfDay},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function endOfHour(dirtyDate){var date=parse(dirtyDate);date.setMinutes(59,59,999);return date}module.exports=endOfHour},function(module,exports,__webpack_require__){var endOfWeek=__webpack_require__(55);function endOfISOWeek(dirtyDate){return endOfWeek(dirtyDate,{weekStartsOn:1})}module.exports=endOfISOWeek},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function endOfWeek(dirtyDate,dirtyOptions){var weekStartsOn=dirtyOptions?Number(dirtyOptions.weekStartsOn)||0:0;var date=parse(dirtyDate);var day=date.getDay();var diff=(day<weekStartsOn?-7:0)+6-(day-weekStartsOn);date.setDate(date.getDate()+diff);date.setHours(23,59,59,999);return date}module.exports=endOfWeek},function(module,exports,__webpack_require__){var getISOYear=__webpack_require__(7);var startOfISOWeek=__webpack_require__(8);function endOfISOYear(dirtyDate){var year=getISOYear(dirtyDate);var fourthOfJanuaryOfNextYear=new Date(0);fourthOfJanuaryOfNextYear.setFullYear(year+1,0,4);fourthOfJanuaryOfNextYear.setHours(0,0,0,0);var date=startOfISOWeek(fourthOfJanuaryOfNextYear);date.setMilliseconds(date.getMilliseconds()-1);return date}module.exports=endOfISOYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function endOfMinute(dirtyDate){var date=parse(dirtyDate);date.setSeconds(59,999);return date}module.exports=endOfMinute},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function endOfMonth(dirtyDate){var date=parse(dirtyDate);var month=date.getMonth();date.setFullYear(date.getFullYear(),month+1,0);date.setHours(23,59,59,999);return date}module.exports=endOfMonth},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function endOfQuarter(dirtyDate){var date=parse(dirtyDate);var currentMonth=date.getMonth();var month=currentMonth-currentMonth%3+3;date.setMonth(month,0);date.setHours(23,59,59,999);return date}module.exports=endOfQuarter},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function endOfSecond(dirtyDate){var date=parse(dirtyDate);date.setMilliseconds(999);return date}module.exports=endOfSecond},function(module,exports,__webpack_require__){var endOfDay=__webpack_require__(52);function endOfToday(){return endOfDay(new Date)}module.exports=endOfToday},function(module,exports){function endOfTomorrow(){var now=new Date;var year=now.getFullYear();var month=now.getMonth();var day=now.getDate();var date=new Date(0);date.setFullYear(year,month,day+1);date.setHours(23,59,59,999);return date}module.exports=endOfTomorrow},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function endOfYear(dirtyDate){var date=parse(dirtyDate);var year=date.getFullYear();date.setFullYear(year+1,0,0);date.setHours(23,59,59,999);return date}module.exports=endOfYear},function(module,exports){function endOfYesterday(){var now=new Date;var year=now.getFullYear();var month=now.getMonth();var day=now.getDate();var date=new Date(0);date.setFullYear(year,month,day-1);date.setHours(23,59,59,999);return date}module.exports=endOfYesterday},function(module,exports,__webpack_require__){var getDayOfYear=__webpack_require__(66);var getISOWeek=__webpack_require__(68);var getISOYear=__webpack_require__(7);var parse=__webpack_require__(2);var isValid=__webpack_require__(69);var enLocale=__webpack_require__(45);function format(dirtyDate,dirtyFormatStr,dirtyOptions){var formatStr=dirtyFormatStr?String(dirtyFormatStr):"YYYY-MM-DDTHH:mm:ss.SSSZ";var options=dirtyOptions||{};var locale=options.locale;var localeFormatters=enLocale.format.formatters;var formattingTokensRegExp=enLocale.format.formattingTokensRegExp;if(locale&&locale.format&&locale.format.formatters){localeFormatters=locale.format.formatters;if(locale.format.formattingTokensRegExp){formattingTokensRegExp=locale.format.formattingTokensRegExp}}var date=parse(dirtyDate);if(!isValid(date)){return"Invalid Date"}var formatFn=buildFormatFn(formatStr,localeFormatters,formattingTokensRegExp);return formatFn(date)}var formatters={M:function(date){return date.getMonth()+1},MM:function(date){return addLeadingZeros(date.getMonth()+1,2)},Q:function(date){return Math.ceil((date.getMonth()+1)/3)},D:function(date){return date.getDate()},DD:function(date){return addLeadingZeros(date.getDate(),2)},DDD:function(date){return getDayOfYear(date)},DDDD:function(date){return addLeadingZeros(getDayOfYear(date),3)},d:function(date){return date.getDay()},E:function(date){return date.getDay()||7},W:function(date){return getISOWeek(date)},WW:function(date){return addLeadingZeros(getISOWeek(date),2)},YY:function(date){return addLeadingZeros(date.getFullYear(),4).substr(2)},YYYY:function(date){return addLeadingZeros(date.getFullYear(),4)},GG:function(date){return String(getISOYear(date)).substr(2)},GGGG:function(date){return getISOYear(date)},H:function(date){return date.getHours()},HH:function(date){return addLeadingZeros(date.getHours(),2)},h:function(date){var hours=date.getHours();if(hours===0){return 12}else if(hours>12){return hours%12}else{return hours}},hh:function(date){return addLeadingZeros(formatters["h"](date),2)},m:function(date){return date.getMinutes()},mm:function(date){return addLeadingZeros(date.getMinutes(),2)},s:function(date){return date.getSeconds()},ss:function(date){return addLeadingZeros(date.getSeconds(),2)},S:function(date){return Math.floor(date.getMilliseconds()/100)},SS:function(date){return addLeadingZeros(Math.floor(date.getMilliseconds()/10),2)},SSS:function(date){return addLeadingZeros(date.getMilliseconds(),3)},Z:function(date){return formatTimezone(date.getTimezoneOffset(),":")},ZZ:function(date){return formatTimezone(date.getTimezoneOffset())},X:function(date){return Math.floor(date.getTime()/1e3)},x:function(date){return date.getTime()}};function buildFormatFn(formatStr,localeFormatters,formattingTokensRegExp){var array=formatStr.match(formattingTokensRegExp);var length=array.length;var i;var formatter;for(i=0;i<length;i++){formatter=localeFormatters[array[i]]||formatters[array[i]];if(formatter){array[i]=formatter}else{array[i]=removeFormattingTokens(array[i])}}return function(date){var output="";for(var i=0;i<length;i++){if(array[i]instanceof Function){output+=array[i](date,formatters)}else{output+=array[i]}}return output}}function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|]$/g,"")}return input.replace(/\\/g,"")}function formatTimezone(offset,delimeter){delimeter=delimeter||"";var sign=offset>0?"-":"+";var absOffset=Math.abs(offset);var hours=Math.floor(absOffset/60);var minutes=absOffset%60;return sign+addLeadingZeros(hours,2)+delimeter+addLeadingZeros(minutes,2)}function addLeadingZeros(number,targetLength){var output=Math.abs(number).toString();while(output.length<targetLength){output="0"+output}return output}module.exports=format},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var startOfYear=__webpack_require__(67);var differenceInCalendarDays=__webpack_require__(12);function getDayOfYear(dirtyDate){var date=parse(dirtyDate);var diff=differenceInCalendarDays(date,startOfYear(date));var dayOfYear=diff+1;return dayOfYear}module.exports=getDayOfYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function startOfYear(dirtyDate){var cleanDate=parse(dirtyDate);var date=new Date(0);date.setFullYear(cleanDate.getFullYear(),0,1);date.setHours(0,0,0,0);return date}module.exports=startOfYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var startOfISOWeek=__webpack_require__(8);var startOfISOYear=__webpack_require__(11);var MILLISECONDS_IN_WEEK=6048e5;function getISOWeek(dirtyDate){var date=parse(dirtyDate);var diff=startOfISOWeek(date).getTime()-startOfISOYear(date).getTime();return Math.round(diff/MILLISECONDS_IN_WEEK)+1}module.exports=getISOWeek},function(module,exports,__webpack_require__){var isDate=__webpack_require__(3);function isValid(dirtyDate){if(isDate(dirtyDate)){return!isNaN(dirtyDate)}else{throw new TypeError(toString.call(dirtyDate)+" is not an instance of Date")}}module.exports=isValid},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getDate(dirtyDate){var date=parse(dirtyDate);var dayOfMonth=date.getDate();return dayOfMonth}module.exports=getDate},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getDay(dirtyDate){var date=parse(dirtyDate);var day=date.getDay();return day}module.exports=getDay},function(module,exports,__webpack_require__){var isLeapYear=__webpack_require__(73);function getDaysInYear(dirtyDate){return isLeapYear(dirtyDate)?366:365}module.exports=getDaysInYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isLeapYear(dirtyDate){var date=parse(dirtyDate);var year=date.getFullYear();return year%400===0||year%4===0&&year%100!==0}module.exports=isLeapYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getHours(dirtyDate){var date=parse(dirtyDate);var hours=date.getHours();return hours}module.exports=getHours},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getISODay(dirtyDate){var date=parse(dirtyDate);var day=date.getDay();if(day===0){day=7}return day}module.exports=getISODay},function(module,exports,__webpack_require__){var startOfISOYear=__webpack_require__(11);var addWeeks=__webpack_require__(19);var MILLISECONDS_IN_WEEK=6048e5;function getISOWeeksInYear(dirtyDate){var thisYear=startOfISOYear(dirtyDate);var nextYear=startOfISOYear(addWeeks(thisYear,60));var diff=nextYear.valueOf()-thisYear.valueOf();return Math.round(diff/MILLISECONDS_IN_WEEK)}module.exports=getISOWeeksInYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getMilliseconds(dirtyDate){var date=parse(dirtyDate);var milliseconds=date.getMilliseconds();return milliseconds}module.exports=getMilliseconds},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getMinutes(dirtyDate){var date=parse(dirtyDate);var minutes=date.getMinutes();return minutes}module.exports=getMinutes},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getMonth(dirtyDate){var date=parse(dirtyDate);var month=date.getMonth();return month}module.exports=getMonth},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var MILLISECONDS_IN_DAY=24*60*60*1e3;function getOverlappingDaysInRanges(dirtyInitialRangeStartDate,dirtyInitialRangeEndDate,dirtyComparedRangeStartDate,dirtyComparedRangeEndDate){var initialStartTime=parse(dirtyInitialRangeStartDate).getTime();var initialEndTime=parse(dirtyInitialRangeEndDate).getTime();var comparedStartTime=parse(dirtyComparedRangeStartDate).getTime();var comparedEndTime=parse(dirtyComparedRangeEndDate).getTime();if(initialStartTime>initialEndTime||comparedStartTime>comparedEndTime){throw new Error("The start of the range cannot be after the end of the range")}var isOverlapping=initialStartTime<comparedEndTime&&comparedStartTime<initialEndTime;if(!isOverlapping){return 0}var overlapStartDate=comparedStartTime<initialStartTime?initialStartTime:comparedStartTime;var overlapEndDate=comparedEndTime>initialEndTime?initialEndTime:comparedEndTime;var differenceInMs=overlapEndDate-overlapStartDate;return Math.ceil(differenceInMs/MILLISECONDS_IN_DAY)}module.exports=getOverlappingDaysInRanges},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getSeconds(dirtyDate){var date=parse(dirtyDate);var seconds=date.getSeconds();return seconds}module.exports=getSeconds},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getTime(dirtyDate){var date=parse(dirtyDate);var timestamp=date.getTime();return timestamp}module.exports=getTime},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function getYear(dirtyDate){var date=parse(dirtyDate);var year=date.getFullYear();return year}module.exports=getYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isAfter(dirtyDate,dirtyDateToCompare){var date=parse(dirtyDate);var dateToCompare=parse(dirtyDateToCompare);return date.getTime()>dateToCompare.getTime()}module.exports=isAfter},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isBefore(dirtyDate,dirtyDateToCompare){var date=parse(dirtyDate);var dateToCompare=parse(dirtyDateToCompare);return date.getTime()<dateToCompare.getTime()}module.exports=isBefore},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isEqual(dirtyLeftDate,dirtyRightDate){var dateLeft=parse(dirtyLeftDate);var dateRight=parse(dirtyRightDate);return dateLeft.getTime()===dateRight.getTime()}module.exports=isEqual},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isFirstDayOfMonth(dirtyDate){return parse(dirtyDate).getDate()===1}module.exports=isFirstDayOfMonth},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isFriday(dirtyDate){return parse(dirtyDate).getDay()===5}module.exports=isFriday},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isFuture(dirtyDate){return parse(dirtyDate).getTime()>(new Date).getTime()}module.exports=isFuture},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var endOfDay=__webpack_require__(52);var endOfMonth=__webpack_require__(58);function isLastDayOfMonth(dirtyDate){var date=parse(dirtyDate);return endOfDay(date).getTime()===endOfMonth(date).getTime()}module.exports=isLastDayOfMonth},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isMonday(dirtyDate){return parse(dirtyDate).getDay()===1}module.exports=isMonday},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isPast(dirtyDate){return parse(dirtyDate).getTime()<(new Date).getTime()}module.exports=isPast},function(module,exports,__webpack_require__){var startOfDay=__webpack_require__(13);function isSameDay(dirtyDateLeft,dirtyDateRight){var dateLeftStartOfDay=startOfDay(dirtyDateLeft);var dateRightStartOfDay=startOfDay(dirtyDateRight);return dateLeftStartOfDay.getTime()===dateRightStartOfDay.getTime()}module.exports=isSameDay},function(module,exports,__webpack_require__){var startOfHour=__webpack_require__(95);function isSameHour(dirtyDateLeft,dirtyDateRight){var dateLeftStartOfHour=startOfHour(dirtyDateLeft);var dateRightStartOfHour=startOfHour(dirtyDateRight);return dateLeftStartOfHour.getTime()===dateRightStartOfHour.getTime()}module.exports=isSameHour},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function startOfHour(dirtyDate){var date=parse(dirtyDate);date.setMinutes(0,0,0);return date}module.exports=startOfHour},function(module,exports,__webpack_require__){var isSameWeek=__webpack_require__(97);function isSameISOWeek(dirtyDateLeft,dirtyDateRight){return isSameWeek(dirtyDateLeft,dirtyDateRight,{weekStartsOn:1})}module.exports=isSameISOWeek},function(module,exports,__webpack_require__){var startOfWeek=__webpack_require__(9);function isSameWeek(dirtyDateLeft,dirtyDateRight,dirtyOptions){var dateLeftStartOfWeek=startOfWeek(dirtyDateLeft,dirtyOptions);var dateRightStartOfWeek=startOfWeek(dirtyDateRight,dirtyOptions);return dateLeftStartOfWeek.getTime()===dateRightStartOfWeek.getTime()}module.exports=isSameWeek},function(module,exports,__webpack_require__){var startOfISOYear=__webpack_require__(11);function isSameISOYear(dirtyDateLeft,dirtyDateRight){var dateLeftStartOfYear=startOfISOYear(dirtyDateLeft);var dateRightStartOfYear=startOfISOYear(dirtyDateRight);return dateLeftStartOfYear.getTime()===dateRightStartOfYear.getTime()}module.exports=isSameISOYear},function(module,exports,__webpack_require__){var startOfMinute=__webpack_require__(100);function isSameMinute(dirtyDateLeft,dirtyDateRight){var dateLeftStartOfMinute=startOfMinute(dirtyDateLeft);var dateRightStartOfMinute=startOfMinute(dirtyDateRight);return dateLeftStartOfMinute.getTime()===dateRightStartOfMinute.getTime()}module.exports=isSameMinute},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function startOfMinute(dirtyDate){var date=parse(dirtyDate);date.setSeconds(0,0);return date}module.exports=startOfMinute},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isSameMonth(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);return dateLeft.getFullYear()===dateRight.getFullYear()&&dateLeft.getMonth()===dateRight.getMonth()}module.exports=isSameMonth},function(module,exports,__webpack_require__){var startOfQuarter=__webpack_require__(103);function isSameQuarter(dirtyDateLeft,dirtyDateRight){var dateLeftStartOfQuarter=startOfQuarter(dirtyDateLeft);var dateRightStartOfQuarter=startOfQuarter(dirtyDateRight);return dateLeftStartOfQuarter.getTime()===dateRightStartOfQuarter.getTime()}module.exports=isSameQuarter},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function startOfQuarter(dirtyDate){var date=parse(dirtyDate);var currentMonth=date.getMonth();var month=currentMonth-currentMonth%3;date.setMonth(month,1);date.setHours(0,0,0,0);return date}module.exports=startOfQuarter},function(module,exports,__webpack_require__){var startOfSecond=__webpack_require__(105);function isSameSecond(dirtyDateLeft,dirtyDateRight){var dateLeftStartOfSecond=startOfSecond(dirtyDateLeft);var dateRightStartOfSecond=startOfSecond(dirtyDateRight);return dateLeftStartOfSecond.getTime()===dateRightStartOfSecond.getTime()}module.exports=isSameSecond},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function startOfSecond(dirtyDate){var date=parse(dirtyDate);date.setMilliseconds(0);return date}module.exports=startOfSecond},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isSameYear(dirtyDateLeft,dirtyDateRight){var dateLeft=parse(dirtyDateLeft);var dateRight=parse(dirtyDateRight);return dateLeft.getFullYear()===dateRight.getFullYear()}module.exports=isSameYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isSaturday(dirtyDate){return parse(dirtyDate).getDay()===6}module.exports=isSaturday},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isSunday(dirtyDate){return parse(dirtyDate).getDay()===0}module.exports=isSunday},function(module,exports,__webpack_require__){var isSameHour=__webpack_require__(94);function isThisHour(dirtyDate){return isSameHour(new Date,dirtyDate)}module.exports=isThisHour},function(module,exports,__webpack_require__){var isSameISOWeek=__webpack_require__(96);function isThisISOWeek(dirtyDate){return isSameISOWeek(new Date,dirtyDate)}module.exports=isThisISOWeek},function(module,exports,__webpack_require__){var isSameISOYear=__webpack_require__(98);function isThisISOYear(dirtyDate){return isSameISOYear(new Date,dirtyDate)}module.exports=isThisISOYear},function(module,exports,__webpack_require__){var isSameMinute=__webpack_require__(99);function isThisMinute(dirtyDate){return isSameMinute(new Date,dirtyDate)}module.exports=isThisMinute},function(module,exports,__webpack_require__){var isSameMonth=__webpack_require__(101);function isThisMonth(dirtyDate){return isSameMonth(new Date,dirtyDate)}module.exports=isThisMonth},function(module,exports,__webpack_require__){var isSameQuarter=__webpack_require__(102);function isThisQuarter(dirtyDate){return isSameQuarter(new Date,dirtyDate)}module.exports=isThisQuarter},function(module,exports,__webpack_require__){var isSameSecond=__webpack_require__(104);function isThisSecond(dirtyDate){return isSameSecond(new Date,dirtyDate)}module.exports=isThisSecond},function(module,exports,__webpack_require__){var isSameWeek=__webpack_require__(97);function isThisWeek(dirtyDate,dirtyOptions){return isSameWeek(new Date,dirtyDate,dirtyOptions)}module.exports=isThisWeek},function(module,exports,__webpack_require__){var isSameYear=__webpack_require__(106);function isThisYear(dirtyDate){return isSameYear(new Date,dirtyDate)}module.exports=isThisYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isThursday(dirtyDate){return parse(dirtyDate).getDay()===4}module.exports=isThursday},function(module,exports,__webpack_require__){var startOfDay=__webpack_require__(13);function isToday(dirtyDate){return startOfDay(dirtyDate).getTime()===startOfDay(new Date).getTime()}module.exports=isToday},function(module,exports,__webpack_require__){var startOfDay=__webpack_require__(13);function isTomorrow(dirtyDate){var tomorrow=new Date;tomorrow.setDate(tomorrow.getDate()+1);return startOfDay(dirtyDate).getTime()===startOfDay(tomorrow).getTime()}module.exports=isTomorrow},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isTuesday(dirtyDate){return parse(dirtyDate).getDay()===2}module.exports=isTuesday},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isWednesday(dirtyDate){return parse(dirtyDate).getDay()===3}module.exports=isWednesday},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isWeekend(dirtyDate){var date=parse(dirtyDate);var day=date.getDay();return day===0||day===6}module.exports=isWeekend},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function isWithinRange(dirtyDate,dirtyStartDate,dirtyEndDate){var time=parse(dirtyDate).getTime();var startTime=parse(dirtyStartDate).getTime();var endTime=parse(dirtyEndDate).getTime();if(startTime>endTime){throw new Error("The start of the range cannot be after the end of the range")}return time>=startTime&&time<=endTime}module.exports=isWithinRange},function(module,exports,__webpack_require__){var startOfDay=__webpack_require__(13);function isYesterday(dirtyDate){var yesterday=new Date;yesterday.setDate(yesterday.getDate()-1);return startOfDay(dirtyDate).getTime()===startOfDay(yesterday).getTime()}module.exports=isYesterday},function(module,exports,__webpack_require__){var lastDayOfWeek=__webpack_require__(127);function lastDayOfISOWeek(dirtyDate){return lastDayOfWeek(dirtyDate,{weekStartsOn:1})}module.exports=lastDayOfISOWeek},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function lastDayOfWeek(dirtyDate,dirtyOptions){var weekStartsOn=dirtyOptions?Number(dirtyOptions.weekStartsOn)||0:0;var date=parse(dirtyDate);var day=date.getDay();var diff=(day<weekStartsOn?-7:0)+6-(day-weekStartsOn);date.setHours(0,0,0,0);date.setDate(date.getDate()+diff);return date}module.exports=lastDayOfWeek},function(module,exports,__webpack_require__){var getISOYear=__webpack_require__(7);var startOfISOWeek=__webpack_require__(8);function lastDayOfISOYear(dirtyDate){var year=getISOYear(dirtyDate);var fourthOfJanuary=new Date(0);fourthOfJanuary.setFullYear(year+1,0,4);fourthOfJanuary.setHours(0,0,0,0);var date=startOfISOWeek(fourthOfJanuary);date.setDate(date.getDate()-1);return date}module.exports=lastDayOfISOYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function lastDayOfMonth(dirtyDate){var date=parse(dirtyDate);var month=date.getMonth();date.setFullYear(date.getFullYear(),month+1,0);date.setHours(0,0,0,0);return date}module.exports=lastDayOfMonth},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function lastDayOfQuarter(dirtyDate){var date=parse(dirtyDate);var currentMonth=date.getMonth();var month=currentMonth-currentMonth%3+3;date.setMonth(month,0);date.setHours(0,0,0,0);return date}module.exports=lastDayOfQuarter},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function lastDayOfYear(dirtyDate){var date=parse(dirtyDate);var year=date.getFullYear();date.setFullYear(year+1,0,0);date.setHours(0,0,0,0);return date}module.exports=lastDayOfYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function max(){var dirtyDates=Array.prototype.slice.call(arguments);var dates=dirtyDates.map(function(dirtyDate){return parse(dirtyDate)});var latestTimestamp=Math.max.apply(null,dates);return new Date(latestTimestamp)}module.exports=max},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function min(){var dirtyDates=Array.prototype.slice.call(arguments);var dates=dirtyDates.map(function(dirtyDate){return parse(dirtyDate)});var earliestTimestamp=Math.min.apply(null,dates);return new Date(earliestTimestamp)}module.exports=min},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function setDate(dirtyDate,dirtyDayOfMonth){var date=parse(dirtyDate);var dayOfMonth=Number(dirtyDayOfMonth);date.setDate(dayOfMonth);return date}module.exports=setDate},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var addDays=__webpack_require__(1);function setDay(dirtyDate,dirtyDay,dirtyOptions){var weekStartsOn=dirtyOptions?Number(dirtyOptions.weekStartsOn)||0:0;var date=parse(dirtyDate);var day=Number(dirtyDay);var currentDay=date.getDay();var remainder=day%7;var dayIndex=(remainder+7)%7;var diff=(dayIndex<weekStartsOn?7:0)+day-currentDay;return addDays(date,diff)}module.exports=setDay;
},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function setDayOfYear(dirtyDate,dirtyDayOfYear){var date=parse(dirtyDate);var dayOfYear=Number(dirtyDayOfYear);date.setMonth(0);date.setDate(dayOfYear);return date}module.exports=setDayOfYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function setHours(dirtyDate,dirtyHours){var date=parse(dirtyDate);var hours=Number(dirtyHours);date.setHours(hours);return date}module.exports=setHours},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var addDays=__webpack_require__(1);var getISODay=__webpack_require__(75);function setISODay(dirtyDate,dirtyDay){var date=parse(dirtyDate);var day=Number(dirtyDay);var currentDay=getISODay(date);var diff=day-currentDay;return addDays(date,diff)}module.exports=setISODay},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var getISOWeek=__webpack_require__(68);function setISOWeek(dirtyDate,dirtyISOWeek){var date=parse(dirtyDate);var isoWeek=Number(dirtyISOWeek);var diff=getISOWeek(date)-isoWeek;date.setDate(date.getDate()-diff*7);return date}module.exports=setISOWeek},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function setMilliseconds(dirtyDate,dirtyMilliseconds){var date=parse(dirtyDate);var milliseconds=Number(dirtyMilliseconds);date.setMilliseconds(milliseconds);return date}module.exports=setMilliseconds},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function setMinutes(dirtyDate,dirtyMinutes){var date=parse(dirtyDate);var minutes=Number(dirtyMinutes);date.setMinutes(minutes);return date}module.exports=setMinutes},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var getDaysInMonth=__webpack_require__(16);function setMonth(dirtyDate,dirtyMonth){var date=parse(dirtyDate);var month=Number(dirtyMonth);var year=date.getFullYear();var day=date.getDate();var dateWithDesiredMonth=new Date(0);dateWithDesiredMonth.setFullYear(year,month,15);dateWithDesiredMonth.setHours(0,0,0,0);var daysInMonth=getDaysInMonth(dateWithDesiredMonth);date.setMonth(month,Math.min(day,daysInMonth));return date}module.exports=setMonth},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);var setMonth=__webpack_require__(142);function setQuarter(dirtyDate,dirtyQuarter){var date=parse(dirtyDate);var quarter=Number(dirtyQuarter);var oldQuarter=Math.floor(date.getMonth()/3)+1;var diff=quarter-oldQuarter;return setMonth(date,date.getMonth()+diff*3)}module.exports=setQuarter},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function setSeconds(dirtyDate,dirtySeconds){var date=parse(dirtyDate);var seconds=Number(dirtySeconds);date.setSeconds(seconds);return date}module.exports=setSeconds},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function setYear(dirtyDate,dirtyYear){var date=parse(dirtyDate);var year=Number(dirtyYear);date.setFullYear(year);return date}module.exports=setYear},function(module,exports,__webpack_require__){var parse=__webpack_require__(2);function startOfMonth(dirtyDate){var date=parse(dirtyDate);date.setDate(1);date.setHours(0,0,0,0);return date}module.exports=startOfMonth},function(module,exports,__webpack_require__){var startOfDay=__webpack_require__(13);function startOfToday(){return startOfDay(new Date)}module.exports=startOfToday},function(module,exports){function startOfTomorrow(){var now=new Date;var year=now.getFullYear();var month=now.getMonth();var day=now.getDate();var date=new Date(0);date.setFullYear(year,month,day+1);date.setHours(0,0,0,0);return date}module.exports=startOfTomorrow},function(module,exports){function startOfYesterday(){var now=new Date;var year=now.getFullYear();var month=now.getMonth();var day=now.getDate();var date=new Date(0);date.setFullYear(year,month,day-1);date.setHours(0,0,0,0);return date}module.exports=startOfYesterday},function(module,exports,__webpack_require__){var addDays=__webpack_require__(1);function subDays(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addDays(dirtyDate,-amount)}module.exports=subDays},function(module,exports,__webpack_require__){var addHours=__webpack_require__(4);function subHours(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addHours(dirtyDate,-amount)}module.exports=subHours},function(module,exports,__webpack_require__){var addMilliseconds=__webpack_require__(5);function subMilliseconds(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addMilliseconds(dirtyDate,-amount)}module.exports=subMilliseconds},function(module,exports,__webpack_require__){var addMinutes=__webpack_require__(14);function subMinutes(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addMinutes(dirtyDate,-amount)}module.exports=subMinutes},function(module,exports,__webpack_require__){var addMonths=__webpack_require__(15);function subMonths(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addMonths(dirtyDate,-amount)}module.exports=subMonths},function(module,exports,__webpack_require__){var addQuarters=__webpack_require__(17);function subQuarters(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addQuarters(dirtyDate,-amount)}module.exports=subQuarters},function(module,exports,__webpack_require__){var addSeconds=__webpack_require__(18);function subSeconds(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addSeconds(dirtyDate,-amount)}module.exports=subSeconds},function(module,exports,__webpack_require__){var addWeeks=__webpack_require__(19);function subWeeks(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addWeeks(dirtyDate,-amount)}module.exports=subWeeks},function(module,exports,__webpack_require__){var addYears=__webpack_require__(20);function subYears(dirtyDate,dirtyAmount){var amount=Number(dirtyAmount);return addYears(dirtyDate,-amount)}module.exports=subYears}])});


/* Error for exiting a do statement
------------------------------------------------------------------------------*/
class DoError {}

/* Maybe
------------------------------------------------------------------------------*/
class Maybe {}

class Nothing extends Maybe {}

class Just extends Maybe {
  constructor (value) {
    super()
    this.value = value
  }
}

/* Result
------------------------------------------------------------------------------*/
class Result {
  constructor (value) {
    this.value = value
  }
}

class Ok extends Result {}
class Err extends Result {}

/* Provider
------------------------------------------------------------------------------*/
class Provider {
  constructor () {
    this.subscriptions = new Map
  }

  _subscribe (owner, object) {
    if (this.subscriptions.has(owner)) { return }
    this.subscriptions.set(owner, object)
    this._update()
  }

  _unsubscribe (owner) {
    if (!this.subscriptions.has(owner)) { return }
    this.subscriptions.delete(owner)
    this._update()
  }

  _update () {
    if (this.subscriptions.size == 0) {
      this.detach()
    } else {
      this.attach()
    }
  }

  get _subscriptions () {
    let array = []
    for ( let item of this.subscriptions.values()) {
      array.push(item)
    }
    return array
  }

  attach () {
  }

  detach () {
  }
}

/* Store
------------------------------------------------------------------------------*/
class Store {
  constructor () {
    this.listeners = new Set
    this.props = {}
  }

  setState (props, callback) {
    let prev = this.state
    this.props = Object.assign({}, this.state, props)

    Mint.diff(this.__displayName, prev, this.state)

    for (let listener of this.listeners) {
      listener.forceUpdate()
    }

    Mint.forceUpdate()
    callback()
  }

  _subscribe (owner) {
    this.listeners.add(owner)
  }

  _unsubscribe (owner) {
    this.listeners.delete(owner)
  }
}

/* Runtime
------------------------------------------------------------------------------*/
class MintClass {
  constructor () {
    this.listeners = new Set
    this.routes = []
    this.stores = []
    this.diffs = []
    this.logs = []

    window.addEventListener("popstate", ()=> {
      this.handlePopState()
    })

    this.logger = new Worker('/logger.js');
    this.logger.onmessage = (event) => {

      if(event.data.type == "diff") {
        this.diffs = [event.data, ...this.diffs]
      } else if (event.data.type == "log") {
        this.logs = [event.data, ...this.logs]
      }

      this.forceUpdate()
    }
  }

  forceUpdate() {
    for (let listener of this.listeners) {
      listener.forceUpdate()
    }
  }

  subscribe (owner) {
    this.listeners.add(owner)
  }

  unsubscribe (owner) {
    this.listeners.delete(owner)
  }

  update(data, new_data) {
    return Object.assign(Object.create(null), data, new_data)
  }

  log(message, ...params) {
    this.logger.postMessage({ type: 'log', message: message, params: params })
  }

  diff(message, from, to) {
    this.logger.postMessage({ type: 'diff', from: from, to: to, message: message })
  }

  navigate(url) {
    if (window.location.pathname !== url) {
      window.history.pushState({}, '', url)
      this.log(`Navigated to: _${url}_`)
      dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  handlePopState () {
    for (let item of this.routes) {
      if (item.path === '*') {
        this.log('Routed to _*_')
        item.handler()
      }else{
        let path = new routeParser(item.path)
        let match = path.match(window.location.pathname + window.location.search)

        if (match) {
          let args = item.mapping.map((name) => {
            return match[name]
          })

          let params = item.mapping.reduce((memo, name) => {
            memo[name] = match[name]
            return memo
          }, {})

          if (Object.keys(params).length) {
            this.log(`Routed to: _${item.path}_ with parameters:`, params)
          } else {
            this.log(`Routed to: _${item.path}_`)
          }
          item.handler.apply(null, args)
          break
        }
      }
    }
  }

  insertStyles (styles) {
    let style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = styles
  }

  render () {
    if (typeof $Main != "undefined") {
      this.handlePopState()
      ReactDOM.render(
        React.createElement($Main),
        document.getElementById('root')
      )
      this.log('Rendered _Main_')
    }
  }

  addRoutes (routes) {
    this.routes = this.routes.concat(routes)
  }
}

/* Actual globa object
------------------------------------------------------------------------------*/
const Mint = new MintClass
const $TickProvider = new (class extends Provider {
update() {
  return $Array.do($Array.map(((func) => {
  return func()
  }), $Array.map(((item) => {
  return item.ticks
  }), this._subscriptions)))
}

attach() {
  return (() => {
        this.detach()
        this.id = setInterval(this.update.bind(this), 1000)
      })()
}

detach() {
  return clearInterval(this.id)
}
})

const $MouseProvider = new (class extends Provider {
moves(event) {
  return $Array.do($Array.map(((func) => {
  return func({
    top: event.pageY,
    left: event.pageX
  })
  }), $Array.map(((subcription) => {
  return subcription.moves
  }), this._subscriptions)))
}

clicks(event) {
  return $Array.do($Array.map(((func) => {
  return func(event)
  }), $Array.map(((subcription) => {
  return subcription.clicks
  }), this._subscriptions)))
}

ups(event) {
  return $Array.do($Array.map(((func) => {
  return func(event)
  }), $Array.map(((subcription) => {
  return subcription.ups
  }), this._subscriptions)))
}

attach() {
  return (() => {
        window.addEventListener("mousemove", this._moves || (this._moves = this.moves.bind(this)))
        window.addEventListener("click", this._clicks || (this._clicks = this.clicks.bind(this)), true)
        window.addEventListener("mouseup", this._ups || (this._ups = this.ups.bind(this)))
      })()
}

detach() {
  return (() => {
        window.removeEventListener("mousemove", this._moves)
        window.removeEventListener("click", this._clicks, true)
        window.removeEventListener("mouseup", this._ups)
      })()
}
})

const $AnimationFrameProvider = new (class extends Provider {
update() {
  return $Array.do($Array.map(((func) => {
  return func()
  }), $Array.map(((item) => {
  return item.frames
  }), this._subscriptions)))
}

attach() {
  return (() => {
        this.detach()
        this.id = this.frame()
      })()
}

frame() {
  return (() => {
        this.id = requestAnimationFrame(() => {
          this.update()
          this.frame()
        })
      })()
}

detach() {
  return cancelAnimationFrame(this.id)
}
})

Mint.addRoutes([{
       handler: (() => { (async () => {
        try {  await $Application.setPage(`new`)

 await $Users_List.resetUser() }
        catch(_error) {
          if (_error instanceof DoError) {
          } else {
            console.warn(`Unhandled error in do statement`)
            console.log(_error)
          }
        } 
      })() }),
       mapping: [],
       path: `/users/new`
     }, {
       handler: ((id) => { (async () => {
        try {  await $Application.setPage(`user`)

 await $Users_List.resetUser()

 await $Users_List.getUser(id) }
        catch(_error) {
          if (_error instanceof DoError) {
          } else {
            console.warn(`Unhandled error in do statement`)
            console.log(_error)
          }
        } 
      })() }),
       mapping: ['id'],
       path: `/users/:id`
     }, {
       handler: ((page) => { (async () => {
        try {  await $Application.setPage(`index`)

 await $Users_List.refresh()

let actualPage = await $Result.withDefault(0, $Number.fromString(page))

 await $Users_List.setPage(actualPage) }
        catch(_error) {
          if (_error instanceof DoError) {
          } else {
            console.warn(`Unhandled error in do statement`)
            console.log(_error)
          }
        } 
      })() }),
       mapping: ['page'],
       path: `/users?page=:page`
     }, {
       handler: (() => { (async () => {
        try {  await $Application.setPage(`index`)

 await $Users_List.refresh()

 await $Users_List.setPage(0) }
        catch(_error) {
          if (_error instanceof DoError) {
          } else {
            console.warn(`Unhandled error in do statement`)
            console.log(_error)
          }
        } 
      })() }),
       mapping: [],
       path: `/users`
     }, {
       handler: (() => { $Application.setPage(`counter`) }),
       mapping: [],
       path: `/counter`
     }, {
       handler: (() => { $Application.setPage(`drag`) }),
       mapping: [],
       path: `/drag`
     }, {
       handler: (() => { $Application.setPage(`examples`) }),
       mapping: [],
       path: `/examples`
     }, {
       handler: (() => { $Application.setPage(`file-handling`) }),
       mapping: [],
       path: `/examples/file-handling`
     }, {
       handler: (() => { (async () => {
        try {  await $Application.setPage(`install`)

 await $Versions.refresh() }
        catch(_error) {
          if (_error instanceof DoError) {
          } else {
            console.warn(`Unhandled error in do statement`)
            console.log(_error)
          }
        } 
      })() }),
       mapping: [],
       path: `/install`
     }, {
       handler: (() => { (async () => {
        try {  await $Application.setPage(`roadmap`)

 await $Versions.refresh() }
        catch(_error) {
          if (_error instanceof DoError) {
          } else {
            console.warn(`Unhandled error in do statement`)
            console.log(_error)
          }
        } 
      })() }),
       mapping: [],
       path: `/roadmap`
     }, {
       handler: (() => { (async () => {
        try {  await $Application.setPage(`home`)

 await $Showcase_Store.setActive(`store`) }
        catch(_error) {
          if (_error instanceof DoError) {
          } else {
            console.warn(`Unhandled error in do statement`)
            console.log(_error)
          }
        } 
      })() }),
       mapping: [],
       path: `/`
     }, {
       handler: (() => { $Application.setPage(`not_found`) }),
       mapping: [],
       path: `*`
     }])

const $Version = new(class {
  empty() {
    return {
      date: $Time.now(),
      description: ``,
      version: ``,
      assets: [],
      url: ``
    }
  }

  decodeMany(input) {
    return $Json_Decoder.array($Version.decode, input)
  }

  decode(input) {
    return (() => { let _0 = $Json_Decoder.field(`tag_name`, input, $Json_Decoder.string)

             if (_0 instanceof Err) {
                let _error = _0.value
                let error = _error
     return $Result.error(error)
             }

             let version = _0.value

    let _1 = $Json_Decoder.field(`published_at`, input, $Json_Decoder.date)

             if (_1 instanceof Err) {
                let _error = _1.value
                let error = _error
     return $Result.error(error)
             }

             let date = _1.value

    let _2 = $Json_Decoder.field(`html_url`, input, $Json_Decoder.string)

             if (_2 instanceof Err) {
                let _error = _2.value
                let error = _error
     return $Result.error(error)
             }

             let url = _2.value

    let _3 = $Json_Decoder.field(`body`, input, $Json_Decoder.string)

             if (_3 instanceof Err) {
                let _error = _3.value
                let error = _error
     return $Result.error(error)
             }

             let description = _3.value

    let _4 = $Json_Decoder.field(`assets`, input, $Asset.decodeMany)

             if (_4 instanceof Err) {
                let _error = _4.value
                let error = _error
     return $Result.error(error)
             }

             let assets = _4.value

    return $Result.ok({
      description: description,
      version: version,
      assets: assets,
      date: date,
      url: url
    }) })()
  }
})

const $Asset = new(class {
  decodeMany(input) {
    return $Json_Decoder.array($Asset.decode, input)
  }

  decode(input) {
    return (() => { let _0 = $Json_Decoder.field(`browser_download_url`, input, $Json_Decoder.string)

             if (_0 instanceof Err) {
                let _error = _0.value
                let error = _error
     return $Result.error(error)
             }

             let url = _0.value

    let _1 = $Json_Decoder.field(`name`, input, $Json_Decoder.string)

             if (_1 instanceof Err) {
                let _error = _1.value
                let error = _error
     return $Result.error(error)
             }

             let name = _1.value

    return $Result.ok({
      name: name,
      url: url
    }) })()
  }
})

const $Json_Builder = new(class {
  string(input) {
    return input
  }

  bool(input) {
    return input
  }

  number(input) {
    return input
  }

  date(input) {
    return input.toISO()
  }

  object(fields) {
    return (() => {
          let result = {}

          for (let item of fields) {
            result[item.name] = item.value
          }

          return result
        })()
  }
})

const $DOM = new(class {
  equals(a, b) {
    return a.bottom == b.bottom && a.right == b.right && a.left == b.left && a.top == b.top
  }

  dummyElement() {
    return document.createElement('div')
  }

  getElementById(id) {
    return document.getElementById(id)
  }

  setStyle(prop, value, dom) {
    return dom.style[prop] = value
  }

  emptyDimensions() {
    return {
      bottom: 0,
      height: 0,
      width: 0,
      right: 0,
      left: 0,
      top: 0,
      x: 0,
      y: 0
    }
  }

  getDimensions(dom) {
    return dom.getBoundingClientRect()
  }

  matches(selector, dom) {
    return dom.matches(selector)
  }
})

const $Html_Event = new(class {
  stopPropagation(event) {
    return event.stopPropagation()
  }

  preventDefault(event) {
    return event.preventDefault()
  }
})

const $Number = new(class {
  toString(input) {
    return input.toString()
  }

  fromString(input) {
    return (() => {
        	let value = parseFloat(input)
        	if (isNaN(value)) {
        		return new Err({ message: "Not a Number" })
        	} else {
        		return new Ok(value)
        	}
        })()
  }
})

const $FormData = new(class {
  empty() {
    return new FormData
  }

  addString(key, value, formData) {
    return (() => {
         	formData.append(key, value)
         	return formData
        })()
  }

  addFile(key, value, formData) {
    return (() => {
         	formData.append(key, value)
         	return formData
        })()
  }
})

const $Uid = new(class {
  generate() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
          .replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4)
              .toString(16))
  }
})

const $Array = new(class {
  first(array) {
    return (()=> {
          let first = array[0]
          if (first) {
            return new Just(first)
          } else {
            return new Nothing()
          }
        })()
  }

  size(array) {
    return array.length
  }

  push(item, array) {
    return [...array, item]
  }

  reverse(array) {
    return array.reverse()
  }

  map(func, array) {
    return array.map(func)
  }

  mapWithIndex(func, array) {
    return array.map(func)
  }

  select(func, array) {
    return array.filter(func)
  }

  reject(func, array) {
    return array.filter((item) => !func(item))
  }

  find(func, array) {
    return (() => {
          let item = array.find(func)
          if (item) {
            return new Just(item)
          } else {
            return new Nothing()
          }
        })()
  }

  any(func, array) {
    return !!array.find(func)
  }

  sort(func, array) {
    return array.sort(func)
  }

  sortBy(func, array) {
    return (() => {
          return array.sort((a, b) => {
            let aVal = func(a)
            let bVal = func(b)

            if (aVal < bVal) {
              return -1
            }

            if (aVal > bVal) {
              return 1
            }

            return 0
          })
        })()
  }

  slice(from, to, array) {
    return array.slice(from, to)
  }

  last(array) {
    return array[array.length - 1]
  }

  isEmpty(array) {
    return $Array.size(array) == 0
  }

  intersperse(item, array) {
    return array.reduce((a,v)=>[...a,v,item],[]).slice(0,-1)
  }

  contains(other, array) {
    return array.includes(other)
  }

  range(from, to) {
    return Array.from({ length: to - from }).map((v, i) => i + from)
  }

  join(separator, array) {
    return array.join(separator)
  }

  do(array) {
    return null
  }
})

const $Bool = new(class {
  not(item) {
    return !item
  }

  toString(item) {
    return item.toString()
  }
})

const $Result = new(class {
  withDefault(value, input) {
    return input instanceof Ok ? input.value : value
  }

  error(input) {
    return new Err(input)
  }

  ok(input) {
    return new Ok(input)
  }

  map(func, input) {
    return input instanceof Ok ? new Ok(func(input.value)) : input
  }

  isOk(input) {
    return input instanceof Ok
  }
})

const $Window = new(class {
  setTitle(title) {
    return document.title = title
  }

  url() {
    return $Url.parse(window.location.href)
  }

  width() {
    return window.innerWidth
  }

  height() {
    return window.innerHeight
  }
})

const $Debug = new(class {
  log(value) {
    return (() => {
          console.log(value)
          return value
        })()
  }
})

const $Timer = new(class {
  timeout(duration) {
    return new Promise((resolve) => {
        	setTimeout(resolve, duration)
        })
  }

  waitForNextFrame() {
    return new Promise((resolve) => {
        	requestAnimationFrame(resolve)
        })
  }
})

const $Json_Decoder = new(class {
  field(key, object, decoder) {
    return (() => {
          if (object == null) {
            return new Err({ message: `Null object`})
          } else {
            let actual = object[key]
            if (typeof actual === "undefined") {
              return new Err({ message: `No key ${key}` })
            }
            return decoder(actual)
          }
        })()
  }

  string(input) {
    return (() => {
          if(typeof input != "string") {
            return new Err({ message: "Not a string" })
          } else {
            return new Ok(input)
          }
        })()
  }

  date(input) {
    return (() => {
          let parsed = Date.parse(input)

          if (Number.isNaN(parsed)) {
            return new Err({ message: "Not a date" })
          } else {
            return new Ok(new Date(parsed))
          }
        })()
  }

  number(input) {
    return (() => {
          if(typeof input != "number") {
            let value = parseFloat(input)
            if (isNaN(value)) {
              return new Err({ message: "Not a number" })
            } else {
              return new Ok(value)
            }
          } else {
            return new Ok(input)
          }
        })()
  }

  boolean(input) {
    return (() => {
          if(typeof input != "boolean") {
            return new Err({ message: "Not a boolean" })
          } else {
            return new Ok(input)
          }
        })()
  }

  array(decoder, input) {
    return (() => {
          if (!Array.isArray(input)) {
            return new Err({ message: "Input is not an array!"})
          }

          let results = []

          for (let item of input) {
            let result = decoder(item)

            if (result instanceof Err) {
              return result
            } else {
              results.push(result.value)
            }
          }

          return new Ok(results)
        })()
  }
})

const $Promise = new(class {
  fromResult(input) {
    return input instanceof Err ? Promise.reject(input.value) : Promise.resolve(input.value)
  }

  reject(input) {
    return Promise.reject(input)
  }
})

const $File = new(class {
  selectMultiple(accept) {
    return (() => {
          let input = document.createElement('input')

          input.style.position = 'absolute'
          input.style.height = '1px'
          input.style.width = '1px'
          input.style.left = '-1px'
          input.style.top = '-1px'

          input.multiple = true
          input.accept = accept
          input.type = 'file'

          document.body.appendChild(input)

          return new Promise((resolve, reject) => {
            input.addEventListener('change', () => {
              resolve(Array.from(input.files))
            })
            input.click()
            document.body.removeChild(input)
          })
        })()
  }

  select(accept) {
    return (() => {
          let input = document.createElement('input')

          input.style.position = 'absolute'
          input.style.height = '1px'
          input.style.width = '1px'
          input.style.left = '-1px'
          input.style.top = '-1px'

          input.accept = accept
          input.type = 'file'

          document.body.appendChild(input)

          return new Promise((resolve, reject) => {
            input.addEventListener('change', () => {
              resolve(input.files[0])
            })
            input.click()
            document.body.removeChild(input)
          })
        })()
  }

  readAsDataURL(file) {
    return (() => {
          let reader = new FileReader();
          return new Promise((resolve, reject) => {
            reader.addEventListener('load', (event) => {
              resolve(reader.result)
            })
            reader.readAsDataURL(file)
          })
        })()
  }

  readAsString(file) {
    return (() => {
          let reader = new FileReader();
          return new Promise((resolve, reject) => {
            reader.addEventListener('load', (event) => {
              resolve(reader.result)
            })
            reader.readAsText(file)
          })
        })()
  }
})

const $Maybe = new(class {
  nothing() {
    return new Nothing
  }

  just(value) {
    return new Just(value)
  }

  isJust(maybe) {
    return maybe instanceof Just
  }

  isNothing(maybe) {
    return maybe instanceof Nothing
  }

  toResult(error, maybe) {
    return (() => {
          if (maybe instanceof Just) {
            return new Ok(maybe.value)
          } else {
            return new Error(b)
          }
        })()
  }

  map(func, maybe) {
    return (() => {
         	if (maybe instanceof Just) {
         		return new Just(func(maybe.value))
         	} else {
         		return maybe
         	}
        })()
  }

  withDefault(value, maybe) {
    return (() => {
        	if (maybe instanceof Just) {
        		return maybe.value
        	} else {
        		return value
        	}
        })()
  }
})

const $Math = new(class {
  negate(number) {
    return -number
  }

  abs(number) {
    return Math.abs(number)
  }

  ceil(number) {
    return Math.ceil(number)
  }

  floor(number) {
    return Math.floor(number)
  }

  round(number) {
    return Math.round(number)
  }

  min(number1, number2) {
    return Math.min(number1, number2)
  }

  max(number1, number2) {
    return Math.max(number1, number2)
  }
})

const $Url = new(class {
  parse(url) {
    return (() => {
          if (!this._a) {
            this._a = document.createElement('a')
          }

          this._a.href = url

          return {
            hostname: this._a.hostname,
            protocol: this._a.protocol,
            origin: this._a.origin,
            path: this._a.pathname,
            search: this._a.search,
            hash: this._a.hash,
            host: this._a.host,
            port: this._a.port
          }
        })()
  }
})

const $Http = new(class {
  empty() {
    return {
      withCredentials: false,
      method: `GET`,
      headers: [],
      body: null,
      url: ``
    }
  }

  delete(value) {
    return $Http.url(value, $Http.method(`DELETE`, $Http.empty()))
  }

  get(value) {
    return $Http.url(value, $Http.method(`GET`, $Http.empty()))
  }

  put(value) {
    return $Http.url(value, $Http.method(`PUT`, $Http.empty()))
  }

  post(value) {
    return $Http.url(value, $Http.method(`POST`, $Http.empty()))
  }

  stringBody(value, request) {
    return Mint.update(request, { body: value })
  }

  formDataBody(value, request) {
    return Mint.update(request, { body: value })
  }

  method(value, request) {
    return Mint.update(request, { method: value })
  }

  withCredentials(value, request) {
    return Mint.update(request, { withCredentials: value })
  }

  url(value, request) {
    return Mint.update(request, { url: value })
  }

  header(key, value, request) {
    return Mint.update(request, { headers: $Array.push({
      value: value,
      key: key
    }, request.headers) })
  }

  abortAll() {
    return this._requests && Object.keys(this._requests).forEach((uid) => {
          this._requests[uid].abort()
          delete this._requests[uid]
        })
  }

  sendWithID(uid, request) {
    return new Promise((resolve, reject) => {
          if (!this._requests) { this._requests = {} }

          let xhr = new XMLHttpRequest()

          this._requests[uid] = xhr

          xhr.withCredentials = request.withCredentials

          try {
            xhr.open(request.method.toUpperCase(), request.url, true)
          } catch (e) {
            reject({ type: 'bad-url', url: request.url, status: xhr.status })
            delete this._requests[uid]
          }

          request.headers.forEach((item) => {
            xhr.setRequestHeader(item.key, item.value)
          })

          xhr.addEventListener('error', (event) => {
            reject({ type: 'network-error', url: request.url, status: xhr.status })
            delete this._requests[uid]
          })

          xhr.addEventListener('timeout', (event) => {
            reject({ type: 'timeout', url: request.url, status: xhr.status })
            delete this._requests[uid]
          })

          xhr.addEventListener('load', (event) => {
            resolve({ body: xhr.responseText, status: xhr.status })
            delete this._requests[uid]
          })

          xhr.addEventListener('abort', (event) => {
            reject({ type: 'aborted', status: xhr.status })
            delete this._requests[uid]
          })

          xhr.send(request.body)
        })
  }

  send(request) {
    return $Http.sendWithID($Uid.generate(), request)
  }
})

const $Navigation = new(class {
  navigate(url) {
    return Mint.navigate(url)
  }
})

const $Html = new(class {
  empty() {
    return null
  }
})

const $String = new(class {
  toLowerCase(string) {
    return string.toLowerCase()
  }

  isEmpty(string) {
    return string == ``
  }

  match(pattern, string) {
    return string.indexOf(pattern) != -1
  }

  split(separator, string) {
    return string.split(separator)
  }

  size(string) {
    return string.length
  }

  capitalize(string) {
    return string.replace(/\b[a-z]/g, char => char.toUpperCase())
  }
})

const $Json = new(class {
  parse(input) {
    return JSON.parse(input)
  }

  stringify(input) {
    return JSON.stringify(input)
  }
})

const $Time = new(class {
  fromIso(raw) {
    return new Date(raw)
  }

  now() {
    return new Date()
  }

  today() {
    return (() => {
          let date = new Date()
          return new Date(date.getFullYear(), date.getMonth(), date.getDate())
        })()
  }

  equals(a, b) {
    return +a == +b
  }

  from(year, month, day) {
    return new Date(year, month, day)
  }

  day(date) {
    return date.getDate()
  }

  month(date) {
    return date.getMonth()
  }

  toIso(date) {
    return date.toISOString()
  }

  format(pattern, date) {
    return dateFns.format(date, pattern)
  }

  startOf(what, date) {
    return (() => {
          switch (what) {
            case 'month':
              return dateFns.startOfMonth(date)
            case 'week':
              return dateFns.startOfWeek(date, { weekStartsOn: 1 })
            case 'day':
              return dateFns.startOfDay(date)
            default:
              return date
          }
        })()
  }

  endOf(what, date) {
    return (() => {
          switch (what) {
            case 'month':
              return dateFns.endOfMonth(date)
            case 'week':
              return dateFns.endOfWeek(date, { weekStartsOn: 1 })
            case 'day':
              return dateFns.endOfDay(date)
            default:
              return date
          }
        })()
  }

  range(from, to) {
    return dateFns.eachDay(from, to)
  }

  nextMonth(date) {
    return (() => {
          return dateFns.addMonths(date, 1)
        })()
  }

  previousMonth(date) {
    return (() => {
          return dateFns.addMonths(date, -1)
        })()
  }

  relative(other, now) {
    return (() => {
          return dateFns.distanceInWordsStrict(now, other, { addSuffix: true })
        })()
  }
})

const $Application = new (class extends Store {
  get page () {
    if (this.props.page != undefined) {
      return this.props.page
    } else {
      return ``
    }
  }

  get state () {
    return {
    page: this.page
    }
  }

  setPage(a) {
    return (async () => {
            try {  await $Http.abortAll()

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { page: a }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }
})
$Application.__displayName = `Application`
Mint.stores.push($Application)

const $Users_List = new (class extends Store {
  get users () {
    if (this.props.users != undefined) {
      return this.props.users
    } else {
      return []
    }
  }

  get user () {
    if (this.props.user != undefined) {
      return this.props.user
    } else {
      return {
      createdAt: $Time.now(),
      updatedAt: $Time.now(),
      firstName: ``,
      lastName: ``,
      status: ``,
      id: 0
    }
    }
  }

  get loading () {
    if (this.props.loading != undefined) {
      return this.props.loading
    } else {
      return false
    }
  }

  get stale () {
    if (this.props.stale != undefined) {
      return this.props.stale
    } else {
      return true
    }
  }

  get error () {
    if (this.props.error != undefined) {
      return this.props.error
    } else {
      return ``
    }
  }

  get perPage () {
    if (this.props.perPage != undefined) {
      return this.props.perPage
    } else {
      return 10
    }
  }

  get page () {
    if (this.props.page != undefined) {
      return this.props.page
    } else {
      return 0
    }
  }

  get state () {
    return {
    users: this.users,
    user: this.user,
    loading: this.loading,
    stale: this.stale,
    error: this.error,
    perPage: this.perPage,
    page: this.page
    }
  }

  decodeUser(input) {
    return (() => { let _0 = $Json_Decoder.field(`first_name`, input, $Json_Decoder.string)

             if (_0 instanceof Err) {
                let _error = _0.value
                let e = _error
     return $Result.error(e)
             }

             let firstName = _0.value

    let _1 = $Json_Decoder.field(`last_name`, input, $Json_Decoder.string)

             if (_1 instanceof Err) {
                let _error = _1.value
                let e = _error
     return $Result.error(e)
             }

             let lastName = _1.value

    let _2 = $Json_Decoder.field(`created_at`, input, $Json_Decoder.date)

             if (_2 instanceof Err) {
                let _error = _2.value
                let e = _error
     return $Result.error(e)
             }

             let createdAt = _2.value

    let _3 = $Json_Decoder.field(`updated_at`, input, $Json_Decoder.date)

             if (_3 instanceof Err) {
                let _error = _3.value
                let e = _error
     return $Result.error(e)
             }

             let updatedAt = _3.value

    let _4 = $Json_Decoder.field(`status`, input, $Json_Decoder.string)

             if (_4 instanceof Err) {
                let _error = _4.value
                let e = _error
     return $Result.error(e)
             }

             let status = _4.value

    let _5 = $Json_Decoder.field(`id`, input, $Json_Decoder.number)

             if (_5 instanceof Err) {
                let _error = _5.value
                let e = _error
     return $Result.error(e)
             }

             let id = _5.value

    return $Result.ok({
      createdAt: createdAt,
      updatedAt: updatedAt,
      firstName: firstName,
      lastName: lastName,
      status: status,
      id: id
    }) })()
  }

  decodeUsers(input) {
    return $Json_Decoder.array($Users_List.decodeUser, input)
  }

  endpoint() {
    return `https://mint-website.herokuapp.com/`
  }

  refresh() {
    return (this.stale ? $Users_List.load() : null)
  }

  load() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: true }), _resolve)
    })

    let response = await (async ()=> {
                try {
                  return await $Http.send($Http.get($Users_List.endpoint() + `users`))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { error: error.type }), _resolve)
    })

                  throw new DoError
                }})()

    let _2 = $Users_List.decodeUsers($Json.parse(response.body))

              if (_2 instanceof Err) {
                let _error = _2.value
                let error = _error;
     new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { error: error.message }), _resolve)
    })

                throw new DoError
              }

              let users = _2.value
              

    let sortedUsers = await $Array.sort(((a, b) => {
    return a.id - b.id
    }), users)

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { stale: false, users: sortedUsers, error: `` }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  resetUser() {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { user: {
      createdAt: $Time.now(),
      updatedAt: $Time.now(),
      status: `active`,
      firstName: ``,
      lastName: ``,
      id: 0
    }, error: `` }), _resolve)
    })
  }

  saveUser() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: true }), _resolve)
    })

     await (async ()=> {
                try {
                  return await $Http.send($Http.stringBody($Users_List.stringifyUser(), $Http.header(`Content-Type`, `application/json`, $Http.put($Users_List.endpoint() + `users/` + $Number.toString(this.user.id)))))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { error: error.type }), _resolve)
    })

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { stale: true }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  deleteUser() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: true }), _resolve)
    })

     await (async ()=> {
                try {
                  return await $Http.send($Http.delete($Users_List.endpoint() + `users/` + $Number.toString(this.user.id)))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { error: error.type }), _resolve)
    })

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { stale: true }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  createUser() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: true }), _resolve)
    })

     await (async ()=> {
                try {
                  return await $Http.send($Http.stringBody($Users_List.stringifyUser(), $Http.header(`Content-Type`, `application/json`, $Http.post($Users_List.endpoint() + `users`))))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { error: error.type }), _resolve)
    })

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { stale: true }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  stringifyUser() {
    return $Json.stringify($Json_Builder.object([{
      name: `first_name`,
      value: $Json_Builder.string(this.user.firstName)
    }, {
      name: `last_name`,
      value: $Json_Builder.string(this.user.lastName)
    }, {
      name: `status`,
      value: $Json_Builder.string(this.user.status)
    }]))
  }

  getUser(id) {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: true }), _resolve)
    })

    let response = await (async ()=> {
                try {
                  return await $Http.send($Http.get($Users_List.endpoint() + `users/` + $Number.toString(id)))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { error: error.type }), _resolve)
    })

                  throw new DoError
                }})()

    let _2 = $Users_List.decodeUser($Json.parse(response.body))

              if (_2 instanceof Err) {
                let _error = _2.value
                let error = _error;
     new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { error: error.message }), _resolve)
    })

                throw new DoError
              }

              let user = _2.value
              

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { user: user }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  updateUserStatus(user, isLocked) {
    return (async () => {
            try {  await $Users_List.setUser(user)

     await $Users_List.setStatus(isLocked)

     await $Users_List.saveUser()

     await $Users_List.refresh() }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  setPage(page) {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { page: page }), _resolve)
    })
  }

  setFirstName(firstName) {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { user: Mint.update(this.user, { firstName: firstName }) }), _resolve)
    })
  }

  setLastName(lastName) {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { user: Mint.update(this.user, { lastName: lastName }) }), _resolve)
    })
  }

  setStatus(isLocked) {
    let newStatus = (isLocked ? `locked` : `active`)

    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { user: Mint.update(this.user, { status: newStatus }) }), _resolve)
    })
  }

  setUser(user) {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { user: user }), _resolve)
    })
  }
})
$Users_List.__displayName = `Users.List`
Mint.stores.push($Users_List)

const $Showcase_Store = new (class extends Store {
  get active () {
    if (this.props.active != undefined) {
      return this.props.active
    } else {
      return `store`
    }
  }

  get over () {
    if (this.props.over != undefined) {
      return this.props.over
    } else {
      return ``
    }
  }

  get state () {
    return {
    active: this.active,
    over: this.over
    }
  }

  setActive(active) {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { active: active }), _resolve)
    })
  }

  setOver(over) {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { over: over }), _resolve)
    })
  }
})
$Showcase_Store.__displayName = `Showcase.Store`
Mint.stores.push($Showcase_Store)

const $Versions = new (class extends Store {
  get versions () {
    if (this.props.versions != undefined) {
      return this.props.versions
    } else {
      return []
    }
  }

  get loading () {
    if (this.props.loading != undefined) {
      return this.props.loading
    } else {
      return true
    }
  }

  get stale () {
    if (this.props.stale != undefined) {
      return this.props.stale
    } else {
      return true
    }
  }

  get state () {
    return {
    versions: this.versions,
    loading: this.loading,
    stale: this.stale
    }
  }

  latest() {
    return $Maybe.withDefault($Version.empty(), $Array.first(this.versions))
  }

  refresh() {
    return (this.stale ? $Versions.load() : null)
  }

  load() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: true }), _resolve)
    })

    let response = await (async ()=> {
                try {
                  return await $Http.send($Http.get(`https://mint-website.herokuapp.com/releases`))
                } catch(_error) {
                  let error = _error;
     $Debug.log(error)

                  throw new DoError
                }})()

    let _2 = $Version.decodeMany($Json.parse(response.body))

              if (_2 instanceof Err) {
                let _error = _2.value
                let error = _error;
     $Debug.log(error)

                throw new DoError
              }

              let versions = _2.value
              

    let sortedVersions = await $Array.reverse($Array.sortBy(((version) => {
    return version.date
    }), versions))

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { versions: sortedVersions, stale: false }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }
})
$Versions.__displayName = `Versions`
Mint.stores.push($Versions)

const $Counter_Store = new (class extends Store {
  get counter () {
    if (this.props.counter != undefined) {
      return this.props.counter
    } else {
      return 0
    }
  }

  get state () {
    return {
    counter: this.counter
    }
  }

  increment() {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { counter: this.counter + 1 }), _resolve)
    })
  }

  decrement() {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { counter: this.counter - 1 }), _resolve)
    })
  }
})
$Counter_Store.__displayName = `Counter.Store`
Mint.stores.push($Counter_Store)

const $DragStore = new (class extends Store {
  get position () {
    if (this.props.position != undefined) {
      return this.props.position
    } else {
      return {
      top: 0,
      left: 0
    }
    }
  }

  get state () {
    return {
    position: this.position
    }
  }

  setPosition(value) {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { position: value }), _resolve)
    })
  }
})
$DragStore.__displayName = `DragStore`
Mint.stores.push($DragStore)

const $Ui = new (class extends Store {
  get theme () {
    if (this.props.theme != undefined) {
      return this.props.theme
    } else {
      return {
      fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`,
      colors: {
        warning: {
          background: `#FF9730`,
          focus: `#ffb163`,
          text: `#FFF`
        },
        danger: {
          background: `#E04141`,
          focus: `#e76d6d`,
          text: `#FFF`
        },
        success: {
          background: `#3fb543`,
          focus: `#60c863`,
          text: `#FFF`
        },
        secondary: {
          background: `#222`,
          focus: `#333`,
          text: `#FFF`
        },
        primary: {
          background: `#3aad57`,
          focus: `#0fa334`,
          text: `#FFF`
        },
        disabled: {
          background: `#D7D7D7`,
          text: `#9A9A9A`,
          focus: ``
        },
        inputSecondary: {
          background: `#F3F3F3`,
          text: `#616161`,
          focus: ``
        },
        input: {
          background: `#FDFDFD`,
          text: `#606060`,
          focus: `#FFF`
        }
      },
      hover: {
        color: `#26e200`
      },
      outline: {
        fadedColor: `hsla(110, 100%, 44%, 0.5)`,
        color: `hsla(110, 100%, 44%, 1)`
      },
      border: {
        color: `#DDD`,
        radius: `2px`
      }
    }
    }
  }

  get state () {
    return {
    theme: this.theme
    }
  }

  setFontFamily(fontFamily) {
    let theme = this.state.theme

    let updatedTheme = Mint.update(theme, { fontFamily: fontFamily })

    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { theme: updatedTheme }), _resolve)
    })
  }

  setPrimaryBackground(color) {
    let theme = this.state.theme

    let colors = theme.colors

    let primary = colors.primary

    let updatedPrimary = Mint.update(primary, { background: color })

    let updatedColors = Mint.update(colors, { primary: updatedPrimary })

    let updatedTheme = Mint.update(theme, { colors: updatedColors })

    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { theme: updatedTheme }), _resolve)
    })
  }
})
$Ui.__displayName = `Ui`
Mint.stores.push($Ui)

class $Main extends React.PureComponent {
  get pages() {
    return [{
      name: `home`,
      contents: React.createElement($Home, {  })
    }, {
      name: `install`,
      contents: React.createElement($Install, {  })
    }, {
      name: `examples`,
      contents: React.createElement($Examples, {  })
    }, {
      name: `roadmap`,
      contents: React.createElement($Roadmap, {  })
    }, {
      name: `file-handling`,
      contents: React.createElement($Examples_FileHandling, {  })
    }, {
      name: `counter`,
      contents: React.createElement($Counter, {  })
    }, {
      name: `drag`,
      contents: React.createElement($Drag, {  })
    }, {
      name: `index`,
      contents: React.createElement($Users_Layout, {  }, [React.createElement($Users_Table, {  })])
    }, {
      name: `new`,
      contents: React.createElement($Users_Layout, {  }, [React.createElement($UserForm, { isNew: true })])
    }, {
      name: `user`,
      contents: React.createElement($Users_Layout, {  }, [React.createElement($UserForm, { isNew: false })])
    }, {
      name: `not_found`,
      contents: React.createElement("div", {}, [`404`])
    }]
  }

  get page () { return $Application.page }

  setPage (...params) { return $Application.setPage(...params) }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Application._unsubscribe(this);$Ui._unsubscribe(this)
  }

  componentDidMount() {
    $Application._subscribe(this);$Ui._subscribe(this)

    return (async () => {
            try {  await $Ui.setFontFamily(`Open Sans`) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  render() {
    let content = $Maybe.withDefault(React.createElement("div", {}), $Maybe.map(((item) => {
    return item.contents
    }), $Array.find(((item) => {
    return item.name == this.page
    }), this.pages)))

    return React.createElement($Layout, {  }, [content])
  }
}

class $Examples_FileHandling extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      file: $Maybe.nothing(),
      contents: ``
    }
  }

  openDialog() {
    return (async () => {
            try { let file = await (async ()=> {
                try {
                  return await $File.select(`application/json`)
                } catch(_error) {
                  

                  throw new DoError
                }})()

    let contents = await (async ()=> {
                try {
                  return await $File.readAsDataURL(file)
                } catch(_error) {
                  

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { contents: contents, file: $Maybe.just(file) }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  upload() {
    let formData = (() => { let _0 = $Maybe.toResult(`Got Nothing`, this.state.file)

             if (_0 instanceof Err) {
                let _error = _0.value
                let error = _error
     return $FormData.empty()
             }

             let file = _0.value

    return $FormData.addFile(`file`, file, $FormData.empty()) })()

    return (async () => {
            try { let response = await (async ()=> {
                try {
                  return await $Http.send($Debug.log($Http.formDataBody(formData, $Http.post(``))))
                } catch(_error) {
                  let error = _error;
     $Debug.log(error)

                  throw new DoError
                }})() }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  render() {
    let file = $Maybe.withDefault(React.createElement("div", {}), $Maybe.map(((file) => {
    return React.createElement("div", {}, [file.name])
    }), this.state.file))

    return React.createElement("div", {}, [React.createElement($Ui_Button, { onClick: ((event) => {
    return this.openDialog.bind(this)()
    }), label: `Open Browse Dialog` }), React.createElement($Ui_Button, { onClick: ((event) => {
    return this.upload.bind(this)()
    }), label: `Upload`, disabled: $Maybe.isNothing(this.state.file) }), file, React.createElement("pre", {}, [this.state.contents])])
  }
}

$Examples_FileHandling.displayName = "Examples.FileHandling"

class $Layout extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      className: `layout-base`,
      style: {

      }
    }, [React.createElement("div", {
      className: `layout-header`,
      style: {

      }
    }, [React.createElement("div", {
      className: `layout-header-wrapper`,
      style: {

      }
    }, [React.createElement($Ui_Toolbar_Title, { href: `/` }, [React.createElement($Logo, { fill: this.theme.colors.primary.background, textFill: `#FFF`, height: 20, width: 82 })]), React.createElement($Ui_Toolbar_Spacer, {  }), React.createElement($Ui_Link, { href: `/install`, label: `Install` }), React.createElement($Ui_Toolbar_Separator, {  }), React.createElement($Ui_Link, { href: `https://guide.mint-lang.com`, target: `_blank`, label: `Learn` }), React.createElement($Ui_Toolbar_Separator, {  }), React.createElement($Ui_Link, { href: `/examples`, label: `Examples` }), React.createElement($Ui_Toolbar_Separator, {  }), React.createElement($Ui_Link, { href: `/roadmap`, label: `Roadmap` })])]), this.children, React.createElement($Footer, {  })])
  }
}

$Layout.defaultProps = {
  children: []
}

class $SubTitle extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement("div", {
      className: `sub-title-base`,
      style: {

      }
    }, [this.children])
  }
}

$SubTitle.defaultProps = {
  children: []
}

class $UserForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      saving: false
    }
  }

  get buttonLabel() {
    return (this.state.saving ? (this.isNew ? `Creating` : `Saving`) : (this.isNew ? `Create` : `Save`))
  }

  get disabled() {
    return $String.isEmpty(this.user.firstName) || $String.isEmpty(this.user.lastName)
  }

  get title() {
    return (this.isNew ? `Create User` : `Edit User`)
  }

  get deleteField() {
    return (this.isNew ? [] : [React.createElement($Ui_Form_Separator, {  }), React.createElement($Ui_Button, { onClick: ((event) => {
    return this.delete.bind(this)()
    }), type: `danger`, label: `Delete` })])
  }

  get isNew () {
    if (this.props.isNew != undefined) {
      return this.props.isNew
    } else {
      return false
    }
  }

  get theme () { return $Ui.theme }

  get page () { return $Users_List.page }

  refresh (...params) { return $Users_List.refresh(...params) }

  get loading () { return $Users_List.loading }

  get user () { return $Users_List.user }

  saveUser (...params) { return $Users_List.saveUser(...params) }

  setStatus (...params) { return $Users_List.setStatus(...params) }

  setFirstName (...params) { return $Users_List.setFirstName(...params) }

  setLastName (...params) { return $Users_List.setLastName(...params) }

  get error () { return $Users_List.error }

  createUser (...params) { return $Users_List.createUser(...params) }

  deleteUser (...params) { return $Users_List.deleteUser(...params) }

  componentWillUnmount () {
    $Ui._unsubscribe(this);$Users_List._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this);$Users_List._subscribe(this)
  }

  create() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { saving: true }), _resolve)
    })

     await this.createUser.bind(this)()

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { saving: false }), _resolve)
    })

     await $Navigation.navigate(`/users`) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  save() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { saving: true }), _resolve)
    })

     await this.saveUser.bind(this)()

     await this.refresh.bind(this)()

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { saving: false }), _resolve)
    })

     await $Navigation.navigate(`/users?page=` + $Number.toString(this.page)) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  delete() {
    return (async () => {
            try {  await this.deleteUser.bind(this)()

     await $Navigation.navigate(`/users?page=` + $Number.toString(this.page)) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  onClick(event) {
    return (this.isNew ? this.create.bind(this)() : this.save.bind(this)())
  }

  onClearFirstName() {
    return this.setFirstName.bind(this)(``)
  }

  onClearLastName() {
    return this.setLastName.bind(this)(``)
  }

  render() {
    return React.createElement($Ui_Loader, { shown: this.loading }, [React.createElement("div", {}, [React.createElement("div", {
      className: `user-form-title`,
      style: {

      }
    }, [this.title]), React.createElement("div", {
      className: `user-form-form`,
      style: {

      }
    }, [React.createElement($Ui_Form_Field, { label: `First Name` }, [React.createElement($Ui_Input, { value: this.user.firstName, onInput: this.setFirstName.bind(this), onClear: this.onClearFirstName.bind(this), placeholder: `John` })]), React.createElement($Ui_Form_Field, { label: `Last Name` }, [React.createElement($Ui_Input, { value: this.user.lastName, onInput: this.setLastName.bind(this), onClear: this.onClearLastName.bind(this), placeholder: `Doe` })]), React.createElement($Ui_Form_Field, { label: `Status` }, [React.createElement($Ui_Toggle, { checked: this.user.status == `locked`, onChange: this.setStatus.bind(this), offLabel: `Locked`, onLabel: `Active`, width: 150 })]), React.createElement($Ui_Button, { label: this.buttonLabel, onClick: this.onClick.bind(this), disabled: this.disabled }), this.deleteField])])])
  }
}

$UserForm.defaultProps = {
  isNew: false
}

class $Install extends React.PureComponent {
  get version() {
    return this.latest.bind(this)()
  }

  get content() {
    return (this.loading ? React.createElement("ul", {
      className: `install-files`,
      style: {

      }
    }, [React.createElement("li", {}, [`Loading versions...`])]) : React.createElement("ul", {
      className: `install-files`,
      style: {

      }
    }, [this.files]))
  }

  get files() {
    return (this.loading ? [] : $Array.map(this.renderFile.bind(this), this.version.assets))
  }

  get loading () { return $Versions.loading }

  latest (...params) { return $Versions.latest(...params) }

  componentWillUnmount () {
    $Versions._unsubscribe(this)
  }

  componentDidMount () {
    $Versions._subscribe(this)
  }

  renderFile(asset) {
    return React.createElement("li", {}, [React.createElement($Ui_Link, { href: asset.url, label: asset.name })])
  }

  render() {
    return React.createElement($Page, {  }, [React.createElement($Title, {  }, [`Install`]), React.createElement($SubTitle, {  }, [`Follow the directions below to install Mint:`]), React.createElement("ol", {
      className: `install-list`,
      style: {

      }
    }, [React.createElement("li", {}, [`Download the binary for your operating system: `, this.content]), React.createElement("li", {}, [`Move the binary to (as): `, React.createElement("code", {
      className: `install-code`,
      style: {

      }
    }, [`/usr/local/bin/mint`])]), React.createElement("li", {}, [`You invoke the CLI in your terminal by just typing `, React.createElement("code", {
      className: `install-code`,
      style: {

      }
    }, [`mint`])])]), React.createElement("hr", {
      className: `install-hr`,
      style: {

      }
    }), React.createElement($Title, {  }, [`Install from Source`]), React.createElement($SubTitle, {  }, [`Follow the directions below to install Mint from source:`]), React.createElement("ol", {
      className: `install-list`,
      style: {

      }
    }, [React.createElement("li", {}, [`Install the `, React.createElement($Ui_Link, { href: `https://crystal-lang.org/docs/installation/`, label: `Crystal programming language`, target: `_blank` })]), React.createElement("li", {}, [`Download and extract the source files from Github:`, React.createElement("br", {}), React.createElement($Ui_Link, { label: `https://github.com/mint-lang/mint`, href: `https://github.com/mint-lang/mint`, target: `_blank` })]), React.createElement("li", {}, [`In your terminal enter the folder you extracted the source code:`, React.createElement("pre", {
      className: `install-code`,
      style: {

      }
    }, [`cd /path/to/source`])]), React.createElement("li", {}, [`Install dependencies:`, React.createElement("pre", {
      className: `install-code`,
      style: {

      }
    }, [`crystal deps`])]), React.createElement("li", {}, [`Build the binary (might need to use sudo):`, React.createElement("pre", {
      className: `install-code`,
      style: {

      }
    }, [`crystal build src/mint.cr -o /usr/local/bin/mint -p --release --no-debug`])]), React.createElement("li", {}, [`You invoke the CLI in your terminal by just typing `, React.createElement("code", {
      className: `install-code`,
      style: {

      }
    }, [`mint`])])]), React.createElement("hr", {
      className: `install-hr`,
      style: {

      }
    }), React.createElement($Title, {  }, [`Daily Binaries`]), React.createElement($SubTitle, {  }, [React.createElement("p", {}, [`A fresh binary is created and uploaded to S3 when something changes in the master branch.`]), React.createElement("p", {}, [`You can download those binaries here:`]), React.createElement("ul", {
      className: `install-files`,
      style: {

      }
    }, [React.createElement("li", {}, [React.createElement($Ui_Link, { href: `https://s3-eu-west-1.amazonaws.com/mint-lang/mint-latest-linux`, label: `mint-latest-linux` })]), React.createElement("li", {}, [React.createElement($Ui_Link, { href: `https://s3-eu-west-1.amazonaws.com/mint-lang/mint-latest-osx`, label: `mint-latest-osx` })])])])])
  }
}

class $Roadmap_Feature extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get description () {
    if (this.props.description != undefined) {
      return this.props.description
    } else {
      return ``
    }
  }

  get icon () {
    if (this.props.icon != undefined) {
      return this.props.icon
    } else {
      return ``
    }
  }

  get name () {
    if (this.props.name != undefined) {
      return this.props.name
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("div", {
      className: `roadmap-feature-base`,
      style: {

      }
    }, [($String.isEmpty(this.icon) ? $Html.empty() : React.createElement("div", {
      className: `roadmap-feature-icon`,
      style: {

      }
    }, [this.icon])), React.createElement("div", {}, [React.createElement("div", {
      className: `roadmap-feature-title`,
      style: {

      }
    }, [this.name]), React.createElement("div", {
      className: `roadmap-feature-description`,
      style: {

      }
    }, [this.description]), ($Array.isEmpty(this.children) ? $Html.empty() : React.createElement("div", {
      className: `roadmap-feature-features`,
      style: {

      }
    }, [this.children]))])])
  }
}

$Roadmap_Feature.displayName = "Roadmap.Feature"

$Roadmap_Feature.defaultProps = {
  children: [],description: ``,icon: ``,name: ``
}

class $Roadmap_Version extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get version () {
    if (this.props.version != undefined) {
      return this.props.version
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("div", {}, [React.createElement("div", {
      className: `roadmap-version-title`,
      style: {

      }
    }, [this.version]), React.createElement("div", {
      className: `roadmap-version-features`,
      style: {

      }
    }, [this.children])])
  }
}

$Roadmap_Version.displayName = "Roadmap.Version"

$Roadmap_Version.defaultProps = {
  children: [],version: ``
}

class $Roadmap extends React.PureComponent {
  render() {
    return React.createElement($Page, {  }, [React.createElement($Title, {  }, [`Roadmap`]), React.createElement($SubTitle, {  }, [`This page contains planned and shipped high level features up to the stable release (1.0.0).`]), React.createElement($Roadmap_Version, { version: `Planned Features` }, [React.createElement($Roadmap_Feature, { name: `CSS Type Checking`, icon: `🞛`, description: `Check the values of known CSS properties and warn the developer if it's not matches the available values.` }), React.createElement($Roadmap_Feature, { name: `HTML Attribute Checking`, icon: `🞛`, description: `Check the values of HTML attributes based on the tag they belong to (for example check alt attributes for <img> tags).` }), React.createElement($Roadmap_Feature, { name: `Progressive Web Application Support`, icon: `🞛`, description: `Automatically generate files for basic PWA features (service-worker, manifest, icons).` }), React.createElement($Roadmap_Feature, { name: `Devtools`, icon: `🞛`, description: `A package for monitoring the state of the application.` }), React.createElement($Roadmap_Feature, { name: `Documentation Generator`, icon: `🞛`, description: `Generate beatuifl documentation for your project, including dependencies.` }), React.createElement($Roadmap_Feature, { name: `Compiler Optimalization`, icon: `🞛`, description: `Only compile the entities that are being used.` }), React.createElement($Roadmap_Feature, { name: `Testing`, icon: `🞛`, description: `Language feature for easily testing components or the whole application.` }), React.createElement($Roadmap_Feature, { name: `Language Server Protocol`, icon: `🞛`, description: `Implement a language server to expose the AST for code editors.` }), React.createElement($Roadmap_Feature, { name: `Website for Packages`, icon: `🞛`, description: `A website to browse, find and rate community packages.` }), React.createElement($Roadmap_Feature, { name: `Image Optimization`, icon: `🞛`, description: `During the build process optimize images automatically.` }), React.createElement($Roadmap_Feature, { name: `Application Structure Diagram`, icon: `🞛`, description: `Construct an interactive diagram of application structure containing routes, stores, providers and components. ` })]), React.createElement($Roadmap_Version, { version: `0.1` }, [React.createElement($Roadmap_Feature, { description: `The language itself.`, name: `Language Basics`, icon: `🞛` }, [React.createElement($Roadmap_Feature, { name: `Parser`, description: `Converts source code to an AST.` }), React.createElement($Roadmap_Feature, { name: `Formatter`, description: `Reproduces source code from an AST.` }), React.createElement($Roadmap_Feature, { name: `Type Checker`, description: `Walks the AST and type checks the application.` }), React.createElement($Roadmap_Feature, { name: `Compiler`, description: `Compiles an application to JavaScript.` })]), React.createElement($Roadmap_Feature, { description: `The features of the language.`, name: `Language Features`, icon: `🞛` }, [React.createElement($Roadmap_Feature, { name: `Components`, description: `Define components with type checked properties and state.` }), React.createElement($Roadmap_Feature, { name: `Styling`, description: `Styling HTML tags in a dynamic way without conflicts.` }), React.createElement($Roadmap_Feature, { name: `Routing`, description: `Define routes in a declarative way.` }), React.createElement($Roadmap_Feature, { name: `Computations`, description: `Handle synchronous (JSON decoding) and asynchronous (HTTP Request) computations that might fail.` }), React.createElement($Roadmap_Feature, { name: `State`, description: `Manage global state with Stores.` }), React.createElement($Roadmap_Feature, { name: `Subscriptions`, description: `Subscribe to global events (mouse, window) using providers.` }), React.createElement($Roadmap_Feature, { name: `JavaScript Interopability`, description: `Simply call out the JavaScript when you need to.` })]), React.createElement($Roadmap_Feature, { name: `Production Builder`, icon: `🞛`, description: `The process of building the production version of the application.` }, [React.createElement($Roadmap_Feature, { name: `Icon Generator`, description: `Generate icons for most common use cases (favicon, application icons).` }), React.createElement($Roadmap_Feature, { name: `Bundling and Minification`, description: `Compile and minify the application into a single JavaScript file.` })]), React.createElement($Roadmap_Feature, { name: `Development Server`, icon: `🞛`, description: `A server that automatically formats code and reloads the application when any of the source files change.` }), React.createElement($Roadmap_Feature, { name: `Package Manager`, icon: `🞛`, description: `Install external sources (packages) directly from Git repositories.` }), React.createElement($Roadmap_Feature, { name: `Command Line Interface`, icon: `🞛`, description: `A binary that allows to access the features of the language.` })])])
  }
}

class $Home extends React.PureComponent {
  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      className: `home-base`,
      style: {

      }
    }, [React.createElement("div", {
      className: `home-hero`,
      style: {

      }
    }, [React.createElement($Logo, { fill: this.theme.colors.primary.background, textFill: `#222` }), React.createElement("h2", {
      className: `home-slogan`,
      style: {

      }
    }, [`A refreshing language for the front-end web.`]), React.createElement("div", {
      className: `home-buttons`,
      style: {

      }
    }, [React.createElement($Ui_Link, { href: `/install` }, [React.createElement($Ui_Button, { size: 22, label: `Install` })]), React.createElement($Ui_Link, { href: `https://guide.mint-lang.com`, target: `_blank` }, [React.createElement($Ui_Button, { size: 22, type: `secondary`, label: `Learn` })])])]), React.createElement($Showcase, {  }), React.createElement($CallToAction, {  })])
  }
}

class $Showcase_Block extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get openingChar () {
    if (this.props.openingChar != undefined) {
      return this.props.openingChar
    } else {
      return ` {`
    }
  }

  get closingChar () {
    if (this.props.closingChar != undefined) {
      return this.props.closingChar
    } else {
      return `}`
    }
  }

  get line () {
    if (this.props.line != undefined) {
      return this.props.line
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("div", {
      className: `showcase-block-base`,
      style: {

      }
    }, [React.createElement("div", {}, [this.line + this.openingChar]), React.createElement("div", {
      className: `showcase-block-content`,
      style: {

      }
    }, [this.children]), this.closingChar])
  }
}

$Showcase_Block.displayName = "Showcase.Block"

$Showcase_Block.defaultProps = {
  children: [],openingChar: ` {`,closingChar: `}`,line: ``
}

class $Showcase extends React.PureComponent {
  get data() {
    return [{
      title: `Stores`,
      key: `store`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Stores are global containers of application specific data.`]), React.createElement("li", {}, [`Stores can be connected to components to reference their functions and properties.`]), React.createElement("li", {}, [`Any time data in a store is updated the connected components are re-rendered.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we define a store to contain the value of the counter and the functions to mutate it.`])])
    }, {
      title: `Store Properties`,
      key: `store-property`,
      description: React.createElement("ul", {}, [React.createElement("li", {}, [`The `, React.createElement("code", {}, [`property`]), ` keyword when used in a store defines part of the data that the store contains.`]), React.createElement("li", {}, [`The data are available through the `, React.createElement("code", {}, [`state`]), ` variable of the store.`])])
    }, {
      title: `Functions`,
      key: `function`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Functions can be defined on modules, components, stores and providers.`]), React.createElement("li", {}, [`Functions can be referenced by their names inside the entity which they were defined in.`]), React.createElement("li", {}, [`Similarly to some functional languages the body a function can only be a single expression.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`This function returns `, React.createElement("code", {}, [`Void`]), ` which means it does a side-effect.`])])
    }, {
      title: `Next Call`,
      key: `next`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`A next call is used to mutate the state of a component or a store`]), React.createElement("li", {}, [`A next call is considered a side-effect which means it always returns `, React.createElement("code", {}, [`Void`]), `.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we increment the current state of the counter by 1 and set a new state with the incremented counter.`])])
    }, {
      title: `Component`,
      key: `component`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Components are reusable pieces of code that have specific behavior, styles and content.`]), React.createElement("li", {}, [`Components can be composed into HTML elements and other components.`]), React.createElement("li", {}, [`Data to components can be send via it's properties.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`This component contains the counter and two buttons to increment and decrement it.`])])
    }, {
      title: `Connect`,
      key: `connect`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`The connect directive lets you connect a component to a store which allows you to call the stores functions and properties without using the stores name.`]), React.createElement("li", {}, [`Components gets rendered when the data in the store changes.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we expose the `, React.createElement("code", {}, [`increment`]), ` `, React.createElement("code", {}, [`decrement`]), ` functions and the `, React.createElement("code", {}, [`counter`]), ` property to the component.`])])
    }, {
      title: `Component Properties`,
      key: `component-property`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`The `, React.createElement("code", {}, [`property`]), ` keyword when used in a component defines external data that the component can recieve via HTML attributes.`]), React.createElement("li", {}, [`The defined property has a name, type and a default value.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here for the sake of the example we define a disabled property which determines if the counter can be changed.`])])
    }, {
      title: `Styles`,
      key: `style`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Styles define with CSS how an HTML element looks.`]), React.createElement("li", {}, [`Styles are identified by a name and the contain CSS declarations and other optionally sub rules.`]), React.createElement("li", {}, [`Styles are scoped to the component and the element which uses them.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we define the styles of the main element of the component.`])])
    }, {
      title: `CSS Interpolation`,
      key: `css-interpolation`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Expressions can be evaluated inside a CSS declarations value using CSS interpolation.`]), React.createElement("li", {}, [`These expressions are evaluated every time the component is rendered.`]), React.createElement("li", {}, [`The resulting type of an expression can only be String or Number.`]), React.createElement("li", {}, [`There is no limit on number of interpolations that can be used in a value.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we use the value from the computed property background to style the background of the main element.`])])
    }, {
      title: `CSS Declaration`,
      key: `css-declaration`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Any number of standard CSS declarations can be defined in a style.`]), React.createElement("li", {}, [`A CSS declaration consists of a CSS property and a value.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we set a number of CSS properties for the base style.`])])
    }, {
      title: `Computed Properties`,
      key: `get`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Computed properties can be defined on a component with the `, React.createElement("code", {}, [`get`]), ` keyword.`]), React.createElement("li", {}, [`Computed properties works like regular properties but instead of returning a constant value it can return different values base on the state and the properties.`]), React.createElement("li", {}, [`Computed properties are mostly used together with CSS interpolations.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we return a different background color based on the value of the counter.`])])
    }, {
      title: `Render`,
      key: `render`,
      description: React.createElement("ul", {}, [React.createElement("li", {}, [`The render function renders the component into an HTML tree.`]), React.createElement("li", {}, [`The render function is required to return Html, String or an Array of those.`])])
    }, {
      title: `HTML Elements`,
      key: `html-element`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`HTML elements can be written as in standard HTML.`]), React.createElement("li", {}, [`HTML elements are not confined to the render function so they can be used as an expression.`]), React.createElement("li", {}, [`HTML elements are can only have other HTML elements, HTML expressions and components as children.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we have a button element with two attributes whose values are expressions.`])])
    }, {
      title: `Events`,
      key: `event`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Event attributes are special and their value match specific event types.`]), React.createElement("li", {}, [`All event handlers are functions, they take an event record and return Void.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here when clicking on the button we call the decrement function.`])])
    }, {
      title: `Attributes`,
      key: `attribute`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Attributes are either strings or expressions.`]), React.createElement("li", {}, [`All attributes must have a value.`]), React.createElement("li", {}, [`Some attribute require specific types, for example disabled and readonly require Bool.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we are passing the disabled attribute the value of the disabled property as an expression.`])])
    }, {
      title: `HTML Expressions`,
      key: `html-expression`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`HTML Expressions allows inserting data into HTML elements or components.`]), React.createElement("li", {}, [`The return value of an expression must be HTML or String.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we are inserting the string "Increment".`])])
    }, {
      title: `The Main Component`,
      key: `main`,
      description: React.createElement("ul", {}, [React.createElement("li", {}, [`The component named Main is the one that get's rendered on the screen.`])])
    }, {
      title: `Component Tags`,
      key: `html-component`,
      description: React.createElement("div", {}, [React.createElement("ul", {}, [React.createElement("li", {}, [`Tags that have the name of a component will render that component at the point where the tag is defined.`]), React.createElement("li", {}, [`Attributes work like on HTML elements with the difference that they are type checked against the components properties.`])]), React.createElement("hr", {}), React.createElement("p", {}, [`Here we are rendering the `, React.createElement("code", {}, [`Counter`]), ` component.`])])
    }]
  }

  get active () { return $Showcase_Store.active }

  componentWillUnmount () {
    $Showcase_Store._unsubscribe(this)
  }

  componentDidMount () {
    $Showcase_Store._subscribe(this)
  }

  render() {
    let selected = $Maybe.withDefault({
      description: $Html.empty(),
      title: ``,
      key: ``
    }, $Array.find(((item) => {
    return item.key == this.active
    }), this.data))

    return React.createElement("div", {
      className: `showcase-row`,
      style: {

      }
    }, [React.createElement("div", {
      className: `showcase-base`,
      style: {

      }
    }, [React.createElement("div", {
      className: `showcase-title`,
      style: {

      }
    }, [`Explore an example`]), React.createElement("div", {
      className: `showcase-hint`,
      style: {

      }
    }, [`Click on the parts to learn more.`]), React.createElement("div", {
      className: `showcase-wrapper`,
      style: {

      }
    }, [React.createElement("pre", {
      className: `showcase-code`,
      style: {

      }
    }, [React.createElement($Showcase_HighlightBlock, { line: `store Counter.Store`, padding: `5px 10px`, name: `store` }, [React.createElement($Showcase_Highlight, { text: `property counter : Number = 0`, name: `store-property` }), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_HighlightBlock, { line: `fun increment : Void`, name: `function` }, [React.createElement($Showcase_Highlight, { text: `next { state | counter = counter + 1 }`, name: `next` })]), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_Block, { line: `fun decrement : Void` }, [`next { state | counter = counter - 1 }`])]), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_HighlightBlock, { line: `component Counter`, name: `component`, padding: `5px 10px` }, [React.createElement($Showcase_Highlight, { text: `connect Counter.Store exposing { increment, decrement, counter }`, name: `connect` }), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_Highlight, { text: `property disabled : Bool = false`, name: `component-property` }), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_HighlightBlock, { line: `style base`, name: `style` }, [`background: `, React.createElement($Showcase_Highlight, { text: `{background}`, name: `css-interpolation` }), `;\n`, React.createElement($Showcase_Highlight, { text: `border-radius: 5px;`, name: `css-declaration` }), `\ntransition: 320ms;`, `\ndisplay: flex;`, `\npadding: 20px;`, `\nmargin: 20px; `]), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_Block, { line: `style counter` }, [`font-family: sans;`, `\nfont-size: 20px;`, `\npadding: 0 20px;`]), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_HighlightBlock, { line: `get background : String`, name: `get` }, [`if (counter >= 10) {\n`, `  "lightgreen"\n`, `} else {\n`, `  if (counter < 0) {\n`, `    "orangered"\n`, `  } else {\n`, `    "#F2F2F2"\n`, `  }\n`, `}`]), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_HighlightBlock, { line: `fun render : Html`, name: `render` }, [React.createElement($Showcase_Block, { closingChar: `</div>`, openingChar: ``, line: `<div::base>` }, [React.createElement($Showcase_HighlightBlock, { closingChar: `</button>`, openingChar: ``, line: `<button`, name: `html-element` }, [React.createElement($Showcase_Highlight, { text: `onClick={\\event : Html.Event => decrement()}`, name: `event` }), `\ndisabled={disabled}>`, React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), `<{ "Decrement" }>`, React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    })]), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_Block, { closingChar: `</span>`, openingChar: ``, line: `<span::counter>` }, [`<{ Number.toString(counter) }>`]), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_Block, { closingChar: `</button>`, openingChar: ``, line: `<button` }, [`onClick={\\event : Html.Event => increment()}\n`, `disabled=`, React.createElement($Showcase_Highlight, { text: `{disabled}`, name: `attribute` }), `>\n`, React.createElement($Showcase_Highlight, { text: `<{ "Increment" }>`, name: `html-expression` })])])])]), React.createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), React.createElement($Showcase_HighlightBlock, { line: `component Main`, name: `main`, padding: `5px 10px` }, [React.createElement($Showcase_Block, { line: `fun render : Html` }, [React.createElement($Showcase_Highlight, { text: `<Counter disabled={false}/>`, name: `html-component` })])])]), React.createElement("div", {
      className: `showcase-description`,
      style: {

      }
    }, [React.createElement("div", {
      className: `showcase-section-title`,
      style: {

      }
    }, [selected.title]), selected.description])])])])
  }
}

class $Showcase_Highlight extends React.PureComponent {
  get border() {
    return (this.over == this.name ? `1px dashed rgba(0,0,0,0.6)` : `1px dashed rgba(0,0,0,0.1)`)
  }

  get color() {
    return (this.active == this.name ? `white` : ``)
  }

  get background() {
    return (this.active == this.name ? `#3aad57` : (this.over == this.name ? `rgba(0,0,0,0.15)` : `rgba(0,0,0,0.07)`))
  }

  get text () {
    if (this.props.text != undefined) {
      return this.props.text
    } else {
      return ``
    }
  }

  get name () {
    if (this.props.name != undefined) {
      return this.props.name
    } else {
      return ``
    }
  }

  get active () { return $Showcase_Store.active }

  get over () { return $Showcase_Store.over }

  setActive (...params) { return $Showcase_Store.setActive(...params) }

  setOver (...params) { return $Showcase_Store.setOver(...params) }

  componentWillUnmount () {
    $Showcase_Store._unsubscribe(this)
  }

  componentDidMount () {
    $Showcase_Store._subscribe(this)
  }

  handleClick(event) {
    return (async () => {
            try {  await $Html_Event.stopPropagation(event)

     await this.setActive.bind(this)(this.name) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  handleMouseEnter(event) {
    return (async () => {
            try {  await $Html_Event.stopPropagation(event)

     await this.setOver.bind(this)(this.name) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  handleMouseLeave(event) {
    return this.setOver.bind(this)(``)
  }

  render() {
    return React.createElement("div", {
      onMouseLeave: this.handleMouseLeave.bind(this),
      onMouseOver: this.handleMouseEnter.bind(this),
      onClick: this.handleClick.bind(this),
      className: `showcase-highlight-base`,
      style: {
        [`--showcase-highlight-base-background`]: this.background,
        [`--showcase-highlight-base-border`]: this.border,
        [`--showcase-highlight-base-color`]: this.color
      }
    }, [this.text])
  }
}

$Showcase_Highlight.displayName = "Showcase.Highlight"

$Showcase_Highlight.defaultProps = {
  text: ``,name: ``
}

class $CallToAction extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get text () {
    if (this.props.text != undefined) {
      return this.props.text
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("div", {
      className: `call-to-action-base`,
      style: {

      }
    }, [React.createElement("div", {
      className: `call-to-action-text`,
      style: {

      }
    }, [`Interested?`]), React.createElement("div", {
      className: `call-to-action-buttons`,
      style: {

      }
    }, [React.createElement($Ui_Link, { href: `/install` }, [React.createElement($Ui_Button, { size: 20, type: `secondary`, label: `Install` })]), React.createElement($Ui_Link, { href: `https://guide.mint-lang.com`, target: `_blank` }, [React.createElement($Ui_Button, { size: 20, type: `secondary`, label: `Learn` })])])])
  }
}

$CallToAction.defaultProps = {
  children: [],text: ``
}

class $Showcase_HighlightBlock extends React.PureComponent {
  get border() {
    return (this.over == this.name && this.active != this.name ? `1px dashed rgba(0,0,0,0.8)` : `1px dashed rgba(0,0,0,0.1)`)
  }

  get color() {
    return (this.active == this.name ? `white` : ``)
  }

  get background() {
    return (this.active == this.name ? `#3aad57` : (this.over == this.name ? `rgba(0,0,0,0.15)` : `rgba(0,0,0,0.07)`))
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get openingChar () {
    if (this.props.openingChar != undefined) {
      return this.props.openingChar
    } else {
      return ` {`
    }
  }

  get closingChar () {
    if (this.props.closingChar != undefined) {
      return this.props.closingChar
    } else {
      return `}`
    }
  }

  get padding () {
    if (this.props.padding != undefined) {
      return this.props.padding
    } else {
      return `5px`
    }
  }

  get line () {
    if (this.props.line != undefined) {
      return this.props.line
    } else {
      return ``
    }
  }

  get name () {
    if (this.props.name != undefined) {
      return this.props.name
    } else {
      return ``
    }
  }

  get active () { return $Showcase_Store.active }

  get over () { return $Showcase_Store.over }

  setActive (...params) { return $Showcase_Store.setActive(...params) }

  setOver (...params) { return $Showcase_Store.setOver(...params) }

  componentWillUnmount () {
    $Showcase_Store._unsubscribe(this)
  }

  componentDidMount () {
    $Showcase_Store._subscribe(this)
  }

  handleClick(event) {
    return (async () => {
            try {  await $Html_Event.stopPropagation(event)

     await this.setActive.bind(this)(this.name) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  handleMouseEnter(event) {
    return (async () => {
            try {  await $Html_Event.stopPropagation(event)

     await this.setOver.bind(this)(this.name) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  handleMouseLeave(event) {
    return this.setOver.bind(this)(``)
  }

  render() {
    return React.createElement("div", {
      onMouseLeave: this.handleMouseLeave.bind(this),
      onMouseOver: this.handleMouseEnter.bind(this),
      onClick: this.handleClick.bind(this),
      className: `showcase-highlight-block-base`,
      style: {
        [`--showcase-highlight-block-base-background`]: this.background,
        [`--showcase-highlight-block-base-padding`]: this.padding,
        [`--showcase-highlight-block-base-border`]: this.border,
        [`--showcase-highlight-block-base-color`]: this.color
      }
    }, [React.createElement("div", {}, [this.line + this.openingChar]), React.createElement("div", {
      className: `showcase-highlight-block-content`,
      style: {

      }
    }, [this.children]), this.closingChar])
  }
}

$Showcase_HighlightBlock.displayName = "Showcase.HighlightBlock"

$Showcase_HighlightBlock.defaultProps = {
  children: [],openingChar: ` {`,closingChar: `}`,padding: `5px`,line: ``,name: ``
}

class $Logo extends React.PureComponent {
  get textFill () {
    if (this.props.textFill != undefined) {
      return this.props.textFill
    } else {
      return `#000`
    }
  }

  get fill () {
    if (this.props.fill != undefined) {
      return this.props.fill
    } else {
      return `#000`
    }
  }

  get height () {
    if (this.props.height != undefined) {
      return this.props.height
    } else {
      return 90
    }
  }

  get width () {
    if (this.props.width != undefined) {
      return this.props.width
    } else {
      return 370
    }
  }

  render() {
    return React.createElement("svg", {
      viewBox: `0 0 370 90`,
      height: `90`,
      width: `370`,
      className: `logo-base`,
      style: {
        [`--logo-base-height`]: this.height + `px`,
        [`--logo-base-width`]: this.width + `px`
      }
    }, [React.createElement("path", {
      d: `M84.082 87.484C78.584 68.76 61.48 49.421 41.624 42.668c19.855 6.446 33.906 16.269 43.375 35.914C85.304 15.348 27.268 31.617 1.304 0-10.304 80.424 58.73 97.307 84.082 87.484z`,
      fill: this.fill
    }), React.createElement("path", {
      d: `M177.222 25.537q6.198 0 11.529 2.603 5.454 2.48 8.801 7.81 3.347 5.331 3.347 13.14v39.67h-9.917V50.083q0-8.058-4.09-11.901-3.968-3.967-10.538-3.967-4.959 0-9.174 2.48-4.09 2.355-6.694 7.065-2.48 4.587-2.48 11.033V88.76h-9.917V50.083q0-8.058-4.09-11.901-3.967-3.967-10.538-3.967-4.462 0-8.677 2.355-4.215 2.232-6.942 7.066-2.728 4.835-2.728 12.025v33.1h-9.917V26.776h8.678l.62 9.67q3.223-5.455 8.43-8.183 5.33-2.727 11.404-2.727 6.818 0 12.52 3.1 5.827 3.099 8.802 9.049 2.728-5.95 8.926-9.05 6.198-3.099 12.645-3.099zM228.312 14.876q-3.348 0-5.455-1.983-1.983-2.108-1.983-5.455t1.983-5.33Q224.964 0 228.312 0q3.347 0 5.33 2.107 2.108 1.984 2.108 5.331 0 3.347-2.108 5.455-1.983 1.983-5.33 1.983zm4.958 73.884h-9.917V26.777h9.917V88.76zM286.406 25.537q10.537 0 17.355 6.075 6.818 6.074 6.818 17.479v39.67h-9.917V52.561q0-9.67-4.215-14.008-4.091-4.34-11.033-4.34-4.959 0-9.298 2.232-4.338 2.108-7.19 7.066-2.727 4.835-2.727 12.273V88.76h-9.917V26.777h8.677l.62 9.67q3.1-5.58 8.554-8.183 5.454-2.727 12.273-2.727zM370 84.421Q363.802 90 354.008 90q-7.562 0-12.396-4.09-4.711-4.092-4.835-12.522V35.331H324.38v-8.554h12.397V11.9l9.917-2.727v17.603h22.934v8.554h-22.934v36.322q0 4.463 2.48 6.818 2.603 2.231 6.818 2.231 5.95 0 10.537-4.586L370 84.42z`,
      fill: this.textFill
    })])
  }
}

$Logo.defaultProps = {
  textFill: `#000`,fill: `#000`,height: 90,width: 370
}

class $Examples_Example extends React.PureComponent {
  get description () {
    if (this.props.description != undefined) {
      return this.props.description
    } else {
      return ``
    }
  }

  get title () {
    if (this.props.title != undefined) {
      return this.props.title
    } else {
      return ``
    }
  }

  get href () {
    if (this.props.href != undefined) {
      return this.props.href
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("div", {
      onClick: ((event) => {
      return $Navigation.navigate(this.href)
      }),
      className: `examples-example-base`,
      style: {

      }
    }, [React.createElement("div", {
      className: `examples-example-title`,
      style: {

      }
    }, [this.title]), React.createElement("div", {
      className: `examples-example-description`,
      style: {

      }
    }, [this.description])])
  }
}

$Examples_Example.displayName = "Examples.Example"

$Examples_Example.defaultProps = {
  description: ``,title: ``,href: ``
}

class $Examples extends React.PureComponent {
  render() {
    return React.createElement($Page, {  }, [React.createElement($Title, {  }, [`Examples`]), React.createElement($SubTitle, {  }, [`Here you can find some examples that showcase the language features.`]), React.createElement("hr", {
      className: `examples-hr`,
      style: {

      }
    }), React.createElement("div", {
      className: `examples-grid`,
      style: {

      }
    }, [React.createElement($Examples_Example, { title: `User Management`, href: `/users`, description: `This example contains an implementation of a table of users with client side pagination and forms for creating new users and editing existsing ones through an HTTP API.` }), React.createElement($Examples_Example, { title: `Drag and Drop`, href: `/drag`, description: `This example shows how to drag and drop an HTML element on the page.` }), React.createElement($Examples_Example, { title: `Counter`, href: `/counter`, description: `This example shows a counter which stored in a store with two buttons one for incrementing th counter and one for decrementing it.` }), React.createElement($Examples_Example, { title: `File Handling`, href: `/examples/file-handling`, description: `This example shows how to implement a component which loads and shows a file from the users computer and then uploads it to a server via HTTP.` }), React.createElement($Ui_Link, { href: `/examples/file-handling`, label: `` })])])
  }
}

class $Title extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement("div", {
      className: `title-base`,
      style: {

      }
    }, [this.children])
  }
}

$Title.defaultProps = {
  children: []
}

class $UserRow extends React.PureComponent {
  get textDecoration() {
    return (() => {
      let condition = this.user.status
      let branch0 = `locked`

      switch (condition) {
        case branch0:
          return `line-through`
        default:
          return ``
      }
    })()
  }

  get user () {
    if (this.props.user != undefined) {
      return this.props.user
    } else {
      return {
      createdAt: $Time.now(),
      updatedAt: $Time.now(),
      firstName: ``,
      lastName: ``,
      status: ``,
      id: 0
    }
    }
  }

  updateUserStatus (...params) { return $Users_List.updateUserStatus(...params) }

  componentWillUnmount () {
    $Users_List._unsubscribe(this)
  }

  componentDidMount () {
    $Users_List._subscribe(this)
  }

  onChange(isLocked) {
    return this.updateUserStatus.bind(this)(this.user, isLocked)
  }

  render() {
    return React.createElement("tr", {
      className: `user-row-tr`,
      style: {
        [`--user-row-tr-a-text-decoration`]: this.textDecoration
      }
    }, [React.createElement($Ui_Table_Td, {  }, [React.createElement($Ui_Link, { href: `/users/` + $Number.toString(this.user.id) }, [$Number.toString(this.user.id)])]), React.createElement($Ui_Table_Td, {  }, [React.createElement($Ui_Link, { href: `/users/` + $Number.toString(this.user.id) }, [this.user.firstName + ` ` + this.user.lastName])]), React.createElement($Ui_Table_Td, {  }, [$String.capitalize(this.user.status)]), React.createElement($Ui_Table_Td, {  }, [React.createElement($Ui_Time, { date: this.user.updatedAt })]), React.createElement($Ui_Table_Td, { align: `center` }, [React.createElement($Ui_Checkbox, { checked: this.user.status == `locked`, onChange: this.onChange.bind(this) })])])
  }
}

$UserRow.defaultProps = {
  user: {
    createdAt: $Time.now(),
    updatedAt: $Time.now(),
    firstName: ``,
    lastName: ``,
    status: ``,
    id: 0
  }
}

class $Page extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement("div", {
      className: `page-base`,
      style: {

      }
    }, [this.children])
  }
}

$Page.defaultProps = {
  children: []
}

class $Users_Layout extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement("div", {}, [React.createElement($Ui_Breadcrumbs, { separator: `|` }, [React.createElement($Ui_Breadcrumb, { label: `Home`, href: `/users` }), React.createElement($Ui_Breadcrumb, { label: `New User`, href: `/users/new` })]), React.createElement("div", {
      className: `users-layout-wrapper`,
      style: {

      }
    }, [React.createElement("div", {
      className: `users-layout-content`,
      style: {

      }
    }, [this.children])])])
  }
}

$Users_Layout.displayName = "Users.Layout"

$Users_Layout.defaultProps = {
  children: []
}

class $Users_Table extends React.PureComponent {
  get loading () { return $Users_List.loading }

  get users () { return $Users_List.users }

  get page () { return $Users_List.page }

  get perPage () { return $Users_List.perPage }

  get error () { return $Users_List.error }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Users_List._unsubscribe(this);$Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Users_List._subscribe(this);$Ui._subscribe(this)
  }

  setPage(a) {
    return $Navigation.navigate(`/users?page=` + $Number.toString(a))
  }

  renderItem(item) {
    return React.createElement($UserRow, { key: $Number.toString(item.id), user: item })
  }

  render() {
    let slicedUsers = $Array.slice(this.page * this.perPage, (this.page + 1) * this.perPage, this.users)

    let rows = ($Array.isEmpty(slicedUsers) ? [React.createElement("tr", {}, [React.createElement("td", {
      colspan: `5`
    }, [React.createElement("div", {
      className: `users-table-empty`,
      style: {

      }
    }, [`There are no users to display!`])])])] : $Array.map(this.renderItem.bind(this), slicedUsers))

    return React.createElement($Ui_Loader, { shown: this.loading }, [React.createElement("div", {}, [React.createElement("div", {
      className: `users-table-header`,
      style: {

      }
    }, [React.createElement("div", {
      className: `users-table-title`,
      style: {

      }
    }, [`Users`])]), React.createElement("table", {
      className: `users-table-table`,
      style: {
        [`--users-table-table-border`]: `1px solid ` + this.theme.border.color,
        [`--users-table-table-color`]: this.theme.colors.input.text,
        [`--users-table-table-font-family`]: this.theme.fontFamily
      }
    }, [React.createElement("thead", {}, [React.createElement("tr", {}, [React.createElement($Ui_Table_Th, { width: `40px` }, [`Id`]), React.createElement($Ui_Table_Th, {  }, [`Name`]), React.createElement($Ui_Table_Th, {  }, [`Status`]), React.createElement($Ui_Table_Th, {  }, [`Last Updated`]), React.createElement($Ui_Table_Th, { align: `center`, width: `70px` }, [`Active`])])]), React.createElement("tbody", {}, [rows])]), React.createElement($Ui_Pagination, { onChange: this.setPage.bind(this), page: this.page, total: $Array.size(this.users) })])])
  }
}

$Users_Table.displayName = "Users.Table"

class $Footer extends React.PureComponent {
  render() {
    return React.createElement("div", {
      className: `footer-base`,
      style: {

      }
    }, [React.createElement("div", {
      className: `footer-wrapper`,
      style: {

      }
    }, [React.createElement("div", {
      className: `footer-column`,
      style: {

      }
    }, [React.createElement("div", {
      className: `footer-title`,
      style: {

      }
    }, [`Source`]), React.createElement($Ui_Link, { href: `https://github.com/mint-lang/mint`, label: `Github Repository`, target: `_blank` }), React.createElement($Ui_Link, { href: `https://github.com/mint-lang/mint/releases`, label: `Releases / Changelog`, target: `_blank` }), React.createElement($Ui_Link, { href: `https://github.com/mint-lang/mint-examples`, label: `Examples`, target: `_blank` })]), React.createElement("div", {
      className: `footer-column`,
      style: {

      }
    }, [React.createElement("div", {
      className: `footer-title`,
      style: {

      }
    }, [`Community`]), React.createElement($Ui_Link, { href: `https://mint-lang.slack.com`, target: `_blank`, label: `Slack` })])])])
  }
}

class $Counter extends React.PureComponent {
  get background() {
    return (this.counter >= 10 ? `lightgreen` : (this.counter < 0 ? `orangered` : `#F2F2F2`))
  }

  get disabled () {
    if (this.props.disabled != undefined) {
      return this.props.disabled
    } else {
      return false
    }
  }

  increment (...params) { return $Counter_Store.increment(...params) }

  decrement (...params) { return $Counter_Store.decrement(...params) }

  get counter () { return $Counter_Store.counter }

  componentWillUnmount () {
    $Counter_Store._unsubscribe(this)
  }

  componentDidMount () {
    $Counter_Store._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      className: `counter-base`,
      style: {
        [`--counter-base-background`]: this.background
      }
    }, [React.createElement("button", {
      onClick: ((event) => {
      return this.decrement.bind(this)()
      }),
      disabled: this.disabled
    }, [`Decrement`]), React.createElement("span", {
      className: `counter-counter`,
      style: {

      }
    }, [$Number.toString(this.counter)]), React.createElement("button", {
      onClick: ((event) => {
      return this.increment.bind(this)()
      }),
      disabled: this.disabled
    }, [`Increment`])])
  }
}

$Counter.defaultProps = {
  disabled: false
}

class $Drag extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      mousePosition: {
        left: 0,
        top: 0
      },
      startPosition: {
        left: 0,
        top: 0
      },
      dragging: false
    }
  }

  setPosition (...params) { return $DragStore.setPosition(...params) }

  get position () { return $DragStore.position }

  componentWillUnmount () {
    $DragStore._unsubscribe(this);$MouseProvider._unsubscribe(this)
  }

  componentDidUpdate () {
    if (this.state.dragging) {
      $MouseProvider._subscribe(this, {
      moves: ((data) => {
      return this.move.bind(this)(data)
      }),
      clicks: ((data) => {
      return null
      }),
      ups: ((data) => {
      return this.end.bind(this)()
      })
    })
    } else {
      $MouseProvider._unsubscribe(this)
    }
  }

  componentDidMount () {
    $DragStore._subscribe(this);if (this.state.dragging) {
      $MouseProvider._subscribe(this, {
      moves: ((data) => {
      return this.move.bind(this)(data)
      }),
      clicks: ((data) => {
      return null
      }),
      ups: ((data) => {
      return this.end.bind(this)()
      })
    })
    } else {
      $MouseProvider._unsubscribe(this)
    }
  }

  move(data) {
    let diff = {
      left: this.state.mousePosition.left - data.left,
      top: this.state.mousePosition.top - data.top
    }

    return (this.state.dragging ? this.setPosition.bind(this)({
      left: this.state.startPosition.left - diff.left,
      top: this.state.startPosition.top - diff.top
    }) : new Promise((_resolve) => {
      this.setState(this.state, _resolve)
    }))
  }

  end() {
    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { dragging: false }), _resolve)
    })
  }

  start(event) {
    let mousePosition = {
      left: event.pageX,
      top: event.pageY
    }

    let startPosition = {
      left: this.position.left,
      top: this.position.top
    }

    return (async () => {
            try {  await $Html_Event.preventDefault(event)

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { mousePosition: mousePosition, startPosition: startPosition, dragging: true }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  render() {
    return React.createElement("div", {
      onMouseDown: ((event) => {
      return this.start.bind(this)(event)
      }),
      className: `drag-base`,
      style: {
        [`--drag-base-transform`]: `translate3d(` + this.position.left + `px,` + this.position.top + `px, 0)`
      }
    }, [`DragMe`])
  }
}

class $Ui_Table_Td extends React.PureComponent {
  get borderBottom() {
    return (this.header ? `2px solid ` + this.theme.border.color : ``)
  }

  get fontWeight() {
    return (this.header ? `bold` : `normal`)
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get align () {
    if (this.props.align != undefined) {
      return this.props.align
    } else {
      return `left`
    }
  }

  get width () {
    if (this.props.width != undefined) {
      return this.props.width
    } else {
      return `auto`
    }
  }

  get header () {
    if (this.props.header != undefined) {
      return this.props.header
    } else {
      return false
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("td", {
      className: `ui-table-td-td`,
      style: {
        [`--ui-table-td-td-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-table-td-td-border-bottom`]: this.borderBottom,
        [`--ui-table-td-td-font-weight`]: this.fontWeight,
        [`--ui-table-td-td-text-align`]: this.align,
        [`--ui-table-td-td-width`]: this.width
      }
    }, [this.children])
  }
}

$Ui_Table_Td.displayName = "Ui.Table.Td"

$Ui_Table_Td.defaultProps = {
  children: [],align: `left`,width: `auto`,header: false
}

class $Ui_Table_Th extends React.PureComponent {
  get align () {
    if (this.props.align != undefined) {
      return this.props.align
    } else {
      return `left`
    }
  }

  get width () {
    if (this.props.width != undefined) {
      return this.props.width
    } else {
      return `auto`
    }
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement($Ui_Table_Td, { children: this.children, header: true, align: this.align, width: this.width })
  }
}

$Ui_Table_Th.displayName = "Ui.Table.Th"

$Ui_Table_Th.defaultProps = {
  align: `left`,width: `auto`,children: []
}

class $Ui_Loader extends React.PureComponent {
  get pointerEvents() {
    return (this.shown ? `` : `none`)
  }

  get opacity() {
    return (this.shown ? 1 : 0)
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get shown () {
    if (this.props.shown != undefined) {
      return this.props.shown
    } else {
      return false
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-loader-base`,
      style: {

      }
    }, [this.children, React.createElement("div", {
      className: `ui-loader-loader`,
      style: {
        [`--ui-loader-loader-pointer-events`]: this.pointerEvents,
        [`--ui-loader-loader-opacity`]: this.opacity
      }
    }, [`Loading...`])])
  }
}

$Ui_Loader.displayName = "Ui.Loader"

$Ui_Loader.defaultProps = {
  children: [],shown: false
}

class $Ui_Link extends React.PureComponent {
  get colors() {
    return (() => {
      let condition = this.type
      let branch0 = `secondary`
      let branch1 = `warning`
      let branch2 = `success`
      let branch3 = `primary`
      let branch4 = `danger`
      let branch5 = `inherit`

      switch (condition) {
        case branch0:
          return this.theme.colors.secondary
        case branch1:
          return this.theme.colors.warning
        case branch2:
          return this.theme.colors.success
        case branch3:
          return this.theme.colors.primary
        case branch4:
          return this.theme.colors.danger
        case branch5:
          return {
          background: `inherit`,
          focus: `inherit`,
          text: `inherit`
        }
        default:
          return {
          background: ``,
          focus: ``,
          text: ``
        }
      }
    })()
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get type () {
    if (this.props.type != undefined) {
      return this.props.type
    } else {
      return `primary`
    }
  }

  get target () {
    if (this.props.target != undefined) {
      return this.props.target
    } else {
      return ``
    }
  }

  get label () {
    if (this.props.label != undefined) {
      return this.props.label
    } else {
      return ``
    }
  }

  get href () {
    if (this.props.href != undefined) {
      return this.props.href
    } else {
      return ``
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  sameOrigin() {
    let windowUrl = $Window.url()

    let url = $Url.parse(this.href)

    return windowUrl.origin != url.origin
  }

  onClick(event) {
    return (event.ctrlKey || event.button == 1 || this.sameOrigin.bind(this)() ? null : ($String.isEmpty(this.href) ? $Html_Event.preventDefault(event) : (async () => {
            try {  await $Html_Event.preventDefault(event)

     await $Navigation.navigate(this.href) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()))
  }

  render() {
    return React.createElement("a", {
      onClick: this.onClick.bind(this),
      target: this.target,
      href: this.href,
      className: `ui-link-base`,
      style: {
        [`--ui-link-base-color`]: this.colors.background,
        [`--ui-link-base-hover-color`]: this.colors.focus,
        [`--ui-link-base-focus-color`]: this.colors.focus
      }
    }, [this.label, this.children])
  }
}

$Ui_Link.displayName = "Ui.Link"

$Ui_Link.defaultProps = {
  children: [],type: `primary`,target: ``,label: ``,href: ``
}

class $Ui_Checkbox extends React.PureComponent {
  get opacity() {
    return (this.checked ? `1` : `0`)
  }

  get transform() {
    return (this.checked ? `scale(1)` : `scale(0.4) rotate(45deg)`)
  }

  get onChange () {
    if (this.props.onChange != undefined) {
      return this.props.onChange
    } else {
      return ((value) => {
    return null
    })
    }
  }

  get disabled () {
    if (this.props.disabled != undefined) {
      return this.props.disabled
    } else {
      return false
    }
  }

  get readonly () {
    if (this.props.readonly != undefined) {
      return this.props.readonly
    } else {
      return false
    }
  }

  get checked () {
    if (this.props.checked != undefined) {
      return this.props.checked
    } else {
      return false
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  toggle() {
    return this.onChange($Bool.not(this.checked))
  }

  render() {
    return React.createElement("button", {
      disabled: this.disabled,
      onClick: ((event) => {
      return this.toggle.bind(this)()
      }),
      className: `ui-checkbox-base`,
      style: {
        [`--ui-checkbox-base-background-color`]: this.theme.colors.input.background,
        [`--ui-checkbox-base-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-checkbox-base-border-radius`]: this.theme.border.radius,
        [`--ui-checkbox-base-color`]: this.theme.colors.input.text,
        [`--ui-checkbox-base-focus-box-shadow`]: `0 0 2px ` + this.theme.outline.fadedColor + ` inset,
                          0 0 2px ` + this.theme.outline.fadedColor,
        [`--ui-checkbox-base-focus-border-color`]: this.theme.outline.color,
        [`--ui-checkbox-base-focus-color`]: this.theme.outline.color,
        [`--ui-checkbox-base-disabled-background`]: this.theme.colors.disabled.background,
        [`--ui-checkbox-base-disabled-color`]: this.theme.colors.disabled.text
      }
    }, [React.createElement("svg", {
      viewBox: `0 0 36 36`,
      className: `ui-checkbox-icon`,
      style: {
        [`--ui-checkbox-icon-transform`]: this.transform,
        [`--ui-checkbox-icon-opacity`]: this.opacity
      }
    }, [React.createElement("path", {
      d: `M35.792 5.332L31.04 1.584c-.147-.12-.33-.208-.537-.208-.207 0-.398.087-.545.217l-17.286 22.21S5.877 17.27 5.687 17.08c-.19-.19-.442-.51-.822-.51-.38 0-.554.268-.753.467-.148.156-2.57 2.7-3.766 3.964-.07.077-.112.12-.173.18-.104.148-.173.313-.173.494 0 .19.07.347.173.494l.242.225s12.058 11.582 12.257 11.78c.2.2.442.45.797.45.345 0 .63-.37.795-.536l21.562-27.7c.104-.146.173-.31.173-.5 0-.217-.087-.4-.208-.555z`
    })])])
  }
}

$Ui_Checkbox.displayName = "Ui.Checkbox"

$Ui_Checkbox.defaultProps = {
  onChange: ((value) => {
  return null
  }),disabled: false,readonly: false,checked: false
}

class $Ui_Form_Separator extends React.PureComponent {
  render() {
    return React.createElement("div", {
      className: `ui-form-separator-base`,
      style: {

      }
    })
  }
}

$Ui_Form_Separator.displayName = "Ui.Form.Separator"

class $Ui_Calendar extends React.PureComponent {
  get nextMonthIcon() {
    return React.createElement($Ui_Icon_Path, { onClick: ((event) => {
    return this.nextMonth.bind(this)()
    }), viewbox: `0 0 9 16`, height: `16px`, width: `9px`, path: `M6 8L.1 1.78c-.14-.16-.14-.4.02-.57L1.17.13c.15-.16.4-.16.54 0l7.2 7.6c.07.07.1.18.1.28 0 .1-.03.2-.1.3l-7.2 7.6c-.14.14-.38.14-.53-.02l-1.05-1.1c-.16-.15-.16-.4 0-.56L5.98 8z` })
  }

  get previousMonthIcon() {
    return React.createElement($Ui_Icon_Path, { onClick: ((event) => {
    return this.previousMonth.bind(this)()
    }), viewbox: `0 0 9 16`, height: `16px`, width: `9px`, path: `M3 8l5.9-6.22c.14-.16.14-.4-.02-.57L7.83.13c-.15-.16-.4-.16-.54 0L.1 7.7c-.07.07-.1.17-.1.28 0 .1.03.2.1.3l7.2 7.6c.14.14.38.14.53-.02l1.05-1.1c.16-.15.16-.4 0-.56L3.02 8z` })
  }

  get onMonthChange () {
    if (this.props.onMonthChange != undefined) {
      return this.props.onMonthChange
    } else {
      return ((date) => {
    return null
    })
    }
  }

  get onChange () {
    if (this.props.onChange != undefined) {
      return this.props.onChange
    } else {
      return ((day) => {
    return null
    })
    }
  }

  get changeMonthOnSelect () {
    if (this.props.changeMonthOnSelect != undefined) {
      return this.props.changeMonthOnSelect
    } else {
      return false
    }
  }

  get month () {
    if (this.props.month != undefined) {
      return this.props.month
    } else {
      return $Time.today()
    }
  }

  get date () {
    if (this.props.date != undefined) {
      return this.props.date
    } else {
      return $Time.today()
    }
  }

  get disabled () {
    if (this.props.disabled != undefined) {
      return this.props.disabled
    } else {
      return false
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  days() {
    let startDate = $Time.startOf(`week`, $Time.startOf(`month`, this.month))

    let endDate = $Time.endOf(`week`, $Time.endOf(`month`, this.month))

    return $Time.range(startDate, endDate)
  }

  onCellClick(day) {
    return ($Time.month(day) != $Time.month(this.month) && this.changeMonthOnSelect ? (async () => {
            try {  await this.onMonthChange(day)

     await this.onChange(day) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })() : this.onChange(day))
  }

  cells() {
    let range = $Time.range($Time.startOf(`month`, this.month), $Time.endOf(`month`, this.month))

    return $Array.map(((day) => {
    return React.createElement($Ui_Calendar_Cell, { active: $Array.any(((item) => {
    return $Time.equals(day, item)
    }), range), selected: $Time.equals(this.date, day), onClick: this.onCellClick.bind(this), day: day })
    }), this.days.bind(this)())
  }

  dayName(day) {
    return React.createElement("div", {
      className: `ui-calendar-day-name`,
      style: {

      }
    }, [$Time.format(`ddd`, day)])
  }

  dayNames() {
    return $Array.map(this.dayName.bind(this), $Time.range($Time.startOf(`week`, this.date), $Time.endOf(`week`, this.date)))
  }

  previousMonth() {
    return this.onMonthChange($Time.previousMonth(this.month))
  }

  nextMonth() {
    return this.onMonthChange($Time.nextMonth(this.month))
  }

  render() {
    return React.createElement("div", {
      className: `ui-calendar-base`,
      style: {
        [`--ui-calendar-base-background`]: this.theme.colors.input.background,
        [`--ui-calendar-base-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-calendar-base-border-radius`]: this.theme.border.radius,
        [`--ui-calendar-base-color`]: this.theme.colors.input.text,
        [`--ui-calendar-base-font-family`]: this.theme.fontFamily
      }
    }, [React.createElement("div", {
      className: `ui-calendar-header`,
      style: {

      }
    }, [this.previousMonthIcon, React.createElement("div", {
      className: `ui-calendar-text`,
      style: {

      }
    }, [$Time.format(`MMMM - YYYY`, this.month)]), this.nextMonthIcon]), React.createElement("div", {
      className: `ui-calendar-day-names`,
      style: {
        [`--ui-calendar-day-names-border-bottom`]: `1px dashed ` + this.theme.border.color,
        [`--ui-calendar-day-names-border-top`]: `1px dashed ` + this.theme.border.color
      }
    }, [this.dayNames.bind(this)()]), React.createElement("div", {
      className: `ui-calendar-table`,
      style: {

      }
    }, [this.cells.bind(this)()])])
  }
}

$Ui_Calendar.displayName = "Ui.Calendar"

$Ui_Calendar.defaultProps = {
  onMonthChange: ((date) => {
  return null
  }),onChange: ((day) => {
  return null
  }),changeMonthOnSelect: false,month: $Time.today(),date: $Time.today(),disabled: false
}

class $Ui_Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      uid: $Uid.generate(),
      left: 0,
      top: 0
    }
  }

  get panel() {
    return React.createElement("div", {
      id: this.state.uid,
      className: `ui-dropdown-panel`,
      style: {
        [`--ui-dropdown-panel-left`]: this.state.left + `px`,
        [`--ui-dropdown-panel-top`]: this.state.top + `px`
      }
    }, [this.children])
  }

  get panelPortal() {
    return (this.open ? React.createElement($Html_Portals_Body, { element: this.panel }) : $Html.empty())
  }

  get element () {
    if (this.props.element != undefined) {
      return this.props.element
    } else {
      return $Html.empty()
    }
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get open () {
    if (this.props.open != undefined) {
      return this.props.open
    } else {
      return true
    }
  }

  componentWillUnmount () {
    $MouseProvider._unsubscribe(this);$AnimationFrameProvider._unsubscribe(this)
  }

  componentDidUpdate () {
    if (this.open) {
      $MouseProvider._subscribe(this, {
      moves: ((data) => {
      return null
      }),
      ups: ((data) => {
      return null
      }),
      clicks: ((event) => {
      return null
      })
    })
    } else {
      $MouseProvider._unsubscribe(this)
    };if (this.open) {
      $AnimationFrameProvider._subscribe(this, {
      frames: this.updateDimensions.bind(this)
    })
    } else {
      $AnimationFrameProvider._unsubscribe(this)
    }
  }

  componentDidMount () {
    if (this.open) {
      $MouseProvider._subscribe(this, {
      moves: ((data) => {
      return null
      }),
      ups: ((data) => {
      return null
      }),
      clicks: ((event) => {
      return null
      })
    })
    } else {
      $MouseProvider._unsubscribe(this)
    };if (this.open) {
      $AnimationFrameProvider._subscribe(this, {
      frames: this.updateDimensions.bind(this)
    })
    } else {
      $AnimationFrameProvider._unsubscribe(this)
    }
  }

  updateDimensions() {
    let dom = $DOM.getElementById(this.state.uid)

    let width = $Window.width()

    let height = $Window.height()

    let panelDimensions = $DOM.getDimensions(dom)

    let dimensions = $DOM.getDimensions(ReactDOM.findDOMNode(this))

    let top = dimensions.top + dimensions.height

    let left = dimensions.left

    return new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { top: top, left: left }), _resolve)
    })
  }

  render() {
    return React.createElement($Html_Fragment, {  }, [this.element, this.panelPortal])
  }
}

$Ui_Dropdown.displayName = "Ui.Dropdown"

$Ui_Dropdown.defaultProps = {
  element: $Html.empty(),children: [],open: true
}

class $Ui_Breadcrumb extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get target () {
    if (this.props.target != undefined) {
      return this.props.target
    } else {
      return ``
    }
  }

  get label () {
    if (this.props.label != undefined) {
      return this.props.label
    } else {
      return ``
    }
  }

  get type () {
    if (this.props.type != undefined) {
      return this.props.type
    } else {
      return ``
    }
  }

  get href () {
    if (this.props.href != undefined) {
      return this.props.href
    } else {
      return ``
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      className: `ui-breadcrumb-base`,
      style: {
        [`--ui-breadcrumb-base-hover-color`]: this.theme.hover.color,
        [`--ui-breadcrumb-base-a-focus-color`]: this.theme.hover.color
      }
    }, [React.createElement($Ui_Link, { children: this.children, target: this.target, type: `inherit`, label: this.label, href: this.href })])
  }
}

$Ui_Breadcrumb.displayName = "Ui.Breadcrumb"

$Ui_Breadcrumb.defaultProps = {
  children: [],target: ``,label: ``,type: ``,href: ``
}

class $Ui_Breadcrumbs extends React.PureComponent {
  get span() {
    return React.createElement("span", {
      className: `ui-breadcrumbs-separator`,
      style: {

      }
    }, [this.separator])
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get separator () {
    if (this.props.separator != undefined) {
      return this.props.separator
    } else {
      return `|`
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      className: `ui-breadcrumbs-base`,
      style: {
        [`--ui-breadcrumbs-base-background`]: this.theme.colors.inputSecondary.background,
        [`--ui-breadcrumbs-base-color`]: this.theme.colors.inputSecondary.text,
        [`--ui-breadcrumbs-base-font-family`]: this.theme.fontFamily
      }
    }, [$Array.intersperse(this.span, this.children)])
  }
}

$Ui_Breadcrumbs.displayName = "Ui.Breadcrumbs"

$Ui_Breadcrumbs.defaultProps = {
  children: [],separator: `|`
}

class $Ui_Toolbar extends React.PureComponent {
  get backgroundColor() {
    return ($String.isEmpty(this.background) ? this.theme.colors.primary.background : this.background)
  }

  get textColor() {
    return ($String.isEmpty(this.color) ? this.theme.colors.primary.text : this.color)
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get background () {
    if (this.props.background != undefined) {
      return this.props.background
    } else {
      return ``
    }
  }

  get color () {
    if (this.props.color != undefined) {
      return this.props.color
    } else {
      return ``
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      className: `ui-toolbar-base`,
      style: {
        [`--ui-toolbar-base-background`]: this.backgroundColor,
        [`--ui-toolbar-base-color`]: this.textColor
      }
    }, [this.children])
  }
}

$Ui_Toolbar.displayName = "Ui.Toolbar"

$Ui_Toolbar.defaultProps = {
  children: [],background: ``,color: ``
}

class $Ui_Toggle extends React.PureComponent {
  get left() {
    return (this.checked ? `2px` : `50%`)
  }

  get onChange () {
    if (this.props.onChange != undefined) {
      return this.props.onChange
    } else {
      return ((value) => {
    return null
    })
    }
  }

  get offLabel () {
    if (this.props.offLabel != undefined) {
      return this.props.offLabel
    } else {
      return `OFF`
    }
  }

  get onLabel () {
    if (this.props.onLabel != undefined) {
      return this.props.onLabel
    } else {
      return `ON`
    }
  }

  get disabled () {
    if (this.props.disabled != undefined) {
      return this.props.disabled
    } else {
      return false
    }
  }

  get readonly () {
    if (this.props.readonly != undefined) {
      return this.props.readonly
    } else {
      return false
    }
  }

  get checked () {
    if (this.props.checked != undefined) {
      return this.props.checked
    } else {
      return false
    }
  }

  get width () {
    if (this.props.width != undefined) {
      return this.props.width
    } else {
      return 100
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  toggle() {
    return this.onChange($Bool.not(this.checked))
  }

  render() {
    return React.createElement("button", {
      onClick: ((event) => {
      return this.toggle.bind(this)()
      }),
      className: `ui-toggle-base`,
      style: {
        [`--ui-toggle-base-background-color`]: this.theme.colors.input.background,
        [`--ui-toggle-base-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-toggle-base-border-radius`]: this.theme.border.radius,
        [`--ui-toggle-base-color`]: this.theme.colors.input.text,
        [`--ui-toggle-base-font-family`]: this.theme.fontFamily,
        [`--ui-toggle-base-width`]: this.width + `px`,
        [`--ui-toggle-base-focus-box-shadow`]: `0 0 2px ` + this.theme.outline.fadedColor + ` inset,
                          0 0 2px ` + this.theme.outline.fadedColor,
        [`--ui-toggle-base-focus-border-color`]: this.theme.outline.color,
        [`--ui-toggle-base-focus-color`]: this.theme.outline.color,
        [`--ui-toggle-base-disabled-background`]: this.theme.colors.disabled.background,
        [`--ui-toggle-base-disabled-color`]: this.theme.colors.disabled.text
      }
    }, [React.createElement("div", {
      className: `ui-toggle-label`,
      style: {

      }
    }, [this.onLabel]), React.createElement("div", {
      className: `ui-toggle-label`,
      style: {

      }
    }, [this.offLabel]), React.createElement("div", {
      className: `ui-toggle-overlay`,
      style: {
        [`--ui-toggle-overlay-background`]: this.theme.colors.primary.background,
        [`--ui-toggle-overlay-border-radius`]: this.theme.border.radius,
        [`--ui-toggle-overlay-left`]: this.left
      }
    })])
  }
}

$Ui_Toggle.displayName = "Ui.Toggle"

$Ui_Toggle.defaultProps = {
  onChange: ((value) => {
  return null
  }),offLabel: `OFF`,onLabel: `ON`,disabled: false,readonly: false,checked: false,width: 100
}

class $Ui_Calendar_Cell extends React.PureComponent {
  get colors() {
    return (this.selected ? this.theme.colors.primary : this.theme.colors.inputSecondary)
  }

  get opacity() {
    return (this.active ? `1` : `0.25`)
  }

  get onClick () {
    if (this.props.onClick != undefined) {
      return this.props.onClick
    } else {
      return ((day) => {
    return null
    })
    }
  }

  get day () {
    if (this.props.day != undefined) {
      return this.props.day
    } else {
      return $Time.now()
    }
  }

  get selected () {
    if (this.props.selected != undefined) {
      return this.props.selected
    } else {
      return false
    }
  }

  get active () {
    if (this.props.active != undefined) {
      return this.props.active
    } else {
      return false
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      title: $Time.format(`YYYY-MM-DD HH:mm:ss`, this.day),
      onClick: ((event) => {
      return this.onClick(this.day)
      }),
      className: `ui-calendar-cell-style`,
      style: {
        [`--ui-calendar-cell-style-border-radius`]: this.theme.border.radius,
        [`--ui-calendar-cell-style-background`]: this.colors.background,
        [`--ui-calendar-cell-style-color`]: this.colors.text,
        [`--ui-calendar-cell-style-opacity`]: this.opacity,
        [`--ui-calendar-cell-style-hover-background`]: this.theme.colors.primary.background,
        [`--ui-calendar-cell-style-hover-color`]: this.theme.colors.primary.text
      }
    }, [$Number.toString($Time.day(this.day))])
  }
}

$Ui_Calendar_Cell.displayName = "Ui.Calendar.Cell"

$Ui_Calendar_Cell.defaultProps = {
  onClick: ((day) => {
  return null
  }),day: $Time.now(),selected: false,active: false
}

class $Ui_Input extends React.PureComponent {
  get showCloseIcon() {
    return this.showClearIcon && this.value != `` && $Bool.not(this.disabled) && $Bool.not(this.readonly)
  }

  get paddingRight() {
    return (this.showCloseIcon ? `30px` : `9px`)
  }

  get closeIcon() {
    return (this.showCloseIcon ? React.createElement("svg", {
      onClick: ((event) => {
      return this.onClear()
      }),
      viewBox: `0 0 36 36`,
      height: `36`,
      width: `36`,
      className: `ui-input-icon`,
      style: {
        [`--ui-input-icon-fill`]: this.theme.colors.input.text,
        [`--ui-input-icon-hover-fill`]: this.theme.hover.color
      }
    }, [React.createElement("path", {
      d: `M35.592 30.256l-12.3-12.34L35.62 5.736c.507-.507.507-1.332 0-1.838L32.114.375C31.87.13 31.542 0 31.194 0c-.346 0-.674.14-.917.375L18.005 12.518 5.715.384C5.47.14 5.14.01 4.794.01c-.347 0-.675.14-.918.374L.38 3.907c-.507.506-.507 1.33 0 1.837l12.328 12.18L.418 30.257c-.245.244-.385.572-.385.918 0 .347.13.675.384.92l3.506 3.522c.254.253.582.384.92.384.327 0 .665-.122.918-.384l12.245-12.294 12.253 12.284c.253.253.58.385.92.385.327 0 .664-.12.917-.384l3.507-3.523c.243-.243.384-.57.384-.918-.01-.337-.15-.665-.394-.91z`
    })]) : $Html.empty())
  }

  get placeholder () {
    if (this.props.placeholder != undefined) {
      return this.props.placeholder
    } else {
      return ``
    }
  }

  get type () {
    if (this.props.type != undefined) {
      return this.props.type
    } else {
      return `text`
    }
  }

  get value () {
    if (this.props.value != undefined) {
      return this.props.value
    } else {
      return ``
    }
  }

  get showClearIcon () {
    if (this.props.showClearIcon != undefined) {
      return this.props.showClearIcon
    } else {
      return true
    }
  }

  get disabled () {
    if (this.props.disabled != undefined) {
      return this.props.disabled
    } else {
      return false
    }
  }

  get readonly () {
    if (this.props.readonly != undefined) {
      return this.props.readonly
    } else {
      return false
    }
  }

  get onChange () {
    if (this.props.onChange != undefined) {
      return this.props.onChange
    } else {
      return ((value) => {
    return null
    })
    }
  }

  get onInput () {
    if (this.props.onInput != undefined) {
      return this.props.onInput
    } else {
      return ((value) => {
    return null
    })
    }
  }

  get onFocus () {
    if (this.props.onFocus != undefined) {
      return this.props.onFocus
    } else {
      return (() => {
    return null
    })
    }
  }

  get onClear () {
    if (this.props.onClear != undefined) {
      return this.props.onClear
    } else {
      return (() => {
    return null
    })
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      className: `ui-input-base`,
      style: {

      }
    }, [React.createElement("input", {
      onChange: ((event) => {
      return this.onChange(event.target.value)
      }),
      onInput: ((event) => {
      return this.onInput(event.target.value)
      }),
      onFocus: ((event) => {
      return this.onFocus()
      }),
      placeholder: this.placeholder,
      disabled: this.disabled,
      readonly: this.readonly,
      value: this.value,
      type: this.type,
      className: `ui-input-input`,
      style: {
        [`--ui-input-input-background-color`]: this.theme.colors.input.background,
        [`--ui-input-input-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-input-input-border-radius`]: this.theme.border.radius,
        [`--ui-input-input-color`]: this.theme.colors.input.text,
        [`--ui-input-input-font-family`]: this.theme.fontFamily,
        [`--ui-input-input-padding-right`]: this.paddingRight,
        [`--ui-input-input-disabled-background-color`]: this.theme.colors.disabled.background,
        [`--ui-input-input-disabled-color`]: this.theme.colors.disabled.text,
        [`--ui-input-input-focus-box-shadow`]: `0 0 2px ` + this.theme.outline.fadedColor + ` inset,
                          0 0 2px ` + this.theme.outline.fadedColor,
        [`--ui-input-input-focus-border-color`]: this.theme.outline.color
      }
    }), this.closeIcon])
  }
}

$Ui_Input.displayName = "Ui.Input"

$Ui_Input.defaultProps = {
  placeholder: ``,type: `text`,value: ``,showClearIcon: true,disabled: false,readonly: false,onChange: ((value) => {
  return null
  }),onInput: ((value) => {
  return null
  }),onFocus: (() => {
  return null
  }),onClear: (() => {
  return null
  })
}

class $Ui_Card extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-card-base`,
      style: {

      }
    }, [this.children])
  }
}

$Ui_Card.displayName = "Ui.Card"

$Ui_Card.defaultProps = {
  children: []
}

class $Ui_Card_Image extends React.PureComponent {
  get src () {
    if (this.props.src != undefined) {
      return this.props.src
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("img", {
      src: this.src,
      className: `ui-card-image-base`,
      style: {

      }
    })
  }
}

$Ui_Card_Image.displayName = "Ui.Card.Image"

$Ui_Card_Image.defaultProps = {
  src: ``
}

class $Ui_Card_Block extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-card-block-base`,
      style: {

      }
    }, [this.children])
  }
}

$Ui_Card_Block.displayName = "Ui.Card.Block"

$Ui_Card_Block.defaultProps = {
  children: []
}

class $Ui_Card_Title extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-card-title-base`,
      style: {

      }
    }, [this.children])
  }
}

$Ui_Card_Title.displayName = "Ui.Card.Title"

$Ui_Card_Title.defaultProps = {
  children: []
}

class $Ui_Card_Text extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-card-text-base`,
      style: {

      }
    }, [this.children])
  }
}

$Ui_Card_Text.displayName = "Ui.Card.Text"

$Ui_Card_Text.defaultProps = {
  children: []
}

class $Ui_Toolbar_Separator extends React.PureComponent {
  render() {
    return React.createElement("div", {
      className: `ui-toolbar-separator-base`,
      style: {

      }
    })
  }
}

$Ui_Toolbar_Separator.displayName = "Ui.Toolbar.Separator"

class $Ui_Table extends React.PureComponent {
  get headers () {
    if (this.props.headers != undefined) {
      return this.props.headers
    } else {
      return []
    }
  }

  get rows () {
    if (this.props.rows != undefined) {
      return this.props.rows
    } else {
      return []
    }
  }

  render() {
    return React.createElement("table", {}, [React.createElement("thead", {}, [this.headers])])
  }
}

$Ui_Table.displayName = "Ui.Table"

$Ui_Table.defaultProps = {
  headers: [],rows: []
}

class $Ui_Form_Label extends React.PureComponent {
  get fontSize () {
    if (this.props.fontSize != undefined) {
      return this.props.fontSize
    } else {
      return 16
    }
  }

  get text () {
    if (this.props.text != undefined) {
      return this.props.text
    } else {
      return ``
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("div", {
      className: `ui-form-label-base`,
      style: {
        [`--ui-form-label-base-font-size`]: $Number.toString(this.fontSize) + `px`,
        [`--ui-form-label-base-font-family`]: this.theme.fontFamily
      }
    }, [this.text])
  }
}

$Ui_Form_Label.displayName = "Ui.Form.Label"

$Ui_Form_Label.defaultProps = {
  fontSize: 16,text: ``
}

class $Ui_Toolbar_Title extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get href () {
    if (this.props.href != undefined) {
      return this.props.href
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-toolbar-title-base`,
      style: {

      }
    }, [React.createElement($Ui_Link, { href: this.href }, [this.children])])
  }
}

$Ui_Toolbar_Title.displayName = "Ui.Toolbar.Title"

$Ui_Toolbar_Title.defaultProps = {
  children: [],href: ``
}

class $Ui_Icon_Path extends React.PureComponent {
  get pointerEvents() {
    return (this.clickable ? `` : `none`)
  }

  get cursor() {
    return (this.clickable ? `pointer` : ``)
  }

  get handler() {
    return (this.clickable ? this.onClick : ((event) => {
    return null
    }))
  }

  get onClick () {
    if (this.props.onClick != undefined) {
      return this.props.onClick
    } else {
      return ((event) => {
    return null
    })
    }
  }

  get clickable () {
    if (this.props.clickable != undefined) {
      return this.props.clickable
    } else {
      return true
    }
  }

  get viewbox () {
    if (this.props.viewbox != undefined) {
      return this.props.viewbox
    } else {
      return ``
    }
  }

  get height () {
    if (this.props.height != undefined) {
      return this.props.height
    } else {
      return ``
    }
  }

  get width () {
    if (this.props.width != undefined) {
      return this.props.width
    } else {
      return ``
    }
  }

  get path () {
    if (this.props.path != undefined) {
      return this.props.path
    } else {
      return ``
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("svg", {
      onClick: this.handler,
      viewBox: this.viewbox,
      height: this.height,
      width: this.width,
      className: `ui-icon-path-svg`,
      style: {
        [`--ui-icon-path-svg-pointer-events`]: this.pointerEvents,
        [`--ui-icon-path-svg-hover-fill`]: this.theme.hover.color,
        [`--ui-icon-path-svg-hover-cursor`]: this.cursor
      }
    }, [React.createElement("path", {
      d: this.path
    })])
  }
}

$Ui_Icon_Path.displayName = "Ui.Icon.Path"

$Ui_Icon_Path.defaultProps = {
  onClick: ((event) => {
  return null
  }),clickable: true,viewbox: ``,height: ``,width: ``,path: ``
}

class $Ui_Toolbar_Link extends React.PureComponent {
  get target () {
    if (this.props.target != undefined) {
      return this.props.target
    } else {
      return ``
    }
  }

  get label () {
    if (this.props.label != undefined) {
      return this.props.label
    } else {
      return ``
    }
  }

  get href () {
    if (this.props.href != undefined) {
      return this.props.href
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-toolbar-link-base`,
      style: {

      }
    }, [React.createElement($Ui_Link, { target: this.target, label: this.label, href: this.href })])
  }
}

$Ui_Toolbar_Link.displayName = "Ui.Toolbar.Link"

$Ui_Toolbar_Link.defaultProps = {
  target: ``,label: ``,href: ``
}

class $Ui_Toolbar_Spacer extends React.PureComponent {
  render() {
    return React.createElement("div", {
      className: `ui-toolbar-spacer-base`,
      style: {

      }
    })
  }
}

$Ui_Toolbar_Spacer.displayName = "Ui.Toolbar.Spacer"

class $Ui_Button extends React.PureComponent {
  get flexDirection() {
    return (() => {
      let condition = this.side
      let branch0 = `right`
      let branch1 = `left`

      switch (condition) {
        case branch0:
          return `row-reverse`
        case branch1:
          return `row`
        default:
          return ``
      }
    })()
  }

  get focusBorder() {
    return (this.outline ? `1px solid ` + this.theme.outline.color : `1px solid transparent`)
  }

  get focusColor() {
    return (this.outline ? this.theme.outline.color : this.colors.text)
  }

  get shadowColor() {
    return (this.outline ? this.theme.outline.fadedColor : `transparent`)
  }

  get border() {
    return (this.outline ? `1px solid ` + this.theme.border.color : `1px solid transparent`)
  }

  get colors() {
    return (this.outline ? this.theme.colors.input : (() => {
      let condition = this.type
      let branch0 = `secondary`
      let branch1 = `warning`
      let branch2 = `success`
      let branch3 = `primary`
      let branch4 = `danger`

      switch (condition) {
        case branch0:
          return this.theme.colors.secondary
        case branch1:
          return this.theme.colors.warning
        case branch2:
          return this.theme.colors.success
        case branch3:
          return this.theme.colors.primary
        case branch4:
          return this.theme.colors.danger
        default:
          return {
          background: ``,
          focus: ``,
          text: ``
        }
      }
    })())
  }

  get actualIcon() {
    return (this.icon == $Html.empty() ? $Html.empty() : React.createElement("div", {
      className: `ui-button-icon`,
      style: {
        [`--ui-button-icon-height`]: this.size + `px`,
        [`--ui-button-icon-width`]: this.size + `px`
      }
    }, [this.icon]))
  }

  get actualGutter() {
    return (this.icon == $Html.empty() ? $Html.empty() : React.createElement("div", {
      className: `ui-button-gutter`,
      style: {
        [`--ui-button-gutter-width`]: this.size * 1.42857142857 + `px`
      }
    }))
  }

  get icon () {
    if (this.props.icon != undefined) {
      return this.props.icon
    } else {
      return $Html.empty()
    }
  }

  get type () {
    if (this.props.type != undefined) {
      return this.props.type
    } else {
      return `primary`
    }
  }

  get side () {
    if (this.props.side != undefined) {
      return this.props.side
    } else {
      return `left`
    }
  }

  get label () {
    if (this.props.label != undefined) {
      return this.props.label
    } else {
      return ``
    }
  }

  get size () {
    if (this.props.size != undefined) {
      return this.props.size
    } else {
      return 14
    }
  }

  get disabled () {
    if (this.props.disabled != undefined) {
      return this.props.disabled
    } else {
      return false
    }
  }

  get readonly () {
    if (this.props.readonly != undefined) {
      return this.props.readonly
    } else {
      return false
    }
  }

  get outline () {
    if (this.props.outline != undefined) {
      return this.props.outline
    } else {
      return false
    }
  }

  get onMouseDown () {
    if (this.props.onMouseDown != undefined) {
      return this.props.onMouseDown
    } else {
      return ((event) => {
    return null
    })
    }
  }

  get onClick () {
    if (this.props.onClick != undefined) {
      return this.props.onClick
    } else {
      return ((event) => {
    return null
    })
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return React.createElement("button", {
      onMouseDown: this.onMouseDown,
      disabled: this.disabled,
      readonly: this.readonly,
      onClick: this.onClick,
      className: `ui-button-styles`,
      style: {
        [`--ui-button-styles-border-radius`]: this.theme.border.radius,
        [`--ui-button-styles-font-family`]: this.theme.fontFamily,
        [`--ui-button-styles-height`]: this.size * 2.42857142857 + `px`,
        [`--ui-button-styles-flexDirection`]: this.flexDirection,
        [`--ui-button-styles-padding`]: `0 ` + this.size * 1.5 + `px`,
        [`--ui-button-styles-background`]: this.colors.background,
        [`--ui-button-styles-color`]: this.colors.text,
        [`--ui-button-styles-font-size`]: this.size + `px`,
        [`--ui-button-styles-border`]: this.border,
        [`--ui-button-styles-focus-box-shadow`]: `0 0 2px ` + this.shadowColor + ` inset,
                          0 0 2px ` + this.shadowColor,
        [`--ui-button-styles-focus-background`]: this.colors.focus,
        [`--ui-button-styles-focus-border`]: this.focusBorder,
        [`--ui-button-styles-focus-color`]: this.focusColor,
        [`--ui-button-styles-disabled-background`]: this.theme.colors.disabled.background,
        [`--ui-button-styles-disabled-color`]: this.theme.colors.disabled.text
      }
    }, [React.createElement("div", {
      className: `ui-button-label`,
      style: {

      }
    }, [this.label]), this.actualGutter, this.actualIcon])
  }
}

$Ui_Button.displayName = "Ui.Button"

$Ui_Button.defaultProps = {
  icon: $Html.empty(),type: `primary`,side: `left`,label: ``,size: 14,disabled: false,readonly: false,outline: false,onMouseDown: ((event) => {
  return null
  }),onClick: ((event) => {
  return null
  })
}

class $Ui_Slider extends React.PureComponent {
  get onChange () {
    if (this.props.onChange != undefined) {
      return this.props.onChange
    } else {
      return ((value) => {
    return null
    })
    }
  }

  get disabled () {
    if (this.props.disabled != undefined) {
      return this.props.disabled
    } else {
      return false
    }
  }

  get max () {
    if (this.props.max != undefined) {
      return this.props.max
    } else {
      return 100
    }
  }

  get value () {
    if (this.props.value != undefined) {
      return this.props.value
    } else {
      return 0
    }
  }

  get step () {
    if (this.props.step != undefined) {
      return this.props.step
    } else {
      return 1
    }
  }

  get min () {
    if (this.props.min != undefined) {
      return this.props.min
    } else {
      return 0
    }
  }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  changed(event) {
    return this.onChange($Result.withDefault(0, $Number.fromString(event.target.value)))
  }

  render() {
    return React.createElement("input", {
      value: $Number.toString(this.value),
      step: $Number.toString(this.step),
      max: $Number.toString(this.max),
      min: $Number.toString(this.min),
      disabled: this.disabled,
      onChange: this.changed.bind(this),
      type: `range`,
      className: `ui-slider-base`,
      style: {
        [`--ui-slider-base-webkit-slider-thumb-background-color`]: this.theme.colors.primary.background,
        [`--ui-slider-base-webkit-slider-thumb-border-radius`]: this.theme.border.radius,
        [`--ui-slider-base-moz-range-thumb-background-color`]: this.theme.colors.primary.background,
        [`--ui-slider-base-moz-range-thumb-border-radius`]: this.theme.border.radius,
        [`--ui-slider-base-ms-thumb-background-color`]: this.theme.colors.primary.background,
        [`--ui-slider-base-ms-thumb-border-radius`]: this.theme.border.radius,
        [`--ui-slider-base-focus-webkit-slider-thumb-background-color`]: this.theme.hover.color,
        [`--ui-slider-base-focus-moz-range-thumb-background-color`]: this.theme.hover.color,
        [`--ui-slider-base-focus-ms-thumb-background-color`]: this.theme.hover.color,
        [`--ui-slider-base-webkit-slider-runnable-track-background-color`]: this.theme.colors.input.background,
        [`--ui-slider-base-webkit-slider-runnable-track-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-slider-base-webkit-slider-runnable-track-border-radius`]: this.theme.border.radius,
        [`--ui-slider-base-moz-range-track-background-color`]: this.theme.colors.input.background,
        [`--ui-slider-base-moz-range-track-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-slider-base-moz-range-track-border-radius`]: this.theme.border.radius,
        [`--ui-slider-base-ms-track-background-color`]: this.theme.colors.input.background,
        [`--ui-slider-base-ms-track-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-slider-base-ms-track-border-radius`]: this.theme.border.radius,
        [`--ui-slider-base-focus-webkit-slider-runnable-track-box-shadow`]: `0 0 2px ` + this.theme.outline.fadedColor + ` inset,
                          0 0 2px ` + this.theme.outline.fadedColor,
        [`--ui-slider-base-focus-webkit-slider-runnable-track-border-color`]: this.theme.outline.color,
        [`--ui-slider-base-focus-moz-range-track-box-shadow`]: `0 0 2px ` + this.theme.outline.fadedColor + ` inset,
                          0 0 2px ` + this.theme.outline.fadedColor,
        [`--ui-slider-base-focus-moz-range-track-border-color`]: this.theme.outline.color,
        [`--ui-slider-base-focus-ms-track-box-shadow`]: `0 0 2px ` + this.theme.outline.fadedColor + ` inset,
                          0 0 2px ` + this.theme.outline.fadedColor,
        [`--ui-slider-base-focus-ms-track-border-color`]: this.theme.outline.color
      }
    })
  }
}

$Ui_Slider.displayName = "Ui.Slider"

$Ui_Slider.defaultProps = {
  onChange: ((value) => {
  return null
  }),disabled: false,max: 100,value: 0,step: 1,min: 0
}

class $Ui_Pager_Page extends React.PureComponent {
  get pointerEvents() {
    return (this.transition == `fade` && this.opacity == 0 ? `none` : ``)
  }

  get transform() {
    return (this.transition == `slide` ? `translate3d(0,0,0) translateX(` + $Number.toString(this.position) + `%)` : ``)
  }

  get opacity() {
    return (this.transition == `fade` ? 1 - $Math.abs(this.position) / 100 : 1)
  }

  get transitionDuration() {
    return (this.transitioning ? this.duration : 0)
  }

  get transition () {
    if (this.props.transition != undefined) {
      return this.props.transition
    } else {
      return `slide`
    }
  }

  get transitioning () {
    if (this.props.transitioning != undefined) {
      return this.props.transitioning
    } else {
      return false
    }
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get duration () {
    if (this.props.duration != undefined) {
      return this.props.duration
    } else {
      return 1000
    }
  }

  get position () {
    if (this.props.position != undefined) {
      return this.props.position
    } else {
      return 0
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-pager-page-base`,
      style: {
        [`--ui-pager-page-base-transition`]: this.transitionDuration + `ms`,
        [`--ui-pager-page-base-pointer-events`]: this.pointerEvents,
        [`--ui-pager-page-base-transform`]: this.transform,
        [`--ui-pager-page-base-opacity`]: this.opacity
      }
    }, [this.children])
  }
}

$Ui_Pager_Page.displayName = "Ui.Pager.Page"

$Ui_Pager_Page.defaultProps = {
  transition: `slide`,transitioning: false,children: [],duration: 1000,position: 0
}

class $Ui_Pager extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      transitioning: false,
      left: ``,
      center: ``
    }
  }

  get isPage() {
    return $Array.any(((item) => {
    return item.name == this.state.center
    }), this.pages)
  }

  get hasPage() {
    return $Array.any(((item) => {
    return item.name == this.active
    }), this.pages)
  }

  get pages () {
    if (this.props.pages != undefined) {
      return this.props.pages
    } else {
      return []
    }
  }

  get transition () {
    if (this.props.transition != undefined) {
      return this.props.transition
    } else {
      return `slide`
    }
  }

  get duration () {
    if (this.props.duration != undefined) {
      return this.props.duration
    } else {
      return 1000
    }
  }

  get active () {
    if (this.props.active != undefined) {
      return this.props.active
    } else {
      return ``
    }
  }

  componentDidUpdate() {
    return (this.state.center != this.active && this.hasPage ? (this.isPage ? this.switch.bind(this)() : new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { center: this.active }), _resolve)
    })) : null)
  }

  switch() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { left: this.state.center, center: this.active, transitioning: true }), _resolve)
    })

     await (async ()=> {
                try {
                  return await $Timer.timeout(this.duration)
                } catch(_error) {
                  

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(Mint.update(this.state, { transitioning: false, left: `` }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  renderPage(item) {
    let transitioning = (this.state.left == item.name || this.state.center == item.name) && this.state.transitioning

    let position = (this.state.left == item.name ? -100 : (this.state.center == item.name ? 0 : 100))

    return React.createElement($Ui_Pager_Page, { transitioning: transitioning, transition: this.transition, position: position, duration: this.duration }, [item.contents])
  }

  render() {
    return React.createElement("div", {
      className: `ui-pager-base`,
      style: {

      }
    }, [$Array.map(this.renderPage.bind(this), this.pages)])
  }
}

$Ui_Pager.displayName = "Ui.Pager"

$Ui_Pager.defaultProps = {
  pages: [],transition: `slide`,duration: 1000,active: ``
}

class $Ui_Pagination extends React.PureComponent {
  get pages() {
    return $Math.floor($Math.max(this.total - 1, 0) / this.perPage)
  }

  get buttonRange() {
    return $Array.range($Math.max(1, this.page - this.sidePages), $Math.min(this.page + this.sidePages + 1, this.pages))
  }

  get buttons() {
    return $Array.map(((index) => {
    return React.createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(index)
    }), label: $Number.toString(index + 1), key: $Number.toString(index), outline: index != this.page })
    }), this.buttonRange)
  }

  get previousButton() {
    return (this.page != 0 && this.pages > 0 ? React.createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(this.page - 1)
    }), outline: true, label: `Prev` }) : $Html.empty())
  }

  get nextButton() {
    return (this.page != this.pages && this.pages > 0 ? React.createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(this.page + 1)
    }), outline: true, label: `Next` }) : $Html.empty())
  }

  get leftDots() {
    return (this.sidePages < (this.page - 1) && this.pages > 0 ? React.createElement("span", {
      className: `ui-pagination-span`,
      style: {

      }
    }) : $Html.empty())
  }

  get rightDots() {
    return ((this.page + this.sidePages + 1 < this.pages) && this.pages > 0 ? React.createElement("span", {
      className: `ui-pagination-span`,
      style: {

      }
    }) : $Html.empty())
  }

  get rightButton() {
    return (this.pages > 1 ? React.createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(this.pages)
    }), label: $Number.toString(this.pages + 1), outline: this.page != this.pages }) : $Html.empty())
  }

  get leftButton() {
    return (this.pages >= 1 ? React.createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(0)
    }), outline: this.page != 0, label: `1` }) : $Html.empty())
  }

  get onChange () {
    if (this.props.onChange != undefined) {
      return this.props.onChange
    } else {
      return ((page) => {
    return null
    })
    }
  }

  get sidePages () {
    if (this.props.sidePages != undefined) {
      return this.props.sidePages
    } else {
      return 2
    }
  }

  get perPage () {
    if (this.props.perPage != undefined) {
      return this.props.perPage
    } else {
      return 10
    }
  }

  get total () {
    if (this.props.total != undefined) {
      return this.props.total
    } else {
      return 0
    }
  }

  get page () {
    if (this.props.page != undefined) {
      return this.props.page
    } else {
      return 0
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-pagination-base`,
      style: {

      }
    }, [this.previousButton, this.leftButton, this.leftDots, this.buttons, this.rightDots, this.rightButton, this.nextButton])
  }
}

$Ui_Pagination.displayName = "Ui.Pagination"

$Ui_Pagination.defaultProps = {
  onChange: ((page) => {
  return null
  }),sidePages: 2,perPage: 10,total: 0,page: 0
}

class $Ui_Time extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      now: $Time.now()
    }
  }

  get date () {
    if (this.props.date != undefined) {
      return this.props.date
    } else {
      return $Time.now()
    }
  }

  componentWillUnmount () {
    $TickProvider._unsubscribe(this)
  }

  componentDidUpdate () {
    if (true) {
      $TickProvider._subscribe(this, {
      ticks: (() => {
      return new Promise((_resolve) => {
        this.setState({
        now: $Time.now()
      }, _resolve)
      })
      })
    })
    } else {
      $TickProvider._unsubscribe(this)
    }
  }

  componentDidMount () {
    if (true) {
      $TickProvider._subscribe(this, {
      ticks: (() => {
      return new Promise((_resolve) => {
        this.setState({
        now: $Time.now()
      }, _resolve)
      })
      })
    })
    } else {
      $TickProvider._unsubscribe(this)
    }
  }

  render() {
    return React.createElement("div", {
      title: $Time.toIso(this.date),
      className: `ui-time-base`,
      style: {

      }
    }, [$Time.relative(this.date, this.state.now)])
  }
}

$Ui_Time.displayName = "Ui.Time"

$Ui_Time.defaultProps = {
  date: $Time.now()
}

class $Ui_Form_Field extends React.PureComponent {
  get marginRight() {
    return (() => {
      let condition = this.orientation
      let branch0 = `horizontal`

      switch (condition) {
        case branch0:
          return `10px`
        default:
          return ``
      }
    })()
  }

  get marginBottom() {
    return (() => {
      let condition = this.orientation
      let branch0 = `vertical`

      switch (condition) {
        case branch0:
          return `5px`
        default:
          return ``
      }
    })()
  }

  get alignItems() {
    return (() => {
      let condition = this.orientation
      let branch0 = `horizontal`

      switch (condition) {
        case branch0:
          return `center`
        default:
          return ``
      }
    })()
  }

  get flexDirection() {
    return (() => {
      let condition = this.orientation
      let branch0 = `vertical`

      switch (condition) {
        case branch0:
          return `column-reverse`
        default:
          return `row`
      }
    })()
  }

  get labelSize() {
    return (() => {
      let condition = this.orientation
      let branch0 = `vertical`

      switch (condition) {
        case branch0:
          return 14
        default:
          return 16
      }
    })()
  }

  get orientation () {
    if (this.props.orientation != undefined) {
      return this.props.orientation
    } else {
      return `vertical`
    }
  }

  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get label () {
    if (this.props.label != undefined) {
      return this.props.label
    } else {
      return ``
    }
  }

  render() {
    return React.createElement("div", {
      className: `ui-form-field-base`,
      style: {
        [`--ui-form-field-base-flex-direction`]: this.flexDirection,
        [`--ui-form-field-base-align-items`]: this.alignItems,
        [`--ui-form-field-base-first-child-margin-right`]: this.marginRight,
        [`--ui-form-field-base-last-child-margin-bottom`]: this.marginBottom
      }
    }, [this.children, React.createElement($Ui_Form_Label, { text: this.label, fontSize: this.labelSize })])
  }
}

$Ui_Form_Field.displayName = "Ui.Form.Field"

$Ui_Form_Field.defaultProps = {
  orientation: `vertical`,children: [],label: ``
}

class $Html_Portals_Body extends React.PureComponent {
  get element () {
    if (this.props.element != undefined) {
      return this.props.element
    } else {
      return $Html.empty()
    }
  }

  render() {
    return ReactDOM.createPortal(this.element, document.body)
  }
}

$Html_Portals_Body.displayName = "Html.Portals.Body"

$Html_Portals_Body.defaultProps = {
  element: $Html.empty()
}

class $Html_Fragment extends React.PureComponent {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return this.children
  }
}

$Html_Fragment.displayName = "Html.Fragment"

$Html_Fragment.defaultProps = {
  children: []
}

Mint.insertStyles(`
  .layout-base {
    font-family: Open Sans;
    flex-direction: column;
    background: #F9F9F9;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
  }

  .layout-logo {
    margin-left: -7px;
    margin-top: 2px;
    width: 22px;
  }

  .layout-logo path {
    fill: white;
  }

  .layout-header {
    background: #222;
    color: #EEE;
  }

  .layout-header-wrapper {
    align-items: center;
    max-width: 1040px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    height: 50px;
  }

  .layout-header-wrapper > a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    color: inherit;
  }

  .layout-header-wrapper > a:focus {
    color: inherit;
  }

  .layout-header-wrapper > a:hover {
    color: inherit;
  }

  .sub-title-base {
    margin: 10px 0;
  }

  .user-form-title {
    border-bottom: 2px solid #CCC;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
    opacity: 0.8;
  }

  .user-form-form {

  }

  .user-form-form > * {
    margin-bottom: 15px;
  }

  .install-hr {
    margin: 40px 0;
    border: 0;
    border-top: 1px solid #EEE;
  }

  .install-code {
    border: 1px solid #DDD;
    white-space: pre-wrap;
    font-size: inherit;
    background: #FFF;
    padding: 5px;
  }

  .install-list {

  }

  .install-list li {
    margin-top: 15px;
  }

  .install-files {

  }

  .install-files li {
    margin-top: 10px;
  }

  .roadmap-feature-base {
    display: flex;
  }

  .roadmap-feature-icon {
    margin-right: 10px;
    opacity: 0.3;
  }

  .roadmap-feature-title {
    font-weight: 600;
    color: #222;
  }

  .roadmap-feature-description {
    font-size: 14px;
    color: #777;
  }

  .roadmap-feature-features {
    border-left: 1px solid #EEE;
    padding-left: 15px;
    margin-left: 10px;
    margin-top: 10px;
  }

  .roadmap-feature-features > * + * {
    margin-top: 7px;
  }

  .roadmap-version-title {
    border-bottom: 2px solid #EEE;
    padding-bottom: 5px;
    margin-bottom: 15px;
    font-family: Amiko;
    margin-top: 40px;
    font-size: 24px;
    color: #222;
  }

  .roadmap-version-features {

  }

  .roadmap-version-features > * + * {
    margin-top: 20px;
  }

  .home-hero {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    height: 500px;
  }

  .home-slogan {
    font-weight: normal;
    margin-top: 20px;
    font-size: 18px;
    color: #666;
  }

  .home-buttons {
    margin-top: 30px;
  }

  .home-buttons > a:hover {
    text-decoration: none;
  }

  .home-buttons > * + * {
    margin-left: 15px;
  }

  .home-base {
    color: #333;
  }

  .home-features {
    padding: 0 20px 50px 20px;
    max-width: 1040px;
    margin: 0 auto;
  }

  .home-features h3 {
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-top: 50px;
    font-size: 26px;
  }

  .showcase-block-base {
    border-radius: 2px;
    cursor: pointer;
    padding: 0 5px;
  }

  .showcase-block-content {
    padding-left: 20px;
  }

  .showcase-row {
    background: #FFF;
  }

  .showcase-base {
    padding: 50px 20px;
    max-width: 1040px;
    margin: 0 auto;
  }

  .showcase-code {
    line-height: 2;
    margin: 0;
  }

  .showcase-description {
    align-self: flex-start;
    margin-left: 30px;
    font-size: 18px;
    flex: 1;
    position: sticky;
    top: 30px;
  }

  .showcase-description hr {
    border: 0;
    border-bottom: 1px solid #E6E6E6;
  }

  .showcase-description code {
    border: 1px solid #E6E6E6;
    background: #F6F6F6;
    border-radius: 3px;
    padding: 1px 5px;
    font-size: 16px;
  }

  .showcase-description p {
    line-height: 1.4;
  }

  .showcase-description ul {
    line-height: 1.4;
    padding-left: 20px;
  }

  .showcase-description li {
    line-height: 1.4;
    margin-bottom: 10px;
  }

  .showcase-spacer {
    height: 10px;
  }

  .showcase-wrapper {
    display: flex;
  }

  .showcase-title {
    text-transform: uppercase;
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 26px;
  }

  .showcase-hint {
    margin-bottom: 50px;
    text-align: center;
    opacity: 0.8;
  }

  .showcase-section-title {
    border-bottom: 1px solid #E6E6E6;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 22px;
  }

  .showcase-highlight-base {
    background: var(--showcase-highlight-base-background);
    border-radius: 2px;
    border: var(--showcase-highlight-base-border);
    padding: 3px 5px;
    cursor: pointer;
    display: inline;
    color: var(--showcase-highlight-base-color);
  }

  .call-to-action-base {
    background-image: url(/cta.png);
    background-size: 54px 54px;
    flex-direction: column;
    align-items: center;
    display: flex;
    color: #FFF;
    padding: 75px 0;
    padding-bottom: 90px;
  }

  .call-to-action-buttons {
    display: flex;
  }

  .call-to-action-buttons > a:hover {
    text-decoration: none;
  }

  .call-to-action-buttons > * + * {
    margin-left: 15px;
  }

  .call-to-action-text {
    margin-bottom: 20px;
    font-size: 30px;
  }

  .showcase-highlight-block-base {
    background: var(--showcase-highlight-block-base-background);
    padding: var(--showcase-highlight-block-base-padding);
    border-radius: 2px;
    border: var(--showcase-highlight-block-base-border);
    cursor: pointer;
    color: var(--showcase-highlight-block-base-color);
  }

  .showcase-highlight-block-content {
    padding-left: 15px;
  }

  .logo-base {
    height: var(--logo-base-height);
    width: var(--logo-base-width);
  }

  .examples-example-base {
    border: 1px solid #EEE;
    background: #FFF;
    cursor: pointer;
    padding: 20px;
    color: #444;
  }

  .examples-example-description {
    line-height: 1.5;
    font-size: 14px;
  }

  .examples-example-title {
    border-bottom: 1px solid #EEE;
    padding-bottom: 7px;
    margin-bottom: 7px;
    font-weight: bold;
    font-size: 18px;
  }

  .examples-example-title > a {
    color: inherit;
  }

  .examples-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px 20px;
    display: grid;
  }

  .examples-hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #EEE;
  }

  .title-base {
    font-family: Amiko;
    font-weight: 600;
    font-size: 32px;
    line-height: 1;
    color: #222;
  }

  .user-row-tr {

  }

  .user-row-tr a {
    text-decoration: var(--user-row-tr-a-text-decoration);
  }

  .user-row-tr:nth-child(odd) {
    background: #f9f9f9;
  }

  .user-row-checkbox {
    text-align: center;
  }

  .page-base {
    max-width: 1040px;
    margin: 0 auto;
    width: 100%;
    color: #444;
    padding: 50px 20px;
    padding-bottom: 100px;
  }

  .users-layout-wrapper {
    max-width: 1040px;
    padding: 0 20px;
    margin: 0 auto;
  }

  .users-layout-content {
    padding: 24px 0;
  }

  .users-table-table {
    border: var(--users-table-table-border);
    color: var(--users-table-table-color);
    font-family: var(--users-table-table-font-family);
    border-collapse: collapse;
    margin-bottom: 20px;
    table-layout: fixed;
    width: 100%;
  }

  .users-table-left {
    text-align: left;
  }

  .users-table-header {
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    display: flex;
  }

  .users-table-title {
    font-weight: bold;
    font-size: 24px;
  }

  .users-table-empty {
    justify-content: center;
    align-items: center;
    min-height: 550px;
    display: flex;
  }

  .footer-base {
    background: #222;
    margin-top: auto;
    height: 200px;
    color: #BBB;
  }

  .footer-wrapper {
    padding: 30px 20px;
    max-width: 1040px;
    margin: 0 auto;
    display: flex;
  }

  .footer-column {
    margin-right: 50px;
    width: 200px;
  }

  .footer-column > a {
    margin-top: 5px;
    display: block;
    color: inherit;
  }

  .footer-column > a:hover {
    color: inherit;
  }

  .footer-column > a:focus {
    color: inherit;
  }

  .footer-title {
    border-bottom: 1px dashed #444;
    padding-bottom: 5px;
    margin-bottom: 10px;
    font-family: Amiko;
    font-weight: 600;
    color: #EEE;
  }

  .counter-base {
    background: var(--counter-base-background);
    border-radius: 5px;
    transition: 320ms;
    display: flex;
    padding: 20px;
    margin: 20px;
  }

  .counter-counter {
    font-family: sans;
    font-size: 20px;
    padding: 0 20px;
  }

  .drag-base {
    transform: var(--drag-base-transform);
    justify-content: center;
    background: orangered;
    align-items: center;
    border-radius: 10px;
    position: absolute;
    display: flex;
    height: 100px;
    width: 100px;
    cursor: move;
    color: white;
    z-index: 10;
  }

  .ui-table-td-td {
    border: var(--ui-table-td-td-border);
    border-bottom: var(--ui-table-td-td-border-bottom);
    font-weight: var(--ui-table-td-td-font-weight);
    text-align: var(--ui-table-td-td-text-align);
    padding: 7px 10px;
    width: var(--ui-table-td-td-width);
  }

  .ui-loader-base {
    position: relative;
  }

  .ui-loader-loader {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background: rgba(255,255,255,0.8);
    transition-delay: 320ms;
    transition: 320ms;
    pointer-events: var(--ui-loader-loader-pointer-events);
    opacity: var(--ui-loader-loader-opacity);
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .ui-link-base {
    color: var(--ui-link-base-color);
    text-decoration: none;
    outline: none;
  }

  .ui-link-base:hover {
    text-decoration: underline;
    color: var(--ui-link-base-hover-color);
  }

  .ui-link-base:focus {
    text-decoration: underline;
    color: var(--ui-link-base-focus-color);
  }

  .ui-checkbox-base {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    background-color: var(--ui-checkbox-base-background-color);
    border: var(--ui-checkbox-base-border);
    border-radius: var(--ui-checkbox-base-border-radius);
    color: var(--ui-checkbox-base-color);
    justify-content: center;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    height: 34px;
    width: 34px;
    padding: 0;
  }

  .ui-checkbox-base::-moz-focus-inner {
    border: 0;
  }

  .ui-checkbox-base:focus {
    box-shadow: var(--ui-checkbox-base-focus-box-shadow);
    border-color: var(--ui-checkbox-base-focus-border-color);
    color: var(--ui-checkbox-base-focus-color);
  }

  .ui-checkbox-base:disabled {
    background: var(--ui-checkbox-base-disabled-background);
    color: var(--ui-checkbox-base-disabled-color);
    cursor: not-allowed;
  }

  .ui-checkbox-icon {
    transform: var(--ui-checkbox-icon-transform);
    opacity: var(--ui-checkbox-icon-opacity);
    fill: currentColor;
    transition: 200ms;
    height: 16px;
    width: 16px;
  }

  .ui-form-separator-base {
    border-top: 1px solid #EEE;
  }

  .ui-calendar-base {
    -moz-user-select: none;
    user-select: none;
    background: var(--ui-calendar-base-background);
    border: var(--ui-calendar-base-border);
    border-radius: var(--ui-calendar-base-border-radius);
    color: var(--ui-calendar-base-color);
    font-family: var(--ui-calendar-base-font-family);
    padding: 10px;
    width: 300px;
  }

  .ui-calendar-table {
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    display: grid;
    width: 100%;
  }

  .ui-calendar-header {
    align-items: center;
    display: flex;
    height: 26px;
  }

  .ui-calendar-text {
    text-align: center;
    flex: 1;
  }

  .ui-calendar-day-name {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    opacity: 0.5;
    width: 34px;
  }

  .ui-calendar-day-names {
    border-bottom: var(--ui-calendar-day-names-border-bottom);
    border-top: var(--ui-calendar-day-names-border-top);
    justify-content: space-between;
    padding: 6px 0;
    margin: 10px 0;
    display: flex;
  }

  .ui-dropdown-panel {
    position: fixed;
    left: var(--ui-dropdown-panel-left);
    top: var(--ui-dropdown-panel-top);
  }

  .ui-breadcrumb-base {
    display: inline-block;
  }

  .ui-breadcrumb-base:hover {
    color: var(--ui-breadcrumb-base-hover-color);
  }

  .ui-breadcrumb-base a:focus {
    color: var(--ui-breadcrumb-base-a-focus-color);
  }

  .ui-breadcrumbs-separator {
    display: inline-block;
    margin: 0 12px;
    opacity: 0.4;
  }

  .ui-breadcrumbs-base {
    background: var(--ui-breadcrumbs-base-background);
    color: var(--ui-breadcrumbs-base-color);
    font-family: var(--ui-breadcrumbs-base-font-family);
    padding: 14px 24px;
  }

  .ui-toolbar-base {
    border-bottom: 2px solid rgba(0,0,0,0.1);
    background: var(--ui-toolbar-base-background);
    align-items: center;
    color: var(--ui-toolbar-base-color);
    padding: 0 24px;
    display: flex;
    height: 56px;
  }

  .ui-toggle-base {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--ui-toggle-base-background-color);
    border: var(--ui-toggle-base-border);
    border-radius: var(--ui-toggle-base-border-radius);
    color: var(--ui-toggle-base-color);
    font-family: var(--ui-toggle-base-font-family);
    display: inline-flex;
    position: relative;
    font-weight: bold;
    width: var(--ui-toggle-base-width);
    cursor: pointer;
    font-size: 14px;
    outline: none;
    height: 34px;
    padding: 0;
  }

  .ui-toggle-base::-moz-focus-inner {
    border: 0;
  }

  .ui-toggle-base:focus {
    box-shadow: var(--ui-toggle-base-focus-box-shadow);
    border-color: var(--ui-toggle-base-focus-border-color);
    color: var(--ui-toggle-base-focus-color);
  }

  .ui-toggle-base:disabled {
    background: var(--ui-toggle-base-disabled-background);
    color: var(--ui-toggle-base-disabled-color);
    cursor: not-allowed;
  }

  .ui-toggle-label {
    text-align: center;
    width: 50%;
  }

  .ui-toggle-overlay {
    background: var(--ui-toggle-overlay-background);
    border-radius: var(--ui-toggle-overlay-border-radius);
    width: calc(50% - 2px);
    position: absolute;
    transition: 320ms;
    left: var(--ui-toggle-overlay-left);
    bottom: 2px;
    top: 2px;
  }

  .ui-calendar-cell-style {
    border-radius: var(--ui-calendar-cell-style-border-radius);
    justify-content: center;
    line-height: 34px;
    cursor: pointer;
    display: flex;
    height: 34px;
    width: 34px;
    background: var(--ui-calendar-cell-style-background);
    color: var(--ui-calendar-cell-style-color);
    opacity: var(--ui-calendar-cell-style-opacity);
  }

  .ui-calendar-cell-style:hover {
    background: var(--ui-calendar-cell-style-hover-background);
    color: var(--ui-calendar-cell-style-hover-color);
  }

  .ui-input-input {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    background-color: var(--ui-input-input-background-color);
    border: var(--ui-input-input-border);
    border-radius: var(--ui-input-input-border-radius);
    color: var(--ui-input-input-color);
    font-family: var(--ui-input-input-font-family);
    line-height: 14px;
    font-size: 14px;
    outline: none;
    height: 34px;
    width: 100%;
    padding: 6px 9px;
    padding-right: var(--ui-input-input-padding-right);
  }

  .ui-input-input:disabled {
    background-color: var(--ui-input-input-disabled-background-color);
    color: var(--ui-input-input-disabled-color);
    border-color: transparent;
    cursor: not-allowed;
    user-select: none;
  }

  .ui-input-input:-moz-read-only::-moz-selection {
    background: transparent;
  }

  .ui-input-input:read-only::selection {
    background: transparent;
  }

  .ui-input-input::-webkit-input-placeholder {
    opacity: 0.5;
  }

  .ui-input-input:-ms-input-placeholder {
    opacity: 0.5;
  }

  .ui-input-input::-moz-placeholder {
    opacity: 0.5;
  }

  .ui-input-input:-moz-placeholder {
    opacity: 0.5;
  }

  .ui-input-input:focus {
    box-shadow: var(--ui-input-input-focus-box-shadow);
    border-color: var(--ui-input-input-focus-border-color);
  }

  .ui-input-base {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    display: inline-block;
    position: relative;
  }

  .ui-input-icon {
    fill: var(--ui-input-icon-fill);
    position: absolute;
    cursor: pointer;
    height: 12px;
    width: 12px;
    right: 12px;
    top: 11px;
  }

  .ui-input-icon:hover {
    fill: var(--ui-input-icon-hover-fill);
  }

  .ui-card-base {
    border: 1px solid #e4e4e4;
    flex-direction: column;
    border-radius: 4px;
    display: flex;
  }

  .ui-card-image-base {
    display: block;
    width: 100%;
    border: 0;
  }

  .ui-card-image-base:first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    width: calc(100% + 2px);
    margin-left: -1px;
    margin-top: -1px;
  }

  .ui-card-block-base {
    padding: 1.25em;
    flex: 1;
  }

  .ui-card-title-base {
    margin-bottom: 0.75em;
    font-size: 1.25em;
    font-weight: bold;
  }

  .ui-card-text-base {
    line-height: 1.5;
  }

  .ui-toolbar-separator-base {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    margin: 0 15px;
    height: 30px;
  }

  .ui-form-label-base {
    font-size: var(--ui-form-label-base-font-size);
    font-family: var(--ui-form-label-base-font-family);
    font-weight: bold;
    opacity: 0.8;
    color: #333;
    flex: 1;
  }

  .ui-toolbar-title-base {
    font-family: sans;
    font-weight: bold;
    font-size: 22px;
  }

  .ui-toolbar-title-base > a {
    color: inherit;
  }

  .ui-toolbar-title-base:hover > a {
    color: inherit;
  }

  .ui-toolbar-title-base > a:focus {
    color: inherit;
  }

  .ui-toolbar-title-base:not(:first-child) {
    margin-left: 15px;
  }

  .ui-icon-path-svg {
    pointer-events: var(--ui-icon-path-svg-pointer-events);
    fill: currentColor;
  }

  .ui-icon-path-svg:hover {
    fill: var(--ui-icon-path-svg-hover-fill);
    cursor: var(--ui-icon-path-svg-hover-cursor);
  }

  .ui-toolbar-link-base {
    font-size: 18px;
  }

  .ui-toolbar-link-base a {
    cursor: pointer;
    display: block;
    color: inherit;
  }

  .ui-toolbar-link-base a:focus {
    color: inherit;
  }

  .ui-toolbar-link-base a:hover {
    color: inherit;
  }

  .ui-toolbar-spacer-base {
    flex: 1;
  }

  .ui-button-styles {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-appearance: none;
    appearance: none;
    border-radius: var(--ui-button-styles-border-radius);
    font-family: var(--ui-button-styles-font-family);
    display: inline-flex;
    white-space: nowrap;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    outline: none;
    height: var(--ui-button-styles-height);
    flexDirection: var(--ui-button-styles-flexDirection);
    padding: var(--ui-button-styles-padding);
    background: var(--ui-button-styles-background);
    color: var(--ui-button-styles-color);
    font-size: var(--ui-button-styles-font-size);
    border: var(--ui-button-styles-border);
  }

  .ui-button-styles::-moz-focus-inner {
    border: 0;
  }

  .ui-button-styles:focus {
    box-shadow: var(--ui-button-styles-focus-box-shadow);
    background: var(--ui-button-styles-focus-background);
    border: var(--ui-button-styles-focus-border);
    color: var(--ui-button-styles-focus-color);
  }

  .ui-button-styles:disabled {
    background: var(--ui-button-styles-disabled-background);
    color: var(--ui-button-styles-disabled-color);
    cursor: not-allowed;
  }

  .ui-button-label {
    text-overflow: ellipsis;
    grid-area: label;
    overflow: hidden;
  }

  .ui-button-icon {
    height: var(--ui-button-icon-height);
    width: var(--ui-button-icon-width);
  }

  .ui-button-gutter {
    width: var(--ui-button-gutter-width);
  }

  .ui-slider-base {
    -webkit-appearance: none;
    background: transparent;
    height: 34px;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .ui-slider-base::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -10px;
    background-color: var(--ui-slider-base-webkit-slider-thumb-background-color);
    border-radius: var(--ui-slider-base-webkit-slider-thumb-border-radius);
    cursor: pointer;
    height: 28px;
    width: 12px;
    border: 0;
  }

  .ui-slider-base::-moz-range-thumb {
    background-color: var(--ui-slider-base-moz-range-thumb-background-color);
    border-radius: var(--ui-slider-base-moz-range-thumb-border-radius);
    cursor: pointer;
    height: 28px;
    width: 12px;
    border: 0;
  }

  .ui-slider-base::-ms-thumb {
    background-color: var(--ui-slider-base-ms-thumb-background-color);
    border-radius: var(--ui-slider-base-ms-thumb-border-radius);
    cursor: pointer;
    height: 28px;
    width: 12px;
    border: 0;
  }

  .ui-slider-base:focus::-webkit-slider-thumb {
    background-color: var(--ui-slider-base-focus-webkit-slider-thumb-background-color);
  }

  .ui-slider-base:focus::-moz-range-thumb {
    background-color: var(--ui-slider-base-focus-moz-range-thumb-background-color);
  }

  .ui-slider-base:focus::-ms-thumb {
    background-color: var(--ui-slider-base-focus-ms-thumb-background-color);
  }

  .ui-slider-base::-webkit-slider-runnable-track {
    background-color: var(--ui-slider-base-webkit-slider-runnable-track-background-color);
    border: var(--ui-slider-base-webkit-slider-runnable-track-border);
    border-radius: var(--ui-slider-base-webkit-slider-runnable-track-border-radius);
    height: 8px;
  }

  .ui-slider-base::-moz-range-track {
    background-color: var(--ui-slider-base-moz-range-track-background-color);
    border: var(--ui-slider-base-moz-range-track-border);
    border-radius: var(--ui-slider-base-moz-range-track-border-radius);
    height: 8px;
  }

  .ui-slider-base::-ms-track {
    background-color: var(--ui-slider-base-ms-track-background-color);
    border: var(--ui-slider-base-ms-track-border);
    border-radius: var(--ui-slider-base-ms-track-border-radius);
    height: 8px;
  }

  .ui-slider-base:focus::-webkit-slider-runnable-track {
    box-shadow: var(--ui-slider-base-focus-webkit-slider-runnable-track-box-shadow);
    border-color: var(--ui-slider-base-focus-webkit-slider-runnable-track-border-color);
  }

  .ui-slider-base:focus::-moz-range-track {
    box-shadow: var(--ui-slider-base-focus-moz-range-track-box-shadow);
    border-color: var(--ui-slider-base-focus-moz-range-track-border-color);
  }

  .ui-slider-base:focus::-ms-track {
    box-shadow: var(--ui-slider-base-focus-ms-track-box-shadow);
    border-color: var(--ui-slider-base-focus-ms-track-border-color);
  }

  .ui-slider-base:focus {
    outline: none;
  }

  .ui-slider-base::-moz-focus-outer {
    border: 0;
  }

  .ui-pager-page-base {
    transition: var(--ui-pager-page-base-transition);
    pointer-events: var(--ui-pager-page-base-pointer-events);
    transform: var(--ui-pager-page-base-transform);
    position: absolute;
    opacity: var(--ui-pager-page-base-opacity);
    display: grid;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }

  .ui-pager-base {
    position: relative;
    overflow: hidden;
    flex: 1;
  }

  .ui-pagination-base {
    align-items: center;
    display: flex;
  }

  .ui-pagination-base * + * {
    margin-left: 5px;
  }

  .ui-pagination-span {
    margin: 0 5px 0 10px;
  }

  .ui-pagination-span:before {
    content: "\\2219 \\2219 \\2219";
    line-height: 8px;
  }

  .ui-time-base {
    display: inline-block;
  }

  .ui-form-field-base {
    flex-direction: var(--ui-form-field-base-flex-direction);
    align-items: var(--ui-form-field-base-align-items);
    display: flex;
  }

  .ui-form-field-base > *:first-child {
    margin-right: var(--ui-form-field-base-first-child-margin-right);
  }

  .ui-form-field-base > *:last-child {
    margin-bottom: var(--ui-form-field-base-last-child-margin-bottom);
  }
`)