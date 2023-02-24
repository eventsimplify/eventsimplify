import React from "react";
import { Button, Space, Table } from "antd";

import { DeleteOutlined, CopyOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import IInvitation from "@/interfaces/IInvitation";
import { message } from "../AntDMessage";
import { useTeamManagementContext } from "@/contexts/TeamManagementProvider";

const Invitations = () => {
  const { invitations, loading } = useTeamManagementContext();

  const copyInvitationsLink = ({ token }: { token: string }) => {
    navigator.clipboard.writeText(
      `http://localhost:3000/invitations?token=${token}`
    );

    message.success("Copied to clipboard");
  };

  const columns: ColumnsType<IInvitation> = [
    {
      title: "Email",
      dataIndex: "email",
      width: "60%",
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
    <Table
      rowKey={(record) => record.id}
      columns={columns}
      dataSource={invitations}
      bordered
      pagination={false}
      loading={loading !== ""}
    />
  );
};

export default Invitations;
