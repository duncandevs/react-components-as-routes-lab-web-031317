import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorList= directors.map(function(director){
    return (
      <div key={director.name}>
        <p>{director.name}</p>
        <ul>
          {director.movies.map(
            (movie)=> <li key={movie}>{movie}</li>)
          }
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>
  )
}

export default Directors
