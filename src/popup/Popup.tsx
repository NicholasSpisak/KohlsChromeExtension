import React, { useState } from 'react';
import axios from 'axios';

const Popup = () => {
  const [upc, setUpc] = useState('');

  const handleUpcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpc(event.target.value);
  };

  const handleApiCall = () => {
    const apiUrl = `https://bqke5kdb94.execute-api.us-east-2.amazonaws.com/Prod/kohls/product?upc=${upc}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Process the API response data
        console.log('API response:', response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error('API call error:', error);
      });
  };

  return (
    <div>
      <h1>Kohls Chrome Extension</h1>
      <input type="text" value={upc} onChange={handleUpcChange} />
      <button onClick={handleApiCall}>Run API Call</button>
    </div>
  );
};

export default Popup;
