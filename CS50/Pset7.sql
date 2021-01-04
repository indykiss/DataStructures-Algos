

-- Basic SQL refreshing 
-- DB: movies.db, refer to cs50 for more details 


-- 1. Query to list the titles of all movies in 2008 
SELECT title FROM movies WHERE year = 2008


-- 2. Query to determine the birth year of Emma Stone
SELECT birth FROM people WHERE name = "Emma Stone"


-- 3. List titles of all movies w/ a release date on or after 2018, 
-- in alphabetical order.
SELECT title FROM movies WHERE year >= 2018 ORDER BY title ASC


-- 4. Determine the number of movies with an IMDb rating of 10.0.
SELECT title FROM movies WHERE rating = 10
INNER JOIN ratings ON movies.id = ratings.movie_id


-- IDE stopped working so below queries haven't been checked 


-- 5. List titles and release years of all Harry Potter movies, 
-- in chronological order.
SELECT titles, year FROM movies 
WHERE title LIKE "harry potter %"
ORDER BY year DESC


-- 6. Determine the average rating of all movies released in 2012
SELECT AVG(rating) FROM movies 
WHERE year = 2012
INNER JOIN movies.id = ratings.movie_id


-- 7. List all movies released in 2010 and their ratings, 
-- in descending order by rating
-- For movies w/ same rating, order alphabetically by title.
SELECT movies.title, ratings.rating FROM movies 
WHERE year = 2010 
INNER JOIN ratings ON movies.id = ratings.movie_id
ORDER BY ratings.rating DESC, movies.titles 