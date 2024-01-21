import { useNavigate } from "react-router-dom";

import "./Home.css";

import SearchBar1 from "../UI/Search/SearchBar1";

function Home() {
  const navigate = useNavigate();

  const handleSearch = (searchValue) => {
    navigate("/search/" + searchValue);
  }


  return (
    <div className="home-container">
      <div className="info">
        <div className="info-header">WHAT TO WATCH?</div>
        <div className="info-label">
          Pick a show to generate a random episode!
        </div>
      </div>
      <SearchBar1 handleSearch={handleSearch}/>
    </div>
  );
}

export default Home;