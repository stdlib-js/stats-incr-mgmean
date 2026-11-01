"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var o=c(function(h,l){
var g=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,s=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/math-base-special-exp/dist'),N=require('@stdlib/array-float64/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist');function x(i){var r,e,v,a,t;if(!g(i))throw new TypeError(w('1Hx8B',i));return r=new N(i),e=0,t=-1,a=0,m;function m(f){var u,n;if(arguments.length===0)return a===0?null:v;if(t=(t+1)%i,u=q(f),s(f))a=i,e=NaN;else if(a<i)a+=1,e+=u;else if(s(r[t])){for(a=1,e=u,n=0;n<i;n++)if(n!==t){if(s(r[n])){a=i,e=NaN;break}a+=1,e+=r[n]}}else s(e)===!1&&(e+=u-r[t]);return r[t]=u,v=p(e/a),v}}l.exports=x
});var b=o();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
