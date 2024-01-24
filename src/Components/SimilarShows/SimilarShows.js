import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import "./SimilarShows.css";

import SearchBar1 from "../UI/Search/SearchBar1";
import { setSearchType } from "../../App/SearchSlice";

function SimilarShows() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (searchValue) => {
    dispatch(setSearchType("similar-shows"));
    navigate("/search/" + searchValue);
  };

  return (
    <div className="similar-shows-container">
      <div className="similar-shows-info">
        <div className="similar-shows-info-header">WHAT TO WATCH?</div>
        <div className="similar-shows-info-label">
          Pick a show to generate similar shows!
        </div>
      </div>
      <SearchBar1 handleSearch={handleSearch} />
    </div>
  );
}

export default SimilarShows;
