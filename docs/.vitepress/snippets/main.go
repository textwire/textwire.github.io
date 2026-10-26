package main

import (
	"fmt"
	"net/http"

	"codeberg.org/textwire/textwire/v5"
	"codeberg.org/textwire/textwire/v5/pkg/fail"
)

var tpl *textwire.Template

func main() {
	var err *fail.Error
	tpl, err = textwire.NewTemplate(nil)
	err.FatalOnError()

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

	tpl.Response(w, "views/home", vars).PrintOnError()
}
