import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";

import "./ShowDetails.css";

import ApiManager from "../../ApiManager/ApiManager";
import Button from "../UI/Button/Button";
import SelectInput from "../UI/Select/SelectInput";
import RedoIcon from "../../Assets/RedoIcon";
import RatingIcon from "../../Assets/RatingIcon";

function ShowDetails() {
  const navigate = useNavigate();
  const [currentShowId, setCurrentShowId] = useState(useParams().showId);
  const [currentShowData, setCurrentShowData] = useState();
  const [selectedSeason, setSelectedSeason] = useState("");
  const [showError, setShowError] = useState(false);
  const { state } = useLocation();
  const selectedGenres = useSelector((state) => state.genres.selectedGenres);

  // get show details based on params
  useEffect(() => {
    ApiManager.getShowDetails(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        response.aggregate_credits.cast.sort((a, b) => a.order - b.order);
        setCurrentShowData(response);
      })
      .catch((err) => console.error(err));
  }, [currentShowId]);

  // reset error message on season select
  useEffect(() => {
    setShowError(false);
  }, [selectedSeason]);

  // navigate to episode details on button click
  const handleGenerateEpisode = () => {
    if (selectedSeason === "") {
      setShowError(true);
    } else {
      navigate("/episode/" + currentShowId + "/" + selectedSeason.value);
    }
  };

  // handle regenerate show button clic
  const handleRegenerateShow = () => {
    var generatedShows = [];
    ApiManager.getShowsByGenres(selectedGenres)
      .then((response) => response.json())
      .then((response) => {
        generatedShows = response.results;
        const show =
          generatedShows.length === 1
            ? generatedShows[0]
            : generatedShows[
                Math.floor(Math.random() * generatedShows.length - 1)
              ];
        console.log(show);
        setCurrentShowId(show.id);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="show-details-container">
      {state.generateShow && selectedGenres !== "" ? (
        <div className="show-details-redo-icon" onClick={handleRegenerateShow}>
          <RedoIcon />
          <p>Regenerate Show</p>
        </div>
      ) : (
        <></>
      )}

      {currentShowData ? (
        <>
          <div className="show-details">
            <div className="show=details-image-container">
              {currentShowData.poster_path ? (
                <img
                  className="show-details-image"
                  src={`https://image.tmdb.org/t/p/w500${currentShowData.poster_path}`}
                  alt={currentShowData.name}
                ></img>
              ) : (
                <div className="show-details-image-error">
                  <p>No Image Available</p>
                </div>
              )}
              <div className="show-deatils-tagline">{currentShowData.tagline}</div>
            </div>
            <div className="show-details-text">
              <div className="show-details-name">{currentShowData.name}</div>
              <div className="show-details-visuals">
                <div className="show-details-status">
                  {currentShowData.status}
                </div>
                <StarRatings
                  rating={
                    currentShowData.vote_average
                      ? (currentShowData.vote_average/2)
                      : 0
                  }
                  starDimension="25px"
                  starSpacing="2px"
                  starRatedColor="#8E6EB5"
                  starEmptyColor="white"
                />
                <div className="show-details-rating">
                  {currentShowData.vote_average
                    ? (currentShowData.vote_average/2).toFixed(1)
                    : 0}
                </div>
                <img
                  className="show-details-network-logo"
                  src={`https://image.tmdb.org/t/p/w500${
                    currentShowData.networks[
                      currentShowData.networks.length - 1
                    ].logo_path
                  }`}
                  alt={
                    currentShowData.networks[
                      currentShowData.networks.length - 1
                    ].name
                  }
                ></img>
              </div>
              <div className="show-details-overview">
                {currentShowData.overview}
              </div>
              <div className="show-details-section">
                <div className="show-details-label">Release Date:</div>
                <div className="show-details-value">
                  {new Date(currentShowData.first_air_date).toLocaleDateString(
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
              <div className="show-details-section">
                <div className="show-details-label">Genres:</div>
                <div className="show-details-value">
                  {currentShowData.genres.map((x) => x.name).join(", ")}
                </div>
              </div>
              <div className="show-details-section">
                <div className="show-details-label">Cast:</div>
                <div className="show-details-value">
                  {currentShowData.aggregate_credits.cast
                    .slice(0, 5)
                    .map((x) => x.name)
                    .join(", ")}
                </div>
              </div>
              <div className="show-details-section">
                <div className="show-details-label">Seasons:</div>
                <div className="show-details-value">
                  {currentShowData.number_of_seasons}
                </div>
              </div>
            </div>
          </div>
          <div className="generate-episode-container">
            <div className="generate-episode-inputs">
              <div className="generate-episode-select">
                <SelectInput
                  options={currentShowData.number_of_seasons}
                  value={selectedSeason}
                  setValue={setSelectedSeason}
                ></SelectInput>
              </div>
              <div className="generate-episode-button">
                <Button
                  handleClick={handleGenerateEpisode}
                  text="Generate Episode"
                ></Button>
              </div>
            </div>
            {showError ? (
              <div className="generate-episode-error">
                Please Select a Season!
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ShowDetails;
