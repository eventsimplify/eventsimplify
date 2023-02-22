import React, { useEffect, useState } from "react";
import { Avatar, Button, Divider, Space, Table } from "antd";

import { DeleteOutlined, CopyOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import StaffFilters from "../Filters/StaffFilters";
import InviteForm from "./InviteForm";
import { IUser } from "@/interfaces";
import { OrganizationService } from "@/services";
import { getFirstLetterFromName } from "@/utils";
import IInvitation from "@/interfaces/IInvitation";
import { message } from "../AntDMessage";

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "user",
    width: "60%",
    render: (record) => {
      return (
        <Space>
          <Avatar src={record.name}>
            {getFirstLetterFromName(record.name)}
          </Avatar>
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
              {record.name}
            </span>
            <span>{record.email}</span>
          </div>
        </Space>
      );
    },
  },
  {
    title: "Role",
    dataIndex: "role",
    width: "20%",
    render: (text) => <span>{text?.name}</span>,
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

  useEffect(() => {
    getStaffs();
  }, []);

  const copyInvitationsLink = ({ token }: { token: string }) => {
    navigator.clipboard.writeText(
      `http://localhost:3000/invitations?token=${token}`
    );

    message.success("Copied to clipboard");
  };

  const getStaffs = async () => {
    setLoading("staffs");
    const data = await OrganizationService.getStaff();
    setStaffs(data?.staffs || []);
    setInvitations(data?.invitations || []);
    setLoading("");
  };

  const columnsInvitation: ColumnsType<IInvitation> = [
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
      render: (text, record: IInvitation) => (
        <Space>
          <Button
            type="primary"
            onClick={() => copyInvitationsLink({ token: record.token })}
            icon={<CopyOutlined />}
          />
          <Button danger icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="table-header">
        <StaffFilters />
        <InviteForm getStaffs={getStaffs} />
      </div>
      <Divider />
      <Table
        rowKey={(record) => record.id}
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
