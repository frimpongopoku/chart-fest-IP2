import React from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { INITIAL_STATE } from "../../redux/reducers/reducers";
import Loader from "../../widgets/loader/Loader";
import polygonLogo from "./../../media/polygon_logo.png";
const involved = [
  {
    name: "Actions.js",
    url: "https://github.com/frimpongopoku/chart-fest-IP2/blob/master/src/redux/actions/actions.js",
  },
  {
    name: "PageWrapper.js",
    url: "https://github.com/frimpongopoku/chart-fest-IP2/blob/master/src/pages/PageWrapper.js",
  },
  {
    name: "Candle.js",
    url: "https://github.com/frimpongopoku/chart-fest-IP2/blob/master/src/pages/candle/Candle.js",
  },
  {
    name: "Loader.js",
    url: "https://github.com/frimpongopoku/chart-fest-IP2/blob/master/src/widgets/loader/Loader.js",
  },
];
const values = {
  options: {
    chart: {
      type: "candlestick",
      zoom: { enabled: false },
    },
    title: {
      text: "AAPL Stock Data",
      align: "left",
      style: { color: "white" },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: "white",
        },
      },
    },
  },
};

function Candle({ appleStock }) {
  const itemsAreNowLoading = appleStock === INITIAL_STATE;
  if (itemsAreNowLoading) return <Loader />;
  return (
    <>
      <div className="graph-area">
        <ReactApexChart
          options={values.options}
          series={appleStock}
          type="candlestick"
          height={400}
        />
      </div>
      <div className="window-sizing">
        <h2 className="page-subtitle"> Summary</h2>
        <p className="text">
          A stock, also known as equity, is a security that represents the
          ownership of a fraction of the issuing corporation. Units of stock are
          called "shares" which entitles the owner to a proportion of the
          corporation's assets and profits equal to how much stock they own.
          Stocks are bought and sold predominantly on stock exchanges and are
          the foundation of many individual investors' portfolios. Stock trades
          have to conform to government regulations meant to protect investors
          from fraudulent practices.
        </p>
        <p className="text">
          Apple Inc. (AAPL) is a global technology company that designs,
          manufactures, and sells smartphones, personal computers, tablets,
          wearables, and accessories. Some of its main products include the
          iPhone, the Mac line of personal computers and laptops, the iPad, the
          Apple Watch, and Apple TV. The company also has a fast-growing
          services business that includes its iCloud cloud service and its
          digital streaming-content services, such as Apple Music and Apple TV+.
          1
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          className="app-link"
          href="https://www.investopedia.com/apple-stock-aapl-5075819"
        >
          Source: Investopedia
        </a>
        <p className="text">
          The graph provides a summary of the AAPL stock within a time frame of
          <a
            rel="noreferrer"
            style={{ marginLeft: 6 }}
            href="https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/week/2019-01-22/2022-05-22?adjusted=true&sort=asc&limit=120&apiKey=eeWatLq7rmAWs5yCeFkohzDzIzzHYdpW"
            className="app-link"
            target="_blank"
          >
            22nd January 2019 - 22nd May 2022
          </a>
        </p>
        <h2 className="page-subtitle">API Source</h2>
        <a
          rel="noreferrer"
          className="app-link"
          target="_blank"
          href="https://polygon.io/getting-started"
        >
          <img className="api-logos" src={polygonLogo} alt="media" />
        </a>

        <h2 className="page-subtitle">Involved Files</h2>
        <p className="text">
          Files that have been put together to display this page
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {involved.map((it, ind) => {
            return (
              <a
                rel="noreferrer"
                style={{ marginBottom: 10 }}
                key={ind}
                className="app-link"
                href={it.url || "#"}
                target="_blank"
              >
                {it.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { appleStock: state.appleStock };
};
export default connect(mapStateToProps)(Candle);
