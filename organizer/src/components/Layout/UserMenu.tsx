import React from "react";
import { useRouter } from "next/router";

import { Avatar, Dropdown, Typography, MenuProps, Space } from "antd";

import { useAppContext } from "@/contexts/AppProvider";
import { AuthService } from "@/services";

import styles from "./layout.module.css";

const { Text, Paragraph } = Typography;

const UserMenu = () => {
  const router = useRouter();
  const { user } = useAppContext();

  const onClick: MenuProps["onClick"] = async (e) => {
    if (e.key === "logout") {
      await AuthService.logout();
      router.push("/auth/login");
    }
  };

  const userMenuItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
    },
    {
      label: "Logout",
      key: "logout",
    },
  ];

  return (
    <Dropdown menu={{ items: userMenuItems }} trigger={["click"]}>
      <div className={styles.userMenu}>
        <Avatar style={{ backgroundColor: "#1677FF" }}>BP</Avatar>
        <Text strong>{user?.name}</Text>
      </div>
    </Dropdown>
  );
};

export default UserMenu;
