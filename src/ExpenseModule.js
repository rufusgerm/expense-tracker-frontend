import React from "react";
import { Segment } from "semantic-ui-react";
import "./ExpenseModule.css";
import { ExpenseItem } from "./ExpenseItem";

const expenseItems = [
  {
    id: 1,
    name: "UPF Shirt",
    value: 35.0,
    rollover: true,
    expense: true,
  },
  {
    id: 2,
    name: "Water Bottle",
    value: 15.0,
    rollover: true,
    expense: true,
  },
  {
    id: 3,
    name: "Cat Money",
    value: 60.0,
    rollover: true,
    expense: false,
  },
];

export const ExpenseModule = () => {
  return (
    <div className="expense-module">
      <Segment.Group>
        <Segment size="huge">Top</Segment>{" "}
        {/* Should be componentized to a total budget bar */}
        {expenseItems.map((item) => {
          return <ExpenseItem item={item} />;
        })}
      </Segment.Group>
    </div>
  );
};
