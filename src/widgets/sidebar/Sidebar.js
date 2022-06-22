import React from "react";
import "./sidebar.css";

const items = [
  { name: "Home", icon: "fa fa-home" },
  { name: "Overview", icon: "fa fa-dashboard" },
  { name: "Bubble", icon: "fa fa-circle" },
  { name: "Trend", icon: "fa fa-line-chart" },
  { name: "Candles", icon: "fa fa-btc" },
  { name: "Authors", icon: "fa fa-users" },
];
function Sidebar() {
  return (
    <div className="sidebar-root elevate-2">
      {items.map(({ name, icon }, index) => {
        return (
          <div
            key={index.toString()}
            className="sidebar-small-box touchable-opacity"
          >
            <i className={icon} />
            <small>{name}</small>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
