import React, { useEffect } from "react";
import "./App.css";

function App() {
  
  useEffect(() => {
      // Using fetch to fetch the api from flask server it will be redirected to proxy
      fetch("/data").then((res) =>
          res.json().then((data) => {
            console.log(data);
          })
      );
  }, []);

  return (
      <div className="App">
          <header className="App-header">
              <h1>Recipe Saver</h1>

          </header>
      </div>
  );
}

export default App;