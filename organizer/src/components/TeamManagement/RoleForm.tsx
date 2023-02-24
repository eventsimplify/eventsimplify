import React, { useState } from "react";
import { Button, Form, Modal } from "antd";

import Field from "@/form-controls/Field";
import Permission from "./Permission";
import { RoleService } from "@/services";

import { message as messageApi } from "@/components/AntDMessage";

const RoleForm = ({ getRoles }: { getRoles: () => void }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      const formData = {
        name: values.name,
        permissions: [],
      };

      const data = await RoleService.create(formData);

      if (data) {
        await getRoles();
        setIsOpen(false);
        form.resetFields();
      }

      setLoading(false);
    } catch (errorInfo) {
      setLoading(false);
      messageApi.error("Please fill in all required fields");
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
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
        okButtonProps={{ loading }}
        okText="Create role"
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
