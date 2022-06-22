import * as React from "react";
import EquipmentCell from "./Cell/EquipmentCell";
import "./cells.css";

export default function Cells(){

    return(
        <div className="cells">
            <div>
                <EquipmentCell id = "2"/>
                <EquipmentCell id = "3"/>
                <EquipmentCell id = "4"/>
            </div>
            <div>
                <EquipmentCell id = "5"/>
                <EquipmentCell id = "6"/>
                <EquipmentCell id = "7"/>
            </div>
        </div>
    ) 
}