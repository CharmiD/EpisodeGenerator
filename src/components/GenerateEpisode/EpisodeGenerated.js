import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./EpisodeGenerated.css";

import BackIcon from "../UI/Icons/BackIcon";
import SHOW_DATA from "../../MockData";

function EpisodeGenerated() {
  const navigate = useNavigate();
  const [randomEpisode, setRandomEpisode] = useState({
    episodeSeason: null,
    episodeNum: null,
    episodeName: null,
    episodeDate: null,
    episodeRanking: null,
    episodeDescription: null,
  });

  // get the selected show and season
  const currentShow = useParams().show;
  const selectedSeason = useParams().season;

  // get data for selected show
  const currentShowData = SHOW_DATA.filter(
    (show) => show.slug === currentShow
  )[0];
  const currentShowEpisodes = currentShowData.episodes;

  // set initial random episode
  useEffect(() => {
    generateRandomEpisode();
  }, []);

  // generate random episode based on season selected
  const generateRandomEpisode = () => {
    if (selectedSeason === "all") {
      setRandomEpisode(
        currentShowEpisodes[
          Math.floor(Math.random() * currentShowEpisodes.length)
        ]
      );
    } else {
      const filteredEpisodeData = currentShowEpisodes.filter(
        (episode) => episode.episodeSeason === Number(selectedSeason)
      );
      setRandomEpisode(
        filteredEpisodeData[
          Math.floor(Math.random() * filteredEpisodeData.length)
        ]
      );
    }
  };

  // When back button is clicked
  const handleBackClicked = () => {
    navigate("/show/" + currentShow);
  };

  // When Generate Episode button is clicked
  const handleGenerateAgain = () => {
    generateRandomEpisode();
  };

  return (
    <div className="episode-generated-container">
      <div className="back-icon" onClick={handleBackClicked}>
        <BackIcon />
      </div>
      <div className="episode-title">
        <span>
          S{randomEpisode.episodeSeason}:E{randomEpisode.episodeNum} -{" "}
          {randomEpisode.episodeName}
        </span>
      </div>
      <div className="show-title">{currentShowData.showName}</div>
      <div className="episode-date">{randomEpisode.episodeDate}</div>
      <div className="episode-ranking">{randomEpisode.episodeRanking}/10</div>
      <div className="episode-description">
        {randomEpisode.episodeDescription}
      </div>
      <div className="generate-again-container">
        <button className="generate-again-button" onClick={handleGenerateAgain}>
          Generate Again
        </button>
      </div>
    </div>
  );
}

export default EpisodeGenerated;
