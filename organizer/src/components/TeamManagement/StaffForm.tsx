import React, { useState } from "react";
import { Button, Form, message, Modal } from "antd";

import Field from "@/form-controls/Field";

const StaffForm = () => {
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
        Invite New Staff
      </Button>
      <Modal
        title="Invite New Staff"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
        maskClosable={false}
        centered
      >
        <Form form={form} name="basic" layout="vertical" autoComplete="off">
          <Field
            name="email"
            label="Email"
            required
            placeholder="Enter an email address"
            type="email"
          />

          <Field
            name="role"
            label="Role"
            required
            placeholder="Enter a role"
            type="dropdown"
            options={[
              { label: "Admin", value: "admin" },
              { label: "Staff", value: "staff" },
            ]}
          />
        </Form>
      </Modal>
    </>
  );
};

export default StaffForm;
