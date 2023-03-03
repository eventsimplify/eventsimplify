import React, { useMemo } from "react";
import { Space, Typography } from "antd";

import { useTeamManagementContext } from "@/contexts/TeamManagementProvider";
import Item from "./Item";

const { Title } = Typography;

const Permissions = () => {
  const { permissions } = useTeamManagementContext();

  const permissionsByType = useMemo(() => {
    return permissions.reduce((acc, permission) => {
      const { action } = permission;

      const type = action.split(".")[0];
      const name = action.split(".")[1];

      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push({
        id: permission.id,
        action: name,
      });
      return acc;
    }, {} as any);
  }, [permissions]);

  return (
    <div>
      <Title level={5}>Permissions</Title>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        {Object.keys(permissionsByType).map((type) => (
          <Item key={type} type={type} options={permissionsByType[type]} />
        ))}
      </Space>
    </div>
  );
};

export default Permissions;
