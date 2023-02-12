import React from "react";
import { Layout } from "antd";

import UserMenu from "./UserMenu";

import styles from "./layout.module.css";

const { Header } = Layout;

const GetStartedHeader = () => {
  return (
    <Header className={styles.appBarHeader}>
      <div />
      <UserMenu />
    </Header>
  );
};

export default GetStartedHeader;
