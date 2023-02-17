import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import TicketForm from "./Form";
import { TicketService } from "@/services";
import { useRouter } from "next/router";

const TicketFormDialog = ({
  open,
  setOpen,
  getTickets,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  getTickets: () => void;
}) => {
  const [loading, setLoading] = useState("");
  const router = useRouter();

  const onClose = () => {
    setOpen(false);
  };

  const onTicketFormSubmit = async (values: any) => {
    setLoading("create");

    if (router.query.eventId === undefined) return;

    const formData = {
      name: values.name,
      type: values.type,
      price: values.price || 0,
      quantity: values.quantity,
      startDate: values.startDate,
      endDate: values.endDate,
      minPerOrder: values.minPerOrder,
      maxPerOrder: values.maxPerOrder,
      description: values.description || "",
      visibility: values.visibility || "public",
    };

    await TicketService.create({
      formData,
      eventId: router.query.eventId as string,
    });
    setLoading("");
    onClose();

    getTickets();
  };

  return (
    <Drawer
      title="Add new ticket"
      width={500}
      onClose={onClose}
      open={open}
      footer={
        <Space>
          <Button
            size="large"
            onClick={onClose}
            disabled={loading === "create"}
          >
            Cancel
          </Button>
          <Button
            size="large"
            form="ticketForm"
            type="primary"
            htmlType="submit"
            loading={loading === "create"}
          >
            Save
          </Button>
        </Space>
      }
      footerStyle={{
        textAlign: "right",
      }}
      destroyOnClose
    >
      <TicketForm onSubmit={onTicketFormSubmit} />
    </Drawer>
  );
};

export default TicketFormDialog;
