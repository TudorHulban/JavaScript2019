package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Static("/", "./public")
	app.Post("/login", login)

	log.Fatal(app.Listen(":3000"))
}

func login(c *fiber.Ctx) error {
	log.Println("body:", string(c.Body()))

	return c.Send(c.Body())
}
