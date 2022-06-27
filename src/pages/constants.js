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
    name: "Bubble",
    icon: "fa fa-circle",
    key: "bubble",
    color: "var(--app-theme-cyan)",
    url: "/pages/bubble",
  },
  {
    name: "Trend",
    icon: "fa fa-line-chart",
    key: "trends",
    color: "var(--app-theme-light)",
    url: "/pages/trends",
  },
  {
    name: "Candles",
    icon: "fa fa-btc",
    key: "candles",
    color: "var(--app-theme-pink)",
    url: "/pages/candles",
  },
  {
    name: "Authors",
    icon: "fa fa-users",
    key: "authors",
    color: "var(--app-theme-orange)",
    url: "/pages/authors",
  },
];

export const STOCKS_URL =
  "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/week/2019-01-22/2022-05-22?adjusted=true&sort=asc&limit=120&apiKey=eeWatLq7rmAWs5yCeFkohzDzIzzHYdpW";
