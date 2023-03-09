import axios from "axios";

import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/files";

const uploadBanner = async (file: any) => {
  try {
    const formData = new FormData();
    await formData.append("file", file);

    const { data } = await axios.post(`${API_URL}/banner-upload`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const remove = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/remove/${id}`);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  uploadBanner,
  remove,
};

export default exportedObject;
