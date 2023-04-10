"use strict";(self.webpackChunkpeepostream_github_io=self.webpackChunkpeepostream_github_io||[]).push([[661],{3905:(e,t,A)=>{A.d(t,{Zo:()=>u,kt:()=>f});var r=A(7294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function o(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,r)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?o(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,r,n=function(e,t){if(null==e)return{};var A,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)A=o[r],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)A=o[r],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var A=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(A),g=n,f=d["".concat(c,".").concat(g)]||d[g]||l[g]||o;return A?r.createElement(f,a(a({ref:t},u),{},{components:A})):r.createElement(f,a({ref:t},u))}));function f(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=A.length,a=new Array(o);a[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=A[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,A)}g.displayName="MDXCreateElement"},7779:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=A(7462),n=(A(7294),A(3905));const o={sidebar_position:1,slug:"/setup/browser",description:"Using peepoStream's browser source"},a="Browser Source",i={unversionedId:"Software_Setup/Adding_Browser_Source",id:"Software_Setup/Adding_Browser_Source",title:"Browser Source",description:"Using peepoStream's browser source",source:"@site/docs/Software_Setup/Adding_Browser_Source.md",sourceDirName:"Software_Setup",slug:"/setup/browser",permalink:"/setup/browser",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/setup/browser",description:"Using peepoStream's browser source"},sidebar:"tutorialSidebar",previous:{title:"Software Setup",permalink:"/setup"},next:{title:"Dock Setup",permalink:"/setup/dock"}},c={},s=[{value:"Adding the Browser Source",id:"adding-the-browser-source",level:2},{value:"Controlling the Audio Output",id:"controlling-the-audio-output",level:2},{value:"peepoStream Dock",id:"peepostream-dock",level:3},{value:"Chat Commands",id:"chat-commands",level:3},{value:"Interacting with the Source",id:"interacting-with-the-source",level:3},{value:"Controlling via Streaming Software",id:"controlling-via-streaming-software",level:3}],u={toc:s},d="wrapper";function l(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"browser-source"},"Browser Source"),(0,n.kt)("h2",{id:"adding-the-browser-source"},"Adding the Browser Source"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a new browser source to your streaming software.  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the URL box, point the browser source to the following URL:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://peepostream.com/obs/browser\n")))),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Browser source properties with the URL filled in",src:A(8697).Z,width:"492",height:"251"}))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ok.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Right-click on the browser source and click "Interact". A window will pop up where you can interact with the browser source. Use this window to sign in.'))),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Interact in the Menu",src:A(2506).Z,width:"494",height:"97"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"controlling-the-audio-output"},"Controlling the Audio Output"),(0,n.kt)("p",null,"There are three methods to control the audio levels while using a browser source, listed in order of recommendation:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/setup/dock/"},"peepoStream Dock")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#chat-commands"},"Chat Commands")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#controlling-via-streaming-software"},"Controlling via Streaming software")," ",(0,n.kt)("em",{parentName:"li"},"(advanced)"))),(0,n.kt)("h3",{id:"peepostream-dock"},"peepoStream Dock"),(0,n.kt)("p",null,"Please see the ",(0,n.kt)("a",{parentName:"p",href:"/setup/dock"},"dock setup article")," for more information."),(0,n.kt)("h3",{id:"chat-commands"},"Chat Commands"),(0,n.kt)("p",null,"The easiest way to control your TTS is through chat commands. These allow you to adjust the dock settings from your stream chat. These ",(0,n.kt)("a",{parentName:"p",href:"/config/commands/"},"Chat Commands")," will enable you to perform all the docks functions. When combined with a ",(0,n.kt)("a",{parentName:"p",href:"/setup/streamdeck"},"Stream Deck")," you can control peepoStream with a single button!"),(0,n.kt)("h3",{id:"interacting-with-the-source"},"Interacting with the Source"),(0,n.kt)("p",null,'As we did when setting up the TTS source, you can use your streaming software\'s "Interact" feature by right-clicking the browser source and clicking "Interact" in the menu. This will open a new window where you can control the dock\'s features.'),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The browser source must be active in your source list, or nothing will appear in the interact window.")),(0,n.kt)("h3",{id:"controlling-via-streaming-software"},"Controlling via Streaming Software"),(0,n.kt)("p",null,"Controlling audio through the streaming software is beneficial because it allows you to easily control which audio track the TTS messages will play through."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the Browser Source properties"),(0,n.kt)("li",{parentName:"ol"},'Enable the "Control Audio via OBS" checkbox'),(0,n.kt)("li",{parentName:"ol"},'Open "Advanced Audio Properties"'),(0,n.kt)("li",{parentName:"ol"},"Find your TTS browser source name in the list"),(0,n.kt)("li",{parentName:"ol"},'Change the "Audio Monitoring" property to "Monitor and Output"')),(0,n.kt)("p",null,"You can now adjust the volume of the TTS through the streaming software's audio mixer using the volume slider."))}l.isMDXComponent=!0},8697:(e,t,A)=>{A.d(t,{Z:()=>r});const r="data:image/png;base64,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"},2506:(e,t,A)=>{A.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);