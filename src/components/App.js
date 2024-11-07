import React, { useState, useEffect } from "react";
import hogsData from "../porkers_data"; // Adjust the path if necessary
import HogTile from "./HogTile";
import Filter from "./filter";
import Sort from "./sort";
import AddHogForm from "./MyForm";

function App() {
  const [hogs, setHogs] = useState([]); // Initialize with an empty array
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(null);

  // Set hogs data when the component mounts
  useEffect(() => {
    setHogs(hogsData);
  }, []);

  // Filter hogs by greased status
  const filteredHogs = hogs.filter(hog => !greasedFilter || hog.greased);

  // Sort hogs by name or weight
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortCriteria === "name") return a.name.localeCompare(b.name);
    if (sortCriteria === "weight") return a.weight - b.weight;
    return 0;
  });

  return (
    <div className="App">
      <h1>Hogs</h1>
      <AddHogForm/>
      <Filter setGreasedFilter={setGreasedFilter} />
      <Sort setSortCriteria={setSortCriteria} />
      <div className="ui grid container">
        {sortedHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;