import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const MovieCard = ({ movie }) => {
  return (
    <article className="movie-card">
      <Link to={`/movie/details/${movie.imdbID}`}>
        <img
          src={movie.Poster}
          alt={movie.Title}
        />
      </Link>
    </article>
  );
};

export default MovieCard;