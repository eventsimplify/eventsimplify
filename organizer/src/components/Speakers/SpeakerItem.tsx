import React from "react";
import { Card, Avatar, Col, Space, Typography, Button, Popconfirm } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ISpeaker } from "@/interfaces";
import { useEventContext } from "@/contexts/EventProvider";

const { Text } = Typography;

const SpeakerItem = ({ speaker }: { speaker: ISpeaker }) => {
  const { id, name, job_title } = speaker;

  const { setSpeaker, deleteSpeaker, loading } = useEventContext();

  const handleEdit = () => {
    setSpeaker(speaker);
  };

  const onConfirm = () => {
    if (!id) return;
    deleteSpeaker(id);
  };

  return (
    <Col span={6}>
      <Card
        actions={[
          <Button
            key="edit"
            type="text"
            icon={<EditOutlined />}
            onClick={handleEdit}
          />,
          <Popconfirm
            key="delete"
            icon={null}
            title="Are you sure to delete this speaker?"
            description="This action cannot be undone"
            okText="Confirm"
            cancelText="Cancel"
            onConfirm={onConfirm}
            okButtonProps={{
              loading: loading === "delete-speaker",
              danger: true,
            }}
          >
            <Button type="text" icon={<DeleteOutlined />} danger />
          </Popconfirm>,
        ]}
      >
        <Space
          direction="vertical"
          size="small"
          style={{
            flexGrow: 1,
            height: "100%",
          }}
        >
          <Space size="small">
            <Avatar size={40} src="https://joesch.moe/api/v1/random?key=2" />
            <Space direction="vertical" size={0}>
              <Text strong>{name}</Text>
              <Text>{job_title}</Text>
            </Space>
          </Space>
        </Space>
      </Card>
    </Col>
  );
};

export default SpeakerItem;
