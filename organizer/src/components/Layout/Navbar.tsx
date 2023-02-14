import React from "react";
import { Button, Layout } from "antd";

import styles from "./layout.module.css";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className={styles.navBarHeader}>
      <div />
      <Button type="primary">Logout</Button>
    </Header>
  );
};

export default Navbar;
