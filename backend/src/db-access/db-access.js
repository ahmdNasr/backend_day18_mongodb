const { ObjectId } = require("mongodb")
const { getDB } = require("./getDB")

function findAllUsers() {
    return getDB().then(db => db.collection("users").find().toArray())
}

function findAllMovies() {
    return getDB().then(db => db.collection("movies").find().toArray())
}

function findMovieById(id) {
    return getDB()
    .then(db => db.collection("movies").findOne({ _id: new ObjectId(id) }))
}

function findMoviesByGenre(genre) {
    return getDB().then(db => db.collection("movies").find({ genre: genre }).toArray())
}

module.exports = {
    findAllUsers,
    findAllMovies,
    findMovieById,
    findMoviesByGenre
}