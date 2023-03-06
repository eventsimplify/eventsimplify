import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  IUser,
  IInvitation,
  ITeamManagementContext,
  IRole,
} from "@/interfaces";
import { OrganizationService, RoleService } from "@/services";
import { useAppContext } from "./AppProvider";
import IPermission from "@/interfaces/IPermission";

export const TeamManagementContext = createContext(
  {} as ITeamManagementContext
);

export const useTeamManagementContext = () => {
  const context = useContext(TeamManagementContext);
  if (!context) {
    throw new Error("useEventContext must be used within the EventProvider");
  }
  return context;
};

const TeamManagementProvider = (props: any) => {
  const { user } = useAppContext();
  const [loading, setLoading] = useState("");
  const [staffs, setStaffs] = useState<IUser[]>([]);
  const [invitations, setInvitations] = useState<IInvitation[]>([]);
  const [roles, setRoles] = useState<IRole[]>([]);
  const [permissions, setPermissions] = useState<IPermission[]>([]);

  const [selectedPermissions, setSelectedPermissions] = useState<IPermission[]>(
    []
  );

  const getStaffs = async () => {
    setLoading("team-management");
    const data = await OrganizationService.getStaff();
    setStaffs(data?.staffs || []);
    setInvitations(data?.invitations || []);
    setRoles(data?.roles || []);
    setPermissions(data?.permissions || []);
    setLoading("");
  };

  const deleteRole = async (id: number) => {
    setLoading("delete");
    await RoleService.remove(id);
    await getStaffs();
    setLoading("");
  };

  useEffect(() => {
    if (user) {
      getStaffs();
    }
  }, [user]);

  const value = useMemo(
    () => ({
      staffs,
      setStaffs,
      invitations,
      setInvitations,
      loading,
      getStaffs,
      roles,
      setRoles,
      deleteRole,
      permissions,
      selectedPermissions,
      setSelectedPermissions,
    }),
    [staffs, invitations, loading]
  );

  return (
    <TeamManagementContext.Provider value={value}>
      {props.children}
    </TeamManagementContext.Provider>
  );
};

export default TeamManagementProvider;
