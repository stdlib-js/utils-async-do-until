"use strict";var v=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=v(function(p,g){
var l=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function h(t,r,u,m){var e,i;if(!l(t))throw new TypeError(s('1Qz3c',t));if(!l(r))throw new TypeError(s('1Qz2H',r));if(!l(u))throw new TypeError(s('1Qz3N',u));e=[],i=0,t.call(m,i,f);function f(a){var n;if(a)return u(a);if(i+=1,arguments.length>1)for(e=new Array(arguments.length-1),n=1;n<arguments.length;n++)e[n-1]=arguments[n];r(i,c)}function c(a,n){if(a)return u(a);if(!n)return t.call(m,i,f);e.length&&e.unshift(null),u.apply(null,e)}}g.exports=h
});var w=o();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
