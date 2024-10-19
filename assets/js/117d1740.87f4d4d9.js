"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8956],{556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(4848),a=t(8453);const i={sidebar_position:2,description:"Learn about different statements in Textwire, including if statements, variable declarations, use statements, insert statements, for loops, etc."},o="Statements",l={id:"language-elements/statements",title:"Statements",description:"Learn about different statements in Textwire, including if statements, variable declarations, use statements, insert statements, for loops, etc.",source:"@site/versioned_docs/version-v2/language-elements/statements.md",sourceDirName:"language-elements",slug:"/language-elements/statements",permalink:"/docs/v2/language-elements/statements",draft:!1,unlisted:!1,tags:[],version:"v2",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about different statements in Textwire, including if statements, variable declarations, use statements, insert statements, for loops, etc."},sidebar:"tutorialSidebar",previous:{title:"Language Elements",permalink:"/docs/v2/language-elements/"},next:{title:"Expressions",permalink:"/docs/v2/language-elements/expressions"}},r={},c=[{value:"If statement",id:"if-statement",level:2},{value:"For loop",id:"for-loop",level:2},{value:"Example",id:"example",level:3},{value:"Each loop",id:"each-loop",level:2},{value:"Example",id:"example-1",level:3},{value:"Output",id:"output",level:3},{value:"Example",id:"example-2",level:3},{value:"Variable declaration",id:"variable-declaration",level:2},{value:"Use statement",id:"use-statement",level:2},{value:"Insert statement",id:"insert-statement",level:2},{value:"Reserve statement",id:"reserve-statement",level:2},{value:"Component",id:"component",level:2},{value:"Example of a component",id:"example-of-a-component",level:3},{value:"Example of using a template",id:"example-of-using-a-template",level:3},{value:"Component slots",id:"component-slots",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"statements",children:"Statements"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Statements","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#if-statement",children:"If statement"})," ",(0,s.jsx)(n.code,{children:"@if(x == 1)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#variable-declaration",children:"Variable declaration"})," ",(0,s.jsx)(n.code,{children:"{{ x = 5 }}"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#use-statement",children:"Use statement"})," ",(0,s.jsx)(n.code,{children:'@use("layouts/main")'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#insert-statement",children:"Insert statement"})," ",(0,s.jsx)(n.code,{children:'@insert("title", "Home")'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#reserve-statement",children:"Reserve statement"})," ",(0,s.jsx)(n.code,{children:'@reserve("title")'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#for-loop",children:"For loop"})," ",(0,s.jsx)(n.code,{children:"@for(i = 0; i < 2; i++)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#each-loop",children:"Each loop"})," ",(0,s.jsx)(n.code,{children:"@each(name in names)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#component",children:"Component"})," ",(0,s.jsx)(n.code,{children:'@component("components/post-card")'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"if-statement",children:"If statement"}),"\n",(0,s.jsx)(n.p,{children:"You can use if statements to conditionally render content. Here is an example of using if statements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'@if(name == "Anna")\n    <p>Her name is Anna</p>\n@end\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(n.code,{children:"else"})," and ",(0,s.jsx)(n.code,{children:"elseif"})," statements:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"@if(x == 1)\n    <p>x is 1</p>\n@elseif(x == 2)\n    <p>x is 2</p>\n@else\n    <p>x is not 1 and 2</p>\n@end\n"})}),"\n",(0,s.jsx)(n.h2,{id:"for-loop",children:"For loop"}),"\n",(0,s.jsx)(n.p,{children:"You can use regular for loops to iterate over an array or a range of numbers."}),"\n",(0,s.jsxs)(n.p,{children:["This is a basic for loop that you can use. It has a declaration, condition and post statement. ",(0,s.jsx)(n.code,{children:"for <declaration>; <condition>; <post>"}),". They are all optional. Here is an example of using for loop:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'{{ names = ["Ann", "Serhii"] }}\n\n@for(i = 0; i < names.len(); i++)\n    <p>{{ names[i] }}</p>\n@else\n    <p>No names</p>\n@end\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@else"})," statement is optional and can be used to render content when there are no iterations in the loop."]})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(n.code,{children:"@break"}),", ",(0,s.jsx)(n.code,{children:"@breakIf()"}),", ",(0,s.jsx)(n.code,{children:"@continue"})," and ",(0,s.jsx)(n.code,{children:"@continueIf()"})," directives inside of a for loop to break or continue the loop. ",(0,s.jsx)(n.code,{children:"@breakIf()"})," and ",(0,s.jsx)(n.code,{children:"@continueIf()"})," directives except a single argument, which is a condition that needs to be met to break or continue the loop."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'{{ names = ["Ann", "Serhii", "Vladimir"] }}\n\n<ul>\n    @for(i = 0; i < names.len(); i++)\n        @continueIf(names[i] == "Serhii")\n        <li>{{ names[i] }}</li>\n    @end\n</ul>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"each-loop",children:"Each loop"}),"\n",(0,s.jsxs)(n.p,{children:["Each statement is a special for loop that you can use to iterate over an array. It has a declaration and an array. ",(0,s.jsx)(n.code,{children:"@each(<declaration> in <array>)"}),". Here is an example of using each loop:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'{{ names = ["Ann", "Serhii"] }}\n\n@each(name in names)\n    <p>{{ name }}</p>\n@else\n    <p>No names</p>\n@end\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@else"})," statement is optional and can be used to render content when the array is empty."]})}),"\n",(0,s.jsxs)(n.p,{children:["Inside of every ",(0,s.jsx)(n.code,{children:"each"})," loop, you can optionally use a ",(0,s.jsx)(n.code,{children:"loop"})," object to get the current index of the item or other data that is updated on every iteration."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.code,{children:"{{ loop.index }}"})," will return the current index of the item. Here is a list of all the properties of the ",(0,s.jsx)(n.code,{children:"loop"})," object you can use:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"index"})}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["Current index number starting from ",(0,s.jsx)(n.code,{children:"0"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"first"})}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Is the first item in a loop"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"last"})}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Is the last item in a loop"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iter"})}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["Current iteration number starting from ",(0,s.jsx)(n.code,{children:"1"})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'{{ names = ["Ann", "Serhii", "Vladimir"] }}\n\n<ul>\n    @each(name in names)\n        <li>{{ loop.iter }}: {{ name }}</li>\n    @end\n</ul>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<ul>\n\n        <li>1: Anna</li>\n\n        <li>2: Serhii</li>\n\n        <li>3: Vladimir</li>\n\n</ul>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(n.code,{children:"@break"}),", ",(0,s.jsx)(n.code,{children:"@breakIf()"}),", ",(0,s.jsx)(n.code,{children:"@continue"})," and ",(0,s.jsx)(n.code,{children:"@continueIf()"})," directives inside of a for loop to break or continue the loop. ",(0,s.jsx)(n.code,{children:"@breakIf()"})," and ",(0,s.jsx)(n.code,{children:"@continueIf()"})," directives except a single argument, which is a condition that needs to be met to break or continue the loop."]}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'{{ names = ["Ann", "Serhii", "Vladimir"] }}\n\n<ul>\n    @each(name in names)\n        @breakIf(name == "Serhii")\n        <li>{{ name }}</li>\n    @end\n</ul>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"variable-declaration",children:"Variable declaration"}),"\n",(0,s.jsxs)(n.p,{children:["You can assign and declare variables by using the ",(0,s.jsx)(n.code,{children:"="})," operator. Here is an example of declaring variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"{{ x = 5 }}\n{{ x = 10 }}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You cannot assign values to variables that have a different type. For example, you cannot do ",(0,s.jsx)(n.code,{children:'{{ x = "Hello"; x = 3 }}'})," because ",(0,s.jsx)(n.code,{children:"x"})," is a string and then you are trying to assign an integer to it. In Textwire, you don't need to declare type of a variable, it will be automatically inferred from the value that you assign to it."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Variable declaration statements are not expressions! They don't return any value and can't be used inside of other expressions. Therefore, they don't print anything to the output."})}),"\n",(0,s.jsx)(n.h2,{id:"use-statement",children:"Use statement"}),"\n",(0,s.jsx)(n.p,{children:'You have a "use statement" to define a layout for your template. Here is an example of using use statement:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'@use("layouts/main")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Use statement excepts a string literal as an argument. The string literal should be a path to the layout file relative to a ",(0,s.jsx)(n.code,{children:"TemplateDir"})," parameter that you set in the config. For example, if you set ",(0,s.jsx)(n.code,{children:"TemplateDir"})," to ",(0,s.jsx)(n.code,{children:'"src/templates/layouts"'}),", then you can use the layout statement like ",(0,s.jsx)(n.code,{children:'@use("main")'})," and it will look for the layout file in ",(0,s.jsx)(n.code,{children:'"src/templates/layouts/main.tw.html"'}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["When you use the ",(0,s.jsx)(n.code,{children:"@use"})," directive, all the content of the file will not be rendered except everything inside of the ",(0,s.jsx)(n.code,{children:"@insert"})," directives. It happens because you tell the program to use a layout file instead of the current file. It means that all the reserved places in the layout file will be replaced with the content that you insert into them."]})}),"\n",(0,s.jsx)(n.h2,{id:"insert-statement",children:"Insert statement"}),"\n",(0,s.jsxs)(n.p,{children:["You can use insert statement to insert content into reserved places. You cannot use ",(0,s.jsx)(n.code,{children:"insert"})," without defining a layout with Use statement in the same file. Here is an example of using insert statement in 2 ways, with content body and without it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="home.tw.html"',children:'@use("layouts/main")\n\n\x3c!-- It\'s useful when you want to pass a variable to the layout file --\x3e\n@insert("title", "Home page")\n\n\x3c!-- It\'s useful when you want to insert content into a reserved place --\x3e\n@insert("content")\n    <h1>Hello, World!</h1>\n    <p>This is a home page.</p>\n@end\n'})}),"\n",(0,s.jsx)(n.p,{children:"Insert statement excepts 2 arguments, the name of the reserved place and the optional content that you want to insert into the reserved place."}),"\n",(0,s.jsxs)(n.p,{children:["All the ",(0,s.jsx)(n.code,{children:"insert"})," statements will be transferred to the layout file and will be placed into reserved places defined by a ",(0,s.jsx)(n.a,{href:"#reserve-statement",children:"reserve statement"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"reserve-statement",children:"Reserve statement"}),"\n",(0,s.jsx)(n.p,{children:"When you define a layout file for you template, you need to reserve places for dynamic content. You can reserve a place for a title, content, sidebar, footer and so on. Here is an example of using reserve statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="layouts/main.tw.html"',children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>@reserve("title")</title>\n</head>\n<body>\n    @reserve("content")\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["All the variables passed to the template file will be available in the layout file. It means that you can even use replace the ",(0,s.jsx)(n.code,{children:'@reserve("title")'})," with ",(0,s.jsx)(n.code,{children:"{{ title }}"})," and define the ",(0,s.jsx)(n.code,{children:"title"})," variable in each template file."]})}),"\n",(0,s.jsxs)(n.p,{children:["Reserve statement excepts only a single argument, which the name of the reserved place. This name will be used in the ",(0,s.jsx)(n.a,{href:"#insert-statement",children:"insert statement"})," to insert content into the reserved place."]}),"\n",(0,s.jsx)(n.h2,{id:"component",children:"Component"}),"\n",(0,s.jsxs)(n.p,{children:["One of the best features of Textwire is the ability to use components. You can create a directory ",(0,s.jsx)(n.code,{children:"components"})," in your templates and put all your components there. Then you can use the ",(0,s.jsx)(n.code,{children:"@component"})," directive to include a component in your template. Let's see a simple example of a component:"]}),"\n",(0,s.jsx)(n.h3,{id:"example-of-a-component",children:"Example of a component"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="components/post-card.tw.html"',children:'<div class="post">\n    <h1>{{ post.title }}</h1>\n    <p>{{ post.content }}</p>\n</div>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"example-of-using-a-template",children:"Example of using a template"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="home.tw.html"',children:'<div class="posts">\n    @each(post in posts)\n        @component("components/post-card", { post })\n    @end\n</div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The first argument of the ",(0,s.jsx)(n.code,{children:"@component"})," directive is a path to the component file relative to the ",(0,s.jsx)(n.code,{children:"TemplateDir"})," parameter that you set in the config."]}),"\n",(0,s.jsxs)(n.p,{children:["The second optional argument is a ",(0,s.jsx)(n.a,{href:"/docs/v2/language-elements/literals#object-literals",children:"Textwire object"})," that you want to pass to the component. Here is another example of using a component with a second argument:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="home.tw.html"',children:'<ul>\n    @each(book in books)\n        @component("parts/book", { completed: book.completed })\n    @end\n</ul>\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can also use slots in components to pass content to the component. Read about slots in the next section."}),"\n",(0,s.jsx)(n.h2,{id:"component-slots",children:"Component slots"}),"\n",(0,s.jsx)(n.p,{children:"Component slots is a very common feature in most template languages and frameworks like Vue.js or Laravel Blade. Textwire has named and default slots that you can use to pass content to a component."}),"\n",(0,s.jsxs)(n.p,{children:["There are 2 types of slots in Textwire, default and named slots. To pass and define a default slot you use ",(0,s.jsx)(n.code,{children:"@slot"})," directive. To pass and define a named slot you use ",(0,s.jsx)(n.code,{children:'@slot("some-name")'})," directive. Let's see an example of using slots in a component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="components/book.tw.html"',children:"<div class=\"book\">\n    @slot\n\n    <h1>{{ book.title }}</h1>\n    <p>{{ book.description }}</p>\n\n    @slot('footer')\n</div>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can now use ",(0,s.jsx)(n.code,{children:"book.tw.html"})," component in our Textwire files like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="home.tw.html"',children:'@each(book in books)\n    @component("components/book", { book })\n        @slot\n            <img src="{{ book.image }}" alt="{{ book.title }}">\n        @end\n\n        @slot(\'footer\')\n            <small>published by {{ book.author }}</small>\n            <button>Read more</button>\n        @end\n    @end\n@end\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this example we use default and named slots in a single component. You can use as many slots as you want in a single component as long as names are unique."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);