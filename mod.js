// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,l=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,a,p,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(r,t,e.get),y&&l&&l.call(r,t,e.set),r};var a=e;function p(r,t,e){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(r){return"boolean"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(r){var t,e,n,o,i;if(null==r)return v.call(r);e=r[w],i=w,t=null!=(o=r)&&d.call(o,i);try{r[w]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[w]=e:delete r[w],n}:function(r){return v.call(r)},_=Boolean.prototype.toString;var h=b();function j(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function m(r){return y(r)||j(r)}function S(){return new Function("return this;")()}p(m,"isPrimitive",y),p(m,"isObject",j);var E="object"==typeof self?self:null,A="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof O?O:null;var B=function(r){if(arguments.length){if(!y(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return S()}if(E)return E;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,L=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",C);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};function k(r){return null!==r&&"object"==typeof r}function G(r){var t,e,n,o;if(("Object"===(e=g(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return k(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(k,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!V(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(k));var F="function"==typeof r||"object"==typeof L||"function"==typeof P?function(r){return G(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?G(r).toLowerCase():t};function I(r){return"function"===F(r)}function M(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function R(r,t,e,n){var o,i;if(!I(r))throw new TypeError(M("0iL3p",r));if(!I(t))throw new TypeError(M("0iL2S",t));if(!I(e))throw new TypeError(M("0iL3Z",e));function u(r){var n;if(r)return e(r);if(i+=1,arguments.length>1)for(o=new Array(arguments.length-1),n=1;n<arguments.length;n++)o[n-1]=arguments[n];t(i,l)}function l(t,l){return t?e(t):l?(o.length&&o.unshift(null),void e.apply(null,o)):r.call(n,i,u)}o=[],i=0,r.call(n,i,u)}export{R as default};
//# sourceMappingURL=mod.js.map
