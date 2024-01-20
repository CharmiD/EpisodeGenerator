import "./GenerateEpisodeHome.css";

import SearchBar1 from "../UI/Search/SearchBar1";

function GenerateEpisodeHome() {

  const handleSearch = (searchValue) => {
    console.log(searchValue);
  }


  return (
    <div className="generate-episode-home-container">
      <div className="info">
        <div className="info-header">WHAT TO WATCH?</div>
        <div className="info-label">
          Pick a show to generate a random episode!
        </div>
      </div>
      <SearchBar1 handleSearch={handleSearch}></SearchBar1>
    </div>
  );
}

export default GenerateEpisodeHome;