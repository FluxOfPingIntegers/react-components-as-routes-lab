import React from 'react';
import { movies } from '../data';

const movieCard = ( {title, time, genres} ) => {
  return (
    <div className="movieCard">
      <h2>Title: {title}</h2>
      <h3>Time: {time}</h3>
      <p>Genres:</p>
      <ul>
        {genres.map( (genre) => {return <li>{genre}</li>})}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div className="Movies">
      <h1>Movies Page</h1>
      {movies.map(movie => movieCard(movie))}
    </div>
  );
};

export default Movies;
