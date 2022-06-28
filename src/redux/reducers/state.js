import { combineReducers } from "redux";
import {
  countryContentReducer,
  doNothingReducer,
  stockContentRducer,
} from "./reducers";

export default combineReducers({
  testStore: doNothingReducer,
  appleStock: stockContentRducer,
  countries: countryContentReducer,
});
