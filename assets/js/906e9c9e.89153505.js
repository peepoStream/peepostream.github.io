"use strict";(self.webpackChunkpeepostream_github_io=self.webpackChunkpeepostream_github_io||[]).push([[8923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3,slug:"/rewards/actions",description:"Understanding what each mod action does"},i="Mod Actions",l={unversionedId:"peepoStream/Rewards/Mod_Actions",id:"peepoStream/Rewards/Mod_Actions",title:"Mod Actions",description:"Understanding what each mod action does",source:"@site/docs/peepoStream/Rewards/Mod_Actions.md",sourceDirName:"peepoStream/Rewards",slug:"/rewards/actions",permalink:"/docs/rewards/actions",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/rewards/actions",description:"Understanding what each mod action does"},sidebar:"tutorialSidebar",previous:{title:"TTS Rewards",permalink:"/docs/rewards/tts"},next:{title:"Moderating Rewards",permalink:"/docs/rewards/moderation"}},s={},d=[{value:"Ban / Timeout",id:"ban--timeout",level:2},{value:"VIP",id:"vip",level:2},{value:"Steal VIP",id:"steal-vip",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mod-actions"},"Mod Actions"),(0,o.kt)("h2",{id:"ban--timeout"},"Ban / Timeout"),(0,o.kt)("p",null,"The user will be prompted to enter the username of any non-moderator to be temporarily timed out.\nThe timeout duration can be customized on a per-reward basis. The default duration is 60 seconds."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can immediately end any user's timeout by overwriting it. The command below will overwrite any existing timeout with a single-second timeout."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"/timeout username 1\n"))),(0,o.kt)("h2",{id:"vip"},"VIP"),(0,o.kt)("p",null,"The redeemer of the reward will be given the VIP role.  "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"VIPs are unaffected by slow, sub-only, and follower-only modes. They can also post links in chat ",(0,o.kt)("em",{parentName:"p"},"even when links are disabled in your moderation settings"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'The amount of VIPs on a channel at any given time is limited by your progress on the "',(0,o.kt)("a",{parentName:"p",href:"https://dashboard.twitch.tv/analytics/achievements"},"Build a Community"),'" achievement\u2014the number of VIPs scales per unique chatters in a stream, up to 100 VIPs max. See the table below for details.'),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Unique Chatters"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"10"),(0,o.kt)("td",null,"15"),(0,o.kt)("td",null,"20"),(0,o.kt)("td",null,"25"),(0,o.kt)("td",null,"50"),(0,o.kt)("td",null,"100"),(0,o.kt)("td",null,"200")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Number of VIP's"),(0,o.kt)("td",null,"10"),(0,o.kt)("td",null,"20"),(0,o.kt)("td",null,"30"),(0,o.kt)("td",null,"40"),(0,o.kt)("td",null,"50"),(0,o.kt)("td",null,"60"),(0,o.kt)("td",null,"80"),(0,o.kt)("td",null,"100")))),(0,o.kt)("h2",{id:"steal-vip"},"Steal VIP"),(0,o.kt)("p",null,"Removes VIP role from a specified VIP user and applies it to the redeemer."))}c.isMDXComponent=!0}}]);