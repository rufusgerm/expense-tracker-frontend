import React, { useReducer, useContext } from "react";
import expenseLists from "../data/FakeData.json";

const ExpenseStateContext = React.createContext();
const ExpenseDispatchContext = React.createContext();

const initial_state = {
  expenses_lists: expenseLists,
  isLoggedIn: false,
  isLoading: false,
  username: "",
  userToken: "",
  error: "",
};

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "loginAttempt": {
      console.log("login attempted!");
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "loginSuccess": {
      console.log("login successful!");
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "loginReset": {
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    }
    case "logout": {
      return initial_state;
    }
    default: {
      return {
        ...state,
        error: `Invalid action type submitted! Type: ` + action.type,
      };
    }
  }
};

export const ExpenseAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expensesReducer, initial_state);
  return (
    <ExpenseStateContext.Provider value={state}>
      <ExpenseDispatchContext.Provider value={dispatch}>
        {children}
      </ExpenseDispatchContext.Provider>
    </ExpenseStateContext.Provider>
  );
};

export const useExpenseState = () => {
  const context = useContext(ExpenseStateContext);
  if (!context) {
    throw new Error(
      "useExpenseState must be used within in ExpenseAppProvider"
    );
  }
  return context;
};

export const useExpenseDispatch = () => {
  const context = useContext(ExpenseDispatchContext);
  if (!context) {
    throw new Error(
      "useExpenseDispatch must be used within in ExpenseAppProvider"
    );
  }
  return context;
};
