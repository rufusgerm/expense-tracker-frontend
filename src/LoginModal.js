import React, { useState } from "react";
import { Form, Modal, Input } from "semantic-ui-react";

export const LoginModal = (props) => {
  const [open, setOpen] = useState(props.open);

  const handleClose = () => {
    setOpen(false);
    props.close();
  };

  return (
    <Modal
      dimmer
      onOpen={() => setOpen(true)}
      onClose={handleClose}
      open={open}
    >
      <Modal.Content>
        <Form>
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="email@domain.com"
            error={{
              content: "Please enter a valid email address",
              pointing: "below",
            }}
          />
          <Form.Field label="Password" control={Input} placeholder="password" />
        </Form>
      </Modal.Content>
    </Modal>
  );
};
