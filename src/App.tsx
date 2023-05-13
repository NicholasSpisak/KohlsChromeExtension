import React, { useState, ChangeEvent } from 'react';

const App = () => {
  const [upc, setUpc] = useState('');

  const handleUpcChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpc(event.target.value);
  };

  const handleApiCall = () => {
    // Make the API call using the UPC value
    console.log('Making API call with UPC:', upc);
  };

  return (
    <div>
      <h1>Kohls Chrome Extension</h1>
      <input type="text" value={upc} onChange={handleUpcChange} />
      <button onClick={handleApiCall}>Run API Call</button>
    </div>
  );
};

export default App;
