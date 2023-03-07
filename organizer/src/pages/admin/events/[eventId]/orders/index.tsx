import React, { ReactElement, useEffect, useState } from "react";
import { Button, Divider, Table, Tag } from "antd";

import type { ColumnsType } from "antd/es/table";

import { useRouter } from "next/router";
import { OrderService } from "@/services";
import EventFilters from "@/components/Filters/EventFilters";
import { IOrder } from "@/interfaces";
import Actions from "@/components/Table/Actions";
import { useEventContext } from "@/contexts/EventProvider";
import EventLayoutWithContext from "@/layouts/event";
import { getTagColorByStatus } from "@/utils";
import format from "date-fns/format";

const columns: ColumnsType<IOrder> = [
  {
    title: "No. of tickets",
    width: 100,
    render: (_, record) => record.order_details.tickets.length,
  },
  {
    title: "Ticket",
    width: 200,
    render: (_, record) => record.order_details.tickets[0].ticket?.name,
  },
  {
    title: "Order date",
    width: 200,
    render: (_, record) =>
      record?.createdAt && format(new Date(record?.createdAt), "dd/MM/yyyy"),
  },
  {
    title: "Attendee email",
    width: 200,
    render: (_, record) => record.order_details.attendees[0].email,
  },
  {
    title: "Attendee name",
    width: 200,
    render: (_, record) => record.order_details.attendees[0].name,
  },
  {
    title: "Type",
    width: 150,
    render: (_, record) => (
      <Tag color="blue">{record.payment_details.type}</Tag>
    ),
  },
  {
    title: "Payment method",
    width: 150,
    render: (_, record) => record.payment_details.provider,
  },
  {
    title: "Status",
    width: 150,
    render: (_, record) => (
      <Tag color={getTagColorByStatus(record.payment_details.status)}>
        {record.payment_details.status}
      </Tag>
    ),
  },
  {
    title: "Order total",
    width: 150,
    render: (_, record) => "Rs. " + record.total,
  },

  {
    title: "Action",
    width: 100,
    render: () => <Actions />,
  },
];

const Orders = () => {
  const { event } = useEventContext();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState("");

  const router = useRouter();

  const getTickets = async () => {
    setLoading("orders");
    const data = await OrderService.list();
    setOrders(data || []);
    setLoading("");
  };

  useEffect(() => {
    if (event) {
      getTickets();
    }
  }, [event]);

  const createOrder = async () => {
    router.push({
      pathname: "/admin/events/[eventId]/orders/create",
      query: { eventId: event?.id },
    });
  };

  return (
    <div className="table-card">
      <div className="table-header">
        <EventFilters />
        <Button type="primary" onClick={createOrder}>
          Add manual order
        </Button>
      </div>
      <Divider />
      <Table
        rowKey={(record) => record.id.toString()}
        columns={columns}
        dataSource={orders}
        loading={loading === "orders"}
        bordered
        pagination={false}
        scroll={{ x: 1600 }}
      />
    </div>
  );
};

Orders.getLayout = (page: ReactElement) => {
  return <EventLayoutWithContext>{page}</EventLayoutWithContext>;
};

export default Orders;
