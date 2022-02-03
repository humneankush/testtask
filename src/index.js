import React from "react";
import App from "./App";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./List";
// import './index.css'

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
