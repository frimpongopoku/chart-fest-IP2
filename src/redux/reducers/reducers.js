import {
  SET_BITCOIN_ITEMS,
  SET_COUNTRIES_CONTENT,
  SET_STOCK_CONTENT,
} from "../actions/action-constants";
import { DO_NOTHING } from "../ReduxConstants";
export const INITIAL_STATE = "loading";
export const doNothingReducer = (state = [], action = {}) => {
  if (action.type === DO_NOTHING) {
    return action.payload;
  }
  return state;
};
export const stockContentRducer = (state = INITIAL_STATE, action = {}) => {
  if (action.type === SET_STOCK_CONTENT) {
    return action.payload;
  }
  return state;
};
export const countryContentReducer = (state = INITIAL_STATE, action = {}) => {
  if (action.type === SET_COUNTRIES_CONTENT) {
    return action.payload;
  }
  return state;
};
export const bitcoinContentReducer = (state = INITIAL_STATE, action = {}) => {
  if (action.type === SET_BITCOIN_ITEMS) {
    return action.payload;
  }
  return state;
};
