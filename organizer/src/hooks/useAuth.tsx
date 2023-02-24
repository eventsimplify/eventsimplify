import { useEffect, useState } from "react";
import { AuthService } from "@/services";
import { useRouter } from "next/router";
import { useAppContext } from "@/contexts/AppProvider";

const useAuth = () => {
  const { user, setUser } = useAppContext();
  const [loading, setLoading] = useState("loading");

  const router = useRouter();

  const logout = async () => {
    setLoading("logout");
    await AuthService.logout();
    setUser(null);
    setLoading("");

    router.push("/auth/login");
    return;
  };

  const getUser = async () => {
    const user = await AuthService.getUser();

    if (user) {
      setUser(user);
    }

    setLoading("");
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return {
    user,
    loading,
    logout,
    getUser,
  };
};

export default useAuth;
