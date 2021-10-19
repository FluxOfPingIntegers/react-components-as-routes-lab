import React from 'react';
import { actors } from '../data';

const actorCard = ( {name, movies} ) => {
  return (
    <div className="actorCard">
      <h2>Name: {name}</h2>
      <h3>Movies:</h3>
      <ul>
        {movies.map( (movie) => {return <li>{movie}</li>})}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => actorCard(actor))}
    </div>
  );
};

export default Actors;
