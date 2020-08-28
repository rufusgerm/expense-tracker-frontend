import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { ListItem } from "./ListItem";
import { BudgetBar } from "./BudgetBar";
import { useExpenseState } from "./ExpenseAppProvider";
import "./ExpenseModule.css";

export const ExpenseModule = () => {
  const state = useExpenseState();
  const expenseObject = state.selectedList;
  const budgetMax = expenseObject.budgetMax;

  let budgetUsed = budgetMax;

  const expenseItemComponents = expenseObject.expenseItems.map((expense) => {
    budgetUsed += expense.isExpense ? -expense.cost : expense.cost;
    return (
      <ListItem
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
            {expenseObject.listName}
          </Header>
          <BudgetBar budgetUsed={budgetUsed.toFixed(2)} budgetMax={budgetMax} />
        </Segment>
        {expenseItemComponents}
      </Segment.Group>
    </div>
  );
};
