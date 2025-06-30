import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCicle from '../components/BlurCicle';
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
import timeFormat from '../lib/timeFormat';
import DateSelect from '../components/DateSelect';
import MovieCard from '../components/MovieCard';
import '../components/MovieDetails.css'
import Loading from '../components/Loading';


const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    if(show){
    setShow({
      movie: show,
      dateTime: dummyDateTimeData,
    }); 
    }
   
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="movie-details-wrapper">
      <div className="movie-details-container">
        <img src={show.movie.poster_path} alt="" className="movie-poster" />

        <div className="movie-info">
          <BlurCicle top="-100px" left="-100px" />
          <p className="language">ENGLISH</p>
          <h1 className="movie-title">{show.movie.title}</h1>
          <div className="rating">
            <StarIcon className="star-icon" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className="overview">{show.movie.overview}</p>
          <p className="movie-meta">
            {timeFormat(show.movie.runtime)} •{' '}
            {show.movie.genres.map((genre) => genre.name).join(', ')} •{' '}
            {show.movie.release_date.split('-')[0]}
          </p>

          <div className="movie-actions">
            <button className="trailer-btn">
              <PlayCircleIcon className="icon" />
              Watch Trailer
            </button>
            <a href="#dateSelect" className="buy-btn">
              Buy Tickets
            </a>
            <button className="heart-btn">
              <Heart className="icon" />
            </button>
          </div>
        </div>
      </div>

      <p className="section-title">Movie Cast</p>
      <div className="cast-list-wrapper">
        <div className="cast-list">
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className="cast-card">
              <img src={cast.profile_path} alt="" className="cast-img" />
              <p className="cast-name">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      <DateSelect dateTime={show.dateTime} id={id} />

      <p className="section-title">You May Also Like</p>
      <div className="suggested-movies">
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className="show-more">
        <button className="show-more-btn" onClick={() => {navigate('/movies');scrollTo(0, 0);}}>Show More</button>
      </div>
    </div>
  ) : (
    <Loading/>
  );
};

export default MovieDetails;
