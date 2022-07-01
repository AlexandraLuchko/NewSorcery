const SET_EQUIPMENT_CELL_ITEM = "SET_EQUIPMENT_CELL_ITEM";
const DELETE_EQUIPMENT_CELL_ITEM = "DELETE_EQUIPMENT_CELL_ITEM";

const defaultState = {
  equipment: [
    { name: "Head", id: 0, type: "Head", item: null },
    { name: "Sword", id: 1, type: "Sword", item: null },
    { name: "Sword2", id: 2, type: "Sword", item: null },
    { name: "Boots", id: 3, type: "Boots", item: null },
    { name: "Armor", id: 4, type: "Armor", item: null },
    { name: "Gloves", id: 5, type: "Gloves", item: null },
    { name: "Pants", id: 6, type: "Pants", item: null },
  ],
};

export default function equipmentCellsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_EQUIPMENT_CELL_ITEM:
      return {
        ...state,
        equipment: state.equipment.map((equipmentCell) =>
          equipmentCell.id === action.payload.id &&
          equipmentCell.type === action.payload.currentItem.type
            ? {
                ...equipmentCell,
                item: action.payload.currentItem,
              }
            : equipmentCell
        ),
      };
    case DELETE_EQUIPMENT_CELL_ITEM:
      return {
        ...state,
        equipment: state.equipment.map((equipmentCell) =>
          equipmentCell.type === action.payload.type
            ? {
                ...equipmentCell,
                item: null,
              }
            : equipmentCell
        ),
      };
    default:
      return state;
  }
}

export const setEquipment = (id, currentItem) => ({
  type: SET_EQUIPMENT_CELL_ITEM,
  payload: { id, currentItem },
});

export const deleteEquipmentCellItem = (currentItem) => ({
  type: DELETE_EQUIPMENT_CELL_ITEM,
  payload: currentItem,
});
