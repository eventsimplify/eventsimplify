import React from "react";
import { Avatar, Space, Table } from "antd";
import { getFirstLetterFromName } from "@/utils";

const StaffColumn = () => {
  return (
    <>
      <Table.Column
        title="Name"
        dataIndex="user"
        key="user"
        width="60%"
        render={(record) => {
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
        }}
      />
    </>
  );
};

export default StaffColumn;
