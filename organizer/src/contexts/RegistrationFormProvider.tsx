import React, { createContext, useContext, useMemo, useState } from "react";

import { IRegistrationFormContext, IRegistrationForm } from "@/interfaces";

import { RegistrationFormService } from "@/services";
import Loader from "@/components/Loader";
import { useEventContext } from "./EventProvider";

export const RegistrationFormContext = createContext(
  {} as IRegistrationFormContext
);

export const useRegistrationFormContext = () => {
  const context = useContext(RegistrationFormContext);
  if (!context) {
    throw new Error(
      "useRegistrationFormContext must be used within the RegisterationFormProvider"
    );
  }
  return context;
};

const RegisterationFormProvider = (props: any) => {
  const [loading, setLoading] = useState("");
  const [forms, setForms] = useState<IRegistrationForm[]>([]);
  const { event } = useEventContext();

  const getForms = async () => {
    setLoading("getForms");
    const response = await RegistrationFormService.list();
    if (response) {
      setForms(response);
    }
    setLoading("");
  };

  const deleteForm = async (id: string) => {
    setLoading("deleteForm");
    const response = await RegistrationFormService.remove(id);
    if (response) {
      getForms();
    }
    setLoading("");
  };

  const value = useMemo(
    () => ({
      forms,
      getForms,
      loading,
      deleteForm,
    }),
    [forms, loading]
  );

  if (loading === "getForms" || !event) {
    return <Loader />;
  }

  return (
    <RegistrationFormContext.Provider value={value}>
      {props.children}
    </RegistrationFormContext.Provider>
  );
};

export default RegisterationFormProvider;
