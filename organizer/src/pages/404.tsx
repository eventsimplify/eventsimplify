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
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  </div>
);

export default App;
