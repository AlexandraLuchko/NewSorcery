import * as React from "react";
import EquipmentCell from "./Cell/EquipmentCell";
import "./cells.css";

export default function Cells(){

    return(
        <div className="cells">
            <div>
                <EquipmentCell/>
                <EquipmentCell/>
                <EquipmentCell/>
            </div>
            <div>
                <EquipmentCell/>
                <EquipmentCell/>
                <EquipmentCell/>
            </div>
        </div>
    ) 
}