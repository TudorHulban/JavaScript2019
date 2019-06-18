package main

import (
	"database/sql"
	_ "fmt"
	"log"

	_ "github.com/lib/pq" //https://godoc.org/github.com/lib/pq
)

type Content struct {
	ID          int
	Description string
}

func HowManyPosts(pDBHandler *sql.DB) (int, error) {
	var howMany int

	err := pDBHandler.QueryRow(`select max(id) from posts`).Scan(&howMany) //would actually read the sequence last val as ID is serial type, verify with explain select ...
	if err != nil {
		log.Fatal("HowManyPosts.Query:", err)
	}

	return howMany, err
}

func QueryPosts(pDBHandler *sql.DB, pPage int64, pItemsPerPage int64) ([]Content, error) {

	idStart := (pPage-1)*pItemsPerPage + 1
	idEnd := pPage * pItemsPerPage

	rows, err := pDBHandler.Query(`select id, description from posts where id between $1 and $2`, idStart, idEnd)
	if err != nil {
		log.Fatal("QueryPosts.Query:", err)
	}

	defer rows.Close()

	var rContent []Content
	var id int
	var desc string

	for rows.Next() {

		rows.Scan(&id, &desc)
		//fmt.Println("rows: ", id, desc)
		var buf Content

		buf.ID = id
		buf.Description = desc

		rContent = append(rContent, buf)
	}

	return rContent, err
}
