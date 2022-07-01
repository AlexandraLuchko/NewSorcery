import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInventoryPopupDisplay,
  setInventory,
} from "../../reducers/inventoryReducer";
import { deleteEquipmentCellItem } from "../../reducers/equipmentCellsReducer";
import { deleteItemFromShop } from "../../reducers/shopReducer";
import "./Inventory.css";

export default function InventoryPopup() {
  const popupDisplay = useSelector((state) => state.inventory.popupDisplay);
  const currentItem = useSelector((state) => state.shop.currentItem);
  const inventory = useSelector((state) => state.inventory.inventory);
  const dispatch = useDispatch();

  function dragOverInventoryHandler(e) {
    e.preventDefault();
  }

  function inventoryDropCaptureHandler(e) {
    e.preventDefault();
    dispatch(setInventory(currentItem));
    dispatch(deleteItemFromShop(currentItem));
    dispatch(deleteEquipmentCellItem(currentItem))
  }

  if (inventory.length === 0) {
    return (
      <div
        className="inventory_popup"
        style={{ display: popupDisplay }}
        onDragOver={(e) => dragOverInventoryHandler(e)}
        onDrop={(e) => inventoryDropCaptureHandler(e)}
      >
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
  } else {
    return (
      <div
        className="inventory_popup"
        style={{ display: popupDisplay }}
        onDragOver={(e) => dragOverInventoryHandler(e)}
        onDrop={(e) => inventoryDropCaptureHandler(e)}
      >
        <div className="inventoryANDbtn">
          <div className="inventory_title">Инвентарь</div>
          <button
            className="closeBtn"
            onClick={() => dispatch(setInventoryPopupDisplay("none"))}
          >
            X
          </button>
        </div>
        <div className="inventory">
          {inventory.map((item, index) => (
            <img
              src={item.path}
              alt={"itemImage"}
              className="image"
              width={70}
              height={70}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}
