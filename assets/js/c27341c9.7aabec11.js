"use strict";(self.webpackChunkpeepostream_github_io=self.webpackChunkpeepostream_github_io||[]).push([[39],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=r.createContext({}),s=function(e){var t=r.useContext(v),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(v.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,v=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,m=d["".concat(v,".").concat(p)]||d[p]||l[p]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var v in t)hasOwnProperty.call(t,v)&&(c[v]=t[v]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,slug:"/setup/dock/obs",description:"Setting up the Dock in OBS Studio"},a="OBS Dock",c={unversionedId:"Software_Setup/Dock_Setup/OBS_Setup",id:"Software_Setup/Dock_Setup/OBS_Setup",title:"OBS Dock",description:"Setting up the Dock in OBS Studio",source:"@site/docs/Software_Setup/Dock_Setup/OBS_Setup.md",sourceDirName:"Software_Setup/Dock_Setup",slug:"/setup/dock/obs",permalink:"/setup/dock/obs",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/setup/dock/obs",description:"Setting up the Dock in OBS Studio"},sidebar:"tutorialSidebar",previous:{title:"Dock Setup",permalink:"/setup/dock"},next:{title:"Streamlabs Dock",permalink:"/setup/dock/streamlabs"}},v={},s=[{value:"Video Walkthrough",id:"video-walkthrough",level:3},{value:"Open Dock Manager",id:"open-dock-manager",level:3},{value:"Add the peepoStream Dock",id:"add-the-peepostream-dock",level:3},{value:"Name",id:"name",level:4},{value:"URL",id:"url",level:4},{value:"Sign In",id:"sign-in",level:3}],u={toc:s};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"obs-dock"},"OBS Dock"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Browser Source and Dock are incompatible with OBS version 27 or prior.")),(0,o.kt)("h3",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/o_Ko21KCJu4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,o.kt)("h3",{id:"open-dock-manager"},"Open Dock Manager"),(0,o.kt)("p",null,'Select "Custom Browser Docks..."',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"Location of Custom Browser Docks menu under Docks tab",src:n(7261).Z,width:"431",height:"151"})),(0,o.kt)("h3",{id:"add-the-peepostream-dock"},"Add the peepoStream Dock"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Details Filled in on the Custom Dock Manager",src:n(141).Z,width:"624",height:"305"}),"  "),(0,o.kt)("h4",{id:"name"},"Name"),(0,o.kt)("p",null,'The dock name can be set to whatever you like. In the above example, it has been named "TTS".'),(0,o.kt)("h4",{id:"url"},"URL"),(0,o.kt)("p",null,"The dock URL must be set to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://peepostream.com/obs/dock\n")),(0,o.kt)("h3",{id:"sign-in"},"Sign In"),(0,o.kt)("p",null,'If it is your first time adding the Dock to OBS, you will be presented with a window showing a "Sign in with Twitch" button on a green background. After signing in, you will see the TTS player. You can drag this window anywhere you like in OBS.'),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you close the peepoStream Dock, you will not receive alerts. You can reopen added docks from the Docks dropdown at the top of OBS.")))}d.isMDXComponent=!0},141:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OBS_Custom_Dock_Manager-8356066bb927def8b5e8f40c7230f767.png"},7261:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);