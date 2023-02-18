import React from "react";
import { Button, Divider, Space, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import RoleForm from "./RoleForm";

const users = [
  {
    id: 1,
    name: "Owner",
    totalUsers: 1,
  },
  {
    id: 2,
    name: "Admin",
    totalUsers: 5,
  },
  {
    id: 3,
    name: "Event Manager",
    totalUsers: 8,
  },
];

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    width: "60%",
  },
  {
    title: "Total staffs on this role",
    dataIndex: "totalUsers",
    width: "30%",
  },
  {
    title: "Action",
    width: "10%",
    render: () => (
      <Space>
        <Button icon={<EditOutlined />} />
        <Button danger icon={<DeleteOutlined />} />
      </Space>
    ),
  },
];

const Roles = () => {
  return (
    <div>
      <div className="table-header">
        <div />
        <RoleForm />
      </div>
      <Divider />
      <Table
        rowKey={(record) => record.id.toString()}
        columns={columns}
        dataSource={users}
        bordered
        pagination={false}
      />
    </div>
  );
};

export default Roles;
