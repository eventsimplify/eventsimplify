import React from "react";
import { Layout } from "antd";

import styles from "./dashboard.module.css";
import GetStartedHeader from "@/components/Layout/GetstartedHeader";
// import useAuth from "@/hooks/useAuth";
// import Loader from "@/components/Loader";
// import Redirect from "@/components/Redirect";

const { Content } = Layout;

const GetStartedLayout = ({ children }: { children: React.ReactNode }) => {
  // const { user, loading } = useAuth();

  // if (loading === "loading") {
  //   return <Loader />;
  // }

  // if (!user) {
  //   return <Redirect to="/auth/login" redirect="/get-started" />;
  // }

  // if (user.organization) {
  //   return <Redirect to="/admin/dashboard" />;
  // }

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
