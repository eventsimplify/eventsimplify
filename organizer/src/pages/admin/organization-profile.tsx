import React, { ReactElement, useState } from "react";

import DashboardLayout from "@/layouts/dashboard";
import OrganizationForm from "@/components/OrganizationForm";
import { OrganizationService } from "@/services";
import { Form, Card, Button } from "antd";
import { useAppContext } from "@/contexts/AppProvider";

const OrganizationProfile = () => {
  const { organization } = useAppContext();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");

  const onFinish = async (values: any) => {
    setLoading("create");
    await OrganizationService.create({
      name: values.name,
      summary: values.summary,
      description: values.description,
    });

    setLoading("");
  };

  return (
    <Form
      form={form}
      name="profile-form"
      onFinish={onFinish}
      layout="vertical"
      validateTrigger="onSubmit"
      initialValues={{
        name: organization?.name,
        summary: organization?.summary,
        description: organization?.description,
      }}
    >
      <Card
        bordered={false}
        extra={
          <Button
            type="primary"
            htmlType="submit"
            loading={loading === "create"}
          >
            Update profile
          </Button>
        }
      >
        <OrganizationForm />
      </Card>
    </Form>
  );
};

OrganizationProfile.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default OrganizationProfile;
