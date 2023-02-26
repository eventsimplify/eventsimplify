import React from "react";
import { Col, Divider, Row, Space, Table, Typography } from "antd";

import type { ColumnsType } from "antd/es/table";

import { ITicket } from "@/interfaces";

const { Title, Paragraph, Text } = Typography;

const columns: ColumnsType<ITicket> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "40%",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: "20%",
    render: (price: number) => `Rs. ${price}`,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    width: "20%",
  },
  {
    title: "Total",
    dataIndex: "price",
    key: "address",
    width: "20%",
    render: (_, record) => `Rs. ${record.quantity * record.price}`,
  },
];

const LabelValue = ({
  label,
  value,
  span = 6,
}: {
  label: string;
  value: string;
  span?: number;
}) => (
  <Col span={span}>
    <Title level={5}>{label}</Title>
    <Text>{value}</Text>
  </Col>
);

const Confirmation = ({ selectedTickets }: { selectedTickets: ITicket[] }) => {
  return (
    <div>
      <Title level={4}>Confirm the details</Title>
      <Paragraph>
        Confirm the details below and click on the confirm button to proceed to
        the payment information section to complete the order process
      </Paragraph>
      <Divider />
      <Title level={4}>Ticket information</Title>
      <Divider dashed />
      <Table
        columns={columns}
        dataSource={selectedTickets}
        pagination={false}
        bordered
        size="small"
        footer={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Text strong>
              Total : Rs.{" "}
              {selectedTickets.reduce(
                (total, ticket) => total + ticket.quantity * ticket.price,
                0
              )}
            </Text>
          </div>
        )}
      />
      <Divider />
      <Title level={4}>Attendee information</Title>
      <Divider dashed />
      <Row gutter={[24, 16]}>
        <LabelValue label="Full name" value="John Doe" />
        <LabelValue label="Email" value="john.doe@gmail.com" />
        <LabelValue label="Phone number" value="+977 9814452133" />
        <LabelValue label="Age" value="32" />
        <LabelValue label="Gender" value="Male" />
      </Row>
      <Divider />
      <Title level={4}>Payment information</Title>
      <Divider dashed />
      <Row gutter={[24, 16]}>
        <LabelValue label="Payment method" value="Credit card" span={24} />
        <LabelValue
          label="Any additional notes"
          value="In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
            After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development."
          span={24}
        />
      </Row>
    </div>
  );
};

export default Confirmation;
