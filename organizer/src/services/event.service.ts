import axios from "axios";

import { IEvent } from "@/interfaces";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/events";

const create = async (formData: Partial<IEvent>) => {
  try {
    const { data } = await axios.post(`${API_URL}/create`, formData);

    return handleSuccess(data?.data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  create,
};

export default exportedObject;
