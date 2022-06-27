import { SET_STOCK_CONTENT } from "../actions/action-constants";
import { DO_NOTHING } from "../ReduxConstants";

export const doNothingReducer = (state = [], action = {}) => {
  if (action.type === DO_NOTHING) {
    return action.payload;
  }
  return state;
};
export const stockContentRducer = (state = [], action = {}) => {
  if (action.type === SET_STOCK_CONTENT) {
    return action.payload;
  }
  return state;
};
