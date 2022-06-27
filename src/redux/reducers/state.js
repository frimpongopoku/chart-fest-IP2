import { combineReducers } from "redux";
import { doNothingReducer, stockContentRducer } from "./reducers";

export default combineReducers({
  testStore: doNothingReducer,
  appleStock: stockContentRducer,
});
