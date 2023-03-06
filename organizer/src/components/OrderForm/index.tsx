import React from "react";
import { Card, Button, Space, Divider, Steps } from "antd";

import AttendeeInfo from "./AttendeeInfo";
import Tickets from "./Tickets";
import PaymentInformation from "./PaymentInformation";
import Confirmation from "./Confirmation";
import OrderFormProvider, {
  useOrderFormContext,
} from "@/contexts/OrderFormProvider";

const OrderForm = () => {
  const { currentStep, setCurrentStep, loading } = useOrderFormContext();

  const orderSteps = [
    {
      title: "Ticket information",
      content: <Tickets />,
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
      content: <Confirmation />,
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
          {currentStep === 0 && (
            <Button
              type="primary"
              htmlType="button"
              loading={loading === "create"}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Confirm ticket information
            </Button>
          )}

          {currentStep === 1 && (
            <Button
              type="primary"
              htmlType="submit"
              form="attendeeInfo"
              loading={loading === "create"}
            >
              Confirm attendee information
            </Button>
          )}

          {currentStep === 2 && (
            <Button
              type="primary"
              htmlType="submit"
              form="paymentInfo"
              loading={loading === "create"}
            >
              Confirm payment information
            </Button>
          )}

          {currentStep === orderSteps.length - 1 && (
            <Button
              type="primary"
              htmlType="submit"
              loading={loading === "create"}
            >
              Place order
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

const OrderFormWithProvider = () => {
  return (
    <OrderFormProvider>
      <OrderForm />
    </OrderFormProvider>
  );
};

export default OrderFormWithProvider;
