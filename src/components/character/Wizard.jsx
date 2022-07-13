import * as React from "react";
import "./Character.css";
import wizard from "../../images/wizard.png";

export default function Wizard() {
  
  return (
    <div className="character">
      <img src={wizard} alt={"img"} className="characterImage"/>
    </div>
  );
}