(self.webpackJsonp=self.webpackJsonp||[]).push([[4],{39:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(2),o=a.b.div.withConfig({displayName:"deleteBinstyles__Wrapper",componentId:"sc-10j6tkg-0"})(["height:24px;width:24px;cursor:pointer;"]),l=function(e){var t=e.className,n=e.onClick;return r.a.createElement(o,{className:t,onClick:n},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 224 224",width:"24",height:"24"},r.a.createElement("g",{fill:"none",strokeMiterlimit:"10",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",style:{mixBlendMode:"normal"}},r.a.createElement("path",{d:"M0,224v-224h224v224z"}),r.a.createElement("path",{d:"M93.33333,18.66667l-9.33333,9.33333h-46.66667v18.66667h28h93.33333h28v-18.66667h-46.66667l-9.33333,-9.33333zM46.66667,65.33333v121.33333c0,10.26667 8.4,18.66667 18.66667,18.66667h93.33333c10.26667,0 18.66667,-8.4 18.66667,-18.66667v-121.33333z",fill:"#2a3166"}))))},s=a.b.div.withConfig({displayName:"taskstyles__Wrapper",componentId:"knd7b5-0"})(["max-width:100%;border:0;overflow-wrap:break-word;position:relative;height:40px;"]),c=a.b.textarea.withConfig({displayName:"taskstyles__TextArea",componentId:"knd7b5-1"})(["   padding:5px;box-sizing:border-box;font-size:1em;resize:none;width:100%;border:0;overflow-y:scroll;height:40px;position:absolute;"]),d=Object(a.b)(l).withConfig({displayName:"taskstyles__Bin",componentId:"knd7b5-2"})(["   position:absolute;top:8px;right:8px;"]);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(e){var t=e.id,n=e.description,a=e.updateDescription,o=e.deleteTask,l=p(Object(i.useState)(!1),2),u=l[0],f=l[1];return r.a.createElement(s,{onMouseOver:function(){f(!0)},onMouseLeave:function(){f(!1)}},r.a.createElement(c,{value:n,onChange:function(e){return a(e.target.value,t)},onBlur:function(){return f(!1)},onClick:function(){f(!0)}}),u&&r.a.createElement(d,{onClick:function(){return o(t)}}))},f=n(14),m=n(13),h=Object(f.b)(null,function(e){return{updateDescription:function(t,n){return e(m.a.updateTask(t,n))},deleteTask:function(t){return e(m.a.deleteTask(t))}}})(u),v=a.b.div.withConfig({displayName:"tasksstyles__Wrapper",componentId:"sc-1u6bhjp-0"})(["display:flex;justify-content:center;"]),b=a.b.div.withConfig({displayName:"tasksstyles__Grid",componentId:"sc-1u6bhjp-1"})(["    width:100vw;display:grid;grid-template-columns:1fr;grid-gap:15px;@media (min-width:700px){grid-template-columns:repeat(2,1fr);}@media (min-width:1000px){grid-template-columns:repeat(3,1fr);max-width:1100px;}"]),g=function(e){var t=e.tasks;return r.a.createElement(v,null,r.a.createElement(b,null,t.map(function(e){return r.a.createElement(h,{key:e.id,id:e.id,description:e.description})})))},w=Object(f.b)(function(e){return{tasks:m.c.getTasks(e)}},null);t.default=w(g)}}]);