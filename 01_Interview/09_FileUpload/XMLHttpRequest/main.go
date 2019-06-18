package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

const theURL = "127.0.0.1:8080"
const version = "0.0.1"

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", homeHandler)
	r.HandleFunc("/upload", uploadHandler)

	log.Println("alive on", theURL)
	http.Handle("/", r)
	http.ListenAndServe(theURL, nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {

	log.Println("home", version, r.URL)
	http.ServeFile(w, r, r.URL.Path[1:])
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("upload", version, r.URL, r.Header)

	if r.Method == "POST" {

		r.ParseMultipartForm(32 << 20) //shift left , equivalent with 30 * 1024 * 1024
		file, handler, err := r.FormFile("submitted")

		if err != nil {
			log.Println("r.FormFile: ", err)
			return
		} else {
			log.Println(handler.Filename)
		}
		defer file.Close()

		fmt.Fprintf(w, "%v", handler.Header)
		f, err := os.OpenFile("./assets/upload/"+handler.Filename, os.O_WRONLY|os.O_CREATE, 0666)
		if err != nil {
			log.Println(err)
			return
		}
		defer f.Close()
		io.Copy(f, file)
	}
}
