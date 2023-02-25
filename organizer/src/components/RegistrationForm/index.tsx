import React from "react";
import { Divider } from "antd";

import DefaultQuestions from "./DefaultQuestions";
import AdditionalQuestions from "./AdditionalQuestions";

const RegistrationForm = () => {
  return (
    <div>
      <DefaultQuestions />
      <Divider />
      <AdditionalQuestions />
    </div>
  );
};

export default RegistrationForm;
