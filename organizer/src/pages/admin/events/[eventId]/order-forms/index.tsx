import EventLayoutWithContext from "@/layouts/event";
import { Button, Card, Space } from "antd";
import React, { ReactElement } from "react";
import { EyeOutlined } from "@ant-design/icons";
import RegistrationForm from "@/components/RegistrationForm";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const OrderForms = () => {
  return (
    <Card
      title="Order Forms"
      extra={
        <Space>
          <Button icon={<EyeOutlined />}>Preview</Button>
          <Button type="primary">Save</Button>
        </Space>
      }
    >
      <RegistrationForm />
    </Card>
  );
};

OrderForms.getLayout = (page: ReactElement) => {
  return (
    <EventLayoutWithContext>
      <DndProvider backend={HTML5Backend}>{page}</DndProvider>
    </EventLayoutWithContext>
  );
};

export default OrderForms;
