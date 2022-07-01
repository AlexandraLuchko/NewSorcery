import * as React from "react";
import "./equipmentCell.css";
import { useSelector, useDispatch } from "react-redux";
import { setEquipment } from "../../../reducers/equipmentCellsReducer";
import {
  deleteItemFromShop,
  setCurrentItem,
} from "../../../reducers/shopReducer";
import { deleteItemFromInventory } from "../../../reducers/inventoryReducer";

export default function EquipmentCell({ id, cellData }) {
  const currentItem = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();
  const equipment = useSelector((state) => state.equipmentCells.equipment);

  function dragStartHandler(e, item) {
    dispatch(setCurrentItem(item));
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropCaptureHandler(e) {
    e.preventDefault();
    dispatch(setEquipment(id, currentItem));
    const equipmentCell = equipment.find((item) => item.id == e.target.id);
    if (equipmentCell.type === currentItem.type) {
      dispatch(deleteItemFromShop(currentItem));
      dispatch(deleteItemFromInventory(currentItem, equipment));
    }
  }

  if (cellData.item === null) {
    return (
      <div
        className="cell"
        id={id}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropCaptureHandler(e)}
      ></div>
    );
  } else {
    return (
      <div
        className="cell"
        id={id}
        onDragStart={(e) => dragStartHandler(e, cellData.item)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropCaptureHandler(e)}
      >
        <img
          src={cellData.item.path}
          alt={"itemImage"}
          width={40}
          height={40}
        ></img>
      </div>
    );
  }
}
