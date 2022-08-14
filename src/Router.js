import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { bindActionCreators } from "redux";
import App from "./App";
import PageWrapper from "./pages/PageWrapper";
import { fetchInitialContent } from "./redux/actions/actions";

/**
 * This is the entry point of our app. 
 * Here we have a defined routes, and made initial API calls 
 * We store the content we have in our redux state to then be used by 
 * The components that require them
 * @param {*} param0 
 * @returns 
 */
function Router({ fetchContent }) {
  useEffect(() => {
    fetchContent(); // Here is where the API call is made. Its the beginning of the entire APP
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
