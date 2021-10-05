package main

import (
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
)

type Authorization struct {
	SessionID           string `json:"sessionid"`
	ValidityMiliSeconds int64  `json:"validity"`
}

type Authentication struct {
	Email    string `form:"email"`
	Password string `form:"password"`
}

var sessionID = "1234567890"

func main() {
	app := fiber.New()

	app.Static("/", "./public")
	app.Post("/login", login)
	app.Get("/restricted", checkSessionID)
	app.Get("/restricted/:sessionID", admin)
	app.Get("/renew/:sessionID", renewSessionID)

	log.Fatal(app.Listen(":3000"))
}

func login(c *fiber.Ctx) error {
	var a Authentication

	if err := c.BodyParser(&a); err != nil {
		return err
	}

	go log.Println(a)

	r := Authorization{
		SessionID:           sessionID,
		ValidityMiliSeconds: 10 * 1000,
	}

	return c.JSON(r)
}

func checkSessionID(c *fiber.Ctx) error {
	// JS to check local storage.
	// if still valid session ID to redirect.
	// else redirect to login.

	return c.SendFile("./public/sessionid.html")
}

func admin(c *fiber.Ctx) error {
	go log.Println("Session ID:", c.Params("sessionID"))

	return c.SendFile("./public/authorized.html")
}

func renewSessionID(c *fiber.Ctx) error {
	if strings.HasPrefix(c.Params("sessionID"), sessionID) {
		return c.JSON(Authorization{
			SessionID:           sessionID + "-" + strconv.Itoa(int(time.Now().Unix())),
			ValidityMiliSeconds: 10 * 1000,
		})
	}

	return c.SendStatus(http.StatusUnauthorized)
}
