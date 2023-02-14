import React, { useState } from "react";
import { Button, Divider, Space, Table, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

import DashboardLayout from "@/layouts/dashboard";
import IEvent from "@/interfaces/IEvent";
import EventFilters from "@/components/Filters/EventFilters";
import { useRouter } from "next/router";

const columns: ColumnsType<IEvent> = [
  {
    title: "Event name",
    dataIndex: "name",
    width: "40%",
    render: (text, record) => {
      console.log(record);
      return <a href="#">{text}</a>;
    },
  },
  {
    title: "Tickets sold",
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
        <Button danger icon={<DeleteOutlined />} />
      </Space>
    ),
  },
];

const data: IEvent[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    id: i,
    name: `Edward King ${i}`,
    ticketSold: 32,
    status: "Active",
    description: "London, Park Lane no. 0",
  });
}

const Events: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    console.log(pagination);
  };

  const onCreateEventClick = () => {
    console.log("Create event");
    router.push("/admin/events/create");
  };

  return (
    <DashboardLayout>
      <div className="table-card">
        <div className="table-header">
          <EventFilters />
          <Button type="primary" onClick={onCreateEventClick}>
            Create Event
          </Button>
        </div>
        <Divider />
        <Table
          rowKey={(record) => record.id.toString()}
          columns={columns}
          dataSource={data}
          loading={loading}
          bordered
          //@ts-ignore
          onChange={handleTableChange}
          pagination={{
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} items`,
            pageSizeOptions: ["10", "20", "50", "100"],
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default Events;
