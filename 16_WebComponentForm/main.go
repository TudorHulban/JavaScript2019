package main

import (
	"fmt"

	"net/http"
)

const port = 8080

func main() {
	http.HandleFunc("/form", RtForm)
	http.HandleFunc("/", RtGeneric)
	http.ListenAndServe((fmt.Sprintf(":%v", port)), nil)
}

func RtGeneric(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, r.URL.Path[1:])
}

func RtForm(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()
	if err != nil {
		panic(err)
	}

	fmt.Println("form data:", r.PostFormValue("params"))
}
