import { useState } from "react";

import "./Search.css";

function Search(props) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    props.handleSearchChange(event.target.value);
  };

  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Search..."
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Search;
