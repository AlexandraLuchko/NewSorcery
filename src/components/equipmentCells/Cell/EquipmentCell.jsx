import * as React from "react";
import "./equipmentCell.css";
import { useSelector, useDispatch } from "react-redux";
import { setEquipment } from "../../../reducers/equipmentCellsReducer";
import {
  deleteItemFromShop,
  setCurrentItem,
} from "../../../reducers/shopReducer";
import { deleteItemFromInventory } from "../../../reducers/inventoryReducer";
import Item from "../../item/Item";
import { setNewWarriorStats } from "../../../reducers/profileReducer";

export default function EquipmentCell({ id, cellData }) {
  const currentItem = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();
  const equipment = useSelector((state) => state.equipmentCells.equipment);
  const basicStats = useSelector((state) => state.profile.warrior.basicStats);

  function dragStartHandler(e, item) {
    dispatch(setCurrentItem(item));
    deleteStats()
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function setNewStats() {
    basicStats.attackPower += currentItem.attackPower;
    basicStats.healPoints += currentItem.healPoints;
    basicStats.manaPoints += currentItem.manaPoints;
    dispatch(setNewWarriorStats(basicStats));
  }

  function deleteStats(){
    basicStats.attackPower -= currentItem.attackPower;
    basicStats.healPoints -= currentItem.healPoints;
    basicStats.manaPoints -= currentItem.manaPoints;
    dispatch(setNewWarriorStats(basicStats));
  }

  function dropCaptureHandler(e) {
    e.preventDefault();
    dispatch(setEquipment(id, currentItem));
    const equipmentCell = equipment.find((item) => item.id == e.target.id);
    if (equipmentCell.type === currentItem.type) {
      dispatch(deleteItemFromShop(currentItem));
      dispatch(deleteItemFromInventory(currentItem, equipment));
    }
    setNewStats();
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
        <Item
          key={cellData.item.id}
          item={cellData.item}
          className="equipmentItem"
        />
      </div>
    );
  }
}
