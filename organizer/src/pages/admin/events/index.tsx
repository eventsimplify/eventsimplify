import React, { ReactElement, useEffect, useState } from "react";
import { Button, Divider, Space, Table, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";

import DashboardLayout from "@/layouts/dashboard";
import IEvent from "@/interfaces/IEvent";
import { useRouter } from "next/router";
import { EventService } from "@/services";
import EventHeader from "@/components/EventListing/EventHeader";

const Events = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState("");
  const router = useRouter();

  const onCreateEventClick = () => {
    router.push("/admin/events/create");
  };

  const getEvents = async () => {
    setLoading("events");
    const data = await EventService.list();
    setEvents(data || []);
    setLoading("");
  };

  useEffect(() => {
    getEvents();
  }, []);

  const onDelete = async (id: number) => {
    setLoading("events");
    await EventService.remove(id);
    getEvents();
  };

  const columns: ColumnsType<IEvent> = [
    {
      title: "Event",
      dataIndex: "name",
      width: "50%",
      render: (_, record) => {
        return <EventHeader event={record} />;
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
      render: (text, record) => (
        <Space>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => onDelete(record?.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="table-card">
      <div className="table-header">
        {/* <EventFilters /> */}
        <div />
        <Button type="primary" onClick={onCreateEventClick}>
          Create Event
        </Button>
      </div>
      <Divider />
      <Table
        rowKey={(record) => record?.slug}
        columns={columns}
        dataSource={events}
        loading={loading === "events"}
        bordered
        pagination={false}
      />
    </div>
  );
};

Events.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Events;
