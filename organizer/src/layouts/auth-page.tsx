import React from "react";

import styles from "./layouts.module.css";

const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.auth}>
      <div className={styles.authCard}>{children}</div>
    </div>
  );
};

export default AuthPageLayout;
