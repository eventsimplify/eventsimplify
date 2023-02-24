import React from "react";
import { Button } from "antd";

import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const goToDashboard = () => {
    router.push("/admin/dashboard");
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
      <Button onClick={goToDashboard} type="primary">
        Go to admin dashboard
      </Button>
    </div>
  );
};

export default index;
