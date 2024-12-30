// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function l(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,v,"$1e"),t=p.call(t,w,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),e.alternate&&(t=p.call(t,h,"$1."),t=p.call(t,y,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,j=Array.isArray;function S(e){return e!=e}function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,i,a,c,s,u,f,p,g,d,h;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))c+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+_(h):_(h)+p)),c+=n.arg||"",s+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var C,F=Object.prototype,I=F.toString,$=F.__defineGetter__,P=F.__defineSetter__,R=F.__lookupGetter__,B=F.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||B.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&P&&P.call(e,r,t.set),e};var L=C;function G(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Q="function"==typeof Symbol?Symbol:void 0,X="function"==typeof Q?Q.toStringTag:"",N=z()?function(e){var r,t,n,i,o;if(null==e)return W.call(e);t=e[X],o=X,r=null!=(i=e)&&M.call(i,o);try{e[X]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[X]=t:delete e[X],n}:function(e){return W.call(e)},H=Boolean,q=Boolean.prototype.toString,D=z();function J(e){return"object"==typeof e&&(e instanceof H||(D?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===N(e)))}function K(e){return U(e)||J(e)}G(K,"isPrimitive",U),G(K,"isObject",J);var Y="object"==typeof self?self:null,ee="object"==typeof window?window:null,re="object"==typeof globalThis?globalThis:null,te=function(e){if(arguments.length){if(!U(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(re)return re;if(Y)return Y;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}(),ne=te.document&&te.document.childNodes,ie=Int8Array;function oe(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;G(oe,"REGEXP",ae);var ce=Array.isArray?Array.isArray:function(e){return"[object Array]"===N(e)};function le(e){return null!==e&&"object"==typeof e}function se(e){var r,t,n,i;if(("Object"===(t=N(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ae.exec(n.toString()))return r[1]}return le(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(le,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ce(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(le));var ue="function"==typeof e||"object"==typeof ie||"function"==typeof ne?function(e){return se(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?se(e).toLowerCase():r};function fe(e){return"function"===ue(e)}function pe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r,t,n){var i,o;if(!fe(e))throw new TypeError(pe("1Qz3c",e));if(!fe(r))throw new TypeError(pe("1Qz2H",r));if(!fe(t))throw new TypeError(pe("1Qz3N",t));function a(e){var n;if(e)return t(e);if(o+=1,arguments.length>1)for(i=new Array(arguments.length-1),n=1;n<arguments.length;n++)i[n-1]=arguments[n];r(o,c)}function c(r,c){return r?t(r):c?(i.length&&i.unshift(null),void t.apply(null,i)):e.call(n,o,a)}i=[],o=0,e.call(n,o,a)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).doUntilAsync=r();
//# sourceMappingURL=browser.js.map
