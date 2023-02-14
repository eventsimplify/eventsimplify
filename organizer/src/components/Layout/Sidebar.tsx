import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import styles from "./layout.module.css";
import { sidebarItems } from "@/bootstrap/config";

const Sidebar: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([
    "dashboard",
  ]);

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedKeys([e.key]);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo} />
      <div className={styles.menu}>
        <Menu
          onClick={onClick}
          style={{ width: "100%", height: "100vh", overflow: "auto" }}
          mode="inline"
          items={sidebarItems}
          selectedKeys={selectedKeys}
        />
      </div>
    </div>
  );
};

export default Sidebar;
