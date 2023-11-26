import { useParams, useNavigate } from "react-router-dom";

import "./EpisodeGenerated.css";

import BackIcon from "../UI/Icons/BackIcon";

function EpisodeGenerated() {
  const navigate = useNavigate();

  const currentShow = useParams().slug;

  // When back button is clicked
  const handleBackClicked = () => {
    navigate("/show/" + currentShow);
  };

  // When Generate Episode button is clicked
  const handleGenerateAgain = () => {
    console.log("Generate Again")
  }

  return (
    <div className="episode-generated-container">
      <div className="back-icon" onClick={handleBackClicked}>
        <BackIcon />
      </div>
      <div className="episode-title">
        <span>S3:E2 - Caballo sin Nombre</span>
      </div>
      <div className="show-title">Breaking Bad</div>
      <div className="episode-date">January 1, 2010</div>
      <div className="episode-ranking">8.3</div>
      <div className="episode-description">
        Walter, Jr. is having a rough time accepting his parents' separation.
        Jesse buys his old house from his parents. Meanwhile, two mysterious men
        have come into town looking for Walt.
      </div>
      <div className="generate-again-container">
        <button className="generate-again-button" onClick={handleGenerateAgain}>Generate Again</button>
      </div>
    </div>
  );
}

export default EpisodeGenerated;
