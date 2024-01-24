import React from "react";

import "./ShowPoster.css";

function ShowPoster({ show, handleClick }) {
  return (
    <div className="show-poster-container">
      <div className="show-poster-background" onClick={() => handleClick(show)}>
        <img
          className="show-poster-image"
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={show.name}
        ></img>
        <div className="show-poster-info">
            <div className="show-poster-year">
                {show.first_air_date.split("-")[0]}
            </div>
        </div>
        <div className="show-poster-name">
            {show.name}
        </div>
      </div>
    </div>
  );
}

export default ShowPoster;