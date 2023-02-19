import React from "react";
import { Button, Row, Space, Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import styles from "./ticket.module.css";

const { Title, Paragraph } = Typography;

const Ticket = ({
  selectedTickets,
  setSelectedTickets,
}: {
  selectedTickets: any;
  setSelectedTickets: any;
}) => {
  return (
    <div className={styles.ticket}>
      <Title level={5}>General Admission</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      </Paragraph>
      <Row justify="space-between" align="bottom">
        <Space>
          <Button icon={<PlusOutlined />} size="middle" />
          <Title level={5}>1</Title>
          <Button icon={<MinusOutlined />} size="middle" />
        </Space>
        <Title level={5}>Rs 100.000</Title>
      </Row>
    </div>
  );
};

export default Ticket;
