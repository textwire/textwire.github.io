"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7164],{1864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"guides/guides","title":"Guides - v2","description":"Learn how to use Textwire in your Go applications, including importing the package, creating template instances, and more","source":"@site/versioned_docs/version-v2/guides/guides.md","sourceDirName":"guides","slug":"/guides/","permalink":"/docs/v2/guides/","draft":false,"unlisted":false,"tags":[],"version":"v2","sidebarPosition":3,"frontMatter":{"title":"Guides - v2","sidebar_label":"Guides","sidebar_position":3,"description":"Learn how to use Textwire in your Go applications, including importing the package, creating template instances, and more"},"sidebar":"tutorialSidebar","previous":{"title":"Get Started","permalink":"/docs/v2/get-started"},"next":{"title":"Usage with Templates","permalink":"/docs/v2/guides/template-usage"}}');var i=n(4848),s=n(8453),o=n(9563);const c={title:"Guides - v2",sidebar_label:"Guides",sidebar_position:3,description:"Learn how to use Textwire in your Go applications, including importing the package, creating template instances, and more"},a="Guides",l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"guides",children:"Guides"})}),"\n",(0,i.jsx)(t.p,{children:"Welcome to the Textwire Guides section, your go-to resource for mastering the Textwire. Whether you\u2019re just starting or looking to deepen your knowledge, you\u2019ll find best practices, and step-by-step instructions to help you make the most of Textwire."}),"\n",(0,i.jsx)(t.p,{children:"Browse through our comprehensive collection of guides to learn everything from setting up Textwire to advanced customization techniques, ensuring a smooth and powerful experience."}),"\n","\n",(0,i.jsx)(o.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9563:(e,t,n)=>{n.d(t,{A:()=>w});n(6540);var r=n(4164),i=n(3751),s=n(6289),o=n(1430),c=n(2887),a=n(539),l=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},1430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(6540),i=n(797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);