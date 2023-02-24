import React from "react";
import { Button, Row, Space, Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import styles from "./ticket.module.css";
import { ITicket } from "@/interfaces";

const { Title, Paragraph } = Typography;

const Ticket = ({ ticket }: { ticket: ITicket }) => {
  const { name, description, price } = ticket;

  return (
    <div className={styles.ticket}>
      <Title level={5}>{name}</Title>
      <Paragraph>{description}</Paragraph>
      <Row justify="space-between" align="bottom">
        <Space>
          <Button icon={<PlusOutlined />} size="middle" />
          <Title level={5}>1</Title>
          <Button icon={<MinusOutlined />} size="middle" />
        </Space>
        <Title level={5}>Rs {price}</Title>
      </Row>
    </div>
  );
};

export default Ticket;
