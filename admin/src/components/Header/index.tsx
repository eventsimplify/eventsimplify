import React from "react";
import { Layout } from "antd";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <img src="https://www.blanxer.com/logo.svg" className={styles.logo} />

      <div className={styles.menu}>
        <div className={styles.menuItem}>Home</div>
        <div className={styles.menuItem}>About</div>
        <div className={styles.menuItem}>Contact</div>
      </div>

      <div className={styles.auth}>
        <div className={styles.menuItem}>Login</div>
        <div className={styles.menuItem}>Register</div>
      </div>
    </Layout.Header>
  );
};

export default Header;
