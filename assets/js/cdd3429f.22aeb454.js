"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1970],{6450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(4848),s=t(8453);const l={sidebar_position:1,description:"Explore the various array functions available in Textwire"},r="Array functions",i={id:"functions/arr",title:"Array functions",description:"Explore the various array functions available in Textwire",source:"@site/versioned_docs/version-v2/functions/arr.md",sourceDirName:"functions",slug:"/functions/arr",permalink:"/docs/v2/functions/arr",draft:!1,unlisted:!1,tags:[],version:"v2",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Explore the various array functions available in Textwire"},sidebar:"tutorialSidebar",previous:{title:"Built-in functions",permalink:"/docs/v2/functions/"},next:{title:"String functions",permalink:"/docs/v2/functions/str"}},d={},c=[{value:"join",id:"join",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Input example:",id:"input-example",level:4},{value:"Output:",id:"output",level:4},{value:"len",id:"len",level:2},{value:"Input example:",id:"input-example-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"rand",id:"rand",level:2},{value:"Input example:",id:"input-example-2",level:4},{value:"Output:",id:"output-2",level:4},{value:"reverse",id:"reverse",level:2},{value:"Input example:",id:"input-example-3",level:4},{value:"Output:",id:"output-3",level:4},{value:"shuffle",id:"shuffle",level:2},{value:"Input example:",id:"input-example-4",level:4},{value:"Output:",id:"output-4",level:4},{value:"slice",id:"slice",level:2},{value:"Arguments",id:"arguments-1",level:4},{value:"Input example:",id:"input-example-5",level:4},{value:"Output:",id:"output-5",level:4}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"array-functions",children:"Array functions"})}),"\n",(0,a.jsx)(n.h2,{id:"join",children:"join"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'join(separator?: str = ""): str\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Joins the elements of an array into a string and returns it. It takes an optional argument ",(0,a.jsx)(n.code,{children:"separator"})," which is used to join the elements. If no separator is provided, it defaults to a comma"]}),"\n",(0,a.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"separator"})," (str) (optional) - What separator to use to join the elements. Default is comma ",(0,a.jsx)(n.code,{children:","})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"input-example",children:"Input example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<span>{{ ["one", "two"].join(" ") }}</span>\n'})}),"\n",(0,a.jsx)(n.h4,{id:"output",children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>one two</span>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"len",children:"len"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"len(): int\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns the length of an array"}),"\n",(0,a.jsx)(n.h4,{id:"input-example-1",children:"Input example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>{{ [1, 2, 3].len() }}</span>\n"})}),"\n",(0,a.jsx)(n.h4,{id:"output-1",children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>3</span>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"rand",children:"rand"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"<T>.rand(): T\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns a random element from the array. The return type is the same as the type of the elements in the array"}),"\n",(0,a.jsx)(n.h4,{id:"input-example-2",children:"Input example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>{{ [1, 2, 3].rand() }}</span>\n"})}),"\n",(0,a.jsx)(n.h4,{id:"output-2",children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>2</span>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"reverse",children:"reverse"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"reverse(): arr\n"})}),"\n",(0,a.jsx)(n.p,{children:"Reverses the elements of an array and returns a new array"}),"\n",(0,a.jsx)(n.h4,{id:"input-example-3",children:"Input example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>{{ [1, 2, 3].reverse() }}</span>\n"})}),"\n",(0,a.jsx)(n.h4,{id:"output-3",children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>3, 2, 1</span>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"shuffle",children:"shuffle"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"shuffle(): arr\n"})}),"\n",(0,a.jsx)(n.p,{children:"Shuffles the elements of an array and returns a new array"}),"\n",(0,a.jsx)(n.h4,{id:"input-example-4",children:"Input example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>{{ [1, 2, 3, 5].shuffle() }}</span>\n"})}),"\n",(0,a.jsx)(n.h4,{id:"output-4",children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"\x3c!-- The order of the elements will be random --\x3e\n<span>2, 1, 3, 5</span>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"slice",children:"slice"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"slice(start: int, end?: int): arr\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Returns a portion of an array. The ",(0,a.jsx)(n.code,{children:"start"})," argument is the index at which to begin the slice. The ",(0,a.jsx)(n.code,{children:"end"})," argument is the index at which to end the slice. If ",(0,a.jsx)(n.code,{children:"end"})," is not provided, it slices to the end of the array"]}),"\n",(0,a.jsx)(n.h4,{id:"arguments-1",children:"Arguments"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"start"})," (int) - The index at which to begin the slice"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"end"})," (int) (optional) - The index at which to end the slice"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"input-example-5",children:"Input example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>{{ [1, 2, 3, 4, 5].slice(1, 3) }}</span>\n"})}),"\n",(0,a.jsx)(n.h4,{id:"output-5",children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<span>2, 3</span>\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"No negative arguments",type:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"start"})," and ",(0,a.jsx)(n.code,{children:"end"})," arguments cannot be negative. If you provide a negative value for ",(0,a.jsx)(n.code,{children:"start"}),", it will be treated as ",(0,a.jsx)(n.code,{children:"0"}),". If you provide a negative value for ",(0,a.jsx)(n.code,{children:"end"})," or the value will exceed the length of the array, it will default to a value of the last index of the array"]})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(6540);const s={},l=a.createContext(s);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);