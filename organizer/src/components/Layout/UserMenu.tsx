import React from "react";
import { useRouter } from "next/router";

import { LogoutOutlined, ProfileOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Space } from "antd";

import { useAppContext } from "@/contexts/AppProvider";
import { AuthService } from "@/services";

import styles from "./layout.module.css";
import { getFirstLetterFromName } from "@/utils";

const UserMenu = () => {
  const router = useRouter();
  const { user } = useAppContext();

  const logOut = async () => {
    await AuthService.logout();
    router.push("/auth/login");
  };

  const userMenuItems: MenuProps["items"] = [
    {
      label: (
        <Space>
          <Avatar src={user?.name}>
            {getFirstLetterFromName(user?.name || "")}
          </Avatar>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {user?.name}
            </span>
            <span>{user?.email}</span>
          </div>
        </Space>
      ),
      key: "name",
      onMouseEnter: () => {},
    },
    {
      type: "divider",
    },
    {
      icon: <ProfileOutlined />,
      label: "Profile",
      key: "profile",
    },
    {
      icon: <LogoutOutlined />,
      label: "Logout",
      key: "logout",
      onClick: logOut,
    },
  ];

  return (
    <Dropdown menu={{ items: userMenuItems }} trigger={["click"]} arrow>
      <div className={styles.userMenu}>
        <Avatar style={{ backgroundColor: "#1677FF" }}>
          {getFirstLetterFromName(user?.name || "")}
        </Avatar>
      </div>
    </Dropdown>
  );
};

export default UserMenu;
