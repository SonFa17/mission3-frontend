import React from 'react'
import './card.css'

export default function Card(props) {
    const { movie } = props;
    return (
      <div className="result-card">
        <figure className="image-size">
          <img
            src={movie.Poster}
            alt= {movie.Title}
          />
        </figure>
        <h4>{movie.Title}</h4>
        <span><b>Year:</b>{movie.Year}</span>
      </div>
    );
  }
