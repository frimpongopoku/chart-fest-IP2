import React from "react";
import ReactApexChart from "react-apexcharts";

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
      text: "Our Bubble Chart",
      style: { color: "white" },
    },
    xaxis: {
      tickAmount: 12,
      type: "category",
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    yaxis: {
      max: 70,
      labels: {
        style: {
          colors: "white",
        },
      },
    },

    legend: {
      labels: {
        useSeriesColors: true,
      },
    },
  },
};
function Bubble() {
  return (
    <div>
      <div className="graph-area">
        <ReactApexChart
          options={values.options}
          series={values.series}
          type="bubble"
          height={400}
        />
      </div>
    </div>
  );
}

export default Bubble;
