import React from "react";
import { Button } from "antd";

import { useRouter } from "next/router";
import AddressInput from "@/form-controls/Address";

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
      <AddressInput
        name="address"
        label="Address"
        rules={[{ required: true, message: "Please input your address!" }]}
        placeholder="Address"
      />
    </div>
  );
};

export default Index;
