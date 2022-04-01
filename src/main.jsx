import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";

const app = <App />;
const root = document.getElementById("root");

ReactDOM.render(<React.StrictMode>{app}</React.StrictMode>, root);
