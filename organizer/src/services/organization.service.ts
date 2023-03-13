import axios from "axios";
import { IOrganization } from "@/interfaces";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/organizations";

const dashboard = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/dashboard`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const create = async (formData: Partial<IOrganization>) => {
  try {
    const { data } = await axios.post(`${API_URL}/create`, formData);

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

const removeStaff = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/remove-staff/${id}`);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const skipVerification = async () => {
  try {
    const { data } = await axios.put(`${API_URL}/onboarding/skip-verification`);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const onboarding = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/onboarding`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const saveBusinessDetails = async (formData: Partial<IOrganization>) => {
  try {
    const { data } = await axios.put(
      `${API_URL}/onboarding/business-details`,
      formData
    );

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const saveRepresentativeDetails = async (formData: Partial<IOrganization>) => {
  try {
    const { data } = await axios.put(
      `${API_URL}/onboarding/representative-details`,
      formData
    );

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const saveBusinessDocuments = async (formData: any) => {
  try {
    const { data } = await axios.put(
      `${API_URL}/onboarding/business-documents`,
      formData
    );

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  dashboard,
  create,
  getStaff,
  removeStaff,
  skipVerification,
  onboarding,
  saveBusinessDetails,
  saveRepresentativeDetails,
  saveBusinessDocuments,
};

export default exportedObject;
