import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorList= actors.map(function(actor){
    return (
      <div key={actor.name} className='actor'>
        <p>Name: {actor.name}</p>
        <ul>
          {actor.movies.map(
            (movie)=> <li key={movie}>{movie}</li>)
          }
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
