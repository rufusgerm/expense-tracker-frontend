import React from "react";
import { Grid, Popup, Button } from "semantic-ui-react";

export const ExpenseBtn = (props) => {
  return (
    <Grid.Column style={{ width: "10%", padding: "0" }} textalign="center">
      <Popup
        content={props.name + ` Expense ${props.type}`}
        trigger={
          <Button
            onClick={(e) => {
              e.stopPropagation();
              alert("No function yet!");
            }}
            textalign="center"
            style={{ background: "none", marginTop: "5px" }}
          >
            <i className={`fas fa-` + props.icon}></i>
          </Button>
        }
      ></Popup>
    </Grid.Column>
  );
};
