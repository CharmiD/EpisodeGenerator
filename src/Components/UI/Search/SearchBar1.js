import { useState } from "react";

import "./SearchBar1.css";

import SearchIconWhite from "../../../Assets/SearchIconWhite";

function SearchBar1({ handleSearch }) {
  const [searchValue, setSearch] = useState("");

  return (
    <div className="search">
      <input
        value={searchValue}
        className="search-input"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onKeyDown={(event) => {
          if (searchValue !== "" && event.key === "Enter") {
            handleSearch(searchValue);
          }
        }}
      ></input>
      <div
        className="search-icon"
        onClick={() => {
          if (searchValue !== "") {
            handleSearch(searchValue);
          }
        }}
      >
        <SearchIconWhite></SearchIconWhite>
      </div>
    </div>
  );
}

export default SearchBar1;
