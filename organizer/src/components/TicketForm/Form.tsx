import React, { useMemo, useState } from "react";
import {
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
} from "antd";

import { SettingOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const options = [
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
];

const TicketForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const [form] = Form.useForm();
  const [ticketType, setTicketType] = useState("free");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const priceRules = useMemo(() => {
    if (ticketType === "free") return [];

    return [
      {
        required: true,
        message: "Please enter the price of the ticket",
      },
    ];
  }, [ticketType]);

  return (
    <Form
      form={form}
      layout="vertical"
      name="ticketForm"
      validateMessages={{
        required: "Please enter ${label}",
      }}
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
      size="large"
      onFinishFailed={() => {
        setFormSubmitted(true);
      }}
    >
      <Form.Item
        name="type"
        label="Ticket type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group
          options={options}
          optionType="button"
          buttonStyle="solid"
          size="middle"
        />
      </Form.Item>

      <Form.Item
        name="name"
        label="Ticket name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter the name of the ticket" />
      </Form.Item>

      <Form.Item
        name="quantity"
        label="Ticket quantity"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber
          placeholder="Enter the name of the ticket"
          style={{ width: "100%" }}
          min={1}
        />
      </Form.Item>

      <Form.Item
        name="price"
        label="Ticket price"
        hidden={ticketType === "free"}
        rules={priceRules}
      >
        <InputNumber
          placeholder="Enter the price of the ticket"
          style={{ width: "100%" }}
          min={1}
        />
      </Form.Item>

      <Form.Item
        label="Ticket start and end date"
        style={{ marginBottom: 0 }}
        requiredMark={true}
        required={true}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="startDate"
              rules={[
                {
                  required: true,
                },
              ]}
              extra="Ticket sale start date"
            >
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Ticket sale start date"
                format={"DD/MM/YYYY"}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="endDate"
              rules={[
                {
                  required: true,
                },
                {
                  validator: (_, value) => {
                    if (value < form.getFieldValue("startDate")) {
                      return Promise.reject(
                        new Error(
                          "Ticket sale end date cannot be less than ticket sale start date"
                        )
                      );
                    }

                    return Promise.resolve();
                  },
                },
              ]}
              extra="Ticket sale end date"
            >
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Ticket sale start date"
                format={"DD/MM/YYYY"}
              />
            </Form.Item>
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
            style={{ marginBottom: -20 }}
            required={true}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="minPerOrder"
                  extra="Minimum tickets per order"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the minimum tickets per order",
                    },
                    {
                      type: "number",
                      min: 1,
                    },
                    {
                      type: "number",
                      max: 100,
                    },
                    {
                      validator: (_, value) => {
                        if (value > form.getFieldValue("maxPerOrder")) {
                          return Promise.reject(
                            new Error(
                              "Minimum tickets per order cannot be greater than maximum tickets per order"
                            )
                          );
                        }

                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="Minimum tickets per order"
                    min={1}
                    max={100}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="maxPerOrder"
                  extra="Maximum tickets per order"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the maximum tickets per order",
                    },
                    {
                      validator: (_, value) => {
                        if (value < form.getFieldValue("minPerOrder")) {
                          return Promise.reject(
                            new Error(
                              "Maximum tickets per order cannot be less than minimum tickets per order"
                            )
                          );
                        }

                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="Maximum tickets per order"
                    min={1}
                    max={100}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Enter the description of the ticket (optional)" />
          </Form.Item>
        </Panel>
      </Collapse>
    </Form>
  );
};

export default TicketForm;
