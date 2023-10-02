// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,U=isNaN,j=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,f,s,l,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,U(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function O(r){var e,t,n;if(!N(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var T=Object.prototype,V=T.toString,H=T.__defineGetter__,P=T.__defineSetter__,$=T.__lookupGetter__,G=T.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&H&&H.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function W(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=Z()?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[z]=t:delete r[z],n}:function(r){return M.call(r)},q=Number,D=q.prototype.toString,J=Z();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function Q(r){return L(r)||K(r)}W(Q,"isPrimitive",L),W(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=q.NEGATIVE_INFINITY,tr=Math.floor;function nr(r){return r<rr&&r>er&&tr(e=r)===e;var e}function ir(r){return L(r)&&nr(r)}function ar(r){return K(r)&&nr(r.valueOf())}function or(r){return ir(r)||ar(r)}function cr(r){return ir(r)&&r>0}function ur(r){return ar(r)&&r.valueOf()>0}function fr(r){return cr(r)||ur(r)}function sr(r){return r!=r}W(or,"isPrimitive",ir),W(or,"isObject",ar),W(fr,"isPrimitive",cr),W(fr,"isObject",ur);var lr,pr="function"==typeof Uint32Array,yr="function"==typeof Uint32Array?Uint32Array:null,gr="function"==typeof Uint32Array?Uint32Array:void 0;lr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(pr&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr=lr,vr="function"==typeof Float64Array,br="function"==typeof Float64Array?Float64Array:null,wr="function"==typeof Float64Array?Float64Array:void 0;dr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,NaN]),t=e,r=(vr&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,Ar=dr,_r="function"==typeof Uint8Array,Er="function"==typeof Uint8Array?Uint8Array:null,Ur="function"==typeof Uint8Array?Uint8Array:void 0;mr=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,256,257]),t=e,r=(_r&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var jr,Ir=mr,Sr="function"==typeof Uint16Array,xr="function"==typeof Uint16Array?Uint16Array:null,kr="function"==typeof Uint16Array?Uint16Array:void 0;jr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Sr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Fr,Nr={uint16:jr,uint8:Ir};(Fr=new Nr.uint16(1))[0]=4660;var Or=52===new Nr.uint8(Fr.buffer)[0],Tr=!0===Or?1:0,Vr=new Ar(1),Hr=new hr(Vr.buffer);function Pr(r){return Vr[0]=r,Hr[Tr]}var $r=!0===Or?1:0,Gr=new Ar(1),Cr=new hr(Gr.buffer),Wr=1023,Lr=.6931471803691238,Rr=1.9082149292705877e-10,Zr=1048575;function Mr(r){var e,t,n,i,a,o,c,u,f,s,l,p;return 0===r?er:sr(r)||r<0?NaN:(a=0,(t=Pr(r))<1048576&&(a-=54,t=Pr(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-Wr|0,a+=(u=614244+(t&=Zr)&1048576|0)>>20|0,c=(r=function(r,e){return Gr[0]=r,Cr[$r]=e>>>0,Gr[0]}(r,t|1072693248^u))-1,(Zr&2+t)<3?0===c?0===a?0:a*Lr+a*Rr:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*Lr-(o-a*Rr-c)):(u=t-398458|0,f=440401-t|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*Lr-(e-(s*(e+o)+a*Rr)-c)):0===a?c-s*(c-o):a*Lr-(s*(c-o)-a*Rr-c))))}var Xr,Yr,zr=Math.ceil;function Br(r){return r<0?zr(r):tr(r)}function qr(r){return r===rr||r===er}!0===Or?(Xr=1,Yr=0):(Xr=0,Yr=1);var Dr,Jr,Kr={HIGH:Xr,LOW:Yr},Qr=new Ar(1),re=new hr(Qr.buffer),ee=Kr.HIGH,te=Kr.LOW;function ne(r,e,t,n){return Qr[0]=r,e[n]=re[ee],e[n+t]=re[te],e}function ie(r){return ne(r,[0,0],1,0)}W(ie,"assign",ne),!0===Or?(Dr=1,Jr=0):(Dr=0,Jr=1);var ae={HIGH:Dr,LOW:Jr},oe=new Ar(1),ce=new hr(oe.buffer),ue=ae.HIGH,fe=ae.LOW;function se(r,e){return ce[ue]=r,ce[fe]=e,oe[0]}var le=[0,0];function pe(r,e,t,n){return sr(r)||qr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return pe(r,[0,0],1,0)}),"assign",pe);var ye=[0,0],ge=[0,0];function de(r,e){var t,n,i,a,o,c;return 0===e||0===r||sr(r)||qr(r)?r:(pe(r,ye,1,0),e+=ye[1],e+=function(r){var e=Pr(r);return(e=(2146435072&e)>>>20)-Wr|0}(r=ye[0]),e<-1074?(i=0,a=r,ie.assign(i,le,1,0),o=le[0],o&=2147483647,c=Pr(a),se(o|=c&=2147483648,le[1])):e>1023?r<0?er:rr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,ie.assign(r,ge,1,0),t=ge[0],t&=2148532223,n*se(t|=e+Wr<<20,ge[1])))}var he=1.4426950408889634,ve=1/(1<<28);function be(r){var e;return sr(r)||r===rr?r:r===er?0:r>709.782712893384?rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ve?1+r:function(r,e,t){var n,i,a,o;return de(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(e=Br(r<0?he*r-.5:he*r+.5)),1.9082149292705877e-10*e,e)}return function(r){var e,t,n,i,a;if(!cr(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Hx8B,Hs",r));return e=new Ar(r),t=0,a=-1,i=0,function(o){var c,u;if(0===arguments.length)return 0===i?null:n;if(a=(a+1)%r,c=Mr(o),sr(o))i=r,t=NaN;else if(i<r)i+=1,t+=c;else if(sr(e[a])){for(i=1,t=c,u=0;u<r;u++)if(u!==a){if(sr(e[u])){i=r,t=NaN;break}i+=1,t+=e[u]}}else!1===sr(t)&&(t+=c-e[a]);return e[a]=c,n=be(t/i)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).incrmgmean=e();
//# sourceMappingURL=browser.js.map
