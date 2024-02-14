// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,t,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,c=parseInt(t,10),!isFinite(c)){if(!n(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(t=(-c).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=c.toString(e),c||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,I=isNaN,U=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=j(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,I(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,I(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!I(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=I(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(O(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){return"string"==typeof r}function N(r){var e,n;if(!F(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var T=Object.prototype,V=T.toString,H=T.__defineGetter__,G=T.__defineSetter__,P=T.__lookupGetter__,W=T.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(P.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=T,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&H&&H.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return R&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",q=M()?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[z]=n:delete r[z],t}:function(r){return Z.call(r)},B=Number,D=B.prototype.toString,J=M();function K(r){return"object"==typeof r&&(r instanceof B||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Q(r){return C(r)||K(r)}L(Q,"isPrimitive",C),L(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=B.NEGATIVE_INFINITY,nr=Math.floor;function tr(r){return r<rr&&r>er&&nr(e=r)===e;var e}function ir(r){return C(r)&&tr(r)}function ar(r){return K(r)&&tr(r.valueOf())}function or(r){return ir(r)||ar(r)}function cr(r){return ir(r)&&r>0}function ur(r){return ar(r)&&r.valueOf()>0}function fr(r){return cr(r)||ur(r)}function sr(r){return r!=r}L(or,"isPrimitive",ir),L(or,"isObject",ar),L(fr,"isPrimitive",cr),L(fr,"isObject",ur);var lr,pr="function"==typeof Uint32Array,yr="function"==typeof Uint32Array?Uint32Array:null,gr="function"==typeof Uint32Array?Uint32Array:void 0;lr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(pr&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr=lr,vr="function"==typeof Float64Array,wr="function"==typeof Float64Array?Float64Array:null,br="function"==typeof Float64Array?Float64Array:void 0;dr=function(){var r,e,n;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,NaN]),n=e,r=(vr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar=dr,_r="function"==typeof Uint8Array,Er="function"==typeof Uint8Array?Uint8Array:null,Ir="function"==typeof Uint8Array?Uint8Array:void 0;mr=function(){var r,e,n;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,256,257]),n=e,r=(_r&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Ur,jr=mr,Sr="function"==typeof Uint16Array,xr="function"==typeof Uint16Array?Uint16Array:null,Or="function"==typeof Uint16Array?Uint16Array:void 0;Ur=function(){var r,e,n;if("function"!=typeof xr)return!1;try{e=new xr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Sr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var kr,Fr={uint16:Ur,uint8:jr};(kr=new Fr.uint16(1))[0]=4660;var Nr=52===new Fr.uint8(kr.buffer)[0],Tr=!0===Nr?1:0,Vr=new Ar(1),Hr=new hr(Vr.buffer);function Gr(r){return Vr[0]=r,Hr[Tr]}var Pr=!0===Nr?1:0,Wr=new Ar(1),$r=new hr(Wr.buffer),Lr=1023,Cr=.6931471803691238,Rr=1.9082149292705877e-10,Mr=1048575;function Zr(r){var e,n,t,i,a,o,c,u,f,s,l,p;return 0===r?er:sr(r)||r<0?NaN:(a=0,(n=Gr(r))<1048576&&(a-=54,n=Gr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Lr|0,a+=(u=614244+(n&=Mr)&1048576|0)>>20|0,c=(r=function(r,e){return Wr[0]=r,$r[Pr]=e>>>0,Wr[0]}(r,n|1072693248^u))-1,(Mr&2+n)<3?0===c?0===a?0:a*Cr+a*Rr:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*Cr-(o-a*Rr-c)):(u=n-398458|0,f=440401-n|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*Cr-(e-(s*(e+o)+a*Rr)-c)):0===a?c-s*(c-o):a*Cr-(s*(c-o)-a*Rr-c))))}var Xr,Yr,zr=Math.ceil;function qr(r){return r<0?zr(r):nr(r)}function Br(r){return r===rr||r===er}!0===Nr?(Xr=1,Yr=0):(Xr=0,Yr=1);var Dr,Jr,Kr={HIGH:Xr,LOW:Yr},Qr=new Ar(1),re=new hr(Qr.buffer),ee=Kr.HIGH,ne=Kr.LOW;function te(r,e,n,t){return Qr[0]=r,e[t]=re[ee],e[t+n]=re[ne],e}function ie(r){return te(r,[0,0],1,0)}L(ie,"assign",te),!0===Nr?(Dr=1,Jr=0):(Dr=0,Jr=1);var ae={HIGH:Dr,LOW:Jr},oe=new Ar(1),ce=new hr(oe.buffer),ue=ae.HIGH,fe=ae.LOW;function se(r,e){return ce[ue]=r,ce[fe]=e,oe[0]}var le,pe,ye=[0,0];function ge(r,e,n,t){return sr(r)||Br(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ge(r,[0,0],1,0)}),"assign",ge),!0===Nr?(le=1,pe=0):(le=0,pe=1);var de={HIGH:le,LOW:pe},he=new Ar(1),ve=new hr(he.buffer),we=de.HIGH,be=de.LOW;function me(r,e,n,t){return he[0]=r,e[t]=ve[we],e[t+n]=ve[be],e}function Ae(r){return me(r,[0,0],1,0)}L(Ae,"assign",me);var _e=[0,0],Ee=[0,0];function Ie(r,e){var n,t,i,a,o,c;return 0===e||0===r||sr(r)||Br(r)?r:(ge(r,_e,1,0),e+=_e[1],e+=function(r){var e=Gr(r);return(e=(2146435072&e)>>>20)-Lr|0}(r=_e[0]),e<-1074?(i=0,a=r,ie.assign(i,ye,1,0),o=ye[0],o&=2147483647,c=Gr(a),se(o|=c&=2147483648,ye[1])):e>1023?r<0?er:rr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Ae.assign(r,Ee,1,0),n=Ee[0],n&=2148532223,t*se(n|=e+Lr<<20,Ee[1])))}var Ue=1.4426950408889634,je=1/(1<<28);function Se(r){var e;return sr(r)||r===rr?r:r===er?0:r>709.782712893384?rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<je?1+r:function(r,e,n){var t,i,a,o;return Ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=qr(r<0?Ue*r-.5:Ue*r+.5)),1.9082149292705877e-10*e,e)}return function(r){var e,n,t,i,a;if(!cr(r))throw new TypeError(N("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new Ar(r),n=0,a=-1,i=0,function(o){var c,u;if(0===arguments.length)return 0===i?null:t;if(a=(a+1)%r,c=Zr(o),sr(o))i=r,n=NaN;else if(i<r)i+=1,n+=c;else if(sr(e[a])){for(i=1,n=c,u=0;u<r;u++)if(u!==a){if(sr(e[u])){i=r,n=NaN;break}i+=1,n+=e[u]}}else!1===sr(n)&&(n+=c-e[a]);return e[a]=c,t=Se(n/i)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).incrmgmean=e();
//# sourceMappingURL=browser.js.map
