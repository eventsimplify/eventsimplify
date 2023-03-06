import React from "react";
import { Col, Divider, Row, Space, Table, Typography } from "antd";

import type { ColumnsType } from "antd/es/table";

import { ITicket } from "@/interfaces";
import { useOrderFormContext } from "@/contexts/OrderFormProvider";

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
  value = "Not provided",
  span = 6,
}: {
  label: string;
  value: string | number | undefined;
  span?: number;
}) => (
  <Col span={span}>
    <Title level={5}>{label}</Title>
    <Text>{value}</Text>
  </Col>
);

const Confirmation = () => {
  const { selectedTickets, attendeeInformation, paymentInformation } =
    useOrderFormContext();

  if (!attendeeInformation) return null;

  if (!paymentInformation) return null;

  const { name, email, phone, age, gender } = attendeeInformation;

  const { status, provider, providerId, notes } = paymentInformation;

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
      <Col span={12}>
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
      </Col>
      <Divider />
      <Title level={4}>Attendee information</Title>
      <Divider dashed />
      <Row gutter={[24, 16]}>
        <LabelValue label="Full name" value={name} />
        <LabelValue label="Email" value={email} />
        <LabelValue label="Phone number" value={phone} />
        <LabelValue label="Age" value={age} />
        <LabelValue label="Gender" value={gender} />
      </Row>
      <Divider />
      <Title level={4}>Payment information</Title>
      <Divider dashed />
      <Row gutter={[24, 16]}>
        <LabelValue label="Payment status" value={status} span={12} />
        <LabelValue label="Payment provider" value={provider} span={12} />
        <LabelValue label="Payment provider id" value={providerId} span={24} />

        <LabelValue label="Any additional notes" value={notes} span={24} />
      </Row>
    </div>
  );
};

export default Confirmation;
