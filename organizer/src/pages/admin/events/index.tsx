import React, { ReactElement, useEffect, useState } from "react";
import { Button, Divider, Space, Table, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

import DashboardLayout from "@/layouts/dashboard";
import IEvent from "@/interfaces/IEvent";
import EventFilters from "@/components/Filters/EventFilters";
import { useRouter } from "next/router";
import { EventService } from "@/services";
import Link from "next/link";

const columns: ColumnsType<IEvent> = [
  {
    title: "Event banner",
    dataIndex: "banner",
    width: "10%",
    render: (text) => (
      <img
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F434879029%2F94212246415%2F1%2Foriginal.20230119-101032?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=09431ea2850f2ed6d4eb01f66dae80a1"
        alt="banner"
        width="100%"
      />
    ),
  },
  {
    title: "Event name",
    dataIndex: "name",
    width: "40%",
    render: (text, record) => {
      return (
        <Link
          href={{
            pathname: "/admin/events/[id]",
            query: { id: record.id },
          }}
        >
          {text}
        </Link>
      );
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

const Events = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState("");
  const router = useRouter();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    console.log(pagination);
  };

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

  return (
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
        dataSource={events}
        loading={loading === "events"}
        bordered
        onChange={handleTableChange}
        pagination={{
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} items`,
          pageSizeOptions: ["10", "20", "50", "100"],
        }}
      />
    </div>
  );
};

Events.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Events;
