import axios from "axios";

import { ISpeaker } from "@/interfaces";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/speakers";

const create = async (formData: Partial<ISpeaker>) => {
  try {
    const { data } = await axios.post(`${API_URL}`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const list = async () => {
  try {
    const { data } = await axios.get(`${API_URL}`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const update = async ({
  id,
  formData,
}: {
  id: number;
  formData: Partial<ISpeaker>;
}) => {
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const remove = async (id: number) => {
  try {
    const { data } = await axios.delete(`${API_URL}/${id}`);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  create,
  list,
  update,
  remove,
};

export default exportedObject;
