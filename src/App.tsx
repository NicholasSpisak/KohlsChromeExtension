import React, { useState } from 'react';
import './App.css'; // Import custom CSS styles

const App = () => {
  const [web_id, setWebId] = useState('');
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleWebIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWebId(event.target.value);
  };

  const handleApiCall = () => {
    const apiUrl = `https://ocektojzh9.execute-api.us-east-2.amazonaws.com/Prod/kohls/product?web_id=${web_id}`;

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('API call failed');
      })
      .then((data) => {
        setApiResponse(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setApiResponse(null);
      });
  };

  return (
    <div className="app">
      <h1>Kohls Chrome Extension</h1>
      <div className="input-container">
        <input type="text" value={web_id} onChange={handleWebIdChange} placeholder="Enter WebID" />
        <button onClick={handleApiCall}>Run</button>
      </div>

      {apiResponse && (
        <div className="api-response">
          <h2>API Response:</h2>
          <p>Product Name: {apiResponse.product_name}</p>
          <p>Sale Price: {apiResponse.sale_price}</p>
          <p>Regular Price: {apiResponse.regular_price}</p>
          <p>Brand: {apiResponse.brand}</p>
          <p>Category: {apiResponse.category}</p>
          <p>Color: {apiResponse.color}</p>
          <p>Size: {apiResponse.size}</p>
          <p>Availability: {apiResponse.availability}</p>
          <p>Max Available: {apiResponse.item_max_available}</p>
          {/* Add additional fields as needed */}
        </div>
      )}

      {error && <p className="error">Error: {error}</p>}
    </div>
  );
};

export default App;
