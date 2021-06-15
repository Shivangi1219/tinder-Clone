import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from './firebase';

function TinderCards() {
  // const people = []
  //setPeople([people..,'abc', 'nvf']) --> push elements in array in react
  // spread operator, dont override the array content
  const [people, setPeople] = useState([]);

// Piece of code which runs based on a condition
  useEffect( () => {
// listening to the dataabse for the changes and displays the snapshot accordingly
    database
      .collection("people")
      .onSnapshot((snapshot) => 
        setPeople(snapshot.docs.map( (doc) => doc.data() ))
      );
  },[]);


  return (
    <div>
      <div className="tinderCards__cardsContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              //inline css; overriding the default css with background image
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h4>{person.name}</h4>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
