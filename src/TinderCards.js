import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Lavya Bhasin",
      url: "https://media.licdn.com/dms/image/D4D03AQH90UW9XnthpA/profile-displayphoto-shrink_200_200/0/1668238629520?e=1677715200&v=beta&t=Hhjx7FOzBV2BuRi4msXNQb3jpQzm2A0XF6mEIxRchX8",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  return (
    <div className="tinderCards">
    <div className="tinderCards__cardContainers">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})`}}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
