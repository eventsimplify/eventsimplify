import axios from "axios";
import { IOrganization } from "@/interfaces";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/organizations";

const create = async (formData: Partial<IOrganization>) => {
  try {
    const { data } = await axios.post(`${API_URL}/create`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  create,
};

export default exportedObject;
