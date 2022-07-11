import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShopPopupDisplay,
} from "../../reducers/shopReducer";
import "./shopPopup.css";
import ShopItem from "../item/ShopItem";

export default function ShopPopup() {
  const popupDisplay = useSelector((state) => state.shop.popupDisplay);
  const shopAssortment = useSelector((state) => state.shop.shopAssortment);
  const dispatch = useDispatch();

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
        {shopAssortment.map((item, index) => (
          <ShopItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
