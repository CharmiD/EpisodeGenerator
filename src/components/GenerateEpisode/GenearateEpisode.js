import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./GenerateEpisode.css";

import SHOW_DATA from "../../MockData";
import BackIcon from "../UI/Icons/BackIcon";

function GenerateEpisode() {
  const navigate = useNavigate();

  const currentShow =  useParams().show;
  const currentShowData = SHOW_DATA.filter((show) => show.slug === currentShow)[0];

  const [seasonsSelected, setSeasonsSelected] = useState(Array(currentShowData.showSeasonsNum).fill(1));
  const [allSelected, setAllSelected] = useState(true);

  // Assign which seasons are selected
  const handleSeasonChange = (value) => {
    var currentSeasons = [...seasonsSelected];

    if (value === "All") {
      setAllSelected(true);
      currentSeasons = currentSeasons.map((x) => {
        return 1;
      });
    } else {
      setAllSelected(false);
      currentSeasons = currentSeasons.map((x) => {
        return 0;
      });
      currentSeasons[value - 1] = 1;
    }
    setSeasonsSelected([...currentSeasons]);
  };

  // When back button is clicked
  const handleBackClicked = () => {
    navigate("/");
  };

  // When Generate Episode button is clicked
  const handleGenerateEpisode = () => {
    if (allSelected){
      navigate('/episode-generated/' + currentShowData.slug + "/all");
    } else { 
      navigate('/episode-generated/' + currentShowData.slug + "/" + (seasonsSelected.indexOf(1) + 1));
    }
  }

  return (
    <div className="generate-episode-container">
      <div className="back-icon" onClick={handleBackClicked}>
        <BackIcon />
      </div>
      <div className="show-title">
        <span>{currentShowData.showName}</span>
      </div>
      <div className="show-details">
        <div className="show-year">{currentShowData.showYear}</div>
        <div className="show-genre">{currentShowData.showGenre}</div>
        <div className="show-cast">{currentShowData.showCast}</div>
      </div>
      <div className="show-poster">
        <img src={currentShowData.showImg}></img>
      </div>
      <div className="show-description">
        {currentShowData.showDescription}
      </div>
      <div className="seasons-pickers">
        <div className="seasons-pickers-container">
          <div className="seasons-label">Seasons: </div>
          <div className="seasons-button-container">
            <button
              className={`seasons-button ${allSelected ? "active" : ""}`}
              onClick={() => handleSeasonChange("All")}
            >
              All
            </button>
            {seasonsSelected.map((seasonSelected, i) => (
              <button
                key={i}
                className={`seasons-button ${
                  seasonSelected && !allSelected ? "active" : ""
                }`}
                onClick={() => handleSeasonChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="generate-button-container">
        <button className="generate-button" onClick={handleGenerateEpisode}>Generate Episode</button>
      </div>
    </div>
  );
}

export default GenerateEpisode;