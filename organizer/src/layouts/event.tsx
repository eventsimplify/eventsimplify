import React from "react";

import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";
import { Layout } from "antd";

import styles from "./dashboard.module.css";
import Breadcrumb from "@/components/Layout/Breadcrumb";

const { Content } = Layout;

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.eventContent}>
        <Content className={styles.content}>
          <Navbar />
          <div className={styles.contentBody}>
            <Breadcrumb />
            {children}
          </div>
        </Content>
      </div>
    </div>
  );
};

export default EventLayout;
