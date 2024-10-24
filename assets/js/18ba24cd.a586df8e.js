"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7640],{4661:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var t=r(4848),i=r(8453);const o={sidebar_position:6,description:"Learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project"},s="Error Handling",a={id:"guides/error-handling",title:"Error Handling",description:"Learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project",source:"@site/versioned_docs/version-v2/guides/error-handling.md",sourceDirName:"guides",slug:"/guides/error-handling",permalink:"/docs/v2/guides/error-handling",draft:!1,unlisted:!1,tags:[],version:"v2",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project"},sidebar:"tutorialSidebar",previous:{title:"Custom functions",permalink:"/docs/v2/guides/custom-functions"},next:{title:"Built-in functions",permalink:"/docs/v2/functions/"}},l={},u=[{value:"When does an error occur?",id:"when-does-an-error-occur",level:2},{value:"Handling errors in Textwire",id:"handling-errors-in-textwire",level:2},{value:"What happens to the output?",id:"what-happens-to-the-output",level:2},{value:"Error output in templates",id:"error-output-in-templates",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"error-handling",children:"Error Handling"})}),"\n",(0,t.jsx)(n.p,{children:"One of the main focuses of Textwire is to provide a simple and easy-to-use API for developers. However, errors can still occur in your project. In this guide, you will learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project."}),"\n",(0,t.jsx)(n.h2,{id:"when-does-an-error-occur",children:"When does an error occur?"}),"\n",(0,t.jsx)(n.p,{children:"If you call a function on a value that doesn't support that function, Textwire will return an error. Whether you use Textwire to parse a string or a file, you will get an error returned. Some example cases where errors can occur in Textwire are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Passing the wrong argument type to a function."})," For example, passing an integer to a function that expects a string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dividing by zero."})," This is a well known error in programming, and Textwire will result in an error if you try to divide by zero"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Using a function that doesn't exist."})," You'll get a detailed error message if you try to use a function that doesn't exist in Textwire"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Using a variable that doesn't exist."})," If you try to use a variable that doesn't exist, Textwire will return an error"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Using a function on a value that doesn't support that function."})," If you try to use a function on a value that doesn't support that function, Textwire will return an error"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"handling-errors-in-textwire",children:"Handling errors in Textwire"}),"\n",(0,t.jsx)(n.p,{children:"Handling errors in Textwire are handled in you Go code. Let's say you are evaluating a string that contains Textwire code with the incorrect function usage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'inp := "{{ name.split(1) }}"\n\nresult, err := textwire.EvaluateString(inp, map[string]interface{}{\n    "name": "Serhii Cho",\n})\n\nif err != nil {\n    // handle the error\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/v2/functions/str#split",children:"split"})," function requires a string as an argument, not an integer. If an incorrect argument type is passed, Textwire will return an error from the ",(0,t.jsx)(n.code,{children:"EvaluateString"})," function, which you can handle as needed."]}),"\n",(0,t.jsx)(n.p,{children:"In the same way you handle errors with evaluating a file or working with templating system."}),"\n",(0,t.jsx)(n.h2,{id:"what-happens-to-the-output",children:"What happens to the output?"}),"\n",(0,t.jsx)(n.p,{children:"If you use Textwire to evaluate a single file or a string, the output will be empty if an error occurs. When you use Textwire as a templating system, it's a bit different."}),"\n",(0,t.jsx)(n.h3,{id:"error-output-in-templates",children:"Error output in templates"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["When an error occurs, we cannot serve you the output to the frontend. The wrong usage of functions will lead to wrong function output, which can result in wrong data being displayed on the frontend. For better security and data integrity, the best way is to prevent the user of your site to see the output. You can read more about this ",(0,t.jsx)(n.a,{href:"/docs/v2/faq/questions#why-its-best-to-prevent-visitors-of-your-site-from-seeing-the-result-of-the-function-output-when-an-error-occurs",children:"here in the FAQ section"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"When something goes wrong with your Textwire code, you'll get pre-defined HTML with the static message displayed:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error output in Textwire",src:r(5121).A+"",width:"2980",height:"926"})}),"\n",(0,t.jsxs)(n.p,{children:["The actual error message will be handle depending on your logic, but ",(0,t.jsx)(n.strong,{children:"it must not be displayed to the user"})," for security reasons."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5121:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/oops-85c58a16d707efe349d1e386cf3b5631.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);