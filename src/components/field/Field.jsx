import * as React from "react";
import Character from "../character/Character";
import EquipmentCell from "../equipmentCells/Cell/EquipmentCell";
import { useDispatch } from "react-redux";
import { setShopPopupDisplay } from "../../reducers/shopReducer";
import { setInventoryPopupDisplay } from "../../reducers/inventoryReducer";
import "./Field.css";

export default function Field() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setShopPopupDisplay("none"));
        dispatch(setInventoryPopupDisplay("none"));
      }}
    >
      <div className="head">
        Шлем
        <EquipmentCell />
      </div>
      <div className="field">
        <div className="leftCells">
          Оружие
          <EquipmentCell />
          Оружие
          <EquipmentCell />
          Сапоги
          <EquipmentCell />
        </div>
        <Character />
        <div className="rightCells">
          Нагрудник
          <EquipmentCell />
          Перчатки
          <EquipmentCell />
          Поножи
          <EquipmentCell />
        </div>
      </div>
    </div>
  );
}
