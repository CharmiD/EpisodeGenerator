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
  const [sortSelected, setSortSelected] = useState(1);

  //filter data according to search input
  const handleSearchChange = (searchValue) => {
    var filtered = [...SHOW_DATA].filter((x) =>
      x.showName.toLowerCase().includes(searchValue.toLowerCase())
    );

    //sort the filtered data
    if (sortSelected === 1) {
      filtered = sortAlphabetically(filtered);
    } else if (sortSelected === 2) {
      filtered = sortNonAlphabetically(filtered);
    } else if (sortSelected === 3) {
      filtered = sortYearIncreasing(filtered);
    } else if (sortSelected === 4) {
      filtered = sortYearDecreasing(filtered);
    }
    setShowsData([...filtered]);
  };

  //sort data according to sort option selected
  const handleSortChange = (sortValue) => {
    setSortSelected(sortValue);

    var sorted = [];
    if (sortValue === 1) {
      sorted = sortAlphabetically(showsData);
    } else if (sortValue === 2) {
      sorted = sortNonAlphabetically(showsData);
    } else if (sortValue === 3) {
      sorted = sortYearIncreasing(showsData);
    } else if (sortValue === 4) {
      sorted = sortYearDecreasing(showsData);
    }
    setShowsData([...sorted]);
  };

  //function to sort data name alphabetically
  const sortAlphabetically = (data) => {
    const sorted = [...data].sort((a, b) =>
      a.showName > b.showName ? 1 : -1
    );
    return(sorted)
    //setShowsData([...sorted]);
  };

  //function to sort data name non alphabetically
  const sortNonAlphabetically = (data) => {
    const sorted = [...data].sort((a, b) =>
      a.showName < b.showName ? 1 : -1
    );
    return(sorted)
  };

  //function to sort data increasingly by year
  const sortYearIncreasing = (data) => {
    const sorted = [...data].sort((a, b) => a.showYear - b.showYear);
    return(sorted)
  };

  //function to sort data decreasingly by year
  const sortYearDecreasing = (data) => {
    const sorted = [...data].sort((a, b) => b.showYear - a.showYear);
    return(sorted)
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
