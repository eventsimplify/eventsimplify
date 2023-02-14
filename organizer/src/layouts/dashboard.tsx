import React from "react";

import { Layout } from "antd";

import Appbar from "@/components/Layout/Appbar";
import styles from "./dashboard.module.css";

const { Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContent}>
        <Content className={styles.content}>
          <Appbar />
          <div className={styles.contentBody}>{children}</div>
        </Content>
      </div>
    </div>
  );
};

export default DashboardLayout;
