import { useState } from "react";

import "./Search.css";

import SearchBar from "material-ui-search-bar";

function Search(props) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event)
    props.handleSearchChange(event);
  };


  return (
    <div className="search">
      <SearchBar
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
