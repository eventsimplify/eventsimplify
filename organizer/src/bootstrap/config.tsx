import {
  DashboardOutlined,
  DatabaseOutlined,
  MoneyCollectOutlined,
  DiffOutlined,
  FileDoneOutlined,
  UserOutlined,
  LineChartOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  BarChartOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export const sidebarItems: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "/admin/events/[eventId]",
    icon: <DashboardOutlined />,
  },
  {
    label: "Event details",
    key: "/admin/events/[eventId]/details",
    icon: <DatabaseOutlined />,
  },
  {
    label: "Orders",
    key: "/admin/events/[eventId]/orders",
    icon: <FileDoneOutlined />,
  },
  {
    label: "Order options",
    key: "/admin/events/[eventId]/order-options",
    icon: <DiffOutlined />,
    children: [
      {
        label: "Event registration form",
        key: "/admin/events/[eventId]/registration-form",
      },
      {
        label: "Feedback form",
        key: "/admin/events/[eventId]/feedback-form",
      },
      {
        label: "Tickets",
        key: "/admin/events/[eventId]/tickets",
      },
    ],
  },
  {
    label: "Analytics",
    key: "/admin/events/[eventId]/analytics",
    icon: <BarChartOutlined />,
    children: [
      {
        label: "Demographics",
        key: "/admin/events/[eventId]/demographics",
      },
      {
        label: "Sales",
        key: "payout-methods",
      },
      {
        label: "Feedback and reviews",
        key: "refund-settings",
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
  {
    label: "ID card",
    key: "id-card",
    icon: <IdcardOutlined />,
  },
];

export const appBarItems: MenuProps["items"] = [
  {
    label: "Events",
    key: "/admin/events",
    icon: <CalendarOutlined />,
  },
  {
    label: "Reports",
    key: "/admin/reports",
    icon: <LineChartOutlined />,
  },
  {
    label: "Organization settings",
    key: "/admin/organization-settings",
    icon: <AppstoreOutlined />,
  },
];

export const eventTypes = [
  {
    label: "Trip or Retreat",
    value: "trip-or-retreat",
  },
  {
    label: "Training or Workshop",
    value: "training-or-workshop",
  },
  {
    label: "Concert or Performance",
    value: "concert-or-performance",
  },
  {
    label: "Conference or Meeting",
    value: "conference-or-meeting",
  },
  {
    label: "Festival or Fair",
    value: "festival-or-fair",
  },
  {
    label: "Game or Competition",
    value: "game-or-competition",
  },
  {
    label: "Meeting or Networking Event",
    value: "meeting-or-networking-event",
  },
  {
    label: "Other",
    value: "other",
  },
  {
    label: "Party or Social Gathering",
    value: "party-or-social-gathering",
  },
  {
    label: "Seminar or Talk",
    value: "seminar-or-talk",
  },
  {
    label: "Tour or Trip",
    value: "tour-or-trip",
  },
  {
    label: "Tournament",
    value: "tournament",
  },
];

export const eventCategories = [
  {
    label: "Business & Professional",
    value: "business-and-professional",
    image:
      "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80",
  },
  {
    label: "Charity & Causes",
    value: "charity-and-causes",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    label: "Community & Culture",
    value: "community-and-culture",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    label: "Family & Education",
    value: "family-and-education",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    label: "Fashion & Beauty",
    value: "fashion-and-beauty",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },
  {
    label: "Film, Media & Entertainment",
    value: "film-media-and-entertainment",
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80",
  },
  {
    label: "Food & Drink",
    value: "food-and-drink",
    image:
      "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
  },
  {
    label: "Health & Wellness",
    value: "health-and-wellness",
    image:
      "https://images.unsplash.com/photo-1621887348744-6b0444f8a058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    label: "Hobbies & Special Interest",
    value: "hobbies-and-special-interest",
  },
  {
    label: "Home & Lifestyle",
    value: "home-and-lifestyle",
  },
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Other",
    value: "other",
  },
  {
    label: "Performing & Visual Arts",
    value: "performing-and-visual-arts",
  },
  {
    label: "Religion & Spirituality",
    value: "religion-and-spirituality",
  },
  {
    label: "School Activities",
    value: "school-activities",
  },
  {
    label: "Science & Technology",
    value: "science-and-technology",
  },
  {
    label: "Sports & Fitness",
    value: "sports-and-fitness",
  },
  {
    label: "Travel & Outdoor",
    value: "travel-and-outdoor",
  },
];

export const locationType = [
  {
    label: "Online",
    value: "online",
  },
  {
    label: "In-Person",
    value: "in-person",
  },
];

export const getStartedSteps = [
  {
    title: "Organization details",
    description: "Tell us about your organization",
    icon: "fas fa-building",
  },
];
