import React from "react";
import { Segment, Grid } from "semantic-ui-react";

export const ExpenseItem = (props) => {
  return (
    <Segment.Group key={props.item.id}>
      <Segment color={props.item.expense ? "red" : "green"}>
        <Grid style={{ height: "95%" }}>
          <Grid.Column
            textAlign="center"
            style={{
              width: "12%",
              borderRadius: "3px",
              fontSize: "22px",
            }}
          >
            ${props.item.value}
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            style={{
              width: "67%",
              fontSize: "22px",
            }}
          >
            {props.item.name}
          </Grid.Column>
          <Grid.Column style={{ width: "10%" }} textAlign="center">
            <i class="fas fa-edit"></i>
          </Grid.Column>
          <Grid.Column style={{ width: "10%" }} textAlign="center">
            <i class="fas fa-trash"></i>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
};
