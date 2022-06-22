const SET_EQUIPMENT_CELL_ITEM = "SET_EQUIPMENT_CELL_ITEM";

const defaultState = {
  equipment: [
    { name: "Head", id: 0, item: null },
    { name: "Weapon", id: 1, item: null },
    { name: "Weapon2", id: 2, item: null },
    { name: "Boots", id: 3, item: null },
    { name: "Breast", id: 4, item: null },
    { name: "Gloves", id: 5, item: null },
    { name: "Pants", id: 6, item: null },
  ],
};

export default function equipmentCellsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_EQUIPMENT_CELL_ITEM:
      return {
        ...state,
        equipment: state.equipment.map((equipmentCell) =>
          equipmentCell.id === action.payload.id
            ? {
                ...equipmentCell,
                item: action.payload.currentItem,
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
