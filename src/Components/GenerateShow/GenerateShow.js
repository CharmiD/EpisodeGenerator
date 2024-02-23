import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./GenerateShow.css";

import Button from "../UI/Button/Button";
import ApiManager from "../../ApiManager/ApiManager";

function GenerateShow() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [showError, setShowError] = useState(false);

  // api call to get genres available
  useEffect(() => {
    ApiManager.getGenres()
      .then((response) => response.json())
      .then((response) => {
        const genresData = response.genres.map((x) => ({
          id: x.id,
          name: x.name,
          selected: 0,
        }));
        setGenres([...genresData]);
      })
      .catch((err) => console.error(err));
  }, []);

  // Assign which genre is selected
  const handleGenreChange = (index) => {
    var currentGenres = [...genres];

    if (currentGenres[index].selected === 1) {
      currentGenres[index].selected = 0;
    } else {
      currentGenres[index].selected = 1;
    }
    setGenres([...currentGenres]);
  };

  // Handle generate show button click
  const handleGenerateShow = () => {
    var selectedGenres = "";
    var generatedShows = [];
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].selected === 1) {
        selectedGenres += genres[i].id + ",";
      }
    }
    ApiManager.getShowsByGenres(selectedGenres)
      .then((response) => response.json())
      .then((response) => {
        generatedShows = response.results;
        if (generatedShows.length !== 0) {
          const show =
            generatedShows.length === 1
              ? generatedShows[0]
              : generatedShows[
                  Math.floor(Math.random() * generatedShows.length - 1)
                ];
          navigate("/show/" + show.id);
        } else {
          setShowError(true);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="generate-show-container">
      <div className="generate-show-info">
        Pick genres to generate specific shows!
      </div>
      <div className="generate-show-grid">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {genres.map((genre, index) => (
            <Grid item xs={6} sm={4} md={4} key={genre.id}>
              <button
                key={genre.id}
                className={`genre-button ${
                  genre.selected === 1 ? "active" : ""
                }`}
                onClick={() => handleGenreChange(index)}
              >
                {genre.name}
              </button>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={"generate-show-button " + (!showError ? "no-error" : "")} >
        <Button handleClick={handleGenerateShow} text="Generate Show"></Button>
      </div>
      {showError ? (
        <div className="generate-show-error">
          No shows found with selected generes!
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default GenerateShow;
