const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//this route gets the genres for a specific movie
router.get('/:id', (req, res) => {
  let id = req.params.id;
  // Add query to get all genres
  const query = `SELECT  "genres"."name" AS "genres"
	FROM "genres"
    JOIN "movies_genres"
      ON "genres"."id" = "movies_genres"."genre_id"
    JOIN "movies"
      ON "movies"."id" = "movies_genres"."movie_id"
    WHERE "movies"."id" = ${id}`;

  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500);
    });
});

module.exports = router;
