import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

export default function HomepageFeatures(): React.ReactElement {
    const homeTw = `@use ('layouts/base')

@insert ('title', 'Book Store')

@insert ('content')
    <h1 class="text-2xl font-bold">Welcome to the Book Store</h1>
    <p class="opacity-70 mb-5">See the list of our books</p>

    @if (books.len() > 0)
        <div>
            @each (book in books)
                @component ('components/book', { book })
            @end
        </div>
    @else
        <p>No books found</p>
    @end
@end`

    const bookTw = `<div class="flex justify-between items-center gap-3 p-5 odd:bg-gray-100 rounded-md">
    <div class="flex items-center gap-5">
        <img
            src="{{ book.image }}"
            alt="{{ book.title }}"
            class="w-20 rounded-md shadow-md"
        >

        <div>
            <h3 class="text-xl">{{ book.title }}</h3>
            <p class="opacity-70">{{ book.author }}</p>
        </div>
    </div>

    <button class="bg-green-600 text-white px-5 py-2 rounded-md shadow-md cursor-pointer">
        Order
    </button>
</div>`

    const layoutTw = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <title>@reserve ('title') | Books Store</title>
</head>
<body class="max-w-[900px] my-0 mx-auto p-4">
    <main>
        @reserve ('content')
    </main>
</body>
</html>`

    const structure = `templates/
├── layouts/
│   └── base.tw
│       
├── components/
│   └── book.tw
│       
├── views/
│   └── home.tw
│
└── error-page.tw`

    const goCode = `package main

import (
    "fmt"
    "net/http"

    "github.com/textwire/textwire/v2"
    "github.com/textwire/textwire/v2/config"
)

var tpl *textwire.Template

func main() {
    var err error
    tpl, err = textwire.NewTemplate(&config.Config{
        DebugMode:   true,
    })

    if err != nil {
        fmt.Println(err)
    }

    http.HandleFunc("/", homeHandler)

    if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Println(err)
    }
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    vars := map[string]any{
        "books": []struct{ Title, Author, Image string }{
            {"The Great Gatsby", "F. Scott Fitzgerald", "https://placehold.co/400"},
            {"To Kill a Mockingbird", "Harper Lee", "https://placehold.co/400"},
            {"1984", "George Orwell", "https://placehold.co/400"},
            {"Pride and Prejudice", "Jane Austen", "https://placehold.co/400"},
            {"The Catcher in the Rye", "J.D. Salinger", "https://placehold.co/400"},
        },
    }

    err := tpl.Response(w, "views/home", vars)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
    }
}`

    return (
        <section className="home-section introduction">
            <div className="container">
                <Tabs>
                    <TabItem value="home" label="Home page" default>
                        <CodeBlock language="textwire" showLineNumbers={true} title="templates/home.tw">
                            {homeTw}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="book" label="Component">
                        <CodeBlock language="textwire" showLineNumbers={true} title="templates/components/book.tw">
                            {bookTw}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="base" label="Layout">
                        <CodeBlock language="textwire" showLineNumbers={true} title="templates/layouts/base.tw">
                            {layoutTw}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="structure" label="Structure">
                        <CodeBlock>
                            {structure}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="gocode" label="Go Code">
                        <CodeBlock language="go" showLineNumbers={true} title="cmd/books/main.go">
                            {goCode}
                        </CodeBlock>
                    </TabItem>
                </Tabs>
            </div>
        </section>
    )
}
