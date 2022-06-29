import React from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { INITIAL_STATE } from "../../redux/reducers/reducers";
import Loader from "../../widgets/loader/Loader";
const values = {
  series: [
    {
      name: "XYZ MOTORS",
      data: [
        { x: new Date("2020-01-1"), y: 10 },
        { x: new Date("2020-01-2"), y: 20 },
        { x: new Date("2020-01-3"), y: 30 },
        { x: new Date("2020-01-4"), y: 5 },
        { x: new Date("2020-01-5"), y: 7 },
        { x: new Date("2020-01-6"), y: 20 },
        { x: new Date("2020-01-7"), y: 75 },
        { x: new Date("2020-01-8"), y: 60 },
        { x: new Date("2020-01-9"), y: 55 },
        { x: new Date("2020-01-10"), y: 60 },
        { x: new Date("2020-01-11"), y: 40 },
      ],
    },
  ],
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
  console.log("le bitcoins", bitcoins);
  if (bitcoins === INITIAL_STATE)
    return <Loader text="Loading bitcoin data..." />;
  return (
    <div className="graph-area">
      <ReactApexChart
        options={values.options}
        series={bitcoins}
        type="line"
        height={400}
      />
    </div>
  );
}

const mapStateToProps = ({ bitcoins }) => ({ bitcoins });
export default connect(mapStateToProps)(Trends);
