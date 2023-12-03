import "./PopularShowsHome.css";

import SHOW_DATA from "../../MockData";
import ShowsCarousel from "../UI/ShowsCarousel/ShowsCarousel";

function PopularShowsHome() {
  return (
    <div className="popular-shows-home-container">
      <ShowsCarousel shows={SHOW_DATA} />
    </div>
  );
}

export default PopularShowsHome;
