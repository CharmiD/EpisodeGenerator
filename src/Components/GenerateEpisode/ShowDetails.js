import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./ShowDetails.css";

import ApiManager from "../../ApiManager/ApiManager";
import Button from "../UI/Button/Button";
import SelectInput from "../UI/Select/SelectInput";

function ShowDetails() {
  const navigate = useNavigate();
  const currentShowId = useParams().showId;
  const [currentShowData, setCurrentShowData] = useState();
  const [selectedSeason, setSelectedSeason] = useState("");
  const [showError, setShowError] = useState(false);

  // get show details based on params
  useEffect(() => {
    ApiManager.getShowDetails(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        setCurrentShowData(response);
      })
      .catch((err) => console.error(err));
  }, []);

  // reset error message on season select
  useEffect(() => {
    setShowError(false);
  }, [selectedSeason])

  // navigate to episode details on button click
  const handleGenerateEpisode = () => {
    if (selectedSeason === "") {
      setShowError(true);
    } else {
      navigate("/episode/" + currentShowId + "/" + selectedSeason);
    }
  };

  return (
    <div className="show-details-container">
      {currentShowData ? (
        <>
          <div className="show-details">
            <img
              className="show-details-image"
              src={`https://image.tmdb.org/t/p/w500${currentShowData.poster_path}`}
              alt={currentShowData.name}
            ></img>
            <div className="show-details-text">
              <div className="show-details-name">{currentShowData.name}</div>
              <div className="show-details-status">
                {currentShowData.status}
              </div>
              <div className="show-details-overview">
                {currentShowData.overview}
              </div>
              <div className="show-details-section">
                <div className="show-details-label">Release Date:</div>
                <div className="show-details-value">
                  {currentShowData.first_air_date}
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
                  {currentShowData.aggregate_credits.cast[0].name}
                </div>
              </div>
              <div className="show-details-section">
                <div className="show-details-label">Seasons:</div>
                <div className="show-details-value">
                  {currentShowData.seasons.length - 1}
                </div>
              </div>
            </div>
          </div>
          <div className="generate-episode-container">
            <div className="generate-episode-inputs">
              <div className="generate-episode-select">
                <SelectInput
                  options={currentShowData.seasons.length - 1}
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
