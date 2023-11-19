import React from "react";

import "./GenerateEpisodeHome.css";

import SHOW_DATA from "../../MockData";
import ShowsCarousel from "../UI/ShowsCarousel/ShowsCarousel";

function GenerateEpisodeHome() {
  return (
    <div className="generate-episode-home-container">
      <div className="shows-carousel-container">
        <ShowsCarousel shows={SHOW_DATA}/>
      </div>
    </div>
  );
}

export default GenerateEpisodeHome;
