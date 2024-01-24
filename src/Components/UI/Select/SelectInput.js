import "./SelectInput.css";

function SelectInput({ options, value, setValue }) {
  return (
    <div className="select-input">
      <select name="seasons" id="season-select" defaultValue='default' onChange={(event) => setValue(event.target.value)}>
        <option value="default" disabled>Select Season</option>
        <option value="all">All</option>
        {[...Array(options)].map((x, i) => <option value={i+1} key={i+1}>Season {i+1}</option>)}
      </select>
    </div>
  );
}

export default SelectInput;
