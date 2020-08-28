import React from "react";

import { useExpenseState } from "./ExpenseAppProvider";
import { NavBar } from "./NavBar";
import { HomeModule } from "./HomeModule";
import { ExpenseModule } from "./ExpenseModule";

function App() {
  const state = useExpenseState();
  return (
    <React.Fragment>
      <NavBar />
      {!state.selectedList ? <HomeModule /> : <ExpenseModule />}
    </React.Fragment>
  );
}

export default App;
