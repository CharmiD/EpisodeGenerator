import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SimilarShowsGenerated.css";

import SHOW_DATA from "../../MockData";
import ShowsCarousel from "../UI/ShowsCarousel/ShowsCarousel";

function SimilarShowsGenerated() {
  const [similarShows, setSimilarShows] = useState(SHOW_DATA);

  const currentShow = useParams().show;
  const currentShowData = SHOW_DATA.filter(
    (show) => show.slug === currentShow
  )[0];

  // set similar shows
  useEffect(() => {
    const similarShowsFiltered = SHOW_DATA.filter(
      (show) => show.showGenre === currentShowData.showGenre
    );
    setSimilarShows([...similarShowsFiltered]);
  }, []);

  return (
    <div className="similar-shows-generated-container">
      <div className="label">Similar Shows To...</div>
      <div className="show-name">{currentShowData.showName}</div>
      <ShowsCarousel shows={similarShows} />
    </div>
  );
}

export default SimilarShowsGenerated;
