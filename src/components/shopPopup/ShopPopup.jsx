import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShopPopupDisplay, setCurrentItem } from "../../reducers/shopReducer";
import "./shopPopup.css";

export default function ShopPopup() {
  const popupDisplay = useSelector((state) => state.shop.popupDisplay);
  const shopAssortment = useSelector((state) => state.shop.shopAssortment);
  const dispatch = useDispatch();

  function dragStartHandler(e, item){
    dispatch(setCurrentItem(item))
  }

  function dragLeaveHandler(e){

  }

  function dragEndHandler(e){

  }

  function dragOverHandler(e){
    e.preventDefault()
  }

  function dropHandler(e, item){
    e.preventDefault()
  }

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
              item.path
            }
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, item)}
            className="image"
            draggable="true"
            alt={"itemImage"}
            width={70}
            height={70}
          />
        ))}
      </div>
    </div>
  );
}
