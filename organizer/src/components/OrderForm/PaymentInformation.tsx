import React from "react";
import { Col, Form, Row } from "antd";

import Field from "@/form-controls/Field";
import { useOrderFormContext } from "@/contexts/OrderFormProvider";

const PaymentInformation = () => {
  const { setPaymentInformation, setCurrentStep, paymentInformation } =
    useOrderFormContext();

  const onFinish = async (values: any) => {
    const { status, provider, providerId, notes } = values;

    const payment: any = {
      status,
      provider,
      providerId,
      notes,
    };

    setPaymentInformation(payment);
    setCurrentStep(3);
  };

  return (
    <Form
      name="paymentInfo"
      onFinish={onFinish}
      layout="vertical"
      validateTrigger="onBlur"
      initialValues={{
        provider: "cash",
        status: paymentInformation?.status || "pending",
        providerId: paymentInformation?.providerId || "",
        notes: paymentInformation?.notes || "",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Field
            name="status"
            label="Payment status"
            type="dropdown"
            required
            placeholder="Select payment status"
            options={[
              { label: "Pending payment", value: "pending" },
              { label: "On hold", value: "onhold" },
              { label: "Completed", value: "completed" },
              { label: "Refunded", value: "refunded" },
              { label: "Cancelled", value: "cancelled" },
            ]}
          />
        </Col>
        <Col span={12} />
        <Col span={12}>
          <Field
            name="provider"
            label="Payment provider"
            type="dropdown"
            required
            placeholder="Select payment provider"
            options={[
              { label: "Cash", value: "cash" },
              { label: "E-sewa", value: "esewa" },
              { label: "Khalti", value: "khalti" },
              { label: "Mobile Banking", value: "mobilebanking" },
              { label: "Other", value: "other" },
            ]}
          />
        </Col>
        <Col span={12}>
          <Field
            name="providerId"
            label="Payment provider ID / Transaction ID"
            type="text"
            placeholder="Enter payment provider ID"
          />
        </Col>

        <Col span={12}>
          <Field
            name="paymentDate"
            label="Payment date"
            type="date"
            placeholder="Enter payment date"
            required
          />
        </Col>

        <Col span={24}>
          <Field
            name="notes"
            label="Any additional notes"
            type="textarea"
            placeholder="Enter any additional notes"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default PaymentInformation;
