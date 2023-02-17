import React, { useEffect, useMemo, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import styles from "./layout.module.css";
import { sidebarItems } from "@/bootstrap/config";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(
    useMemo(() => {
      const path = router.pathname;
      return path;
    }, [router])
  );

  const onClick: MenuProps["onClick"] = (e) => {
    router.push({
      pathname: e.key,
      query: router.query,
    });
    setCurrent(e.key);
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
          selectedKeys={[current]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
