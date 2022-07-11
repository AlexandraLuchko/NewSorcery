import { useDispatch } from "react-redux";
import { setCurrentItem } from "../../reducers/shopReducer";
import {
  setDescriptionDisplay,
  setMouseOverItem,
} from "../../reducers/itemDescriptionReducer";
import "./Item.css";

export default function Item({ item }) {
  const dispatch = useDispatch();

  function dragStartHandler(e, item) {
    dispatch(setCurrentItem(item));
  }

  function showItemInfo(e, item) {
    dispatch(setMouseOverItem(item));
    dispatch(setDescriptionDisplay(item, true));
  }

  function hideItemInfo(e, item) {
    dispatch(setMouseOverItem(null));
    dispatch(setDescriptionDisplay(item, false));
  }

  return (
    <div className="inventoryItem">
      <img
        src={item.path}
        className="inventoryItemImage"
        draggable="true"
        alt={"itemImage"}
        width={70}
        height={70}
        onDragStart={(e) => dragStartHandler(e, item)}
        onMouseOver={(e) => showItemInfo(e, item)}
        onMouseLeave={(e) => hideItemInfo(e, item)}
      />
    </div>
  );
}
