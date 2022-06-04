import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInventoryPopupDisplay } from "../../reducers/inventoryReducer";
import "./Inventory.css";

export default function InventoryPopup() {
  const popupDisplay = useSelector((state) => state.inventory.popupDisplay);
  const dispatch = useDispatch();

  return (
    <div className="inventory_popup" style={{ display: popupDisplay }}>
      <div className="inventoryANDbtn">
        <div className="inventory">Инвентарь</div>
        <button
          className="closeBtn"
          onClick={() => dispatch(setInventoryPopupDisplay("none"))}
        >
          X
        </button>
      </div>
    </div>
  );
}
