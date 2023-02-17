import React, { useState } from "react";
import { Space, Button, Popconfirm } from "antd";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Actions = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);

    setTimeout(() => {
      setOpen(false);
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <Space>
      <Button icon={<EditOutlined />} />
      <Popconfirm
        title="Title"
        description="Open Popconfirm with async logic"
        open={open}
        onConfirm={handleOk}
        okButtonProps={{ loading: loading }}
        onCancel={handleCancel}
      >
        <Button danger icon={<DeleteOutlined />} onClick={showPopconfirm} />
      </Popconfirm>
    </Space>
  );
};

export default Actions;
