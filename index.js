// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,a){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(t,n)||f.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=a.value,t.__proto__=c):t[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,a.get),p&&i&&i.call(t,n,a.set),t};function c(t,n,r){a(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",m=p()?function(t){var n,r,e,o,i;if(null==t)return v.call(t);r=t[s],i=s,n=null!=(o=t)&&b.call(o,i);try{t[s]=void 0}catch(n){return v.call(t)}return e=v.call(t),n?t[s]=r:delete t[s],e}:function(t){return v.call(t)},d=Number,w=d.prototype.toString,A=p();function _(t){return"object"==typeof t&&(t instanceof d||(A?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function h(t){return l(t)||_(t)}c(h,"isPrimitive",l),c(h,"isObject",_);var g=Number.POSITIVE_INFINITY,j=d.NEGATIVE_INFINITY,U=Math.floor;function O(t){return t<g&&t>j&&U(n=t)===n;var n}function N(t){return l(t)&&O(t)}function I(t){return _(t)&&O(t.valueOf())}function S(t){return N(t)||I(t)}function T(t){return N(t)&&t>0}function E(t){return I(t)&&t.valueOf()>0}function F(t){return T(t)||E(t)}function P(t){return t!=t}c(S,"isPrimitive",N),c(S,"isObject",I),c(F,"isPrimitive",T),c(F,"isObject",E);var H,G="function"==typeof Uint32Array,x="function"==typeof Uint32Array?Uint32Array:null,L="function"==typeof Uint32Array?Uint32Array:void 0;H=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(G&&r instanceof Uint32Array||"[object Uint32Array]"===m(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?L:function(){throw new Error("not implemented")};var V,W=H,k="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,C="function"==typeof Float64Array?Float64Array:void 0;V=function(){var t,n,r;if("function"!=typeof M)return!1;try{n=new M([1,3.14,-3.14,NaN]),r=n,t=(k&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?C:function(){throw new Error("not implemented")};var Y,R=V,q="function"==typeof Uint8Array,z="function"==typeof Uint8Array?Uint8Array:null,B="function"==typeof Uint8Array?Uint8Array:void 0;Y=function(){var t,n,r;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,256,257]),r=n,t=(q&&r instanceof Uint8Array||"[object Uint8Array]"===m(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?B:function(){throw new Error("not implemented")};var D,J=Y,K="function"==typeof Uint16Array,Q="function"==typeof Uint16Array?Uint16Array:null,X="function"==typeof Uint16Array?Uint16Array:void 0;D=function(){var t,n,r;if("function"!=typeof Q)return!1;try{n=new Q(n=[1,3.14,-3.14,65536,65537]),r=n,t=(K&&r instanceof Uint16Array||"[object Uint16Array]"===m(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?X:function(){throw new Error("not implemented")};var Z,$={uint16:D,uint8:J};(Z=new $.uint16(1))[0]=4660;var tt=52===new $.uint8(Z.buffer)[0],nt=!0===tt?1:0,rt=new R(1),et=new W(rt.buffer);function ot(t){return rt[0]=t,et[nt]}var it=!0===tt?1:0,ut=new R(1),ft=new W(ut.buffer),at=1023,ct=.6931471803691238,lt=1.9082149292705877e-10,yt=1048575;function pt(t){var n,r,e,o,i,u,f,a,c,l,y,p;return 0===t?j:P(t)||t<0?NaN:(i=0,(r=ot(t))<1048576&&(i-=54,r=ot(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-at|0,i+=(a=614244+(r&=yt)&1048576|0)>>20|0,f=(t=function(t,n){return ut[0]=t,ft[it]=n>>>0,ut[0]}(t,r|1072693248^a))-1,(yt&2+r)<3?0===f?0===i?0:i*ct+i*lt:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*ct-(u-i*lt-f)):(a=r-398458|0,c=440401-r|0,o=(y=(p=(l=f/(2+f))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=e+o,(a|=c)>0?(n=.5*f*f,0===i?f-(n-l*(n+u)):i*ct-(n-(l*(n+u)+i*lt)-f)):0===i?f-l*(f-u):i*ct-(l*(f-u)-i*lt-f))))}var vt,bt,st=Math.ceil;function mt(t){return t<0?st(t):U(t)}function dt(t){return t===g||t===j}!0===tt?(vt=1,bt=0):(vt=0,bt=1);var wt,At,_t={HIGH:vt,LOW:bt},ht=new R(1),gt=new W(ht.buffer),jt=_t.HIGH,Ut=_t.LOW;function Ot(t,n){return ht[0]=n,t[0]=gt[jt],t[1]=gt[Ut],t}function Nt(t,n){return 1===arguments.length?Ot([0,0],t):Ot(t,n)}!0===tt?(wt=1,At=0):(wt=0,At=1);var It={HIGH:wt,LOW:At},St=new R(1),Tt=new W(St.buffer),Et=It.HIGH,Ft=It.LOW;function Pt(t,n){return Tt[Et]=t,Tt[Ft]=n,St[0]}var Ht=[0,0];function Gt(t,n){return P(n)||dt(n)?(t[0]=n,t[1]=0,t):0!==n&&function(t){return Math.abs(t)}(n)<22250738585072014e-324?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)}var xt=[0,0],Lt=[0,0];function Vt(t,n){var r,e,o,i,u;return 0===n||0===t||P(t)||dt(t)?t:(function(t,n){1===arguments.length?Gt([0,0],t):Gt(t,n)}(xt,t),n+=xt[1],n+=function(t){var n=ot(t);return(n=(2146435072&n)>>>20)-at|0}(t=xt[0]),n<-1074?(o=t,Nt(Ht,0),i=Ht[0],i&=2147483647,u=ot(o),Pt(i|=u&=2147483648,Ht[1])):n>1023?t<0?j:g:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nt(Lt,t),r=Lt[0],r&=2148532223,e*Pt(r|=n+at<<20,Lt[1])))}var Wt=1.4426950408889634,kt=1/(1<<28);function Mt(t){var n;return P(t)||t===g?t:t===j?0:t>709.782712893384?g:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<kt?1+t:function(t,n,r){var e,o,i,u;return Vt(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(t-.6931471803691238*(n=mt(t<0?Wt*t-.5:Wt*t+.5)),1.9082149292705877e-10*n,n)}return function(t){var n,r,e,o,i;if(!T(t))throw new TypeError(function(){var t,n=arguments,r="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)r+="&arg[]="+encodeURIComponent(n[t]);return r}("0ds8T",t));return n=new R(t),r=0,i=-1,o=0,function(u){var f,a;if(0===arguments.length)return 0===o?null:e;if(i=(i+1)%t,f=pt(u),P(u))o=t,r=NaN;else if(o<t)o+=1,r+=f;else if(P(n[i])){for(o=1,r=f,a=0;a<t;a++)if(a!==i){if(P(n[a])){o=t,r=NaN;break}o+=1,r+=n[a]}}else!1===P(r)&&(r+=f-n[i]);return n[i]=f,e=Mt(r/o)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmgmean=n();
//# sourceMappingURL=index.js.map
