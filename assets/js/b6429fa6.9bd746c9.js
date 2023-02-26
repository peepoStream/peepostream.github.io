"use strict";(self.webpackChunkpeepostream_github_io=self.webpackChunkpeepostream_github_io||[]).push([[9175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||a;return r?o.createElement(d,i(i({ref:t},p),{},{components:r})):o.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1,slug:"/setup/chat/setup",description:"Setting up the chat features browser source"},i="Chat Features Setup",l={unversionedId:"Software_Setup/Software-TTS/Chat_Featues_Setup",id:"Software_Setup/Software-TTS/Chat_Featues_Setup",title:"Chat Features Setup",description:"Setting up the chat features browser source",source:"@site/docs/Software_Setup/Software-TTS/Chat_Featues_Setup.md",sourceDirName:"Software_Setup/Software-TTS",slug:"/setup/chat/setup",permalink:"/setup/chat/setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/setup/chat/setup",description:"Setting up the chat features browser source"},sidebar:"tutorialSidebar",previous:{title:"Chat Features",permalink:"/setup/chat"},next:{title:"TTS Command",permalink:"/setup/chat/command"}},s={},u=[{value:"Adding the Browser Source",id:"adding-the-browser-source",level:2},{value:"Controlling the Audio Output",id:"controlling-the-audio-output",level:2},{value:"Chat Commands",id:"chat-commands",level:3},{value:"Controlling via Streaming Software",id:"controlling-via-streaming-software",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"chat-features-setup"},"Chat Features Setup"),(0,n.kt)("h2",{id:"adding-the-browser-source"},"Adding the Browser Source"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a new browser source to your streaming software.  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the URL box, point the browser source to the TTS URL"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://peepostream.com/obs/tts\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This URL is different then the dock URL, and only plays TTS everything and chat commands."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click save, then right-click on the browser source and click "Interact". A window will pop up where you can interact with the browser source. Use this window to sign in.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The browser source should become transparent after signing in."))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"controlling-the-audio-output"},"Controlling the Audio Output"),(0,n.kt)("p",null,"There are two methods to control the audio levels while using TTS everything, listed in order of recommendation:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#chat-commands"},"Chat Commands")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#controlling-via-streaming-software"},"Controlling via Streaming software")," ",(0,n.kt)("em",{parentName:"li"},"(advanced)"))),(0,n.kt)("h3",{id:"chat-commands"},"Chat Commands"),(0,n.kt)("p",null,"The easiest way to control your TTS is through chat commands. These allow you to adjust settings from your stream chat. These ",(0,n.kt)("a",{parentName:"p",href:"/config/commands#tts-everything"},"Chat Commands")," will enable you to perform all the docks functions. When combined with a ",(0,n.kt)("a",{parentName:"p",href:"/setup/streamdeck"},"Stream Deck")," you can control peepoStream with a single button!"),(0,n.kt)("h3",{id:"controlling-via-streaming-software"},"Controlling via Streaming Software"),(0,n.kt)("p",null,"Controlling audio through the streaming software is beneficial because it allows you to easily control which audio track the TTS messages will play through."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the Browser Source properties"),(0,n.kt)("li",{parentName:"ol"},'Enable the "Control Audio via OBS" checkbox'),(0,n.kt)("li",{parentName:"ol"},'Open "Advanced Audio Properties"'),(0,n.kt)("li",{parentName:"ol"},"Find your TTS browser source name in the list"),(0,n.kt)("li",{parentName:"ol"},'Change the "Audio Monitoring" property to "Monitor and Output"')),(0,n.kt)("p",null,"You can now adjust the volume of the TTS through the streaming software's audio mixer using the volume slider."))}c.isMDXComponent=!0}}]);