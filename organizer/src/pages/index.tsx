import React from "react";
import { Button } from "antd";

import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const goToDashboard = () => {
    router.push("/admin/dashboard");
  };

  // embed code from canva

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
      <img src="logo.png" height={200} alt="logo" />
    </div>
  );
};

export default Index;
