import React, { ReactElement, useEffect, useState } from "react";
import { Card, Col, Divider, Row, Steps } from "antd";

import BusinessDetails from "@/components/OnBoarding/BusinessDetails";

import { onBoardingSteps } from "@/bootstrap/config";
import OnBoardingLayout from "@/layouts/onboarding";
import BusinessRepresentative from "@/components/OnBoarding/BusinessRepresentative";
import BusinessInformation from "@/components/OnBoarding";
import SkipModal from "@/components/OnBoarding/SkipModal";
import { OrganizationService } from "@/services";
import { useAppContext } from "@/contexts/AppProvider";
import BusinessDocuments from "@/components/OnBoarding/BusinessDocuments";
import { IOrganizationVerification } from "@/interfaces";
import VerificationDetails from "@/components/OnBoarding/VerificationDetails";

const OnBoarding = () => {
  const { organization } = useAppContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState("onboarding");
  const [verificationDetails, setVerificationDetails] =
    useState<IOrganizationVerification | null>(null);

  const onboarding = async () => {
    const response = await OrganizationService.onboarding();

    if (response) {
      setCurrentStep(response.current_step);
      setVerificationDetails(response);
    }

    setLoading("");
  };

  useEffect(() => {
    if (organization) {
      onboarding();
    } else {
      setLoading("");
    }
  }, [organization]);

  const showStep = () => {
    switch (currentStep) {
      case 0:
        return <BusinessInformation setCurrentStep={setCurrentStep} />;

      case 1:
        return <BusinessDetails setCurrentStep={setCurrentStep} />;

      case 2:
        return <BusinessRepresentative setCurrentStep={setCurrentStep} />;

      case 3:
        return <BusinessDocuments setCurrentStep={setCurrentStep} />;

      default:
        return <BusinessInformation setCurrentStep={setCurrentStep} />;
    }
  };

  if (verificationDetails?.status === "in_progress") {
    return (
      <Card>
        <VerificationDetails />
      </Card>
    );
  }

  return (
    <Card loading={loading === "onboarding"}>
      <Row>
        <Col span={6}>
          <Steps
            direction="vertical"
            size="small"
            current={currentStep}
            items={onBoardingSteps}
            // onChange={onChange}
          />
          <Divider />
          {currentStep !== 0 && <SkipModal />}
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
