import React, { useState } from "react";
import { Card, Table, Tag } from "antd";

import type { ColumnsType } from "antd/es/table";

import { IOrder } from "@/interfaces";
import { getTagColorByStatus } from "@/utils";
import format from "date-fns/format";

const columns: ColumnsType<IOrder> = [
  {
    title: "Order date",
    width: "20%",
    render: (_, record) =>
      record?.created_at && format(new Date(record?.created_at), "dd/MM/yyyy"),
  },
  {
    title: "Attendee email",
    width: "20%",
    render: (_, record) => record.order_details.attendees[0].email,
  },
  {
    title: "Attendee name",
    width: "20%",
    render: (_, record) => record.order_details.attendees[0].name,
  },
  {
    title: "Type",
    width: "20%",
    render: (_, record) => (
      <Tag color="blue">{record.payment_details.type}</Tag>
    ),
  },
  {
    title: "Status",
    width: "10%",
    render: (_, record) => (
      <Tag color={getTagColorByStatus(record.payment_details.status)}>
        {record.payment_details.status}
      </Tag>
    ),
  },
  {
    title: "Order total",
    width: "10%",
    render: (_, record) => "Rs. " + record.total,
  },
];

const RecentOrders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState("");

  return (
    <Card title="Recent orders">
      <Table
        rowKey={(record) => record.id.toString()}
        columns={columns}
        dataSource={orders}
        loading={loading === "orders"}
        bordered
        pagination={false}
        scroll={{ x: 1600 }}
      />
    </Card>
  );
};

export default RecentOrders;
