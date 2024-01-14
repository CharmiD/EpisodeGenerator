import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SimilarShowsGenerated.css";

import ShowsCarousel from "../UI/ShowsCarousel/ShowsCarousel";
import ApiManager from "../../ApiManager/ApiManager";

function SimilarShowsGenerated() {
  const currentShowId = useParams().show;
  const [currentShowData, setCurrentShowData] = useState();
  const [similarShows, setSimilarShows] = useState([]);

  // set similar shows
  useEffect(() => {
    ApiManager.getSimilarShows(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        setSimilarShows(response.results);
      })
      .catch((err) => console.error(err));

      ApiManager.getShowDetails(currentShowId)
      .then((response) => response.json())
      .then((response) => {
        setCurrentShowData(response)
      })
      .catch((err) => console.error(err));
  }, [])

  return (
    <div className="similar-shows-generated-container">
      <div className="label">Similar Shows To...</div>
      {currentShowData ? (
        <div className="show-name">{currentShowData.name}</div>
      ) : (
        <>/</>
      )}
      <ShowsCarousel shows={similarShows} />
    </div>
  );
}

export default SimilarShowsGenerated;
