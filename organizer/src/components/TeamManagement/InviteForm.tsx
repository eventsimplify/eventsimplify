import React, { useMemo, useState } from 'react';
import { Button, Form, Modal } from 'antd';

import { message } from '@/components/AntDMessage';

import Field from '@/form-controls/Field';
import { InvitationService } from '@/services';
import { useTeamManagementContext } from '@/contexts/TeamManagementProvider';

const StaffForm = ({ getStaffs }: { getStaffs: () => void }) => {
  const { roles } = useTeamManagementContext();
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

      const response = await InvitationService.inviteStaff(values);

      if (response) {
        await getStaffs();
        setIsOpen(false);
      }

      setLoading(false);
    } catch (errorInfo) {
      message.error('Please fill in all required fields');
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const roleOptions = useMemo(
    () =>
      roles.map((role) => ({
        label: role.name,
        value: role.id.toString(),
      })),
    [roles]
  );

  return (
    <>
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
            options={roleOptions}
          />
        </Form>
      </Modal>
    </>
  );
};

export default StaffForm;
