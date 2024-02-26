import { useState } from "react";

import "./SearchBar1.css";

import SearchIconWhite from "../../../Assets/SearchIconWhite";
import CrossIconGrey from "../../../Assets/CrossIconGrey";

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
      {searchValue !== "" ? (
        <dix className="search-cross" onClick={()=>{setSearch("")}}>
          <CrossIconGrey />
        </dix>
      ) : (
        <></>
      )}
      <div
        className="search-icon"
        onClick={() => {
          if (searchValue !== "") {
            handleSearch(searchValue);
          }
        }}
      >
        <SearchIconWhite />
      </div>
    </div>
  );
}

export default SearchBar1;
