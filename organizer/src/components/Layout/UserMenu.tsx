import React from "react";
import { useRouter } from "next/router";

import { QuestionOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";

import { useAppContext } from "@/contexts/AppProvider";
import { AuthService } from "@/services";

const UserMenu = () => {
  const router = useRouter();
  const { user } = useAppContext();

  const onClick: MenuProps["onClick"] = async (e) => {
    if (e.key === "logout") {
      await AuthService.logout();
      router.push("/auth/login");
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
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    />
  );
};

export default UserMenu;
