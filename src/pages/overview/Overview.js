import React from "react";
import motorGuys from "./../../media/motor.png";
function Overview() {
  const sources = [
    {
      name: "Design Inspiration (Dribble)",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
    },
    {
      name: "Apple Stocks API",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
    },
    {
      name: "African Countries API",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
    },
    {
      name: "Confetti Animation API ",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
    },
    {
      name: "Redux",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
    },
    {
      name: "React Router",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
    },
    {
      name: "React Router",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
    },
  ];
  return (
    <div className="content-wrapper">
      <p className="text">
        Groups will create a web application that demonstrates how to visualise
        data through appropriate coding practices. The project will involve
        finding sources of interesting data (three dissimilar sources are
        required) and then selecting and applying suitable visualisations to
        represent the data. The data should be sourced live via APIs, rather
        than being previously downloaded. Students should not pick examples that
        already exist where the data-access and visualisation are already
        delivered within a sample application. We are looking for students to
        apply appropriate visualisations to data that they have sourced, to
        deliver insights from the data. Students should not pick examples that
        already exist where the data-access and visualisation are already
        delivered within a sample application. We are looking for students to
        apply appropriate visualisations to data that they have sourced, to
        deliver insights from the data. Students should not pick examples that
        already exist where the data-access and visualisation are already
        delivered within a sample application. We are looking for students to
        apply appropriate visualisations to data that they have sourced, to
        deliver insights from the data.{" "}
      </p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h4 className="page-subtitle">Resources</h4>
          <ol style={{ listStyleType: "none" }}>
            {sources.map((it, index) => {
              return (
                <li key={index.toString()}>
                  <a
                    href={it.url}
                    target="_blank"
                    className="app-link touchable-opacity"
                  >
                    {it.name}
                  </a>
                </li>
              );
            })}
          </ol>
          <h4 className="page-subtitle">Assignment Description Source</h4>
          <a
            className="app-link touchable-opacity"
            href="https://docs.google.com/document/d/1lwJ4viuYr3MlDZvsUTdj6G_k-TtPi7M0Tjiyu4kZR3s/edit"
            target="_blank"
          >
            https://docs.google.com/document/d/1lwJ4viuYr3MlDZvsUTdj6G_k-TtPi7M0Tjiyu4kZR3s/edit
          </a>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <img className="motor-guys" src={motorGuys} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
