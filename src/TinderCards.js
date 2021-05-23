import React, { useState } from "react";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://www.lookoutpro.com/wp-content/uploads/2018/05/Elon-Musk.jpg",
    },
    {
      name: "Jeff Bezoz",
      url: "https://www.lookoutpro.com/wp-content/uploads/2018/05/Elon-Musk.jpg",
    },
  ]);
// arrow fucntion passed in mapping function
  return (
    <div className="tinderCards">
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
    </div>
  );
}

export default TinderCards;
