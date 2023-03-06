import React from "react";
import { Button, Empty } from "antd";
import { useRouter } from "next/router";

const EmptyTable = ({
  emptyText = "No data",
  onCreate,
}: {
  emptyText?: string;
  onCreate?: () => void;
}) => {
  const router = useRouter();

  const defaultCreate = () => {
    router.push({
      pathname: router.pathname + "/create",
      query: router.query,
    });
  };

  return (
    <Empty
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<span>{emptyText}</span>}
    >
      <Button
        type="primary"
        size="small"
        onClick={onCreate ? onCreate : defaultCreate}
      >
        Create Now
      </Button>
    </Empty>
  );
};

export default EmptyTable;
