import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  // const people = []
  //setPeople([people..,'abc', 'nvf']) --> push elements in array in react
  // spread operator, dont override the array content
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs", 
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "Henry Richardson",
      url: "https://bingeddata.s3.amazonaws.com/uploads/2020/12/john-henry-richardson.jpg",
    },
    {
      name: "Bill Gates",
      url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
    },
  ]);
  return (
    <div>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={['up','down']}
        >
          <div
            //inline css; overriding the default css with background image
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
        
          
     ))}
    </div>
  );
}

export default TinderCards;
