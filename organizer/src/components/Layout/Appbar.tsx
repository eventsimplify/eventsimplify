import React, { useMemo, useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";

import UserMenu from "./UserMenu";

import styles from "./layout.module.css";
import { appBarItems } from "@/bootstrap/config";

const { Header } = Layout;

const Appbar = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(
    useMemo(() => {
      const path = router.asPath;
      return path;
    }, [router])
  );

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
    setCurrent(e.key);
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
      <UserMenu />
    </Header>
  );
};

export default Appbar;
