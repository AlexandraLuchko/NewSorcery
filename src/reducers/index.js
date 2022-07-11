import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import equipmentCellsReducer from "./equipmentCellsReducer";
import inventoryReducer from "./inventoryReducer";
import shopReducer from "./shopReducer";
import itemDescriptionReducer from "./itemDescriptionReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  inventory: inventoryReducer,
  equipmentCells: equipmentCellsReducer,
  itemDescription: itemDescriptionReducer,
  profile: profileReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
