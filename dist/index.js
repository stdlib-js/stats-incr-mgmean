"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=c(function(h,l){
var g=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,s=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/math-base-special-exp/dist'),N=require('@stdlib/array-float64/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist');function x(e){var r,i,v,a,t;if(!g(e))throw new TypeError(w('1Hx8B',e));return r=new N(e),i=0,t=-1,a=0,m;function m(f){var u,n;if(arguments.length===0)return a===0?null:v;if(t=(t+1)%e,u=q(f),s(f))a=e,i=NaN;else if(a<e)a+=1,i+=u;else if(s(r[t])){for(a=1,i=u,n=0;n<e;n++)if(n!==t){if(s(r[n])){a=e,i=NaN;break}a+=1,i+=r[n]}}else s(i)===!1&&(i+=u-r[t]);return r[t]=u,v=p(i/a),v}}l.exports=x
});var b=o();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
