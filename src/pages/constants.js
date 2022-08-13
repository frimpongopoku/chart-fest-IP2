export const items = [
  {
    name: "Home",
    icon: "fa fa-home",
    key: "home",
    color: "var(--app-theme-light)",
    url: "/",
  },
  {
    name: "Overview",
    nickname: "Application Overview",
    icon: "fa fa-dashboard",
    key: "overview",
    color: "var(--app-theme-orange)",
    url: "/pages/overview",
  },
  {
    name: "Population",
    icon: "fa fa-circle",
    key: "population",
    color: "var(--app-theme-cyan)",
    url: "/pages/population",
  },
  {
    name: "Bitcoin",
    nickname: "Bitcoin Trend",
    icon: "fa fa-btc",
    key: "bitcoin",
    color: "var(--app-theme-light)",
    url: "/pages/bitcoin",
  },
  {
    name: "Stocks",
    nickname: "Apple Stock",
    icon: "fa fa-line-chart",
    key: "stocks",
    color: "var(--app-theme-pink)",
    url: "/pages/stocks",
  },
  {
    name: "Authors",
    icon: "fa fa-users",
    key: "authors",
    color: "var(--app-theme-orange)",
    url: "/pages/authors",
  },
  {
    name: "Our Web Technology",
    nickname: "Our Web Technology",
    icon: "fa fa-users",
    key: "technology",
    color: "var(--app-theme-orange)",
    url: "/pages/technology",
    hidden: true,
  },
];

export const STOCKS_URL =
  "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/week/2019-01-22/2022-05-22?adjusted=true&sort=asc&limit=120&apiKey=eeWatLq7rmAWs5yCeFkohzDzIzzHYdpW";

export const COUNTRY_URL = "https://restcountries.com/v3.1/region/africa";

export const BITCOIN_URL =
  "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2019-01-01/2022-05-01?adjusted=true&sort=asc&limit=120&apiKey=eeWatLq7rmAWs5yCeFkohzDzIzzHYdpW";
