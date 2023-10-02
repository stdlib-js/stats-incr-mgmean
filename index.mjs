// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function m(m){var d,l,o,a,f;if(!s(m))throw new TypeError(n("1Hx8B,Hs",m));return d=new i(m),l=0,f=-1,a=0,function(s){var i,n;if(0===arguments.length)return 0===a?null:o;if(f=(f+1)%m,i=t(s),e(s))a=m,l=NaN;else if(a<m)a+=1,l+=i;else if(e(d[f])){for(a=1,l=i,n=0;n<m;n++)if(n!==f){if(e(d[n])){a=m,l=NaN;break}a+=1,l+=d[n]}}else!1===e(l)&&(l+=i-d[f]);return d[f]=i,o=r(l/a)}}export{m as default};
//# sourceMappingURL=index.mjs.map
