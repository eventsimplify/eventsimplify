import React from "react";
import DashboardLayout from "@/layouts/dashboard";
import { Space } from "antd";
import EventForm from "@/components/EventForm";

const Create = () => {
  return (
    <DashboardLayout>
      <Space direction="vertical" size={16}>
        <EventForm />
      </Space>
    </DashboardLayout>
  );
};

export default Create;
