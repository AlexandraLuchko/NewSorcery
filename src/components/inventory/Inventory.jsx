import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInventoryPopupDisplay,
  setInventory,
} from "../../reducers/inventoryReducer";
import { deleteEquipmentCellItem } from "../../reducers/equipmentCellsReducer";
import "./Inventory.css";
import Item from "../item/Item";
import moneyBag from "../../images/money.png";

export default function InventoryPopup() {
  const popupDisplay = useSelector((state) => state.inventory.popupDisplay);
  const currentItem = useSelector((state) => state.shop.currentItem);
  const inventory = useSelector((state) => state.inventory.inventory);
  const budget = useSelector((state) => state.inventory.playerBudget);
  const dispatch = useDispatch();

  function dragOverInventoryHandler(e) {
    e.preventDefault();
  }

  function inventoryDropCaptureHandler(e) {
    e.preventDefault();
    dispatch(deleteEquipmentCellItem(currentItem));
    if(inventory.find((item) => item.id === currentItem.id)){
      return
    }else{
      dispatch(setInventory(currentItem));
    }
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
          <div className="budget">
            <img src={moneyBag} alt={"moneyBag"} width={40} height={40}></img>
            {budget}
          </div>
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
          <div className="budget">
            <img src={moneyBag} alt={"moneyBag"} width={40} height={40}></img>
            {budget}
          </div>
          <button
            className="closeBtn"
            onClick={() => dispatch(setInventoryPopupDisplay("none"))}
          >
            X
          </button>
        </div>
        <div className="inventory">
          {inventory.map((item) => (
            <div>
              <Item key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
