import { useState } from "react";

import "./SearchBar2.css";

import SearchIconPurple from "../../../Assets/SeachIconPurple";

function SearchBar2({ handleSearch }) {
  const [searchValue, setSearch] = useState("");

  return (
    <div className="search-2">
      <input
        value={searchValue}
        className="search-input-2"
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
        className="search-icon-2"
        onClick={() => {
          if (searchValue !== "") {
            handleSearch(searchValue);
          }
        }}
      >
        <SearchIconPurple />
      </div>
    </div>
  );
}

export default SearchBar2;
