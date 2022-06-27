import { STOCKS_URL } from "../../pages/constants";
import { InternetExplorer } from "../../utils/InternetExplorer";
import { DO_NOTHING } from "../ReduxConstants";
import { SET_COUNTRIES_CONTENT, SET_STOCK_CONTENT } from "./action-constants";

export const testReduxAction = (someValue) => {
  return { type: DO_NOTHING, payload: someValue };
};

export const fetchInitialContent = () => {
  Promise.all([InternetExplorer.get({ url: STOCKS_URL })]).then(
    ([appleResponse]) => {
      setStockContentAction(appleResponse);
    }
  );
};

export const setStockContentAction = (data) => {
  return { type: SET_STOCK_CONTENT, payload: data };
};
export const setCountryContentAction = (data) => {
  return { type: SET_COUNTRIES_CONTENT, payload: data };
};
// const fetchAppleStockContent = () => {
//   return InternetExplorer.get({ url: STOCKS_URL });
// };

