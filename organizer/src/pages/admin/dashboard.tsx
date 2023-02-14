import React, { useState } from "react";
import { Button, Divider, Space, Table, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";

import DashboardLayout from "@/layouts/dashboard";
import IEvent from "@/interfaces/IEvent";
import EventFilters from "@/components/Filters/EventFilters";

const columns: ColumnsType<IEvent> = [
  {
    title: "Event name",
    dataIndex: "name",
    sorter: true,
    width: "40%",
    render: (text) => <a>{text}</a>,
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

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<IEvent>
  ) => {
    console.log(pagination, filters, sorter);
  };

  return (
    <DashboardLayout>
      <div className="table-card">
        <div className="table-header">
          <EventFilters />
          <Button type="primary">Create Event</Button>
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

export default App;
