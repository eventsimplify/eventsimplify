import React, { ReactElement, useState } from 'react';
import { Button, Card, Form } from 'antd';

import GetStartedForm from '@/components/GetStartedForm';
import GetStartedLayout from '@/layouts/get-started';
import { OrganizationService } from '@/services';
import { useRouter } from 'next/router';

const GetStarted = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState('');

  const onFinish = async (values: any) => {
    setLoading('create');
    const response = await OrganizationService.create({
      name: values.name,
      summary: values.summary,
      description: values.description,
    });

    if (response) {
      router.push('/admin/dashboard');
    }

    setLoading('');
  };

  return (
    <Form
      form={form}
      name="get-started-form"
      onFinish={onFinish}
      layout="vertical"
      validateTrigger="onSubmit"
    >
      <Card
        bordered={false}
        extra={
          <Button
            type="primary"
            htmlType="submit"
            loading={loading === 'create'}
          >
            Create an organization
          </Button>
        }
      >
        <GetStartedForm current={0} />
      </Card>
    </Form>
  );
};

GetStarted.getLayout = function getLayout(page: ReactElement) {
  return <GetStartedLayout>{page}</GetStartedLayout>;
};

export default GetStarted;
