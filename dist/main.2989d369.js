parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"z5eR":[function(require,module,exports) {
module.exports=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"SelfCare",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}];
},{}],"epB2":[function(require,module,exports) {
var t,e=require("../data.json"),c=document.querySelectorAll(".currentHours"),s=document.querySelectorAll(".previousHours"),n=document.querySelector(".daily"),i=document.querySelector(".weekly"),o=document.querySelector(".monthly"),a=2,r=function(n){var i=n.target.classList.value;c.forEach(function(c){e.forEach(function(e){s.forEach(function(s){if(c.classList.contains(e.title)&&s.classList.contains(e.title))if(a===t);else{c.style.opacity=0,s.style.opacity=0;setTimeout(function(){c.textContent="".concat(e.timeframes[i].current,"hrs"),s.textContent="weekly"===i?"Last Week - ".concat(e.timeframes[i].previous,"hrs"):"daily"===i?"Yesterday - ".concat(e.timeframes[i].previous,"hrs"):"Last Month - ".concat(e.timeframes[i].previous,"hrs"),c.style.opacity=1,s.style.opacity=1},300)}})})})};c.forEach(function(t){s.forEach(function(c){e.forEach(function(e){t.classList.contains(e.title)&&c.classList.contains(e.title)&&(t.textContent="".concat(e.timeframes.weekly.current,"hrs"),c.textContent="Last Week - ".concat(e.timeframes.weekly.previous,"hrs"),i.classList.add("active"))})})});var l=function(t,e,c){t.classList.toggle("active"),e.classList.remove("active"),c.classList.remove("active")};n.addEventListener("click",function(e){t=1,r(e),l(n,i,o),a=1}),i.addEventListener("click",function(e){t=2,r(e),l(i,n,o),a=2}),o.addEventListener("click",function(e){t=3,r(e),l(o,n,i),a=3});
},{"../data.json":"z5eR"}]},{},["epB2"], null)