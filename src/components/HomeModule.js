import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { useExpenseState, useExpenseDispatch } from "./ExpenseAppProvider";
import { ListItem } from "./ListItem";
import "./HomeModule.css";

export const HomeModule = () => {
  const state = useExpenseState();
  const dispatch = useExpenseDispatch();
  const currentLists = state.expenseLists;

  const expenseListComponents = currentLists.map((expenseList) => {
    return (
      <ListItem
        onClick={() => {
          console.log(`Item Clicked! ID = ${expenseList.id}`);
          dispatch({ type: "listSelected", payload: expenseList.id });
        }}
        key={expenseList.listName + expenseList.id}
        type={`list`}
        item={expenseList}
      />
    );
  });

  return (
    <div className={`home-module`}>
      <Segment.Group>
        <Segment size="huge">
          <Header as="h2" textAlign="center">
            Expenses Lists
          </Header>
        </Segment>
        {expenseListComponents}
      </Segment.Group>
    </div>
  );
};
