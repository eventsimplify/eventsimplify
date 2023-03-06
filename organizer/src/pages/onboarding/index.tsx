import React, { ReactElement, useState } from "react";
import { Card, Col, Row, Steps } from "antd";

import BusinessDetails from "@/components/OnBoarding/BusinessDetails";

import { onBoardingSteps } from "@/bootstrap/config";
import OnBoardingLayout from "@/layouts/onboarding";
import BusinessRepresentative from "@/components/OnBoarding/BusinessRepresentative";
import BusinessInformation from "@/components/OnBoarding";

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const showStep = () => {
    switch (currentStep) {
      case 0:
        return <BusinessInformation setCurrentStep={setCurrentStep} />;

      case 1:
        return <BusinessDetails setCurrentStep={setCurrentStep} />;

      case 2:
        return <BusinessRepresentative setCurrentStep={setCurrentStep} />;

      default:
        return <BusinessInformation setCurrentStep={setCurrentStep} />;
    }
  };

  return (
    <Card>
      <Row>
        <Col span={6}>
          <Steps
            direction="vertical"
            size="small"
            current={currentStep}
            items={onBoardingSteps}
          />
        </Col>
        <Col span={18}>
          <Card>{showStep()}</Card>
        </Col>
      </Row>
    </Card>
  );
};

OnBoarding.getLayout = function getLayout(page: ReactElement) {
  return <OnBoardingLayout>{page}</OnBoardingLayout>;
};

export default OnBoarding;
