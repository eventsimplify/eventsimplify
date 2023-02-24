import React, { useState } from "react";
import { Col, Row } from "antd";

import Ticket from "./Ticket";
import Field from "@/form-controls/Field";
import { ITicket } from "@/interfaces";
import { useEventContext } from "@/contexts/EventProvider";

const Tickets = () => {
  const { event } = useEventContext();

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

      {event?.tickets?.map((ticket: ITicket) => (
        <Col span={6} key={ticket.id}>
          <Ticket ticket={ticket} />
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
