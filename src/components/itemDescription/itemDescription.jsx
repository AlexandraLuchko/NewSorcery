import * as React from "react";
import { useSelector } from "react-redux";
import "./itemDescription.css";
import moneyBag from "../../images/money.png";

export default function ItemDescription({ itemId }) {
  const descriptionsDisplay = useSelector(
    (state) => state.itemDescription.descriptionsDisplay
  );

  const mouseOverItem = useSelector(
    (state) => state.itemDescription.mouseOverItem
  );

  const descriptionDisplay = descriptionsDisplay.find(
    (descriptionDisplay) => descriptionDisplay.itemId === itemId
  );

  if (mouseOverItem === null || !descriptionDisplay.isShowed) {
    return <div></div>;
  } else {
    return (
      <div className="itemDescriptionPopup">
        <div className="itemDescription">
          Название: <br />
          <div className="name">{mouseOverItem.name}</div>
          Описание: <br />
          <div className="description">{mouseOverItem.description}</div>
          Цена: <br />
          <div className="price">
            <img src={moneyBag} alt={"moneyBag"} width={40} height={40}></img>
            {mouseOverItem.price}
          </div>
          <div>
            {mouseOverItem.attackPower ? (
              <div>
                Сила атаки:
                <div className="stats">{mouseOverItem.attackPower}</div>
              </div>
            ) : (
              <div></div>
            )}
            {mouseOverItem.healPoints ? (
              <div>
                Здоровье:
                <div className="stats">{mouseOverItem.healPoints}</div>
              </div>
            ) : (
              <div></div>
            )}
            {mouseOverItem.manaPoints ? (
              <div>
                Мана:
                <div className="stats">{mouseOverItem.manaPoints}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
