import { useState } from "react";

import SearchIcon from "../Icons/SearchIcon";
import CrossIcon from "../Icons/CrossIcon";

import "./Search.css";

function Search(props) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    props.handleSearchChange(event.target.value);
  };

  const handleCancel = (event) => {
    setSearch("");
    props.handleSearchChange("");
  }

  return (
    <div className="search">
      <input
        value={search}
        className="search-input"
        placeholder="Search..."
        onChange={handleChange}
      ></input>
      <div className="search-icon" onClick={handleCancel}>
        {(search === "" ? <SearchIcon /> : <CrossIcon/>)}
      </div>
    </div>
  );
}

export default Search;
