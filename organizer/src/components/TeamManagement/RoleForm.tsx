import React, { useState } from "react";
import { Button, Drawer, Form, Space } from "antd";

import Field from "@/form-controls/Field";
import Permissions from "@/components/Permissions";
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
      <Drawer
        title="Create new role"
        open={isOpen}
        extra={
          <Space>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleOk} type="primary" loading={loading}>
              Submit
            </Button>
          </Space>
        }
        destroyOnClose
        maskClosable={false}
        width={720}
        onClose={handleCancel}
      >
        <Form form={form} name="basic" layout="vertical" autoComplete="off">
          <Field
            name="name"
            label="Role name"
            required
            placeholder="Enter a role name"
            type="text"
          />

          <Permissions />
        </Form>
      </Drawer>
    </>
  );
};

export default RoleForm;
