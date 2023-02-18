import React, { useState } from "react";
import { Button, Form, message, Modal } from "antd";

import Field from "@/form-controls/Field";
import Permission from "./Permission";

const RoleForm = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log("values", values);
      setIsOpen(false);
    } catch (errorInfo) {
      messageApi.error("Please fill in all required fields");
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Create new role
      </Button>
      <Modal
        title="Create new role"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
        maskClosable={false}
        centered
        width={900}
        bodyStyle={{ paddingTop: "1rem" }}
      >
        <Form form={form} name="basic" layout="vertical" autoComplete="off">
          <Field
            name="name"
            label="Role name"
            required
            placeholder="Enter a role name"
            type="text"
          />

          <Permission />
        </Form>
      </Modal>
    </>
  );
};

export default RoleForm;
