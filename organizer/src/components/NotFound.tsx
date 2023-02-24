import React from "react";
import { Button, Result } from "antd";
import { useRouter } from "next/router";

const NotFound: React.FC = () => {
  const router = useRouter();

  const onButtonClick = () => {
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex-center">
      <Result
        status="404"
        title="Content Not Found"
        subTitle="Sorry, the content you are looking for does not exist."
        extra={
          <Button type="primary" onClick={onButtonClick}>
            Go to dashboard
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
