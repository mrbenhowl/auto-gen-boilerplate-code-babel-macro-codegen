(self.webpackJsonp=self.webpackJsonp||[]).push([[4],{39:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),o=r.b.div.withConfig({displayName:"editPencilstyles__Wrapper",componentId:"sc-1ewitm-0"})(["height:60px;width:60px;cursor:pointer;"]),s=function(e){var t=e.className,n=e.onClick;return i.a.createElement(o,{className:t,onClick:n},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 224 224",width:"60",height:"60"},i.a.createElement("g",{fill:"none",strokeMiterlimit:"10",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",style:{mixBlendMode:"normal"}},i.a.createElement("path",{d:"M0,224v-224h224v224z"}),i.a.createElement("path",{d:"M170.45,22.4c-3.82107,0 -7.6426,1.45927 -10.55834,4.375l-18.025,18.025l37.33333,37.33333l18.025,-18.025c5.83147,-5.83147 5.83147,-15.2852 0,-21.11667l-16.21666,-16.21667c-2.91573,-2.91573 -6.73727,-4.375 -10.55834,-4.375zM126.93333,59.73333l-87.66042,87.66041c0,0 6.85265,-0.61401 9.40625,1.93959c2.5536,2.5536 0.4515,19.264 3.5875,22.4c3.136,3.136 19.74105,0.92855 22.12292,3.31041c2.38187,2.38187 2.21667,9.68333 2.21667,9.68333l87.66041,-87.66041zM29.86667,171.73333l-7.04375,19.95c-0.2769,0.78729 -0.41986,1.61544 -0.42292,2.45c0,4.12373 3.34294,7.46667 7.46667,7.46667c0.83456,-0.00306 1.66271,-0.14602 2.45,-0.42292c0.02436,-0.00959 0.04866,-0.01932 0.07292,-0.02916l0.18958,-0.05833c0.01462,-0.00967 0.0292,-0.0194 0.04375,-0.02917l19.64375,-6.92708l-11.2,-11.2z",fill:"#2a3166"}))))},c=r.b.div.withConfig({displayName:"deleteBinstyles__Wrapper",componentId:"sc-10j6tkg-0"})(["height:60px;width:60px;cursor:pointer;"]),l=function(e){var t=e.className,n=e.onClick;return i.a.createElement(c,{className:t,onClick:n},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 224 224",width:"60",height:"60"},i.a.createElement("g",{fill:"none",strokeMiterlimit:"10",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",style:{mixBlendMode:"normal"}},i.a.createElement("path",{d:"M0,224v-224h224v224z"}),i.a.createElement("path",{d:"M97.06667,22.4c-1.99785,-0.02711 -3.92324,0.74754 -5.34562,2.15074c-1.42238,1.4032 -2.22311,3.31789 -2.22313,5.31593h-44.69792c-2.69275,-0.03808 -5.19741,1.37667 -6.55489,3.70252c-1.35749,2.32585 -1.35749,5.20245 0,7.5283c1.35749,2.32585 3.86215,3.7406 6.55489,3.70252h134.4c2.69275,0.03808 5.19741,-1.37667 6.55489,-3.70252c1.35749,-2.32585 1.35749,-5.20245 0,-7.5283c-1.35749,-2.32585 -3.86215,-3.7406 -6.55489,-3.70252h-44.69792c-0.00002,-1.99804 -0.80074,-3.91273 -2.22313,-5.31593c-1.42238,-1.4032 -3.34777,-2.17785 -5.34562,-2.15074zM44.8,59.73333v119.46667c0,8.25067 6.68267,14.93333 14.93333,14.93333h104.53333c8.25067,0 14.93333,-6.68267 14.93333,-14.93333v-119.46667z",fill:"#2a3166"}))))},d=r.b.div.withConfig({displayName:"taskstyles__Wrapper",componentId:"knd7b5-0"})(["max-width:100%;cursor:pointer;border:",";min-height:80px;transition:border .2s ease-in;"],function(e){return e.showOptions?"1px solid #2a3166":"1px solid transparent"}),p=r.b.textarea.withConfig({displayName:"taskstyles__TextArea",componentId:"knd7b5-1"})(["width:100%;box-sizing:border-box;min-height:80px;resize:none;border:none;padding:10px;background-color:#f4abaa;"]),u=r.b.div.withConfig({displayName:"taskstyles__Content",componentId:"knd7b5-2"})(["border:0;background-color:",";box-sizing:border-box;min-height:100%;padding:10px;transition:background-color .2s ease-in;"],function(e){return e.showOptions?"transparent":"white"}),m=r.b.div.withConfig({displayName:"taskstyles__TaskDescription",componentId:"knd7b5-3"})([""]),h=r.b.div.withConfig({displayName:"taskstyles__Options",componentId:"knd7b5-4"})(["display:flex;justify-content:center;align-items:center;"]);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var t=e.description,n=e.id,r=e.updateTask,o=e.deleteTask,c=e.setCurrentTask,g=e.currentTaskId,k=f(Object(a.useState)(!1),2),b=k[0],w=k[1],y=f(Object(a.useState)(!1),2),v=y[0],x=y[1];return Object(a.useEffect)(function(){g!==n&&(b&&w(!1),v&&x(!1))},[g]),i.a.createElement(d,{showOptions:b,onClick:function(){w(!0),c(n)}},!v&&i.a.createElement(u,{showOptions:b},!b&&i.a.createElement(m,null,t),b&&i.a.createElement(h,null,i.a.createElement(s,{onClick:x}),i.a.createElement(l,{onClick:function(){o(n)}}))),v&&i.a.createElement(p,{value:t,onChange:function(e){r(e.target.value,n)}}))},k=n(14),b=n(13),w=Object(k.b)(function(e){return{currentTaskId:b.c.getCurrentTaskId(e)}},function(e){return{updateTask:function(t,n){return e(b.a.updateTask(t,n))},deleteTask:function(t){return e(b.a.deleteTask(t))},setCurrentTask:function(t){return e(b.a.setCurrentTask(t))}}})(g),y=r.b.div.withConfig({displayName:"tasksstyles__Wrapper",componentId:"sc-1u6bhjp-0"})(["display:flex;justify-content:center;"]),v=r.b.div.withConfig({displayName:"tasksstyles__Grid",componentId:"sc-1u6bhjp-1"})(["    width:100vw;display:grid;grid-template-columns:1fr;grid-gap:15px;@media (min-width:700px){grid-template-columns:repeat(2,1fr);}@media (min-width:1000px){grid-template-columns:repeat(3,1fr);max-width:1100px;}"]),x=function(e){var t=e.tasks;return i.a.createElement(y,null,i.a.createElement(v,null,t.map(function(e){return i.a.createElement(w,{key:e.id,id:e.id,description:e.description})})))},C=Object(k.b)(function(e){return{tasks:b.c.getTasks(e)}},null);t.default=C(x)}}]);