import React from "react";

import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const HelpButton: React.FC = () => (
  <FloatButton icon={<QuestionCircleOutlined />} type="primary" />
);

export default HelpButton;
