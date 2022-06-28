import "./index.css";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { items } from "./pages/constants";
import { fetchInitialContent } from "./redux/actions/actions";


const boxes = [
  { name: "Overview", color: "var(--app-theme-orange)", key: "overview" },
  { name: "Bubble Chart", color: "var(--app-theme-cyan)", key: "bubble" },
  { name: "Trend Line", color: "var(--app-theme-light)", key: "trends" },
  { name: "Candle Sticks", color: "var(--app-theme-pink)", key: "candles" },
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
