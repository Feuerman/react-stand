import React from "react";
import ReactDOM from "react-dom";
import App from "./components/container/App";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;