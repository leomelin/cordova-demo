!function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var s="function"==typeof require&&require;if(!u&&s)return s(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var f=t[c]={exports:{}};n[c][0].call(f.exports,function(e){var t=n[c][1][e];return r(t?t:e)},f,f.exports,e,n,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";var o=function(e,n,t){n&&Object.defineProperties(e,n),t&&Object.defineProperties(e.prototype,t)},r=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},i=function(){function e(n){r(this,e),this.message="App init successful"}return o(e,null,{init:{value:function(e){console.log("Init message",this.message)},writable:!0,configurable:!0}}),e}();t.app=new i;Object.defineProperty(t,"__esModule",{value:!0})},{}],2:[function(e,n,t){"use strict";var o=function(e,n,t){n&&Object.defineProperties(e,n),t&&Object.defineProperties(e.prototype,t)},r=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},i=function(){function e(n){r(this,e),this.color=n}return o(e,null,{toString:{value:function(){return this.color},writable:!0,configurable:!0}}),e}();t.colorPoint=new i("blue");Object.defineProperty(t,"__esModule",{value:!0})},{}],3:[function(e,n,t){"use strict";var o=e("./app").app,r=e("./colorpoint").colorPoint;console.log("colorPoint",r.toString()),document.addEventListener("deviceready",o.init.bind(o),!1)},{"./app":1,"./colorpoint":2}]},{},[3]);
//# sourceMappingURL=bundle.js.map