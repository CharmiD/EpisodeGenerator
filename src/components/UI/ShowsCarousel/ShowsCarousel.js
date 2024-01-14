import { useNavigate } from "react-router-dom";

import "./ShowsCarousel.css";

import Carousel from "react-material-ui-carousel";

function ShowsCarousel(props) {
  const navigate = useNavigate();
  var showsData = props.shows;

  //Split shows into groups of 5
  var showDataGrouped = [];
  const chunkSize = 5;
  for (let i = 0; i < showsData.length; i += chunkSize) {
    const chunk = showsData.slice(i, i + chunkSize);
    showDataGrouped.push(chunk);
  }

  //Put 2 groups of 5 into 1 page
  var showDataPages = [];
  const pageChunk = 2;
  for (let i = 0; i < showDataGrouped.length; i += pageChunk) {
    const chunk = showDataGrouped.slice(i, i + pageChunk);
    showDataPages.push(chunk);
  }

  const showClicked = (slug) => {
    if (props.type === "show") {
      navigate("/show/" + slug);
    } else if (props.type === "similar") {
      navigate("/similar-shows/" + slug);
    }
  };

  return (
    <Carousel
      className="carousel-container"
      navButtonsAlwaysVisible={true}
      autoPlay={false}
      indicators={false}
    >
      {showDataPages.map((page, i) => (
        <div key={1} className="shows-page">
          <div className="shows-group">
            {page[0].map((show, i) => (
              <div
                key={show.id}
                className="show-poster-container"
                onClick={() => showClicked(show.id)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
                ></img>
                <div className="show-poster-name">{show.name}</div>
                <div className="show-poster-year">
                  {show.first_air_date.split("-")[0]}
                </div>
              </div>
            ))}
          </div>
          {page[1] ? (
            <div key={2} className="shows-group">
              {page[1].map((show, i) => (
                <div
                  key={show.id}
                  className="show-poster-container"
                  onClick={() => showClicked(show.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name}
                  ></img>
                  <div className="show-poster-name">{show.name}</div>
                  <div className="show-poster-year">
                    {show.first_air_date.split("-")[0]}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </Carousel>
  );
}

export default ShowsCarousel;
