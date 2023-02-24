import axios from "axios";
import { IRole } from "@/interfaces";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/roles";

const getAll = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/get-all`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const create = async (formData: Partial<IRole>) => {
  try {
    const { data } = await axios.post(`${API_URL}/create`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const remove = async (id: number) => {
  try {
    const { data } = await axios.delete(`${API_URL}/delete/${id}`);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  getAll,
  create,
  remove,
};

export default exportedObject;
