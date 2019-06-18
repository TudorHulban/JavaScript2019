package main

import (
	"encoding/json"
	"fmt"

	"net/http"
)

const port = 8080

type httpResponseConfig struct {
	UseCredentials             bool   `json:"usecredentials"`
	UseCaptcha                 bool   `json:"usecaptcha"`
	AuthorizationRoute         string `json:"authroute"`
	AuthorizationRouteProtocol string `json:"proto"`
}

type httpResponseAuthorization struct {
	Authorized bool `json:"authorized"`
}

func main() {

	http.HandleFunc("/config-login", RouteConfigLogin)
	http.HandleFunc("/auth", RouteAuthorization)
	http.HandleFunc("/", RouteGeneric)
	http.ListenAndServe((fmt.Sprintf(":%v", port)), nil)
}

func RouteConfigLogin(w http.ResponseWriter, r *http.Request) {

	response := httpResponseConfig{UseCredentials: true, UseCaptcha: false, AuthorizationRoute: "auth", AuthorizationRouteProtocol: "post"}
	json2stream := json.NewEncoder(w)
	json2stream.Encode(&response)
}

func RouteGeneric(w http.ResponseWriter, r *http.Request) {

	fmt.Println("RouteGeneric", r)
	http.ServeFile(w, r, r.URL.Path[1:])
}

func RouteAuthorization(w http.ResponseWriter, r *http.Request) {

	fmt.Println("RouteAuthorization", r)

	if r.Method == "POST" {

		credentialsUser := r.FormValue("uname")
		credentialsPassword := r.FormValue("upassword")
		var response httpResponseAuthorization

		fmt.Println("credentialsUser", credentialsUser, "credentialsPassword", credentialsPassword)
		if (credentialsUser == "x@x.com") && (credentialsPassword == "xxxx") {
			fmt.Println("authenticated")
			response = httpResponseAuthorization{Authorized: true}
		} else {
			fmt.Println("not authenticated")
			response = httpResponseAuthorization{Authorized: false}
		}

		json2stream := json.NewEncoder(w)
		json2stream.Encode(&response)
	}
}
