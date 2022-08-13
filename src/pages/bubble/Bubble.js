import React from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { INITIAL_STATE } from "../../redux/reducers/reducers";
import Loader from "../../widgets/loader/Loader";

const values = {
  series: [
    {
      name: "Bubble1",
      data: [[new Date().getTime(), 43, 28]],
    },
    {
      name: "Bubble2",
      data: [[new Date().getTime(), 12, 64]],
    },
    {
      name: "Bubble3",
      data: [[new Date().getTime(), 49, 78]],
    },
    {
      name: "Bubble4",
      data: [[new Date().getTime(), 13, 18]],
    },
  ],
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
      <div className="window-sizing"></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps)(Bubble);
