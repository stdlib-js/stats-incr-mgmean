// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__,a=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?t:function(n,t,a){var c,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===e.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(n,t)||f.call(n,t)?(c=n.__proto__,n.__proto__=r,delete n[t],n[t]=a.value,n.__proto__=c):n[t]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(n,t,a.get),p&&i&&i.call(n,t,a.set),n};function c(n,t,r){a(n,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(n){return"number"==typeof n}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",m=p()?function(n){var t,r,e,o,i;if(null==n)return v.call(n);r=n[s],i=s,t=null!=(o=n)&&b.call(o,i);try{n[s]=void 0}catch(t){return v.call(n)}return e=v.call(n),t?n[s]=r:delete n[s],e}:function(n){return v.call(n)},d=Number,w=d.prototype.toString,A=p();function _(n){return"object"==typeof n&&(n instanceof d||(A?function(n){try{return w.call(n),!0}catch(n){return!1}}(n):"[object Number]"===m(n)))}function h(n){return l(n)||_(n)}c(h,"isPrimitive",l),c(h,"isObject",_);var g=Number.POSITIVE_INFINITY,j=d.NEGATIVE_INFINITY,U=Math.floor;function O(n){return n<g&&n>j&&U(t=n)===t;var t}function N(n){return l(n)&&O(n)}function I(n){return _(n)&&O(n.valueOf())}function S(n){return N(n)||I(n)}function E(n){return N(n)&&n>0}function T(n){return I(n)&&n.valueOf()>0}function F(n){return E(n)||T(n)}function H(n){return n!=n}c(S,"isPrimitive",N),c(S,"isObject",I),c(F,"isPrimitive",E),c(F,"isObject",T);var P,G="function"==typeof Uint32Array,x="function"==typeof Uint32Array?Uint32Array:null,L="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var n,t,r;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(G&&r instanceof Uint32Array||"[object Uint32Array]"===m(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?L:function(){throw new Error("not implemented")};var V,W=P,k="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,C="function"==typeof Float64Array?Float64Array:void 0;V=function(){var n,t,r;if("function"!=typeof M)return!1;try{t=new M([1,3.14,-3.14,NaN]),r=t,n=(k&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?C:function(){throw new Error("not implemented")};var Y,B=V,R="function"==typeof Uint8Array,q="function"==typeof Uint8Array?Uint8Array:null,z="function"==typeof Uint8Array?Uint8Array:void 0;Y=function(){var n,t,r;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,256,257]),r=t,n=(R&&r instanceof Uint8Array||"[object Uint8Array]"===m(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?z:function(){throw new Error("not implemented")};var D,J=Y,K="function"==typeof Uint16Array,Q="function"==typeof Uint16Array?Uint16Array:null,X="function"==typeof Uint16Array?Uint16Array:void 0;D=function(){var n,t,r;if("function"!=typeof Q)return!1;try{t=new Q(t=[1,3.14,-3.14,65536,65537]),r=t,n=(K&&r instanceof Uint16Array||"[object Uint16Array]"===m(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?X:function(){throw new Error("not implemented")};var Z,$={uint16:D,uint8:J};(Z=new $.uint16(1))[0]=4660;var nn=52===new $.uint8(Z.buffer)[0],tn=!0===nn?1:0,rn=new B(1),en=new W(rn.buffer);function on(n){return rn[0]=n,en[tn]}var un=!0===nn?1:0,fn=new B(1),an=new W(fn.buffer),cn=1023,ln=.6931471803691238,yn=1.9082149292705877e-10,pn=1048575;function vn(n){var t,r,e,o,i,u,f,a,c,l,y,p;return 0===n?j:H(n)||n<0?NaN:(i=0,(r=on(n))<1048576&&(i-=54,r=on(n*=0x40000000000000)),r>=2146435072?n+n:(i+=(r>>20)-cn|0,i+=(a=614244+(r&=pn)&1048576|0)>>20|0,f=(n=function(n,t){return fn[0]=n,an[un]=t>>>0,fn[0]}(n,r|1072693248^a))-1,(pn&2+r)<3?0===f?0===i?0:i*ln+i*yn:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*ln-(u-i*yn-f)):(a=r-398458|0,c=440401-r|0,o=(y=(p=(l=f/(2+f))*l)*p)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(y),e=p*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(y),u=e+o,(a|=c)>0?(t=.5*f*f,0===i?f-(t-l*(t+u)):i*ln-(t-(l*(t+u)+i*yn)-f)):0===i?f-l*(f-u):i*ln-(l*(f-u)-i*yn-f))))}var bn,sn,mn=Math.ceil;function dn(n){return n<0?mn(n):U(n)}function wn(n){return n===g||n===j}!0===nn?(bn=1,sn=0):(bn=0,sn=1);var An,_n,hn={HIGH:bn,LOW:sn},gn=new B(1),jn=new W(gn.buffer),Un=hn.HIGH,On=hn.LOW;function Nn(n,t,r,e){return gn[0]=n,t[e]=jn[Un],t[e+r]=jn[On],t}function In(n){return Nn(n,[0,0],1,0)}c(In,"assign",Nn),!0===nn?(An=1,_n=0):(An=0,_n=1);var Sn={HIGH:An,LOW:_n},En=new B(1),Tn=new W(En.buffer),Fn=Sn.HIGH,Hn=Sn.LOW;function Pn(n,t){return Tn[Fn]=n,Tn[Hn]=t,En[0]}var Gn=[0,0];function xn(n,t,r,e){return H(n)||wn(n)?(t[e]=n,t[e+r]=0,t):0!==n&&function(n){return Math.abs(n)}(n)<22250738585072014e-324?(t[e]=4503599627370496*n,t[e+r]=-52,t):(t[e]=n,t[e+r]=0,t)}c((function(n){return xn(n,[0,0],1,0)}),"assign",xn);var Ln=[0,0],Vn=[0,0];function Wn(n,t){var r,e,o,i,u,f;return 0===t||0===n||H(n)||wn(n)?n:(xn(n,Ln,1,0),t+=Ln[1],t+=function(n){var t=on(n);return(t=(2146435072&t)>>>20)-cn|0}(n=Ln[0]),t<-1074?(o=0,i=n,In.assign(o,Gn,1,0),u=Gn[0],u&=2147483647,f=on(i),Pn(u|=f&=2147483648,Gn[1])):t>1023?n<0?j:g:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,In.assign(n,Vn,1,0),r=Vn[0],r&=2148532223,e*Pn(r|=t+cn<<20,Vn[1])))}var kn=1.4426950408889634,Mn=1/(1<<28);function Cn(n){var t;return H(n)||n===g?n:n===j?0:n>709.782712893384?g:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Mn?1+n:function(n,t,r){var e,o,i,u;return Wn(1-(t-(e=n-t)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-n),r)}(n-.6931471803691238*(t=dn(n<0?kn*n-.5:kn*n+.5)),1.9082149292705877e-10*t,t)}return function(n){var t,r,e,o,i;if(!E(n))throw new TypeError(function(){var n,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(n=1;n<t.length;n++)r+="&arg[]="+encodeURIComponent(t[n]);return r}("1Hx8B,Hs",n));return t=new B(n),r=0,i=-1,o=0,function(u){var f,a;if(0===arguments.length)return 0===o?null:e;if(i=(i+1)%n,f=vn(u),H(u))o=n,r=NaN;else if(o<n)o+=1,r+=f;else if(H(t[i])){for(o=1,r=f,a=0;a<n;a++)if(a!==i){if(H(t[a])){o=n,r=NaN;break}o+=1,r+=t[a]}}else!1===H(r)&&(r+=f-t[i]);return t[i]=f,e=Cn(r/o)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).incrmgmean=t();
//# sourceMappingURL=index.js.map
