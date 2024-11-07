
import React, { useState } from 'react';

function AddHogForm({ onAddNewHog }) {
  const [hogName, setHogName] = useState('');
  const [hogImage, setHogImage] = useState('');
  const [hogWeight, setHogWeight] = useState('');
  const [medalAchieved, setMedalAchieved] = useState('');

  const handleHogSubmission = (event) => {
    event.preventDefault();
    const newHog = {
      name: hogName,
      image: hogImage,
      weight: parseFloat(hogWeight),
      greased: false,
      'highest medal achieved': medalAchieved,
    };
    onAddNewHog(newHog); // Call the prop function to add the new hog
    resetForm(); // Reset the form fields after submission
  };

  const resetForm = () => {
    setHogName('');
    setHogImage('');
    setHogWeight('');
    setMedalAchieved('');
  };

  return (
    <form onSubmit={handleHogSubmission}>
      <input
        type="text"
        placeholder="Hog Name"
        value={hogName}
        onChange={(e) => setHogName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={hogImage}
        onChange={(e) => setHogImage(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Weight"
        value={hogWeight}
        onChange={(e) => setHogWeight(e.target.value)}
        required
      />
      <select
        value={medalAchieved}
        onChange={(e) => setMedalAchieved(e.target.value)}
        required
      >
        <option value="">Select Medal Achieved</option>
        <option value="bronze">Bronze</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
      </select>
      <button type="submit">Submit Hog</button>
    </form>
  );
}

export default AddHogForm;

