
import React from "react";

function HogList({ hog }) {
  return (
    <div className="extra content">
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight} lbs</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Highest Medal: {hog.highest_medal_achieved}</p>
    </div>
  );
}

export default HogList;