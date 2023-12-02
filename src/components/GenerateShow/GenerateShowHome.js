import { useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./GenerateShowHome.css";
import GENRES_DATA from "../../data/Genres";
import SHOW_DATA from "../../MockData";

function GenerateShowHome() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState(GENRES_DATA);

  // Assign which genre is selected
  const handleGenreChange = (value) => {
    var currentGenres = [...genres];

    currentGenres = currentGenres.map((x) => {
      return {
        ...x,
        selected: 0,
      };
    });
    currentGenres[value].selected = 1;

    setGenres([...currentGenres]);
  };

  // Handle generate show button click
  const handleGenerateShow = () => {
    const selectedGenre =
      genres[genres.findIndex((x) => x.selected === 1)].name;
    const show = GenerateShow(selectedGenre);
    navigate("/show/" + show.slug);
  };

  // Generate random show based on genre selected
  const GenerateShow = (selectedGenre) => {
    const shows = SHOW_DATA.filter((show) =>
      show.showGenre.includes(selectedGenre)
    );
    const randomShow = shows[Math.floor(Math.random() * shows.length)];
    return randomShow;
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
          <Grid item xs={2} sm={4} md={4} key={index}>
            <button
              key={index}
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
