import React, { useState } from 'react';

const App = () => {
  const [upc, setUpc] = useState('');
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpc(event.target.value);
  };

  const handleApiCall = () => {
    const apiUrl = `https://bqke5kdb94.execute-api.us-east-2.amazonaws.com/Prod/kohls/product?upc=${upc}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
        setError(null);
      })
      .catch((error) => {
        setError('API call error');
        setApiResponse(null);
      });
  };

  return (
    <div>
      <h1>Kohls Chrome Extension</h1>
      <input type="text" value={upc} onChange={handleUpcChange} />
      <button onClick={handleApiCall}>Run API Call</button>

      {apiResponse && (
        <div>
          <h2>API Response:</h2>
          <p>Product Name: {apiResponse.product_name}</p>
          <p>Brand: {apiResponse.brand}</p>
          <p>Category: {apiResponse.category}</p>
          <p>Color: {apiResponse.color}</p>
          <p>Size: {apiResponse.size}</p>
          <p>Availability: {apiResponse.availability}</p>
          <p>Max Available: {apiResponse.item_max_available}</p>
          {/* Add additional fields as needed */}
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default App;
