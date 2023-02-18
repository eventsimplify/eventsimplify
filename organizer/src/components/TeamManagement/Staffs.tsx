import React from "react";
import { Avatar, Button, Divider, Space, Table, Tag } from "antd";

import type { ColumnsType } from "antd/es/table";
import StaffFilters from "../Filters/StaffFilters";
import StaffForm from "./StaffForm";

const users = [
  {
    id: 1,
    name: "John Brown",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jim Green",
    role: "Admin",
    status: "Active",
  },
];

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    width: "60%",
    render: (text) => <Avatar>BP</Avatar>,
  },
  {
    title: "Role",
    dataIndex: "ticketSold",
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "status",
    width: "20%",
    render: (text) => <Tag color="success">{text}</Tag>,
  },
  {
    title: "Action",
    width: "10%",
    render: () => (
      <Space>
        <Button danger />
      </Space>
    ),
  },
];

const Staffs = () => {
  return (
    <div>
      <div className="table-header">
        <StaffFilters />
        <StaffForm />
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

export default Staffs;
