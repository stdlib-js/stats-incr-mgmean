// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,f.get),v&&i&&i.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var s=v()?function(r){var t,n,e,o,i;if(null==r)return p.call(r);n=r[w],i=w,t=null!=(o=r)&&b.call(o,i);try{r[w]=void 0}catch(t){return p.call(r)}return e=p.call(r),t?r[w]=n:delete r[w],e}:function(r){return p.call(r)},m=Number,A=m.prototype.toString;var _=v();function d(r){return"object"==typeof r&&(r instanceof m||(_?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Number]"===s(r)))}function h(r){return l(r)||d(r)}c(h,"isPrimitive",l),c(h,"isObject",d);var U=Number.POSITIVE_INFINITY,j=m.NEGATIVE_INFINITY,g=Math.floor;function O(r){return r<U&&r>j&&g(t=r)===t;var t}function N(r){return l(r)&&O(r)}function I(r){return d(r)&&O(r.valueOf())}function S(r){return N(r)||I(r)}function E(r){return N(r)&&r>0}function F(r){return I(r)&&r.valueOf()>0}function T(r){return E(r)||F(r)}function P(r){return r!=r}c(S,"isPrimitive",N),c(S,"isObject",I),c(T,"isPrimitive",E),c(T,"isObject",F);var H="function"==typeof Uint32Array;var G="function"==typeof Uint32Array?Uint32Array:null;var L,V="function"==typeof Uint32Array?Uint32Array:void 0;L=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(H&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W=L,k="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null;var M,C="function"==typeof Float64Array?Float64Array:void 0;M=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,NaN]),n=t,r=(k&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?C:function(){throw new Error("not implemented")};var Y=M,R="function"==typeof Uint8Array;var q="function"==typeof Uint8Array?Uint8Array:null;var z,B="function"==typeof Uint8Array?Uint8Array:void 0;z=function(){var r,t,n;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,256,257]),n=t,r=(R&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D=z,J="function"==typeof Uint16Array;var K="function"==typeof Uint16Array?Uint16Array:null;var Q,X="function"==typeof Uint16Array?Uint16Array:void 0;Q=function(){var r,t,n;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,65536,65537]),n=t,r=(J&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Z,$={uint16:Q,uint8:D};(Z=new $.uint16(1))[0]=4660;var rr=52===new $.uint8(Z.buffer)[0],tr=!0===rr?1:0,nr=new Y(1),er=new W(nr.buffer);function or(r){return nr[0]=r,er[tr]}var ir=!0===rr?1:0,ur=new Y(1),ar=new W(ur.buffer);var fr=.6931471803691238,cr=1.9082149292705877e-10;function lr(r){var t,n,e,o,i,u,a,f,c,l,y,v;return 0===r?j:P(r)||r<0?NaN:(i=0,(n=or(r))<1048576&&(i-=54,n=or(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(f=(n&=1048575)+614244&1048576|0)>>20|0,a=(r=function(r,t){return ur[0]=r,ar[ir]=t>>>0,ur[0]}(r,n|1072693248^f))-1,(1048575&2+n)<3?0===a?0===i?0:i*fr+i*cr:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*fr-(u-i*cr-a)):(f=n-398458|0,c=440401-n|0,o=(y=(v=(l=a/(2+a))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),u=e+o,(f|=c)>0?(t=.5*a*a,0===i?a-(t-l*(t+u)):i*fr-(t-(l*(t+u)+i*cr)-a)):0===i?a-l*(a-u):i*fr-(l*(a-u)-i*cr-a))))}var yr=Math.ceil;function vr(r){return r<0?yr(r):g(r)}var pr,br;function wr(r){return r===U||r===j}!0===rr?(pr=1,br=0):(pr=0,br=1);var sr,mr,Ar={HIGH:pr,LOW:br},_r=new Y(1),dr=new W(_r.buffer),hr=Ar.HIGH,Ur=Ar.LOW;function jr(r,t){return _r[0]=t,r[0]=dr[hr],r[1]=dr[Ur],r}function gr(r,t){return 1===arguments.length?jr([0,0],r):jr(r,t)}!0===rr?(sr=1,mr=0):(sr=0,mr=1);var Or={HIGH:sr,LOW:mr},Nr=new Y(1),Ir=new W(Nr.buffer),Sr=Or.HIGH,Er=Or.LOW;function Fr(r,t){return Ir[Sr]=r,Ir[Er]=t,Nr[0]}var Tr=[0,0];function Pr(r,t){return P(t)||wr(t)?(r[0]=t,r[1]=0,r):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Hr=[0,0],Gr=[0,0];function Lr(r,t){var n,e,o,i,u;return 0===t||0===r||P(r)||wr(r)?r:(function(r,t){1===arguments.length?Pr([0,0],r):Pr(r,t)}(Hr,r),t+=Hr[1],t+=function(r){var t=or(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Hr[0]),t<-1074?(o=r,gr(Tr,0),i=Tr[0],i&=2147483647,u=or(o),Fr(i|=u&=2147483648,Tr[1])):t>1023?r<0?j:U:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,gr(Gr,r),n=Gr[0],n&=2148532223,e*Fr(n|=t+1023<<20,Gr[1])))}function Vr(r){var t;return P(r)||r===U?r:r===j?0:r>709.782712893384?U:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,i,u;return Lr(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=vr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function Wr(r){var t,n,e,o,i;if(!E(r))throw new TypeError(function(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}("0ds8T",r));return t=new Y(r),n=0,i=-1,o=0,function(u){var a,f;if(0===arguments.length)return 0===o?null:e;if(i=(i+1)%r,a=lr(u),P(u))o=r,n=NaN;else if(o<r)o+=1,n+=a;else if(P(t[i])){for(o=1,n=a,f=0;f<r;f++)if(f!==i){if(P(t[f])){o=r,n=NaN;break}o+=1,n+=t[f]}}else!1===P(n)&&(n+=a-t[i]);return t[i]=a,e=Vr(n/o)}}export{Wr as default};
//# sourceMappingURL=mod.js.map
