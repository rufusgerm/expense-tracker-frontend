import React from "react";
import { Segment, Header, Button, Icon } from "semantic-ui-react";
import { ListItem } from "./ListItem";
import { BudgetBar } from "./BudgetBar";
import { useExpenseState, useExpenseDispatch } from "./ExpenseAppProvider";
import "./ExpenseModule.css";

export const ExpenseModule = () => {
  const state = useExpenseState();
  const dispatch = useExpenseDispatch();
  const expenseObject = state.selectedList;
  const budgetMax = expenseObject.budgetMax;

  let budgetUsed = budgetMax;

  const expenseItemComponents = expenseObject.expenseItems.map((expense) => {
    budgetUsed += expense.isExpense ? -expense.cost : expense.cost;
    return (
      <ListItem
        onClick={() =>
          alert("You clicked an expense item! No functionality yet!!")
        }
        key={expense.expenseName + expense.id}
        type={`item`}
        item={expense}
      />
    );
  });

  return (
    <div className="expense-module">
      <Segment.Group>
        <Segment size="huge">
          <Header as="h2" textAlign="center">
            <Button
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginRight: "25%",
                marginLeft: "-25%",
                background: "none",
              }}
              onClick={() => dispatch({ type: "showAllLists" })}
              icon
            >
              <Icon name="arrow left" />
            </Button>
            {expenseObject.listName}
          </Header>
          <BudgetBar budgetUsed={budgetUsed.toFixed(2)} budgetMax={budgetMax} />
        </Segment>
        {expenseItemComponents}
      </Segment.Group>
    </div>
  );
};
