import React, { useState } from "react";
import { Button, Checkbox, Col, Collapse, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";

import capitalize from "lodash.capitalize";

const { Panel } = Collapse;

interface IOption {
  id: number;
  action: string;
}

const Item = ({ type, options }: { type: string; options: IOption[] }) => {
  const [activeKey, setActiveKey] = useState("");

  const extra = (key: string) => {
    const onChange = (key: string) => {
      if (activeKey === key) {
        setActiveKey("");
      }

      if (activeKey !== key) {
        setActiveKey(key);
      }
    };

    return (
      <Button
        shape="circle"
        icon={<DownOutlined rotate={activeKey === key ? 180 : 0} />}
        onClick={() => onChange(key)}
      />
    );
  };

  return (
    <Collapse activeKey={activeKey} expandIcon={() => null}>
      <Panel header={capitalize(type)} key={type} extra={extra(type)}>
        <Checkbox.Group name={type} style={{ width: "100%" }}>
          <Row
            gutter={[16, 16]}
            style={{
              width: "100%",
            }}
          >
            {options.map((permission) => (
              <Col span={6} key={permission.id}>
                <Checkbox value={permission.id} key={permission.id}>
                  {permission.action}
                </Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Panel>
    </Collapse>
  );
};

export default Item;
