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

const inviteStaff = async (formData: any) => {
  try {
    const { data } = await axios.post(`${API_URL}/invite-staff`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const getStaff = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/get-staff`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  create,
  inviteStaff,
  getStaff,
};

export default exportedObject;
