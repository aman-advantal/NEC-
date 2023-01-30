import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Reducer/user/userReducer";
const reducer = combineReducers({
  user: userReducer,
});
const initaiState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initaiState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
