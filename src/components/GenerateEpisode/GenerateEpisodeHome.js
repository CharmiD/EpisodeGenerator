import { useState } from "react";

import "./GenerateEpisodeHome.css";

import SHOW_DATA from "../../MockData";
import ShowsCarousel from "../UI/ShowsCarousel/ShowsCarousel";
import Sort from "../UI/Sort/Sort";
import Search from "../UI/Search/Search";

function GenerateEpisodeHome() {
  const [showsData, setShowsData] = useState(
    SHOW_DATA.sort((a, b) => a.showName.localeCompare(b.showName))
  );

  //filter data according to search input
  const handleSearchChange = (searchValue) => {
    const filtered = [...SHOW_DATA].filter((x) =>
      x.showName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setShowsData([...filtered]);
  };

  //sort data according to sort option selected
  const handleSortChange = (sortValue) => {
    if (sortValue === 1) {
      sortAlphabetically();
    } else if (sortValue === 2) {
      sortNonAlphabetically();
    } else if (sortValue === 3) {
      sortYearIncreasing();
    } else if (sortValue === 4) {
      sortYearDecreasing();
    }
  };

  //function to sort data name alphabetically
  const sortAlphabetically = () => {
    const sorted = [...showsData].sort((a, b) =>
      a.showName > b.showName ? 1 : -1
    );
    setShowsData([...sorted]);
  };

  //function to sort data name non alphabetically
  const sortNonAlphabetically = () => {
    const sorted = [...showsData].sort((a, b) =>
      a.showName < b.showName ? 1 : -1
    );
    setShowsData([...sorted]);
  };

  //function to sort data increasingly by year
  const sortYearIncreasing = () => {
    const sorted = [...showsData].sort((a, b) => a.showYear - b.showYear);
    setShowsData([...sorted]);
  };

  //function to sort data decreasingly by year
  const sortYearDecreasing = () => {
    const sorted = [...showsData].sort((a, b) => b.showYear - a.showYear);
    setShowsData([...sorted]);
  };

  return (
    <div className="generate-episode-home-container">
      <div className="sort-search-container">
        <Sort handleSortChange={handleSortChange} />
        <Search handleSearchChange={handleSearchChange} />
      </div>
      <ShowsCarousel shows={showsData} />
    </div>
  );
}

export default GenerateEpisodeHome;
