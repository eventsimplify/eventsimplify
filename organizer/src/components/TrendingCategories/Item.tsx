import React from "react";

import styles from "./Item.module.css";

const Item = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3>Music</h3>
      </div>
    </div>
  );
};

export default Item;
