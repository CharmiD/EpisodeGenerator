import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./GenerateEpisode.css";

import ApiManager from "../../ApiManager/ApiManager";

function GenerateEpisode() {
  const navigate = useNavigate();

  const currentShowId = useParams().show;

  const [currentShowData, setCurrentShowData] = useState();
  const [seasonsSelected, setSeasonsSelected] = useState();
  const [allSelected, setAllSelected] = useState(true);

  // api call to show details
  useEffect(() => {
    ApiManager.getShowDetails(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        setCurrentShowData(response);
        setSeasonsSelected(Array(response.seasons.length - 1).fill(1));
      })
      .catch((err) => console.error(err));
  }, []);

  // Assign which seasons is selected
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
      currentSeasons[value] = 1;
    }
    setSeasonsSelected([...currentSeasons]);
  };

  // When Generate Episode button is clicked
  const handleGenerateEpisode = () => {
    if (allSelected) {
      navigate("/episode-generated/" + currentShowData.id + "/all");
    } else {
      navigate(
        "/episode-generated/" +
          currentShowData.id +
          "/" +
          (seasonsSelected.indexOf(1) + 1)
      );
    }
  };

  return (
    <div className="generate-episode-container">
      {currentShowData ? (
        <span>
          <div className="show-title">
            <span>{currentShowData.name}</span>
          </div>
          <div className="show-details">
            <div className="show-year">
              {currentShowData.first_air_date.split("-")[0]}
            </div>
            <div className="show-genre">
              {currentShowData.genres.map((x) => x.name).join(", ")}
            </div>
            <div className="show-cast">{currentShowData.aggregate_credits.cast[0].name}</div>
          </div>
          <div className="show-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${currentShowData.poster_path}`}
              alt={currentShowData.name}
            ></img>
          </div>
          <div className="show-description">{currentShowData.overview}</div>
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
                {seasonsSelected.map((seasonSelected, index) => (
                  <button
                    key={index}
                    className={`seasons-button ${
                      seasonSelected && !allSelected ? "active" : ""
                    }`}
                    onClick={() => handleSeasonChange(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="generate-button-container">
            <button className="generate-button" onClick={handleGenerateEpisode}>
              Generate Episode
            </button>
          </div>
        </span>
      ) : null}
    </div>
  );
}

export default GenerateEpisode;
