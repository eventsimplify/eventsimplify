import React, { useMemo } from "react";
import { Col, Row, Typography } from "antd";

import Ticket from "./Ticket";
import { ITicket } from "@/interfaces";
import { useEventContext } from "@/contexts/EventProvider";
import { useOrderFormContext } from "@/contexts/OrderFormProvider";

const { Title, Paragraph } = Typography;

const Tickets = () => {
  const { event } = useEventContext();
  const { selectedTickets } = useOrderFormContext();

  const totalPrice = useMemo(() => {
    let total = 0;
    selectedTickets.forEach((ticket) => {
      total += ticket.quantity * ticket.price;
    });
    return total;
  }, [selectedTickets]);

  return (
    <Row gutter={[24, 16]}>
      <Col span={24}>
        <Title level={4}>These are the tickets available for this event</Title>
        <Paragraph>
          Select the tickets you want to sell and the quantity for each
        </Paragraph>
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
        <Title level={4}>Total price: Rs. {totalPrice}</Title>
      </Col>
    </Row>
  );
};

export default Tickets;
