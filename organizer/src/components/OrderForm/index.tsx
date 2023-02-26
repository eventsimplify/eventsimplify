import React, { useState } from "react";
import { Card, Button, Space, Divider, Steps } from "antd";

import AttendeeInfo from "./AttendeeInfo";
import Tickets from "./Tickets";
import PaymentInformation from "./PaymentInformation";
import { ITicket } from "@/interfaces";
import Confirmation from "./Confirmation";

const OrderForm = ({ loading }: { loading: string }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [selectedTickets, setSelectedTickets] = useState<ITicket[]>([]);

  const orderSteps = [
    {
      title: "Ticket information",
      content: (
        <Tickets
          selectedTickets={selectedTickets}
          setSelectedTickets={setSelectedTickets}
        />
      ),
    },
    {
      title: "Attendee information",
      content: <AttendeeInfo />,
    },
    {
      title: "Payment information",
      content: <PaymentInformation />,
    },
    {
      title: "Confirmation",
      content: <Confirmation selectedTickets={selectedTickets} />,
    },
  ];

  return (
    <Card
      title="Create manual order"
      extra={
        <Space>
          <Button
            htmlType="button"
            loading={loading === "create"}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </Button>
          {currentStep < orderSteps.length - 1 && (
            <Button
              type="primary"
              htmlType="button"
              loading={loading === "create"}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </Button>
          )}

          {currentStep === orderSteps.length - 1 && (
            <Button
              type="primary"
              htmlType="submit"
              loading={loading === "create"}
            >
              Create order
            </Button>
          )}
        </Space>
      }
    >
      <Steps current={currentStep} items={orderSteps} />
      <Divider />
      {orderSteps[currentStep].content}
    </Card>
  );
};

export default OrderForm;
