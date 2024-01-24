import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import "./SearchResults.css";

import SearchBar2 from "./SearchBar2";
import ShowPoster from "../Show Poster/ShowPoster";
import ApiManager from "../../../ApiManager/ApiManager";

function SearchResults() {
  const navigate = useNavigate();
  const currentSearchValue = useParams().value;
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    ApiManager.getSearchedShows(currentSearchValue)
      .then((response) => response.json())
      .then((response) => {
        setShowData(response.results);
      })
      .catch((err) => console.error(err));
  }, [currentSearchValue]);

  const handleSearch = (searchValue) => {
    navigate("/search/" + searchValue);
  };

  const handleShowSelected = (show) => {
    navigate("/show/" + show.id);
  }

  return (
    <>
      <div className="search-results-container">
        <div className="search-container">
          <SearchBar2 handleSearch={handleSearch} />
        </div>
        <div className="search-label">
          Search results for "{currentSearchValue}"
        </div>
        <Grid
          className="show-data-grid"
          container
          spacing={{ xs: 2, md: 3 }}
        >
          {showData.map((show, index) => (
            <Grid item xs={6} sm={4} md={12/7} key={index} >
                <ShowPoster show={show} handleClick={handleShowSelected}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default SearchResults;
