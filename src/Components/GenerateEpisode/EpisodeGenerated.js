import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./EpisodeGenerated.css";

import ApiManager from "../../ApiManager/ApiManager";

function EpisodeGenerated() {
  const [randomEpisode, setRandomEpisode] = useState();
  const [currentShowData, setCurrentShowData] = useState();

  // get the selected show and season
  const currentShowId = useParams().show;
  const selectedSeason = useParams().season;

  // set initial random episode
  useEffect(() => {
    ApiManager.getShowDetails(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        setCurrentShowData(response);
        console.log(response);
        generateRandomEpisode(response.seasons);
      })
      .catch((err) => console.error(err));
  }, []);

  // generate random episode based on season selected
  const generateRandomEpisode = (seasonsData) => {
    var seasonNum;
    var episodeNum;
    if (selectedSeason === "all") {
      seasonNum = Math.floor(Math.random() * seasonsData.length - 1) + 1;
      episodeNum =
        Math.floor(Math.random() * seasonsData[seasonNum].episode_count) + 1;
    } else {
      seasonNum = Number(selectedSeason);
      episodeNum =
        Math.floor(Math.random() * seasonsData[seasonNum].episode_count) + 1;
    }
    ApiManager.getEpisodeDetails(currentShowId, seasonNum, episodeNum)
      .then((response) => response.json())
      .then((response) => {
        setRandomEpisode(response);
      })
      .catch((err) => console.error(err));
  };

  // When Generate Episode button is clicked
  const handleGenerateAgain = () => {
    generateRandomEpisode(currentShowData.seasons);
  };

  return (
    <div className="episode-generated-container">
      {randomEpisode ? (
        <div>
          <div className="episode-title">
            <span>
              S{randomEpisode.season_number}:E{randomEpisode.episode_number} -{" "}
              {randomEpisode.name}
            </span>
          </div>
          <div className="show-title">{currentShowData.name}</div>
          <div className="episode-date">{randomEpisode.air_date}</div>
          <div className="episode-ranking">
            {randomEpisode.vote_average}/10
          </div>
          <div className="episode-description">
            {randomEpisode.overview}
          </div>
          <div className="generate-again-container">
            <button
              className="generate-again-button"
              onClick={handleGenerateAgain}
            >
              Generate Again
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default EpisodeGenerated;
