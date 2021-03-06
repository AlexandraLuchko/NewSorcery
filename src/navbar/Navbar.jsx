import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import InventoryPopup from "../components/inventory/Inventory";
import ShopPopup from "../components/shopPopup/ShopPopup";
import { setShopPopupDisplay } from "../reducers/shopReducer";
import { setInventoryPopupDisplay } from "../reducers/inventoryReducer";
import { setChosenCharacter } from "../reducers/profileReducer";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const inventoryDisplay = useSelector((state) => state.inventory.popupDisplay);

  React.useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
  });

  function keyDownHandler(e) {
    if (e.keyCode === 73 && inventoryDisplay === "none") {
      inventoryPopupHandler("flex");
    } else {
      inventoryPopupHandler("none");
    }
  }

  function showPopupHandler() {
    dispatch(setShopPopupDisplay("flex"));
  }

  function inventoryPopupHandler(display) {
    dispatch(setInventoryPopupDisplay(display));
  }

  function setCharacter (character) {
    dispatch(setChosenCharacter(character));
  }

  return (
    <div className="navbar">
      <div className="title">New Sorcery</div>
      <button className="shop_btn" onClick={() => showPopupHandler()}>
        Магазин
      </button>
      <button className="inventory_btn" onClick={() => inventoryPopupHandler()}>
        Инвентарь
      </button>
      <ShopPopup />
      <InventoryPopup />
      <select className="characterSelect" size="1" id="select" onChange={(e) => {
        setCharacter(e.target.value)
      }}>
        <option disabled>Выберите героя</option>
        <option value="archer">Лучник</option>
        <option value="warrior">Воин</option>
        <option value="wizard">Чародей</option>
      </select>
    </div>
  );
}
