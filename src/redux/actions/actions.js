import { BITCOIN_URL, COUNTRY_URL, STOCKS_URL } from "../../pages/constants";
import { InternetExplorer } from "../../utils/InternetExplorer";
import { DO_NOTHING } from "../ReduxConstants";
import {
  SET_BITCOIN_ITEMS,
  SET_COUNTRIES_CONTENT,
  SET_STOCK_CONTENT,
} from "./action-constants";

export const testReduxAction = (someValue) => {
  return { type: DO_NOTHING, payload: someValue };
};

export const fetchInitialContent = () => (dispatch) => {
  return Promise.all([
    InternetExplorer.get({ url: STOCKS_URL }),
    InternetExplorer.get({ url: COUNTRY_URL }),
    InternetExplorer.get({ url: BITCOIN_URL }),
  ])
    .then(([apples, africanCountries, bitcoins]) => {
      dispatch(setStockContentAction(restructureStocks(apples)));
      dispatch(
        setCountryContentAction(restructureCountryContent(africanCountries))
      );
      dispatch(setBitcoinItemsAction(restructureBitcoins(bitcoins)));
    })
    .catch((e) => console.log("ERROR LOADING INITIAL CONTENT", e?.toString()));
};

const setStockContentAction = (data) => {
  return { type: SET_STOCK_CONTENT, payload: data };
};
const setBitcoinItemsAction = (data) => {
  return { type: SET_BITCOIN_ITEMS, payload: data };
};

const restructureStocks = (apples = {}) => {
  const { results, ticker } = apples || {};
  const data = results.map(({ h, l, t, o, c }) => ({
    x: new Date(t),
    y: [o, h, l, c],
  }));
  return [{name: ticker, data }];
};
const restructureCountryContent = (data) => {
  return (data || []).map(({ area, gini, population, name }) => ({
    name: name?.common || "...",
    data: [[area, population, (gini || {})["2015"] || 2]],
  }));
};

const restructureBitcoins = (bitcoins) => {
  const { results, ticker } = bitcoins || {};
  const data = (results || []).map(({ c, t }) => ({ y: c, x: new Date(t) }));
  return [{ name: ticker, data }];
};
export const setCountryContentAction = (data) => {
  return { type: SET_COUNTRIES_CONTENT, payload: data };
};
