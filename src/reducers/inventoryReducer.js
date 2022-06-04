const SET_INVENTORY_POPUP_DISPLAY = "SET_INVENTORY_POPUP_DISPLAY";

const defaultState = {
  popupDisplay: "none",
};

export default function inventoryReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_INVENTORY_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload };
    default:
      return state;
  }
}

export const setInventoryPopupDisplay = (display) => ({
  type: SET_INVENTORY_POPUP_DISPLAY,
  payload: display,
});
