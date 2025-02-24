// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,b,"$1e"),n=l.call(n,v,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,u,f,s,l,p,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),u+=n.arg||"",f+=1}return u}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=j.exec(r);n;)(e=r.slice(i,j.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=j.lastIndex,n=j.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F=Object.prototype,O=F.toString,T=F.__defineGetter__,N=F.__defineSetter__,V=F.__lookupGetter__,P=F.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||P.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&N&&N.call(r,e,t.set),r};function G(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return"number"==typeof r}var C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return C&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,R=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof Z?Z.toStringTag:"",X=W()?function(r){var e,t,n,i,a;if(null==r)return L.call(r);t=r[M],a=M,e=null!=(i=r)&&R.call(i,a);try{r[M]=void 0}catch(e){return L.call(r)}return n=L.call(r),e?r[M]=t:delete r[M],n}:function(r){return L.call(r)},Y=Number,z=Y.prototype.toString,B=W();function q(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function D(r){return H(r)||q(r)}G(D,"isPrimitive",H),G(D,"isObject",q);var J=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return r<J&&r>K&&Q(e=r)===e;var e}function er(r){return H(r)&&rr(r)}function tr(r){return q(r)&&rr(r.valueOf())}function nr(r){return er(r)||tr(r)}function ir(r){return er(r)&&r>0}function ar(r){return tr(r)&&r.valueOf()>0}function or(r){return ir(r)||ar(r)}function cr(r){return r!=r}G(nr,"isPrimitive",er),G(nr,"isObject",tr),G(or,"isPrimitive",ir),G(or,"isObject",ar);var ur,fr="function"==typeof Uint32Array,sr="function"==typeof Uint32Array?Uint32Array:null,lr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(fr&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=ur,gr="function"==typeof Float64Array,dr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,e,t;if("function"!=typeof dr)return!1;try{e=new dr([1,3.14,-3.14,NaN]),t=e,r=(gr&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var vr,br=pr,wr="function"==typeof Uint8Array,mr="function"==typeof Uint8Array?Uint8Array:null,Ar="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,256,257]),t=e,r=(wr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er=vr,Ur="function"==typeof Uint16Array,Sr="function"==typeof Uint16Array?Uint16Array:null,jr="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ur&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Ir,xr={uint16:_r,uint8:Er};(Ir=new xr.uint16(1))[0]=4660;var kr=52===new xr.uint8(Ir.buffer)[0],Fr=!0===kr?1:0,Or=new br(1),Tr=new yr(Or.buffer);function Nr(r){return Or[0]=r,Tr[Fr]}var Vr=!0===kr?1:0,Pr=new br(1),$r=new yr(Pr.buffer),Gr=1023,Hr=.6931471803691238,Cr=1.9082149292705877e-10,Wr=0x40000000000000,Lr=.3333333333333333,Rr=1048575,Zr=2146435072,Mr=1048576,Xr=1072693248;function Yr(r){var e,t,n,i,a,o,c,u,f,s,l,p;return 0===r?K:cr(r)||r<0?NaN:(a=0,(t=Nr(r))<Mr&&(a-=54,t=Nr(r*=Wr)),t>=Zr?r+r:(a+=(t>>20)-Gr|0,a+=(u=614244+(t&=Rr)&1048576|0)>>20|0,c=(r=function(r,e){return Pr[0]=r,$r[Vr]=e>>>0,Pr[0]}(r,t|u^Xr))-1,(Rr&2+t)<3?0===c?0===a?0:a*Hr+a*Cr:(o=c*c*(.5-Lr*c),0===a?c-o:a*Hr-(o-a*Cr-c)):(u=t-398458|0,f=440401-t|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*Hr-(e-(s*(e+o)+a*Cr)-c)):0===a?c-s*(c-o):a*Hr-(s*(c-o)-a*Cr-c))))}var zr=Math.ceil;function Br(r){return r<0?zr(r):Q(r)}var qr=1023,Dr=-1023,Jr=-1074;function Kr(r){return r===J||r===K}var Qr,re,ee=2147483648,te=2147483647;!0===kr?(Qr=1,re=0):(Qr=0,re=1);var ne,ie,ae={HIGH:Qr,LOW:re},oe=new br(1),ce=new yr(oe.buffer),ue=ae.HIGH,fe=ae.LOW;function se(r,e,t,n){return oe[0]=r,e[n]=ce[ue],e[n+t]=ce[fe],e}function le(r){return se(r,[0,0],1,0)}G(le,"assign",se),!0===kr?(ne=1,ie=0):(ne=0,ie=1);var pe={HIGH:ne,LOW:ie},ye=new br(1),ge=new yr(ye.buffer),de=pe.HIGH,he=pe.LOW;function ve(r,e){return ge[de]=r,ge[he]=e,ye[0]}var be=[0,0],we=22250738585072014e-324,me=4503599627370496;function Ae(r,e,t,n){return cr(r)||Kr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<we?(e[n]=r*me,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}G((function(r){return Ae(r,[0,0],1,0)}),"assign",Ae);var _e=2146435072,Ee=2220446049250313e-31,Ue=2148532223,Se=[0,0],je=[0,0];function Ie(r,e){var t,n,i,a,o,c;return 0===e||0===r||cr(r)||Kr(r)?r:(Ae(r,Se,1,0),r=Se[0],e+=Se[1],e+=function(r){var e=Nr(r);return(e=(e&_e)>>>20)-Gr|0}(r),e<Jr?(i=0,a=r,le.assign(i,be,1,0),o=be[0],o&=te,c=Nr(a),ve(o|=c&=ee,be[1])):e>qr?r<0?K:J:(e<=Dr?(e+=52,n=Ee):n=1,le.assign(r,je,1,0),t=je[0],t&=Ue,n*ve(t|=e+Gr<<20,je[1])))}var xe=.6931471803691238,ke=1.9082149292705877e-10,Fe=1.4426950408889634,Oe=709.782712893384,Te=-745.1332191019411,Ne=1/(1<<28),Ve=-Ne;function Pe(r){var e;return cr(r)||r===J?r:r===K?0:r>Oe?J:r<Te?0:r>Ve&&r<Ne?1+r:function(r,e,t){var n,i,a,o;return Ie(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=Br(r<0?Fe*r-.5:Fe*r+.5))*xe,e*ke,e)}return function(r){var e,t,n,i,a;if(!ir(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Hx8B",r));return e=new br(r),t=0,a=-1,i=0,function(o){var c,u;if(0===arguments.length)return 0===i?null:n;if(a=(a+1)%r,c=Yr(o),cr(o))i=r,t=NaN;else if(i<r)i+=1,t+=c;else if(cr(e[a])){for(i=1,t=c,u=0;u<r;u++)if(u!==a){if(cr(e[u])){i=r,t=NaN;break}i+=1,t+=e[u]}}else!1===cr(t)&&(t+=c-e[a]);return e[a]=c,n=Pe(t/i)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).incrmgmean=e();
//# sourceMappingURL=browser.js.map
