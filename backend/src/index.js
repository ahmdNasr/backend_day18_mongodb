const cors = require("cors")
const express = require("express")

const { findAllUsers, findAllMovies, findMovieById } = require("./db-access/db-access")

const PORT = process.env.PORT || 9000
const app = express()

app.use(cors())
app.use((req, _, next) => {
    console.log("new request –", req.method, req.url)
    next()
})

app.get("/users", (_, res) => {
    findAllUsers()
    .then(allUsers => res.json(allUsers))
    .catch(() => res.json({ err: "Error finding users..." }))
})

app.get("/movies", (_, res) => {
    findAllMovies()
    .then(allMovies => res.json(allMovies))
    .catch(() => res.json({ err: "Error finding movies..." }))
})

app.get("/movies/:id", (req, res) => {
    const id = req.params.id
    findMovieById(id)
    .then(movie => res.json(movie))
    .catch(() => res.json({ err: "Error finding movie with id " + id + "..." }))
})

app.listen(PORT, () => console.log("Server listening on Port", PORT))