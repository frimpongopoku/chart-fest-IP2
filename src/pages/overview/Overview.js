import React from "react";
import heroku_logo from "./../../media/heroku_logo.png";
import reactLogo from "./../../media/react_logo.png";
import reduxLogo from "./../../media/redux_logo.png";
import apexLogo from "./../../media/apex_charts_logo.png";
import polygonLogo from "./../../media/polygon_logo.png";
import reactRouterLogo from "./../../media/react_router_logo.png";
import dribbleLogo from "./../../media/dribble_logo.png";
import confettie from "./../../media/confetti_logo.png";
import country_logo from "./../../media/country_logo.png";
import gh_logo from "./../../media/gh_logo.png";
import figma_logo from "./../../media/figma_logo.png";

function Overview() {
  // Grouped up the sources together, a consistent styling is maintained,
  const sources = [
    {
      name: "Design Inspiration (Dribble)",
      url: "https://dribbble.com/shots/15501287-Finance-Dashboard-Design",
      image: dribbleLogo,
    },
    {
      name: "Polygon API",
      url: "https://polygon.io/products",
      image: polygonLogo,
    },
    {
      name: "Apex Charts API",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: apexLogo,
    },
    {
      name: "African Countries API",
      url: "https://restcountries.com",
      image: country_logo,
    },
    {
      name: "Confetti Animation API ",
      url: "https://www.npmjs.com/package/react-confetti",
      image: confettie,
    },
    {
      name: "Redux",
      url: "https://apexcharts.com/react-chart-demos/candlestick-charts/",
      image: reduxLogo,
    },
    {
      name: "React Router",
      url: "https://reactrouter.com/docs/en/v6",
      image: reactRouterLogo,
    },
    {
      name: "React",
      url: "https://reactjs.org/docs/getting-started.html",
      image: reactLogo,
    },
    {
      name: "Heroku",
      url: "https://www.heroku.com/",
      image: heroku_logo,
    },
    {
      name: "Github",
      url: "https://github.com/frimpongopoku/chart-fest-IP2",
      image: gh_logo,
    },
    {
      name: "Figma",
      url: "https://www.figma.com/file/biHSBTYYtTw4JUJ8zlAmOW/IP2-Mockup?node-id=5%3A530",
      image: figma_logo,
    },
  ];
  return (
    <div className="content-wrapper">
      <h4 className="page-subtitle">Preamble</h4>
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
          <h4 className="page-subtitle">Resources We Used</h4>
          <ol className="ol">
            {sources.map((it, index) => {
              // Now, only this piece of HTML is used for all the sources listed
              return (
                <li key={index.toString()} style={{}} className="li">
                  <img src={it.image} alt="media" />
                  <a
                    rel="noreferrer"
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
          <h3 className="page-subtitle">Source Files</h3>
          <a
            rel="noreferrer"
            className="app-link touchable-opacity"
            href="https://github.com/frimpongopoku/chart-fest-IP2"
            target="_blank"
          >
            Github Repository
          </a>
          <br />
          <a
            rel="noreferrer"
            className="app-link touchable-opacity"
            href="https://www.figma.com/file/biHSBTYYtTw4JUJ8zlAmOW/IP2-Mockup?node-id=5%3A530"
            target="_blank"
          >
            Mockups on Figma
          </a>
          <h3 className="page-subtitle">Assignment Description Source</h3>
          <a
            rel="noreferrer"
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
