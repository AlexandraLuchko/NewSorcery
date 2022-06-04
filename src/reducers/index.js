import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import inventoryReducer from "./inventoryReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  inventory: inventoryReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
