import React, { useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import { useExpenseState, useExpenseDispatch } from "./ExpenseAppProvider";
import * as Constants from "./DispatchConstants";

export const LoginModal = (props) => {
  const state = useExpenseState();
  const dispatch = useExpenseDispatch();

  const [open, setOpen] = useState(props.open);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setOpen(false);
    props.close();
    dispatch({ type: Constants.LOGIN_RESET });
  };

  const handleLoginAttempt = (e) => {
    e.preventDefault();
    dispatch({ type: Constants.LOGIN_ATTEMPT });
  };

  return (
    <Modal
      dimmer
      onOpen={() => setOpen(true)}
      onClose={handleClose}
      open={open}
    >
      <Modal.Content>
        <Form onSubmit={(e) => handleLoginAttempt(e)}>
          {props.error && <p style={{ color: "red" }}>{props.error}</p>}
          <Form.Input
            label="Enter username"
            value={username}
            placeholder={props.username ? props.username : "username"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Input
            label="Enter password"
            type="password"
            value={password}
            placeholder={props.password ? props.password : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={state.isLoading}>
            {state.isLoading ? `Loading...` : `Login`}
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
