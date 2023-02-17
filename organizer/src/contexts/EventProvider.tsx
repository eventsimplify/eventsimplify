import React, { createContext, useContext, useMemo, useState } from "react";

import { IEvent, IEventContext } from "@/interfaces";

export const EventContext = createContext({} as IEventContext);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within the EventProvider");
  }
  return context;
};

const EventProvider = (props: any) => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [loading, setLoading] = useState("");

  const value = useMemo(
    () => ({
      event,
      setEvent,
      loading,
      setLoading,
    }),
    [event, loading]
  );

  return (
    <EventContext.Provider value={value}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
