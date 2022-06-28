import { COUNTRY_URL, STOCKS_URL } from "../../pages/constants";
import { InternetExplorer } from "../../utils/InternetExplorer";
import { DO_NOTHING } from "../ReduxConstants";
import { SET_COUNTRIES_CONTENT, SET_STOCK_CONTENT } from "./action-constants";

export const testReduxAction = (someValue) => {
  return { type: DO_NOTHING, payload: someValue };
};

export const fetchInitialContent = () => (dispatch) => {
  return Promise.all([
    InternetExplorer.get({ url: STOCKS_URL }),
    InternetExplorer.get({ url: COUNTRY_URL }),
  ])
    .then(([apples, africanCountries]) => {
      console.log("I think I am the african countries", africanCountries);
      dispatch(setStockContentAction(restructureStocks(apples)));
      dispatch(
        setCountryContentAction(restructureCountryContent(africanCountries))
      );
    })
    .catch((e) => console.log("ERROR LOADING INITIAL CONTENT", e?.toString()));
};

const setStockContentAction = (data) => {
  return { type: SET_STOCK_CONTENT, payload: data };
};

const restructureStocks = (apples = {}) => {
  const { results } = apples || {};
  const data = results.map(({ h, l, t, o, c }) => ({
    x: new Date(t),
    y: [o, h, l, c],
  }));
  return [{ data }];
};
const restructureCountryContent = (data) => {
  return (data || []).map(({ area, gini, population, name }) => ({
    name: name?.common || "...",
    data: [[area, population, (gini || {})["2015"] || 2]],
  }));
};
export const setCountryContentAction = (data) => {
  return { type: SET_COUNTRIES_CONTENT, payload: data };
};
