import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Overview from "./pages/overview/Overview";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route  path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
