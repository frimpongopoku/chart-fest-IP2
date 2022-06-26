import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../widgets/sidebar/Sidebar";
import Authors from "./authors/Authors";
import Bubble from "./bubble/Bubble";
import Candle from "./candle/Candle";
import { items } from "./constants";
import Overview from "./overview/Overview";
import Trends from "./trend/Trends";

function PageWrapper() {
  const { pagename } = useParams();
  const pages = {
    overview: <Overview />,
    bubble: <Bubble />,
    candles: <Candle />,
    trends: <Trends />,
    authors: <Authors />,
  };
  const pageComponent = pages[pagename];
  const pageObj = items.find((it) => it.key === pagename);

  return (
    <div className="page-styles page-wrapper-container">
      <Sidebar active={pagename} />
      <div className="page-content">
        <h1
          style={{ color: pageObj?.color || "var(--app-theme-orange)" }}
          className="page-title"
        >
          {pageObj.nickname || pagename || "..."}
        </h1>
        {pageComponent || <h1>Sorry, this page could not be found</h1>}
      </div>
    </div>
  );
}

export default PageWrapper;
