import React, { useState } from "react";
import { Button, Checkbox, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import capitalize from "lodash.capitalize";
import { useTeamManagementContext } from "@/contexts/TeamManagementProvider";
import { IPermissionItem } from "@/interfaces/IPermission";

const { Text, Paragraph } = Typography;

const PermissionItem = ({
  type,
  permissions,
}: {
  type: string;
  permissions: IPermissionItem[];
}) => {
  const title = capitalize(type);
  const [expanded, setExpanded] = useState(false);

  const { selectedPermissions, setSelectedPermissions } =
    useTeamManagementContext();

  const handleSelectAll = (e: any) => {
    const index = selectedPermissions[type];

    if (e.target.checked) {
      if (!index) {
        const newSelectedPermissions = {
          ...selectedPermissions,
          [type]: permissions.map((permission) => permission.action),
        };
        setSelectedPermissions(newSelectedPermissions);
      } else {
        const newSelectedPermissions = {
          ...selectedPermissions,
          [type]: permissions.map((permission) => permission.action),
        };
        setSelectedPermissions(newSelectedPermissions);
      }
    } else {
      if (index !== undefined) {
        const newSelectedPermissions = {
          ...selectedPermissions,
        };
        delete newSelectedPermissions[type];

        setSelectedPermissions(newSelectedPermissions);
      }
    }
  };

  const isSelected = (permission: IPermissionItem) => {
    const index = selectedPermissions[type];
    if (index) {
      return index?.includes(permission.action);
    }
    return false;
  };

  const handleSelect = (e: any, permission: IPermissionItem) => {
    const index = selectedPermissions[type];

    if (e.target.checked) {
      if (!index) {
        const newSelectedPermissions = {
          ...selectedPermissions,
          [type]: [permission.action],
        };
        setSelectedPermissions(newSelectedPermissions);
      } else {
        const newSelectedPermissions = {
          ...selectedPermissions,
          [type]: [...index, permission.action],
        };
        setSelectedPermissions(newSelectedPermissions);
      }
    } else {
      if (index !== undefined) {
        const newSelectedPermissions = {
          ...selectedPermissions,
          [type]: index.filter(
            (action: string) => action !== permission.action
          ),
        };

        setSelectedPermissions(newSelectedPermissions);

        if (newSelectedPermissions[type].length === 0) {
          delete newSelectedPermissions[type];
          setSelectedPermissions(newSelectedPermissions);
        }
      }
    }
  };

  return (
    <Space direction="vertical">
      <Space align="start">
        <Button
          type="text"
          icon={<DownOutlined rotate={expanded ? 0 : 180} />}
          onClick={() => setExpanded(!expanded)}
        />
        <div>
          <Text strong>{title}</Text>
          <Paragraph type="secondary">
            {`${title} permissions allow you to control what users can`}
          </Paragraph>
        </div>
      </Space>
      {expanded && (
        <Space
          direction="vertical"
          style={{
            marginLeft: 50,
          }}
        >
          <Checkbox onChange={handleSelectAll}>Select all</Checkbox>
          {permissions.map((permission) => (
            <Checkbox
              key={permission.action}
              checked={isSelected(permission)}
              onChange={(e) => handleSelect(e, permission)}
            >
              {permission.name}
            </Checkbox>
          ))}
        </Space>
      )}
    </Space>
  );
};

export default PermissionItem;
