import React from "react";

import { QuestionOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";

import { useAppContext } from "@/contexts/AppProvider";

const UserMenu = () => {
  const { user } = useAppContext();

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "logout") {
      // logout();
    }
  };

  const userMenuItems = [
    {
      label: "Help & Support",
      key: "help-and-support",
      icon: <QuestionOutlined />,
    },
    {
      label: user?.name,
      key: "user",
      icon: <UserOutlined />,
      children: [
        {
          label: "Profile",
          key: "profile",
        },
        {
          label: "Logout",
          key: "logout",
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      items={userMenuItems}
      style={{
        height: "60px",
        lineHeight: "60px",
        minWidth: "200px",
      }}
    />
  );
};

export default UserMenu;
