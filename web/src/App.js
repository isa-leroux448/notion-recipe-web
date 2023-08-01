import React, { useState } from "react";
import "./App.css";

function App() {
  const [pastedUrl, setPastedUrl] = useState('')
  const [recipeData, setRecipeData] = useState(null);

  const handleInputChange = (e) => {
    setPastedUrl(e.target.value);
  };

  const handleButtonClick = () => {
    sendAPIRequest(pastedUrl)
  };

  function sendAPIRequest(url) {
    console.log(JSON.stringify({ recipe_url: url }))
    // Using fetch to fetch the api from flask server it will be redirected to proxy
    fetch("/data", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe_url: url }),
    })
      .then((res) =>
        res.json().then((data) => {
          setRecipeData(data);
          console.log(data);
        })
      );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notion Recipe Saver</h1>
        <div className="input-container">
          <input
            name="recipeUrl"
            placeholder="Paste a recipe url here"
            value={pastedUrl}
            onChange={handleInputChange}
          />
          <button onClick={handleButtonClick}>Add to Notion</button>
        </div>
        {recipeData && (
          <div className="recipe-container">
            <div className="recipe-info">
              <img src={recipeData.Image} alt="recipe" />
              <h5>{recipeData.Title}</h5>
            </div>
            <p>Added</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;