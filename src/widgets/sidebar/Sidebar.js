import React from "react";
import { useNavigate } from "react-router-dom";
import { items } from "../../pages/constants";
import "./sidebar.css";

function Sidebar({ active }) {
  const navigateTo = useNavigate();
  return (
    <div className="sidebar-root elevate-2">
      {items.map(({ name, icon, key, color, url, hidden }, index) => {
        const isActive = active === key;
        if (hidden) return <></>;
        return (
          <div
            onClick={() => navigateTo(url || "#")}
            key={index.toString()}
            className={`sidebar-small-box touchable-opacity ${
              isActive ? "item-active" : ""
            }`}
            style={{ background: isActive ? color : "transparent" }}
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
