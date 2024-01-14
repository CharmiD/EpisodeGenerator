import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./GenerateShowHome.css";

import ApiManager from "../../ApiManager/ApiManager";

function GenerateShowHome() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);

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
        const show =
          generatedShows.length === 1
            ? generatedShows[0]
            : generatedShows[
                Math.floor(Math.random() * generatedShows.length - 1)
              ];
        navigate("/show/" + show.id);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="generate-show-home-container">
      <Grid
        className="genres-buttons-grid"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {genres.map((genre, index) => (
          <Grid item xs={2} sm={4} md={4} key={genre.id}>
            <button
              key={genre.id}
              className={`genre-button ${genre.selected === 1 ? "active" : ""}`}
              onClick={() => handleGenreChange(index)}
            >
              {genre.name}
            </button>
          </Grid>
        ))}
      </Grid>
      <div className="generate-button-container">
        <button className="generate-button" onClick={handleGenerateShow}>
          Generate Show
        </button>
      </div>
    </div>
  );
}

export default GenerateShowHome;
