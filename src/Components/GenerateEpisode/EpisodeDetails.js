import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./EpisodeDetails.css";

import ApiManager from "../../ApiManager/ApiManager";
import RatingIcon from "../../Assets/RatingIcon";
import RedoIcon from "../../Assets/RedoIcon";

function EpisodeDetails() {
  const currentShowId = useParams().showId;
  const selectedSeason = useParams().selectedSeason;
  const [randomEpisode, setRandomEpisode] = useState();
  const [currentShowData, setCurrentShowData] = useState();

  // get episode details based on params
  useEffect(() => {
    ApiManager.getShowDetails(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        setCurrentShowData(response);
        const seasonsData = response.seasons.filter(function (x) {
          return x.season_number !== 0;
        });
        generateRandomEpisode(seasonsData);
      })
      .catch((err) => console.error(err));
  }, []);

  // generate random episode based on season selected
  const generateRandomEpisode = (seasonsData) => {
    var seasonNum;
    var episodeNum;
    if (selectedSeason === "all") {
      seasonNum = Math.floor(Math.random() * seasonsData.length) + 1;
      episodeNum =
        Math.floor(Math.random() * seasonsData[seasonNum - 1].episode_count) +
        1;
    } else {
      seasonNum = Number(selectedSeason);
      episodeNum =
        Math.floor(Math.random() * seasonsData[seasonNum - 1].episode_count) +
        1;
    }
    ApiManager.getEpisodeDetails(currentShowId, seasonNum, episodeNum)
      .then((response) => response.json())
      .then((response) => {
        setRandomEpisode(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="episode-details-container">
      <div
        className="episode-details-redo-icon"
        onClick={() => {
          const seasonsData = currentShowData.seasons.filter(function (x) {
            return x.season_number !== 0;
          });
          generateRandomEpisode(seasonsData);
        }}
      >
        <RedoIcon />
        <p>Regenerate Episode</p>
      </div>
      {randomEpisode ? (
        <>
          <div className="episode-details">
            {randomEpisode.still_path ? (
              <img
                className="episode-details-image"
                src={`https://image.tmdb.org/t/p/w500${randomEpisode.still_path}`}
                alt={randomEpisode.name}
              ></img>
            ) : (
              <div className="episode-details-image-error">
                <p>No Image Available</p>
              </div>
            )}
            <div className="episode-details-text">
              <div className="episode-details-name">
                S{randomEpisode.season_number}:E{randomEpisode.episode_number} -{" "}
                {randomEpisode.name}
              </div>
              <div className="episode-details-show-name">
                {currentShowData.name}
              </div>
              <div className="episode-details-rating-section">
                <div className="episode-details-rating-icon">
                  <RatingIcon />
                </div>
                <div className="episode-details-rating">
                  {randomEpisode.vote_average
                    ? randomEpisode.vote_average.toFixed(1)
                    : ""}
                  /10
                </div>
              </div>
              <div className="episdoe-details-overview">
                {randomEpisode.overview}
              </div>
              <div className="episode-details-section">
                <div className="episode-details-label">Release Date:</div>
                <div className="episode-details-value">
                  {new Date(randomEpisode.air_date).toLocaleDateString(
                    "en-us",
                    {
                      timeZone: "UTC",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </div>
              </div>
              <div className="episode-details-section">
                <div className="episode-details-label">Runtime:</div>
                <div className="episode-details-value">
                  {randomEpisode.runtime} mins
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EpisodeDetails;
