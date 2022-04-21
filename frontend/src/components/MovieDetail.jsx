import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        fetch("http://localhost:9000/movies/" + movieId)
        .then(response => response.json())
        .then(movieData => {
            if(!movieData.err) {
                setMovie(movieData)
            }
        })
    }, [movieId])

    console.log(movie)

    if(movie) return (
        <div>
            <h1>{movie.title} – {movie.rate}/10 Stars</h1>
            <h2>Year {movie.year}</h2>
            <h3>Directed by {movie.director}</h3>
            <h3>Duration: {movie.duration}</h3>
            Genre:
            <ul>
                {
                    movie.genre.map((genreItem, index) => <li key={index}>{genreItem}</li>)
                }
            </ul>

            <Link to="/">Go Back</Link>
        </div>
    )
    else return <h1>Movie doesn't exist.</h1>
}
 
export default MovieDetail;