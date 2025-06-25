import React from 'react';
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';
import { StarIcon } from 'lucide-react';
import timeFormat from '../lib/timeFormat';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        alt=""
        className="card-img"
      />

      <p className="movie-title">{movie.title}</p>

      <p className="movie-date">
        {new Date(movie.release_date).getFullYear()} •{' '}
        {movie.genres.slice(0, 2).map((genre) => genre.name).join(' | ')} •{' '}
        {timeFormat(movie.runtime)}
      </p>

      <div className="row-div">
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="buy-btn"
        >
          Buy Tickets
        </button>

        <p className="rate">
          <StarIcon className="rate-icon" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
