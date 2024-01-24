import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import "./Popular.css";

import SearchBar2 from "../UI/Search/SearchBar2";
import ShowPoster from "../UI/Show Poster/ShowPoster";
import ApiManager from "../../ApiManager/ApiManager";

function Popular() {
  const navigate = useNavigate();
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    ApiManager.getPopularShows(1)
      .then((response) => response.json())
      .then((response) => {
        setShowData(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (searchValue) => {
    navigate("/search/" + searchValue);
  };

  const handleShowSelected = (show) => {
    navigate("/show/" + show.id);
  }

  return (
    <div className="popular-container">
      <div className="popular-search-container">
        <SearchBar2 handleSearch={handleSearch} />
      </div>
      <div className="popular-label">
        Popular Shows
      </div>
      <Grid className="popular-show-data-grid" container spacing={{ xs: 2, md: 3 }}>
        {showData.map((show, index) => (
          <Grid item xs={6} sm={4} md={12 / 7} key={index}>
            <ShowPoster show={show} handleClick={handleShowSelected} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Popular;
