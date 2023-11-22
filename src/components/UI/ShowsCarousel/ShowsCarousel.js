import Carousel from "react-material-ui-carousel";

import "./ShowsCarousel.css";

function ShowsCarousel(props) {

  var showsData = props.shows

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

  return (
    <Carousel
      className="carousel-container"
      navButtonsAlwaysVisible={true}
      autoPlay={false}
      indicators={false}
    >
      {showDataPages.map((page, i) => (
        <div className="shows-page">
          <div className="shows-group">
            {page[0].map((show, i) => (
              <div className="show-poster-container">
                <img src={show.showImg}></img>
                <div className="show-poster-name">{show.showName}</div>
                <div className="show-poster-year">{show.showYear}</div>
              </div>
            ))}
          </div>
          {page[1] ? (
            <div className="shows-group">
              {page[1].map((show, i) => (
                <div className="show-poster-container">
                  <img src={show.showImg}></img>
                  <div className="show-poster-name">{show.showName}</div>
                  <div className="show-poster-year">{show.showYear}</div>
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
