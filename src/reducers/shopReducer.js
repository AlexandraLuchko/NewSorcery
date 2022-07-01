import sword from "../../src/images/sword.jpg";
import head from "../../src/images/head.jpg";
import armor from "../../src/images/armor.jpg";
import gloves from "../../src/images/gloves.jpg";
import boots from "../../src/images/boots.jpg";
import pants from "../../src/images/pants.jpg";

const SET_SHOP_POPUP_DISPLAY = "SET_SHOP_POPUP_DISPLAY";
const SET_CURRENT_ITEM = "SET_CURRENT_ITEM";
const DELETE_ITEM_FROM_SHOP = "DELETE_ITEM_FROM_SHOP";

const defaultState = {
  popupDisplay: "none",
  currentItem: null,
  shopAssortment: [
    { name: "Sword", type: "Sword", path: sword },
    { name: "Sword2", type: "Sword", path: sword },
    { name: "Head", type: "Head", path: head },
    { name: "Armor", type: "Armor", path: armor },
    { name: "Gloves", type: "Gloves", path: gloves },
    { name: "Boots", type: "Boots", path: boots },
    { name: "Pants", type: "Pants", path: pants },
  ],
};

export default function shopReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SHOP_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload };
    case SET_CURRENT_ITEM:
      return { ...state, currentItem: action.payload };
    case DELETE_ITEM_FROM_SHOP:
      return {
        ...state,
        shopAssortment: [
          ...state.shopAssortment.filter(
            (equipmentCell) => equipmentCell.name !== action.payload.item.name
          ),
        ],
      };
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
});

export const deleteItemFromShop = (item, ...equipment) => ({
  type: DELETE_ITEM_FROM_SHOP,
  payload: { item, equipment },
});
