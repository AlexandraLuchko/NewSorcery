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
    {
      name: "Sword",
      id: 0,
      type: "Sword",
      path: sword,
      description: "sword",
      price: 400,
      attackPower: 10,
      healPoints: 0,
      manaPoints: 10,
    },
    {
      name: "Sword2",
      id: 1,
      type: "Sword",
      path: sword,
      description: "sword",
      price: 400,
      attackPower: 10,
      healPoints: 0,
      manaPoints: 10,
    },
    {
      name: "Head",
      id: 2,
      type: "Head",
      path: head,
      description: "head",
      price: 200,
      attackPower: 5,
      healPoints: 10,
      manaPoints: 10,
    },
    {
      name: "Armor",
      id: 3,
      type: "Armor",
      path: armor,
      description: "armor",
      price: 300,
      attackPower: 10,
      healPoints: 20,
      manaPoints: 10,
    },
    {
      name: "Gloves",
      id: 4,
      type: "Gloves",
      path: gloves,
      description: "gloves",
      price: 100,
      attackPower: 5,
      healPoints: 10,
      manaPoints: 5,
    },
    {
      name: "Boots",
      id: 5,
      type: "Boots",
      path: boots,
      description: "boots",
      price: 200,
      attackPower: 5,
      healPoints: 10,
      manaPoints: 5,
    },
    {
      name: "Pants",
      id: 6,
      type: "Pants",
      path: pants,
      description: "pants",
      price: 300,
      attackPower: 10,
      healPoints: 15,
      manaPoints: 10,
    },
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
