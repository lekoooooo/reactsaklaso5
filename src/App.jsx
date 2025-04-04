import React from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import cardData from "./components/data.js";
import "./global.css";
import "./App.css";

function App() {
  return (
    <div>
      <div className="cardContainer">
        <Header />
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default App;
