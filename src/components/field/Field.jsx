import * as React from "react";
import Character from "../character/Character";
import EquipmentCell from "../equipmentCells/Cell/EquipmentCell";
import Cells from "../equipmentCells/Cells";
import "./Field.css";

export default function Field() {
  return (
    <div>
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
