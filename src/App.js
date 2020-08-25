import React from "react";
import { NavBar } from "./Nav";
import { ExpenseModule } from "./ExpenseModule";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ExpenseModule />
    </div>
  );
}

export default App;
