import React from "react";

import Sidebar from "@/components/Layout/Sidebar";
import { Layout } from "antd";

import styles from "./dashboard.module.css";
import Appbar from "@/components/Layout/Appbar";

const { Content } = Layout;

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.eventContent}>
        <Content className={styles.content}>
          <Appbar />
          <div className={styles.contentBody}>{children}</div>
        </Content>
      </div>
    </div>
  );
};

export default EventLayout;
