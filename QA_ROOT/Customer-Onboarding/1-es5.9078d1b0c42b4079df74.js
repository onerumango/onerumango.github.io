!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(r=o.key,i=void 0,"symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"))?i:String(i)),o)}var r,i}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{w9WL:function(t,o,r){"use strict";r.d(o,"a",function(){return k});var i=r("mrSG"),u=r("8Y7J"),c=r("SVse"),a=r("XNiG");r("xgIS"),r("2Vo4"),r("1G5W");var f,s,d,l,p=function(){var t=function(){function t(n){e(this,t),this.document=n,this.width=this.getWidth()}return n(t,[{key:"getWidth",value:function(){var e=this.document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",this.document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var n=this.document.createElement("div");n.style.width="100%",e.appendChild(n);var o=n.offsetWidth;return e.parentNode.removeChild(e),t-o}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.bc(c.e))},t.\u0275prov=u.Nb({token:t,factory:function(e){return t.\u0275fac(e)}}),t=Object(i.a)([Object(i.b)(0,Object(u.q)(c.e))],t)}(),v=function(){var t=function(){function t(){e(this,t)}return n(t,[{key:"getDimensions",value:function(e){return e.getBoundingClientRect()}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Nb({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(),m=function(){var t=function(){function t(){e(this,t),this.columnInputChanges=new a.a}return n(t,[{key:"columnInputChanges$",get:function(){return this.columnInputChanges.asObservable()}},{key:"onInputChange",value:function(){this.columnInputChanges.next()}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Nb({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(),y={},w="undefined"!=typeof document?document.createElement("div").style:void 0,h=(f="undefined"!=typeof window?window.getComputedStyle(document.documentElement,""):void 0,s=void 0!==f?Array.prototype.slice.call(f).join("").match(/-(moz|webkit|ms)-/):null,d=null!==s?s[1]:void 0,(l=void 0!==d?"WebKit|Moz|MS|O".match(new RegExp("("+d+")","i"))[1]:void 0)?{dom:l,lowercase:d,css:"-".concat(d,"-"),js:d[0].toUpperCase()+d.substr(1)}:void 0);function b(e){var t=e.replace(/[^a-zA-Z0-9 ]/g," ").replace(/([a-z](?=[A-Z]))/g,"$1 ").replace(/([^a-zA-Z0-9 ])|^[0-9]+/g,"").trim().toLowerCase().replace(/([ 0-9]+)([a-zA-Z])/g,function(e,t,n){return t.trim()+n.toUpperCase()});return y[t]||(void 0!==h&&void 0!==w[h.css+e]?y[t]=h.css+e:void 0!==w[e]&&(y[t]=e)),y[t]}"undefined"!=typeof window&&b("transform"),"undefined"!=typeof window&&b("backfaceVisibility"),"undefined"!=typeof window&&b("transform"),"undefined"!=typeof window&&b("perspective");var g,C="undefined"!=typeof window?window.navigator.userAgent:"Chrome";/Safari\//.test(C)&&/Chrome\//.test(C);var k=function(){var t=g=function(){function t(){e(this,t)}return n(t,null,[{key:"forRoot",value:function(e){return{ngModule:g,providers:[{provide:"configuration",useValue:e}]}}}]),t}();return t.\u0275mod=u.Pb({type:t}),t.\u0275inj=u.Ob({factory:function(e){return new(e||t)},providers:[p,v,m],imports:[[c.c]]}),t}();"undefined"==typeof document||document.elementsFromPoint||(document.elementsFromPoint=function(e,t){for(var n,o,r,i=[],u=[];(n=document.elementFromPoint(e,t))&&-1===i.indexOf(n)&&null!=n;)i.push(n),u.push({value:n.style.getPropertyValue("pointer-events"),priority:n.style.getPropertyPriority("pointer-events")}),n.style.setProperty("pointer-events","none","important");for(o=u.length;r=u[--o];)i[o].style.setProperty("pointer-events",r.value?r.value:"",r.priority);return i})}}])}();