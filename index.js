var Mint=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var o=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var s in a=Object(arguments[l]))n.call(a,s)&&(u[s]=a[s]);if(t){i=t(a);for(var c=0;c<i.length;c++)r.call(a,i[c])&&(u[i[c]]=a[i[c]])}}return u},a={};function i(e){return function(){return e}}var u=function(){};u.thatReturns=i,u.thatReturnsFalse=i(!1),u.thatReturnsTrue=i(!0),u.thatReturnsNull=i(null),u.thatReturnsThis=function(){return this},u.thatReturnsArgument=function(e){return e};var l=u,s="function"==typeof Symbol&&Symbol.for,c=s?Symbol.for("react.element"):60103,f=s?Symbol.for("react.portal"):60106,d=s?Symbol.for("react.fragment"):60107,p=s?Symbol.for("react.strict_mode"):60108,h=s?Symbol.for("react.provider"):60109,m=s?Symbol.for("react.context"):60110,g=s?Symbol.for("react.async_mode"):60111,v=s?Symbol.for("react.forward_ref"):60112,y="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function k(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||w}function C(){}function x(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||w}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=k.prototype;var T=x.prototype=new C;T.constructor=x,o(T,k.prototype),T.isPureReactComponent=!0;var S={current:null},_=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var r=void 0,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:c,type:e,key:a,ref:i,props:o,_owner:S.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var I=/\/+/g,P=[];function O(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function F(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case c:case f:a=!0}}if(a)return n(r,e,""===t?"."+R(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var u=t+R(o=e[i],i);a+=F(o,u,n,r)}else if(null===e||void 0===e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),i=0;!(o=e.next()).done;)a+=F(o=o.value,u=t+R(o,i++),n,r);else"object"===o&&b("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,l.thatReturnsArgument):null!=e&&(M(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+n,e={$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function A(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(I,"$&/")+"/"),t=O(t,a,r,o),null==e||F(e,"",H,t),N(t)}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=O(null,null,t,n),null==e||F(e,"",U,t),N(t)},count:function(e){return null==e?0:F(e,"",l.thatReturnsNull,null)},toArray:function(e){var t=[];return A(e,t,null,l.thatReturnsArgument),t},only:function(e){return M(e)||b("143"),e}},createRef:function(){return{current:null}},Component:k,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:m,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null}).Provider={$$typeof:h,context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:v,render:e}},Fragment:d,StrictMode:p,unstable_AsyncMode:g,createElement:D,cloneElement:function(e,t,n){var r=void 0,a=o({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(r in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)_.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=void 0===t[r]&&void 0!==s?s[r]:t[r])}if(1===(r=arguments.length-2))a.children=n;else if(1<r){s=Array(r);for(var f=0;f<r;f++)s[f]=arguments[f+2];a.children=s}return{$$typeof:c,type:e.type,key:i,ref:u,props:a,_owner:l}},createFactory:function(e){var t=D.bind(null,e);return t.type=e,t},isValidElement:M,version:"16.3.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:S,assign:o}},z=Object.freeze({default:L}),Y=z&&L||z,W=Y.default?Y.default:Y,j=(e(function(e){}),e(function(e){e.exports=W})),V=!("undefined"==typeof window||!window.document||!window.document.createElement),B={canUseDOM:V,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:V&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:V&&!!window.screen,isInWorker:!V};var $=function(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}},K=Object.prototype.hasOwnProperty;function Q(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}var q=function(e,t){if(Q(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!K.call(t,n[o])||!Q(e[n[o]],t[n[o]]))return!1;return!0};var X=function(e){var t=(e?e.ownerDocument||e:document).defaultView||window;return!(!e||!("function"==typeof t.Node?e instanceof t.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))};var G=function(e){return X(e)&&3==e.nodeType};var Z=function e(t,n){return!(!t||!n)&&(t===n||!G(t)&&(G(n)?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))};function J(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}j||J("227");var ee={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,invokeGuardedCallback:function(e,t,n,r,o,a,i,u,l){(function(e,t,n,r,o,a,i,u,l){this._hasCaughtError=!1,this._caughtError=null;var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){this._caughtError=e,this._hasCaughtError=!0}}).apply(ee,arguments)},invokeGuardedCallbackAndCatchFirstError:function(e,t,n,r,o,a,i,u,l){if(ee.invokeGuardedCallback.apply(this,arguments),ee.hasCaughtError()){var s=ee.clearCaughtError();ee._hasRethrowError||(ee._hasRethrowError=!0,ee._rethrowError=s)}},rethrowCaughtError:function(){return function(){if(ee._hasRethrowError){var e=ee._rethrowError;throw ee._rethrowError=null,ee._hasRethrowError=!1,e}}.apply(ee,arguments)},hasCaughtError:function(){return ee._hasCaughtError},clearCaughtError:function(){if(ee._hasCaughtError){var e=ee._caughtError;return ee._caughtError=null,ee._hasCaughtError=!1,e}J("198")}};var te=null,ne={};function re(){if(te)for(var e in ne){var t=ne[e],n=te.indexOf(e);if(-1<n||J("96",e),!ae[n])for(var r in t.extractEvents||J("97",e),ae[n]=t,n=t.eventTypes){var o=void 0,a=n[r],i=t,u=r;ie.hasOwnProperty(u)&&J("99",u),ie[u]=a;var l=a.phasedRegistrationNames;if(l){for(o in l)l.hasOwnProperty(o)&&oe(l[o],i,u);o=!0}else a.registrationName?(oe(a.registrationName,i,u),o=!0):o=!1;o||J("98",r,e)}}}function oe(e,t,n){ue[e]&&J("100",e),ue[e]=t,le[e]=t.eventTypes[n].dependencies}var ae=[],ie={},ue={},le={};function se(e){te&&J("101"),te=Array.prototype.slice.call(e),re()}function ce(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];ne.hasOwnProperty(t)&&ne[t]===r||(ne[t]&&J("102",t),ne[t]=r,n=!0)}n&&re()}var fe=Object.freeze({plugins:ae,eventNameDispatchConfigs:ie,registrationNameModules:ue,registrationNameDependencies:le,possibleRegistrationNames:null,injectEventPluginOrder:se,injectEventPluginsByName:ce}),de=null,pe=null,he=null;function me(e,t,n,r){t=e.type||"unknown-event",e.currentTarget=he(r),ee.invokeGuardedCallbackAndCatchFirstError(t,n,void 0,e),e.currentTarget=null}function ge(e,t){return null==t&&J("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function ve(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var ye=null;function be(e,t){if(e){var n=e._dispatchListeners,r=e._dispatchInstances;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)me(e,t,n[o],r[o]);else n&&me(e,t,n,r);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function we(e){return be(e,!0)}function ke(e){return be(e,!1)}var Ce={injectEventPluginOrder:se,injectEventPluginsByName:ce};function xe(e,t){var n=e.stateNode;if(!n)return null;var r=de(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&J("231",t,typeof n),n)}function Te(e,t){null!==e&&(ye=ge(ye,e)),e=ye,ye=null,e&&(ve(e,t?we:ke),ye&&J("95"),ee.rethrowCaughtError())}function Se(e,t,n,r){for(var o=null,a=0;a<ae.length;a++){var i=ae[a];i&&(i=i.extractEvents(e,t,n,r))&&(o=ge(o,i))}Te(o,!1)}var _e=Object.freeze({injection:Ce,getListener:xe,runEventsInBatch:Te,runExtractedEventsInBatch:Se}),Ee=Math.random().toString(36).slice(2),De="__reactInternalInstance$"+Ee,Me="__reactEventHandlers$"+Ee;function Ie(e){if(e[De])return e[De];for(;!e[De];){if(!e.parentNode)return null;e=e.parentNode}return 5===(e=e[De]).tag||6===e.tag?e:null}function Pe(e){if(5===e.tag||6===e.tag)return e.stateNode;J("33")}function Oe(e){return e[Me]||null}var Ne=Object.freeze({precacheFiberNode:function(e,t){t[De]=e},getClosestInstanceFromNode:Ie,getInstanceFromNode:function(e){return!(e=e[De])||5!==e.tag&&6!==e.tag?null:e},getNodeFromInstance:Pe,getFiberCurrentPropsFromNode:Oe,updateFiberProps:function(e,t){e[Me]=t}});function Fe(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function Re(e,t,n){for(var r=[];e;)r.push(e),e=Fe(e);for(e=r.length;0<e--;)t(r[e],"captured",n);for(e=0;e<r.length;e++)t(r[e],"bubbled",n)}function Ue(e,t,n){(t=xe(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=ge(n._dispatchListeners,t),n._dispatchInstances=ge(n._dispatchInstances,e))}function He(e){e&&e.dispatchConfig.phasedRegistrationNames&&Re(e._targetInst,Ue,e)}function Ae(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst;Re(t=t?Fe(t):null,Ue,e)}}function Le(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=xe(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=ge(n._dispatchListeners,t),n._dispatchInstances=ge(n._dispatchInstances,e))}function ze(e){e&&e.dispatchConfig.registrationName&&Le(e._targetInst,null,e)}function Ye(e){ve(e,He)}function We(e,t,n,r){if(n&&r)e:{for(var o=n,a=r,i=0,u=o;u;u=Fe(u))i++;u=0;for(var l=a;l;l=Fe(l))u++;for(;0<i-u;)o=Fe(o),i--;for(;0<u-i;)a=Fe(a),u--;for(;i--;){if(o===a||o===a.alternate)break e;o=Fe(o),a=Fe(a)}o=null}else o=null;for(a=o,o=[];n&&n!==a&&(null===(i=n.alternate)||i!==a);)o.push(n),n=Fe(n);for(n=[];r&&r!==a&&(null===(i=r.alternate)||i!==a);)n.push(r),r=Fe(r);for(r=0;r<o.length;r++)Le(o[r],"bubbled",e);for(e=n.length;0<e--;)Le(n[e],"captured",t)}var je=Object.freeze({accumulateTwoPhaseDispatches:Ye,accumulateTwoPhaseDispatchesSkipTarget:function(e){ve(e,Ae)},accumulateEnterLeaveDispatches:We,accumulateDirectDispatches:function(e){ve(e,ze)}}),Ve=null;function Be(){return!Ve&&B.canUseDOM&&(Ve="textContent"in document.documentElement?"textContent":"innerText"),Ve}var $e={_root:null,_startText:null,_fallbackText:null};function Ke(){if($e._fallbackText)return $e._fallbackText;var e,t,n=$e._startText,r=n.length,o=Qe(),a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return $e._fallbackText=o.slice(e,1<t?1-t:void 0),$e._fallbackText}function Qe(){return"value"in $e._root?$e._root.value:$e._root[Be()]}var qe="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),Xe={type:null,target:null,currentTarget:l.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};function Ge(e,t,n,r){for(var o in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):"target"===o?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?l.thatReturnsTrue:l.thatReturnsFalse,this.isPropagationStopped=l.thatReturnsFalse,this}function Ze(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function Je(e){e instanceof this||J("223"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function et(e){e.eventPool=[],e.getPooled=Ze,e.release=Je}o(Ge.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=l.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=l.thatReturnsTrue)},persist:function(){this.isPersistent=l.thatReturnsTrue},isPersistent:l.thatReturnsFalse,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;for(t=0;t<qe.length;t++)this[qe[t]]=null}}),Ge.Interface=Xe,Ge.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var a=new t;return o(a,n.prototype),n.prototype=a,n.prototype.constructor=n,n.Interface=o({},r.Interface,e),n.extend=r.extend,et(n),n},et(Ge);var tt=Ge.extend({data:null}),nt=Ge.extend({data:null}),rt=[9,13,27,32],ot=B.canUseDOM&&"CompositionEvent"in window,at=null;B.canUseDOM&&"documentMode"in document&&(at=document.documentMode);var it=B.canUseDOM&&"TextEvent"in window&&!at,ut=B.canUseDOM&&(!ot||at&&8<at&&11>=at),lt=String.fromCharCode(32),st={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},ct=!1;function ft(e,t){switch(e){case"topKeyUp":return-1!==rt.indexOf(t.keyCode);case"topKeyDown":return 229!==t.keyCode;case"topKeyPress":case"topMouseDown":case"topBlur":return!0;default:return!1}}function dt(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var pt=!1;var ht={eventTypes:st,extractEvents:function(e,t,n,r){var o=void 0,a=void 0;if(ot)e:{switch(e){case"topCompositionStart":o=st.compositionStart;break e;case"topCompositionEnd":o=st.compositionEnd;break e;case"topCompositionUpdate":o=st.compositionUpdate;break e}o=void 0}else pt?ft(e,n)&&(o=st.compositionEnd):"topKeyDown"===e&&229===n.keyCode&&(o=st.compositionStart);return o?(ut&&(pt||o!==st.compositionStart?o===st.compositionEnd&&pt&&(a=Ke()):($e._root=r,$e._startText=Qe(),pt=!0)),o=tt.getPooled(o,t,n,r),a?o.data=a:null!==(a=dt(n))&&(o.data=a),Ye(o),a=o):a=null,(e=it?function(e,t){switch(e){case"topCompositionEnd":return dt(t);case"topKeyPress":return 32!==t.which?null:(ct=!0,lt);case"topTextInput":return(e=t.data)===lt&&ct?null:e;default:return null}}(e,n):function(e,t){if(pt)return"topCompositionEnd"===e||!ot&&ft(e,t)?(e=Ke(),$e._root=null,$e._startText=null,$e._fallbackText=null,pt=!1,e):null;switch(e){case"topPaste":return null;case"topKeyPress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"topCompositionEnd":return ut?null:t.data;default:return null}}(e,n))?((t=nt.getPooled(st.beforeInput,t,n,r)).data=e,Ye(t)):t=null,null===a?t:null===t?a:[a,t]}},mt=null,gt=null,vt=null;function yt(e){if(e=pe(e)){mt&&"function"==typeof mt.restoreControlledState||J("194");var t=de(e.stateNode);mt.restoreControlledState(e.stateNode,e.type,t)}}var bt={injectFiberControlledHostComponent:function(e){mt=e}};function wt(e){gt?vt?vt.push(e):vt=[e]:gt=e}function kt(){return null!==gt||null!==vt}function Ct(){if(gt){var e=gt,t=vt;if(vt=gt=null,yt(e),t)for(e=0;e<t.length;e++)yt(t[e])}}var xt=Object.freeze({injection:bt,enqueueStateRestore:wt,needsStateRestore:kt,restoreStateIfNeeded:Ct});function Tt(e,t){return e(t)}function St(e,t,n){return e(t,n)}function _t(){}var Et=!1;function Dt(e,t){if(Et)return e(t);Et=!0;try{return Tt(e,t)}finally{Et=!1,kt()&&(_t(),Ct())}}var Mt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function It(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Mt[e.type]:"textarea"===t}function Pt(e){return(e=e.target||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function Ot(e,t){return!(!B.canUseDOM||t&&!("addEventListener"in document))&&((t=(e="on"+e)in document)||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t)}function Nt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ft(e){e._valueTracker||(e._valueTracker=function(e){var t=Nt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"function"==typeof n.get&&"function"==typeof n.set)return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.get.call(this)},set:function(e){r=""+e,n.set.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}(e))}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}var Ut=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ht="function"==typeof Symbol&&Symbol.for,At=Ht?Symbol.for("react.element"):60103,Lt=Ht?Symbol.for("react.call"):60104,zt=Ht?Symbol.for("react.return"):60105,Yt=Ht?Symbol.for("react.portal"):60106,Wt=Ht?Symbol.for("react.fragment"):60107,jt=Ht?Symbol.for("react.strict_mode"):60108,Vt=Ht?Symbol.for("react.provider"):60109,Bt=Ht?Symbol.for("react.context"):60110,$t=Ht?Symbol.for("react.async_mode"):60111,Kt=Ht?Symbol.for("react.forward_ref"):60112,Qt="function"==typeof Symbol&&Symbol.iterator;function qt(e){return null===e||void 0===e?null:"function"==typeof(e=Qt&&e[Qt]||e["@@iterator"])?e:null}function Xt(e){if("function"==typeof(e=e.type))return e.displayName||e.name;if("string"==typeof e)return e;switch(e){case Wt:return"ReactFragment";case Yt:return"ReactPortal";case Lt:return"ReactCall";case zt:return"ReactReturn"}return null}function Gt(e){var t="";do{e:switch(e.tag){case 0:case 1:case 2:case 5:var n=e._debugOwner,r=e._debugSource,o=Xt(e),a=null;n&&(a=Xt(n)),n=r,o="\n    in "+(o||"Unknown")+(n?" (at "+n.fileName.replace(/^.*[\\\/]/,"")+":"+n.lineNumber+")":a?" (created by "+a+")":"");break e;default:o=""}t+=o,e=e.return}while(e);return t}var Zt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jt={},en={};function tn(e,t,n,r,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nn[e]=new tn(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nn[t]=new tn(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){nn[e]=new tn(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(e){nn[e]=new tn(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nn[e]=new tn(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){nn[e]=new tn(e,3,!0,e.toLowerCase(),null)}),["capture","download"].forEach(function(e){nn[e]=new tn(e,4,!1,e.toLowerCase(),null)}),["cols","rows","size","span"].forEach(function(e){nn[e]=new tn(e,6,!1,e.toLowerCase(),null)}),["rowSpan","start"].forEach(function(e){nn[e]=new tn(e,5,!1,e.toLowerCase(),null)});var rn=/[\-\:]([a-z])/g;function on(e){return e[1].toUpperCase()}function an(e,t,n,r){var o=nn.hasOwnProperty(t)?nn[t]:null;(null!==o?0===o.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null===t||void 0===t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!en.hasOwnProperty(e)||!Jt.hasOwnProperty(e)&&(Zt.test(e)?en[e]=!0:(Jt[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function un(e,t){var n=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ln(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=pn(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function sn(e,t){null!=(t=t.checked)&&an(e,"checked",t,!1)}function cn(e,t){sn(e,t);var n=pn(t.value);null!=n&&("number"===t.type?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n)),t.hasOwnProperty("value")?dn(e,t.type,n):t.hasOwnProperty("defaultValue")&&dn(e,t.type,pn(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function fn(e,t){(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue"))&&(""===e.value&&(e.value=""+e._wrapperState.initialValue),e.defaultValue=""+e._wrapperState.initialValue),""!==(t=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!e.defaultChecked,""!==t&&(e.name=t)}function dn(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function pn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rn,on);nn[t]=new tn(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rn,on);nn[t]=new tn(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rn,on);nn[t]=new tn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),nn.tabIndex=new tn("tabIndex",1,!1,"tabindex",null);var hn={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}};function mn(e,t,n){return(e=Ge.getPooled(hn.change,e,t,n)).type="change",wt(n),Ye(e),e}var gn=null,vn=null;function yn(e){Te(e,!1)}function bn(e){if(Rt(Pe(e)))return e}function wn(e,t){if("topChange"===e)return t}var kn=!1;function Cn(){gn&&(gn.detachEvent("onpropertychange",xn),vn=gn=null)}function xn(e){"value"===e.propertyName&&bn(vn)&&Dt(yn,e=mn(vn,e,Pt(e)))}function Tn(e,t,n){"topFocus"===e?(Cn(),vn=n,(gn=t).attachEvent("onpropertychange",xn)):"topBlur"===e&&Cn()}function Sn(e){if("topSelectionChange"===e||"topKeyUp"===e||"topKeyDown"===e)return bn(vn)}function _n(e,t){if("topClick"===e)return bn(t)}function En(e,t){if("topInput"===e||"topChange"===e)return bn(t)}B.canUseDOM&&(kn=Ot("input")&&(!document.documentMode||9<document.documentMode));var Dn={eventTypes:hn,_isInputEventSupported:kn,extractEvents:function(e,t,n,r){var o=t?Pe(t):window,a=void 0,i=void 0,u=o.nodeName&&o.nodeName.toLowerCase();if("select"===u||"input"===u&&"file"===o.type?a=wn:It(o)?kn?a=En:(a=Sn,i=Tn):!(u=o.nodeName)||"input"!==u.toLowerCase()||"checkbox"!==o.type&&"radio"!==o.type||(a=_n),a&&(a=a(e,t)))return mn(a,n,r);i&&i(e,o,t),"topBlur"===e&&null!=t&&(e=t._wrapperState||o._wrapperState)&&e.controlled&&"number"===o.type&&dn(o,"number",o.value)}},Mn=Ge.extend({view:null,detail:null}),In={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=In[e])&&!!t[e]}function On(){return Pn}var Nn=Mn.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:On,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)}}),Fn={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},Rn={eventTypes:Fn,extractEvents:function(e,t,n,r){if("topMouseOver"===e&&(n.relatedTarget||n.fromElement)||"topMouseOut"!==e&&"topMouseOver"!==e)return null;var o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window;if("topMouseOut"===e?(e=t,t=(t=n.relatedTarget||n.toElement)?Ie(t):null):e=null,e===t)return null;var a=null==e?o:Pe(e);o=null==t?o:Pe(t);var i=Nn.getPooled(Fn.mouseLeave,e,n,r);return i.type="mouseleave",i.target=a,i.relatedTarget=o,(n=Nn.getPooled(Fn.mouseEnter,t,n,r)).type="mouseenter",n.target=o,n.relatedTarget=a,We(i,n,e,t),[i,n]}};function Un(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function Hn(e){return!!(e=e._reactInternalFiber)&&2===Un(e)}function An(e){2!==Un(e)&&J("188")}function Ln(e){var t=e.alternate;if(!t)return 3===(t=Un(e))&&J("188"),1===t?null:e;for(var n=e,r=t;;){var o=n.return,a=o?o.alternate:null;if(!o||!a)break;if(o.child===a.child){for(var i=o.child;i;){if(i===n)return An(o),e;if(i===r)return An(o),t;i=i.sibling}J("188")}if(n.return!==r.return)n=o,r=a;else{i=!1;for(var u=o.child;u;){if(u===n){i=!0,n=o,r=a;break}if(u===r){i=!0,r=o,n=a;break}u=u.sibling}if(!i){for(u=a.child;u;){if(u===n){i=!0,n=a,r=o;break}if(u===r){i=!0,r=a,n=o;break}u=u.sibling}i||J("189")}}n.alternate!==r&&J("190")}return 3!==n.tag&&J("188"),n.stateNode.current===n?e:t}var zn=Ge.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Yn=Ge.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wn=Mn.extend({relatedTarget:null});function jn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var Vn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$n=Mn.extend({key:function(e){if(e.key){var t=Vn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=jn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Bn[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:On,charCode:function(e){return"keypress"===e.type?jn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?jn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Kn=Nn.extend({dataTransfer:null}),Qn=Mn.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:On}),qn=Ge.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Xn=Nn.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Gn={},Zn={};function Jn(e,t){var n=e[0].toUpperCase()+e.slice(1),r="on"+n;t={phasedRegistrationNames:{bubbled:r,captured:r+"Capture"},dependencies:[n="top"+n],isInteractive:t},Gn[e]=t,Zn[n]=t}"blur cancel click close contextMenu copy cut doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play rateChange reset seeked submit touchCancel touchEnd touchStart volumeChange".split(" ").forEach(function(e){Jn(e,!0)}),"abort animationEnd animationIteration animationStart canPlay canPlayThrough drag dragEnter dragExit dragLeave dragOver durationChange emptied encrypted ended error load loadedData loadedMetadata loadStart mouseMove mouseOut mouseOver playing progress scroll seeking stalled suspend timeUpdate toggle touchMove transitionEnd waiting wheel".split(" ").forEach(function(e){Jn(e,!1)});var er={eventTypes:Gn,isInteractiveTopLevelEventType:function(e){return void 0!==(e=Zn[e])&&!0===e.isInteractive},extractEvents:function(e,t,n,r){var o=Zn[e];if(!o)return null;switch(e){case"topKeyPress":if(0===jn(n))return null;case"topKeyDown":case"topKeyUp":e=$n;break;case"topBlur":case"topFocus":e=Wn;break;case"topClick":if(2===n.button)return null;case"topDoubleClick":case"topMouseDown":case"topMouseMove":case"topMouseUp":case"topMouseOut":case"topMouseOver":case"topContextMenu":e=Nn;break;case"topDrag":case"topDragEnd":case"topDragEnter":case"topDragExit":case"topDragLeave":case"topDragOver":case"topDragStart":case"topDrop":e=Kn;break;case"topTouchCancel":case"topTouchEnd":case"topTouchMove":case"topTouchStart":e=Qn;break;case"topAnimationEnd":case"topAnimationIteration":case"topAnimationStart":e=zn;break;case"topTransitionEnd":e=qn;break;case"topScroll":e=Mn;break;case"topWheel":e=Xn;break;case"topCopy":case"topCut":case"topPaste":e=Yn;break;default:e=Ge}return Ye(t=e.getPooled(o,t,n,r)),t}},tr=er.isInteractiveTopLevelEventType,nr=[];function rr(e){var t=e.targetInst;do{if(!t){e.ancestors.push(t);break}var n;for(n=t;n.return;)n=n.return;if(!(n=3!==n.tag?null:n.stateNode.containerInfo))break;e.ancestors.push(t),t=Ie(n)}while(t);for(n=0;n<e.ancestors.length;n++)t=e.ancestors[n],Se(e.topLevelType,t,e.nativeEvent,Pt(e.nativeEvent))}var or=!0;function ar(e){or=!!e}function ir(e,t,n){if(!n)return null;e=(tr(e)?lr:sr).bind(null,e),n.addEventListener(t,e,!1)}function ur(e,t,n){if(!n)return null;e=(tr(e)?lr:sr).bind(null,e),n.addEventListener(t,e,!0)}function lr(e,t){St(sr,e,t)}function sr(e,t){if(or){var n=Pt(t);if(null!==(n=Ie(n))&&"number"==typeof n.tag&&2!==Un(n)&&(n=null),nr.length){var r=nr.pop();r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,e=r}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{Dt(rr,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>nr.length&&nr.push(e)}}}var cr=Object.freeze({get _enabled(){return or},setEnabled:ar,isEnabled:function(){return or},trapBubbledEvent:ir,trapCapturedEvent:ur,dispatchEvent:sr});function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}var dr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},pr={},hr={};function mr(e){if(pr[e])return pr[e];if(!dr[e])return e;var t,n=dr[e];for(t in n)if(n.hasOwnProperty(t)&&t in hr)return pr[e]=n[t];return e}B.canUseDOM&&(hr=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);var gr={topAnimationEnd:mr("animationend"),topAnimationIteration:mr("animationiteration"),topAnimationStart:mr("animationstart"),topBlur:"blur",topCancel:"cancel",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoad:"load",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:mr("transitionend"),topWheel:"wheel"},vr={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},yr={},br=0,wr="_reactListenersID"+(""+Math.random()).slice(2);function kr(e){return Object.prototype.hasOwnProperty.call(e,wr)||(e[wr]=br++,yr[e[wr]]={}),yr[e[wr]]}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n,r=Cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Cr(r)}}function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)}var Sr=B.canUseDOM&&"documentMode"in document&&11>=document.documentMode,_r={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},Er=null,Dr=null,Mr=null,Ir=!1;function Pr(e,t){if(Ir||null==Er||Er!==$())return null;var n=Er;return"selectionStart"in n&&Tr(n)?n={start:n.selectionStart,end:n.selectionEnd}:window.getSelection?n={anchorNode:(n=window.getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}:n=void 0,Mr&&q(Mr,n)?null:(Mr=n,(e=Ge.getPooled(_r.select,Dr,e,t)).type="select",e.target=Er,Ye(e),e)}var Or={eventTypes:_r,extractEvents:function(e,t,n,r){var o,a=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(o=!a)){e:{a=kr(a),o=le.onSelect;for(var i=0;i<o.length;i++){var u=o[i];if(!a.hasOwnProperty(u)||!a[u]){a=!1;break e}}a=!0}o=!a}if(o)return null;switch(a=t?Pe(t):window,e){case"topFocus":(It(a)||"true"===a.contentEditable)&&(Er=a,Dr=t,Mr=null);break;case"topBlur":Mr=Dr=Er=null;break;case"topMouseDown":Ir=!0;break;case"topContextMenu":case"topMouseUp":return Ir=!1,Pr(n,r);case"topSelectionChange":if(Sr)break;case"topKeyDown":case"topKeyUp":return Pr(n,r)}return null}};function Nr(e,t,n,r){this.tag=e,this.key=n,this.stateNode=this.type=null,this.sibling=this.child=this.return=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.expirationTime=0,this.alternate=null}function Fr(e,t,n){var r=e.alternate;return null===r?((r=new Nr(e.tag,t,e.key,e.mode)).type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.effectTag=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.expirationTime=n,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Rr(e,t,n){var r=e.type,o=e.key;e=e.props;var a=void 0;if("function"==typeof r)a=r.prototype&&r.prototype.isReactComponent?2:0;else if("string"==typeof r)a=5;else switch(r){case Wt:return Ur(e.children,t,n,o);case $t:a=11,t|=3;break;case jt:a=11,t|=2;break;case Lt:a=7;break;case zt:a=9;break;default:if("object"==typeof r&&null!==r)switch(r.$$typeof){case Vt:a=13;break;case Bt:a=12;break;case Kt:a=14;break;default:if("number"==typeof r.tag)return(t=r).pendingProps=e,t.expirationTime=n,t;J("130",null==r?r:typeof r,"")}else J("130",null==r?r:typeof r,"")}return(t=new Nr(a,e,o,t)).type=r,t.expirationTime=n,t}function Ur(e,t,n,r){return(e=new Nr(10,e,r,t)).expirationTime=n,e}function Hr(e,t,n){return(e=new Nr(6,e,null,t)).expirationTime=n,e}function Ar(e,t,n){return(t=new Nr(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}Ce.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),de=Ne.getFiberCurrentPropsFromNode,pe=Ne.getInstanceFromNode,he=Ne.getNodeFromInstance,Ce.injectEventPluginsByName({SimpleEventPlugin:er,EnterLeaveEventPlugin:Rn,ChangeEventPlugin:Dn,SelectEventPlugin:Or,BeforeInputEventPlugin:ht});var Lr=null,zr=null;function Yr(e){return function(t){try{return e(t)}catch(e){}}}function Wr(e){"function"==typeof Lr&&Lr(e)}function jr(e){"function"==typeof zr&&zr(e)}function Vr(e){return{baseState:e,expirationTime:0,first:null,last:null,callbackList:null,hasForceUpdate:!1,isInitialized:!1,capturedValues:null}}function Br(e,t){null===e.last?e.first=e.last=t:(e.last.next=t,e.last=t),(0===e.expirationTime||e.expirationTime>t.expirationTime)&&(e.expirationTime=t.expirationTime)}var $r=void 0,Kr=void 0;function Qr(e){$r=Kr=null;var t=e.alternate,n=e.updateQueue;null===n&&(n=e.updateQueue=Vr(null)),null!==t?null===(e=t.updateQueue)&&(e=t.updateQueue=Vr(null)):e=null,$r=n,Kr=e!==n?e:null}function qr(e,t){Qr(e),e=$r;var n=Kr;null===n?Br(e,t):null===e.last||null===n.last?(Br(e,t),Br(n,t)):(Br(e,t),n.last=t)}function Xr(e,t,n,r){return"function"==typeof(e=e.partialState)?e.call(t,n,r):e}function Gr(e,t,n,r,a,i){null!==e&&e.updateQueue===n&&(n=t.updateQueue={baseState:n.baseState,expirationTime:n.expirationTime,first:n.first,last:n.last,isInitialized:n.isInitialized,capturedValues:n.capturedValues,callbackList:null,hasForceUpdate:!1}),n.expirationTime=0,n.isInitialized?e=n.baseState:(e=n.baseState=t.memoizedState,n.isInitialized=!0);for(var u=!0,l=n.first,s=!1;null!==l;){var c=l.expirationTime;if(c>i){var f=n.expirationTime;(0===f||f>c)&&(n.expirationTime=c),s||(s=!0,n.baseState=e)}else s||(n.first=l.next,null===n.first&&(n.last=null)),l.isReplace?(e=Xr(l,r,e,a),u=!0):(c=Xr(l,r,e,a))&&(e=u?o({},e,c):o(e,c),u=!1),l.isForced&&(n.hasForceUpdate=!0),null!==l.callback&&(null===(c=n.callbackList)&&(c=n.callbackList=[]),c.push(l)),null!==l.capturedValue&&(null===(c=n.capturedValues)?n.capturedValues=[l.capturedValue]:c.push(l.capturedValue));l=l.next}return null!==n.callbackList?t.effectTag|=32:null!==n.first||n.hasForceUpdate||null!==n.capturedValues||(t.updateQueue=null),s||(n.baseState=e),e}function Zr(e,t){var n=e.callbackList;if(null!==n)for(e.callbackList=null,e=0;e<n.length;e++){var r=n[e],o=r.callback;r.callback=null,"function"!=typeof o&&J("191",o),o.call(t)}}var Jr=Array.isArray;function eo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){var r=void 0;(n=n._owner)&&(2!==n.tag&&J("110"),r=n.stateNode),r||J("147",e);var o=""+e;return null!==t&&null!==t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=r.refs===a?r.refs={}:r.refs;null===e?delete t[o]:t[o]=e})._stringRef=o,t)}"string"!=typeof e&&J("148"),n._owner||J("254",e)}return e}function to(e,t){"textarea"!==e.type&&J("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function no(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t,n){return(e=Fr(e,t,n)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function i(t){return e&&null===t.alternate&&(t.effectTag=2),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=Hr(n,e.mode,r)).return=e,t):((t=o(t,n,r)).return=e,t)}function l(e,t,n,r){return null!==t&&t.type===n.type?((r=o(t,n.props,r)).ref=eo(e,t,n),r.return=e,r):((r=Rr(n,e.mode,r)).ref=eo(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ar(n,e.mode,r)).return=e,t):((t=o(t,n.children||[],r)).return=e,t)}function c(e,t,n,r,a){return null===t||10!==t.tag?((t=Ur(n,e.mode,r,a)).return=e,t):((t=o(t,n,r)).return=e,t)}function f(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Hr(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case At:return(n=Rr(t,e.mode,n)).ref=eo(e,null,t),n.return=e,n;case Yt:return(t=Ar(t,e.mode,n)).return=e,t}if(Jr(t)||qt(t))return(t=Ur(t,e.mode,n,null)).return=e,t;to(e,t)}return null}function d(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==o?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case At:return n.key===o?n.type===Wt?c(e,t,n.props.children,r,o):l(e,t,n,r):null;case Yt:return n.key===o?s(e,t,n,r):null}if(Jr(n)||qt(n))return null!==o?null:c(e,t,n,r,null);to(e,n)}return null}function p(e,t,n,r,o){if("string"==typeof r||"number"==typeof r)return u(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case At:return e=e.get(null===r.key?n:r.key)||null,r.type===Wt?c(t,e,r.props.children,o,r.key):l(t,e,r,o);case Yt:return s(t,e=e.get(null===r.key?n:r.key)||null,r,o)}if(Jr(r)||qt(r))return c(t,e=e.get(n)||null,r,o,null);to(t,r)}return null}function h(o,i,u,l){for(var s=null,c=null,h=i,m=i=0,g=null;null!==h&&m<u.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var v=d(o,h,u[m],l);if(null===v){null===h&&(h=g);break}e&&h&&null===v.alternate&&t(o,h),i=a(v,i,m),null===c?s=v:c.sibling=v,c=v,h=g}if(m===u.length)return n(o,h),s;if(null===h){for(;m<u.length;m++)(h=f(o,u[m],l))&&(i=a(h,i,m),null===c?s=h:c.sibling=h,c=h);return s}for(h=r(o,h);m<u.length;m++)(g=p(h,o,m,u[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),i=a(g,i,m),null===c?s=g:c.sibling=g,c=g);return e&&h.forEach(function(e){return t(o,e)}),s}function m(o,i,u,l){var s=qt(u);"function"!=typeof s&&J("150"),null==(u=s.call(u))&&J("151");for(var c=s=null,h=i,m=i=0,g=null,v=u.next();null!==h&&!v.done;m++,v=u.next()){h.index>m?(g=h,h=null):g=h.sibling;var y=d(o,h,v.value,l);if(null===y){h||(h=g);break}e&&h&&null===y.alternate&&t(o,h),i=a(y,i,m),null===c?s=y:c.sibling=y,c=y,h=g}if(v.done)return n(o,h),s;if(null===h){for(;!v.done;m++,v=u.next())null!==(v=f(o,v.value,l))&&(i=a(v,i,m),null===c?s=v:c.sibling=v,c=v);return s}for(h=r(o,h);!v.done;m++,v=u.next())null!==(v=p(h,o,m,v.value,l))&&(e&&null!==v.alternate&&h.delete(null===v.key?m:v.key),i=a(v,i,m),null===c?s=v:c.sibling=v,c=v);return e&&h.forEach(function(e){return t(o,e)}),s}return function(e,r,a,u){"object"==typeof a&&null!==a&&a.type===Wt&&null===a.key&&(a=a.props.children);var l="object"==typeof a&&null!==a;if(l)switch(a.$$typeof){case At:e:{var s=a.key;for(l=r;null!==l;){if(l.key===s){if(10===l.tag?a.type===Wt:l.type===a.type){n(e,l.sibling),(r=o(l,a.type===Wt?a.props.children:a.props,u)).ref=eo(e,l,a),r.return=e,e=r;break e}n(e,l);break}t(e,l),l=l.sibling}a.type===Wt?((r=Ur(a.props.children,e.mode,u,a.key)).return=e,e=r):((u=Rr(a,e.mode,u)).ref=eo(e,r,a),u.return=e,e=u)}return i(e);case Yt:e:{for(l=a.key;null!==r;){if(r.key===l){if(4===r.tag&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),(r=o(r,a.children||[],u)).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Ar(a,e.mode,u)).return=e,e=r}return i(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==r&&6===r.tag?(n(e,r.sibling),r=o(r,a,u)):(n(e,r),r=Hr(a,e.mode,u)),r.return=e,i(e=r);if(Jr(a))return h(e,r,a,u);if(qt(a))return m(e,r,a,u);if(l&&to(e,a),void 0===a)switch(e.tag){case 2:case 1:J("152",(u=e.type).displayName||u.name||"Component")}return n(e,r)}}var ro=no(!0),oo=no(!1);function ao(e,t,n,r,i,u,l){function s(e,t,n){c(e,t,n,t.expirationTime)}function c(e,t,n,r){t.child=null===e?oo(t,null,n,r):ro(t,e.child,n,r)}function f(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function d(e,t,n,r,o,a){if(f(e,t),!n&&!o)return r&&_(t,!1),m(e,t);n=t.stateNode,Ut.current=t;var i=o?null:n.render();return t.effectTag|=1,o&&(c(e,t,null,a),t.child=null),c(e,t,i,a),t.memoizedState=n.state,t.memoizedProps=n.props,r&&_(t,!0),t.child}function p(e){var t=e.stateNode;t.pendingContext?S(e,t.pendingContext,t.pendingContext!==t.context):t.context&&S(e,t.context,!1),b(e,t.containerInfo)}function h(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){switch(o.tag){case 12:var a=0|o.stateNode;if(o.type===t&&0!=(a&n)){for(a=o;null!==a;){var i=a.alternate;if(0===a.expirationTime||a.expirationTime>r)a.expirationTime=r,null!==i&&(0===i.expirationTime||i.expirationTime>r)&&(i.expirationTime=r);else{if(null===i||!(0===i.expirationTime||i.expirationTime>r))break;i.expirationTime=r}a=a.return}a=null}else a=o.child;break;case 13:a=o.type===e.type?null:o.child;break;default:a=o.child}if(null!==a)a.return=o;else for(a=o;null!==a;){if(a===e){a=null;break}if(null!==(o=a.sibling)){a=o;break}a=a.return}o=a}}function m(e,t){if(null!==e&&t.child!==e.child&&J("153"),null!==t.child){var n=Fr(e=t.child,e.pendingProps,e.expirationTime);for(t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fr(e,e.pendingProps,e.expirationTime)).return=t;n.sibling=null}return t.child}var g=e.shouldSetTextContent,v=e.shouldDeprioritizeSubtree,y=t.pushHostContext,b=t.pushHostContainer,w=r.pushProvider,k=n.getMaskedContext,C=n.getUnmaskedContext,x=n.hasContextChanged,T=n.pushContextProvider,S=n.pushTopLevelContextObject,_=n.invalidateContextProvider,E=i.enterHydrationState,D=i.resetHydrationState,M=i.tryToClaimNextHydratableInstance,I=(e=function(e,t,n,r,i){function u(e,t,n,r,o,a){if(null===t||null!==e.updateQueue&&e.updateQueue.hasForceUpdate)return!0;var i=e.stateNode;return e=e.type,"function"==typeof i.shouldComponentUpdate?i.shouldComponentUpdate(n,o,a):!(e.prototype&&e.prototype.isPureReactComponent&&q(t,n)&&q(r,o))}function l(e,t){t.updater=g,e.stateNode=t,t._reactInternalFiber=e}function s(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&g.enqueueReplaceState(t,t.state,null)}function c(e,t,n,r){if("function"==typeof(e=e.type).getDerivedStateFromProps)return e.getDerivedStateFromProps.call(null,n,r)}var f=e.cacheContext,d=e.getMaskedContext,p=e.getUnmaskedContext,h=e.isContextConsumer,m=e.hasContextChanged,g={isMounted:Hn,enqueueSetState:function(e,r,o){e=e._reactInternalFiber,o=void 0===o?null:o;var a=n(e);qr(e,{expirationTime:a,partialState:r,callback:o,isReplace:!1,isForced:!1,capturedValue:null,next:null}),t(e,a)},enqueueReplaceState:function(e,r,o){e=e._reactInternalFiber,o=void 0===o?null:o;var a=n(e);qr(e,{expirationTime:a,partialState:r,callback:o,isReplace:!0,isForced:!1,capturedValue:null,next:null}),t(e,a)},enqueueForceUpdate:function(e,r){e=e._reactInternalFiber,r=void 0===r?null:r;var o=n(e);qr(e,{expirationTime:o,partialState:null,callback:r,isReplace:!1,isForced:!0,capturedValue:null,next:null}),t(e,o)}};return{adoptClassInstance:l,callGetDerivedStateFromProps:c,constructClassInstance:function(e,t){var n=e.type,r=p(e),i=h(e),u=i?d(e,r):a,s=null!==(n=new n(t,u)).state&&void 0!==n.state?n.state:null;return l(e,n),e.memoizedState=s,null!==(t=c(e,0,t,s))&&void 0!==t&&(e.memoizedState=o({},e.memoizedState,t)),i&&f(e,r,u),n},mountClassInstance:function(e,t){var n=e.type,r=e.alternate,o=e.stateNode,i=e.pendingProps,u=p(e);o.props=i,o.state=e.memoizedState,o.refs=a,o.context=d(e,u),"function"==typeof n.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(n=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),n!==o.state&&g.enqueueReplaceState(o,o.state,null),null!==(n=e.updateQueue)&&(o.state=Gr(r,e,n,o,i,t))),"function"==typeof o.componentDidMount&&(e.effectTag|=4)},resumeMountClassInstance:function(e,t){var n=e.type,a=e.stateNode;a.props=e.memoizedProps,a.state=e.memoizedState;var l=e.memoizedProps,f=e.pendingProps,h=a.context,g=p(e);g=d(e,g),(n="function"==typeof n.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==f||h!==g)&&s(e,a,f,g),h=e.memoizedState,t=null!==e.updateQueue?Gr(null,e,e.updateQueue,a,f,t):h;var v=void 0;return l!==f&&(v=c(e,0,f,t)),null!==v&&void 0!==v&&(t=null===t||void 0===t?v:o({},t,v)),l!==f||h!==t||m()||null!==e.updateQueue&&e.updateQueue.hasForceUpdate?((l=u(e,l,f,h,t,g))?(n||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(e.effectTag|=4)):("function"==typeof a.componentDidMount&&(e.effectTag|=4),r(e,f),i(e,t)),a.props=f,a.state=t,a.context=g,l):("function"==typeof a.componentDidMount&&(e.effectTag|=4),!1)},updateClassInstance:function(e,t,n){var a=t.type,l=t.stateNode;l.props=t.memoizedProps,l.state=t.memoizedState;var f=t.memoizedProps,h=t.pendingProps,g=l.context,v=p(t);v=d(t,v),(a="function"==typeof a.getDerivedStateFromProps||"function"==typeof l.getSnapshotBeforeUpdate)||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(f!==h||g!==v)&&s(t,l,h,v),g=t.memoizedState,n=null!==t.updateQueue?Gr(e,t,t.updateQueue,l,h,n):g;var y=void 0;return f!==h&&(y=c(t,0,h,n)),null!==y&&void 0!==y&&(n=null===n||void 0===n?y:o({},n,y)),f!==h||g!==n||m()||null!==t.updateQueue&&t.updateQueue.hasForceUpdate?((y=u(t,f,h,g,n,v))?(a||"function"!=typeof l.UNSAFE_componentWillUpdate&&"function"!=typeof l.componentWillUpdate||("function"==typeof l.componentWillUpdate&&l.componentWillUpdate(h,n,v),"function"==typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(h,n,v)),"function"==typeof l.componentDidUpdate&&(t.effectTag|=4),"function"==typeof l.getSnapshotBeforeUpdate&&(t.effectTag|=2048)):("function"!=typeof l.componentDidUpdate||f===e.memoizedProps&&g===e.memoizedState||(t.effectTag|=4),"function"!=typeof l.getSnapshotBeforeUpdate||f===e.memoizedProps&&g===e.memoizedState||(t.effectTag|=2048),r(t,h),i(t,n)),l.props=h,l.state=n,l.context=v,y):("function"!=typeof l.componentDidUpdate||f===e.memoizedProps&&g===e.memoizedState||(t.effectTag|=4),"function"!=typeof l.getSnapshotBeforeUpdate||f===e.memoizedProps&&g===e.memoizedState||(t.effectTag|=2048),!1)}}}(n,u,l,function(e,t){e.memoizedProps=t},function(e,t){e.memoizedState=t})).adoptClassInstance,P=e.callGetDerivedStateFromProps,O=e.constructClassInstance,N=e.mountClassInstance,F=e.resumeMountClassInstance,R=e.updateClassInstance;return{beginWork:function(e,t,n){if(0===t.expirationTime||t.expirationTime>n){switch(t.tag){case 3:p(t);break;case 2:T(t);break;case 4:b(t,t.stateNode.containerInfo);break;case 13:w(t)}return null}switch(t.tag){case 0:null!==e&&J("155");var r=t.type,a=t.pendingProps,i=C(t);return r=r(a,i=k(t,i)),t.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof?(i=t.type,t.tag=2,t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,"function"==typeof i.getDerivedStateFromProps&&(null!==(a=P(t,r,a,t.memoizedState))&&void 0!==a&&(t.memoizedState=o({},t.memoizedState,a))),a=T(t),I(t,r),N(t,n),e=d(e,t,!0,a,!1,n)):(t.tag=1,s(e,t,r),t.memoizedProps=a,e=t.child),e;case 1:return a=t.type,n=t.pendingProps,x()||t.memoizedProps!==n?(r=C(t),a=a(n,r=k(t,r)),t.effectTag|=1,s(e,t,a),t.memoizedProps=n,e=t.child):e=m(e,t),e;case 2:a=T(t),null===e?null===t.stateNode?(O(t,t.pendingProps),N(t,n),r=!0):r=F(t,n):r=R(e,t,n),i=!1;var u=t.updateQueue;return null!==u&&null!==u.capturedValues&&(i=r=!0),d(e,t,r,a,i,n);case 3:e:if(p(t),r=t.updateQueue,null!==r){if(i=t.memoizedState,a=Gr(e,t,r,null,null,n),t.memoizedState=a,null!==(r=t.updateQueue)&&null!==r.capturedValues)r=null;else{if(i===a){D(),e=m(e,t);break e}r=a.element}i=t.stateNode,(null===e||null===e.child)&&i.hydrate&&E(t)?(t.effectTag|=2,t.child=oo(t,null,r,n)):(D(),s(e,t,r)),t.memoizedState=a,e=t.child}else D(),e=m(e,t);return e;case 5:return y(t),null===e&&M(t),a=t.type,u=t.memoizedProps,r=t.pendingProps,i=null!==e?e.memoizedProps:null,x()||u!==r||((u=1&t.mode&&v(a,r))&&(t.expirationTime=1073741823),u&&1073741823===n)?(u=r.children,g(a,r)?u=null:i&&g(a,i)&&(t.effectTag|=16),f(e,t),1073741823!==n&&1&t.mode&&v(a,r)?(t.expirationTime=1073741823,t.memoizedProps=r,e=null):(s(e,t,u),t.memoizedProps=r,e=t.child)):e=m(e,t),e;case 6:return null===e&&M(t),t.memoizedProps=t.pendingProps,null;case 8:t.tag=7;case 7:return a=t.pendingProps,x()||t.memoizedProps!==a||(a=t.memoizedProps),r=a.children,t.stateNode=null===e?oo(t,t.stateNode,r,n):ro(t,e.stateNode,r,n),t.memoizedProps=a,t.stateNode;case 9:return null;case 4:return b(t,t.stateNode.containerInfo),a=t.pendingProps,x()||t.memoizedProps!==a?(null===e?t.child=ro(t,null,a,n):s(e,t,a),t.memoizedProps=a,e=t.child):e=m(e,t),e;case 14:return s(e,t,n=(n=t.type.render)(t.pendingProps,t.ref)),t.memoizedProps=n,t.child;case 10:return n=t.pendingProps,x()||t.memoizedProps!==n?(s(e,t,n),t.memoizedProps=n,e=t.child):e=m(e,t),e;case 11:return n=t.pendingProps.children,x()||null!==n&&t.memoizedProps!==n?(s(e,t,n),t.memoizedProps=n,e=t.child):e=m(e,t),e;case 13:return function(e,t,n){var r=t.type.context,o=t.pendingProps,a=t.memoizedProps;if(!x()&&a===o)return t.stateNode=0,w(t),m(e,t);var i=o.value;if(t.memoizedProps=o,null===a)i=1073741823;else if(a.value===o.value){if(a.children===o.children)return t.stateNode=0,w(t),m(e,t);i=0}else{var u=a.value;if(u===i&&(0!==u||1/u==1/i)||u!=u&&i!=i){if(a.children===o.children)return t.stateNode=0,w(t),m(e,t);i=0}else if(i="function"==typeof r._calculateChangedBits?r._calculateChangedBits(u,i):1073741823,0==(i|=0)){if(a.children===o.children)return t.stateNode=0,w(t),m(e,t)}else h(t,r,i,n)}return t.stateNode=i,w(t),s(e,t,o.children),t.child}(e,t,n);case 12:r=t.type,i=t.pendingProps;var l=t.memoizedProps;return a=r._currentValue,u=r._changedBits,x()||0!==u||l!==i?(t.memoizedProps=i,void 0!==(l=i.unstable_observedBits)&&null!==l||(l=1073741823),t.stateNode=l,0!=(u&l)&&h(t,r,u,n),s(e,t,n=(n=i.children)(a)),e=t.child):e=m(e,t),e;default:J("156")}}}}function io(e,t){var n=t.source;null===t.stack&&Gt(n),null!==n&&Xt(n),t=t.value,null!==e&&2===e.tag&&Xt(e);try{t&&t.suppressReactErrorLogging||console.error(t)}catch(e){e&&e.suppressReactErrorLogging||console.error(e)}}var uo={};function lo(e){function t(){if(null!==ee)for(var e=ee.return;null!==e;)N(e),e=e.return;te=null,ne=0,ee=null,ae=!1}function n(e){return null!==ie&&ie.has(e)}function r(e){for(;;){var t=e.alternate,n=e.return,r=e.sibling;if(0==(512&e.effectTag)){t=I(t,e,ne);var o=e;if(1073741823===ne||1073741823!==o.expirationTime){e:switch(o.tag){case 3:case 2:var a=o.updateQueue;a=null===a?0:a.expirationTime;break e;default:a=0}for(var i=o.child;null!==i;)0!==i.expirationTime&&(0===a||a>i.expirationTime)&&(a=i.expirationTime),i=i.sibling;o.expirationTime=a}if(null!==t)return t;if(null!==n&&0==(512&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e)),null!==r)return r;if(null===n){ae=!0;break}e=n}else{if(null!==(e=O(e)))return e.effectTag&=2559,e;if(null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=512),null!==r)return r;if(null===n)break;e=n}}return null}function i(e){var t=M(e.alternate,e,ne);return null===t&&(t=r(e)),Ut.current=null,t}function u(e,n,o){Z&&J("243"),Z=!0,n===ne&&e===te&&null!==ee||(t(),ne=n,ee=Fr((te=e).current,null,ne),e.pendingCommitExpirationTime=0);for(var a=!1;;){try{if(o)for(;null!==ee&&!x();)ee=i(ee);else for(;null!==ee;)ee=i(ee)}catch(e){if(null===ee){a=!0,T(e);break}var u=(o=ee).return;if(null===u){a=!0,T(e);break}P(u,o,e),ee=r(o)}break}return Z=!1,a||null!==ee?null:ae?(e.pendingCommitExpirationTime=n,e.current.alternate):void J("262")}function l(e,t,n,r){qr(t,{expirationTime:r,partialState:null,callback:null,isReplace:!1,isForced:!1,capturedValue:e={value:n,source:e,stack:Gt(e)},next:null}),f(t,r)}function s(e,t){e:{Z&&!oe&&J("263");for(var r=e.return;null!==r;){switch(r.tag){case 2:var o=r.stateNode;if("function"==typeof r.type.getDerivedStateFromCatch||"function"==typeof o.componentDidCatch&&!n(o)){l(e,r,t,1),e=void 0;break e}break;case 3:l(e,r,t,1),e=void 0;break e}r=r.return}3===e.tag&&l(e,e,t,1),e=void 0}return e}function c(e){return e=0!==G?G:Z?oe?1:ne:1&e.mode?ke?10*(1+((d()+50)/10|0)):25*(1+((d()+500)/25|0)):1,ke&&(0===he||e>he)&&(he=e),e}function f(e,n){e:{for(;null!==e;){if((0===e.expirationTime||e.expirationTime>n)&&(e.expirationTime=n),null!==e.alternate&&(0===e.alternate.expirationTime||e.alternate.expirationTime>n)&&(e.alternate.expirationTime=n),null===e.return){if(3!==e.tag){n=void 0;break e}var r=e.stateNode;!Z&&0!==ne&&n<ne&&t(),Z&&!oe&&te===r||m(r,n),Te>xe&&J("185")}e=e.return}n=void 0}return n}function d(){return q=j()-Q,2+(q/10|0)}function p(e,t,n,r,o){var a=G;G=1;try{return e(t,n,r,o)}finally{G=a}}function h(e){if(0!==se){if(e>se)return;B(ce)}var t=j()-Q;se=e,ce=V(v,{timeout:10*(e-2)-t})}function m(e,t){if(null===e.nextScheduledRoot)e.remainingExpirationTime=t,null===le?(ue=le=e,e.nextScheduledRoot=e):(le=le.nextScheduledRoot=e).nextScheduledRoot=ue;else{var n=e.remainingExpirationTime;(0===n||t<n)&&(e.remainingExpirationTime=t)}fe||(be?we&&(de=e,pe=1,k(e,1,!1)):1===t?y():h(t))}function g(){var e=0,t=null;if(null!==le)for(var n=le,r=ue;null!==r;){var o=r.remainingExpirationTime;if(0===o){if((null===n||null===le)&&J("244"),r===r.nextScheduledRoot){ue=le=r.nextScheduledRoot=null;break}if(r===ue)ue=o=r.nextScheduledRoot,le.nextScheduledRoot=o,r.nextScheduledRoot=null;else{if(r===le){(le=n).nextScheduledRoot=ue,r.nextScheduledRoot=null;break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{if((0===e||o<e)&&(e=o,t=r),r===le)break;n=r,r=r.nextScheduledRoot}}null!==(n=de)&&n===t&&1===e?Te++:Te=0,de=t,pe=e}function v(e){b(0,!0,e)}function y(){b(1,!1,null)}function b(e,t,n){if(ye=n,g(),t)for(;null!==de&&0!==pe&&(0===e||e>=pe)&&(!me||d()>=pe);)k(de,pe,!me),g();else for(;null!==de&&0!==pe&&(0===e||e>=pe);)k(de,pe,!1),g();null!==ye&&(se=0,ce=-1),0!==pe&&h(pe),ye=null,me=!1,w()}function w(){if(Te=0,null!==Ce){var e=Ce;Ce=null;for(var t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(e){ge||(ge=!0,ve=e)}}}if(ge)throw e=ve,ve=null,ge=!1,e}function k(e,t,n){fe&&J("245"),fe=!0,n?null!==(n=e.finishedWork)?C(e,n,t):(e.finishedWork=null,null!==(n=u(e,t,!0))&&(x()?e.finishedWork=n:C(e,n,t))):null!==(n=e.finishedWork)?C(e,n,t):(e.finishedWork=null,null!==(n=u(e,t,!1))&&C(e,n,t)),fe=!1}function C(e,t,n){var r=e.firstBatch;if(null!==r&&r._expirationTime<=n&&(null===Ce?Ce=[r]:Ce.push(r),r._defer))return e.finishedWork=t,void(e.remainingExpirationTime=0);e.finishedWork=null,oe=Z=!0,(n=t.stateNode).current===t&&J("177"),0===(r=n.pendingCommitExpirationTime)&&J("261"),n.pendingCommitExpirationTime=0;var o=d();if(Ut.current=null,1<t.effectTag)if(null!==t.lastEffect){t.lastEffect.nextEffect=t;var a=t.firstEffect}else a=t;else a=t.firstEffect;for($(n.containerInfo),re=a;null!==re;){var i=!1,u=void 0;try{for(;null!==re;)2048&re.effectTag&&F(re.alternate,re),re=re.nextEffect}catch(e){i=!0,u=e}i&&(null===re&&J("178"),s(re,u),null!==re&&(re=re.nextEffect))}for(re=a;null!==re;){i=!1,u=void 0;try{for(;null!==re;){var l=re.effectTag;if(16&l&&R(re),128&l){var c=re.alternate;null!==c&&W(c)}switch(14&l){case 2:U(re),re.effectTag&=-3;break;case 6:U(re),re.effectTag&=-3,A(re.alternate,re);break;case 4:A(re.alternate,re);break;case 8:H(re)}re=re.nextEffect}}catch(e){i=!0,u=e}i&&(null===re&&J("178"),s(re,u),null!==re&&(re=re.nextEffect))}for(K(n.containerInfo),n.current=t,re=a;null!==re;){l=!1,c=void 0;try{for(a=n,i=o,u=r;null!==re;){var f=re.effectTag;36&f&&L(a,re.alternate,re,i,u),256&f&&z(re,T),128&f&&Y(re);var p=re.nextEffect;re.nextEffect=null,re=p}}catch(e){l=!0,c=e}l&&(null===re&&J("178"),s(re,c),null!==re&&(re=re.nextEffect))}Z=oe=!1,Wr(t.stateNode),0===(t=n.current.expirationTime)&&(ie=null),e.remainingExpirationTime=t}function x(){return!(null===ye||ye.timeRemaining()>Se)&&(me=!0)}function T(e){null===de&&J("246"),de.remainingExpirationTime=0,ge||(ge=!0,ve=e)}var S=function(){var e=[],t=-1;return{createCursor:function(e){return{current:e}},isEmpty:function(){return-1===t},pop:function(n){0>t||(n.current=e[t],e[t]=null,t--)},push:function(n,r){e[++t]=n.current,n.current=r},checkThatStackIsEmpty:function(){},resetStackAfterFatalErrorInDev:function(){}}}(),_=function(e,t){function n(e){return e===uo&&J("174"),e}var r=e.getChildHostContext,o=e.getRootHostContext;e=t.createCursor;var a=t.push,i=t.pop,u=e(uo),l=e(uo),s=e(uo);return{getHostContext:function(){return n(u.current)},getRootHostContainer:function(){return n(s.current)},popHostContainer:function(e){i(u,e),i(l,e),i(s,e)},popHostContext:function(e){l.current===e&&(i(u,e),i(l,e))},pushHostContainer:function(e,t){a(s,t,e),t=o(t),a(l,e,e),a(u,t,e)},pushHostContext:function(e){var t=n(s.current),o=n(u.current);o!==(t=r(o,e.type,t))&&(a(l,e,e),a(u,t,e))}}}(e,S),E=function(e){function t(e,t,n){(e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n}function n(e){return 2===e.tag&&null!=e.type.childContextTypes}function r(e,t){var n=e.stateNode,r=e.type.childContextTypes;if("function"!=typeof n.getChildContext)return t;for(var a in n=n.getChildContext())a in r||J("108",Xt(e)||"Unknown",a);return o({},t,n)}var i=e.createCursor,u=e.push,l=e.pop,s=i(a),c=i(!1),f=a;return{getUnmaskedContext:function(e){return n(e)?f:s.current},cacheContext:t,getMaskedContext:function(e,n){var r=e.type.contextTypes;if(!r)return a;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var i,u={};for(i in r)u[i]=n[i];return o&&t(e,n,u),u},hasContextChanged:function(){return c.current},isContextConsumer:function(e){return 2===e.tag&&null!=e.type.contextTypes},isContextProvider:n,popContextProvider:function(e){n(e)&&(l(c,e),l(s,e))},popTopLevelContextObject:function(e){l(c,e),l(s,e)},pushTopLevelContextObject:function(e,t,n){null!=s.cursor&&J("168"),u(s,t,e),u(c,n,e)},processChildContext:r,pushContextProvider:function(e){if(!n(e))return!1;var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||a,f=s.current,u(s,t,e),u(c,c.current,e),!0},invalidateContextProvider:function(e,t){var n=e.stateNode;if(n||J("169"),t){var o=r(e,f);n.__reactInternalMemoizedMergedChildContext=o,l(c,e),l(s,e),u(s,o,e)}else l(c,e);u(c,t,e)},findCurrentUnmaskedContext:function(e){for((2!==Un(e)||2!==e.tag)&&J("170");3!==e.tag;){if(n(e))return e.stateNode.__reactInternalMemoizedMergedChildContext;(e=e.return)||J("171")}return e.stateNode.context}}}(S);S=function(e){var t=e.createCursor,n=e.push,r=e.pop,o=t(null),a=t(null),i=t(0);return{pushProvider:function(e){var t=e.type.context;n(i,t._changedBits,e),n(a,t._currentValue,e),n(o,e,e),t._currentValue=e.pendingProps.value,t._changedBits=e.stateNode},popProvider:function(e){var t=i.current,n=a.current;r(o,e),r(a,e),r(i,e),(e=e.type.context)._currentValue=n,e._changedBits=t}}}(S);var D=function(e){function t(e,t){var n=new Nr(5,null,null,0);n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function n(e,t){switch(e.tag){case 5:return null!==(t=a(t,e.type,e.pendingProps))&&(e.stateNode=t,!0);case 6:return null!==(t=i(t,e.pendingProps))&&(e.stateNode=t,!0);default:return!1}}function r(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag;)e=e.return;f=e}var o=e.shouldSetTextContent;if(!(e=e.hydration))return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){J("175")},prepareToHydrateHostTextInstance:function(){J("176")},popHydrationState:function(){return!1}};var a=e.canHydrateInstance,i=e.canHydrateTextInstance,u=e.getNextHydratableSibling,l=e.getFirstHydratableChild,s=e.hydrateInstance,c=e.hydrateTextInstance,f=null,d=null,p=!1;return{enterHydrationState:function(e){return d=l(e.stateNode.containerInfo),f=e,p=!0},resetHydrationState:function(){d=f=null,p=!1},tryToClaimNextHydratableInstance:function(e){if(p){var r=d;if(r){if(!n(e,r)){if(!(r=u(r))||!n(e,r))return e.effectTag|=2,p=!1,void(f=e);t(f,d)}f=e,d=l(r)}else e.effectTag|=2,p=!1,f=e}},prepareToHydrateHostInstance:function(e,t,n){return t=s(e.stateNode,e.type,e.memoizedProps,t,n,e),e.updateQueue=t,null!==t},prepareToHydrateHostTextInstance:function(e){return c(e.stateNode,e.memoizedProps,e)},popHydrationState:function(e){if(e!==f)return!1;if(!p)return r(e),p=!0,!1;var n=e.type;if(5!==e.tag||"head"!==n&&"body"!==n&&!o(n,e.memoizedProps))for(n=d;n;)t(e,n),n=u(n);return r(e),d=f?u(e.stateNode):null,!0}}}(e),M=ao(e,_,E,S,D,f,c).beginWork,I=function(e,t,n,r,o){function a(e){e.effectTag|=4}var i=e.createInstance,u=e.createTextInstance,l=e.appendInitialChild,s=e.finalizeInitialChildren,c=e.prepareUpdate,f=e.persistence,d=t.getRootHostContainer,p=t.popHostContext,h=t.getHostContext,m=t.popHostContainer,g=n.popContextProvider,v=n.popTopLevelContextObject,y=r.popProvider,b=o.prepareToHydrateHostInstance,w=o.prepareToHydrateHostTextInstance,k=o.popHydrationState,C=void 0,x=void 0,T=void 0;return e.mutation?(C=function(){},x=function(e,t,n){(t.updateQueue=n)&&a(t)},T=function(e,t,n,r){n!==r&&a(t)}):J(f?"235":"236"),{completeWork:function(e,t,n){var r=t.pendingProps;switch(t.tag){case 1:return null;case 2:return g(t),e=t.stateNode,null!==(r=t.updateQueue)&&null!==r.capturedValues&&(t.effectTag&=-65,"function"==typeof e.componentDidCatch?t.effectTag|=256:r.capturedValues=null),null;case 3:return m(t),v(t),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(k(t),t.effectTag&=-3),C(t),null!==(e=t.updateQueue)&&null!==e.capturedValues&&(t.effectTag|=256),null;case 5:p(t),n=d();var o=t.type;if(null!==e&&null!=t.stateNode){var f=e.memoizedProps,S=t.stateNode,_=h();S=c(S,o,f,r,n,_),x(e,t,S,o,f,r,n,_),e.ref!==t.ref&&(t.effectTag|=128)}else{if(!r)return null===t.stateNode&&J("166"),null;if(e=h(),k(t))b(t,n,e)&&a(t);else{f=i(o,r,n,e,t);e:for(_=t.child;null!==_;){if(5===_.tag||6===_.tag)l(f,_.stateNode);else if(4!==_.tag&&null!==_.child){_.child.return=_,_=_.child;continue}if(_===t)break;for(;null===_.sibling;){if(null===_.return||_.return===t)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}s(f,o,r,n,e)&&a(t),t.stateNode=f}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)T(e,t,e.memoizedProps,r);else{if("string"!=typeof r)return null===t.stateNode&&J("166"),null;e=d(),n=h(),k(t)?w(t)&&a(t):t.stateNode=u(r,e,n,t)}return null;case 7:(r=t.memoizedProps)||J("165"),t.tag=8,o=[];e:for((f=t.stateNode)&&(f.return=t);null!==f;){if(5===f.tag||6===f.tag||4===f.tag)J("247");else if(9===f.tag)o.push(f.pendingProps.value);else if(null!==f.child){f.child.return=f,f=f.child;continue}for(;null===f.sibling;){if(null===f.return||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}return r=(f=r.handler)(r.props,o),t.child=ro(t,null!==e?e.child:null,r,n),t.child;case 8:return t.tag=7,null;case 9:case 14:case 10:case 11:return null;case 4:return m(t),C(t),null;case 13:return y(t),null;case 12:return null;case 0:J("167");default:J("156")}}}}(e,_,E,S,D).completeWork,P=(_=function(e,t,n,r,o){var a=e.popHostContainer,i=e.popHostContext,u=t.popContextProvider,l=t.popTopLevelContextObject,s=n.popProvider;return{throwException:function(e,t,n){t.effectTag|=512,t.firstEffect=t.lastEffect=null,t={value:n,source:t,stack:Gt(t)};do{switch(e.tag){case 3:return Qr(e),e.updateQueue.capturedValues=[t],void(e.effectTag|=1024);case 2:if(n=e.stateNode,0==(64&e.effectTag)&&null!==n&&"function"==typeof n.componentDidCatch&&!o(n)){Qr(e);var r=(n=e.updateQueue).capturedValues;return null===r?n.capturedValues=[t]:r.push(t),void(e.effectTag|=1024)}}e=e.return}while(null!==e)},unwindWork:function(e){switch(e.tag){case 2:u(e);var t=e.effectTag;return 1024&t?(e.effectTag=-1025&t|64,e):null;case 3:return a(e),l(e),1024&(t=e.effectTag)?(e.effectTag=-1025&t|64,e):null;case 5:return i(e),null;case 4:return a(e),null;case 13:return s(e),null;default:return null}},unwindInterruptedWork:function(e){switch(e.tag){case 2:u(e);break;case 3:a(e),l(e);break;case 5:i(e);break;case 4:a(e);break;case 13:s(e)}}}}(_,E,S,0,n)).throwException,O=_.unwindWork,N=_.unwindInterruptedWork,F=(_=function(e,t,n,r,o){function a(e){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){t(e,n)}else n.current=null}function i(e){switch(jr(e),e.tag){case 2:a(e);var n=e.stateNode;if("function"==typeof n.componentWillUnmount)try{n.props=e.memoizedProps,n.state=e.memoizedState,n.componentWillUnmount()}catch(n){t(e,n)}break;case 5:a(e);break;case 7:u(e.stateNode);break;case 4:f&&s(e)}}function u(e){for(var t=e;;)if(i(t),null===t.child||f&&4===t.tag){if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}else t.child.return=t,t=t.child}function l(e){return 5===e.tag||3===e.tag||4===e.tag}function s(e){for(var t=e,n=!1,r=void 0,o=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&J("160"),n.tag){case 5:r=n.stateNode,o=!1;break e;case 3:case 4:r=n.stateNode.containerInfo,o=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag)u(t),o?k(r,t.stateNode):w(r,t.stateNode);else if(4===t.tag?r=t.stateNode.containerInfo:i(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}var c=e.getPublicInstance,f=e.mutation;e=e.persistence,f||J(e?"235":"236");var d=f.commitMount,p=f.commitUpdate,h=f.resetTextContent,m=f.commitTextUpdate,g=f.appendChild,v=f.appendChildToContainer,y=f.insertBefore,b=f.insertInContainerBefore,w=f.removeChild,k=f.removeChildFromContainer;return{commitBeforeMutationLifeCycles:function(e,t){switch(t.tag){case 2:if(2048&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;(e=t.stateNode).props=t.memoizedProps,e.state=t.memoizedState,t=e.getSnapshotBeforeUpdate(n,r),e.__reactInternalSnapshotBeforeUpdate=t}break;case 3:case 5:case 6:case 4:break;default:J("163")}},commitResetTextContent:function(e){h(e.stateNode)},commitPlacement:function(e){e:{for(var t=e.return;null!==t;){if(l(t)){var n=t;break e}t=t.return}J("160"),n=void 0}var r=t=void 0;switch(n.tag){case 5:t=n.stateNode,r=!1;break;case 3:case 4:t=n.stateNode.containerInfo,r=!0;break;default:J("161")}16&n.effectTag&&(h(t),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||l(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var o=e;;){if(5===o.tag||6===o.tag)n?r?b(t,o.stateNode,n):y(t,o.stateNode,n):r?v(t,o.stateNode):g(t,o.stateNode);else if(4!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===e)break;for(;null===o.sibling;){if(null===o.return||o.return===e)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},commitDeletion:function(e){s(e),e.return=null,e.child=null,e.alternate&&(e.alternate.child=null,e.alternate.return=null)},commitWork:function(e,t){switch(t.tag){case 2:break;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps;e=null!==e?e.memoizedProps:r;var o=t.type,a=t.updateQueue;t.updateQueue=null,null!==a&&p(n,a,o,e,r,t)}break;case 6:null===t.stateNode&&J("162"),n=t.memoizedProps,m(t.stateNode,null!==e?e.memoizedProps:n,n);break;case 3:break;default:J("163")}},commitLifeCycles:function(e,t,n){switch(n.tag){case 2:if(e=n.stateNode,4&n.effectTag)if(null===t)e.props=n.memoizedProps,e.state=n.memoizedState,e.componentDidMount();else{var r=t.memoizedProps;t=t.memoizedState,e.props=n.memoizedProps,e.state=n.memoizedState,e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}null!==(n=n.updateQueue)&&Zr(n,e);break;case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=c(n.child.stateNode);break;case 2:e=n.child.stateNode}Zr(t,e)}break;case 5:e=n.stateNode,null===t&&4&n.effectTag&&d(e,n.type,n.memoizedProps,n);break;case 6:case 4:break;default:J("163")}},commitErrorLogging:function(e,t){switch(e.tag){case 2:var n=e.type;t=e.stateNode;var r=e.updateQueue;(null===r||null===r.capturedValues)&&J("264");var a=r.capturedValues;for(r.capturedValues=null,"function"!=typeof n.getDerivedStateFromCatch&&o(t),t.props=e.memoizedProps,t.state=e.memoizedState,n=0;n<a.length;n++){var i=(r=a[n]).value,u=r.stack;io(e,r),t.componentDidCatch(i,{componentStack:null!==u?u:""})}break;case 3:for((null===(n=e.updateQueue)||null===n.capturedValues)&&J("264"),a=n.capturedValues,n.capturedValues=null,n=0;n<a.length;n++)io(e,r=a[n]),t(r.value);break;default:J("265")}},commitAttachRef:function(e){var t=e.ref;if(null!==t){var n=e.stateNode;switch(e.tag){case 5:e=c(n);break;default:e=n}"function"==typeof t?t(e):t.current=e}},commitDetachRef:function(e){null!==(e=e.ref)&&("function"==typeof e?e(null):e.current=null)}}}(e,s,0,0,function(e){null===ie?ie=new Set([e]):ie.add(e)})).commitBeforeMutationLifeCycles,R=_.commitResetTextContent,U=_.commitPlacement,H=_.commitDeletion,A=_.commitWork,L=_.commitLifeCycles,z=_.commitErrorLogging,Y=_.commitAttachRef,W=_.commitDetachRef,j=e.now,V=e.scheduleDeferredCallback,B=e.cancelDeferredCallback,$=e.prepareForCommit,K=e.resetAfterCommit,Q=j(),q=Q,X=0,G=0,Z=!1,ee=null,te=null,ne=0,re=null,oe=!1,ae=!1,ie=null,ue=null,le=null,se=0,ce=-1,fe=!1,de=null,pe=0,he=0,me=!1,ge=!1,ve=null,ye=null,be=!1,we=!1,ke=!1,Ce=null,xe=1e3,Te=0,Se=1;return{recalculateCurrentTime:d,computeExpirationForFiber:c,scheduleWork:f,requestWork:m,flushRoot:function(e,t){fe&&J("253"),de=e,pe=t,k(e,t,!1),y(),w()},batchedUpdates:function(e,t){var n=be;be=!0;try{return e(t)}finally{(be=n)||fe||y()}},unbatchedUpdates:function(e,t){if(be&&!we){we=!0;try{return e(t)}finally{we=!1}}return e(t)},flushSync:function(e,t){fe&&J("187");var n=be;be=!0;try{return p(e,t)}finally{be=n,y()}},flushControlled:function(e){var t=be;be=!0;try{p(e)}finally{(be=t)||fe||b(1,!1,null)}},deferredUpdates:function(e){var t=G;G=25*(1+((d()+500)/25|0));try{return e()}finally{G=t}},syncUpdates:p,interactiveUpdates:function(e,t,n){if(ke)return e(t,n);be||fe||0===he||(b(he,!1,null),he=0);var r=ke,o=be;be=ke=!0;try{return e(t,n)}finally{ke=r,(be=o)||fe||y()}},flushInteractiveUpdates:function(){fe||0===he||(b(he,!1,null),he=0)},computeUniqueAsyncExpiration:function(){var e=25*(1+((d()+500)/25|0));return e<=X&&(e=X+1),X=e},legacyContext:E}}function so(e){function t(e,t,n,r,o,i){if(r=t.current,n){n=n._reactInternalFiber;var u=c(n);n=f(n)?d(n,u):u}else n=a;return null===t.context?t.context=n:t.pendingContext=n,qr(r,{expirationTime:o,partialState:{element:e},callback:void 0===(t=i)?null:t,isReplace:!1,isForced:!1,capturedValue:null,next:null}),l(r,o),o}function n(e){return null===(e=function(e){if(!(e=Ln(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}(e))?null:e.stateNode}var r=e.getPublicInstance,i=(e=lo(e)).recalculateCurrentTime,u=e.computeExpirationForFiber,l=e.scheduleWork,s=e.legacyContext,c=s.findCurrentUnmaskedContext,f=s.isContextProvider,d=s.processChildContext;return{createContainer:function(e,t,n){return e={current:t=new Nr(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:n,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null},t.stateNode=e},updateContainer:function(e,n,r,o){var a=n.current;return t(e,n,r,i(),a=u(a),o)},updateContainerAtExpirationTime:function(e,n,r,o,a){return t(e,n,r,i(),o,a)},flushRoot:e.flushRoot,requestWork:e.requestWork,computeUniqueAsyncExpiration:e.computeUniqueAsyncExpiration,batchedUpdates:e.batchedUpdates,unbatchedUpdates:e.unbatchedUpdates,deferredUpdates:e.deferredUpdates,syncUpdates:e.syncUpdates,interactiveUpdates:e.interactiveUpdates,flushInteractiveUpdates:e.flushInteractiveUpdates,flushControlled:e.flushControlled,flushSync:e.flushSync,getPublicRootInstance:function(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:return r(e.child.stateNode);default:return e.child.stateNode}},findHostInstance:n,findHostInstanceWithNoPortals:function(e){return null===(e=function(e){if(!(e=Ln(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child&&4!==t.tag)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}(e))?null:e.stateNode},injectIntoDevTools:function(e){var t=e.findFiberByHostInstance;return function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Lr=Yr(function(e){return t.onCommitFiberRoot(n,e)}),zr=Yr(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){}return!0}(o({},e,{findHostInstanceByFiber:function(e){return n(e)},findFiberByHostInstance:function(e){return t?t(e):null}}))}}}var co=Object.freeze({default:so}),fo=co&&so||co,po=fo.default?fo.default:fo;var ho="object"==typeof performance&&"function"==typeof performance.now,mo=void 0;mo=ho?function(){return performance.now()}:function(){return Date.now()};var go=void 0,vo=void 0;if(B.canUseDOM)if("function"!=typeof requestIdleCallback||"function"!=typeof cancelIdleCallback){var yo=null,bo=!1,wo=-1,ko=!1,Co=0,xo=33,To=33,So=void 0;So=ho?{didTimeout:!1,timeRemaining:function(){var e=Co-performance.now();return 0<e?e:0}}:{didTimeout:!1,timeRemaining:function(){var e=Co-Date.now();return 0<e?e:0}};var _o="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(e){if(e.source===window&&e.data===_o){if(bo=!1,e=mo(),0>=Co-e){if(!(-1!==wo&&wo<=e))return void(ko||(ko=!0,requestAnimationFrame(Eo)));So.didTimeout=!0}else So.didTimeout=!1;wo=-1,e=yo,yo=null,null!==e&&e(So)}},!1);var Eo=function(e){ko=!1;var t=e-Co+To;t<To&&xo<To?(8>t&&(t=8),To=t<xo?xo:t):xo=t,Co=e+To,bo||(bo=!0,window.postMessage(_o,"*"))};go=function(e,t){return yo=e,null!=t&&"number"==typeof t.timeout&&(wo=mo()+t.timeout),ko||(ko=!0,requestAnimationFrame(Eo)),0},vo=function(){yo=null,bo=!1,wo=-1}}else go=window.requestIdleCallback,vo=window.cancelIdleCallback;else go=function(e){return setTimeout(function(){e({timeRemaining:function(){return 1/0},didTimeout:!1})})},vo=function(e){clearTimeout(e)};function Do(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return j.Children.forEach(e,function(e){null==e||"string"!=typeof e&&"number"!=typeof e||(t+=e)}),t}(t.children))&&(e.children=t),e}function Mo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+n,t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function Io(e,t){var n=t.value;e._wrapperState={initialValue:null!=n?n:t.defaultValue,wasMultiple:!!t.multiple}}function Po(e,t){return null!=t.dangerouslySetInnerHTML&&J("91"),o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var n=t.value;null==n&&(n=t.defaultValue,null!=(t=t.children)&&(null!=n&&J("92"),Array.isArray(t)&&(1>=t.length||J("93"),t=t[0]),n=""+t),null==n&&(n="")),e._wrapperState={initialValue:""+n}}function No(e,t){var n=t.value;null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&(e.defaultValue=n)),null!=t.defaultValue&&(e.defaultValue=t.defaultValue)}function Fo(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}var Ro="http://www.w3.org/1999/xhtml",Uo="http://www.w3.org/2000/svg";function Ho(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ao(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Ho(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Lo,zo=void 0,Yo=(Lo=function(e,t){if(e.namespaceURI!==Uo||"innerHTML"in e)e.innerHTML=t;else{for((zo=zo||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return Lo(e,t)})}:Lo);function Wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var jo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vo=["Webkit","ms","Moz","O"];function Bo(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=n,a=t[n];o=null==a||"boolean"==typeof a||""===a?"":r||"number"!=typeof a||0===a||jo.hasOwnProperty(o)&&jo[o]?(""+a).trim():a+"px","float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(jo).forEach(function(e){Vo.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jo[t]=jo[e]})});var $o=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(e,t,n){t&&($o[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&J("137",e,n()),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&J("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||J("61")),null!=t.style&&"object"!=typeof t.style&&J("62",n()))}function Qo(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qo=Ro,Xo=l.thatReturns("");function Go(e,t){var n=kr(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=le[t];for(var r=0;r<t.length;r++){var o=t[r];n.hasOwnProperty(o)&&n[o]||("topScroll"===o?ur("topScroll","scroll",e):"topFocus"===o||"topBlur"===o?(ur("topFocus","focus",e),ur("topBlur","blur",e),n.topBlur=!0,n.topFocus=!0):"topCancel"===o?(Ot("cancel",!0)&&ur("topCancel","cancel",e),n.topCancel=!0):"topClose"===o?(Ot("close",!0)&&ur("topClose","close",e),n.topClose=!0):gr.hasOwnProperty(o)&&ir(o,gr[o],e),n[o]=!0)}}function Zo(e,t,n,r){return n=9===n.nodeType?n:n.ownerDocument,r===qo&&(r=Ho(e)),r===qo?"script"===e?((e=n.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):e="string"==typeof t.is?n.createElement(e,{is:t.is}):n.createElement(e):e=n.createElementNS(r,e),e}function Jo(e,t){return(9===t.nodeType?t:t.ownerDocument).createTextNode(e)}function ea(e,t,n,r){var a=Qo(t,n);switch(t){case"iframe":case"object":ir("topLoad","load",e);var i=n;break;case"video":case"audio":for(i in vr)vr.hasOwnProperty(i)&&ir(i,vr[i],e);i=n;break;case"source":ir("topError","error",e),i=n;break;case"img":case"image":case"link":ir("topError","error",e),ir("topLoad","load",e),i=n;break;case"form":ir("topReset","reset",e),ir("topSubmit","submit",e),i=n;break;case"details":ir("topToggle","toggle",e),i=n;break;case"input":ln(e,n),i=un(e,n),ir("topInvalid","invalid",e),Go(r,"onChange");break;case"option":i=Do(e,n);break;case"select":Io(e,n),i=o({},n,{value:void 0}),ir("topInvalid","invalid",e),Go(r,"onChange");break;case"textarea":Oo(e,n),i=Po(e,n),ir("topInvalid","invalid",e),Go(r,"onChange");break;default:i=n}Ko(t,i,Xo);var u,s=i;for(u in s)if(s.hasOwnProperty(u)){var c=s[u];"style"===u?Bo(e,c):"dangerouslySetInnerHTML"===u?null!=(c=c?c.__html:void 0)&&Yo(e,c):"children"===u?"string"==typeof c?("textarea"!==t||""!==c)&&Wo(e,c):"number"==typeof c&&Wo(e,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(ue.hasOwnProperty(u)?null!=c&&Go(r,u):null!=c&&an(e,u,c,a))}switch(t){case"input":Ft(e),fn(e,n);break;case"textarea":Ft(e),Fo(e);break;case"option":null!=n.value&&e.setAttribute("value",n.value);break;case"select":e.multiple=!!n.multiple,null!=(t=n.value)?Mo(e,!!n.multiple,t,!1):null!=n.defaultValue&&Mo(e,!!n.multiple,n.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=l)}}function ta(e,t,n,r,a){var i=null;switch(t){case"input":n=un(e,n),r=un(e,r),i=[];break;case"option":n=Do(e,n),r=Do(e,r),i=[];break;case"select":n=o({},n,{value:void 0}),r=o({},r,{value:void 0}),i=[];break;case"textarea":n=Po(e,n),r=Po(e,r),i=[];break;default:"function"!=typeof n.onClick&&"function"==typeof r.onClick&&(e.onclick=l)}Ko(t,r,Xo),t=e=void 0;var u=null;for(e in n)if(!r.hasOwnProperty(e)&&n.hasOwnProperty(e)&&null!=n[e])if("style"===e){var s=n[e];for(t in s)s.hasOwnProperty(t)&&(u||(u={}),u[t]="")}else"dangerouslySetInnerHTML"!==e&&"children"!==e&&"suppressContentEditableWarning"!==e&&"suppressHydrationWarning"!==e&&"autoFocus"!==e&&(ue.hasOwnProperty(e)?i||(i=[]):(i=i||[]).push(e,null));for(e in r){var c=r[e];if(s=null!=n?n[e]:void 0,r.hasOwnProperty(e)&&c!==s&&(null!=c||null!=s))if("style"===e)if(s){for(t in s)!s.hasOwnProperty(t)||c&&c.hasOwnProperty(t)||(u||(u={}),u[t]="");for(t in c)c.hasOwnProperty(t)&&s[t]!==c[t]&&(u||(u={}),u[t]=c[t])}else u||(i||(i=[]),i.push(e,u)),u=c;else"dangerouslySetInnerHTML"===e?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(e,""+c)):"children"===e?s===c||"string"!=typeof c&&"number"!=typeof c||(i=i||[]).push(e,""+c):"suppressContentEditableWarning"!==e&&"suppressHydrationWarning"!==e&&(ue.hasOwnProperty(e)?(null!=c&&Go(a,e),i||s===c||(i=[])):(i=i||[]).push(e,c))}return u&&(i=i||[]).push("style",u),i}function na(e,t,n,r,o){"input"===n&&"radio"===o.type&&null!=o.name&&sn(e,o),Qo(n,r),r=Qo(n,o);for(var a=0;a<t.length;a+=2){var i=t[a],u=t[a+1];"style"===i?Bo(e,u):"dangerouslySetInnerHTML"===i?Yo(e,u):"children"===i?Wo(e,u):an(e,i,u,r)}switch(n){case"input":cn(e,o);break;case"textarea":No(e,o);break;case"select":e._wrapperState.initialValue=void 0,t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!o.multiple,null!=(n=o.value)?Mo(e,!!o.multiple,n,!1):t!==!!o.multiple&&(null!=o.defaultValue?Mo(e,!!o.multiple,o.defaultValue,!0):Mo(e,!!o.multiple,o.multiple?[]:"",!1))}}function ra(e,t,n,r,o){switch(t){case"iframe":case"object":ir("topLoad","load",e);break;case"video":case"audio":for(var a in vr)vr.hasOwnProperty(a)&&ir(a,vr[a],e);break;case"source":ir("topError","error",e);break;case"img":case"image":case"link":ir("topError","error",e),ir("topLoad","load",e);break;case"form":ir("topReset","reset",e),ir("topSubmit","submit",e);break;case"details":ir("topToggle","toggle",e);break;case"input":ln(e,n),ir("topInvalid","invalid",e),Go(o,"onChange");break;case"select":Io(e,n),ir("topInvalid","invalid",e),Go(o,"onChange");break;case"textarea":Oo(e,n),ir("topInvalid","invalid",e),Go(o,"onChange")}for(var i in Ko(t,n,Xo),r=null,n)n.hasOwnProperty(i)&&(a=n[i],"children"===i?"string"==typeof a?e.textContent!==a&&(r=["children",a]):"number"==typeof a&&e.textContent!==""+a&&(r=["children",""+a]):ue.hasOwnProperty(i)&&null!=a&&Go(o,i));switch(t){case"input":Ft(e),fn(e,n);break;case"textarea":Ft(e),Fo(e);break;case"select":case"option":break;default:"function"==typeof n.onClick&&(e.onclick=l)}return r}function oa(e,t){return e.nodeValue!==t}var aa=Object.freeze({createElement:Zo,createTextNode:Jo,setInitialProperties:ea,diffProperties:ta,updateProperties:na,diffHydratedProperties:ra,diffHydratedText:oa,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(e,t,n){switch(t){case"input":if(cn(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Oe(r);o||J("90"),Rt(r),cn(r,o)}}}break;case"textarea":No(e,n);break;case"select":null!=(t=n.value)&&Mo(e,!!n.multiple,t,!1)}}});bt.injectFiberControlledHostComponent(aa);var ia=null,ua=null;function la(e){this._expirationTime=pa.computeUniqueAsyncExpiration(),this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function sa(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function ca(e,t,n){this._internalRoot=pa.createContainer(e,t,n)}function fa(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function da(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}la.prototype.render=function(e){this._defer||J("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,n=this._expirationTime,r=new sa;return pa.updateContainerAtExpirationTime(e,t,null,n,r._onCommit),r},la.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},la.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||J("251"),this._hasChildren){var n=this._expirationTime;if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children));for(var r=null,o=t;o!==this;)r=o,o=o._next;null===r&&J("251"),r._next=o._next,this._next=t,e.firstBatch=this}this._defer=!1,pa.flushRoot(e,n),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},la.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},sa.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},sa.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var n=e[t];"function"!=typeof n&&J("191",n),n()}}},ca.prototype.render=function(e,t){var n=this._internalRoot,r=new sa;return null!==(t=void 0===t?null:t)&&r.then(t),pa.updateContainer(e,n,null,r._onCommit),r},ca.prototype.unmount=function(e){var t=this._internalRoot,n=new sa;return null!==(e=void 0===e?null:e)&&n.then(e),pa.updateContainer(null,t,null,n._onCommit),n},ca.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var r=this._internalRoot,o=new sa;return null!==(n=void 0===n?null:n)&&o.then(n),pa.updateContainer(t,r,e,o._onCommit),o},ca.prototype.createBatch=function(){var e=new la(this),t=e._expirationTime,n=this._internalRoot,r=n.firstBatch;if(null===r)n.firstBatch=e,e._next=null;else{for(n=null;null!==r&&r._expirationTime<=t;)n=r,r=r._next;e._next=r,null!==n&&(n._next=e)}return e};var pa=po({getRootHostContext:function(e){var t=e.nodeType;switch(t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ao(null,"");break;default:e=Ao(e=(t=8===t?e.parentNode:e).namespaceURI||null,t=t.tagName)}return e},getChildHostContext:function(e,t){return Ao(e,t)},getPublicInstance:function(e){return e},prepareForCommit:function(){ia=or;var e=$();if(Tr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var n=window.getSelection&&window.getSelection();if(n&&0!==n.rangeCount){t=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{t.nodeType,o.nodeType}catch(e){t=null;break e}var a=0,i=-1,u=-1,l=0,s=0,c=e,f=null;t:for(;;){for(var d;c!==t||0!==r&&3!==c.nodeType||(i=a+r),c!==o||0!==n&&3!==c.nodeType||(u=a+n),3===c.nodeType&&(a+=c.nodeValue.length),null!==(d=c.firstChild);)f=c,c=d;for(;;){if(c===e)break t;if(f===t&&++l===r&&(i=a),f===o&&++s===n&&(u=a),null!==(d=c.nextSibling))break;f=(c=f).parentNode}c=d}t=-1===i||-1===u?null:{start:i,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;ua={focusedElem:e,selectionRange:t},ar(!1)},resetAfterCommit:function(){var e=ua,t=$(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&Z(document.documentElement,n)){if(Tr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(window.getSelection){t=window.getSelection();var o=n[Be()].length;e=Math.min(r.start,o),r=void 0===r.end?e:Math.min(r.end,o),!t.extend&&e>r&&(o=r,r=e,e=o),o=xr(n,e);var a=xr(n,r);if(o&&a&&(1!==t.rangeCount||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)){var i=document.createRange();i.setStart(o.node,o.offset),t.removeAllRanges(),e>r?(t.addRange(i),t.extend(a.node,a.offset)):(i.setEnd(a.node,a.offset),t.addRange(i))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}ua=null,ar(ia),ia=null},createInstance:function(e,t,n,r,o){return(e=Zo(e,t,n,r))[De]=o,e[Me]=t,e},appendInitialChild:function(e,t){e.appendChild(t)},finalizeInitialChildren:function(e,t,n,r){return ea(e,t,n,r),da(t,n)},prepareUpdate:function(e,t,n,r,o){return ta(e,t,n,r,o)},shouldSetTextContent:function(e,t){return"textarea"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html},shouldDeprioritizeSubtree:function(e,t){return!!t.hidden},createTextInstance:function(e,t,n,r){return(e=Jo(e,t))[De]=r,e},now:mo,mutation:{commitMount:function(e,t,n){da(t,n)&&e.focus()},commitUpdate:function(e,t,n,r,o){e[Me]=o,na(e,t,n,r,o)},resetTextContent:function(e){Wo(e,"")},commitTextUpdate:function(e,t,n){e.nodeValue=n},appendChild:function(e,t){e.appendChild(t)},appendChildToContainer:function(e,t){8===e.nodeType?e.parentNode.insertBefore(t,e):e.appendChild(t)},insertBefore:function(e,t,n){e.insertBefore(t,n)},insertInContainerBefore:function(e,t,n){8===e.nodeType?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},removeChildFromContainer:function(e,t){8===e.nodeType?e.parentNode.removeChild(t):e.removeChild(t)}},hydration:{canHydrateInstance:function(e,t){return 1!==e.nodeType||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e},canHydrateTextInstance:function(e,t){return""===t||3!==e.nodeType?null:e},getNextHydratableSibling:function(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e},getFirstHydratableChild:function(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e},hydrateInstance:function(e,t,n,r,o,a){return e[De]=a,e[Me]=n,ra(e,t,n,o,r)},hydrateTextInstance:function(e,t,n){return e[De]=n,oa(e,t)},didNotMatchHydratedContainerTextInstance:function(){},didNotMatchHydratedTextInstance:function(){},didNotHydrateContainerInstance:function(){},didNotHydrateInstance:function(){},didNotFindHydratableContainerInstance:function(){},didNotFindHydratableContainerTextInstance:function(){},didNotFindHydratableInstance:function(){},didNotFindHydratableTextInstance:function(){}},scheduleDeferredCallback:go,cancelDeferredCallback:vo}),ha=pa;function ma(e,t,n,r,o){fa(n)||J("200");var a=n._reactRootContainer;if(a){if("function"==typeof o){var i=o;o=function(){var e=pa.getPublicRootInstance(a._internalRoot);i.call(e)}}null!=e?a.legacy_renderSubtreeIntoContainer(e,t,o):a.render(t,o)}else{if(a=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new ca(e,!1,t)}(n,r),"function"==typeof o){var u=o;o=function(){var e=pa.getPublicRootInstance(a._internalRoot);u.call(e)}}pa.unbatchedUpdates(function(){null!=e?a.legacy_renderSubtreeIntoContainer(e,t,o):a.render(t,o)})}return pa.getPublicRootInstance(a._internalRoot)}function ga(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return fa(t)||J("200"),function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Yt,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}Tt=ha.batchedUpdates,St=ha.interactiveUpdates,_t=ha.flushInteractiveUpdates;var va={createPortal:ga,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(t)return pa.findHostInstance(t);"function"==typeof e.render?J("188"):J("213",Object.keys(e))},hydrate:function(e,t,n){return ma(null,e,t,!0,n)},render:function(e,t,n){return ma(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){return(null==e||void 0===e._reactInternalFiber)&&J("38"),ma(e,t,n,!1,r)},unmountComponentAtNode:function(e){return fa(e)||J("40"),!!e._reactRootContainer&&(pa.unbatchedUpdates(function(){ma(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return ga.apply(void 0,arguments)},unstable_batchedUpdates:pa.batchedUpdates,unstable_deferredUpdates:pa.deferredUpdates,flushSync:pa.flushSync,unstable_flushControlled:pa.flushControlled,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:_e,EventPluginRegistry:fe,EventPropagators:je,ReactControlledComponent:xt,ReactDOMComponentTree:Ne,ReactDOMEventListener:cr},unstable_createRoot:function(e,t){return new ca(e,!0,null!=t&&!0===t.hydrate)}};pa.injectIntoDevTools({findFiberByHostInstance:Ie,bundleType:0,version:"16.3.0",rendererPackageName:"react-dom"});var ya=Object.freeze({default:va}),ba=ya&&va||ya,wa=ba.default?ba.default:ba,ka=(e(function(e){}),e(function(e){!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=wa}));var Ca=function(e){return e instanceof Date},xa=36e5,Ta=6e4,Sa=2,_a=/[T ]/,Ea=/:/,Da=/^(\d{2})$/,Ma=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],Ia=/^(\d{4})/,Pa=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],Oa=/^-(\d{2})$/,Na=/^-?(\d{3})$/,Fa=/^-?(\d{2})-?(\d{2})$/,Ra=/^-?W(\d{2})$/,Ua=/^-?W(\d{2})-?(\d{1})$/,Ha=/^(\d{2}([.,]\d*)?)$/,Aa=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,La=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,za=/([Z+-].*)$/,Ya=/^(Z)$/,Wa=/^([+-])(\d{2})$/,ja=/^([+-])(\d{2}):?(\d{2})$/;function Va(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}var Ba=function(e,t){if(Ca(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?Sa:Number(n);var r=function(e){var t,n={},r=e.split(_a);if(Ea.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var o=za.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e),o=function(e,t){var n,r=Ma[t],o=Pa[t];if(n=Ia.exec(e)||o.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=Da.exec(e)||r.exec(e)){var i=n[1];return{year:100*parseInt(i,10),restDateString:e.slice(i.length)}}return{year:null}}(r.date,n),a=o.year,i=function(e,t){if(null===t)return null;var n,r,o,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=Oa.exec(e))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(t,o),r;if(n=Na.exec(e)){r=new Date(0);var i=parseInt(n[1],10);return r.setUTCFullYear(t,0,i),r}if(n=Fa.exec(e)){r=new Date(0),o=parseInt(n[1],10)-1;var u=parseInt(n[2],10);return r.setUTCFullYear(t,o,u),r}if(n=Ra.exec(e))return a=parseInt(n[1],10)-1,Va(t,a);if(n=Ua.exec(e)){a=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return Va(t,a,l)}return null}(o.restDateString,a);if(i){var u,l=i.getTime(),s=0;return r.time&&(s=function(e){var t,n,r;if(t=Ha.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*xa;if(t=Aa.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*xa+r*Ta;if(t=La.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return n%24*xa+r*Ta+1e3*o}return null}(r.time)),r.timezone?(c=r.timezone,u=(f=Ya.exec(c))?0:(f=Wa.exec(c))?(d=60*parseInt(f[2],10),"+"===f[1]?-d:d):(f=ja.exec(c))?(d=60*parseInt(f[2],10)+parseInt(f[3],10),"+"===f[1]?-d:d):0):(u=new Date(l+s).getTimezoneOffset(),u=new Date(l+s+u*Ta).getTimezoneOffset()),new Date(l+s+u*Ta)}var c,f,d;return new Date(e)};var $a=function(e,t){var n=Ba(e),r=Number(t);return n.setDate(n.getDate()+r),n};var Ka=function(e,t){var n=Ba(e).getTime(),r=Number(t);return new Date(n+r)},Qa=36e5;var qa=function(e,t){var n=Number(t);return Ka(e,n*Qa)};var Xa=function(e,t){var n=t&&Number(t.weekStartsOn)||0,r=Ba(e),o=r.getDay(),a=(o<n?7:0)+o-n;return r.setDate(r.getDate()-a),r.setHours(0,0,0,0),r};var Ga=function(e){return Xa(e,{weekStartsOn:1})};var Za=function(e){var t=Ba(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var o=Ga(r),a=new Date(0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);var i=Ga(a);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1};var Ja=function(e){var t=Za(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Ga(n)};var ei=function(e){var t=Ba(e);return t.setHours(0,0,0,0),t},ti=6e4,ni=864e5;var ri=function(e,t){var n=ei(e),r=ei(t),o=n.getTime()-n.getTimezoneOffset()*ti,a=r.getTime()-r.getTimezoneOffset()*ti;return Math.round((o-a)/ni)};var oi=function(e,t){var n=Ba(e),r=Number(t),o=ri(n,Ja(n)),a=new Date(0);return a.setFullYear(r,0,4),a.setHours(0,0,0,0),(n=Ja(a)).setDate(n.getDate()+o),n};var ai=function(e,t){var n=Number(t);return oi(e,Za(e)+n)},ii=6e4;var ui=function(e,t){var n=Number(t);return Ka(e,n*ii)};var li=function(e){var t=Ba(e),n=t.getFullYear(),r=t.getMonth(),o=new Date(0);return o.setFullYear(n,r+1,0),o.setHours(0,0,0,0),o.getDate()};var si=function(e,t){var n=Ba(e),r=Number(t),o=n.getMonth()+r,a=new Date(0);a.setFullYear(n.getFullYear(),o,1),a.setHours(0,0,0,0);var i=li(a);return n.setMonth(o,Math.min(i,n.getDate())),n};var ci=function(e,t){var n=Number(t);return si(e,3*n)};var fi=function(e,t){var n=Number(t);return Ka(e,1e3*n)};var di=function(e,t){var n=Number(t);return $a(e,7*n)};var pi=function(e,t){var n=Number(t);return si(e,12*n)};var hi=function(e,t,n,r){var o=Ba(e).getTime(),a=Ba(t).getTime(),i=Ba(n).getTime(),u=Ba(r).getTime();if(o>a||i>u)throw new Error("The start of the range cannot be after the end of the range");return o<u&&i<a};var mi=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,r,o=Ba(e).getTime();return t.forEach(function(e,t){var a=Ba(e),i=Math.abs(o-a.getTime());(void 0===n||i<r)&&(n=t,r=i)}),n};var gi=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,r,o=Ba(e).getTime();return t.forEach(function(e){var t=Ba(e),a=Math.abs(o-t.getTime());(void 0===n||a<r)&&(n=t,r=a)}),n};var vi=function(e,t){var n=Ba(e).getTime(),r=Ba(t).getTime();return n<r?-1:n>r?1:0};var yi=function(e,t){var n=Ba(e).getTime(),r=Ba(t).getTime();return n>r?-1:n<r?1:0},bi=6e4,wi=6048e5;var ki=function(e,t){var n=Ga(e),r=Ga(t),o=n.getTime()-n.getTimezoneOffset()*bi,a=r.getTime()-r.getTimezoneOffset()*bi;return Math.round((o-a)/wi)};var Ci=function(e,t){return Za(e)-Za(t)};var xi=function(e,t){var n=Ba(e),r=Ba(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())};var Ti=function(e){var t=Ba(e);return Math.floor(t.getMonth()/3)+1};var Si=function(e,t){var n=Ba(e),r=Ba(t);return 4*(n.getFullYear()-r.getFullYear())+(Ti(n)-Ti(r))},_i=6e4,Ei=6048e5;var Di=function(e,t,n){var r=Xa(e,n),o=Xa(t,n),a=r.getTime()-r.getTimezoneOffset()*_i,i=o.getTime()-o.getTimezoneOffset()*_i;return Math.round((a-i)/Ei)};var Mi=function(e,t){var n=Ba(e),r=Ba(t);return n.getFullYear()-r.getFullYear()};var Ii=function(e,t){var n=Ba(e),r=Ba(t),o=vi(n,r),a=Math.abs(ri(n,r));return n.setDate(n.getDate()-o*a),o*(a-(vi(n,r)===-o))};var Pi=function(e,t){var n=Ba(e),r=Ba(t);return n.getTime()-r.getTime()},Oi=36e5;var Ni=function(e,t){var n=Pi(e,t)/Oi;return n>0?Math.floor(n):Math.ceil(n)};var Fi=function(e,t){var n=Number(t);return ai(e,-n)};var Ri=function(e,t){var n=Ba(e),r=Ba(t),o=vi(n,r),a=Math.abs(Ci(n,r));return n=Fi(n,o*a),o*(a-(vi(n,r)===-o))},Ui=6e4;var Hi=function(e,t){var n=Pi(e,t)/Ui;return n>0?Math.floor(n):Math.ceil(n)};var Ai=function(e,t){var n=Ba(e),r=Ba(t),o=vi(n,r),a=Math.abs(xi(n,r));return n.setMonth(n.getMonth()-o*a),o*(a-(vi(n,r)===-o))};var Li=function(e,t){var n=Ai(e,t)/3;return n>0?Math.floor(n):Math.ceil(n)};var zi=function(e,t){var n=Pi(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)};var Yi=function(e,t){var n=Ii(e,t)/7;return n>0?Math.floor(n):Math.ceil(n)};var Wi=function(e,t){var n=Ba(e),r=Ba(t),o=vi(n,r),a=Math.abs(Mi(n,r));return n.setFullYear(n.getFullYear()-o*a),o*(a-(vi(n,r)===-o))};var ji=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];var Vi=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var r=ji.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")};var Bi=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],i=["am","pm"],u=["a.m.","p.m."],l={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return o[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){l[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}}),{formatters:l,formattingTokensRegExp:Vi(l)}},$i={distanceInWords:function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var o;return r=r||{},o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}}}(),format:Bi()},Ki=1440,Qi=2520,qi=43200,Xi=86400;var Gi=function(e,t,n){var r=n||{},o=yi(e,t),a=r.locale,i=$i.distanceInWords.localize;a&&a.distanceInWords&&a.distanceInWords.localize&&(i=a.distanceInWords.localize);var u,l,s={addSuffix:Boolean(r.addSuffix),comparison:o};o>0?(u=Ba(e),l=Ba(t)):(u=Ba(t),l=Ba(e));var c,f=zi(l,u),d=l.getTimezoneOffset()-u.getTimezoneOffset(),p=Math.round(f/60)-d;if(p<2)return r.includeSeconds?f<5?i("lessThanXSeconds",5,s):f<10?i("lessThanXSeconds",10,s):f<20?i("lessThanXSeconds",20,s):f<40?i("halfAMinute",null,s):i(f<60?"lessThanXMinutes":"xMinutes",1,s):0===p?i("lessThanXMinutes",1,s):i("xMinutes",p,s);if(p<45)return i("xMinutes",p,s);if(p<90)return i("aboutXHours",1,s);if(p<Ki)return i("aboutXHours",Math.round(p/60),s);if(p<Qi)return i("xDays",1,s);if(p<qi)return i("xDays",Math.round(p/Ki),s);if(p<Xi)return i("aboutXMonths",c=Math.round(p/qi),s);if((c=Ai(l,u))<12)return i("xMonths",Math.round(p/qi),s);var h=c%12,m=Math.floor(c/12);return h<3?i("aboutXYears",m,s):h<9?i("overXYears",m,s):i("almostXYears",m+1,s)},Zi=1440,Ji=43200,eu=525600;var tu=function(e){var t=Ba(e);return t.setHours(23,59,59,999),t};var nu=function(e,t){var n=t&&Number(t.weekStartsOn)||0,r=Ba(e),o=r.getDay(),a=6+(o<n?-7:0)-(o-n);return r.setDate(r.getDate()+a),r.setHours(23,59,59,999),r};var ru=function(e){var t=Ba(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t};var ou=function(e){var t=Ba(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n};var au=function(e){var t=Ba(e);return ri(t,ou(t))+1},iu=6048e5;var uu=function(e){var t=Ba(e),n=Ga(t).getTime()-Ja(t).getTime();return Math.round(n/iu)+1};var lu=function(e){if(Ca(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")};var su={M:function(e){return e.getMonth()+1},MM:function(e){return fu(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return fu(e.getDate(),2)},DDD:function(e){return au(e)},DDDD:function(e){return fu(au(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return uu(e)},WW:function(e){return fu(uu(e),2)},YY:function(e){return fu(e.getFullYear(),4).substr(2)},YYYY:function(e){return fu(e.getFullYear(),4)},GG:function(e){return String(Za(e)).substr(2)},GGGG:function(e){return Za(e)},H:function(e){return e.getHours()},HH:function(e){return fu(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return fu(su.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return fu(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return fu(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return fu(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return fu(e.getMilliseconds(),3)},Z:function(e){return cu(e.getTimezoneOffset(),":")},ZZ:function(e){return cu(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function cu(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),o=r%60;return n+fu(Math.floor(r/60),2)+t+fu(o,2)}function fu(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}var du=function(e){var t=Ba(e).getFullYear();return t%400==0||t%4==0&&t%100!=0};var pu=function(e){var t=Ba(e).getDay();return 0===t&&(t=7),t},hu=6048e5;var mu=864e5;var gu=function(e){var t=Ba(e);return t.setMinutes(0,0,0),t};var vu=function(e,t){var n=gu(e),r=gu(t);return n.getTime()===r.getTime()};var yu=function(e,t,n){var r=Xa(e,n),o=Xa(t,n);return r.getTime()===o.getTime()};var bu=function(e,t){return yu(e,t,{weekStartsOn:1})};var wu=function(e,t){var n=Ja(e),r=Ja(t);return n.getTime()===r.getTime()};var ku=function(e){var t=Ba(e);return t.setSeconds(0,0),t};var Cu=function(e,t){var n=ku(e),r=ku(t);return n.getTime()===r.getTime()};var xu=function(e,t){var n=Ba(e),r=Ba(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()};var Tu=function(e){var t=Ba(e),n=t.getMonth(),r=n-n%3;return t.setMonth(r,1),t.setHours(0,0,0,0),t};var Su=function(e,t){var n=Tu(e),r=Tu(t);return n.getTime()===r.getTime()};var _u=function(e){var t=Ba(e);return t.setMilliseconds(0),t};var Eu=function(e,t){var n=_u(e),r=_u(t);return n.getTime()===r.getTime()};var Du=function(e,t){var n=Ba(e),r=Ba(t);return n.getFullYear()===r.getFullYear()};var Mu=function(e,t){var n=t&&Number(t.weekStartsOn)||0,r=Ba(e),o=r.getDay(),a=6+(o<n?-7:0)-(o-n);return r.setHours(0,0,0,0),r.setDate(r.getDate()+a),r};var Iu=function(e,t){var n=Ba(e),r=Number(t),o=n.getFullYear(),a=n.getDate(),i=new Date(0);i.setFullYear(o,r,15),i.setHours(0,0,0,0);var u=li(i);return n.setMonth(r,Math.min(a,u)),n};var Pu={addDays:$a,addHours:qa,addISOYears:ai,addMilliseconds:Ka,addMinutes:ui,addMonths:si,addQuarters:ci,addSeconds:fi,addWeeks:di,addYears:pi,areRangesOverlapping:hi,closestIndexTo:mi,closestTo:gi,compareAsc:vi,compareDesc:yi,differenceInCalendarDays:ri,differenceInCalendarISOWeeks:ki,differenceInCalendarISOYears:Ci,differenceInCalendarMonths:xi,differenceInCalendarQuarters:Si,differenceInCalendarWeeks:Di,differenceInCalendarYears:Mi,differenceInDays:Ii,differenceInHours:Ni,differenceInISOYears:Ri,differenceInMilliseconds:Pi,differenceInMinutes:Hi,differenceInMonths:Ai,differenceInQuarters:Li,differenceInSeconds:zi,differenceInWeeks:Yi,differenceInYears:Wi,distanceInWords:Gi,distanceInWordsStrict:function(e,t,n){var r=n||{},o=yi(e,t),a=r.locale,i=$i.distanceInWords.localize;a&&a.distanceInWords&&a.distanceInWords.localize&&(i=a.distanceInWords.localize);var u,l,s,c={addSuffix:Boolean(r.addSuffix),comparison:o};o>0?(u=Ba(e),l=Ba(t)):(u=Ba(t),l=Ba(e));var f=Math[r.partialMethod?String(r.partialMethod):"floor"],d=zi(l,u),p=l.getTimezoneOffset()-u.getTimezoneOffset(),h=f(d/60)-p;if("s"===(s=r.unit?String(r.unit):h<1?"s":h<60?"m":h<Zi?"h":h<Ji?"d":h<eu?"M":"Y"))return i("xSeconds",d,c);if("m"===s)return i("xMinutes",h,c);if("h"===s)return i("xHours",f(h/60),c);if("d"===s)return i("xDays",f(h/Zi),c);if("M"===s)return i("xMonths",f(h/Ji),c);if("Y"===s)return i("xYears",f(h/eu),c);throw new Error("Unknown unit: "+s)},distanceInWordsToNow:function(e,t){return Gi(Date.now(),e,t)},eachDay:function(e,t,n){var r=Ba(e),o=Ba(t),a=void 0!==n?n:1,i=o.getTime();if(r.getTime()>i)throw new Error("The first date cannot be after the second date");var u=[],l=r;for(l.setHours(0,0,0,0);l.getTime()<=i;)u.push(Ba(l)),l.setDate(l.getDate()+a);return u},endOfDay:tu,endOfHour:function(e){var t=Ba(e);return t.setMinutes(59,59,999),t},endOfISOWeek:function(e){return nu(e,{weekStartsOn:1})},endOfISOYear:function(e){var t=Za(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var r=Ga(n);return r.setMilliseconds(r.getMilliseconds()-1),r},endOfMinute:function(e){var t=Ba(e);return t.setSeconds(59,999),t},endOfMonth:ru,endOfQuarter:function(e){var t=Ba(e),n=t.getMonth(),r=n-n%3+3;return t.setMonth(r,0),t.setHours(23,59,59,999),t},endOfSecond:function(e){var t=Ba(e);return t.setMilliseconds(999),t},endOfToday:function(){return tu(new Date)},endOfTomorrow:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(23,59,59,999),o},endOfWeek:nu,endOfYear:function(e){var t=Ba(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t},endOfYesterday:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(23,59,59,999),o},format:function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=(n||{}).locale,a=$i.format.formatters,i=$i.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(a=o.format.formatters,o.format.formattingTokensRegExp&&(i=o.format.formattingTokensRegExp));var u=Ba(e);return lu(u)?function(e,t,n){var r,o,a,i=e.match(n),u=i.length;for(r=0;r<u;r++)o=t[i[r]]||su[i[r]],i[r]=o||((a=i[r]).match(/\[[\s\S]/)?a.replace(/^\[|]$/g,""):a.replace(/\\/g,""));return function(e){for(var t="",n=0;n<u;n++)i[n]instanceof Function?t+=i[n](e,su):t+=i[n];return t}}(r,a,i)(u):"Invalid Date"},getDate:function(e){return Ba(e).getDate()},getDay:function(e){return Ba(e).getDay()},getDayOfYear:au,getDaysInMonth:li,getDaysInYear:function(e){return du(e)?366:365},getHours:function(e){return Ba(e).getHours()},getISODay:pu,getISOWeek:uu,getISOWeeksInYear:function(e){var t=Ja(e),n=Ja(di(t,60)).valueOf()-t.valueOf();return Math.round(n/hu)},getISOYear:Za,getMilliseconds:function(e){return Ba(e).getMilliseconds()},getMinutes:function(e){return Ba(e).getMinutes()},getMonth:function(e){return Ba(e).getMonth()},getOverlappingDaysInRanges:function(e,t,n,r){var o=Ba(e).getTime(),a=Ba(t).getTime(),i=Ba(n).getTime(),u=Ba(r).getTime();if(o>a||i>u)throw new Error("The start of the range cannot be after the end of the range");if(!(o<u&&i<a))return 0;var l=(u>a?a:u)-(i<o?o:i);return Math.ceil(l/mu)},getQuarter:Ti,getSeconds:function(e){return Ba(e).getSeconds()},getTime:function(e){return Ba(e).getTime()},getYear:function(e){return Ba(e).getFullYear()},isAfter:function(e,t){var n=Ba(e),r=Ba(t);return n.getTime()>r.getTime()},isBefore:function(e,t){var n=Ba(e),r=Ba(t);return n.getTime()<r.getTime()},isDate:Ca,isEqual:function(e,t){var n=Ba(e),r=Ba(t);return n.getTime()===r.getTime()},isFirstDayOfMonth:function(e){return 1===Ba(e).getDate()},isFriday:function(e){return 5===Ba(e).getDay()},isFuture:function(e){return Ba(e).getTime()>(new Date).getTime()},isLastDayOfMonth:function(e){var t=Ba(e);return tu(t).getTime()===ru(t).getTime()},isLeapYear:du,isMonday:function(e){return 1===Ba(e).getDay()},isPast:function(e){return Ba(e).getTime()<(new Date).getTime()},isSameDay:function(e,t){var n=ei(e),r=ei(t);return n.getTime()===r.getTime()},isSameHour:vu,isSameISOWeek:bu,isSameISOYear:wu,isSameMinute:Cu,isSameMonth:xu,isSameQuarter:Su,isSameSecond:Eu,isSameWeek:yu,isSameYear:Du,isSaturday:function(e){return 6===Ba(e).getDay()},isSunday:function(e){return 0===Ba(e).getDay()},isThisHour:function(e){return vu(new Date,e)},isThisISOWeek:function(e){return bu(new Date,e)},isThisISOYear:function(e){return wu(new Date,e)},isThisMinute:function(e){return Cu(new Date,e)},isThisMonth:function(e){return xu(new Date,e)},isThisQuarter:function(e){return Su(new Date,e)},isThisSecond:function(e){return Eu(new Date,e)},isThisWeek:function(e,t){return yu(new Date,e,t)},isThisYear:function(e){return Du(new Date,e)},isThursday:function(e){return 4===Ba(e).getDay()},isToday:function(e){return ei(e).getTime()===ei(new Date).getTime()},isTomorrow:function(e){var t=new Date;return t.setDate(t.getDate()+1),ei(e).getTime()===ei(t).getTime()},isTuesday:function(e){return 2===Ba(e).getDay()},isValid:lu,isWednesday:function(e){return 3===Ba(e).getDay()},isWeekend:function(e){var t=Ba(e).getDay();return 0===t||6===t},isWithinRange:function(e,t,n){var r=Ba(e).getTime(),o=Ba(t).getTime(),a=Ba(n).getTime();if(o>a)throw new Error("The start of the range cannot be after the end of the range");return r>=o&&r<=a},isYesterday:function(e){var t=new Date;return t.setDate(t.getDate()-1),ei(e).getTime()===ei(t).getTime()},lastDayOfISOWeek:function(e){return Mu(e,{weekStartsOn:1})},lastDayOfISOYear:function(e){var t=Za(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var r=Ga(n);return r.setDate(r.getDate()-1),r},lastDayOfMonth:function(e){var t=Ba(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t},lastDayOfQuarter:function(e){var t=Ba(e),n=t.getMonth(),r=n-n%3+3;return t.setMonth(r,0),t.setHours(0,0,0,0),t},lastDayOfWeek:Mu,lastDayOfYear:function(e){var t=Ba(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(0,0,0,0),t},max:function(){var e=Array.prototype.slice.call(arguments).map(function(e){return Ba(e)}),t=Math.max.apply(null,e);return new Date(t)},min:function(){var e=Array.prototype.slice.call(arguments).map(function(e){return Ba(e)}),t=Math.min.apply(null,e);return new Date(t)},parse:Ba,setDate:function(e,t){var n=Ba(e),r=Number(t);return n.setDate(r),n},setDay:function(e,t,n){var r=n&&Number(n.weekStartsOn)||0,o=Ba(e),a=Number(t),i=o.getDay();return $a(o,((a%7+7)%7<r?7:0)+a-i)},setDayOfYear:function(e,t){var n=Ba(e),r=Number(t);return n.setMonth(0),n.setDate(r),n},setHours:function(e,t){var n=Ba(e),r=Number(t);return n.setHours(r),n},setISODay:function(e,t){var n=Ba(e),r=Number(t),o=pu(n);return $a(n,r-o)},setISOWeek:function(e,t){var n=Ba(e),r=Number(t),o=uu(n)-r;return n.setDate(n.getDate()-7*o),n},setISOYear:oi,setMilliseconds:function(e,t){var n=Ba(e),r=Number(t);return n.setMilliseconds(r),n},setMinutes:function(e,t){var n=Ba(e),r=Number(t);return n.setMinutes(r),n},setMonth:Iu,setQuarter:function(e,t){var n=Ba(e),r=Number(t)-(Math.floor(n.getMonth()/3)+1);return Iu(n,n.getMonth()+3*r)},setSeconds:function(e,t){var n=Ba(e),r=Number(t);return n.setSeconds(r),n},setYear:function(e,t){var n=Ba(e),r=Number(t);return n.setFullYear(r),n},startOfDay:ei,startOfHour:gu,startOfISOWeek:Ga,startOfISOYear:Ja,startOfMinute:ku,startOfMonth:function(e){var t=Ba(e);return t.setDate(1),t.setHours(0,0,0,0),t},startOfQuarter:Tu,startOfSecond:_u,startOfToday:function(){return ei(new Date)},startOfTomorrow:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(0,0,0,0),o},startOfWeek:Xa,startOfYear:ou,startOfYesterday:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(0,0,0,0),o},subDays:function(e,t){var n=Number(t);return $a(e,-n)},subHours:function(e,t){var n=Number(t);return qa(e,-n)},subISOYears:Fi,subMilliseconds:function(e,t){var n=Number(t);return Ka(e,-n)},subMinutes:function(e,t){var n=Number(t);return ui(e,-n)},subMonths:function(e,t){var n=Number(t);return si(e,-n)},subQuarters:function(e,t){var n=Number(t);return ci(e,-n)},subSeconds:function(e,t){var n=Number(t);return fi(e,-n)},subWeeks:function(e,t){var n=Number(t);return di(e,-n)},subYears:function(e,t){var n=Number(t);return pi(e,-n)}};const Ou=Symbol("Mint.Equals"),Nu=(e,t)=>null!=e&&void 0!=e&&e[Ou]?e[Ou](t):null!=t&&void 0!=t&&t[Ou]?t[Ou](e):(console.warn(`Could not compare "${e}" with "${t}" comparing with ===`),e===t);class Fu{constructor(e){for(let t in e)this[t]=e[t]}[Ou](e){if(!(e instanceof Fu))return!1;if(Object.keys(this).length!==Object.keys(e).length)return!1;for(let t in this)if(!Nu(e[t],this[t]))return!1;return!0}}class Ru{}class Uu extends Ru{[Ou](e){return e instanceof Uu}}class Hu extends Ru{constructor(e){super(),this.value=e}[Ou](e){return e instanceof Hu&&Nu(e.value,this.value)}}class Au{constructor(e){this.value=e}[Ou](e){return e instanceof this.constructor&&Nu(e.value,this.value)}}var Lu=e(function(e,t){var n=function(){var e=function(e,t,n,r){for(n=n||{},r=e.length;r--;n[e[r]]=t);return n},t=[1,9],n=[1,10],r=[1,11],o=[1,12],a=[5,11,12,13,14,15],i={trace:function(){},yy:{},symbols_:{error:2,root:3,expressions:4,EOF:5,expression:6,optional:7,literal:8,splat:9,param:10,"(":11,")":12,LITERAL:13,SPLAT:14,PARAM:15,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"(",12:")",13:"LITERAL",14:"SPLAT",15:"PARAM"},productions_:[0,[3,2],[3,1],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,1],[9,1],[10,1]],performAction:function(e,t,n,r,o,a,i){var u=a.length-1;switch(o){case 1:return new r.Root({},[a[u-1]]);case 2:return new r.Root({},[new r.Literal({value:""})]);case 3:this.$=new r.Concat({},[a[u-1],a[u]]);break;case 4:case 5:this.$=a[u];break;case 6:this.$=new r.Literal({value:a[u]});break;case 7:this.$=new r.Splat({name:a[u]});break;case 8:this.$=new r.Param({name:a[u]});break;case 9:this.$=new r.Optional({},[a[u-1]]);break;case 10:this.$=e;break;case 11:case 12:this.$=e.slice(1)}},table:[{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:t,13:n,14:r,15:o},{1:[3]},{5:[1,13],6:14,7:5,8:6,9:7,10:8,11:t,13:n,14:r,15:o},{1:[2,2]},e(a,[2,4]),e(a,[2,5]),e(a,[2,6]),e(a,[2,7]),e(a,[2,8]),{4:15,6:4,7:5,8:6,9:7,10:8,11:t,13:n,14:r,15:o},e(a,[2,10]),e(a,[2,11]),e(a,[2,12]),{1:[2,1]},e(a,[2,3]),{6:14,7:5,8:6,9:7,10:8,11:t,12:[1,16],13:n,14:r,15:o},e(a,[2,9])],defaultActions:{3:[2,2],13:[2,1]},parseError:function(e,t){if(!t.recoverable){function n(e,t){this.message=e,this.hash=t}throw n.prototype=Error,new n(e,t)}this.trace(e)},parse:function(e){var t=this,n=[0],r=[null],o=[],a=this.table,i="",u=0,l=0,s=o.slice.call(arguments,1),c=Object.create(this.lexer),f={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(f.yy[d]=this.yy[d]);c.setInput(e,f.yy),f.yy.lexer=c,f.yy.parser=this,void 0===c.yylloc&&(c.yylloc={});var p=c.yylloc;o.push(p);var h=c.options&&c.options.ranges;"function"==typeof f.yy.parseError?this.parseError=f.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var m,g,v,y,b,w,k,C,x,T=function(){var e;return"number"!=typeof(e=c.lex()||1)&&(e=t.symbols_[e]||e),e},S={};;){if(v=n[n.length-1],this.defaultActions[v]?y=this.defaultActions[v]:(null!==m&&void 0!==m||(m=T()),y=a[v]&&a[v][m]),void 0===y||!y.length||!y[0]){var _="";for(w in x=[],a[v])this.terminals_[w]&&w>2&&x.push("'"+this.terminals_[w]+"'");_=c.showPosition?"Parse error on line "+(u+1)+":\n"+c.showPosition()+"\nExpecting "+x.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(u+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(_,{text:c.match,token:this.terminals_[m]||m,line:c.yylineno,loc:p,expected:x})}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+m);switch(y[0]){case 1:n.push(m),r.push(c.yytext),o.push(c.yylloc),n.push(y[1]),m=null,g?(m=g,g=null):(l=c.yyleng,i=c.yytext,u=c.yylineno,p=c.yylloc);break;case 2:if(k=this.productions_[y[1]][1],S.$=r[r.length-k],S._$={first_line:o[o.length-(k||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(k||1)].first_column,last_column:o[o.length-1].last_column},h&&(S._$.range=[o[o.length-(k||1)].range[0],o[o.length-1].range[1]]),void 0!==(b=this.performAction.apply(S,[i,l,u,f.yy,y[1],r,o].concat(s))))return b;k&&(n=n.slice(0,-1*k*2),r=r.slice(0,-1*k),o=o.slice(0,-1*k)),n.push(this.productions_[y[1]][0]),r.push(S.$),o.push(S._$),C=a[n[n.length-2]][n[n.length-1]],n.push(C);break;case 3:return!0}}return!0}},u={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var n,r,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),(r=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in o)this[a]=o[a];return!1}return!1},next:function(){if(this.done)return this.EOF;var e,t,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),a=0;a<o.length;a++)if((n=this._input.match(this.rules[o[a]]))&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(!1!==(e=this.test_match(n,o[a])))return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,o[r]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(e,t,n,r){switch(n){case 0:return"(";case 1:return")";case 2:return"SPLAT";case 3:return"PARAM";case 4:case 5:return"LITERAL";case 6:return"EOF"}},rules:[/^(?:\()/,/^(?:\))/,/^(?:\*+\w+)/,/^(?::+\w+)/,/^(?:[\w%\-~\n]+)/,/^(?:.)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};function l(){this.yy={}}return i.lexer=u,l.prototype=i,i.Parser=l,new l}();t.parser=n,t.Parser=n.Parser,t.parse=function(){return n.parse.apply(n,arguments)}});Lu.parser,Lu.Parser,Lu.parse;function zu(e){return function(t,n){return{displayName:e,props:t,children:n||[]}}}var Yu={Root:zu("Root"),Concat:zu("Concat"),Literal:zu("Literal"),Splat:zu("Splat"),Param:zu("Param"),Optional:zu("Optional")},Wu=Lu.parser;Wu.yy=Yu;var ju=Wu,Vu=Object.keys(Yu);var Bu=function(e){return Vu.forEach(function(t){if(void 0===e[t])throw new Error("No handler defined for "+t.displayName)}),{visit:function(e,t){return this.handlers[e.displayName].call(this,e,t)},handlers:e}},$u=/[\-{}\[\]+?.,\\\^$|#\s]/g;function Ku(e){this.captures=e.captures,this.re=e.re}Ku.prototype.match=function(e){var t=this.re.exec(e),n={};if(t)return this.captures.forEach(function(e,r){void 0===t[r+1]?n[e]=void 0:n[e]=decodeURIComponent(t[r+1])}),n};var Qu=Bu({Concat:function(e){return e.children.reduce(function(e,t){var n=this.visit(t);return{re:e.re+n.re,captures:e.captures.concat(n.captures)}}.bind(this),{re:"",captures:[]})},Literal:function(e){return{re:e.props.value.replace($u,"\\$&"),captures:[]}},Splat:function(e){return{re:"([^?]*?)",captures:[e.props.name]}},Param:function(e){return{re:"([^\\/\\?]+)",captures:[e.props.name]}},Optional:function(e){var t=this.visit(e.children[0]);return{re:"(?:"+t.re+")?",captures:t.captures}},Root:function(e){var t=this.visit(e.children[0]);return new Ku({re:new RegExp("^"+t.re+"(?=\\?|$)"),captures:t.captures})}}),qu=Bu({Concat:function(e,t){var n=e.children.map(function(e){return this.visit(e,t)}.bind(this));return!n.some(function(e){return!1===e})&&n.join("")},Literal:function(e){return decodeURI(e.props.value)},Splat:function(e,t){return!!t[e.props.name]&&t[e.props.name]},Param:function(e,t){return!!t[e.props.name]&&t[e.props.name]},Optional:function(e,t){var n=this.visit(e.children[0],t);return n||""},Root:function(e,t){t=t||{};var n=this.visit(e.children[0],t);return!!n&&encodeURI(n)}});function Xu(e){var t;if(t=this?this:Object.create(Xu.prototype),void 0===e)throw new Error("A route spec is required");return t.spec=e,t.ast=ju.parse(e),t}Xu.prototype=Object.create(null),Xu.prototype.match=function(e){var t=Qu.visit(this.ast).match(e);return t||!1},Xu.prototype.reverse=function(e){return qu.visit(this.ast,e)};var Gu=Xu;return Symbol.prototype[Ou]=function(e){return this.valueOf()===e},Date.prototype[Ou]=function(e){return+this==+e},Number.prototype[Ou]=function(e){return this.valueOf()===e},Boolean.prototype[Ou]=function(e){return this.valueOf()===e},String.prototype[Ou]=function(e){return this.valueOf()===e},Array.prototype[Ou]=function(e){return this.length===e.length&&(0==this.length||!!this.filter((t,n)=>Nu(t,e[n])).length)},FormData.prototype[Ou]=function(e){const t=Array.from(this.keys()),n=Array.from(e.keys());return!!Nu(t,n)&&(0==t.length||!!t.filter(t=>{const n=Array.from(this.getAll(t).sort()),r=Array.from(e.getAll(t).sort());return Nu(n,r)}).length)},{program:new class{constructor(){this.root=document.createElement("div"),document.body.appendChild(this.root),this.routes=[],window.addEventListener("popstate",()=>{this.handlePopState()})}handlePopState(){for(let e of this.routes)if("*"===e.path)e.handler();else{let t=new Gu(e.path).match(window.location.pathname+window.location.search);if(t){let n=e.mapping.map(e=>t[e]);e.mapping.reduce((e,n)=>(e[n]=t[n],e),{}),e.handler.apply(null,n);break}}}render(e){void 0!==e&&(this.handlePopState(),ka.render(j.createElement(e),this.root))}addRoutes(e){this.routes=this.routes.concat(e)}},normalizeEvent:e=>new Proxy(e,{get:function(e,t){if(t in e)return e[t];switch(t){case"clipboardData":return new DataTransfer;case"data":return"";case"altKey":return!1;case"charCode":return-1;case"ctrlKey":return!1;case"key":return"";case"keyCode":return-1;case"locale":return"";case"location":return-1;case"metaKey":case"repeat":case"shiftKey":return!1;case"which":case"button":case"buttons":case"clientX":case"clientY":case"pageX":case"pageY":case"screenX":case"screenY":case"detail":case"deltaMode":case"deltaX":case"deltaY":case"deltaZ":return-1;case"animationName":case"pseudoElement":return"";case"elapsedTime":return-1;case"propertyName":return"";default:return}}}),insertStyles:e=>{let t=document.createElement("style");document.head.appendChild(t),t.innerHTML=e},navigate:e=>{window.location.pathname!==e&&(window.history.pushState({},"",e),dispatchEvent(new PopStateEvent("popstate")))},compare:Nu,update:(e,t)=>new Fu(Object.assign(Object.create(null),e,t)),Component:j.PureComponent,ReactDOM:ka,TestContext:class{constructor(e,t){this.teardown=t,this.subject=e,this.steps=[]}async run(){let e;try{e=await new Promise(this.next.bind(this))}finally{this.teardown&&this.teardown()}return e}async next(e,t){requestAnimationFrame(async()=>{let n=this.steps.shift();if(n)try{this.subject=await n(this.subject)}catch(e){return t(e)}this.steps.length?this.next(e,t):e(this.subject)})}step(e){return this.steps.push(e),this}},Provider:class{constructor(){this.subscriptions=new Map}_subscribe(e,t){this.subscriptions.has(e)||(this.subscriptions.set(e,t),this._update())}_unsubscribe(e){this.subscriptions.has(e)&&(this.subscriptions.delete(e),this._update())}_update(){0==this.subscriptions.size?this.detach():this.attach()}get _subscriptions(){let e=[];for(let t of this.subscriptions.values())e.push(t);return e}attach(){}detach(){}},Store:class{constructor(){this.listeners=new Set,this.props={}}setState(e,t){this.props=Object.assign({},this.state,e);for(let e of this.listeners)e.forceUpdate();t()}_subscribe(e){this.listeners.add(e)}_unsubscribe(e){this.listeners.delete(e)}},Nothing:Uu,Just:Hu,Err:class extends Au{},Ok:class extends Au{},DateFNS:Pu,Record:Fu,createPortal:ka.createPortal,createElement:j.createElement,Symbols:{Equals:Ou}}}();
(() => {
  const _normalizeEvent = Mint.normalizeEvent;
  const _createElement = Mint.createElement;
  const _createPortal = Mint.createPortal;
  const _insertStyles = Mint.insertStyles;
  const _navigate = Mint.navigate;
  const _compare = Mint.compare;
  const _program = Mint.program;
  const _update = Mint.update;

  const TestContext = Mint.TestContext;
  const Component = Mint.Component;
  const ReactDOM = Mint.ReactDOM;
  const Provider = Mint.Provider;
  const Nothing = Mint.Nothing;
  const DateFNS = Mint.DateFNS;
  const Record = Mint.Record;
  const Store = Mint.Store;
  const Just = Mint.Just;
  const Err = Mint.Err;
  const Ok = Mint.Ok;

  class DoError extends Error {}

  $Http_Error_NetworkError = Symbol(`Http_Error_NetworkError`)
$Http_Error_Aborted = Symbol(`Http_Error_Aborted`)
$Http_Error_Timeout = Symbol(`Http_Error_Timeout`)
$Http_Error_BadUrl = Symbol(`Http_Error_BadUrl`)

$Storage_Error_SecurityError = Symbol(`Storage_Error_SecurityError`)
$Storage_Error_QuotaExceeded = Symbol(`Storage_Error_QuotaExceeded`)
$Storage_Error_Unkown = Symbol(`Storage_Error_Unkown`)

$Object_Error_MissingObjectKey = Symbol(`Object_Error_MissingObjectKey`)
$Object_Error_NotAValidTime = Symbol(`Object_Error_NotAValidTime`)
$Object_Error_NotABoolean = Symbol(`Object_Error_NotABoolean`)
$Object_Error_NotAnObject = Symbol(`Object_Error_NotAnObject`)
$Object_Error_NotANumber = Symbol(`Object_Error_NotANumber`)
$Object_Error_NotAString = Symbol(`Object_Error_NotAString`)
$Object_Error_NotAnArray = Symbol(`Object_Error_NotAnArray`)
$Object_Error_Unkown = Symbol(`Object_Error_Unkown`)

const $Provider_Mouse = new (class extends Provider {
moves(event) {
  return $Array.do($Array.map(((func) => {
  return func(event)
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
        const clicks = this._clicks || (this._clicks = this.clicks.bind(this))
        const moves = this._moves || (this._moves = this.moves.bind(this))
        const ups = this._ups || (this._ups = this.ups.bind(this))

        window.addEventListener("click", clicks, true)
        window.addEventListener("mousemove", moves)
        window.addEventListener("mouseup", ups)
      })()
}

detach() {
  return (() => {
        window.removeEventListener("click", this._clicks, true)
        window.removeEventListener("mousemove", this._moves)
        window.removeEventListener("mouseup", this._ups)
      })()
}
})

const $Provider_AnimationFrame = new (class extends Provider {
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

const $Provider_Scroll = new (class extends Provider {
scrolls(event) {
  return $Array.do($Array.map(((subscription) => {
  return subscription(event)
  }), $Array.map(((subscription) => {
  return subscription.scrolls
  }), this._subscriptions)))
}

attach() {
  return (() => {
        const scrolls = this._scrolls || (this._scrolls = this.scrolls.bind(this))

        window.addEventListener("scroll", scrolls)
      })()
}

detach() {
  return (() => {
        window.removeEventListener("mousemove", this._scrolls)
      })()
}
})

const $Provider_Tick = new (class extends Provider {
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

_program.addRoutes([{
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

let actualPage = await $Maybe.withDefault(0, $Number.fromString(page))

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
    return new Record({
      date: $Time.now(),
      description: ``,
      version: ``,
      assets: [],
      url: ``
    })
  }

  decodeMany(input) {
    return $Object_Decode.array($Version.decode, input)
  }

  decode(input) {
    return (() => { let _0 = $Object_Decode.field(`tag_name`, $Object_Decode.string, input)

             if (_0 instanceof Err) {
                let _error = _0.value
                let error = _error
     return $Result.error(error)
             }

             let version = _0.value

    let _1 = $Object_Decode.field(`published_at`, $Object_Decode.time, input)

             if (_1 instanceof Err) {
                let _error = _1.value
                let error = _error
     return $Result.error(error)
             }

             let date = _1.value

    let _2 = $Object_Decode.field(`html_url`, $Object_Decode.string, input)

             if (_2 instanceof Err) {
                let _error = _2.value
                let error = _error
     return $Result.error(error)
             }

             let url = _2.value

    let _3 = $Object_Decode.field(`body`, $Object_Decode.string, input)

             if (_3 instanceof Err) {
                let _error = _3.value
                let error = _error
     return $Result.error(error)
             }

             let description = _3.value

    let _4 = $Object_Decode.field(`assets`, $Asset.decodeMany, input)

             if (_4 instanceof Err) {
                let _error = _4.value
                let error = _error
     return $Result.error(error)
             }

             let assets = _4.value

    return $Result.ok(new Record({
      description: description,
      version: version,
      assets: assets,
      date: date,
      url: url
    })) })()
  }
})

const $Asset = new(class {
  decodeMany(input) {
    return $Object_Decode.array($Asset.decode, input)
  }

  decode(input) {
    return (() => { let _0 = $Object_Decode.field(`browser_download_url`, $Object_Decode.string, input)

             if (_0 instanceof Err) {
                let _error = _0.value
                let error = _error
     return $Result.error(error)
             }

             let url = _0.value

    let _1 = $Object_Decode.field(`name`, $Object_Decode.string, input)

             if (_1 instanceof Err) {
                let _error = _1.value
                let error = _error
     return $Result.error(error)
             }

             let name = _1.value

    return $Result.ok(new Record({
      name: name,
      url: url
    })) })()
  }
})

const $Promise = new(class {
  reject(input) {
    return Promise.reject(input)
  }

  resolve(input) {
    return Promise.resolve(input)
  }

  wrap(method, input) {
    return method(input)
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

const $Html_Event = new(class {
  stopPropagation(event) {
    return event.stopPropagation()
  }

  isPropagationStopped(event) {
    return event.isPropagationStopped()
  }

  preventDefault(event) {
    return event.preventDefault()
  }
})

const $Regexp = new(class {
  create(input) {
    return new RegExp(input)
  }

  createWithOptions(input, options) {
    return (() => {
          let flags = ""

          if (options.caseInsensitive) { flags += "i" }
          if (options.multiline) { flags += "m" }
          if (options.unicode) { flags += "u" }
          if (options.global) { flags += "g" }
          if (options.sticky) { flags += "y" }

          return new RegExp(input, flags)
        })()
  }

  toString(regexp) {
    return regexp.toString()
  }

  escape(input) {
    return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }

  split(input, regexp) {
    return input.split(regexp)
  }

  replace(input, replacer, regexp) {
    return (() => {
          let index = 0

          return input.replace(regexp, function() {
            const args =
              Array.from(arguments)

            const match =
              args.shift()

            const submatches =
              args.slice(0, -2)

            index += 1

            return replacer({
              submatches, submatches,
              index: index,
              match: match
            })
          })
        })()
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

const $Uid = new(class {
  generate() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
          .replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4)
              .toString(16))
  }
})

const $Json = new(class {
  parse(input) {
    return (() => {
         	try {
         		return new Just(JSON.parse(input))
         	} catch (error) {
         		return new Nothing()
        	}
        })()
  }

  stringify(input) {
    return JSON.stringify(input)
  }
})

const $Html = new(class {
  empty() {
    return false
  }
})

const $String = new(class {
  toLowerCase(string) {
    return string.toLowerCase()
  }

  toUpperCase(string) {
    return string.toUpperCase()
  }

  reverse(string) {
    return [...string].reverse().join('')
  }

  isEmpty(string) {
    return _compare(string, ``)
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

  repeat(count, string) {
    return string.repeat(count)
  }

  join(separator, array) {
    return array.join(separator)
  }

  concat(array) {
    return $String.join(``, array)
  }

  isAnagarm(string1, string2) {
    return (() => {
          const normalize = string =>
            string
              .toLowerCase()
              .replace(/[^a-z0-9]/gi, '')
              .split('')
              .sort()
              .join('');

          return normalize(string1) === normalize(string2);
        })()
  }
})

const $Time = new(class {
  fromIso(raw) {
    return (() => {
          try {
            return new Just(new Date(raw))
          } catch (error) {
            return new Nothing()
          }
        })()
  }

  toIso(date) {
    return date.toISOString()
  }

  now() {
    return new Date()
  }

  today() {
    return (() => {
          const date = new Date()

          return new Date(Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate()
          ))
        })()
  }

  from(year, month, day) {
    return new Date(Date.UTC(year, month - 1, day))
  }

  day(date) {
    return date.getUTCDate()
  }

  month(date) {
    return (date.getUTCMonth() + 1)
  }

  year(date) {
    return date.getUTCFullYear()
  }

  format(pattern, date) {
    return DateFNS.format(date, pattern)
  }

  startOf(what, date) {
    return (() => {
          switch (what) {
            case 'month':
              return DateFNS.startOfMonth(date)
            case 'week':
              return DateFNS.startOfWeek(date, { weekStartsOn: 1 })
            case 'day':
              return DateFNS.startOfDay(date)
            default:
              return date
          }
        })()
  }

  endOf(what, date) {
    return (() => {
          switch (what) {
            case 'month':
              return DateFNS.endOfMonth(date)
            case 'week':
              return DateFNS.endOfWeek(date, { weekStartsOn: 1 })
            case 'day':
              return DateFNS.endOfDay(date)
            default:
              return date
          }
        })()
  }

  range(from, to) {
    return DateFNS.eachDay(from, to)
  }

  nextMonth(date) {
    return (() => {
          return DateFNS.addMonths(date, 1)
        })()
  }

  previousMonth(date) {
    return (() => {
          return DateFNS.addMonths(date, -1)
        })()
  }

  relative(other, now) {
    return (() => {
          return DateFNS.distanceInWordsStrict(now, other, { addSuffix: true })
        })()
  }
})

const $File = new(class {
  fromString(contents, name, type) {
    return new File([contents], name, { type: type })
  }

  name(file) {
    return file.name
  }

  size(file) {
    return file.size
  }

  mimeType(file) {
    return file.type
  }

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

const $Http = new(class {
  empty() {
    return new Record({
      withCredentials: false,
      method: `GET`,
      headers: [],
      body: null,
      url: ``
    })
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
    return _update(request, { body: value })
  }

  formDataBody(value, request) {
    return _update(request, { body: value })
  }

  method(value, request) {
    return _update(request, { method: value })
  }

  withCredentials(value, request) {
    return _update(request, { withCredentials: value })
  }

  url(value, request) {
    return _update(request, { url: value })
  }

  header(key, value, request) {
    return _update(request, { headers: $Array.push(new Record({ value: value, key: key }), request.headers) })
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
          } catch (error) {
            delete this._requests[uid]

            reject({
              type: $Http_Error_BadUrl,
              status: xhr.status,
              url: request.url
            })
          }

          request.headers.forEach((item) => {
            xhr.setRequestHeader(item.key, item.value)
          })

          xhr.addEventListener('error', (event) => {
            delete this._requests[uid]

            reject({
              type: $Http_Error_NetworkError,
              status: xhr.status,
              url: request.url
            })
          })

          xhr.addEventListener('timeout', (event) => {
            delete this._requests[uid]

            reject({
              type: $Http_Error_Timeout,
              status: xhr.status,
              url: request.url
            })
          })

          xhr.addEventListener('load', (event) => {
            delete this._requests[uid]

            resolve({ body: xhr.responseText, status: xhr.status })
          })

          xhr.addEventListener('abort', (event) => {
            delete this._requests[uid]

            reject({
              type: $Http_Error_Aborted,
              status: xhr.status,
              url: request.url
            })
          })

          xhr.send(request.body)
        })
  }

  send(request) {
    return $Http.sendWithID($Uid.generate(), request)
  }
})

const $Storage_Local = new(class {
  set(key, value) {
    return $Storage_Common.set(localStorage, key, value)
  }

  get(key) {
    return $Storage_Common.get(localStorage, key)
  }

  remove(key) {
    return $Storage_Common.remove(localStorage, key)
  }

  clear() {
    return $Storage_Common.clear(localStorage)
  }

  size() {
    return $Storage_Common.size(localStorage)
  }

  keys() {
    return $Storage_Common.keys(localStorage)
  }
})

const $Storage_Session = new(class {
  set(key, value) {
    return $Storage_Common.set(sessionStorage, key, value)
  }

  get(key) {
    return $Storage_Common.get(sessionStorage, key)
  }

  remove(key) {
    return $Storage_Common.remove(sessionStorage, key)
  }

  clear() {
    return $Storage_Common.clear(sessionStorage)
  }

  size() {
    return $Storage_Common.size(sessionStorage)
  }

  keys() {
    return $Storage_Common.keys(sessionStorage)
  }
})

const $Storage_Common = new(class {
  set(storage, key, value) {
    return (() => {
          try {
            storage.setItem(key, value)
            return new Ok(null)
          } catch (error) {
            switch(error.name) {
              case 'SecurityError':
                return new Err($Storage_Error_SecurityError)
              case 'QUOTA_EXCEEDED_ERR':
                return new Err($Storage_Error_QuotaExceeded)
              case 'QuotaExceededError':
                return new Err($Storage_Error_QuotaExceeded)
              case 'NS_ERROR_DOM_QUOTA_REACHED':
                return new Err($Storage_Error_QuotaExceeded)
              default:
                return new Err($Storage_Error_Unkown)
            }
          }
        })()
  }

  get(storage, key) {
    return (() => {
          try {
            let value = storage.getItem(key)

            if (typeof value === "string") {
              return new Ok(new Just(value))
            } else {
              return new Ok(new Nothing())
            }
          } catch (error) {
            switch(error.name) {
              case 'SecurityError':
                return new Err($Storage_Error_SecurityError)
              default:
                return new Err($Storage_Error_Unkown)
            }
          }
        })()
  }

  remove(storage, key) {
    return (() => {
          try {
            storage.removeItem(key)
            return new Ok(null)
          } catch (error) {
            switch(error.name) {
              case 'SecurityError':
                return new Err($Storage_Error_SecurityError)
              default:
                return new Err($Storage_Error_Unkown)
            }
          }
        })()
  }

  clear(storage) {
    return (() => {
          try {
            storage.clear()
            return new Ok(null)
          } catch (error) {
            switch(error.name) {
              case 'SecurityError':
                return new Err($Storage_Error_SecurityError)
              default:
                return new Err($Storage_Error_Unkown)
            }
          }
        })()
  }

  size(storage) {
    return (() => {
          try {
            return new Ok(storage.length)
          } catch (error) {
            switch(error.name) {
              case 'SecurityError':
                return new Err($Storage_Error_SecurityError)
              default:
                return new Err($Storage_Error_Unkown)
            }
          }
        })()
  }

  keys(storage) {
    return (() => {
          try {
            return new Ok(Object.keys(storage).sort())
          } catch (error) {
            switch(error.name) {
              case 'SecurityError':
                return new Err($Storage_Error_SecurityError)
              default:
                return new Err($Storage_Error_Unkown)
            }
          }
        })()
  }
})

const $Result = new(class {
  error(input) {
    return new Err(input)
  }

  ok(input) {
    return new Ok(input)
  }

  withDefault(value, input) {
    return input instanceof Ok ? input.value : value
  }

  withError(value, input) {
    return input instanceof Err ? input.value : value
  }

  map(func, input) {
    return input instanceof Ok ? new Ok(func(input.value)) : input
  }

  mapError(func, input) {
    return input instanceof Err ? new Err(func(input.value)) : input
  }

  isOk(input) {
    return input instanceof Ok
  }

  isError(input) {
    return input instanceof Err
  }
})

const $Dom_Dimensions = new(class {
  empty() {
    return new Record({
      bottom: 0,
      height: 0,
      width: 0,
      right: 0,
      left: 0,
      top: 0,
      x: 0,
      y: 0
    })
  }
})

const $Window = new(class {
  navigate(url) {
    return _navigate(url)
  }

  title() {
    return document.title
  }

  setTitle(title) {
    return document.title = title
  }

  url() {
    return $Url.parse($Window.href())
  }

  href() {
    return window.location.href
  }

  width() {
    return window.innerWidth
  }

  height() {
    return window.innerHeight
  }

  scrollHeight() {
    return document.body.scrollHeight
  }

  scrollWidth() {
    return document.body.scrollWidth
  }

  scrollLeft() {
    return document.body.scrollLeft
  }

  scrollTop() {
    return document.body.scrollTop
  }

  setScrollTop(position) {
    return window.scrollTo(this.scrollTop(), position)
  }

  setScrollLeft(position) {
    return window.scrollTo(position, this.scrollLeft())
  }
})

const $Timer = new(class {
  timeout(duration, subject) {
    return new Promise((resolve) => {
        	setTimeout(() => {
            resolve(subject)
          }, duration)
        })
  }

  nextFrame(subject) {
    return new Promise((resolve) => {
        	requestAnimationFrame(() => {
            resolve(subject)
          })
        })
  }
})

const $Number = new(class {
  isOdd(input) {
    return input % 2 === 1
  }

  isEven(input) {
    return Math.abs(input % 2) === 0
  }

  isNaN(input) {
    return isNaN(input)
  }

  toString(input) {
    return input.toString()
  }

  toFixed(decimalPlaces, input) {
    return input.toFixed(decimalPlaces)
  }

  fromString(input) {
    return (() => {
          let value = parseFloat(input)
          if (isNaN(value)) {
            return new Nothing()
          } else {
            return new Just(value)
          }
        })()
  }
})

const $Array = new(class {
  first(array) {
    return (() => {
          let first = array[0]
          if (first !== undefined) {
            return new Just(first)
          } else {
            return new Nothing()
          }
        })()
  }

  firstWithDefault(item, array) {
    return $Maybe.withDefault(item, $Array.first(array))
  }

  last(array) {
    return (() => {
          let last = array[array.length - 1]
          if (last !== undefined) {
            return new Just(last)
          } else {
            return new Nothing()
          }
        })()
  }

  lastWithDefault(item, array) {
    return $Maybe.withDefault(item, $Array.last(array))
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
          if (item != undefined) {
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

  isEmpty(array) {
    return _compare($Array.size(array), 0)
  }

  intersperse(item, array) {
    return array.reduce((a,v)=>[...a,v,item],[]).slice(0,-1)
  }

  contains(other, array) {
    return array.includes(other)
  }

  range(from, to) {
    return Array.from({ length: (to + 1) - from }).map((v, i) => i + from)
  }

  do(array) {
    return null
  }

  delete(what, array) {
    return array.filter((item) => item !== what)
  }

  max(array) {
    return Math.max(...array)
  }
})

const $Object_Decode = new(class {
  field(key, decoder, input) {
    return (() => {
          if (input == null ||
              input == undefined ||
              typeof input !== "object" ||
              Array.isArray(input)) {
            return new Err($Object_Error_NotAnObject)
          } else {
            const actual = input[key]
            if (typeof actual === "undefined") {
              return new Err($Object_Error_MissingObjectKey)
            }
            return decoder(actual)
          }
        })()
  }

  string(input) {
    return (() => {
          if(typeof input != "string") {
            return new Err($Object_Error_NotAString)
          } else {
            return new Ok(input)
          }
        })()
  }

  time(input) {
    return (() => {
          const parsed = Date.parse(input)

          if (Number.isNaN(parsed)) {
            return new Err($Object_Error_NotAValidTime)
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
              return new Err($Object_Error_NotANumber)
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
            return new Err($Object_Error_NotABoolean)
          } else {
            return new Ok(input)
          }
        })()
  }

  array(decoder, input) {
    return (() => {
          if (!Array.isArray(input)) {
            return new Err($Object_Error_NotAnArray)
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

const $Object_Encode = new(class {
  string(input) {
    return input
  }

  boolean(input) {
    return input
  }

  number(input) {
    return input
  }

  time(input) {
    return input.toISOString()
  }

  array(input) {
    return input
  }

  field(name, value) {
    return { name: name, value: value }
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

const $Dom = new(class {
  createElement(tag) {
    return document.createElement(tag)
  }

  getElementById(id) {
    return (() => {
          let element = document.getElementById(id)

          if (element) {
            return new Just(element)
          } else {
            return new Nothing()
          }
        })()
  }

  getElementBySelector(selector) {
    return (() => {
          try {
            let element = document.querySelector(selector)

            if (element) {
              return new Just(element)
            } else {
              return new Nothing()
            }
          } catch (error) {
            return new Nothing()
          }
        })()
  }

  getDimensions(dom) {
    return (() => {
          const rect = dom.getBoundingClientRect()

          return new Record({
            bottom: rect.bottom,
            height: rect.height,
            width: rect.width,
            right: rect.right,
            left: rect.left,
            top: rect.top,
            x: rect.x,
            y: rect.y
          })
        })()
  }

  getValue(dom) {
    return (() => {
          let value = dom.value

          if (typeof value === "string") {
            return value
          } else {
            return ""
          }
        })()
  }

  setValue(value, dom) {
    return (dom.value = value) && dom
  }

  matches(selector, dom) {
    return (() => {
          try {
            return dom.matches(selector)
          } catch (error) {
            return false
          }
        })()
  }
})

const $Test_Context = new(class {
  of(a) {
    return new TestContext(a)
  }

  then(proc, context) {
    return context.step((subject)=> {
          return proc(subject)
        })
  }

  timeout(duration, context) {
    return $Test_Context.then(((subject) => {
    return $Timer.timeout(duration, subject)
    }), context)
  }

  assertEqual(a, context) {
    return context.step((subject)=> {
          let result = _compare(a, subject)

          if (result) {
            return subject
          } else {
            throw `Assertion failed ${a} === ${subject}`
          }
        })
  }
})

const $Test_Html = new(class {
  start(node) {
    return (() => {
          let root = document.createElement('div')
          document.body.appendChild(root)
          ReactDOM.render(node, root)
          return new TestContext(root, () => {
            ReactDOM.unmountComponentAtNode(root)
            document.body.removeChild(root)
          })
        })()
  }

  triggerClick(selector, context) {
    return context.step((element) => {
          element.querySelector(selector).click()
          return element
        })
  }

  triggerMouseDown(selector, context) {
    return context.step((element) => {
          let event = document.createEvent ('MouseEvents')
          event.initEvent ("mousedown", true, true)
          element.querySelector(selector).dispatchEvent(event)
          return element
        })
  }

  triggerMouseMove(selector, context) {
    return context.step((element) => {
          let event = document.createEvent ('MouseEvents')
          event.initEvent ("mousemove", true, true)
          element.querySelector(selector).dispatchEvent(event)
          return element
        })
  }

  triggerMouseUp(selector, context) {
    return context.step((element) => {
          let event = document.createEvent ('MouseEvents')
          event.initEvent ("mouseup", true, true)
          element.querySelector(selector).dispatchEvent(event)
          return element
        })
  }

  assertTextOf(selector, value, context) {
    return context.step((element) => {
          let text = "";

          try {
            text = element.querySelector(selector).textContent
          } catch (error) {
            throw `Could not find element with selector: ${selector}`
          }

          if (text == value) {
            return element
          } else {
            throw `"${text}" != "${value}"`
          }
        })
  }

  assertElementExists(selector, context) {
    return context.step((element) => {
          let subject = element.querySelector(selector)

          if (subject) {
            return element
          } else {
            throw `Could not find element with selector: ${selector}`
          }
        })
  }

  assertCSSOf(selector, property, value, context) {
    return context.step((element) => {
          let subject = element.querySelector(selector)

          if (subject) {
            let actual = getComputedStyle(subject)[property]

            if (actual == value) {
              return element
            } else {
              throw `Style did not match`
            }
          } else {
            throw `Could not find element with selector: ${selector}`
          }
        })
  }
})

const $Test_Window = new(class {
  setScrollLeft(to, context) {
    return $Test_Context.then(((subject) => {
    return (() => {  $Window.setScrollLeft(100)

    return $Promise.resolve(subject) })()
    }), context)
  }

  setScrollTop(to, context) {
    return $Test_Context.then(((subject) => {
    return (() => {  $Window.setScrollTop(100)

    return $Promise.resolve(subject) })()
    }), context)
  }
})

const $FormData = new(class {
  empty() {
    return new FormData
  }

  keys(formData) {
    return Array.from(formData.keys())
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

const $Debug = new(class {
  log(value) {
    return (() => {
          console.log(value)
          return value
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

  toResult(error, maybe) {
    return (() => {
          if (maybe instanceof Just) {
            return new Ok(maybe.value)
          } else {
            return new Err(error)
          }
        })()
  }
})

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
      return new Record({
      createdAt: $Time.now(),
      updatedAt: $Time.now(),
      firstName: ``,
      lastName: ``,
      status: ``,
      id: 0
    })
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
    return (() => { let _0 = $Object_Decode.field(`first_name`, $Object_Decode.string, input)

             if (_0 instanceof Err) {
                let _error = _0.value
                let e = _error
     return $Result.error(e)
             }

             let firstName = _0.value

    let _1 = $Object_Decode.field(`last_name`, $Object_Decode.string, input)

             if (_1 instanceof Err) {
                let _error = _1.value
                let e = _error
     return $Result.error(e)
             }

             let lastName = _1.value

    let _2 = $Object_Decode.field(`created_at`, $Object_Decode.time, input)

             if (_2 instanceof Err) {
                let _error = _2.value
                let e = _error
     return $Result.error(e)
             }

             let createdAt = _2.value

    let _3 = $Object_Decode.field(`updated_at`, $Object_Decode.time, input)

             if (_3 instanceof Err) {
                let _error = _3.value
                let e = _error
     return $Result.error(e)
             }

             let updatedAt = _3.value

    let _4 = $Object_Decode.field(`status`, $Object_Decode.string, input)

             if (_4 instanceof Err) {
                let _error = _4.value
                let e = _error
     return $Result.error(e)
             }

             let status = _4.value

    let _5 = $Object_Decode.field(`id`, $Object_Decode.number, input)

             if (_5 instanceof Err) {
                let _error = _5.value
                let e = _error
     return $Result.error(e)
             }

             let id = _5.value

    return $Result.ok(new Record({
      createdAt: createdAt,
      updatedAt: updatedAt,
      firstName: firstName,
      lastName: lastName,
      status: status,
      id: id
    })) })()
  }

  decodeUsers(input) {
    return $Object_Decode.array($Users_List.decodeUser, input)
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
      this.setState(_update(this.state, { loading: true }), _resolve)
    })

    let response = await (async ()=> {
                try {
                  return await $Http.send($Http.get($Users_List.endpoint() + `users`))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: `Error` }), _resolve)
    })

                  throw new DoError
                }})()

    let _2 = $Maybe.toResult(`Json error!`, $Json.parse(response.body))

              if (_2 instanceof Err) {
                let _error = _2.value
                let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: error }), _resolve)
    })

                throw new DoError
              }

              let object = _2.value
              

    let _3 = $Users_List.decodeUsers(object)

              if (_3 instanceof Err) {
                let _error = _3.value
                let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: `Error` }), _resolve)
    })

                throw new DoError
              }

              let users = _3.value
              

    let sortedUsers = await $Array.sort(((a, b) => {
    return a.id - b.id
    }), users)

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { stale: false, users: sortedUsers, error: `` }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  resetUser() {
    return new Promise((_resolve) => {
      this.setState(_update(this.state, { user: new Record({
      createdAt: $Time.now(),
      updatedAt: $Time.now(),
      status: `active`,
      firstName: ``,
      lastName: ``,
      id: 0
    }), error: `` }), _resolve)
    })
  }

  saveUser() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: true }), _resolve)
    })

     await (async ()=> {
                try {
                  return await $Http.send($Http.stringBody($Users_List.stringifyUser(), $Http.header(`Content-Type`, `application/json`, $Http.put($Users_List.endpoint() + `users/` + $Number.toString(this.user.id)))))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: `Error` }), _resolve)
    })

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { stale: true }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  deleteUser() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: true }), _resolve)
    })

     await (async ()=> {
                try {
                  return await $Http.send($Http.delete($Users_List.endpoint() + `users/` + $Number.toString(this.user.id)))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: `Error` }), _resolve)
    })

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { stale: true }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  createUser() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: true }), _resolve)
    })

     await (async ()=> {
                try {
                  return await $Http.send($Http.stringBody($Users_List.stringifyUser(), $Http.header(`Content-Type`, `application/json`, $Http.post($Users_List.endpoint() + `users`))))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: `Error` }), _resolve)
    })

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { stale: true }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }

  stringifyUser() {
    return $Json.stringify($Object_Encode.object([$Object_Encode.field(`first_name`, $Object_Encode.string(this.user.firstName)), $Object_Encode.field(`last_name`, $Object_Encode.string(this.user.lastName)), $Object_Encode.field(`status`, $Object_Encode.string(this.user.status))]))
  }

  getUser(id) {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: true }), _resolve)
    })

    let response = await (async ()=> {
                try {
                  return await $Http.send($Http.get($Users_List.endpoint() + `users/` + $Number.toString(id)))
                } catch(_error) {
                  let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: `error` }), _resolve)
    })

                  throw new DoError
                }})()

    let _2 = $Maybe.toResult(`Json Error`, $Json.parse(response.body))

              if (_2 instanceof Err) {
                let _error = _2.value
                let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: error }), _resolve)
    })

                throw new DoError
              }

              let object = _2.value
              

    let _3 = $Users_List.decodeUser(object)

              if (_3 instanceof Err) {
                let _error = _3.value
                let error = _error;
     new Promise((_resolve) => {
      this.setState(_update(this.state, { error: `error` }), _resolve)
    })

                throw new DoError
              }

              let user = _3.value
              

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { user: user }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: false }), _resolve)
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
      this.setState(_update(this.state, { page: page }), _resolve)
    })
  }

  setFirstName(firstName) {
    return new Promise((_resolve) => {
      this.setState(_update(this.state, { user: _update(this.user, { firstName: firstName }) }), _resolve)
    })
  }

  setLastName(lastName) {
    return new Promise((_resolve) => {
      this.setState(_update(this.state, { user: _update(this.user, { lastName: lastName }) }), _resolve)
    })
  }

  setStatus(isLocked) {
    let newStatus = (isLocked ? `locked` : `active`)

    return new Promise((_resolve) => {
      this.setState(_update(this.state, { user: _update(this.user, { status: newStatus }) }), _resolve)
    })
  }

  setUser(user) {
    return new Promise((_resolve) => {
      this.setState(_update(this.state, { user: user }), _resolve)
    })
  }
})
$Users_List.__displayName = `Users.List`

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
      this.setState(_update(this.state, { loading: true }), _resolve)
    })

    let response = await (async ()=> {
                try {
                  return await $Http.send($Http.get(`https://mint-website.herokuapp.com/releases`))
                } catch(_error) {
                  let error = _error;
     $Debug.log(error)

                  throw new DoError
                }})()

    let _2 = $Maybe.toResult(`Json Error`, $Json.parse(response.body))

              if (_2 instanceof Err) {
                let _error = _2.value
                let error = _error;
     $Debug.log(error)

                throw new DoError
              }

              let object = _2.value
              

    let _3 = $Version.decodeMany(object)

              if (_3 instanceof Err) {
                let _error = _3.value
                let error = _error;
     $Debug.log(error)

                throw new DoError
              }

              let versions = _3.value
              

    let sortedVersions = await $Array.reverse($Array.sortBy(((version) => {
    return version.date
    }), versions))

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { versions: sortedVersions, stale: false }), _resolve)
    }) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } finally {
    new Promise((_resolve) => {
      this.setState(_update(this.state, { loading: false }), _resolve)
    })
    }
          })()
  }
})
$Versions.__displayName = `Versions`

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
      this.setState(_update(this.state, { counter: this.counter + 1 }), _resolve)
    })
  }

  decrement() {
    return new Promise((_resolve) => {
      this.setState(_update(this.state, { counter: this.counter - 1 }), _resolve)
    })
  }
})
$Counter_Store.__displayName = `Counter.Store`

const $Examples_Store = new (class extends Store {
  get userManagement () {
    if (this.props.userManagement != undefined) {
      return this.props.userManagement
    } else {
      return new Record({
      title: `User Management`,
      href: `/users`,
      description: `This example contains an implementation of a table of users with client side pagination and forms for creating new users and editing existsing ones through an HTTP API.`
    })
    }
  }

  get drag () {
    if (this.props.drag != undefined) {
      return this.props.drag
    } else {
      return new Record({
      title: `Drag and Drop`,
      href: `/drag`,
      description: `This example shows how to drag and drop an HTML element on the page.`
    })
    }
  }

  get fileHandling () {
    if (this.props.fileHandling != undefined) {
      return this.props.fileHandling
    } else {
      return new Record({
      title: `File Handling`,
      href: `/examples/file-handling`,
      description: `This example shows how to implement a component which loads and shows a file from the users computer and then uploads it to a server via HTTP.`
    })
    }
  }

  get counter () {
    if (this.props.counter != undefined) {
      return this.props.counter
    } else {
      return new Record({
      title: `Counter`,
      href: `/counter`,
      description: `This example shows a counter which stored in a store with two buttons one for incrementing th counter and one for decrementing it.`
    })
    }
  }

  get state () {
    return {
    userManagement: this.userManagement,
    drag: this.drag,
    fileHandling: this.fileHandling,
    counter: this.counter
    }
  }
})
$Examples_Store.__displayName = `Examples.Store`

const $DragStore = new (class extends Store {
  get position () {
    if (this.props.position != undefined) {
      return this.props.position
    } else {
      return new Record({
      top: 0,
      left: 0
    })
    }
  }

  get state () {
    return {
    position: this.position
    }
  }

  setPosition(value) {
    return new Promise((_resolve) => {
      this.setState(_update(this.state, { position: value }), _resolve)
    })
  }
})
$DragStore.__displayName = `DragStore`

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
      this.setState(_update(this.state, { page: a }), _resolve)
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
      this.setState(_update(this.state, { active: active }), _resolve)
    })
  }

  setOver(over) {
    return new Promise((_resolve) => {
      this.setState(_update(this.state, { over: over }), _resolve)
    })
  }
})
$Showcase_Store.__displayName = `Showcase.Store`

const $Ui = new (class extends Store {
  get theme () {
    if (this.props.theme != undefined) {
      return this.props.theme
    } else {
      return new Record({
      fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`,
      colors: new Record({
        warning: new Record({
          background: `#FF9730`,
          focus: `#ffb163`,
          text: `#FFF`
        }),
        danger: new Record({
          background: `#E04141`,
          focus: `#e76d6d`,
          text: `#FFF`
        }),
        success: new Record({
          background: `#3fb543`,
          focus: `#60c863`,
          text: `#FFF`
        }),
        secondary: new Record({
          background: `#222`,
          focus: `#333`,
          text: `#FFF`
        }),
        primary: new Record({
          background: `#3aad57`,
          focus: `#0fa334`,
          text: `#FFF`
        }),
        disabled: new Record({
          background: `#D7D7D7`,
          text: `#9A9A9A`,
          focus: ``
        }),
        inputSecondary: new Record({
          background: `#F3F3F3`,
          text: `#616161`,
          focus: ``
        }),
        input: new Record({
          background: `#FDFDFD`,
          text: `#606060`,
          focus: `#FFF`
        })
      }),
      hover: new Record({
        color: `#26e200`
      }),
      outline: new Record({
        fadedColor: `hsla(110, 100%, 44%, 0.5)`,
        color: `hsla(110, 100%, 44%, 1)`
      }),
      border: new Record({
        color: `#DDD`,
        radius: `2px`
      })
    })
    }
  }

  get state () {
    return {
    theme: this.theme
    }
  }

  setFontFamily(fontFamily) {
    let theme = this.state.theme

    let updatedTheme = _update(theme, { fontFamily: fontFamily })

    return new Promise((_resolve) => {
      this.setState(_update(this.state, { theme: updatedTheme }), _resolve)
    })
  }

  setPrimaryBackground(color) {
    let theme = this.state.theme

    let colors = theme.colors

    let primary = colors.primary

    let updatedPrimary = _update(primary, { background: color })

    let updatedColors = _update(colors, { primary: updatedPrimary })

    let updatedTheme = _update(theme, { colors: updatedColors })

    return new Promise((_resolve) => {
      this.setState(_update(this.state, { theme: updatedTheme }), _resolve)
    })
  }
})
$Ui.__displayName = `Ui`

class $Title extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createElement("div", {
      className: `title-base-media-0 title-base`,
      style: {

      }
    }, [this.children])
  }
}

$Title.defaultProps = {
  children: []
}

class $Main extends Component {
  get pages() {
    return [new Record({
      name: `home`,
      contents: _createElement($Home, {  })
    }), new Record({
      name: `install`,
      contents: _createElement($Install, {  })
    }), new Record({
      name: `examples`,
      contents: _createElement($Examples, {  })
    }), new Record({
      name: `roadmap`,
      contents: _createElement($Roadmap, {  })
    }), new Record({
      name: `file-handling`,
      contents: _createElement($Example, { subTitle: this.fileHandling.description, title: this.fileHandling.title }, [_createElement($Examples_FileHandling, {  })])
    }), new Record({
      name: `counter`,
      contents: _createElement($Example, { subTitle: this.counter.description, title: this.counter.title }, [_createElement($Counter, {  })])
    }), new Record({
      name: `drag`,
      contents: _createElement($Example, { subTitle: this.drag.description, title: this.drag.title }, [_createElement($Drag, {  })])
    }), new Record({
      name: `index`,
      contents: _createElement($Example, { subTitle: this.userManagement.description, title: this.userManagement.title }, [_createElement($Users_Layout, {  }, [_createElement($Users_Table, {  })])])
    }), new Record({
      name: `new`,
      contents: _createElement($Example, { subTitle: this.userManagement.description, title: this.userManagement.title }, [_createElement($Users_Layout, {  }, [_createElement($UserForm, { isNew: true })])])
    }), new Record({
      name: `user`,
      contents: _createElement($Example, { subTitle: this.userManagement.description, title: this.userManagement.title }, [_createElement($Users_Layout, {  }, [_createElement($UserForm, { isNew: false })])])
    }), new Record({
      name: `not_found`,
      contents: _createElement("div", {}, [`404`])
    })]
  }

  get userManagement () { return $Examples_Store.userManagement }

  get drag () { return $Examples_Store.drag }

  get fileHandling () { return $Examples_Store.fileHandling }

  get counter () { return $Examples_Store.counter }

  get page () { return $Application.page }

  setPage (...params) { return $Application.setPage(...params) }

  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Examples_Store._unsubscribe(this);$Application._unsubscribe(this);$Ui._unsubscribe(this)
  }

  componentDidMount() {
    $Examples_Store._subscribe(this);$Application._subscribe(this);$Ui._subscribe(this)

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
    let content = $Maybe.withDefault(_createElement("div", {}), $Maybe.map(((item) => {
    return item.contents
    }), $Array.find(((item) => {
    return _compare(item.name, this.page)
    }), this.pages)))

    return _createElement($Layout, {  }, [content])
  }
}

class $Users_Table extends Component {
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
    return $Window.navigate(`/users?page=` + $Number.toString(a))
  }

  renderItem(item) {
    return _createElement($UserRow, { key: $Number.toString(item.id), user: item })
  }

  render() {
    let slicedUsers = $Array.slice(this.page * this.perPage, (this.page + 1) * this.perPage, this.users)

    let rows = ($Array.isEmpty(slicedUsers) ? [_createElement("tr", {}, [_createElement("td", {
      colspan: `5`
    }, [_createElement("div", {
      className: `users-table-empty`,
      style: {

      }
    }, [`There are no users to display!`])])])] : $Array.map(this.renderItem.bind(this), slicedUsers))

    return _createElement($Ui_Loader, { shown: this.loading }, [_createElement("div", {}, [_createElement("div", {
      className: `users-table-header`,
      style: {

      }
    }, [_createElement("div", {
      className: `users-table-title`,
      style: {

      }
    }, [`Users`])]), _createElement("table", {
      className: `users-table-table`,
      style: {
        [`--users-table-table-border`]: `1px solid ` + this.theme.border.color,
        [`--users-table-table-color`]: this.theme.colors.input.text,
        [`--users-table-table-font-family`]: this.theme.fontFamily
      }
    }, [_createElement("thead", {}, [_createElement("tr", {}, [_createElement($Ui_Table_Th, { width: `40px` }, [`Id`]), _createElement($Ui_Table_Th, {  }, [`Name`]), _createElement($Ui_Table_Th, {  }, [`Status`]), _createElement($Ui_Table_Th, {  }, [`Last Updated`]), _createElement($Ui_Table_Th, { align: `center`, width: `70px` }, [`Active`])])]), _createElement("tbody", {}, [rows])]), _createElement($Ui_Pagination, { onChange: this.setPage.bind(this), page: this.page, total: $Array.size(this.users) })])])
  }
}

$Users_Table.displayName = "Users.Table"

class $SubTitle extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createElement("div", {
      className: `sub-title-base-media-0 sub-title-base`,
      style: {

      }
    }, [this.children])
  }
}

$SubTitle.defaultProps = {
  children: []
}

class $Example extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get subTitle () {
    if (this.props.subTitle != undefined) {
      return this.props.subTitle
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

  render() {
    return _createElement($Page, {  }, [_createElement($Title, {  }, [this.title]), _createElement($SubTitle, {  }, [this.subTitle]), _createElement("div", {
      className: `example-frame`,
      style: {

      }
    }, [this.children])])
  }
}

$Example.defaultProps = {
  children: [],subTitle: ``,title: ``
}

class $Logo extends Component {
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

  get mobileHeight () {
    if (this.props.mobileHeight != undefined) {
      return this.props.mobileHeight
    } else {
      return 90
    }
  }

  get mobileWidth () {
    if (this.props.mobileWidth != undefined) {
      return this.props.mobileWidth
    } else {
      return 370
    }
  }

  render() {
    return _createElement("svg", {
      viewBox: `0 0 370 90`,
      height: `90`,
      width: `370`,
      className: `logo-base-media-0 logo-base`,
      style: {
        [`--logo-base-height`]: this.height + `px`,
        [`--logo-base-width`]: this.width + `px`,
        [`--logo-base-media-0-height`]: this.mobileHeight + `px`,
        [`--logo-base-media-0-width`]: this.mobileWidth + `px`
      }
    }, [_createElement("path", {
      d: `M84.082 87.484C78.584 68.76 61.48 49.421 41.624 42.668c19.855 6.446 33.906 16.269 43.375 35.914C85.304 15.348 27.268 31.617 1.304 0-10.304 80.424 58.73 97.307 84.082 87.484z`,
      fill: this.fill
    }), _createElement("path", {
      d: `M177.222 25.537q6.198 0 11.529 2.603 5.454 2.48 8.801 7.81 3.347 5.331 3.347 13.14v39.67h-9.917V50.083q0-8.058-4.09-11.901-3.968-3.967-10.538-3.967-4.959 0-9.174 2.48-4.09 2.355-6.694 7.065-2.48 4.587-2.48 11.033V88.76h-9.917V50.083q0-8.058-4.09-11.901-3.967-3.967-10.538-3.967-4.462 0-8.677 2.355-4.215 2.232-6.942 7.066-2.728 4.835-2.728 12.025v33.1h-9.917V26.776h8.678l.62 9.67q3.223-5.455 8.43-8.183 5.33-2.727 11.404-2.727 6.818 0 12.52 3.1 5.827 3.099 8.802 9.049 2.728-5.95 8.926-9.05 6.198-3.099 12.645-3.099zM228.312 14.876q-3.348 0-5.455-1.983-1.983-2.108-1.983-5.455t1.983-5.33Q224.964 0 228.312 0q3.347 0 5.33 2.107 2.108 1.984 2.108 5.331 0 3.347-2.108 5.455-1.983 1.983-5.33 1.983zm4.958 73.884h-9.917V26.777h9.917V88.76zM286.406 25.537q10.537 0 17.355 6.075 6.818 6.074 6.818 17.479v39.67h-9.917V52.561q0-9.67-4.215-14.008-4.091-4.34-11.033-4.34-4.959 0-9.298 2.232-4.338 2.108-7.19 7.066-2.727 4.835-2.727 12.273V88.76h-9.917V26.777h8.677l.62 9.67q3.1-5.58 8.554-8.183 5.454-2.727 12.273-2.727zM370 84.421Q363.802 90 354.008 90q-7.562 0-12.396-4.09-4.711-4.092-4.835-12.522V35.331H324.38v-8.554h12.397V11.9l9.917-2.727v17.603h22.934v8.554h-22.934v36.322q0 4.463 2.48 6.818 2.603 2.231 6.818 2.231 5.95 0 10.537-4.586L370 84.42z`,
      fill: this.textFill
    })])
  }
}

$Logo.defaultProps = {
  textFill: `#000`,fill: `#000`,height: 90,width: 370,mobileHeight: 90,mobileWidth: 370
}

class $UserRow extends Component {
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
      return new Record({
      createdAt: $Time.now(),
      updatedAt: $Time.now(),
      firstName: ``,
      lastName: ``,
      status: ``,
      id: 0
    })
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
    return _createElement("tr", {
      className: `user-row-tr`,
      style: {
        [`--user-row-tr-a-text-decoration`]: this.textDecoration
      }
    }, [_createElement($Ui_Table_Td, {  }, [_createElement($Ui_Link, { href: `/users/` + $Number.toString(this.user.id) }, [$Number.toString(this.user.id)])]), _createElement($Ui_Table_Td, {  }, [_createElement($Ui_Link, { href: `/users/` + $Number.toString(this.user.id) }, [this.user.firstName + ` ` + this.user.lastName])]), _createElement($Ui_Table_Td, {  }, [$String.capitalize(this.user.status)]), _createElement($Ui_Table_Td, {  }, [_createElement($Ui_Time, { date: this.user.updatedAt })]), _createElement($Ui_Table_Td, { align: `center` }, [_createElement($Ui_Checkbox, { checked: _compare(this.user.status, `locked`), onChange: this.onChange.bind(this) })])])
  }
}

$UserRow.defaultProps = {
  user: new Record({
    createdAt: $Time.now(),
    updatedAt: $Time.now(),
    firstName: ``,
    lastName: ``,
    status: ``,
    id: 0
  })
}

class $Footer extends Component {
  render() {
    return _createElement("div", {
      className: `footer-base`,
      style: {

      }
    }, [_createElement("div", {
      className: `footer-wrapper`,
      style: {

      }
    }, [_createElement("div", {
      className: `footer-column`,
      style: {

      }
    }, [_createElement("div", {
      className: `footer-title`,
      style: {

      }
    }, [`Source`]), _createElement($Ui_Link, { href: `https://github.com/mint-lang/mint`, label: `Github Repository`, target: `_blank` }), _createElement($Ui_Link, { href: `https://github.com/mint-lang/mint/releases`, label: `Releases / Changelog`, target: `_blank` })]), _createElement("div", {
      className: `footer-column`,
      style: {

      }
    }, [_createElement("div", {
      className: `footer-title`,
      style: {

      }
    }, [`Community`]), _createElement($Ui_Link, { href: `https://gitter.im/mint-lang/Lobby`, target: `_blank`, label: `Gitter` })])])])
  }
}

class $Counter extends Component {
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
    return _createElement("div", {
      className: `counter-base`,
      style: {
        [`--counter-base-background`]: this.background
      }
    }, [_createElement("button", {
      onClick: (event => (((event) => {
      return this.decrement.bind(this)()
      }))(_normalizeEvent(event))),
      disabled: this.disabled
    }, [`Decrement`]), _createElement("span", {
      className: `counter-counter`,
      style: {

      }
    }, [$Number.toString(this.counter)]), _createElement("button", {
      onClick: (event => (((event) => {
      return this.increment.bind(this)()
      }))(_normalizeEvent(event))),
      disabled: this.disabled
    }, [`Increment`])])
  }
}

$Counter.defaultProps = {
  disabled: false
}

class $Examples_FileHandling extends Component {
  constructor(props) {
    super(props)
    this.state = new Record({
      file: $Maybe.nothing(),
      contents: ``
    })
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
      this.setState(_update(this.state, { contents: contents, file: $Maybe.just(file) }), _resolve)
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
                  return await $Http.send($Http.formDataBody(formData, $Http.post(``)))
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
    let file = $Maybe.withDefault(_createElement("div", {}), $Maybe.map(((file) => {
    return _createElement("div", {}, [$File.name(file)])
    }), this.state.file))

    return _createElement("div", {}, [_createElement($Ui_Button, { onClick: ((event) => {
    return this.openDialog.bind(this)()
    }), label: `Open Browse Dialog` }), _createElement($Ui_Button, { onClick: ((event) => {
    return this.upload.bind(this)()
    }), label: `Upload`, disabled: $Maybe.isNothing(this.state.file) }), file, _createElement("pre", {}, [this.state.contents])])
  }
}

$Examples_FileHandling.displayName = "Examples.FileHandling"

class $Layout extends Component {
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
    return _createElement("div", {
      className: `layout-base`,
      style: {

      }
    }, [_createElement($Header, {  }), this.children, _createElement($Footer, {  })])
  }
}

$Layout.defaultProps = {
  children: []
}

class $Examples_Example extends Component {
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
    return _createElement("div", {
      onClick: (event => (((event) => {
      return $Window.navigate(this.href)
      }))(_normalizeEvent(event))),
      className: `examples-example-base`,
      style: {

      }
    }, [_createElement("div", {
      className: `examples-example-title`,
      style: {

      }
    }, [this.title]), _createElement("div", {
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

class $Examples extends Component {
  get userManagement () { return $Examples_Store.userManagement }

  get drag () { return $Examples_Store.drag }

  get fileHandling () { return $Examples_Store.fileHandling }

  get counter () { return $Examples_Store.counter }

  componentWillUnmount () {
    $Examples_Store._unsubscribe(this)
  }

  componentDidMount () {
    $Examples_Store._subscribe(this)
  }

  render() {
    return _createElement($Page, {  }, [_createElement($Title, {  }, [`Examples`]), _createElement($SubTitle, {  }, [`Here you can find some examples that showcase the language features.`]), _createElement("hr", {
      className: `examples-hr`,
      style: {

      }
    }), _createElement("div", {
      className: `examples-grid`,
      style: {

      }
    }, [_createElement($Examples_Example, { description: this.userManagement.description, title: this.userManagement.title, href: this.userManagement.href }), _createElement($Examples_Example, { description: this.drag.description, title: this.drag.title, href: this.drag.href }), _createElement($Examples_Example, { description: this.counter.description, title: this.counter.title, href: this.counter.href }), _createElement($Examples_Example, { description: this.fileHandling.description, title: this.fileHandling.title, href: this.fileHandling.href })])])
  }
}

class $Header extends Component {
  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return _createElement("div", {
      className: `header-base`,
      style: {

      }
    }, [_createElement("div", {
      className: `header-wrapper`,
      style: {

      }
    }, [_createElement($Ui_Toolbar_Title, { href: `/` }, [_createElement($Logo, { fill: this.theme.colors.primary.background, mobileHeight: 20, mobileWidth: 82, textFill: `#FFF`, height: 20, width: 82 })]), _createElement($Ui_Toolbar_Spacer, {  }), _createElement("div", {
      className: `header-desktop-media-0 header-desktop`,
      style: {

      }
    }, [_createElement($Ui_Link, { href: `/install`, label: `Install` }), _createElement($Ui_Toolbar_Separator, {  }), _createElement($Ui_Link, { href: `https://guide.mint-lang.com`, target: `_blank`, label: `Learn` }), _createElement($Ui_Toolbar_Separator, {  }), _createElement($Ui_Link, { href: `/examples`, label: `Examples` }), _createElement($Ui_Toolbar_Separator, {  }), _createElement($Ui_Link, { href: `/roadmap`, label: `Roadmap` })])])])
  }
}

class $Users_Layout extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createElement("div", {}, [_createElement($Ui_Breadcrumbs, { separator: `|` }, [_createElement($Ui_Breadcrumb, { label: `Home`, href: `/users` }), _createElement($Ui_Breadcrumb, { label: `New User`, href: `/users/new` })]), _createElement("div", {
      className: `users-layout-wrapper`,
      style: {

      }
    }, [_createElement("div", {
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

class $Drag extends Component {
  constructor(props) {
    super(props)
    this.state = new Record({
      mousePosition: new Record({
        left: 0,
        top: 0
      }),
      startPosition: new Record({
        left: 0,
        top: 0
      }),
      dragging: false
    })
  }

  setPosition (...params) { return $DragStore.setPosition(...params) }

  get position () { return $DragStore.position }

  componentWillUnmount () {
    $DragStore._unsubscribe(this);$Provider_Mouse._unsubscribe(this)
  }

  componentDidUpdate () {
    if (this.state.dragging) {
      $Provider_Mouse._subscribe(this, new Record({
      moves: ((data) => {
      return this.move.bind(this)(data)
      }),
      clicks: ((data) => {
      return null
      }),
      ups: ((data) => {
      return this.end.bind(this)()
      })
    }))
    } else {
      $Provider_Mouse._unsubscribe(this)
    }
  }

  componentDidMount () {
    $DragStore._subscribe(this);if (this.state.dragging) {
      $Provider_Mouse._subscribe(this, new Record({
      moves: ((data) => {
      return this.move.bind(this)(data)
      }),
      clicks: ((data) => {
      return null
      }),
      ups: ((data) => {
      return this.end.bind(this)()
      })
    }))
    } else {
      $Provider_Mouse._unsubscribe(this)
    }
  }

  move(data) {
    let diff = new Record({
      left: this.state.mousePosition.left - data.pageX,
      top: this.state.mousePosition.top - data.pageY
    })

    return (this.state.dragging ? this.setPosition.bind(this)(new Record({
      left: this.state.startPosition.left - diff.left,
      top: this.state.startPosition.top - diff.top
    })) : new Promise((_resolve) => {
      this.setState(this.state, _resolve)
    }))
  }

  end() {
    return new Promise((_resolve) => {
      this.setState(_update(this.state, { dragging: false }), _resolve)
    })
  }

  start(event) {
    let mousePosition = new Record({
      left: event.pageX,
      top: event.pageY
    })

    let startPosition = new Record({
      left: this.position.left,
      top: this.position.top
    })

    return (async () => {
            try {  await $Html_Event.preventDefault(event)

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { mousePosition: mousePosition, startPosition: startPosition, dragging: true }), _resolve)
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
    return _createElement("div", {
      onMouseDown: (event => (((event) => {
      return this.start.bind(this)(event)
      }))(_normalizeEvent(event))),
      className: `drag-base`,
      style: {
        [`--drag-base-transform`]: `translate3d(` + this.position.left + `px,` + this.position.top + `px, 0)`
      }
    }, [`DragMe`])
  }
}

class $Install extends Component {
  get version() {
    return this.latest.bind(this)()
  }

  get content() {
    return (this.loading ? _createElement("ul", {
      className: `install-files`,
      style: {

      }
    }, [_createElement("li", {}, [`Loading versions...`])]) : _createElement("ul", {
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
    return _createElement("li", {}, [_createElement($Ui_Link, { href: asset.url, label: asset.name })])
  }

  render() {
    return _createElement($Page, {  }, [_createElement($Title, {  }, [`Install`]), _createElement($SubTitle, {  }, [`Follow the directions below to install Mint:`]), _createElement("ol", {
      className: `install-list-media-0 install-list`,
      style: {

      }
    }, [_createElement("li", {}, [`Download the binary for your operating system: `, this.content]), _createElement("li", {}, [`Move the binary to `, _createElement("code", {
      className: `install-code`,
      style: {

      }
    }, [`/usr/local/bin/mint`]), _createElement("pre", {
      className: `install-code`,
      style: {

      }
    }, [`sudo mv /path/to/binary /usr/local/bin/mint`])]), _createElement("li", {}, [`You invoke the CLI in your terminal by just typing `, _createElement("code", {
      className: `install-code`,
      style: {

      }
    }, [`mint`])])]), _createElement("hr", {
      className: `install-hr`,
      style: {

      }
    }), _createElement($Title, {  }, [`Install from Source`]), _createElement($SubTitle, {  }, [`Follow the directions below to install Mint from source:`]), _createElement("ol", {
      className: `install-list-media-0 install-list`,
      style: {

      }
    }, [_createElement("li", {}, [`Install the `, _createElement($Ui_Link, { href: `https://crystal-lang.org/docs/installation/`, label: `Crystal programming language`, target: `_blank` })]), _createElement("li", {}, [`Download and extract the source files from Github:`, _createElement("br", {}), _createElement($Ui_Link, { label: `https://github.com/mint-lang/mint`, href: `https://github.com/mint-lang/mint`, target: `_blank` })]), _createElement("li", {}, [`In your terminal enter the folder you extracted the source code:`, _createElement("pre", {
      className: `install-code`,
      style: {

      }
    }, [`cd /path/to/source`])]), _createElement("li", {}, [`Install dependencies:`, _createElement("pre", {
      className: `install-code`,
      style: {

      }
    }, [`crystal deps`])]), _createElement("li", {}, [`Build the binary (might need to use sudo):`, _createElement("pre", {
      className: `install-code`,
      style: {

      }
    }, [`crystal build src/mint.cr -o /usr/local/bin/mint -p --release --no-debug`])]), _createElement("li", {}, [`You invoke the CLI in your terminal by just typing `, _createElement("code", {
      className: `install-code`,
      style: {

      }
    }, [`mint`])])]), _createElement("hr", {
      className: `install-hr`,
      style: {

      }
    }), _createElement($Title, {  }, [`Daily Binaries`]), _createElement($SubTitle, {  }, [_createElement("p", {}, [`A fresh binary is created and uploaded to S3 when something changes in the master branch.`]), _createElement("p", {}, [`You can download those binaries here:`]), _createElement("ul", {
      className: `install-files`,
      style: {

      }
    }, [_createElement("li", {}, [_createElement($Ui_Link, { href: `https://s3-eu-west-1.amazonaws.com/mint-lang/mint-latest-linux`, label: `mint-latest-linux` })]), _createElement("li", {}, [_createElement($Ui_Link, { href: `https://s3-eu-west-1.amazonaws.com/mint-lang/mint-latest-osx`, label: `mint-latest-osx` })])])])])
  }
}

class $Home extends Component {
  get theme () { return $Ui.theme }

  componentWillUnmount () {
    $Ui._unsubscribe(this)
  }

  componentDidMount () {
    $Ui._subscribe(this)
  }

  render() {
    return _createElement("div", {
      className: `home-base`,
      style: {

      }
    }, [_createElement("div", {
      className: `home-hero-media-0 home-hero`,
      style: {

      }
    }, [_createElement($Logo, { fill: this.theme.colors.primary.background, mobileHeight: 60, mobileWidth: 250, textFill: `#222` }), _createElement("h2", {
      className: `home-slogan-media-0 home-slogan`,
      style: {

      }
    }, [`A refreshing language for the front-end web.`]), _createElement("div", {
      className: `home-buttons`,
      style: {

      }
    }, [_createElement($Ui_Link, { href: `/install` }, [_createElement($Ui_Button, { size: 22, label: `Install` })]), _createElement($Ui_Link, { href: `https://guide.mint-lang.com`, target: `_blank` }, [_createElement($Ui_Button, { size: 22, type: `secondary`, label: `Learn` })])])]), _createElement($Showcase, {  }), _createElement($CallToAction, {  })])
  }
}

class $Roadmap_Feature extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  get icon () {
    if (this.props.icon != undefined) {
      return this.props.icon
    } else {
      return $Html.empty()
    }
  }

  get description () {
    if (this.props.description != undefined) {
      return this.props.description
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
    return _createElement("div", {
      className: `roadmap-feature-base`,
      style: {

      }
    }, [_createElement("div", {
      className: `roadmap-feature-icon`,
      style: {

      }
    }, [this.icon]), _createElement("div", {}, [_createElement("div", {
      className: `roadmap-feature-title`,
      style: {

      }
    }, [this.name]), _createElement("div", {
      className: `roadmap-feature-description`,
      style: {

      }
    }, [this.description]), ($Array.isEmpty(this.children) ? $Html.empty() : _createElement("div", {
      className: `roadmap-feature-features`,
      style: {

      }
    }, [this.children]))])])
  }
}

$Roadmap_Feature.displayName = "Roadmap.Feature"

$Roadmap_Feature.defaultProps = {
  children: [],icon: $Html.empty(),description: ``,name: ``
}

class $Roadmap_Version extends Component {
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
    return _createElement("div", {}, [_createElement("div", {
      className: `roadmap-version-title`,
      style: {

      }
    }, [this.version]), _createElement("div", {
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

class $Roadmap extends Component {
  get checkmark() {
    return _createElement("svg", {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `24`,
      height: `24`,
      viewBox: `0 0 24 24`
    }, [_createElement("path", {
      d: `M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z`
    })])
  }

  get diamond() {
    return _createElement("svg", {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      height: `24`,
      width: `24`
    }, [_createElement("path", {
      d: `M12 0l-12 12.001 12 11.999 12.001-11.999-12.001-12.001zm-9.171 12.001l9.171-9.172 9.172 9.172-9.172 9.172-9.171-9.172z`
    })])
  }

  render() {
    return _createElement($Page, {  }, [_createElement($Title, {  }, [`Roadmap`]), _createElement($SubTitle, {  }, [`This page contains planned and shipped high level features up to the stable release (1.0.0).`]), _createElement($Roadmap_Version, { version: `Planned Features` }, [_createElement($Roadmap_Feature, { name: `CSS Type Checking`, icon: this.diamond, description: `Check the values of known CSS properties and warn the developer if it's not matches the available values.` }), _createElement($Roadmap_Feature, { name: `HTML Attribute Checking`, icon: this.diamond, description: `Check the values of HTML attributes based on the tag they belong to (for example check alt attributes for <img> tags).` }), _createElement($Roadmap_Feature, { name: `Progressive Web Application Support`, icon: this.diamond, description: `Automatically generate files for basic PWA features (service-worker, manifest, icons).` }), _createElement($Roadmap_Feature, { description: `A package for monitoring the state of the application.`, name: `Devtools`, icon: this.diamond }), _createElement($Roadmap_Feature, { name: `Documentation Generator`, icon: this.diamond, description: `Generate beautiful documentation for your project, including dependencies.` }), _createElement($Roadmap_Feature, { name: `Selective Compilation`, icon: this.diamond, description: `Only compile the entities that are being used.` }), _createElement($Roadmap_Feature, { name: `Hot Reloading`, icon: this.diamond, description: `In development mode replace entities that changed without losing state. ` }), _createElement($Roadmap_Feature, { name: `Testing`, icon: this.diamond, description: `Language feature for easily testing components or the whole application.` }), _createElement($Roadmap_Feature, { name: `Language Server Protocol`, icon: this.diamond, description: `Implement a language server to expose the AST for code editors.` }), _createElement($Roadmap_Feature, { name: `Website for Packages`, icon: this.diamond, description: `A website to browse, find and rate community packages.` }), _createElement($Roadmap_Feature, { name: `Image Optimization`, icon: this.diamond, description: `During the build process optimize images automatically.` }), _createElement($Roadmap_Feature, { name: `Application Structure Diagram`, icon: this.diamond, description: `Construct an interactive diagram of application structure containing routes, stores, providers and components. ` })]), _createElement($Roadmap_Version, { version: `0.1` }, [_createElement($Roadmap_Feature, { description: `The language itself.`, name: `Language Basics`, icon: this.checkmark }, [_createElement($Roadmap_Feature, { name: `Parser`, description: `Converts source code to an AST.` }), _createElement($Roadmap_Feature, { name: `Formatter`, description: `Reproduces source code from an AST.` }), _createElement($Roadmap_Feature, { name: `Type Checker`, description: `Walks the AST and type checks the application.` }), _createElement($Roadmap_Feature, { name: `Compiler`, description: `Compiles an application to JavaScript.` })]), _createElement($Roadmap_Feature, { description: `The features of the language.`, name: `Language Features`, icon: this.checkmark }, [_createElement($Roadmap_Feature, { name: `Components`, description: `Define components with type checked properties and state.` }), _createElement($Roadmap_Feature, { name: `Styling`, description: `Styling HTML tags in a dynamic way without conflicts.` }), _createElement($Roadmap_Feature, { name: `Routing`, description: `Define routes in a declarative way.` }), _createElement($Roadmap_Feature, { name: `Computations`, description: `Handle synchronous (JSON decoding) and asynchronous (HTTP Request) computations that might fail.` }), _createElement($Roadmap_Feature, { name: `State`, description: `Manage global state with Stores.` }), _createElement($Roadmap_Feature, { name: `Subscriptions`, description: `Subscribe to global events (mouse, window) using providers.` }), _createElement($Roadmap_Feature, { name: `JavaScript Interopability`, description: `Simply call out the JavaScript when you need to.` })]), _createElement($Roadmap_Feature, { name: `Production Builder`, icon: this.checkmark, description: `The process of building the production version of the application.` }, [_createElement($Roadmap_Feature, { name: `Icon Generator`, description: `Generate icons for most common use cases (favicon, application icons).` }), _createElement($Roadmap_Feature, { name: `Bundling and Minification`, description: `Compile and minify the application into a single JavaScript file.` })]), _createElement($Roadmap_Feature, { name: `Development Server`, icon: this.checkmark, description: `A server that automatically formats code and reloads the application when any of the source files change.` }), _createElement($Roadmap_Feature, { name: `Package Manager`, icon: this.checkmark, description: `Install external sources (packages) directly from Git repositories.` }), _createElement($Roadmap_Feature, { name: `Command Line Interface`, icon: this.checkmark, description: `A binary that allows to access the features of the language.` })])])
  }
}

class $CallToAction extends Component {
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
    return _createElement("div", {
      className: `call-to-action-base`,
      style: {

      }
    }, [_createElement("div", {
      className: `call-to-action-text`,
      style: {

      }
    }, [`Interested?`]), _createElement("div", {
      className: `call-to-action-buttons`,
      style: {

      }
    }, [_createElement($Ui_Link, { href: `/install` }, [_createElement($Ui_Button, { size: 20, type: `secondary`, label: `Install` })]), _createElement($Ui_Link, { href: `https://guide.mint-lang.com`, target: `_blank` }, [_createElement($Ui_Button, { size: 20, type: `secondary`, label: `Learn` })])])])
  }
}

$CallToAction.defaultProps = {
  children: [],text: ``
}

class $Showcase_Highlight extends Component {
  get border() {
    return (_compare(this.over, this.name) ? `1px dashed rgba(0,0,0,0.6)` : `1px dashed rgba(0,0,0,0.1)`)
  }

  get color() {
    return (_compare(this.active, this.name) ? `white` : ``)
  }

  get background() {
    return (_compare(this.active, this.name) ? `#3aad57` : (_compare(this.over, this.name) ? `rgba(0,0,0,0.15)` : `rgba(0,0,0,0.07)`))
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
    return _createElement("div", {
      onMouseLeave: (event => (this.handleMouseLeave.bind(this))(_normalizeEvent(event))),
      onMouseOver: (event => (this.handleMouseEnter.bind(this))(_normalizeEvent(event))),
      onClick: (event => (this.handleClick.bind(this))(_normalizeEvent(event))),
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

class $Showcase_HighlightBlock extends Component {
  get border() {
    return (_compare(this.over, this.name) && !_compare(this.active, this.name) ? `1px dashed rgba(0,0,0,0.8)` : `1px dashed rgba(0,0,0,0.1)`)
  }

  get color() {
    return (_compare(this.active, this.name) ? `white` : ``)
  }

  get background() {
    return (_compare(this.active, this.name) ? `#3aad57` : (_compare(this.over, this.name) ? `rgba(0,0,0,0.15)` : `rgba(0,0,0,0.07)`))
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
    return _createElement("div", {
      onMouseLeave: (event => (this.handleMouseLeave.bind(this))(_normalizeEvent(event))),
      onMouseOver: (event => (this.handleMouseEnter.bind(this))(_normalizeEvent(event))),
      onClick: (event => (this.handleClick.bind(this))(_normalizeEvent(event))),
      className: `showcase-highlight-block-base-media-0 showcase-highlight-block-base`,
      style: {
        [`--showcase-highlight-block-base-background`]: this.background,
        [`--showcase-highlight-block-base-padding`]: this.padding,
        [`--showcase-highlight-block-base-border`]: this.border,
        [`--showcase-highlight-block-base-color`]: this.color
      }
    }, [_createElement("div", {}, [this.line + this.openingChar]), _createElement("div", {
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

class $Showcase extends Component {
  get data() {
    return [new Record({
      title: `Stores`,
      key: `store`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Stores are global containers of application specific data.`]), _createElement("li", {}, [`Stores can be connected to components to reference their functions and properties.`]), _createElement("li", {}, [`Any time data in a store is updated the connected components are re-rendered.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we define a store to contain the value of the counter and the functions to mutate it.`])])
    }), new Record({
      title: `Store Properties`,
      key: `store-property`,
      description: _createElement("ul", {}, [_createElement("li", {}, [`The `, _createElement("code", {}, [`property`]), ` keyword when used in a store defines part of the data that the store contains.`]), _createElement("li", {}, [`The data are available through the `, _createElement("code", {}, [`state`]), ` variable of the store.`])])
    }), new Record({
      title: `Functions`,
      key: `function`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Functions can be defined on modules, components, stores and providers.`]), _createElement("li", {}, [`Functions can be referenced by their names inside the entity which they were defined in.`]), _createElement("li", {}, [`Similarly to some functional languages the body a function can only be a single expression.`])]), _createElement("hr", {}), _createElement("p", {}, [`This function returns `, _createElement("code", {}, [`Void`]), ` which means it does a side-effect.`])])
    }), new Record({
      title: `Next Call`,
      key: `next`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`A next call is used to mutate the state of a component or a store`]), _createElement("li", {}, [`A next call is considered a side-effect which means it always returns `, _createElement("code", {}, [`Void`]), `.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we increment the current state of the counter by 1 and set a new state with the incremented counter.`])])
    }), new Record({
      title: `Component`,
      key: `component`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Components are reusable pieces of code that have specific behavior, styles and content.`]), _createElement("li", {}, [`Components can be composed into HTML elements and other components.`]), _createElement("li", {}, [`Data to components can be send via it's properties.`])]), _createElement("hr", {}), _createElement("p", {}, [`This component contains the counter and two buttons to increment and decrement it.`])])
    }), new Record({
      title: `Connect`,
      key: `connect`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`The connect directive lets you connect a component to a store which allows you to call the stores functions and properties without using the stores name.`]), _createElement("li", {}, [`Components gets rendered when the data in the store changes.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we expose the `, _createElement("code", {}, [`increment`]), ` `, _createElement("code", {}, [`decrement`]), ` functions and the `, _createElement("code", {}, [`counter`]), ` property to the component.`])])
    }), new Record({
      title: `Component Properties`,
      key: `component-property`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`The `, _createElement("code", {}, [`property`]), ` keyword when used in a component defines external data that the component can recieve via HTML attributes.`]), _createElement("li", {}, [`The defined property has a name, type and a default value.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here for the sake of the example we define a disabled property which determines if the counter can be changed.`])])
    }), new Record({
      title: `Styles`,
      key: `style`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Styles define with CSS how an HTML element looks.`]), _createElement("li", {}, [`Styles are identified by a name and the contain CSS declarations and other optionally sub rules.`]), _createElement("li", {}, [`Styles are scoped to the component and the element which uses them.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we define the styles of the main element of the component.`])])
    }), new Record({
      title: `CSS Interpolation`,
      key: `css-interpolation`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Expressions can be evaluated inside a CSS declarations value using CSS interpolation.`]), _createElement("li", {}, [`These expressions are evaluated every time the component is rendered.`]), _createElement("li", {}, [`The resulting type of an expression can only be String or Number.`]), _createElement("li", {}, [`There is no limit on number of interpolations that can be used in a value.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we use the value from the computed property background to style the background of the main element.`])])
    }), new Record({
      title: `CSS Declaration`,
      key: `css-declaration`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Any number of standard CSS declarations can be defined in a style.`]), _createElement("li", {}, [`A CSS declaration consists of a CSS property and a value.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we set a number of CSS properties for the base style.`])])
    }), new Record({
      title: `Computed Properties`,
      key: `get`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Computed properties can be defined on a component with the `, _createElement("code", {}, [`get`]), ` keyword.`]), _createElement("li", {}, [`Computed properties works like regular properties but instead of returning a constant value it can return different values base on the state and the properties.`]), _createElement("li", {}, [`Computed properties are mostly used together with CSS interpolations.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we return a different background color based on the value of the counter.`])])
    }), new Record({
      title: `Render`,
      key: `render`,
      description: _createElement("ul", {}, [_createElement("li", {}, [`The render function renders the component into an HTML tree.`]), _createElement("li", {}, [`The render function is required to return Html, String or an Array of those.`])])
    }), new Record({
      title: `HTML Elements`,
      key: `html-element`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`HTML elements can be written as in standard HTML.`]), _createElement("li", {}, [`HTML elements are not confined to the render function so they can be used as an expression.`]), _createElement("li", {}, [`HTML elements are can only have other HTML elements, HTML expressions and components as children.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we have a button element with two attributes whose values are expressions.`])])
    }), new Record({
      title: `Events`,
      key: `event`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Event attributes are special and their value match specific event types.`]), _createElement("li", {}, [`All event handlers are functions, they take an event record and return Void.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here when clicking on the button we call the decrement function.`])])
    }), new Record({
      title: `Attributes`,
      key: `attribute`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Attributes are either strings or expressions.`]), _createElement("li", {}, [`All attributes must have a value.`]), _createElement("li", {}, [`Some attribute require specific types, for example disabled and readonly require Bool.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we are passing the disabled attribute the value of the disabled property as an expression.`])])
    }), new Record({
      title: `HTML Expressions`,
      key: `html-expression`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`HTML Expressions allows inserting data into HTML elements or components.`]), _createElement("li", {}, [`The return value of an expression must be HTML or String.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we are inserting the string "Increment".`])])
    }), new Record({
      title: `The Main Component`,
      key: `main`,
      description: _createElement("ul", {}, [_createElement("li", {}, [`The component named Main is the one that get's rendered on the screen.`])])
    }), new Record({
      title: `Component Tags`,
      key: `html-component`,
      description: _createElement("div", {}, [_createElement("ul", {}, [_createElement("li", {}, [`Tags that have the name of a component will render that component at the point where the tag is defined.`]), _createElement("li", {}, [`Attributes work like on HTML elements with the difference that they are type checked against the components properties.`])]), _createElement("hr", {}), _createElement("p", {}, [`Here we are rendering the `, _createElement("code", {}, [`Counter`]), ` component.`])])
    })]
  }

  get active () { return $Showcase_Store.active }

  componentWillUnmount () {
    $Showcase_Store._unsubscribe(this)
  }

  componentDidMount () {
    $Showcase_Store._subscribe(this)
  }

  render() {
    let selected = $Maybe.withDefault(new Record({
      description: $Html.empty(),
      title: ``,
      key: ``
    }), $Array.find(((item) => {
    return _compare(item.key, this.active)
    }), this.data))

    return _createElement("div", {
      className: `showcase-row`,
      style: {

      }
    }, [_createElement("div", {
      className: `showcase-base-media-0 showcase-base`,
      style: {

      }
    }, [_createElement("div", {
      className: `showcase-title`,
      style: {

      }
    }, [`Explore an example`]), _createElement("div", {
      className: `showcase-hint`,
      style: {

      }
    }, [`Click on the parts to learn more.`]), _createElement("div", {
      className: `showcase-wrapper-media-0 showcase-wrapper`,
      style: {

      }
    }, [_createElement("pre", {
      className: `showcase-code-media-0 showcase-code`,
      style: {

      }
    }, [_createElement($Showcase_HighlightBlock, { line: `store Counter.Store`, padding: `5px 10px`, name: `store` }, [_createElement($Showcase_Highlight, { text: `property counter : Number = 0`, name: `store-property` }), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_HighlightBlock, { line: `fun increment : Void`, name: `function` }, [_createElement($Showcase_Highlight, { text: `next { state | counter = counter + 1 }`, name: `next` })]), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_Block, { line: `fun decrement : Void` }, [`next { state | counter = counter - 1 }`])]), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_HighlightBlock, { line: `component Counter`, name: `component`, padding: `5px 10px` }, [_createElement($Showcase_Highlight, { text: `connect Counter.Store exposing { increment, decrement, counter }`, name: `connect` }), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_Highlight, { text: `property disabled : Bool = false`, name: `component-property` }), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_HighlightBlock, { line: `style base`, name: `style` }, [`background: `, _createElement($Showcase_Highlight, { text: `{background}`, name: `css-interpolation` }), `;\n`, _createElement($Showcase_Highlight, { text: `border-radius: 5px;`, name: `css-declaration` }), `\ntransition: 320ms;`, `\ndisplay: flex;`, `\npadding: 20px;`, `\nmargin: 20px; `]), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_Block, { line: `style counter` }, [`font-family: sans;`, `\nfont-size: 20px;`, `\npadding: 0 20px;`]), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_HighlightBlock, { line: `get background : String`, name: `get` }, [`if (counter >= 10) {\n`, `  "lightgreen"\n`, `} else {\n`, `  if (counter < 0) {\n`, `    "orangered"\n`, `  } else {\n`, `    "#F2F2F2"\n`, `  }\n`, `}`]), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_HighlightBlock, { line: `fun render : Html`, name: `render` }, [_createElement($Showcase_Block, { closingChar: `</div>`, openingChar: ``, line: `<div::base>` }, [_createElement($Showcase_HighlightBlock, { closingChar: `</button>`, openingChar: ``, line: `<button`, name: `html-element` }, [_createElement($Showcase_Highlight, { text: `onClick={\\event : Html.Event => decrement()}`, name: `event` }), `\ndisabled={disabled}>`, _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), `<{ "Decrement" }>`, _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    })]), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_Block, { closingChar: `</span>`, openingChar: ``, line: `<span::counter>` }, [`<{ Number.toString(counter) }>`]), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_Block, { closingChar: `</button>`, openingChar: ``, line: `<button` }, [`onClick={\\event : Html.Event => increment()}\n`, `disabled=`, _createElement($Showcase_Highlight, { text: `{disabled}`, name: `attribute` }), `>\n`, _createElement($Showcase_Highlight, { text: `<{ "Increment" }>`, name: `html-expression` })])])])]), _createElement("div", {
      className: `showcase-spacer`,
      style: {

      }
    }), _createElement($Showcase_HighlightBlock, { line: `component Main`, name: `main`, padding: `5px 10px` }, [_createElement($Showcase_Block, { line: `fun render : Html` }, [_createElement($Showcase_Highlight, { text: `<Counter disabled={false}/>`, name: `html-component` })])])]), _createElement("div", {
      className: `showcase-description-media-0 showcase-description`,
      style: {

      }
    }, [_createElement("div", {
      className: `showcase-section-title-media-0 showcase-section-title`,
      style: {

      }
    }, [selected.title]), selected.description])])])])
  }
}

class $Showcase_Block extends Component {
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
    return _createElement("div", {
      className: `showcase-block-base`,
      style: {

      }
    }, [_createElement("div", {}, [this.line + this.openingChar]), _createElement("div", {
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

class $UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = new Record({
      saving: false
    })
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
    return (this.isNew ? [] : [_createElement($Ui_Form_Separator, {  }), _createElement($Ui_Button, { onClick: ((event) => {
    return this.handleDelete.bind(this)()
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
      this.setState(_update(this.state, { saving: true }), _resolve)
    })

     await this.createUser.bind(this)()

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { saving: false }), _resolve)
    })

     await $Window.navigate(`/users`) }
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
      this.setState(_update(this.state, { saving: true }), _resolve)
    })

     await this.saveUser.bind(this)()

     await this.refresh.bind(this)()

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { saving: false }), _resolve)
    })

     await $Window.navigate(`/users?page=` + $Number.toString(this.page)) }
            catch(_error) {
              if (_error instanceof DoError) {
              } else {
                console.warn(`Unhandled error in do statement`)
                console.log(_error)
              }
            } 
          })()
  }

  handleDelete() {
    return (async () => {
            try {  await this.deleteUser.bind(this)()

     await $Window.navigate(`/users?page=` + $Number.toString(this.page)) }
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
    return _createElement($Ui_Loader, { shown: this.loading }, [_createElement("div", {}, [_createElement("div", {
      className: `user-form-title`,
      style: {

      }
    }, [this.title]), _createElement("div", {
      className: `user-form-form`,
      style: {

      }
    }, [_createElement($Ui_Form_Field, { label: `First Name` }, [_createElement($Ui_Input, { value: this.user.firstName, onInput: this.setFirstName.bind(this), onClear: this.onClearFirstName.bind(this), placeholder: `John` })]), _createElement($Ui_Form_Field, { label: `Last Name` }, [_createElement($Ui_Input, { value: this.user.lastName, onInput: this.setLastName.bind(this), onClear: this.onClearLastName.bind(this), placeholder: `Doe` })]), _createElement($Ui_Form_Field, { label: `Status` }, [_createElement($Ui_Toggle, { checked: _compare(this.user.status, `locked`), onChange: this.setStatus.bind(this), offLabel: `Locked`, onLabel: `Active`, width: 150 })]), _createElement($Ui_Button, { label: this.buttonLabel, onClick: this.onClick.bind(this), disabled: this.disabled }), this.deleteField])])])
  }
}

$UserForm.defaultProps = {
  isNew: false
}

class $Page extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createElement("div", {
      className: `page-base-media-0 page-base`,
      style: {

      }
    }, [this.children])
  }
}

$Page.defaultProps = {
  children: []
}

class $Ui_Table_Th extends Component {
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
    return _createElement($Ui_Table_Td, { children: this.children, header: true, align: this.align, width: this.width })
  }
}

$Ui_Table_Th.displayName = "Ui.Table.Th"

$Ui_Table_Th.defaultProps = {
  align: `left`,width: `auto`,children: []
}

class $Ui_Toolbar extends Component {
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
    return _createElement("div", {
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

class $Ui_Slider extends Component {
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
    return this.onChange($Maybe.withDefault(0, $Number.fromString($Dom.getValue(event.target))))
  }

  render() {
    return _createElement("input", {
      value: $Number.toString(this.value),
      step: $Number.toString(this.step),
      max: $Number.toString(this.max),
      min: $Number.toString(this.min),
      disabled: this.disabled,
      onChange: (event => (this.changed.bind(this))(_normalizeEvent(event))),
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

class $Ui_Icon_Path extends Component {
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
    return _createElement("svg", {
      onClick: (event => (this.handler)(_normalizeEvent(event))),
      viewBox: this.viewbox,
      height: this.height,
      width: this.width,
      className: `ui-icon-path-svg`,
      style: {
        [`--ui-icon-path-svg-pointer-events`]: this.pointerEvents,
        [`--ui-icon-path-svg-hover-fill`]: this.theme.hover.color,
        [`--ui-icon-path-svg-hover-cursor`]: this.cursor
      }
    }, [_createElement("path", {
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

class $Ui_Toolbar_Separator extends Component {
  render() {
    return _createElement("div", {
      className: `ui-toolbar-separator-base`,
      style: {

      }
    })
  }
}

$Ui_Toolbar_Separator.displayName = "Ui.Toolbar.Separator"

class $Ui_Pagination extends Component {
  get pages() {
    return $Math.floor($Math.max(this.total - 1, 0) / this.perPage)
  }

  get buttonRange() {
    return $Array.range($Math.max(1, this.page - this.sidePages), $Math.min(this.page + this.sidePages + 1, this.pages))
  }

  get buttons() {
    return $Array.map(((index) => {
    return _createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(index)
    }), label: $Number.toString(index + 1), key: $Number.toString(index), outline: !_compare(index, this.page) })
    }), this.buttonRange)
  }

  get previousButton() {
    return (!_compare(this.page, 0) && this.pages > 0 ? _createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(this.page - 1)
    }), outline: true, label: `Prev` }) : $Html.empty())
  }

  get nextButton() {
    return (!_compare(this.page, this.pages) && this.pages > 0 ? _createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(this.page + 1)
    }), outline: true, label: `Next` }) : $Html.empty())
  }

  get leftDots() {
    return (this.sidePages < (this.page - 1) && this.pages > 0 ? _createElement("span", {
      className: `ui-pagination-span`,
      style: {

      }
    }) : $Html.empty())
  }

  get rightDots() {
    return ((this.page + this.sidePages + 1 < this.pages) && this.pages > 0 ? _createElement("span", {
      className: `ui-pagination-span`,
      style: {

      }
    }) : $Html.empty())
  }

  get rightButton() {
    return (this.pages > 1 ? _createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(this.pages)
    }), label: $Number.toString(this.pages + 1), outline: !_compare(this.page, this.pages) }) : $Html.empty())
  }

  get leftButton() {
    return (this.pages >= 1 ? _createElement($Ui_Button, { onClick: ((event) => {
    return this.onChange(0)
    }), outline: !_compare(this.page, 0), label: `1` }) : $Html.empty())
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
    return _createElement("div", {
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

class $Ui_Toolbar_Title extends Component {
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
    return _createElement("div", {
      className: `ui-toolbar-title-base`,
      style: {

      }
    }, [_createElement($Ui_Link, { href: this.href }, [this.children])])
  }
}

$Ui_Toolbar_Title.displayName = "Ui.Toolbar.Title"

$Ui_Toolbar_Title.defaultProps = {
  children: [],href: ``
}

class $Ui_Input extends Component {
  get showCloseIcon() {
    return this.showClearIcon && !_compare(this.value, ``) && $Bool.not(this.disabled) && $Bool.not(this.readonly)
  }

  get paddingRight() {
    return (this.showCloseIcon ? `30px` : `9px`)
  }

  get closeIcon() {
    return (this.showCloseIcon ? _createElement("svg", {
      onClick: (event => (((event) => {
      return this.onClear()
      }))(_normalizeEvent(event))),
      viewBox: `0 0 36 36`,
      height: `36`,
      width: `36`,
      className: `ui-input-icon`,
      style: {
        [`--ui-input-icon-fill`]: this.theme.colors.input.text,
        [`--ui-input-icon-hover-fill`]: this.theme.hover.color
      }
    }, [_createElement("path", {
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
    return _createElement("div", {
      className: `ui-input-base`,
      style: {

      }
    }, [_createElement("input", {
      onChange: (event => (((event) => {
      return this.onChange($Dom.getValue(event.target))
      }))(_normalizeEvent(event))),
      onInput: (event => (((event) => {
      return this.onInput($Dom.getValue(event.target))
      }))(_normalizeEvent(event))),
      onFocus: (event => (((event) => {
      return this.onFocus()
      }))(_normalizeEvent(event))),
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

class $Ui_Pager_Page extends Component {
  get pointerEvents() {
    return (_compare(this.transition, `fade`) && _compare(this.opacity, 0) ? `none` : ``)
  }

  get transform() {
    return (_compare(this.transition, `slide`) ? `translate3d(0,0,0) translateX(` + $Number.toString(this.position) + `%)` : ``)
  }

  get opacity() {
    return (_compare(this.transition, `fade`) ? 1 - $Math.abs(this.position) / 100 : 1)
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
    return _createElement("div", {
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

class $Ui_Pager extends Component {
  constructor(props) {
    super(props)
    this.state = new Record({
      transitioning: false,
      left: ``,
      center: ``
    })
  }

  get isPage() {
    return $Array.any(((item) => {
    return _compare(item.name, this.state.center)
    }), this.pages)
  }

  get hasPage() {
    return $Array.any(((item) => {
    return _compare(item.name, this.active)
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
    return (!_compare(this.state.center, this.active) && this.hasPage ? (this.isPage ? this.switchPages.bind(this)() : new Promise((_resolve) => {
      this.setState(_update(this.state, { center: this.active }), _resolve)
    })) : null)
  }

  switchPages() {
    return (async () => {
            try {  await new Promise((_resolve) => {
      this.setState(_update(this.state, { left: this.state.center, center: this.active, transitioning: true }), _resolve)
    })

     await (async ()=> {
                try {
                  return await $Timer.timeout(this.duration, `a`)
                } catch(_error) {
                  

                  throw new DoError
                }})()

     await new Promise((_resolve) => {
      this.setState(_update(this.state, { transitioning: false, left: `` }), _resolve)
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
    let transitioning = (_compare(this.state.left, item.name) || _compare(this.state.center, item.name)) && this.state.transitioning

    let position = (_compare(this.state.left, item.name) ? -100 : (_compare(this.state.center, item.name) ? 0 : 100))

    return _createElement($Ui_Pager_Page, { transitioning: transitioning, transition: this.transition, position: position, duration: this.duration }, [item.contents])
  }

  render() {
    return _createElement("div", {
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

class $Ui_Link extends Component {
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
          return new Record({
          background: `inherit`,
          focus: `inherit`,
          text: `inherit`
        })
        default:
          return new Record({
          background: ``,
          focus: ``,
          text: ``
        })
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

  get scrollToTop () {
    if (this.props.scrollToTop != undefined) {
      return this.props.scrollToTop
    } else {
      return true
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

    return !_compare(windowUrl.origin, url.origin)
  }

  onClick(event) {
    return (event.ctrlKey || _compare(event.button, 1) || this.sameOrigin.bind(this)() ? null : ($String.isEmpty(this.href) ? $Html_Event.preventDefault(event) : (async () => {
            try {  await $Html_Event.preventDefault(event)

     await $Window.navigate(this.href)

     await (this.scrollToTop ? $Window.setScrollTop(0) : null) }
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
    return _createElement("a", {
      onClick: (event => (this.onClick.bind(this))(_normalizeEvent(event))),
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
  children: [],scrollToTop: true,type: `primary`,target: ``,label: ``,href: ``
}

class $Ui_Loader extends Component {
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
    return _createElement("div", {
      className: `ui-loader-base`,
      style: {

      }
    }, [this.children, _createElement("div", {
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

class $Ui_Toggle extends Component {
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
    return _createElement("button", {
      onClick: (event => (((event) => {
      return this.toggle.bind(this)()
      }))(_normalizeEvent(event))),
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
    }, [_createElement("div", {
      className: `ui-toggle-label`,
      style: {

      }
    }, [this.onLabel]), _createElement("div", {
      className: `ui-toggle-label`,
      style: {

      }
    }, [this.offLabel]), _createElement("div", {
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

class $Ui_Time extends Component {
  constructor(props) {
    super(props)
    this.state = new Record({
      now: $Time.now()
    })
  }

  get date () {
    if (this.props.date != undefined) {
      return this.props.date
    } else {
      return $Time.now()
    }
  }

  componentWillUnmount () {
    $Provider_Tick._unsubscribe(this)
  }

  componentDidUpdate () {
    if (true) {
      $Provider_Tick._subscribe(this, new Record({
      ticks: (() => {
      return new Promise((_resolve) => {
        this.setState(new Record({
        now: $Time.now()
      }), _resolve)
      })
      })
    }))
    } else {
      $Provider_Tick._unsubscribe(this)
    }
  }

  componentDidMount () {
    if (true) {
      $Provider_Tick._subscribe(this, new Record({
      ticks: (() => {
      return new Promise((_resolve) => {
        this.setState(new Record({
        now: $Time.now()
      }), _resolve)
      })
      })
    }))
    } else {
      $Provider_Tick._unsubscribe(this)
    }
  }

  render() {
    return _createElement("div", {
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

class $Ui_Table_Td extends Component {
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
    return _createElement("td", {
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

class $Ui_Button extends Component {
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
          return new Record({
          background: ``,
          focus: ``,
          text: ``
        })
      }
    })())
  }

  get actualIcon() {
    return (_compare(this.icon, $Html.empty()) ? $Html.empty() : _createElement("div", {
      className: `ui-button-icon`,
      style: {
        [`--ui-button-icon-height`]: this.size + `px`,
        [`--ui-button-icon-width`]: this.size + `px`
      }
    }, [this.icon]))
  }

  get actualGutter() {
    return (_compare(this.icon, $Html.empty()) ? $Html.empty() : _createElement("div", {
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
    return _createElement("button", {
      onMouseDown: (event => (this.onMouseDown)(_normalizeEvent(event))),
      disabled: this.disabled,
      readonly: this.readonly,
      onClick: (event => (this.onClick)(_normalizeEvent(event))),
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
    }, [_createElement("div", {
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

class $Ui_Card extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createElement("div", {
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

class $Ui_Card_Image extends Component {
  get src () {
    if (this.props.src != undefined) {
      return this.props.src
    } else {
      return ``
    }
  }

  render() {
    return _createElement("img", {
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

class $Ui_Card_Block extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createElement("div", {
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

class $Ui_Card_Title extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createElement("div", {
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

class $Ui_Card_Text extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createElement("div", {
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

class $Ui_Calendar_Cell extends Component {
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
    return _createElement("div", {
      title: $Time.format(`YYYY-MM-DD HH:mm:ss`, this.day),
      onClick: (event => (((event) => {
      return this.onClick(this.day)
      }))(_normalizeEvent(event))),
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

class $Ui_Toolbar_Link extends Component {
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
    return _createElement("div", {
      className: `ui-toolbar-link-base`,
      style: {

      }
    }, [_createElement($Ui_Link, { target: this.target, label: this.label, href: this.href })])
  }
}

$Ui_Toolbar_Link.displayName = "Ui.Toolbar.Link"

$Ui_Toolbar_Link.defaultProps = {
  target: ``,label: ``,href: ``
}

class $Ui_Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = new Record({
      uid: $Uid.generate(),
      left: 0,
      top: 0
    })
  }

  get panel() {
    return _createElement("div", {
      id: this.state.uid,
      className: `ui-dropdown-panel`,
      style: {
        [`--ui-dropdown-panel-left`]: this.state.left + `px`,
        [`--ui-dropdown-panel-top`]: this.state.top + `px`
      }
    }, [this.children])
  }

  get panelPortal() {
    return (this.open ? _createElement($Html_Portals_Body, {  }, [this.panel]) : $Html.empty())
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
    $Provider_Mouse._unsubscribe(this);$Provider_AnimationFrame._unsubscribe(this)
  }

  componentDidUpdate () {
    if (this.open) {
      $Provider_Mouse._subscribe(this, new Record({
      clicks: ((event) => {
      return null
      }),
      moves: ((data) => {
      return null
      }),
      ups: ((data) => {
      return null
      })
    }))
    } else {
      $Provider_Mouse._unsubscribe(this)
    };if (this.open) {
      $Provider_AnimationFrame._subscribe(this, new Record({
      frames: this.updateDimensions.bind(this)
    }))
    } else {
      $Provider_AnimationFrame._unsubscribe(this)
    }
  }

  componentDidMount () {
    if (this.open) {
      $Provider_Mouse._subscribe(this, new Record({
      clicks: ((event) => {
      return null
      }),
      moves: ((data) => {
      return null
      }),
      ups: ((data) => {
      return null
      })
    }))
    } else {
      $Provider_Mouse._unsubscribe(this)
    };if (this.open) {
      $Provider_AnimationFrame._subscribe(this, new Record({
      frames: this.updateDimensions.bind(this)
    }))
    } else {
      $Provider_AnimationFrame._unsubscribe(this)
    }
  }

  updateDimensions() {
    let dom = $Maybe.withDefault($Dom.createElement(`div`), $Dom.getElementById(this.state.uid))

    let width = $Window.width()

    let height = $Window.height()

    let panelDimensions = $Dom.getDimensions(dom)

    let dimensions = $Dom.getDimensions(ReactDOM.findDOMNode(this))

    let top = dimensions.top + dimensions.height

    let left = dimensions.left

    return new Promise((_resolve) => {
      this.setState(_update(this.state, { top: top, left: left }), _resolve)
    })
  }

  render() {
    return [this.element, this.panelPortal]
  }
}

$Ui_Dropdown.displayName = "Ui.Dropdown"

$Ui_Dropdown.defaultProps = {
  element: $Html.empty(),children: [],open: true
}

class $Ui_Form_Label extends Component {
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
    return _createElement("div", {
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

class $Ui_Checkbox extends Component {
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
    return _createElement("button", {
      disabled: this.disabled,
      onClick: (event => (((event) => {
      return this.toggle.bind(this)()
      }))(_normalizeEvent(event))),
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
    }, [_createElement("svg", {
      viewBox: `0 0 36 36`,
      className: `ui-checkbox-icon`,
      style: {
        [`--ui-checkbox-icon-transform`]: this.transform,
        [`--ui-checkbox-icon-opacity`]: this.opacity
      }
    }, [_createElement("path", {
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

class $Ui_Toolbar_Spacer extends Component {
  render() {
    return _createElement("div", {
      className: `ui-toolbar-spacer-base`,
      style: {

      }
    })
  }
}

$Ui_Toolbar_Spacer.displayName = "Ui.Toolbar.Spacer"

class $Ui_Form_Separator extends Component {
  render() {
    return _createElement("div", {
      className: `ui-form-separator-base`,
      style: {

      }
    })
  }
}

$Ui_Form_Separator.displayName = "Ui.Form.Separator"

class $Ui_Calendar extends Component {
  get nextMonthIcon() {
    return _createElement($Ui_Icon_Path, { onClick: ((event) => {
    return this.nextMonth.bind(this)()
    }), viewbox: `0 0 9 16`, height: `16px`, width: `9px`, path: `M6 8L.1 1.78c-.14-.16-.14-.4.02-.57L1.17.13c.15-.16.4-.16.54 0l7.2 7.6c.07.07.1.18.1.28 0 .1-.03.2-.1.3l-7.2 7.6c-.14.14-.38.14-.53-.02l-1.05-1.1c-.16-.15-.16-.4 0-.56L5.98 8z` })
  }

  get previousMonthIcon() {
    return _createElement($Ui_Icon_Path, { onClick: ((event) => {
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
    return (!_compare($Time.month(day), $Time.month(this.month)) && this.changeMonthOnSelect ? (async () => {
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
    return _createElement($Ui_Calendar_Cell, { active: $Array.any(((item) => {
    return _compare(day, item)
    }), range), selected: _compare(this.date, day), onClick: this.onCellClick.bind(this), day: day })
    }), this.days.bind(this)())
  }

  dayName(day) {
    return _createElement("div", {
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
    return _createElement("div", {
      className: `ui-calendar-base`,
      style: {
        [`--ui-calendar-base-background`]: this.theme.colors.input.background,
        [`--ui-calendar-base-border`]: `1px solid ` + this.theme.border.color,
        [`--ui-calendar-base-border-radius`]: this.theme.border.radius,
        [`--ui-calendar-base-color`]: this.theme.colors.input.text,
        [`--ui-calendar-base-font-family`]: this.theme.fontFamily
      }
    }, [_createElement("div", {
      className: `ui-calendar-header`,
      style: {

      }
    }, [this.previousMonthIcon, _createElement("div", {
      className: `ui-calendar-text`,
      style: {

      }
    }, [$Time.format(`MMMM - YYYY`, this.month)]), this.nextMonthIcon]), _createElement("div", {
      className: `ui-calendar-day-names`,
      style: {
        [`--ui-calendar-day-names-border-bottom`]: `1px dashed ` + this.theme.border.color,
        [`--ui-calendar-day-names-border-top`]: `1px dashed ` + this.theme.border.color
      }
    }, [this.dayNames.bind(this)()]), _createElement("div", {
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

class $Ui_Table extends Component {
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
    return _createElement("table", {}, [_createElement("thead", {}, [this.headers])])
  }
}

$Ui_Table.displayName = "Ui.Table"

$Ui_Table.defaultProps = {
  headers: [],rows: []
}

class $Ui_Form_Field extends Component {
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
    return _createElement("div", {
      className: `ui-form-field-base`,
      style: {
        [`--ui-form-field-base-flex-direction`]: this.flexDirection,
        [`--ui-form-field-base-align-items`]: this.alignItems,
        [`--ui-form-field-base-first-child-margin-right`]: this.marginRight,
        [`--ui-form-field-base-last-child-margin-bottom`]: this.marginBottom
      }
    }, [this.children, _createElement($Ui_Form_Label, { text: this.label, fontSize: this.labelSize })])
  }
}

$Ui_Form_Field.displayName = "Ui.Form.Field"

$Ui_Form_Field.defaultProps = {
  orientation: `vertical`,children: [],label: ``
}

class $Ui_Breadcrumb extends Component {
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
    return _createElement("div", {
      className: `ui-breadcrumb-base`,
      style: {
        [`--ui-breadcrumb-base-hover-color`]: this.theme.hover.color,
        [`--ui-breadcrumb-base-a-focus-color`]: this.theme.hover.color
      }
    }, [_createElement($Ui_Link, { children: this.children, target: this.target, type: `inherit`, label: this.label, href: this.href })])
  }
}

$Ui_Breadcrumb.displayName = "Ui.Breadcrumb"

$Ui_Breadcrumb.defaultProps = {
  children: [],target: ``,label: ``,type: ``,href: ``
}

class $Ui_Breadcrumbs extends Component {
  get span() {
    return _createElement("span", {
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
    return _createElement("div", {
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

class $Html_Portals_Body extends Component {
  get children () {
    if (this.props.children != undefined) {
      return this.props.children
    } else {
      return []
    }
  }

  render() {
    return _createPortal(this.children, document.body)
  }
}

$Html_Portals_Body.displayName = "Html.Portals.Body"

$Html_Portals_Body.defaultProps = {
  children: []
}

_insertStyles(`
  .title-base {
    font-family: Amiko;
    font-weight: 600;
    font-size: 32px;
    line-height: 1;
    color: #222;
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

  .sub-title-base {
    margin: 10px 0;
  }

  .example-frame {
    border: 1px solid #DDD;
    min-height: 500px;
    background: #FFF;
    margin-top: 20px;
  }

  .logo-base {
    height: var(--logo-base-height);
    width: var(--logo-base-width);
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

  .footer-base {
    min-height: 200px;
    background: #222;
    margin-top: auto;
    color: #BBB;
  }

  .footer-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px 50px;
    display: grid;
    padding: 30px 20px;
    max-width: 1040px;
    margin: 0 auto;
  }

  .footer-column {
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

  .header-base {
    background: #222;
    color: #EEE;
  }

  .header-wrapper {
    align-items: center;
    max-width: 1040px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    height: 50px;
  }

  .header-desktop {
    align-items: center;
    display: none;
  }

  .header-desktop > a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    color: inherit;
  }

  .header-desktop > a:focus {
    color: inherit;
  }

  .header-desktop > a:hover {
    color: inherit;
  }

  .users-layout-wrapper {
    max-width: 1040px;
    padding: 0 20px;
    margin: 0 auto;
  }

  .users-layout-content {
    padding: 24px 0;
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

  .roadmap-feature-base {
    display: flex;
  }

  .roadmap-feature-icon {
    margin-right: 10px;
    opacity: 0.3;
  }

  .roadmap-feature-icon:empty {
    display: none;
  }

  .roadmap-feature-icon > svg {
    height: 12px;
    width: 12px;
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

  .showcase-highlight-base {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background: var(--showcase-highlight-base-background);
    border-radius: 2px;
    border: var(--showcase-highlight-base-border);
    padding: 3px 5px;
    cursor: pointer;
    display: inline;
    color: var(--showcase-highlight-base-color);
  }

  .showcase-highlight-block-base {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
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
    font-size: 0.88em;
    padding: 1px 5px;
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

  .showcase-block-base {
    border-radius: 2px;
    cursor: pointer;
    padding: 0 5px;
  }

  .showcase-block-content {
    padding-left: 20px;
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

  .page-base {
    max-width: 1040px;
    margin: 0 auto;
    width: 100%;
    color: #444;
    padding: 50px 20px;
    padding-bottom: 100px;
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

  .ui-icon-path-svg {
    pointer-events: var(--ui-icon-path-svg-pointer-events);
    fill: currentColor;
  }

  .ui-icon-path-svg:hover {
    fill: var(--ui-icon-path-svg-hover-fill);
    cursor: var(--ui-icon-path-svg-hover-cursor);
  }

  .ui-toolbar-separator-base {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    margin: 0 15px;
    height: 30px;
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

  .ui-time-base {
    display: inline-block;
  }

  .ui-table-td-td {
    border: var(--ui-table-td-td-border);
    border-bottom: var(--ui-table-td-td-border-bottom);
    font-weight: var(--ui-table-td-td-font-weight);
    text-align: var(--ui-table-td-td-text-align);
    padding: 7px 10px;
    width: var(--ui-table-td-td-width);
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

  .ui-dropdown-panel {
    position: fixed;
    left: var(--ui-dropdown-panel-left);
    top: var(--ui-dropdown-panel-top);
  }

  .ui-form-label-base {
    font-size: var(--ui-form-label-base-font-size);
    font-family: var(--ui-form-label-base-font-family);
    font-weight: bold;
    opacity: 0.8;
    color: #333;
    flex: 1;
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

  .ui-toolbar-spacer-base {
    flex: 1;
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
  }  @media (max-width: 600px)  {
    .title-base-media-0 {
      font-size: 24px;
    }

    .sub-title-base-media-0 {
      font-size: 14px;
    }

    .install-list-media-0 {
      padding-left: 15px;
      font-size: 14px;
    }

    .home-hero-media-0 {
      height: 300px;
    }

    .home-slogan-media-0 {
      margin-top: 10px;
      font-size: 13px;
    }

    .showcase-highlight-block-base-media-0 {
      white-space: pre-wrap;
    }

    .showcase-base-media-0 {
      padding-bottom: 20px;
    }

    .showcase-code-media-0 {
      margin-bottom: 20px;
    }

    .showcase-description-media-0 {
      background: rgba(255,255,255,0.92);
      font-size: 13px;
      padding: 10px 0;
      margin-left: 0;
      bottom: 0;
    }

    .showcase-wrapper-media-0 {
      font-size: 12px;
      display: block;
    }

    .showcase-section-title-media-0 {
      font-size: 18px;
    }

    .page-base-media-0 {
      padding: 20px;
      padding-top: 25px;
    }}

  @media (max-width: 500px)  {
    .logo-base-media-0 {
      height: var(--logo-base-media-0-height);
      width: var(--logo-base-media-0-width);
    }}

  @media (min-width: 600px)  {
    .header-desktop-media-0 {
      display: flex;
    }}
`)
_program.render($Main)
})()