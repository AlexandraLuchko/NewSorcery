import * as React from "react";
import "./Character.css";
import archer from "../../images/archer3.png";

export default function Archer() {
  
  return (
    <div className="character">
      <img src={archer} alt={"img"} className="characterImage"/>
    </div>
  );
}