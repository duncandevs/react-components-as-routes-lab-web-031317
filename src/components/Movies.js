import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map(function(movie){
    return (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time} </p>
        <ul>
          {movie.genres.map(function(genre){
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
