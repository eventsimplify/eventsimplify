import React from "react";

import { Layout } from "antd";

import styles from "./dashboard.module.css";
import GetStartedHeader from "@/components/Layout/GetstartedHeader";

const { Content } = Layout;

const GetStartedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContent}>
        <Content className={styles.content}>
          <GetStartedHeader />
          <div className={styles.contentBody}>{children}</div>
        </Content>
      </div>
    </div>
  );
};

export default GetStartedLayout;
