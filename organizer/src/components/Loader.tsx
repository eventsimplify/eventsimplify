import React from "react";
import { Spin } from "antd";

import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
