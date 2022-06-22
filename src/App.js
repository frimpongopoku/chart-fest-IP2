import "./index.css";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";

const boxes = [
  { name: "Overview", color: "var(--app-theme-orange)" },
  { name: "Bubble Chart", color: "var(--app-theme-cyan)" },
  { name: "Trend Line", color: "var(--app-theme-light)" },
  { name: "Candle Sticks", color: "var(--app-theme-pink)" },
];
function App() {
  return (
    <div className="app-root page-styles">
      <div className="app-content">
        {boxes.map((it, key) => {
          return (
            <div
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
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
