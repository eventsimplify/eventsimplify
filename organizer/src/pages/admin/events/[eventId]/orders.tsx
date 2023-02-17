import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";

import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

import EventLayout from "@/layouts/event";
import { useRouter } from "next/router";
import { TicketService } from "@/services";
import EventFilters from "@/components/Filters/EventFilters";
import TicketFormDialog from "@/components/TicketForm";
import { ITicket } from "@/interfaces";
import Actions from "@/components/Table/Actions";

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

const Orders: React.FC = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [loading, setLoading] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    console.log(pagination);
  };

  const getTickets = async () => {
    setLoading("get");
    const data = await TicketService.list({
      eventId: router.query.eventId as string,
    });
    setTickets(data || []);
    setLoading("");
  };

  useEffect(() => {
    if (router.query.eventId) {
      getTickets();
    }
  }, [router.query.eventId]);

  return (
    <EventLayout>
      <TicketFormDialog open={open} setOpen={setOpen} getTickets={getTickets} />
      <div className="table-card">
        <div className="table-header">
          <EventFilters />
          <Button type="primary" onClick={() => setOpen(true)}>
            Create Ticket
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
    </EventLayout>
  );
};

export default Orders;
