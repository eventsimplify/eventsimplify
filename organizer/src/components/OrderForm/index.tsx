import React from "react";
import { Card, Button, Space, Divider, Steps, Result } from "antd";

import AttendeeInfo from "./AttendeeInfo";
import Tickets from "./Tickets";
import PaymentInformation from "./PaymentInformation";
import Confirmation from "./Confirmation";
import OrderFormProvider, {
  useOrderFormContext,
} from "@/contexts/OrderFormProvider";
import { message } from "../AntDMessage";
import { OrderService } from "@/services";
import { useRouter } from "next/router";

const OrderForm = () => {
  const {
    currentStep,
    setCurrentStep,
    loading,
    selectedTickets,
    setLoading,
    attendeeInformation,
    paymentInformation,
  } = useOrderFormContext();

  const router = useRouter();

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

  const onTicketConfirm = () => {
    if (selectedTickets.length === 0) {
      message.error("Please select at least one ticket");
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const goToOrders = () => {
    router.push({
      pathname: "/admin/events/[eventId]/orders",
      query: { eventId: router.query.eventId },
    });
  };

  const createAnotherOrder = () => {
    setCurrentStep(0);
  };

  const onOrderCreate = async () => {
    setLoading("create");

    if (!attendeeInformation) return null;

    if (!paymentInformation) return null;

    const { name, email, phone } = attendeeInformation;

    const { type, status, provider, providerId, notes } = paymentInformation;

    const orderFormData = {
      tickets: selectedTickets,
      attendeeInformation: {
        name,
        email,
        phone,
      },
      paymentInformation: {
        type,
        status,
        provider,
        providerId,
        notes,
      },
    };

    const response = await OrderService.create(orderFormData);

    if (response) {
      setCurrentStep(-1);
    }

    setLoading("");
  };

  if (currentStep === -1) {
    return (
      <Card>
        <Result
          status="success"
          title="Order placed successfully"
          subTitle="Order has been placed successfully. You can view the order in the orders section."
          extra={[
            <Button key="orders" type="primary" onClick={goToOrders}>
              Go to orders
            </Button>,
            <Button key="create-order" onClick={createAnotherOrder}>
              Create another order
            </Button>,
          ]}
        />
      </Card>
    );
  }

  return (
    <Card
      title="Create manual order"
      extra={
        <Space>
          <Button
            key="previous"
            htmlType="button"
            disabled={loading === "create"}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </Button>
          {currentStep === 0 && (
            <Button
              key="ticket-info"
              type="primary"
              htmlType="button"
              onClick={onTicketConfirm}
            >
              Save and continue
            </Button>
          )}

          {currentStep === 1 && (
            <Button
              key="attendee-info"
              type="primary"
              htmlType="submit"
              form="attendeeInfo"
            >
              Save and continue
            </Button>
          )}

          {currentStep === 2 && (
            <Button
              key="payment-info"
              type="primary"
              htmlType="submit"
              form="paymentInfo"
            >
              Save and continue
            </Button>
          )}

          {currentStep === orderSteps.length - 1 && (
            <Button
              key="place-order"
              type="primary"
              htmlType="button"
              loading={loading === "create"}
              onClick={onOrderCreate}
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
