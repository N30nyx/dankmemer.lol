(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(8),i=a(14),r=a(5),c=(a(362),a(28)),d=a.n(c);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,l)}return a}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const p=10,h=["accepted","implemented","duplicate","denied"];t.default=Object(o.b)(e=>e.login)(function(e){const[t,a]=Object(l.useState)(null),[o,c]=Object(l.useState)(""),[b,u]=Object(l.useState)(""),[g,v]=Object(l.useState)([]),[E,f]=Object(l.useState)(0),[w,k]=Object(l.useState)(!1),[y,x]=Object(l.useState)(!1),[L,A]=Object(l.useState)(!1),z=window.location.pathname.split("/")[3],S=window.location.pathname.split("/")[3],C=async l=>{if(!e.loggedIn)return r.b.dark(n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You need to be logged in!")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"upvoteState"});i.patch(`/api/feedback/post/upvote/${l}`).then(({data:e})=>{t.upvotes+=e.upvote,t.upvoted=1==e.upvote,a(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach(function(t){m(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t))})},O=(e,t)=>(i.patch(`/api/feedback/post/label/${e}?label=${t}`).then(({data:e})=>{location.reload()}),x(!1));return Object(l.useEffect)(()=>{if(0!==b){switch(b){case 200:r.b.update("commentState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(50, 211, 139)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Your comment has been submitted."))}),location.reload();break;case 401:r.b.update("commentState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You are not logged in."))});break;case 403:r.b.update("commentState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You are banned from posting comments."))});break;case 406:r.b.update("commentState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Your account is too new to post a comment."))});break;case 429:r.b.update("commentState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(245, 170, 10)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})),n.a.createElement("span",null,"You're doing that too often!"))});break;default:r.b.update("commentState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(245, 170, 10)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"An unknown error has occurred."))})}u(0)}},[b]),Object(l.useEffect)(()=>((async()=>{i(`/api/feedback/post/${S}`).then(({data:e})=>{a(e.post)})})(),window.addEventListener("resize",()=>document.getElementById("feedback-post-head-details-title").clientHeight>=window.innerHeight/5?A(!0):(document.getElementById("feedback-post-head-details-title").clientHeight,window.innerHeight,A(!1))),()=>{window.removeEventListener("resize",()=>document.getElementById("feedback-post-head-details-title").clientHeight>=window.innerHeight/5?A(!0):(document.getElementById("feedback-post-head-details-title").clientHeight,window.innerHeight,A(!1)))}),[]),Object(l.useEffect)(()=>{t&&document.getElementById("feedback-post-head-details-title").clientHeight>=window.innerHeight/5&&A(!0)},[t]),Object(l.useEffect)(()=>{(async()=>{i(`/api/feedback/comments/${z}?from=${E}&amount=${p}`).then(({data:e})=>{v([...g,...e.comments]),k(e.all)})})()},[E]),n.a.createElement("div",{id:"feedback-post"},!t&&!e.isLoading&&n.a.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement("img",{src:d.a,width:80,style:{marginBottom:"1vh"}}),n.a.createElement("i",null,"Woah, so empty.")),t&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"feedback-post-head",className:L?"column":""},n.a.createElement("div",{id:"feedback-post-head-details"},n.a.createElement("h1",{id:"feedback-post-head-details-title"},t&&t.title),t.developerResponse&&n.a.createElement("span",{className:"feedback-post-tag developer-response"},"Developer Response"),t.label&&t.label.length>=1&&n.a.createElement("span",{className:"feedback-post-tag "+t.label.split(" ").join("-")},t.label.charAt(0).toUpperCase()+t.label.substr(1).toLowerCase()),n.a.createElement("p",{id:"feedback-post-head-details-author"},"Suggested by ",t.author.username,"#",t.author.discriminator," at ",new Date(t.createdAt).toLocaleString())),n.a.createElement("div",{id:"feedback-post-head-controls"},e.loggedIn&&(e.isAdmin||e.isModerator)&&n.a.createElement("div",{id:"feedback-post-head-controls-dropdown"},n.a.createElement("div",{id:"feedback-post-head-controls-dropdown-container",onClick:()=>x(!y)},n.a.createElement("span",{className:"icon material-icons-outlined"},"label"),n.a.createElement("p",{id:"feedback-post-head-controls-dropdown-container-selected"},"Post label"),n.a.createElement("span",{className:"right material-icons"},"expand_more")),y?n.a.createElement("div",{id:"feedback-post-head-controls-dropdown-options"},h.map(e=>n.a.createElement("p",{key:e,className:"feedback-dropdown-item",onClick:()=>O(t._id,e)},e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())),n.a.createElement("p",{className:"feedback-dropdown-item",onClick:()=>O(t._id,"")},"No label")):""),e.loggedIn&&(e.id===t.author.id||e.isAdmin||e.isModerator)&&n.a.createElement("div",{className:"delete",onClick:()=>(async e=>{confirm("Are you sure you want to delete this post? You will not be able to get anything back once it is gone.")&&(i.delete(`/api/feedback/post/${e}`),window.location.replace(`/feedback/${t.category}`))})(t._id)},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor"},n.a.createElement("path",{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"}),n.a.createElement("path",{d:"M9 10h2v8H9zm4 0h2v8h-2z"})),n.a.createElement("p",null,"Delete post")),n.a.createElement("div",{className:t.upvoted?"feedback-button upvote upvoted":"feedback-button upvote",onClick:()=>C(t._id)},t.upvoted?n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},n.a.createElement("path",{d:"M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"})):n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},n.a.createElement("path",{d:"M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"})),n.a.createElement("p",null,t.upvotes)))),n.a.createElement("div",{id:"feedback-post-content"},n.a.createElement("p",null,t.description)),n.a.createElement("div",{id:"feedback-post-comments"},n.a.createElement("h2",null,"Comments (",t.comments,")"),n.a.createElement("p",{id:"feedback-post-comments-notice"},e.loggedIn?`You're signed in as, ${e.username}#${e.discriminator}. Ensure this is the account you want to appear as the comment author.`:"You are not signed in. Do it to post a comment."),n.a.createElement("div",{id:"feedback-post-comments-form"},n.a.createElement("textarea",{id:"feedback-post-comments-ta",maxLength:1024,onChange:e=>c(e.target.value),placeholder:"Comment"}),o.length>=5&&o.length<=1024?n.a.createElement("button",{className:"feedback-post-comments-submit enabled",onClick:async()=>{if(!e.loggedIn)return r.b.dark(n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You need to be logged in!")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"commentState"});if(o.length<5||o.length>2e3)return;r.b.dark(n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"5 5 40 40",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(65, 146, 255)"}},n.a.createElement("path",{d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"},n.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.5s",repeatCount:"indefinite"}))),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Submitting your comment.")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"commentState"});const t=await fetch("/api/feedback/comment",{credentials:"same-origin",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:o,id:S})});u(t.status)}},"Submit"):n.a.createElement("button",{className:"feedback-post-comments-submit disabled"},"Submit")),n.a.createElement("div",{id:"feedback-comments"},g.map(t=>n.a.createElement("div",{key:t._id,className:"comment"},n.a.createElement("div",{className:"comment-content"},n.a.createElement("p",{className:t.author.developer?"comment-content-author developer":"comment-content-author"},t.author.username,"#",t.author.discriminator," ",n.a.createElement("span",{className:"comment-post-time"},"at ",new Date(t.createdAt).toLocaleString().split(",")[1].split(":").slice(0,2).join(":"),new Date(t.createdAt).toLocaleString().split(",")[1].split(" ").pop()," ",new Date(t.createdAt).toLocaleString().split(",")[0])),n.a.createElement("p",{className:"comment-content-text"},t.comment)),n.a.createElement("div",{className:"comment-actions"},!t.deleted&&e.loggedIn&&(e.id===t.author.id||e.isAdmin||e.isModerator)&&n.a.createElement("div",{className:"comment-actions-delete",onClick:()=>(async e=>{confirm("Are you sure you want to remove this comment? This will delete it from the post, like it did ever exist \ud83d\ude2d")&&(i.delete(`/api/feedback/comment/${e}`),location.reload())})(t._id)},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor"},n.a.createElement("path",{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"}),n.a.createElement("path",{d:"M9 10h2v8H9zm4 0h2v8h-2z"})),n.a.createElement("p",null,"Delete comment"))),n.a.createElement("br",null))),!w&&n.a.createElement("div",{onClick:async()=>{f(E+p)}},"Load More Comments"))),n.a.createElement(r.a,null)))})}}]);