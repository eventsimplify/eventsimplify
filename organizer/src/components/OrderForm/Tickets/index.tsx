import React, { useState } from "react";
import { Col, Divider, Row, Space } from "antd";

import Ticket from "./Ticket";
import Field from "@/form-controls/Field";
import { ITicket } from "@/interfaces";
import { useEventContext } from "@/contexts/EventProvider";

const tickets = [
  {
    id: "1",
    name: "General Admission",
    price: 100,
    quantity: 10,
    maxPerOrder: 5,
  },
  {
    id: "2",
    name: "VIP",
    price: 200,
    quantity: 10,
    maxPerOrder: 5,
  },
  {
    id: "3",
    name: "Early Bird",
    price: 50,
    quantity: 10,
    maxPerOrder: 5,
  },
];

const Tickets = () => {
  const { event } = useEventContext();

  console.log(event);

  const [selectedTickets, setSelectedTickets] = useState<ITicket[]>([]);

  return (
    <Row gutter={[24, 16]}>
      <Col span={24}>
        <Field
          name="paymentMethod"
          label="Payment method"
          type="text"
          required
          placeholder="Enter payment method"
        />
      </Col>

      {tickets.map((ticket) => (
        <Col span={6}>
          <Ticket
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          />
        </Col>
      ))}
      <Col
        span={24}
        style={{
          marginTop: "1rem",
        }}
      >
        <h3>Total: Rs 100.000</h3>
      </Col>
    </Row>
  );
};

export default Tickets;
