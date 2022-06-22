import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import equipmentReducer from "./equipmentReducer";
import inventoryReducer from "./inventoryReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  inventory: inventoryReducer,
  equipmentCells: equipmentReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
