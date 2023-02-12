import React from "react";

import { QuestionOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";

const UserMenu = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const userMenuItems = [
    {
      label: "Help & Support",
      key: "help-and-support",
      icon: <QuestionOutlined />,
    },
    {
      label: "Bipul Poudel",
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
    <div>
      <Menu
        onClick={onClick}
        mode="horizontal"
        items={userMenuItems}
        style={{ height: "60px", lineHeight: "60px", width: "100%" }}
      />
    </div>
  );
};

export default UserMenu;
