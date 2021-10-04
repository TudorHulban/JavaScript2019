package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type Authorization struct {
	SessionID           int64 `json:"sessionid"`
	ValidityMiliSeconds int64 `json:"validity"`
}

type Authentication struct {
	Email    string `form:"email"`
	Password string `form:"password"`
}

func main() {
	app := fiber.New()

	app.Static("/", "./public")
	app.Post("/login", login)

	log.Fatal(app.Listen(":3000"))
}

func login(c *fiber.Ctx) error {
	var a Authentication

	if err := c.BodyParser(&a); err != nil {
		return err
	}

	log.Println(a)

	r := Authorization{
		SessionID:           1234567890,
		ValidityMiliSeconds: 100 * 1000,
	}

	return c.JSON(r)
}
