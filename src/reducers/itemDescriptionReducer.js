const SET_DESCRIPTION_DISPLAY = "SET_DESCRIPTION_DISPLAY";
const SET_MOUSE_OVER_ITEM = "SET_MOUSE_OVER_ITEM";

const defaultState = {
  mouseOverItem: null,
  descriptionsDisplay: [
    { itemId: 0, isShowed: false },
    { itemId: 1, isShowed: false },
    { itemId: 2, isShowed: false },
    { itemId: 3, isShowed: false },
    { itemId: 4, isShowed: false },
    { itemId: 5, isShowed: false },
    { itemId: 6, isShowed: false },
  ],
};

export default function itemDescriptionReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DESCRIPTION_DISPLAY:
      return {
        ...state,
        descriptionsDisplay: state.descriptionsDisplay.map(
          (descriptionDisplay) =>
            descriptionDisplay.itemId === action.payload.item.id
              ? {
                  ...descriptionDisplay,
                  isShowed: action.payload.display,
                }
              : descriptionDisplay
        ),
      };
    case SET_MOUSE_OVER_ITEM:
      return {
        ...state,
        mouseOverItem: action.payload,
      };
    default:
      return state;
  }
}

export const setDescriptionDisplay = (item, display) => ({
  type: SET_DESCRIPTION_DISPLAY,
  payload: { item, display },
});

export const setMouseOverItem = (item) => ({
  type: SET_MOUSE_OVER_ITEM,
  payload: item,
});
