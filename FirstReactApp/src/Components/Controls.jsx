import { useState } from "react";

function Controls({
  onFilter,
  onReverse,
  onSort,
  searchCriteria = "Filter String",
}) {
  const [searchString, setSerachString] = useState("Panthera");

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onFilter(searchString);
        setSerachString("");
      }}
    >
      <label htmlFor="inputSearchString">{searchCriteria}</label>
      <input
        placeholder="Search String"
        id="inputSearchString"
        type="text"
        value={searchString}
        onChange={(evt) => {
          setSerachString(evt.target.value);
        }}
      />
      <button onClick={onFilter}>{searchString ? "Filter" : "Reset"}</button>
      <div className="button-box">
        <button type="button" onClick={onSort}>
          Sort Alphabetically
        </button>
        <button type="button" onClick={onReverse}>
          Reverse Order
        </button>
      </div>
    </form>
  );
}

export default Controls;
