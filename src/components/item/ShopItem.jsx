import { useDispatch, useSelector } from "react-redux";
import {
  setDescriptionDisplay,
  setMouseOverItem,
} from "../../reducers/itemDescriptionReducer";
import { setInventory, setNewBudget } from "../../reducers/inventoryReducer";
import { deleteItemFromShop } from "../../reducers/shopReducer";
import { setCurrentItem } from "../../reducers/shopReducer";
import "./Item.css";

export default function Item({ item }) {
  const dispatch = useDispatch();
  const budget = useSelector((state) => state.inventory.playerBudget);

  function showItemInfo(e, item) {
    dispatch(setMouseOverItem(item));
    dispatch(setDescriptionDisplay(item, true));
  }

  function hideItemInfo(e, item) {
    dispatch(setMouseOverItem(null));
    dispatch(setDescriptionDisplay(item, false));
  }

  function buyItem(item) {
    dispatch(setCurrentItem(item));
    if (budget === 0 || budget < item.price) {
      alert("Недостаточно денег для покупки!");
    } else if (budget !== 0 || budget >= item.price) {
      dispatch(setInventory(item));
      dispatch(deleteItemFromShop(item));
      const newBudget = budget - item.price;
      dispatch(setNewBudget(newBudget));
    }
  }

  return (
    <div className="shopItem_Buy">
      <img
        src={item.path}
        className="shopItemImage"
        alt={"itemImage"}
        width={70}
        height={70}
        onMouseOver={(e) => showItemInfo(e, item)}
        onMouseLeave={(e) => hideItemInfo(e, item)}
      />
      <button className="buyButton" onClick={() => buyItem(item)}>Купить</button>
    </div>
  );
}
