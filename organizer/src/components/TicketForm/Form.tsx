import React, { useState } from "react";
import { Col, Collapse, Form, Row } from "antd";

import { SettingOutlined } from "@ant-design/icons";
import Field from "@/form-controls/Field";

const { Panel } = Collapse;

const options = [
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
];

const TicketForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const [form] = Form.useForm();
  const [ticketType, setTicketType] = useState("free");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Form
      form={form}
      layout="vertical"
      name="ticketForm"
      onValuesChange={(changedValues) => {
        if (changedValues.type) {
          setTicketType(changedValues.type);
        }
      }}
      initialValues={{
        type: "free",
        quantity: 100,
        minPerOrder: 1,
        maxPerOrder: 10,
      }}
      onFinish={onSubmit}
      validateTrigger={formSubmitted ? ["onChange"] : ["onSubmit"]}
      onFinishFailed={() => {
        setFormSubmitted(true);
      }}
    >
      <Field
        name="type"
        label="Ticket type"
        required
        options={options}
        type="radio"
        optionType="button"
      />

      <Field
        name="name"
        label="Ticket name"
        required
        placeholder="Enter the name of the ticket"
        type="text"
      />

      <Field
        name="quantity"
        label="Ticket quantity"
        required
        placeholder="Enter the name of the ticket"
        type="number"
      />

      {ticketType === "paid" && (
        <Field
          name="price"
          label="Ticket price"
          required
          placeholder="Enter the price of the ticket"
          type="number"
        />
      )}

      <Form.Item
        label="Ticket start and end date"
        style={{ marginBottom: 0 }}
        requiredMark={true}
        required={true}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Field
              name="startDate"
              label=""
              required
              placeholder="Ticket sale start date"
              type="date"
              extra="Ticket sale start date"
            />
          </Col>
          <Col span={12}>
            <Field
              name="endDate"
              label=""
              required
              placeholder="Ticket sale end date"
              type="date"
              extra="Ticket sale end date"
            />
          </Col>
        </Row>
      </Form.Item>

      <Collapse
        expandIconPosition="end"
        style={{
          background: "transparent",
        }}
        expandIcon={() => <SettingOutlined />}
        size="small"
      >
        <Panel header="Advance settings" key="1">
          <Form.Item
            label="Tickets per order"
            style={{ marginBottom: 0 }}
            required={true}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Field
                  name="minPerOrder"
                  label=""
                  required
                  placeholder="Minimum tickets per order"
                  type="number"
                  extra="Minimum tickets per order"
                />
              </Col>
              <Col span={12}>
                <Field
                  name="maxPerOrder"
                  label=""
                  required
                  placeholder="Maximum tickets per order"
                  type="number"
                  extra="Maximum tickets per order"
                />
              </Col>
            </Row>
          </Form.Item>

          <Field
            name="description"
            label="Ticket description"
            placeholder="Enter the description of the ticket"
            type="textarea"
          />
        </Panel>
      </Collapse>
    </Form>
  );
};

export default TicketForm;
