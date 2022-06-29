import { combineReducers } from "redux";
import {
  bitcoinContentReducer,
  countryContentReducer,
  doNothingReducer,
  stockContentRducer,
} from "./reducers";

export default combineReducers({
  testStore: doNothingReducer,
  appleStock: stockContentRducer,
  countries: countryContentReducer,
  bitcoins : bitcoinContentReducer
});
