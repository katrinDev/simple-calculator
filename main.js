(()=>{"use strict";var t={426:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([t.id,"body {\n\tdisplay: flex;\n\theight: 100vh;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground: #f4dec7;\n}\n.calc {\n\twidth: 400px;\n\theight: 500px;\n\tborder-radius: 20px;\n\tbackground: #324b45;\n\tcolor: #fff;\n\tfont-family: 'Arial';\n\tpadding: 20px;\n\tbox-shadow: 0 0 15px #9aa88f;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n}\n\n.calc-screen {\n\theight: 125px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: flex-end;\n\toverflow: hidden;\n}\n\n.calc-screen p {\n\ttext-align: right;\n\tfont-size: 3.5rem;\n\n\tmargin-bottom: 5px;\n}\n\n.buttons {\n\tdisplay: grid;\n\tgrid-template: repeat(5, minmax(60px, auto)) / repeat(4, minmax(60px, auto));\n\tgrid-gap: 10px;\n}\n\n.buttons button {\n\tborder-radius: 30%;\n\tfont-size: 1.5rem;\n\tuser-select: none;\n\n\tborder-width: 0;\n}\n\nbutton:hover {\n\tfilter: brightness(110%);\n}\n\nbutton:active {\n\tfilter: brightness(90%);\n}\n\n#zero {\n\tgrid-column: 1/3;\n\tborder-radius: 23px;\n}\n\nbutton.bg-orange {\n\tbackground: #e76c44;\n\n\tborder: 1px solid #f4e0cc;\n\n\tcolor: #faf3e9;\n}\n\n.number,\n#separator {\n\tbackground: #f4dec7;\n\tcolor: #072108;\n}\n\n.minor-operations {\n\tbackground: #be3d36;\n\n\tcolor: #faf3e9;\n}\n",""]);const s=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=e(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var x=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:x,references:1})}a.push(d)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var c=r(t,o),u=0;u<i.length;u++){var l=e(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{const t=new class{constructor(){this.x="",this.y="",this.sign="",this.isNewCalculation=!1,this.z="",this.sign0=""}clearAll(){this.x="",this.y="",this.sign="",this.isNewCalculation=!1,this.z="",this.sign0=""}};function n(t){return(-1*parseFloat(t)).toString()}function r(t){const n=parseFloat(t);return Math.abs(n)>1e6||Math.abs(n)<1e-6?n.toExponential(5):(e=n,Number(e)!==e||Number.isInteger(e)?t:t.slice(0,8));var e}const o=document.getElementById("output");function i(){switch(""===t.y&&(t.y=t.x),t.sign){case"+":t.x=+t.x+ +t.y;break;case"-":t.x=t.x-t.y;break;case"x":t.x=t.x*t.y;break;case"/":if("0"===t.y)return t.x="Error",void(o.textContent=t.x);t.x=t.x/t.y}t.isNewCalculation=!0,o.textContent=r(t.x.toString())}function a(){""!==t.z&&(i(),t.y=t.x,t.x=t.z,t.sign=t.sign0,t.z="",t.sign0=""),i()}const s=["0","1","2","3","4","5","6","7","8","9","."],c=["-","+","x","/"],u=["+/-","%"];var l=e(379),d=e.n(l),f=e(795),p=e.n(f),x=e(569),g=e.n(x),y=e(565),h=e.n(y),m=e(216),v=e.n(m),b=e(589),C=e.n(b),w=e(426),E={};E.styleTagTransform=C(),E.setAttributes=h(),E.insert=g().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=v(),d()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;const S=document.getElementById("output");document.addEventListener("DOMContentLoaded",(()=>{document.documentElement.classList.remove("hidden")})),document.querySelector(".buttons").onclick=e=>{if(!e.target.classList.contains("btn"))return;if("ac"===e.target.id)return t.clearAll(),void(S.textContent="0");if("Error"===t.x)return;S.textContent="";const o=e.target.textContent;if(s.includes(o))""===t.y&&""===t.sign?(t.x+=o,S.textContent=t.x):""!==t.x&&""!==t.y&&t.isNewCalculation?(t.y=o,t.isNewCalculation=!1,S.textContent=t.y):(t.y+=o,S.textContent=t.y);else if(""!==t.y||""!==t.x){if(c.includes(o))return S.textContent=o,void(""!==t.sign?"/"===o||"x"===o?""!==t.z?(i(),t.sign=o):(t.z=t.x,t.sign0=t.sign,t.sign=o,t.x=t.y,t.isNewCalculation=!0):(a(),t.sign=o):t.sign=o);if(u.includes(o))switch(o){case"%":!function(){const{x:n,y:e,sign:r}=t;""===r&&""===e?t.y=1:""!==r&&""===e&&(t.y=n),t.y=t.x*t.y/100}(),S.textContent=r(t.y.toString());break;case"+/-":""!==t.y?(t.y=n(t.y),S.textContent=r(t.y.toString())):""!==t.x&&(t.x=n(t.x),S.textContent=r(t.x.toString()))}else"="===o&&(a(),t.sign="")}else S.textContent=0}})()})();