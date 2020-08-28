import React from "react";
import { Progress } from "semantic-ui-react";

export const BudgetBar = (props) => {
  return (
    <Progress
      size="large"
      value={props.budgetUsed}
      total={props.budgetMax}
      progress="ratio"
      indicating
      active={false}
      style={{ marginBottom: "-10px" }}
    />
  );
};
