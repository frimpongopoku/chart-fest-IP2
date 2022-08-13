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
    url: "https://github.com/frimpongopoku/chart-fest-IP2/blob/master/src/pages/trend/Trends.js",
  },
  {
    name: "Loader.js",
    url: "https://github.com/frimpongopoku/chart-fest-IP2/blob/master/src/widgets/loader/Loader.js",
  },
];
const values = {
  options: {
    colors: ["#f678a8"],
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: false,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },

    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Price Movement of Bitcoin",
      align: "left",
      style: { color: "white" },
    },
    fill: {
      type: "color",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 1,
        // stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
        style: { colors: "white" },
      },
      title: {
        text: "Closing Price In USD",
        style: { color: "white" },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: { colors: "white" },
      },
      title: {
        style: { color: "white" },
        text: "Timeline",
      },
    },
    tooltip: {
      shared: false,
    },
  },
};
function Trends({ bitcoins }) {
  if (bitcoins === INITIAL_STATE)
    return <Loader text="Loading bitcoin data..." />;
  return (
    <>
      <div className="graph-area">
        <ReactApexChart
          options={values.options}
          series={bitcoins}
          type="line"
          height={400}
        />
      </div>
      <div className="window-sizing">
        <h2 className="page-subtitle">Summary</h2>

        <p className="text">
          Bitcoin is a cryptocurrency, a virtual currency designed to act as
          money and a form of payment outside the control of any one person,
          group, or entity, and thus removing the need for third-party
          involvement in financial transactions. It is rewarded to blockchain
          miners for the work done to verify transactions and can be purchased
          on several exchanges. Bitcoin was introduced to the public in 2009 by
          an anonymous developer or group of developers using the name Satoshi
          Nakamoto. It has since become the most well-known cryptocurrency in
          the world.
        </p>
        <a
          target="_blank"
          className="app-link"
          href="https://www.investopedia.com/terms/b/bitcoin.asp#:~:text=Launched%20in%202009%2C%20Bitcoin%20is,system%20known%20as%20a%20blockchain."
        >
          Source: Investopedia
        </a>

        <p className="text">
          The above graph is a plot demonstrating the trend of bitcoin{" "}
          <b>closing</b> prices within the time frame of between the time
          intervals of
          <a
            style={{ marginLeft: 6 }}
            href="https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2019-01-01/2022-05-01?adjusted=true&sort=asc&limit=120&apiKey=eeWatLq7rmAWs5yCeFkohzDzIzzHYdpW"
            className="app-link"
            target="_blank"
          >
            1st January 2019 - 1st May 2022
          </a>
        </p>
        <h2 className="page-subtitle">API Source</h2>
        <a
          className="app-link"
          target="_blank"
          href="https://polygon.io/docs/crypto/getting-started"
        >
          <img className="api-logos" src={polygonLogo} />
        </a>

        <h2 className="page-subtitle">Involved Files</h2>
        <p className="text">
          Files that have been put together to display this page
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {involved.map((it, ind) => {
            return (
              <a
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

const mapStateToProps = ({ bitcoins }) => ({ bitcoins });
export default connect(mapStateToProps)(Trends);
