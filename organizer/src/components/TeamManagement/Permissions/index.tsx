import React from "react";
import { Space, Typography } from "antd";
import PermissionItem from "./Item";
import { useTeamManagementContext } from "@/contexts/TeamManagementProvider";
import IPermission from "@/interfaces/IPermission";

const { Title } = Typography;

const Permissions = () => {
  const { permissions } = useTeamManagementContext();

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Title level={5}>Permissions</Title>
      <Space direction="vertical" size="large">
        {Object.keys(permissions as IPermission[]).map((type) => (
          <PermissionItem
            key={type}
            type={type}
            // @ts-ignore
            permissions={permissions[type]}
          />
        ))}
      </Space>
    </Space>
  );
};

export default Permissions;
