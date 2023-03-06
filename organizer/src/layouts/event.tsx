import React from "react";

import Sidebar from "@/components/Layout/Sidebar";
import { Layout } from "antd";

import styles from "./layouts.module.css";
import Appbar from "@/components/Layout/Appbar";
import EventProvider, { useEventContext } from "@/contexts/EventProvider";
import Loader from "@/components/Loader";
import NotFound from "@/components/NotFound";

const { Content } = Layout;

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  const { event, loading } = useEventContext();

  if (loading === "event") {
    return <Loader />;
  }

  if (!event) {
    return <NotFound />;
  }

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

const EventLayoutWithContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EventProvider>
      <EventLayout>{children}</EventLayout>
    </EventProvider>
  );
};

export default EventLayoutWithContext;
