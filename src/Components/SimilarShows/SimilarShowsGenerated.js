import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import "./SimilarShowsGenerated.css";

import ApiManager from "../../ApiManager/ApiManager";
import ShowPoster from "../UI/Show Poster/ShowPoster";

function SimilarShowsGenerated() {
  const navigate = useNavigate();
  const currentShowId = useParams().showId;
  const [currentShowData, setCurrentShowData] = useState();
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    ApiManager.getShowDetails(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        setCurrentShowData(response);
        ApiManager.getSimilarShows(currentShowId)
          .then((response) => response.json())
          .then((response) => {
            setShowData(response.results);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  const handleShowSelected = (show) => {
    navigate("/show/" + show.id);
  };

  return (
    <>
      {currentShowData ? (
        <div className="similiar-shows-generated-container">
          <div className="similar-shows-generated-label">
            Shows similar to "{currentShowData.name}"
          </div>
          <Grid
            className="similiar-shows-data-grid"
            container
            spacing={{ xs: 2, md: 3 }}
          >
            {showData.map((show, index) => (
              <Grid item xs={6} sm={4} md={12 / 7} key={index}>
                <ShowPoster show={show} handleClick={handleShowSelected} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default SimilarShowsGenerated;