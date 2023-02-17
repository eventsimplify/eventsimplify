import React, { useEffect } from "react";

import Sidebar from "@/components/Layout/Sidebar";
import { Layout } from "antd";

import styles from "./dashboard.module.css";
import Appbar from "@/components/Layout/Appbar";
import { useEventContext } from "@/contexts/EventProvider";
import { EventService } from "@/services";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const { Content } = Layout;

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  const { event, setEvent, loading, setLoading } = useEventContext();
  const router = useRouter();

  const getEvent = async () => {
    setLoading("get");

    const data = await EventService.detail(router.query.eventId as string);

    console.log(data);

    setEvent(data);
    setLoading("");
  };

  useEffect(() => {
    if (!event && router.query.eventId) {
      getEvent();
    }
  }, [event, router.query]);

  if (loading !== "" || !event) {
    return <Loader />;
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

export default EventLayout;
