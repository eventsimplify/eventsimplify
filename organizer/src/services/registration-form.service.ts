import axios from "axios";

import { IRegistrationForm } from "@/interfaces";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/registration-forms";

const create = async (formData: Partial<IRegistrationForm>) => {
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

const update = async (id: string, formData: Partial<IRegistrationForm>) => {
  try {
    const { data } = await axios.put(`${API_URL}/update/${id}`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const remove = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/delete/${id}`);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  create,
  list,
  detail,
  update,
  remove,
};

export default exportedObject;
