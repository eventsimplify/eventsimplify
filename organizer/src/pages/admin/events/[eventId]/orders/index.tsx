import React, { ReactElement, useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";

import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

import EventLayout from "@/layouts/event";
import { useRouter } from "next/router";
import { TicketService } from "@/services";
import EventFilters from "@/components/Filters/EventFilters";
import { ITicket } from "@/interfaces";
import Actions from "@/components/Table/Actions";
import { useEventContext } from "@/contexts/EventProvider";
import EventLayoutWithContext from "@/layouts/event";

const columns: ColumnsType<ITicket> = [
  {
    title: "Ticket name",
    dataIndex: "name",
    width: "40%",
  },
  {
    title: "Tickets sold",
    dataIndex: "sold",
    width: "20%",
  },
  {
    title: "Price",
    dataIndex: "price",
    width: "20%",
  },
  {
    title: "Action",
    width: "10%",
    render: () => <Actions />,
  },
];

const Orders = () => {
  const { event } = useEventContext();
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [loading, setLoading] = useState("");

  const router = useRouter();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    console.log(pagination);
  };

  const getTickets = async () => {
    setLoading("get");
    if (!event) return null;
    const data = await TicketService.list({
      eventId: String(event.id),
    });
    setTickets(data || []);
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
        dataSource={tickets}
        loading={loading === "get"}
        bordered
        //@ts-ignore
        onChange={handleTableChange}
        pagination={false}
      />
    </div>
  );
};

Orders.getLayout = (page: ReactElement) => {
  return <EventLayoutWithContext>{page}</EventLayoutWithContext>;
};

export default Orders;
