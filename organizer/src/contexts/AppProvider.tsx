import React, { createContext, useContext, useMemo, useState } from "react";

import { IAppContext, IOrganization, IUser } from "@/interfaces";
import { AuthService } from "@/services";
import IInvitation from "@/interfaces/IInvitation";

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
  const [organization, setOrganization] = useState<IOrganization | null>(null);
  const [invitation, setInvitation] = useState<IInvitation | null>(null);

  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    setLoading(true);
    const response = await AuthService.getUser();

    setUser(response);
    setOrganization(response?.organization || null);
    setLoading(false);
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      loading,
      setLoading,
      getUser,
      organization,
      invitation,
      setInvitation,
    }),
    [user, loading, organization, invitation]
  );

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
