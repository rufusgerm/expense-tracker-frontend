import React, { useState, Fragment } from "react";
import { Menu, Container } from "semantic-ui-react";
import "./Nav.css";
import { LoginModal } from "./LoginModal";

const leftMenuItems = [
  { key: "expense-lists", active: true, name: "Expense Lists" },
  { key: "about-tracker", name: "About Tracker" },
  { key: "main-list", name: "Main List" },
];

export const NavBar = () => {
  const [activeItem, setActiveItem] = useState(leftMenuItems[0].key);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      {modalOpen && <LoginModal open={modalOpen} close={closeModal} />}
      <Menu items={leftMenuItems}>
        <Container>
          {leftMenuItems.map((item, idx) => {
            return (
              <Menu.Item
                key={item.key + idx}
                name={item.key}
                active={activeItem === item.key}
                onClick={() => setActiveItem(item.key)}
              >
                {item.name}
              </Menu.Item>
            );
          })}
        </Container>
        <Container>
          <Menu.Menu position="right" color="blue">
            <Menu.Item
              className="login-sign-up"
              name={`login-sign-up`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Login/Sign-Up
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </Fragment>
  );
};
