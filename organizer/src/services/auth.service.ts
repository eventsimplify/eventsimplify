import axios from "axios";

import { handleAxiosError, handleSuccess } from "@/utils";
import { IUser } from "@/interfaces";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/auth";

const login = async (formData: Partial<IUser>) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const register = async (formData: Partial<IUser>) => {
  try {
    const { data } = await axios.post(`${API_URL}/register`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const getUser = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/me`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const logout = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/logout`);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const socialLogin = async ({
  provider,
  access_token,
}: {
  provider: string;
  access_token: string;
}) => {
  try {
    const { data } = await axios.post(`${API_URL}/social-login`, {
      provider,
      access_token,
    });

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  login,
  getUser,
  register,
  logout,
  socialLogin,
};

export default exportedObject;
