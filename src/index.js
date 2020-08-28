import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import { ExpenseAppProvider } from "./components/ExpenseAppProvider";

ReactDOM.render(
  <React.StrictMode>
    <ExpenseAppProvider>
      <App />
    </ExpenseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
