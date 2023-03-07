import React, { useMemo } from "react";
import { Button, Card, Typography } from "antd";

import { ITicket } from "@/interfaces";
import { useOrderFormContext } from "@/contexts/OrderFormProvider";

const { Text } = Typography;
const { Meta } = Card;

const SingleTicket = ({ ticket }: { ticket: ITicket }) => {
  const { selectedTickets, setSelectedTickets } = useOrderFormContext();

  const { name, maxPerOrder } = ticket;

  const onClickHandle = () => {
    const ticketIndex = selectedTickets.findIndex(
      (selectedTicket) => selectedTicket.id === ticket.id
    );

    if (ticketIndex === -1) {
      // make quantity 1
      ticket.quantity = 1;
      setSelectedTickets([...selectedTickets, ticket]);
    } else {
      // remove ticket
      const newSelectedTickets = [...selectedTickets];
      newSelectedTickets.splice(ticketIndex, 1);
      setSelectedTickets(newSelectedTickets);
    }
  };

  const ticketQuantity = useMemo(() => {
    const selectedTicket = selectedTickets.find(
      (selectedTicket) => selectedTicket.id === ticket.id
    );
    return selectedTicket?.quantity || 0;
  }, [selectedTickets]);

  const isTicketSelected = useMemo(() => {
    return selectedTickets.some(
      (selectedTicket) => selectedTicket.id === ticket.id
    );
  }, [selectedTickets]);

  return (
    <Card
      actions={[
        <Button
          key="select"
          type={isTicketSelected ? "primary" : "default"}
          size="middle"
          onClick={onClickHandle}
          disabled={ticketQuantity === maxPerOrder}
        >
          {isTicketSelected ? "Selected" : "Select this ticket"}
        </Button>,
      ]}
    >
      <Meta
        title={name}
        description={<Text strong>Price Rs. {ticket.price}</Text>}
      />
    </Card>
  );
};

export default SingleTicket;
