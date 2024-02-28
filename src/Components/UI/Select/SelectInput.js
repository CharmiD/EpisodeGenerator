import "./SelectInput.css";

import Select from "react-select";

function SelectInput({ options, value, setValue }) {
  var selectOptions = [{value: "all", label: "All"}]

  for(let i = 1; i <= options; i++){
    const option = {
      value: i,
      label: "Season " + i
    }
    selectOptions.push(option);
  };

  return (
    <div className="select-input">
      <Select
        defaultValue={value}
        onChange={setValue}
        options={selectOptions}
        menuPlacement="top"
        placeholder="Select Season"
        isSearchable={false}
        className="select-class"
      />
    </div>
  );
}

export default SelectInput;
