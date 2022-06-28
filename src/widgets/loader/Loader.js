import React from "react";

function Loader({ text = "Loading..." }) {
  return (
    <center style={{ width: "100%" }}>
      <i
        className="fa fa-spinner fa-spin"
        style={{ fontSize: "40px", color: "white", marginBottom: 6 }}
      />
      <br /> 
      <small>{text}</small>
    </center>
  );
}

export default Loader;
