import "./index.css";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { items } from "./pages/constants";
import { fetchInitialContent } from "./redux/actions/actions";

// This is the list of available options on our landing page. 
// We loop over the array and transform the object with our defined templates to show 
// as the sqaure boxes you see
const boxes = [
  { name: "Overview", color: "var(--app-theme-orange)", key: "overview" },
  {
    name: "Countries & Population",
    color: "var(--app-theme-cyan)",
    key: "population",
  },
  { name: "Bitcoin Trend", color: "var(--app-theme-light)", key: "bitcoin" },
  { name: "Apple Stock Prices", color: "var(--app-theme-pink)", key: "stocks" },
];
function App() {
  const navigateTo = useNavigate();

  return (
    <div className="app-root page-styles">
      <div className="app-content">
        {boxes.map((it, key) => {
          const pageObj = items.find((item) => item.key === it.key);
          return (
            <div
              onClick={() => navigateTo(pageObj?.url)}
              key={key}
              className="box touchable-opacity"
              style={{ "--back-color": it.color }}
            >
              <p>{it.name}</p>
            </div>
          );
        })}
        <div
          onClick={() => navigateTo("pages/technology")}
          className="box touchable-opacity"
          style={{
            "--back-color": "#45a589",
            width: "100%",
            height: "12vh",
            flexBasis: "82%",
          }}
        >
          <p>Web Technology</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchContent: fetchInitialContent }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
