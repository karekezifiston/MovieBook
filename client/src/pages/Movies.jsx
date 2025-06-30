import React from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import './Movies.css';
import BlurCicle from '../components/BlurCicle';

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="movies-container">

      <BlurCicle top='150px' left='0px'/>
      <BlurCicle bottom='50px' right='50px'/>
      <h1 className="movies-title">Now Showing</h1>
      <div className="movies-grid">
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className='zero-movies'>
      <h2 className='text-3xl font-bold text-center'>No movies available</h2>
    </div>
  );
};

export default Movies;
