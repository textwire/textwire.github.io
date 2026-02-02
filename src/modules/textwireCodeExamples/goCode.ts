export const goCode = `package main

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
