import React, { useMemo } from "react";
import { Button, Card, Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { ITicket } from "@/interfaces";

const { Title, Text } = Typography;
const { Meta } = Card;

const Ticket = ({
  ticket,
  selectedTickets,
  setSelectedTickets,
}: {
  ticket: ITicket;

  selectedTickets: ITicket[];
  setSelectedTickets: React.Dispatch<React.SetStateAction<ITicket[]>>;
}) => {
  const { name, description, maxPerOrder } = ticket;

  const handleAddTicket = () => {
    const ticketIndex = selectedTickets.findIndex(
      (selectedTicket) => selectedTicket.id === ticket.id
    );

    if (ticketIndex === -1) {
      // make quantity 1
      ticket.quantity = 1;
      setSelectedTickets([...selectedTickets, ticket]);
    } else {
      const newSelectedTickets = [...selectedTickets];
      newSelectedTickets[ticketIndex].quantity += 1;
      setSelectedTickets(newSelectedTickets);
    }
  };

  const handleRemoveTicket = () => {
    const ticketIndex = selectedTickets.findIndex(
      (selectedTicket) => selectedTicket.id === ticket.id
    );

    if (ticketIndex !== -1) {
      const newSelectedTickets = [...selectedTickets];
      newSelectedTickets[ticketIndex].quantity -= 1;
      setSelectedTickets(newSelectedTickets);
    }
  };

  const ticketQuantity = useMemo(() => {
    const selectedTicket = selectedTickets.find(
      (selectedTicket) => selectedTicket.id === ticket.id
    );
    return selectedTicket?.quantity || 0;
  }, [selectedTickets]);

  return (
    <Card
      actions={[
        <Button
          icon={<MinusOutlined />}
          size="middle"
          onClick={handleRemoveTicket}
          disabled={ticketQuantity === 0}
        />,
        <Title key="edit" level={5}>
          {ticketQuantity}
        </Title>,
        <Button
          icon={<PlusOutlined />}
          size="middle"
          onClick={handleAddTicket}
          disabled={ticketQuantity === maxPerOrder}
        />,
      ]}
    >
      <Meta
        title={name}
        description={<Text strong>Price Rs. {ticket.price}</Text>}
      />
    </Card>
  );
};

export default Ticket;
