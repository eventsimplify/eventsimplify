import { AxiosError } from "axios";
import { signIn } from "next-auth/react";

import { handleAxiosError, handleError, handleSuccess } from "@/utils";

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
  redirect?: string;
}) => {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result && result.ok === true) {
      return handleSuccess("Login successful");
    }

    return handleError("Login failed");
  } catch (error) {
    const err = error as AxiosError;
    handleAxiosError(err);
    throw err;
  }
};

const exportedObject = {
  login,
};

export default exportedObject;
