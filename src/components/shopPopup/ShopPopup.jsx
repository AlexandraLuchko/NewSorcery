import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShopPopupDisplay } from "../../reducers/shopReducer";
import "./shopPopup.css";

export default function ShopPopup() {
  const popupDisplay = useSelector((state) => state.shop.popupDisplay);
  const dispatch = useDispatch();
  const shopAssortment = [
    "Шлем",
    "Нагрудник",
    "Перчатки",
    "Поножи",
    "Сапоги",
    "Меч 1",
    "Меч 2",
  ];

  return (
    <div className="shop_popup" style={{ display: popupDisplay }}>
      <div className="shopANDbtn">
        <div className="shop">Магазин</div>
        <button
          className="closeBtn"
          onClick={() => dispatch(setShopPopupDisplay("none"))}
        >
          X
        </button>
      </div>
      <div className="shop_assortment">
        {shopAssortment.map((item) => (
          <button className="item">{item}</button>
        ))}
      </div>
    </div>
  );
}
