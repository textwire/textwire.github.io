"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7226],{8346:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>u,toc:()=>a});var i=t(4848),o=t(8453);const r={sidebar_position:5,description:"Learn how to define and use custom functions in Textwire, enabling you to extend the functionality of Textwire by incorporating user-defined operations"},s="Custom functions",u={id:"guides/custom-functions",title:"Custom functions",description:"Learn how to define and use custom functions in Textwire, enabling you to extend the functionality of Textwire by incorporating user-defined operations",source:"@site/versioned_docs/version-v2/guides/custom-functions.md",sourceDirName:"guides",slug:"/guides/custom-functions",permalink:"/docs/v2/guides/custom-functions",draft:!1,unlisted:!1,tags:[],version:"v2",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Learn how to define and use custom functions in Textwire, enabling you to extend the functionality of Textwire by incorporating user-defined operations"},sidebar:"tutorialSidebar",previous:{title:"Evaluate a file",permalink:"/docs/v2/guides/eval-file"},next:{title:"Error Handling",permalink:"/docs/v2/guides/error-handling"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Defining custom functions",id:"defining-custom-functions",level:2},{value:"Using custom functions",id:"using-custom-functions",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"custom-functions",children:"Custom functions"})}),"\n",(0,i.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(e.p,{children:["Custom functions are user-defined functions in your Go code that can be utilized within Textwire. These functions allow you to perform operations beyond what the built-in functions provide. You can attach custom functions to any data type within Textwire and invoke them on a value using the dot operator ",(0,i.jsx)(e.code,{children:"."})," followed by the function name."]}),"\n",(0,i.jsx)(e.h2,{id:"defining-custom-functions",children:"Defining custom functions"}),"\n",(0,i.jsxs)(e.p,{children:["To define a custom function, you need to create a function in your Go code. Here is an example of defining a ",(0,i.jsx)(e.code,{children:"upperLast"})," function that converts the last character of a string to uppercase:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\t"unicode"\n\n\t"github.com/textwire/textwire/v2"\n)\n\nfunc main() {\n    // highlight-start\n    err := textwire.RegisterStrFunc("upperLast", func(s string, args ...interface{}) string {\n        runes := []rune(s)\n\n        if len(runes) > 0 {\n            runes[len(runes)-1] = unicode.ToUpper(runes[len(runes)-1])\n        }\n\n        return string(runes)\n    })\n    // highlight-end\n\n    if err != nil {\n        log.Fatal(err)\n    }\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["You can now use the ",(0,i.jsx)(e.code,{children:"upperLast"})," function anywhere in your Textwire code."]}),"\n",(0,i.jsx)(e.admonition,{title:"Prefixing custom functions",type:"tip",children:(0,i.jsxs)(e.p,{children:["It's a good practice to prefix your custom functions with a unique name to avoid conflicts with built-in functions. Because built-in functions have a higher priority than custom functions, if you define a custom function with the same name as a built-in function, the built-in function will be used. You can prefix with the underscore ",(0,i.jsx)(e.code,{children:"_"})," character to avoid conflicts. For example: ",(0,i.jsx)(e.code,{children:"{{ name._upperLast() }}"}),"."]})}),"\n",(0,i.jsx)(e.h2,{id:"using-custom-functions",children:"Using custom functions"}),"\n",(0,i.jsxs)(e.p,{children:["Here is the example of using the ",(0,i.jsx)(e.code,{children:"upperLast"})," function in Textwire after defining it:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\t"unicode"\n\n\t"github.com/textwire/textwire/v2"\n)\n\nfunc main() {\n    err := textwire.RegisterStrFunc("upperLast", func(s string, args ...interface{}) string {\n        runes := []rune(s)\n\n        if len(runes) > 0 {\n            runes[len(runes)-1] = unicode.ToUpper(runes[len(runes)-1])\n        }\n\n        return string(runes)\n    })\n\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // highlight-start\n    twCode := "<h1>{{ \'hello\'.upperLast() }}</h1>"\n    output, err := textwire.EvaluateString(twCode, nil)\n\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println(output) // Output: <h1>hellO</h1>\n    // highlight-end\n}\n'})}),"\n",(0,i.jsx)(e.admonition,{title:"Performance warning",type:"warning",children:(0,i.jsxs)(e.p,{children:["Custom functions are not as performant as built-in functions because they are defined in Go code. When you use a custom function, first it needs to be translated from Go to Textwire, which can be slower than built-in functions. Therefore, I would recommend to create an ",(0,i.jsx)(e.a,{href:"https://github.com/textwire/textwire/issues",children:"issue"})," with your desired built-in function, so that it can be added to Textwire if you need 100% performance."]})})]})}function l(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>u});var i=t(6540);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);