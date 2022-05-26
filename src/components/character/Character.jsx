import * as React from "react";
import "./Character.css";
import character from "D:/project/NewSorcery/newsorcery/src/images/character.jpg";

export default function Character() {
  let characterImage = character;
  
  return (
    <div className="character">
      <img src={characterImage} alt={"img"} />
    </div>
  );
}
