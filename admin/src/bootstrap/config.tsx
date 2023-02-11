import {
  DashboardOutlined,
  DatabaseOutlined,
  MoneyCollectOutlined,
  DiffOutlined,
  FileDoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export const sidebarItems: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Event details",
    key: "event-details",
    icon: <DatabaseOutlined />,
  },
  {
    label: "Orders",
    key: "orders",
    icon: <FileDoneOutlined />,
  },
  {
    label: "Order options",
    key: "order-options",
    icon: <DiffOutlined />,
    children: [
      {
        label: "Order form",
        key: "order-form",
      },
      {
        label: "Tickets",
        key: "tickets",
      },
    ],
  },
  {
    label: "Payments and Taxes",
    key: "payments-and-taxes",
    icon: <MoneyCollectOutlined />,
    children: [
      {
        label: "Payment options",
        key: "payment-options",
      },
      {
        label: "Payout methods",
        key: "payout-methods",
      },
      {
        label: "Refund settings",
        key: "refund-settings",
      },
      {
        label: "Tax settings",
        key: "tax-settings",
      },
    ],
  },
  {
    label: "Manage Attendees",
    key: "manage-attendees",
    icon: <UserOutlined />,
    children: [
      {
        label: "Attendees list",
        key: "attendees-list",
      },
      {
        label: "Email to attendees",
        key: "email-to-attendees",
      },
    ],
  },
];
