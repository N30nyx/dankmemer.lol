(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{304:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=(e,t,n)=>{"desktop"===n?t.mediaQuery="(min-width: 1025px)":"mobile"===n&&(t.mediaQuery="(min-width: 768px) and (max-width: 1024px), (min-width: 320px) and (max-width: 767px)"),window.nitroAds&&window.nitroAds.createAd(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({refreshLimit:10,refreshTime:30,renderVisibleOnly:!1,refreshVisibleOnly:!0,report:{enabled:!0,wording:"Report Ad",position:"top-right"}},t))}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),i=n.n(r);function o(){return i.a.createElement("div",{id:"bottom-cta"},i.a.createElement("h1",{id:"bottom-cta-title"},"Join the family!"),i.a.createElement("p",{id:"bottom-cta-subtitle"},"Add Dank Memer to your Discord server."),i.a.createElement("div",{id:"bottom-cta-button"},i.a.createElement("a",{id:"bottom-cta-button-invite",href:"https://invite.dankmemer.lol",rel:"noreferrer noopener"},"Invite now"),i.a.createElement("span",{id:"bottom-cta-button-bg"})))}},349:function(e,t,n){},366:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(0),i=n.n(r),o=n(306),a=(n(349),n(304));function c(e){const[t,n]=Object(r.useState)(""),[c,l]=Object(r.useState)(""),[d,b]=Object(r.useState)(0),[s,m]=Object(r.useState)(null),[u,p]=Object(r.useState)("");Object(r.useEffect)(()=>{window.scrollTo(0,0);(async()=>(await fetch("/api/blogs/"+window.location.pathname.split("/")[2])).json())().then(e=>{n(e.name),l(e.author),b(e.date),p(e.content),m(e.image?e.image:null)}),Object(a.a)("nitropay-blog-bottom",{sizes:[[728,90],[970,90],[970,250]],renderVisibleOnly:!0},"desktop"),Object(a.a)("nitropay-blog-bottom",{sizes:[[320,50],[300,50],[300,250]],renderVisibleOnly:!0},"mobile")},[]);return i.a.createElement("div",{id:"blog"},i.a.createElement("div",{id:"blog-header"},i.a.createElement("h1",{id:"blog-header-title"},t),i.a.createElement("div",{id:"blog-header-information"},i.a.createElement("p",{id:"blog-header-information-author"},"Written by ",c),i.a.createElement("p",{id:"blog-header-information-date"},"Published on ",(e=>{var t;return`${(e=new Date(e)).toLocaleString("default",{month:"long"})} ${(t=e.getDate())+(t>0?["th","st","nd","rd"][t>3&&t<21||t%10>3?0:t%10]:"")}, ${e.getFullYear()}`})(d)))),s?i.a.createElement("div",{id:"blog-image"},i.a.createElement("img",{src:s,alt:t+"'s image."})):"",i.a.createElement("div",{id:"blog-content",dangerouslySetInnerHTML:{__html:u}}),i.a.createElement(o.a,null),i.a.createElement("div",{id:"nitropay-blog-bottom",className:"nitropay"}))}}}]);