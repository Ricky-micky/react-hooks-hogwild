
import React from "react";

function Filter({ setGreasedFilter }) {
  return (
    <div>
      <label>Greased Pigs Only</label>
      <input
        type="checkbox"
        onChange={(e) => setGreasedFilter(e.target.checked)}
      />
    </div>
  );
}

export default Filter;