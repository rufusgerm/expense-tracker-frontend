import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import { ExpenseBtn } from "./ExpenseBtn";
import "./ListItem.css";

export const ListItem = (props) => {
  const createItem = () => {
    const itemDetails =
      props.type === "item" ? createExpenseDetails() : createListDetails();
    return (
      <Segment color={itemDetails.color}>
        <Grid style={{ maxHeight: "50px" }}>
          <Grid.Column
            textAlign="center"
            style={{
              width: "20%",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {itemDetails.leftValue}
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            style={{
              width: "60%",
              fontSize: "18px",
            }}
          >
            {itemDetails.centerValue}
          </Grid.Column>
          <ExpenseBtn type={props.type} name="Modify" icon="edit" />
          <ExpenseBtn type={props.type} name="Delete" icon="trash" />
        </Grid>
      </Segment>
    );
  };
  function createExpenseDetails() {
    const color = props.item.isExpense ? "red" : "green";
    const itemCost = props.item.cost.toFixed(2);
    const leftVal = props.item.isExpense ? `-$${itemCost}` : `$${itemCost}`;
    const centerVal = props.item.expenseName;
    return {
      color: color,
      leftValue: leftVal,
      centerValue: centerVal,
    };
  }

  function createListDetails() {
    const totalPurchases = determineTotalPurchases();
    return {
      color: ``,
      leftValue: `$${totalPurchases} Left`,
      centerValue: `${props.item.listName}`,
    };
  }

  function determineTotalPurchases() {
    let totalCost = props.item.budgetMax;
    props.item.expenseItems.map(
      (expense) =>
        (totalCost += expense.isExpense ? -expense.cost : expense.cost)
    );
    return totalCost.toFixed(2);
  }

  return (
    <Segment.Group
      onClick={() => props.onClick()}
      className={`expense-${props.type} list-item`}
      key={props.item.id}
    >
      {createItem()}
    </Segment.Group>
  );
};
