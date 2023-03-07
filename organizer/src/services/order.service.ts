import axios from "axios";

import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/orders";

const create = async (formData: any) => {
  try {
    const { data } = await axios.post(`${API_URL}/manual-create`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const list = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/list`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const detail = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/detail/${id}`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const remove = async (id: number) => {
  try {
    const { data } = await axios.delete(`${API_URL}/remove/${id}`);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  create,
  list,
  detail,
  remove,
};

export default exportedObject;
