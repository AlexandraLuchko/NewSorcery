import * as React from "react";
import "./equipmentCell.css";
import { useSelector, useDispatch } from "react-redux";
import { setEquipment } from "../../../reducers/equipmentReducer";

export default function EquipmentCell({ id, cellData }) {
  const currentItem = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();
  console.log(cellData);

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropCaptureHandler(e) {
    e.preventDefault();
    dispatch(setEquipment(id, currentItem));
    console.log(currentItem);
    console.log(e.target);
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
