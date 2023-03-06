import React, { useState } from 'react';
import { Button, Card, Col, Popconfirm, Tooltip } from 'antd';

import { EditOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import { IRegistrationForm } from '@/interfaces';
import { useRouter } from 'next/router';
import { useRegistrationFormContext } from '@/contexts/RegistrationFormProvider';

const { Meta } = Card;

const FormItem = ({ form }: { form: IRegistrationForm }) => {
  const { name } = form;
  const { deleteForm, loading } = useRegistrationFormContext();
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const onEditClick = () => {
    router.push({
      pathname: '/admin/events/[eventId]/registration-form/[id]',
      query: { id: form.id, eventId: router.query.eventId },
    });
  };

  const onOpen = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    if (!form?.id) return;

    await deleteForm(String(form.id));
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Col span={6}>
      <Card
        actions={[
          <Button
            key={form.id}
            type="text"
            icon={<EditOutlined />}
            onClick={onEditClick}
          />,

          <Tooltip key={form.id + 'copy'} title="Feature coming soon!!">
            <Button type="text" icon={<CopyOutlined />} disabled />
          </Tooltip>,
          <Popconfirm
            key={form.id + 'delete'}
            icon={null}
            title="Are you sure to delete this form?"
            description="This action cannot be undone"
            open={open}
            onConfirm={handleOk}
            okButtonProps={{ loading: loading === 'deleteForm' }}
            onCancel={handleCancel}
            okText="Confirm"
          >
            <Button
              type="text"
              icon={<DeleteOutlined />}
              danger
              onClick={onOpen}
            />
          </Popconfirm>,
        ]}
      >
        <Meta title={name} description="This is the description" />
      </Card>
    </Col>
  );
};

export default FormItem;
