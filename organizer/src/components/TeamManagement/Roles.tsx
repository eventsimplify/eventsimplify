import React from "react";
import { Button, Divider, Space, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import RoleForm from "./RoleForm";
import { useTeamManagementContext } from "@/contexts/TeamManagementProvider";

const Roles = () => {
  const { roles, loading, getStaffs, deleteRole } = useTeamManagementContext();

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
      render: () => (
        <Space>
          <Button icon={<EyeOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="table-header">
        <div />
        <RoleForm getRoles={getStaffs} />
      </div>
      <Divider />
      <Table
        rowKey={(record) => record.id.toString()}
        columns={columns}
        dataSource={roles}
        bordered
        pagination={false}
        loading={loading !== ""}
      />
    </>
  );
};

export default Roles;
