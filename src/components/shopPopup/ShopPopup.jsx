import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShopPopupDisplay } from "../../reducers/shopReducer";
import { shopAssortment, images } from "../../data";
import "./shopPopup.css";

export default function ShopPopup() {
  const popupDisplay = useSelector((state) => state.shop.popupDisplay);
  const dispatch = useDispatch();

  let isRequiredImage = (element, index, array, itemName) => {
    return element.item === itemName;
  };

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
          <img
            src={
              images.find((element, i, array) =>
                isRequiredImage(element, i, array, item.name)
              ).path
            }
            className="image"
            alt={"itemImage"}
            width={70}
            height={70}
          />
        ))}
      </div>
    </div>
  );
}
