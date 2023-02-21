import React, { useState } from "react";
import { Button, Form, message, Modal } from "antd";

import Field from "@/form-controls/Field";
import { OrganizationService } from "@/services";

const StaffForm = ({ getStaffs }: { getStaffs: () => void }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      await OrganizationService.inviteStaff(values);

      setLoading(false);

      setIsOpen(false);

      getStaffs();
    } catch (errorInfo) {
      messageApi.error("Please fill in all required fields");
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Invite new staff
      </Button>
      <Modal
        title="Invite New Staff"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
        maskClosable={false}
        centered
        confirmLoading={loading}
        okText="Invite"
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          autoComplete="off"
          validateTrigger="onSubmit"
        >
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
