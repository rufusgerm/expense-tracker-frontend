import React from "react";
import { Progress } from "semantic-ui-react";

export const BudgetBar = () => {
  return (
    <Progress
      size="large"
      value={90}
      total={100}
      progress="ratio"
      indicating
      active={false}
      style={{ marginBottom: "-10px" }}
    />
  );
};
