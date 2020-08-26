import React from "react";
import { Grid, Popup, Button } from "semantic-ui-react";

export const ExpenseBtn = (props) => {
  return (
    <Grid.Column style={{ width: "10%", padding: "0" }} textAlign="center">
      <Popup
        content={props.name + ` Expense Item`}
        trigger={
          <Button
            onClick={() => alert("No function yet!")}
            textAlign="center"
            style={{ background: "none", marginTop: "5px" }}
          >
            <i className={`fas fa-` + props.icon}></i>
          </Button>
        }
      ></Popup>
    </Grid.Column>
  );
};
