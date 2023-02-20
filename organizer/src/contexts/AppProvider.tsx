import React, { createContext, useContext, useMemo, useState } from "react";

import { IAppContext, IUser } from "@/interfaces";
import { AuthService } from "@/services";

export const AppContext = createContext({} as IAppContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within the AppProvider");
  }
  return context;
};

const AppProvider = (props: any) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    setLoading(true);
    const response = await AuthService.getUser();

    setUser(response);
    setLoading(false);
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      loading,
      setLoading,
      getUser,
    }),
    [user, loading]
  );

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
