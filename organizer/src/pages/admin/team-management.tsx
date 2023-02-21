import React, { ReactElement, useEffect, useState } from "react";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";

import DashboardLayout from "@/layouts/dashboard";
import { useRouter } from "next/router";

import Staffs from "@/components/TeamManagement/Staffs";
import Roles from "@/components/TeamManagement/Roles";

const items: TabsProps["items"] = [
  {
    key: "staffs",
    label: "Staffs / Users",
    children: <Staffs />,
  },
  {
    key: "roles",
    label: "Roles / Permissions",
    children: <Roles />,
  },
];

const TeamManagement = () => {
  const router = useRouter();

  const [activeKey, setActiveKey] = useState("staffs");

  useEffect(() => {
    if (router.query.tab) {
      setActiveKey(router.query.tab.toString());
    }
  }, [router.query.tab]);

  const onChange = (key: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, tab: key },
    });
    setActiveKey(key);
  };

  if (activeKey === "") {
    return null;
  }

  return (
    <Card>
      <Tabs activeKey={activeKey} items={items} onChange={onChange} />
    </Card>
  );
};

TeamManagement.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default TeamManagement;
