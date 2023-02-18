import React from "react";
import { Button, Result } from "antd";

const App: React.FC = () => (
  <div
    style={{
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
    }}
  >
    <Result
      status="403"
      title="You are not authorized to access this page."
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  </div>
);

export default App;
