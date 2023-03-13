import axios from "axios";

export const getDataFromAuthProvidersUsingToken = async ({
  token,
  provider,
}: {
  token: string;
  provider: string;
}) => {
  if (provider === "google") {
    return await getDataFromGoogle(token);
  }
};

const getDataFromGoogle = async (token: string) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
    );

    const { picture, email, name } = data;

    return {
      name,
      email,
      profile: picture,
    };
  } catch (error) {
    return null;
  }
};
