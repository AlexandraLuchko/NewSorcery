import * as React from "react";
import "./Character.css";
import character from "../../images/warrior.png";

export default function Character() {
  let characterImage = character;
  
  return (
    <div className="character">
      <img src={characterImage} alt={"img"} className="characterImage"/>
    </div>
  );
}
