const SET_SHOP_POPUP_DISPLAY = "SET_SHOP_POPUP_DISPLAY";
const SET_CURRENT_ITEM = "SET_CURRENT_ITEM";

const defaultState = {
  popupDisplay: "none",
  currentItem: null,
};

export default function shopReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SHOP_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload };
      case SET_CURRENT_ITEM:
      return { ...state, currentItem: action.payload };
    default:
      return state;
  }
}

export const setShopPopupDisplay = (display) => ({
  type: SET_SHOP_POPUP_DISPLAY,
  payload: display,
});

export const setCurrentItem = (item) => ({
  type: SET_CURRENT_ITEM,
  payload: item,
})
