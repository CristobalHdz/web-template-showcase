import React from "react";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import ScrollToTop from "./utils/ScrollToTop";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    {/* <BrowserRouter> */}
    <ScrollToTop />
    <App />
    {/* </BrowserRouter> */}
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
