export const getFirstLetterFromName = (name: string) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
};

export const getTagColorByStatus = (status: string) => {
  switch (status) {
    case "pending":
      return "processing";

    case "onhold":
      return "warning";

    case "completed":
      return "success";

    case "cancelled":
      return "error";

    case "refunded":
      return "default";

    default:
      return "black";
  }
};
