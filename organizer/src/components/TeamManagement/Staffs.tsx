import React, { useEffect, useState } from "react";
import { Avatar, Button, Divider, Space, Table } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import StaffFilters from "../Filters/StaffFilters";
import InviteForm from "./InviteForm";
import { IUser } from "@/interfaces";
import { OrganizationService } from "@/services";
import { getFirstLetterFromName } from "@/utils";
import IInvitation from "@/interfaces/IInvitation";

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "user",
    width: "60%",
    render: (text) => {
      return (
        <Space>
          <Avatar src={text.name}>{getFirstLetterFromName(text.name)}</Avatar>
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
              {text.name}
            </span>
            <span>{text.email}</span>
          </div>
        </Space>
      );
    },
  },
  {
    title: "Role",
    dataIndex: "role",
    width: "20%",
  },
  {
    title: "Action",
    width: "20%",
    render: () => (
      <Space>
        <Button danger icon={<DeleteOutlined />} />
      </Space>
    ),
  },
];

const columnsInvitation: ColumnsType<any> = [
  {
    title: "Email",
    dataIndex: "email",
    width: "60%",
  },
  {
    title: "Role",
    dataIndex: "role",
    width: "20%",
  },
  {
    title: "Action",
    width: "20%",
    render: () => (
      <Space>
        <Button danger icon={<DeleteOutlined />} />
      </Space>
    ),
  },
];

const Staffs = () => {
  const [loading, setLoading] = useState("");
  const [staffs, setStaffs] = useState<IUser[]>([]);
  const [invitations, setInvitations] = useState<IInvitation[]>([]);

  const getStaffs = async () => {
    setLoading("staffs");
    const data = await OrganizationService.getStaff();
    setStaffs(data?.staffs || []);
    setInvitations(data?.invitations || []);
    setLoading("");
  };

  useEffect(() => {
    getStaffs();
  }, []);

  return (
    <div>
      <div className="table-header">
        <StaffFilters />
        <InviteForm getStaffs={getStaffs} />
      </div>
      <Divider />
      <Table
        rowKey={(record) => record.user.id}
        columns={columns}
        dataSource={staffs}
        bordered
        pagination={false}
        loading={loading === "staffs"}
      />
      <Divider orientation="left">Invitations</Divider>
      <Table
        rowKey={(record) => record.id}
        columns={columnsInvitation}
        dataSource={invitations}
        bordered
        pagination={false}
        loading={loading === "staffs"}
      />
    </div>
  );
};

export default Staffs;
