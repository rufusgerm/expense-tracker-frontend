import React from "react";
import { NavBar } from "./NavBar";
import { ExpenseModule } from "./ExpenseModule";
import { ExpenseAppProvider } from "./ExpenseAppProvider";

function App() {
  return (
    <ExpenseAppProvider>
      <NavBar />
      <ExpenseModule />
    </ExpenseAppProvider>
  );
}

export default App;
