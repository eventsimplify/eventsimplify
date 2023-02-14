import axios from "axios";

import { IEvent } from "@/interfaces";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/events";

const create = async (formData: Partial<IEvent>) => {
  try {
    const { data } = await axios.post(`${API_URL}/create`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const list = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/list`);

    return data?.data?.events;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  create,
  list,
};

export default exportedObject;
