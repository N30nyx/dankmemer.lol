(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{379:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n(15),i=n(5);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=Object(o.b)(e=>e.login)((function(e){let[t,n]=Object(a.useState)(null);const o=window.location.pathname.split("/")[3],p=async a=>{if(!e.loggedIn)return i.b.dark(r.a.createElement("p",null,r.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},r.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),r.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You need to be logged in!")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"upvoteState"});l.patch("/api/feedback/post/upvote/"+a).then(({data:e})=>{t.upvotes+=e.upvote,t.upvoted=1==e.upvote,n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))})};return Object(a.useEffect)(()=>{(async()=>{l("/api/feedback/post/"+o).then(({data:e})=>{n(e.post)})})()},[]),r.a.createElement("div",{style:{width:"70vw",margin:"0 auto"}},t&&r.a.createElement("div",null,r.a.createElement("div",{onClick:()=>p(t._id)},t.upvoted?"[UNDO UPVOTE]":"[UPVOTE]"),r.a.createElement("div",null,t.upvotes," upvotes"),r.a.createElement("div",null,"by ",t.author.username),r.a.createElement("div",null,t.title),r.a.createElement("div",null,t.description),r.a.createElement("div",null,new Date(t.createdAt).toLocaleString()),e.loggedIn&&(e.id===t.author.id||e.isAdmin||e.isModerator)&&r.a.createElement("div",{onClick:()=>(async e=>{l.delete("/api/feedback/post/"+e),window.location.replace("/feedback/"+t.category)})(t._id),style:{color:"red"}},"[DELETE]")),r.a.createElement(i.a,null))}))}}]);