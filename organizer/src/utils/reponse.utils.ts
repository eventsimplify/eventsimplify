import { notification } from "antd";
import { AxiosError } from "axios";

import { message as messageApi } from "../components/AntDMessage";

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
    notification.open({
      message: "Error",
      description: "Internal server error",
      type: "error",
    });

    return null;
  }

  notification.open({
    message: "Error",
    description: "Unexcepted error occurred. Please try again.",
    type: "error",
  });

  return null;
};

export const handleError = (message: string) => {
  notification.open({
    message: "Error",
    description: message,
    type: "error",
  });
};

export const handleSuccess = (message: string) => {
  console.log("messageApi", messageApi);

  messageApi.success(message);

  // notification.open({
  //   message: "Success",
  //   description: message,
  //   type: "success",
  // });
};
