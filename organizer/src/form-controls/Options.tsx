import React, { useState } from "react";
import { Button, Col, Form, Input, List, Row, Space, Typography } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

import { IFieldProps } from "@/interfaces";

const Options = ({
  label,
  rules,
  extra,
  options = [],
  setOptions,
}: IFieldProps) => {
  const [text, setText] = useState<string>("");

  const handleCreateOptions = () => {
    const newOptions = text
      .split(",")
      .map((option) => ({ label: option, value: option }));

    if (!setOptions) return;

    if (options?.length === 0) {
      setOptions(newOptions);
    }

    if (options && options?.length > 0) {
      setOptions([...options, ...newOptions]);
    }

    setText("");
  };

  const handleDeleteOption = (value: string) => {
    if (!setOptions) return;

    const newOptions = options?.filter((option) => option.value !== value);

    setOptions(newOptions || []);
  };

  return (
    <Form.Item label={label} rules={rules}>
      <div>
        <Row gutter={16}>
          <Col span={18}>
            <Form.Item extra={extra}>
              <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter option separated by comma"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Button type="primary" onClick={handleCreateOptions}>
              Create options
            </Button>
          </Col>
        </Row>

        <Space direction="vertical" style={{ width: "100%" }}>
          <List
            size="small"
            bordered
            header={
              <Typography.Text strong>
                {options?.length} options created
              </Typography.Text>
            }
            rowKey={(item) => item.value}
            dataSource={options}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta title={item.label} />
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDeleteOption(item.value)}
                />
              </List.Item>
            )}
          />
        </Space>
      </div>
    </Form.Item>
  );
};

export default Options;
