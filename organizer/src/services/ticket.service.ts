import axios from "axios";

import { ITicket } from "@/interfaces";
import { handleAxiosError, handleSuccess } from "@/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/tickets";

const create = async ({
  formData,
  eventId,
}: {
  formData: Partial<ITicket>;
  eventId: string;
}) => {
  try {
    const params = new URLSearchParams();
    params.append("eventId", eventId);

    const { data } = await axios.post(`${API_URL}/create`, formData, {
      params,
    });

    return handleSuccess(data?.message);
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const list = async ({ eventId }: { eventId: string }) => {
  try {
    const params = new URLSearchParams();
    params.append("eventId", eventId);

    const { data } = await axios.get(`${API_URL}/list`, {
      params,
    });

    return data?.data;
  } catch (err: any) {
    handleAxiosError(err);
  }
};

const exportedObject = {
  create,
  list,
};

export default exportedObject;
