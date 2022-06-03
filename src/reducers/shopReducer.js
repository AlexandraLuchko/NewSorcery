const SET_SHOP_POPUP_DISPLAY = "SET_SHOP_POPUP_DISPLAY";

const defaultState = {
  popupDisplay: "flex",
};

export default function shopReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SHOP_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload };
    default:
      return state;
  }
}

export const setShopPopupDisplay = (display) => ({
  type: SET_SHOP_POPUP_DISPLAY,
  payload: display,
});
