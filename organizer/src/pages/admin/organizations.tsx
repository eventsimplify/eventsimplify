import React, { ReactElement } from "react";
import { Card, Divider, Space, Typography } from "antd";

import DashboardLayout from "@/layouts/dashboard";
import { useAppContext } from "@/contexts/AppProvider";
import OrganizationItem from "@/components/organizations/OrganizationItem";

const { Title, Paragraph } = Typography;

const Organizations = () => {
  const { organizations } = useAppContext();

  return (
    <div className="flex-center">
      <Card>
        <Title level={4}>List of organizations you are a part of.</Title>
        <Paragraph>
          Switch between organizations by clicking on the organization name.
        </Paragraph>

        <Divider />
        <div className="flex-column">
          <Space size="large" direction="vertical">
            {organizations.map((organization) => (
              <OrganizationItem
                key={organization.id}
                organizationUser={organization}
              />
            ))}
          </Space>
        </div>
      </Card>
    </div>
  );
};

Organizations.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Organizations;
