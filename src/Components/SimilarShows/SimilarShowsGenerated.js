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
  const [page, setPage] = useState(0);

  // get selected show data, then populate similar shows
  useEffect(() => {
    ApiManager.getShowDetails(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        setCurrentShowData(response);
        setPage(1);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (page !== 0) {
      ApiManager.getSimilarShows(currentShowId, page)
        .then((response) => response.json())
        .then((response) => {
          setShowData((oldData) => [...oldData, ...response.results]);

          if (page < 10) {
            setPage(page + 1);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [page]);

  // navigate to show details on show select
  const handleShowSelected = (show) => {
    navigate("/show/" + show.id, {
      state: {
        generateShow: false,
      }
    });
  };

  return (
    <>
      {currentShowData ? (
        <div className="similiar-shows-generated-container">
          <div className="similar-shows-generated-label">
            Shows similar to "{currentShowData.name}"
          </div>
          <div className="similar-shows-data-grid-container">
            <Grid
              className="similiar-shows-data-grid"
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
          {showData.length === 0 ? (
          <div className="info-message">No Similar Shows Found</div>
        ) : (
          <></>
        )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default SimilarShowsGenerated;
