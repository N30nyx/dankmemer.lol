(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{303:function(e,t,a){},356:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(6),c=a(12),i=a(3),r=a(5),s=a(1),d=(a(356),a(303),a(23)),m=a.n(d);const p=["all posts","accepted","implemented","duplicate","denied","invalid"];t.default=Object(o.b)(e=>e.login)((function(e){const t=Object(r.f)(),{current:a}=Object(l.useRef)(window.location.pathname.split("/")[2]),[o,d]=Object(l.useState)([]),[b,g]=Object(l.useState)(window.innerWidth<=560),[u,f]=Object(l.useState)(!1),[h,v]=Object(l.useState)(null),[E,k]=Object(l.useState)("Hot"),[w,y]=Object(l.useState)("all posts"),[C,N]=Object(l.useState)(!1),[O,L]=Object(l.useState)(!1),j=(Object(l.useRef)(!0),async(e=!1)=>{c(`/api/feedback/posts/${a}?from=${e?0:o.length}&amount=25&sorting=${E}&filter=${w}`).then(({data:t})=>{d(e?[...t.posts]:[...o,...t.posts]),f(t.all)})});Object(l.useEffect)(()=>(j(!0),N(!1)),[w,E]),Object(l.useEffect)(()=>(c("/api/feedback/categories").then(e=>{v(e.data)}),window.addEventListener("resize",()=>window.innerWidth<=560?g(!0):!window.innerWidth<=560?g(!1):void 0),()=>{window.removeEventListener("resize",()=>window.innerWidth<=560?g(!0):!window.innerWidth<=560?g(!1):void 0)}),[]),h&&!h.includes(a)&&window.location.replace("/feedback");const x=({icon:e,label:t})=>n.a.createElement("div",{id:b?"feedback-category-sorting-mobile-button":"feedback-category-sorting-desktop-button",className:t==E?"active":"",onClick:()=>k(t)},n.a.createElement("span",{className:"material-icons"},e),n.a.createElement("span",{id:b?"feedback-category-sorting-mobile-button-label":"feedback-category-sorting-desktop-button-label"},t));return n.a.createElement("div",{id:"feedback-category"},window.history.length>=1&&n.a.createElement("p",{onClick:()=>t.goBack(),className:"go-back"},n.a.createElement("span",{className:"material-icons"},"arrow_back"),"Go back"),n.a.createElement("div",{id:"feedback-category-head"},n.a.createElement("h1",{id:"feedback-category-head-title"},a.replace(a[0],a[0].toUpperCase()).replaceAll("_"," ")," feedback"),n.a.createElement("div",{id:"feedback-category-head-button"},n.a.createElement(s.b,{id:"feedback-category-head-button-create",to:"/feedback/new"},"New post"),n.a.createElement("span",{id:"feedback-category-head-button-bg"}))),b?n.a.createElement("div",{id:"feedback-category-sorting-mobile"},n.a.createElement("div",{id:"feedback-category-sorting-mobile-button-options",className:O?"active":"",onClick:()=>{L(!O),N(!1)}},n.a.createElement("span",{className:"material-icons"},"more_horiz"),n.a.createElement("span",{id:"feedback-category-sorting-button-label"},"Options")),O&&n.a.createElement("div",{id:"feedback-category-sorting-mobile-buttons"},n.a.createElement(x,{icon:"local_fire_department",label:"Hot"}),n.a.createElement(x,{icon:"trending_up",label:"Top"}),n.a.createElement(x,{icon:"star",label:"New"}),n.a.createElement(x,{icon:"restore",label:"Old"}),n.a.createElement("div",{id:"feedback-category-sorting-mobile-button",className:"filter",title:"Filter posts based on their label"},n.a.createElement("div",{id:"filter-button",onClick:()=>N(!C)},n.a.createElement("span",{className:"material-icons-outlined"},"filter_alt"),n.a.createElement("span",{id:"feedback-category-sorting-mobile-button-label"},w.charAt(0).toUpperCase()+w.substr(1).toLowerCase())),C&&n.a.createElement("div",{id:"feedback-category-filter-options-mobile"},p.map(e=>n.a.createElement("p",{key:w,onClick:()=>y(e)},e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())))))):n.a.createElement("div",{id:"feedback-category-sorting-desktop"},n.a.createElement(x,{icon:"local_fire_department",label:"Hot"}),n.a.createElement(x,{icon:"trending_up",label:"Top"}),n.a.createElement(x,{icon:"star",label:"New"}),n.a.createElement(x,{icon:"restore",label:"Old"}),n.a.createElement("div",{className:"sorting-separator"}),n.a.createElement("div",{id:"feedback-category-sorting-desktop-button",className:"filter",title:"Filter posts based on their label"},n.a.createElement("div",{id:"filter-button",onClick:()=>N(!C)},n.a.createElement("span",{className:"material-icons-outlined"},"filter_alt"),n.a.createElement("span",{id:"feedback-category-sorting-button-label"},w.charAt(0).toUpperCase()+w.substr(1).toLowerCase())),C&&n.a.createElement("div",{id:"feedback-category-filter-options"},p.map(e=>n.a.createElement("p",{key:w,onClick:()=>y(e)},e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()))))),0===o.length&&n.a.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement("img",{src:m.a,width:80,style:{marginBottom:"1vh"}}),n.a.createElement("i",null,"Woah, so empty.")),o.map((a,l)=>n.a.createElement("div",{key:a._id,className:"feedback-post",onClick:()=>t.push("/feedback/p/"+a._id)},n.a.createElement("div",{className:"feedback-post-content"},n.a.createElement("h3",{className:"feedback-post-content-title"},n.a.createElement("p",null,a.title),a.developerResponse&&n.a.createElement("span",{className:"feedback-post-tag developer-response"},"Developer Response"),a.label&&a.label.length>=1&&n.a.createElement("span",{className:"feedback-post-tag "+a.label.split(" ").join("-")},a.label.charAt(0).toUpperCase()+a.label.substr(1).toLowerCase())),n.a.createElement("p",{className:"feedback-post-content-description"},a.description)),n.a.createElement("div",{className:"feedback-post-stats"},n.a.createElement("div",{className:"feedback-post-stats-comments"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},n.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.a.createElement("path",{d:"M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"}),n.a.createElement("path",{d:"M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"})),n.a.createElement("p",{className:"feedback-post-stats-comments-count"},a.comments)),n.a.createElement("div",{className:a.upvoted?"feedback-post-stats-button upvoted":"feedback-post-stats-button",onClick:t=>(async t=>{if(!e.loggedIn)return i.b.dark(n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You need to be logged in!")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"upvoteState"});c.patch("/api/feedback/post/upvote/"+t).then(({data:e})=>{const a=o.find(e=>e._id===t);a.upvotes+=e.upvote,a.upvoted=1==e.upvote,d([...o])})})(a._id)&&t.stopPropagation()},a.upvoted?n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},n.a.createElement("path",{d:"M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"})):n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},n.a.createElement("path",{d:"M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"})),n.a.createElement("p",null,a.upvotes))))),!u&&n.a.createElement("div",{onClick:j,className:"load-more"},n.a.createElement("p",null,"Load more comments...")),n.a.createElement(i.a,null))}))}}]);