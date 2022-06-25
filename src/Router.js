import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Overview from "./pages/overview/Overview";
import PageWrapper from "./pages/PageWrapper";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/pages/:pagename" element={<PageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
