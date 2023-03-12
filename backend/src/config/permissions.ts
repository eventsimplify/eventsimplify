export const permissions = {
  events: [
    {
      name: "List events",
      action: "list",
    },
    {
      name: "Create events",
      action: "create",
    },
    {
      name: "Edit event details",
      action: "update",
    },
    {
      name: "Delete events",
      action: "delete",
    },
  ],
  tickets: [
    {
      name: "List tickets",
      action: "list",
    },
    {
      name: "Create tickets",
      action: "create",
    },
    {
      name: "Edit ticket details",
      action: "update",
    },
    {
      name: "Delete tickets",
      action: "delete",
    },
  ],
  organizations: [
    {
      name: "Edit organization profile",
      action: "update",
    },
  ],
  orders: [
    {
      name: "List orders",
      action: "list",
    },
    {
      name: "Create manual orders",
      action: "manual-create",
    },
    {
      name: "Edit order details",
      action: "update",
    },
  ],
};

export const ownerPermissions = {
  owner: ["all"],
};
