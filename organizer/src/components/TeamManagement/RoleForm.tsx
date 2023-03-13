import React, { useState } from "react";
import { Button, Drawer, Form, Space } from "antd";

import Field from "@/form-controls/Field";
import { RoleService } from "@/services";

import { message as messageApi } from "@/components/AntDMessage";
import Permissions from "./Permissions";
import { useTeamManagementContext } from "@/contexts/TeamManagementProvider";

const RoleForm = ({ getRoles }: { getRoles: () => void }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { selectedPermissions, setSelectedPermissions } =
    useTeamManagementContext();

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      const formData = {
        name: values.name,
        permissions: selectedPermissions,
      };

      const response = await RoleService.create(formData);

      if (response) {
        await getRoles();
        setIsOpen(false);
        form.resetFields();
        setSelectedPermissions({
          events: ["list"],
        });
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
        width={900}
        onClose={handleCancel}
      >
        <Form form={form} name="basic" layout="vertical" size="large">
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
