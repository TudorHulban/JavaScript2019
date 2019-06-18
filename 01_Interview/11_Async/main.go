package main

import (
	"net/http"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.HideBanner = true

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	}))

	//public routes
	e.Static("/", "../../public")
	e.POST("/login", handleLoginReq)
	e.GET("/t", handlePublicRoutes)
	e.GET("/j", handlePublicJSON)

	//restricted routes
	r := e.Group("/a")
	r.Use(middleware.JWT([]byte("secret")))
	r.GET("", handleRestrictedRoutes)

	e.Logger.Fatal(e.Start(":3000"))
}

func handlePublicRoutes(c echo.Context) error {
	return c.String(http.StatusOK, "Public Route")
}

func handlePublicJSON(c echo.Context) error {
	var j = map[string]string{"a": "b"}
	return c.JSON(http.StatusOK, j)
}

func handleRestrictedRoutes(c echo.Context) error {

	user := c.Get("user").(*jwt.Token)
	//fmt.Println("user: ", user)
	claims := user.Claims.(jwt.MapClaims)

	name := claims["name"].(string)
	//return c.String(http.StatusOK, "Welcome "+name+"!")
	var j = map[string]string{"name": name}
	return c.JSON(http.StatusOK, j)
}

func handleLoginReq(c echo.Context) error {
	u := c.FormValue("username")
	p := c.FormValue("password")

	v, err := ValidateCredentials(u, p)
	if err != nil {
		return echo.ErrInternalServerError
	}

	if v.ID == -1 {
		return echo.ErrUnauthorized
	}

	token, err := createToken(v.FirstName+" "+v.LastName, v.IsAdmin, 3600)
	return c.JSON(http.StatusOK, token)
}

func createToken(pFullName string, pIsAdmin bool, pTimeInterval int) (map[string]string, error) {
	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["name"] = pFullName
	claims["admin"] = strconv.FormatBool(pIsAdmin)
	claims["exp"] = time.Now().Add(time.Second * time.Duration(pTimeInterval)).Unix()

	j, err := token.SignedString([]byte("secret"))
	if err != nil {
		return nil, err
	}

	return map[string]string{"token": j}, nil
}

// UserData is structure to inject into HTTP
type UserData struct {
	ID         int      `json:"id"`
	FirstName  string   `json:"firstname"`
	LastName   string   `json:"lastname"`
	AllowedIPs []string `json:"IPs"`
	IsAdmin    bool     `json:"isadmin"`
}

// ValidateCredentials validates credentials against store
func ValidateCredentials(pUser, pPassword string) (*UserData, error) {
	var u UserData
	u.FirstName = "John"
	u.LastName = "Smith"
	return &u, nil
}
