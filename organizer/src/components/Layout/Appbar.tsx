import React, { useMemo, useState } from "react";
import { Button, Layout, Menu, MenuProps, Space } from "antd";
import { useRouter } from "next/router";
import { SwapOutlined } from "@ant-design/icons";

import UserMenu from "./UserMenu";

import styles from "./layout.module.css";
import { appBarItems } from "@/bootstrap/config";
import { useAppContext } from "@/contexts/AppProvider";

const { Header } = Layout;

const Appbar = () => {
  const router = useRouter();
  const { organizations } = useAppContext();
  const [current, setCurrent] = useState(
    useMemo(() => {
      const item = appBarItems?.find(
        (item) => item?.key && router.pathname.includes(item?.key as string)
      );

      if (item) return item?.key as string;

      const path = router.asPath;
      return path;
    }, [router])
  );

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
    setCurrent(e.key);
  };

  const onSwitchOrganization = () => {
    router.push("/admin/organizations");
  };

  return (
    <Header className={styles.appBarHeader}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={appBarItems}
        style={{ height: "60px", lineHeight: "60px", width: "100%" }}
      />
      <Space size="large">
        {organizations.length > 1 && (
          <Button
            type="primary"
            icon={<SwapOutlined />}
            onClick={onSwitchOrganization}
          >
            Switch organization
          </Button>
        )}

        <UserMenu />
      </Space>
    </Header>
  );
};

export default Appbar;
