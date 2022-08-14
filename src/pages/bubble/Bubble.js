import React from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { INITIAL_STATE } from "../../redux/reducers/reducers";
import Loader from "../../widgets/loader/Loader";
import countries_logo from "./../../media/country_logo.png";
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
    name: "Bubble.js",
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
      height: "100px",
      type: "bubble",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.8,
    },
    title: {
      text: "A Graph Comparing African Countries in Terms of Population, Gini & Area",
      style: { color: "white" },
    },
    xaxis: {
      tickAmount: 12,
      type: "category",
      title: {
        text: "Area Of Country In Square Meters",
        style: { color: "white" },
      },
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    yaxis: {
      title: { text: "Population Of Country", style: { color: "white" } },
      labels: {
        style: {
          colors: "white",
        },
      },
    },

    legend: {
      show: false,
      labels: {
        useSeriesColors: true,
      },
    },
  },
};
function Bubble({ countries }) {
  if (countries === INITIAL_STATE)
    return <Loader text="Fetching country info..." />;
  return (
    <div>
      <div className="graph-area">
        <ReactApexChart
          options={values.options}
          series={countries}
          type="bubble"
          height={400}
        />
      </div>
      <div className="window-sizing">
        <h2 className="page-subtitle"> Summary</h2>
        <p className="text">
          The above chart, is a comparison of African countries in terms of
          their <b>population, area in square meters, and gini</b>
          <br />
          <i>
            {" "}
            <b>Gini </b> is a statistical measure of economic inequality in a
            country{" "}
          </i>
        </p>

        <a
          rel="noreferrer"
          target="_blank"
          className="app-link"
          href="https://www.investopedia.com/terms/g/gini-index.asp"
        >
          Source: Investopedia
        </a>

        <h2 className="page-subtitle">API Source</h2>
        <a
          rel="noreferrer"
          className="app-link"
          target="_blank"
          href="https://restcountries.com"
        >
          <img className="api-logos" src={countries_logo} alt="media" />
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps)(Bubble);
