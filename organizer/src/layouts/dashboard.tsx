import React, { useEffect } from "react";

import { Layout } from "antd";

import Appbar from "@/components/Layout/Appbar";
import styles from "./layouts.module.css";
import Loader from "@/components/Loader";
import Redirect from "@/components/Redirect";
import { useAppContext } from "@/contexts/AppProvider";

const { Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, getUser, organization } = useAppContext();

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Redirect to="/auth/login" />;
  }

  if (!organization) {
    return <Redirect to="/get-started" />;
  }

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
