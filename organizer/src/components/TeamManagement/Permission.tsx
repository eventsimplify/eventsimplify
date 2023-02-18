import { Checkbox, Collapse, Typography } from "antd";
import React from "react";

const { Panel } = Collapse;

const { Title } = Typography;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Permission = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div>
      <Title level={5}>Permissions</Title>
      <Collapse
        defaultActiveKey={["1", "2", "3"]}
        onChange={onChange}
        style={{
          background: "white",
        }}
      >
        <Panel header="Events" key="1">
          <Checkbox.Group name="events">
            <Checkbox value="create">Create event</Checkbox>
            <Checkbox value="edit">Edit event</Checkbox>
            <Checkbox value="delete">Delete event</Checkbox>
          </Checkbox.Group>
        </Panel>
        <Panel header="Tickets" key="2">
          <Checkbox.Group name="tickets">
            <Checkbox value="create">Create ticket</Checkbox>
            <Checkbox value="edit">Edit ticket</Checkbox>
            <Checkbox value="delete">Delete ticket</Checkbox>
          </Checkbox.Group>
        </Panel>
        <Panel header="Orders" key="3">
          <Checkbox.Group name="orders">
            <Checkbox value="create">Create order</Checkbox>
            <Checkbox value="edit">Edit order</Checkbox>
          </Checkbox.Group>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Permission;
