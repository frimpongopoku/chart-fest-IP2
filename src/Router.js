import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { bindActionCreators } from "redux";
import App from "./App";
import PageWrapper from "./pages/PageWrapper";
import { fetchInitialContent } from "./redux/actions/actions";

function Router({ fetchContent }) {
  useEffect(() => {
    fetchContent();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/pages/:pagename" element={<PageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchContent: fetchInitialContent }, dispatch);
};
export default connect(null, mapDispatchToProps)(Router);
