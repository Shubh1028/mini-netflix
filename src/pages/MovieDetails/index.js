import { useParams } from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import Loading from "../../components/Loader";
import "./styles.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data: movie, loading } = useMovies(`i=${movieId}`);

  if (loading) return <Loading />;

  return (
    <article className="movie-detail">
      {movie ? (
        <div className="movie-detail-wrapper">
          <div className="movie-image-wrapper">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie-content-wrapper">
            <h1>{movie.Title}</h1>
            <p>
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Type:</strong> {movie.Type}
            </p>
            <p>
              <strong>Rating:</strong> {movie.imdbRating}
            </p>
          </div>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </article>
  );
};

export default MovieDetails;
