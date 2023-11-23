import {useState} from "react";

import "./Sort.css";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SortIcon from "../Icons/SortIcon";

function Sort(props) {
  const [sort, setSort] = useState(1);

  const handleChange = (event) => {
    setSort(event.target.value)
    props.handleSortChange(event.target.value);
  };

  return (
    <div className="sort">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={sort}
          onChange={handleChange}
          label="Age"
          IconComponent={SortIcon}
        >
          <MenuItem value={1}>Name (A - Z)</MenuItem>
          <MenuItem value={2}>Name (Z - A)</MenuItem>
          <MenuItem value={3}>Year (Increasing)</MenuItem>
          <MenuItem value={4}>Year (Decreasing)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sort;
