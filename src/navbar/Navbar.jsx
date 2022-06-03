import * as React from "react";
import { useDispatch } from "react-redux";
import ShopPopup from "../components/shopPopup/ShopPopup";
import { setShopPopupDisplay } from "../reducers/shopReducer";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();

  function showPopupHandler() {
    dispatch(setShopPopupDisplay("flex"));
  }

  return (
    <div className="navbar">
      <div className="title">New Sorcery</div>
      <button className="shop_btn" onClick={() => showPopupHandler()}>
        Магазин
      </button>
      <ShopPopup />
    </div>
  );
}
