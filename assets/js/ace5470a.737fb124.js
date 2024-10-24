"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[919],{8999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var l=t(4848),i=t(8453);const a={sidebar_position:4,description:"Explore the various float functions available in Textwire"},s="Float functions",r={id:"functions/float",title:"Float functions",description:"Explore the various float functions available in Textwire",source:"@site/versioned_docs/version-v2/functions/float.md",sourceDirName:"functions",slug:"/functions/float",permalink:"/docs/v2/functions/float",draft:!1,unlisted:!1,tags:[],version:"v2",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Explore the various float functions available in Textwire"},sidebar:"tutorialSidebar",previous:{title:"Integer functions",permalink:"/docs/v2/functions/int"},next:{title:"Boolean functions",permalink:"/docs/v2/functions/bool"}},o={},u=[{value:"abs",id:"abs",level:2},{value:"Input example",id:"input-example",level:4},{value:"Output",id:"output",level:4},{value:"ceil",id:"ceil",level:2},{value:"Input example",id:"input-example-1",level:4},{value:"Output",id:"output-1",level:4},{value:"floor",id:"floor",level:2},{value:"Input example",id:"input-example-2",level:4},{value:"Output",id:"output-2",level:4},{value:"int",id:"int",level:2},{value:"Input example",id:"input-example-3",level:4},{value:"Output",id:"output-3",level:4},{value:"round",id:"round",level:2},{value:"Input example",id:"input-example-4",level:4},{value:"Output",id:"output-4",level:4},{value:"str",id:"str",level:2},{value:"Input example",id:"input-example-5",level:4},{value:"Output",id:"output-5",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"float-functions",children:"Float functions"})}),"\n",(0,l.jsx)(n.h2,{id:"abs",children:"abs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"abs(): float\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the absolute value of a float. If the float is negative, it will return the positive value of it"}),"\n",(0,l.jsx)(n.h4,{id:"input-example",children:"Input example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>{{ -5.125.abs() }}</p>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output",children:"Output"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>5.125</p>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ceil",children:"ceil"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"ceil(): int\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the rounded up value of a float to the nearest integer"}),"\n",(0,l.jsx)(n.h4,{id:"input-example-1",children:"Input example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>{{ 5.125.ceil() }}</p>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-1",children:"Output"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>6</p>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"floor",children:"floor"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"floor(): int\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the rounded down value of a float to the nearest integer"}),"\n",(0,l.jsx)(n.h4,{id:"input-example-2",children:"Input example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>{{ 5.125.floor() }}</p>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-2",children:"Output"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>5</p>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"int",children:"int"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"int(): int\n"})}),"\n",(0,l.jsx)(n.p,{children:"Converts a float to an integer by removing the decimal part of the number. It doesn't round the number, it just removes the decimal part"}),"\n",(0,l.jsx)(n.h4,{id:"input-example-3",children:"Input example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>{{ 5.5.int() }}</p>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-3",children:"Output"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>5</p>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"round",children:"round"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"round(): int\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Rounds a float to the nearest integer. ",(0,l.jsx)(n.code,{children:"1.5 -> 2"}),", ",(0,l.jsx)(n.code,{children:"1.4 -> 1"}),", ",(0,l.jsx)(n.code,{children:"1.6 -> 2"})]}),"\n",(0,l.jsx)(n.h4,{id:"input-example-4",children:"Input example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>{{ 5.5.round() }}</p>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-4",children:"Output"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>6</p>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"str",children:"str"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"str(): str\n"})}),"\n",(0,l.jsx)(n.p,{children:"Converts a float to a string. It's useful when you want to manipulate the float as a string. For displaying the float, you don't need to use this function, as Textwire automatically converts the float to a string when displaying it"}),"\n",(0,l.jsx)(n.h4,{id:"input-example-5",children:"Input example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>{{ 5.125.str() }}</p>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-5",children:"Output"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<p>5.125</p>\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var l=t(6540);const i={},a=l.createContext(i);function s(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);