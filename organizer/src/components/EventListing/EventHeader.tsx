import React from "react";
import { Space, Typography } from "antd";
import Link from "next/link";
import { IEvent } from "@/interfaces";
import { format } from "date-fns";

const { Text, Title } = Typography;

const EventHeader = ({ event }: { event: IEvent }) => {
  const { name, id, start_date, banner, type } = event;

  return (
    <Link
      href={{
        pathname: "/admin/events/[id]",
        query: { id: id },
      }}
    >
      <Space size="large">
        <Space direction="vertical" size={0} align="center">
          <Text strong>{format(new Date(start_date), "MMM")}</Text>
          <Title type="secondary" level={4}>
            {format(new Date(start_date), "dd")}
          </Title>
        </Space>
        <img width={150} src={banner && banner[0]?.url} />

        <Space direction="vertical" size={0}>
          <Text strong>{name}</Text>
          <Text type="secondary">
            {type === "online" ? "Online" : "In person"}
          </Text>
          <Text type="secondary">
            {format(new Date(start_date), "eeee, MMMM dd, yyyy 'at' h:mm a")}
            {/* Wednesday, August 25, 2021 at 6:00 PM */}
          </Text>
        </Space>
      </Space>
    </Link>
  );
};

export default EventHeader;
