System.register(["./index-legacy-DYH_7ukq.js","./index8-legacy-F57fBUgI.js"],(function(e,t){"use strict";var n,r,s,i,o;return{setters:[e=>{n=e.m,r=e.n,s=e.q},e=>{i=e.f,o=e.s}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{n((()=>{const t=e.innerWidth,n=e.innerHeight,a=document.elementFromPoint(t/2,n/2);if(!a)return;const c=i(a);c&&new Promise((e=>r(c,e))).then((()=>{s((async()=>{c.style.setProperty("--overflow","hidden"),await o(c,300),c.style.removeProperty("--overflow")}))}))}))}))}))}}}));
