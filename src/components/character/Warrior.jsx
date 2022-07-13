import * as React from "react";
import "./Character.css";
import warrior from "../../images/warrior.png";

export default function Warrior() {
  
  return (
    <div className="character">
      <img src={warrior} alt={"img"} className="characterImage"/>
    </div>
  );
}
