import React, { useState } from "react";
import HogList from "./Hoglist";

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui eight wide column">
      <div className="ui card">
        <div 
          className="image" 
          onClick={() => setShowDetails(prevState => !prevState)}
        >
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3>{hog.name}</h3>
        </div>
        {showDetails && <HogList hog={hog} />}
      </div>
    </div>
  );
}

export default HogTile;