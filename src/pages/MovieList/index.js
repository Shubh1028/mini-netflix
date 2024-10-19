import "./styles.css";
import MovieCard from "../../components/MovieCard";
import Loading from "../../components/Loader";
import useMovies from "../../hooks/useMovies";

const MovieList = () => {
  const { data: movies, loading } = useMovies("s=game");

  if (loading) return <Loading />;

  return (
    <main className="container">
      <header>
        <h1>MOVIES LIST</h1>
      </header>
      <section className="movie-list-wrapper">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </section>
    </main>
  );
};

export default MovieList;
