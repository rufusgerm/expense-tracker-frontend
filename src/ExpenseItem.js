import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import { ExpenseBtn } from "./ExpenseBtn";

export const ExpenseItem = (props) => {
  return (
    <Segment.Group key={props.item.id}>
      <Segment color={props.item.expense ? "red" : "green"}>
        <Grid style={{ maxHeight: "50px" }}>
          <Grid.Column
            textAlign="center"
            style={{
              width: "12%",
              fontSize: "18px",
            }}
          >
            {(props.item.expense ? `-` : `+`) + `$` + props.item.value}
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            style={{
              width: "68%",
              fontSize: "18px",
            }}
          >
            {props.item.name}
          </Grid.Column>
          <ExpenseBtn name="Modify" icon="edit" />
          <ExpenseBtn name="Delete" icon="trash" />
        </Grid>
      </Segment>
    </Segment.Group>
  );
};
