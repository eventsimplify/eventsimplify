import React from "react";
import { Spin } from "antd";

import styles from "./loader.module.css";

const Loader = ({ fullPage = true }: { fullPage?: boolean }) => {
  return (
    <div className={fullPage ? styles.loaderFull : styles.loader}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
