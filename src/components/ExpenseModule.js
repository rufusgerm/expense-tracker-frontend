import React from "react";
import { Segment, Header } from "semantic-ui-react";
import "./ExpenseModule.css";
import { ExpenseItem } from "./ExpenseItem";
import { BudgetBar } from "./BudgetBar";
import expensesList from "../data/FakeData.json";

export const ExpenseModule = () => {
  const expenseObject = expensesList.expenseLists[1];
  const budgetMax = expenseObject.budgetMax;

  let budgetUsed = budgetMax;

  const budgetComponents = expenseObject.expenseItems.map((item) => {
    budgetUsed += item.isExpense ? -item.cost : item.cost;
    return <ExpenseItem key={item.name + item.id} item={item} />;
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
        {budgetComponents}
      </Segment.Group>
    </div>
  );
};
