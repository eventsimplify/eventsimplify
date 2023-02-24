import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useAppContext } from "@/contexts/AppProvider";

import GetStartedHeader from "@/components/Layout/GetstartedHeader";
import Loader from "@/components/Loader";
import Redirect from "@/components/Redirect";

import styles from "./layouts.module.css";
import { InvitationService } from "@/services";
import { useRouter } from "next/router";

const { Content } = Layout;

const InvitationsLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, getUser, setInvitation, invitation } = useAppContext();
  const router = useRouter();
  const [invitationLoading, setInvitationLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getInvitation = async () => {
    const invitation = await InvitationService.getInvitationDetails({
      token: router.query.token as string,
    });
    setInvitation(invitation);
    setInvitationLoading(false);
  };

  useEffect(() => {
    if (router.query.token && user) {
      getInvitation();
    }
  }, [router.query.token, user]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Redirect to="/auth/login" redirect={window.location.href} />;
  }

  if (invitationLoading) {
    return <Loader />;
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

export default InvitationsLayout;
