import React, { createContext, useContext, useMemo, useState } from "react";

import Loader from "@/components/Loader";
import { useEventContext } from "./EventProvider";
import { IAttendee, IOrderFormContext, ITicket } from "@/interfaces";

export const OrderFormContext = createContext({} as IOrderFormContext);

export const useOrderFormContext = () => {
  const context = useContext(OrderFormContext);
  if (!context) {
    throw new Error(
      "useOrderFormContext must be used within the OrderFormProvider"
    );
  }
  return context;
};

const OrderFormProvider = (props: any) => {
  const { event } = useEventContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState("");

  const [selectedTickets, setSelectedTickets] = useState<ITicket[]>([]);

  const [attendeeInformation, setAttendeeInformation] =
    useState<IAttendee | null>(null);

  const value = useMemo(
    () => ({
      currentStep,
      setCurrentStep,
      loading,
      setLoading,
      selectedTickets,
      setSelectedTickets,
      attendeeInformation,
      setAttendeeInformation,
    }),
    [currentStep, loading, selectedTickets, attendeeInformation]
  );

  if (!event) {
    return <Loader />;
  }

  return (
    <OrderFormContext.Provider value={value}>
      {props.children}
    </OrderFormContext.Provider>
  );
};

export default OrderFormProvider;
