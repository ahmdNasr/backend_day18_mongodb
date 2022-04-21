import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/movies")
        .then(response => response.json())
        .then(moviesData => setMovies(moviesData))
    }, [])

    return ( 
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map(movie =>
                    <li key={movie._id}>
                        <Link to={"/movie/" + movie._id}>{movie.title} ({movie.duration})</Link>
                    </li>
                )}
            </ul>
        </div>
     );
}
 
export default MovieList;