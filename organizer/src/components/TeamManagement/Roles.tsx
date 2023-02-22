import React, { useEffect, useState } from "react";
import { Button, Divider, Space, Table } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import RoleForm from "./RoleForm";
import { IRole } from "@/interfaces";
import { RoleService } from "@/services";

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    width: "60%",
  },
  {
    title: "Total staffs on this role",
    dataIndex: "users",
    width: "30%",
    render: (text) => text.length,
  },
  {
    title: "Action",
    dataIndex: "type",
    width: "10%",
    render: (text) => (
      <Space>
        <Button icon={<EyeOutlined />} />
        {text === "default" ? null : <Button icon={<EditOutlined />} />}
        {text === "default" ? null : (
          <Button danger icon={<DeleteOutlined />} />
        )}
      </Space>
    ),
  },
];

const Roles = () => {
  const [loading, setLoading] = useState("");
  const [roles, setRoles] = useState<IRole[]>([]);

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = async () => {
    setLoading("roles");
    const data = await RoleService.getAll();
    setRoles(data || []);
    setLoading("");
  };

  return (
    <div>
      <div className="table-header">
        <div />
        <RoleForm getRoles={getRoles} />
      </div>
      <Divider />
      <Table
        rowKey={(record) => record.id.toString()}
        columns={columns}
        dataSource={roles}
        bordered
        pagination={false}
        loading={loading === "roles"}
      />
    </div>
  );
};

export default Roles;
