import React from "react";
import { Button, Space } from "antd";

import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const goToLoginPage = () => {
    router.push("/auth/login");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Button onClick={goToLoginPage} type="primary">
        Go to login page
      </Button>
      <Button onClick={goToLoginPage} type="primary">
        Go to admin dashboard
      </Button>
    </div>
  );
};

export default index;
