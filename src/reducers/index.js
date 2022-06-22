import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import equipmentCellsReducer from "./equipmentCellsReducer";
import inventoryReducer from "./inventoryReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  inventory: inventoryReducer,
  equipmentCells: equipmentCellsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
