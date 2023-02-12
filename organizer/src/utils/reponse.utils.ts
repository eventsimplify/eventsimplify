import { notification } from "antd";
import { AxiosError } from "axios";

export const handleAxiosError = (err: AxiosError) => {
  if (err?.response?.data) {
    notification.open({
      message: "Error",
      // @ts-ignore
      description: err.response.data?.message,
      type: "error",
    });

    return null;
  }

  if (err?.response?.status === 500) {
    return notification.open({
      message: "Error",
      description: "Internal server error",
      type: "error",
    });
  }

  notification.open({
    message: "Error",
    description: "Unexcepted error occurred. Please try again.",
    type: "error",
  });
};

export const handleError = (message: string) => {
  notification.open({
    message: "Error",
    description: message,
    type: "error",
  });
};

export const handleSuccess = (message: string) => {
  notification.open({
    message: "Success",
    description: message,
    type: "success",
  });
};
