import { useState, useEffect } from "react";

import "./GenerateEpisodeHome.css";

import ShowsCarousel from "../UI/ShowsCarousel/ShowsCarousel";
import Sort from "../UI/Sort/Sort";
import Search from "../UI/Search/Search";
import ApiManager from "../../ApiManager/ApiManager";

function GenerateEpisodeHome() {
  let [page, setPage] = useState(1);
  const [showsData, setShowsData] = useState([]);
  const [sortSelected, setSortSelected] = useState(4);

  // api call to fetch first 10 pages of US shows
  useEffect(() => {
    fetchDefaultShows();
  }, [page]);

  //filter data according to search input
  const handleSearchChange = (searchValue) => {
    if (searchValue !== "") {
      ApiManager.getSearchedShows(searchValue)
        .then((response) => response.json())
        .then((response) => {
          console.log(searchValue);
          console.log(response);
          setShowsData([...response.results]);
        })
        .catch((err) => console.error(err));
    } else {
      setShowsData([]);
      setPage(1);
      fetchDefaultShows();
    }
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
    const sorted = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
    return sorted;
  };

  //function to sort data name non alphabetically
  const sortNonAlphabetically = (data) => {
    const sorted = [...data].sort((a, b) => (a.name < b.name ? 1 : -1));
    return sorted;
  };

  //function to sort data increasingly by year
  const sortYearIncreasing = (data) => {
    const sorted = [...data].sort((a, b) =>
      a.first_air_date > b.first_air_date ? 1 : -1
    );
    return sorted;
  };

  //function to sort data decreasingly by year
  const sortYearDecreasing = (data) => {
    const sorted = [...data].sort((a, b) =>
      a.first_air_date < b.first_air_date ? 1 : -1
    );
    return sorted;
  };

  //default api call for first 10 pages of US shows
  const fetchDefaultShows = () => {
    ApiManager.getPopularShows(page)
      .then((response) => response.json())
      .then((response) => {
        setShowsData((prev) => [...prev, ...response.results]);
        if (page <= 10) {
          setPage(page + 1);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="generate-episode-home-container">
      <div className="sort-search-container">
        <Sort handleSortChange={handleSortChange} />
        <Search handleSearchChange={handleSearchChange} />
      </div>
      <ShowsCarousel shows={showsData} type="show" />
    </div>
  );
}

export default GenerateEpisodeHome;
