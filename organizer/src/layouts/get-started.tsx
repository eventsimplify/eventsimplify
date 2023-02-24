import React, { useEffect } from "react";
import { Layout } from "antd";

import styles from "./layouts.module.css";
import GetStartedHeader from "@/components/Layout/GetstartedHeader";
import Loader from "@/components/Loader";
import Redirect from "@/components/Redirect";
import { useAppContext } from "@/contexts/AppProvider";

const { Content } = Layout;

const GetStartedLayout = ({ children }: { children: React.ReactNode }) => {
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

  if (organization) {
    return <Redirect to="/admin/dashboard" />;
  }

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
