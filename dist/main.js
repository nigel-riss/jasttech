!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=4)}([function(e,t,i){"use strict";t.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.mainMenu=document.querySelector(".hero__nav"),this.events()}events(){this.menuButton.addEventListener("click",()=>{this.toggleMenu()}),this.mainMenu.addEventListener("click",e=>{e.target.classList.contains("main-nav__link")&&this.toggleMenu()})}toggleMenu(){this.mainMenu.classList.toggle("hero__nav--shown"),this.menuButton.classList.toggle("menu-button--close")}}},function(e,t,i){"use strict";t.a=class{constructor(){this.topPanel=document.querySelector(".hero__top"),this.topPanel.classList.remove("hero__top--fixed"),this.hero=document.querySelector(".hero"),this.events()}events(){document.addEventListener("scroll",e=>{window.scrollY>=this.hero.offsetHeight/2?this.topPanel.classList.add("hero__top--fixed"):this.topPanel.classList.remove("hero__top--fixed")})}}},function(e,t,i){"use strict";t.a=class{constructor(){this.popup=document.querySelector(".contact-popup"),this.closeButton=document.querySelector(".contact-popup__close"),this.popupCover=document.querySelector(".contact-popup__cover"),this.events()}events(){document.addEventListener("click",e=>{e.target.classList.contains("contact-button")&&(e.preventDefault(),this.popup.classList.remove("contact-popup--hidden"))}),this.closeButton.addEventListener("click",e=>{this.popup.classList.add("contact-popup--hidden")}),this.popupCover.addEventListener("click",e=>{this.popup.classList.add("contact-popup--hidden")})}}},function(e,t,i){"use strict";t.a=class{constructor(){this.videoTrigger=document.querySelector(".video__trigger"),this.videoCover=document.querySelector(".video__cover"),this.videoHeader=document.querySelector(".video__header"),this.video=document.getElementById("promo-vid"),this.isVideoPlaying=!1,this.events()}events(){this.videoTrigger.addEventListener("click",e=>{this.isVideoPlaying?this.video.pause():this.video.play(),this.isVideoPlaying=!this.isVideoPlaying}),this.video.addEventListener("play",e=>{this.videoTrigger.classList.add("video__trigger--hidden"),this.videoCover.classList.add("video__cover--hidden"),this.videoHeader.classList.add("video__header--hidden")}),this.video.addEventListener("pause",e=>{this.videoTrigger.classList.remove("video__trigger--hidden"),this.videoHeader.classList.remove("video__header--hidden")}),this.video.addEventListener("ended",e=>{this.videoTrigger.classList.remove("video__trigger--hidden"),this.videoHeader.classList.remove("video__header--hidden")})}}},function(e,t,i){"use strict";i.r(t);var o=i(0),n=i(1),s=i(3),r=i(2);new o.a,new n.a,new s.a,new r.a}]);