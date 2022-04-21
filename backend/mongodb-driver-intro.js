const { MongoClient, ObjectId } = require("mongodb")

const dotenv = require("dotenv")
dotenv.config()

const url = process.env.DB_URL
const client = new MongoClient(url)

const databaseName = "super-users-db-intro"

client
.connect()
.then((connectedClient) => {
    const db = connectedClient.db(databaseName)
    const movies = db.collection("movies")
    
    /* return movies.updateOne(
        { _id: new ObjectId("625fd6627c423043489e003b") },
        { $push: { genre: "Romance" }}
    ) 
    return movies.updateOne(
        { _id: new ObjectId("625fd6627c423043489e003b") },
        { $pull: { genre: "Romance" }}
    )*/
    return movies.updateOne(
        { _id: new ObjectId("625fd6627c423043489e003b") },
        { $pull: { genre: "Romance" }}
    ) 
}).then((movies) => {
    console.log(movies)

    client.close() // close connection
})