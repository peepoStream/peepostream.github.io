"use strict";(self.webpackChunkpeepostream_github_io=self.webpackChunkpeepostream_github_io||[]).push([[2024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,slug:"/setup/obs",description:"Setting up peepoStream in OBS Studio"},i="OBS",p={unversionedId:"peepoStream/Software_Setup/OBS_Setup",id:"peepoStream/Software_Setup/OBS_Setup",title:"OBS",description:"Setting up peepoStream in OBS Studio",source:"@site/docs/peepoStream/Software_Setup/OBS_Setup.md",sourceDirName:"peepoStream/Software_Setup",slug:"/setup/obs",permalink:"/docs/setup/obs",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/setup/obs",description:"Setting up peepoStream in OBS Studio"},sidebar:"tutorialSidebar",previous:{title:"Software Setup",permalink:"/docs/setup"},next:{title:"Streamlabs",permalink:"/docs/setup/streamlabs"}},c={},l=[{value:"Open Dock Manager",id:"open-dock-manager",level:3},{value:"Add the peepoStream Dock",id:"add-the-peepostream-dock",level:3},{value:"Name",id:"name",level:4},{value:"URL",id:"url",level:4},{value:"Sign In",id:"sign-in",level:2}],u={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"obs"},"OBS"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Browser Source and Dock are incompatible with OBS version 27 or prior.")),(0,o.kt)("p",null,"You can follow a video walkthrough here: ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/o_Ko21KCJu4"},"https://youtu.be/o_Ko21KCJu4"),"\nOr, follow the steps below:"),(0,o.kt)("h3",{id:"open-dock-manager"},"Open Dock Manager"),(0,o.kt)("p",null,'Select "Custom Browser Docks..."',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1052040457271652422/1052040457435234344/image.png",alt:"fe"})),(0,o.kt)("h3",{id:"add-the-peepostream-dock"},"Add the peepoStream Dock"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1052040457271652422/1052040457821102130/image.png",alt:"te"}),"  "),(0,o.kt)("h4",{id:"name"},"Name"),(0,o.kt)("p",null,'The dock name can be set to whatever you like. In the above example, it has been named "TTS".'),(0,o.kt)("h4",{id:"url"},"URL"),(0,o.kt)("p",null,"The dock URL must be set to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://peepostream.com/obs/dock\n")),(0,o.kt)("h2",{id:"sign-in"},"Sign In"),(0,o.kt)("p",null,'If it is your first time adding the Dock to OBS, you will be presented with a window showing a "Sign in with Twitch" button on a green background. After signing in, you will see the TTS player. You can drag this window anywhere you like in OBS.'),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you close the peepoStream Dock, you will not receive alerts. You can reopen added docks from the Docks dropdown at the top of OBS.")))}s.isMDXComponent=!0}}]);