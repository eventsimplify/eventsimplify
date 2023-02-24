import React, { useState } from "react";
import { Avatar, Button, Divider, Popconfirm, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

import InviteForm from "./InviteForm";
import Invitations from "./Invitations";

import { getFirstLetterFromName } from "@/utils";
import { useTeamManagementContext } from "@/contexts/TeamManagementProvider";
import { OrganizationService } from "@/services";

const Staffs = () => {
  const { staffs, loading, getStaffs } = useTeamManagementContext();

  const [open, setOpen] = useState<string | null>(null);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = (id: string) => {
    setOpen(id);
  };

  const handleConfirm = async () => {
    setConfirmLoading(true);

    await OrganizationService.removeStaff(open as string);

    await getStaffs();

    setOpen(null);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setOpen(null);
  };

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
      dataIndex: "id",
      width: "20%",
      render: (id) => (
        <Space>
          <Button icon={<EyeOutlined />} />
          <Popconfirm
            title="Are you sure to delete this staff?"
            description="This action cannot be undone"
            open={open === id}
            onConfirm={handleConfirm}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel}
            okText="Yes"
          >
            <Button
              danger
              icon={<DeleteOutlined />}
              loading={loading === "delete"}
              onClick={() => showPopconfirm(id)}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="table-header">
        <div />
        <InviteForm getStaffs={getStaffs} />
      </div>
      <Divider />
      <Table
        rowKey={(record) => record.id}
        dataSource={staffs}
        bordered
        pagination={false}
        loading={loading !== ""}
        columns={columns}
      />
      <Divider orientation="left">Invitations</Divider>
      <Invitations />
    </div>
  );
};

export default Staffs;
