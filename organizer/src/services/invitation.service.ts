import axios from "axios";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/invitations";

const inviteStaff = async (formData: any) => {
  try {
    const { data } = await axios.post(`${API_URL}/invite-staff`, formData);

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const getInvitationDetails = async ({ token }: { token: string }) => {
  try {
    const { data } = await axios.get(`${API_URL}/invitation/${token}`);

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const acceptInvitation = async ({ token }: { token: string }) => {
  try {
    const { data } = await axios.post(`${API_URL}/accept-invitation`, {
      token,
    });

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const declineInvitation = async ({ token }: { token: string }) => {
  try {
    const { data } = await axios.delete(
      `${API_URL}/decline-invitation/${token}`
    );

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  inviteStaff,
  getInvitationDetails,
  acceptInvitation,
  declineInvitation,
};

export default exportedObject;
