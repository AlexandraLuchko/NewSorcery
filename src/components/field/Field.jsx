import * as React from "react";
import Warrior from "../character/Warrior";
import Archer from "../character/Archer";
import Wizard from "../character/Wizard";
import EquipmentCell from "../equipmentCells/Cell/EquipmentCell";
import { useDispatch, useSelector } from "react-redux";
import { setShopPopupDisplay } from "../../reducers/shopReducer";
import { setInventoryPopupDisplay } from "../../reducers/inventoryReducer";
import "./Field.css";
import ItemDescription from "../itemDescription/itemDescription";
import Profile from "../profile/Profile";

export default function Field() {
  const dispatch = useDispatch();
  const equipmentCells = useSelector((state) => state.equipmentCells.equipment);
  const selectedItem = useSelector(
    (state) => state.itemDescription.mouseOverItem
  );
  const character = useSelector((state) => state.profile.chosedCharacter);
  

  return (
    <div
      onClick={() => {
        dispatch(setShopPopupDisplay("none"));
        dispatch(setInventoryPopupDisplay("none"));
      }}
    >
      <div className="head">
        Шлем
        <EquipmentCell id={0} cellData={equipmentCells[0]} />
      </div>
      <div className="field">
        <div className="leftCells">
          Оружие
          <EquipmentCell id={1} cellData={equipmentCells[1]} />
          Оружие
          <EquipmentCell id={2} cellData={equipmentCells[2]} />
          Сапоги
          <EquipmentCell id={3} cellData={equipmentCells[3]} />
        </div>
        {character === "warrior" ? (
          <Warrior className="character"/>
        ) : (
          <div></div>
        )}  
        {character === "archer" ? (
          <Archer className="character"/>
        ) : (
          <div></div>
        )}
        {character === "wizard" ? (
          <Wizard className="character"/>
        ) : (
          <div></div>
        )}
        <div className="rightCells">
          Нагрудник
          <EquipmentCell id={4} cellData={equipmentCells[4]} />
          Перчатки
          <EquipmentCell id={5} cellData={equipmentCells[5]} />
          Штаны
          <EquipmentCell id={6} cellData={equipmentCells[6]} />
        </div>
        <Profile className="profile" />
      </div>
      <div>
        {selectedItem === null ? (
          <div></div>
        ) : (
          <ItemDescription itemId={selectedItem.id} />
        )}
      </div>
    </div>
  );
}
