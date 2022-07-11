const SET_INVENTORY_POPUP_DISPLAY = "SET_INVENTORY_POPUP_DISPLAY";
const SET_INVENTORY = "SET_INVENTORY";
const DELETE_ITEM_FROM_INVENTORY = "DELETE_ITEM_FROM_INVENTORY";
const SET_NEW_BUDGET = "SET_NEW_BUDGET";

const defaultState = {
  popupDisplay: "none",
  inventory: [],
  playerBudget: 1000,
};

export default function inventoryReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_INVENTORY_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload };
    case SET_INVENTORY:
      return {...state, inventory:  [...state.inventory, action.payload]}  
    case DELETE_ITEM_FROM_INVENTORY:
      return {
        ...state,
        inventory: [
          ...state.inventory.filter(
            (item) => item.name !== action.payload.name
          ),
        ],
      } 
      case SET_NEW_BUDGET:
        return { ...state, playerBudget: action.payload} 
    default:
      return state;
  }
}

export const setInventoryPopupDisplay = (display) => ({
  type: SET_INVENTORY_POPUP_DISPLAY,
  payload: display,
});

export const setInventory = (payload) => ({
  type: SET_INVENTORY,
  payload: payload,
});

export const deleteItemFromInventory = (item) => ({
  type: DELETE_ITEM_FROM_INVENTORY,
  payload: item,
});

export const setNewBudget = (newBudget) => ({
  type: SET_NEW_BUDGET,
  payload: newBudget,
})