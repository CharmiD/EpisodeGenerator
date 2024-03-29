import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import "./SearchResults.css";

import SearchBar2 from "./SearchBar2";
import ShowPoster from "../Show Poster/ShowPoster";
import ApiManager from "../../../ApiManager/ApiManager";

function SearchResults() {
  const navigate = useNavigate();
  const currentSearchValue = useParams().value;
  const searchType = useSelector((state) => state.search.searchType);
  const [showData, setShowData] = useState([]);

  // populate shows based on search value in params
  useEffect(() => {
    ApiManager.getSearchedShows(currentSearchValue)
      .then((response) => response.json())
      .then((response) => {
        setShowData(response.results);
      })
      .catch((err) => console.error(err));
  }, [currentSearchValue]);

  // re-navigate to search results on new search input
  const handleSearch = (searchValue) => {
    navigate("/search/" + searchValue);
  };

  // navigate based on search type
  const handleShowSelected = (show) => {
    if (searchType === "generate-episode") {
      navigate("/show/" + show.id, {
        state: {
          generateShow: false,
        }
      });
    } else if (searchType === "similar-shows") {
      navigate("/similar-shows/" + show.id);
    }
  };

  return (
    <>
      <div className="search-results-container">
        <div className="search-container">
          <SearchBar2 handleSearch={handleSearch} />
        </div>
        <div className="search-label">
          Search results for "{currentSearchValue}"
        </div>
        <div className="show-data-grid-container">
          <Grid className="show-data-grid" container spacing={{ xs: 2, md: 3 }}>
            {showData.map((show, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <ShowPoster show={show} handleClick={handleShowSelected} />
              </Grid>
            ))}
          </Grid>
        </div>
        {showData.length === 0 ? (
          <div className="info-message">No Search Results Found</div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default SearchResults;
