import React, { useMemo, useState } from "react";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";

import DashboardLayout from "@/layouts/dashboard";
import { useRouter } from "next/router";
import Staffs from "@/components/TeamManagement/Staffs";

const items: TabsProps["items"] = [
  {
    key: "staffs",
    label: "Staffs / Users",
    children: <Staffs />,
  },
  {
    key: "roles",
    label: "Roles / Permissions",
    children: `Content of Tab Pane 2`,
  },
];

const TeamManagement = () => {
  const router = useRouter();

  const [activeKey, setActiveKey] = useState(
    useMemo(() => {
      const tab = router.query.tab;
      return tab ? tab.toString() : "staffs";
    }, [router.query.tab])
  );

  const onChange = (key: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, tab: key },
    });
    setActiveKey(key);
  };

  return (
    <DashboardLayout>
      <Card>
        <Tabs activeKey={activeKey} items={items} onChange={onChange} />
      </Card>
    </DashboardLayout>
  );
};

export default TeamManagement;
