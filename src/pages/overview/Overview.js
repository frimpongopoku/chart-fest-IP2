import React from "react";
import motorGuys from "./../../media/motor.png";
import reactLogo from "./../../media/react_logo.png";
import reduxLogo from "./../../media/redux_logo.png";
import apexLogo from "./../../media/apex_charts_logo.png";
import polygonLogo from "./../../media/polygon_logo.png";
import reactRouterLogo from "./../../media/react_router_logo.png";
import dribbleLogo from "./../../media/dribble_logo.png";
import confettie from "./../../media/confetti_logo.png";
import country_logo from "./../../media/country_logo.png";

function Overview() {
  const sources = [
    {
      name: "Design Inspiration (Dribble)",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: dribbleLogo,
    },
    {
      name: "Polygon API",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: polygonLogo,
    },
    {
      name: "Apex Charts API",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: apexLogo,
    },
    {
      name: "African Countries API",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: country_logo,
    },
    {
      name: "Confetti Animation API ",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: confettie,
    },
    {
      name: "Redux",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: reduxLogo,
    },
    {
      name: "React Router",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: reactLogo,
    },
    {
      name: "React Router",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: reactRouterLogo,
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
          <ol className="ol">
            {sources.map((it, index) => {
              return (
                <li key={index.toString()} style={{}} className="li">
                  <img src={it.image} />
                  <a
                    href={it.url}
                    target="_blank"
                    className="app-link touchable-opacity"
                    style={{ textAlign: "center" }}
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
            Assignment Source
          </a>
        </div>
        {/* <div style={{ marginLeft: "auto" }}>
          <img className="motor-guys phone-vanish" src={motorGuys} />
        </div> */}
      </div>
    </div>
  );
}

export default Overview;
