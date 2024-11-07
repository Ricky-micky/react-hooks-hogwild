import React from "react";

function Sort({ setSortCriteria }) {
  return (
    <div>
      <button onClick={() => setSortCriteria("name")}>Sort by Name</button>
      <button onClick={() => setSortCriteria("weight")}>Sort by Weight</button>
    </div>
  );
}

export default Sort;