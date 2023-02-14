import React from "react";
import { Row, Col } from "antd";

import CompanyInformation from "./CompanyInformation";
import Guidelines from "./Guidelines";

const GetStartedForm = ({
  loading,
  current,
}: {
  loading: string;
  current: number;
}) => {
  const renderContent = () => {
    switch (current) {
      case 0:
        return <CompanyInformation />;

      case 1:
        return <Guidelines />;

      default:
        return <CompanyInformation />;
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={18}>
        <Col span={24}>{renderContent()}</Col>
      </Col>
    </Row>
  );
};

export default GetStartedForm;
