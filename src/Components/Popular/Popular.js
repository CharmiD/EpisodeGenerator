import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import "./Popular.css";

import SearchBar2 from "../UI/Search/SearchBar2";
import ShowPoster from "../UI/Show Poster/ShowPoster";
import ApiManager from "../../ApiManager/ApiManager";

function Popular() {
  const navigate = useNavigate();
  const [showData, setShowData] = useState([]);
  const [page, setPage] = useState(1);

  // get initial popular shows
  useEffect(() => {
    ApiManager.getTrendingShows(page)
      .then((response) => response.json())
      .then((response) => {
        setShowData((oldData) => [...oldData, ...response.results]);

        if (page < 10) {
          setPage(page + 1);
        }
      })
      .catch((err) => console.error(err));
  }, [page]);

  // navigate to search on search input
  const handleSearch = (searchValue) => {
    navigate("/search/" + searchValue);
  };

  // navigate to show details on show poster click
  const handleShowSelected = (show) => {
    navigate("/show/" + show.id);
  };

  return (
    <div className="popular-container">
      <div className="popular-search-container">
        <SearchBar2 handleSearch={handleSearch} />
      </div>
      <div className="popular-label">Popular Shows</div>
      <div className="popular-show-data-grid-container">
        <Grid
          className="popular-show-data-grid"
          container
          spacing={{ xs: 2, md: 3 }}
        >
          {showData.map((show, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <ShowPoster show={show} handleClick={handleShowSelected} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Popular;
