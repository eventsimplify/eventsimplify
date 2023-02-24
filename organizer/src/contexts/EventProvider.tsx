import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { IEvent, IEventContext } from "@/interfaces";
import { useRouter } from "next/router";
import { EventService } from "@/services";
import { useAppContext } from "./AppProvider";
import Redirect from "@/components/Redirect";
import Loader from "@/components/Loader";

export const EventContext = createContext({} as IEventContext);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within the EventProvider");
  }
  return context;
};

const EventProvider = (props: any) => {
  const { user, getUser, loading: authLoading } = useAppContext();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [loading, setLoading] = useState("");

  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  const getEvent = async () => {
    setLoading("get");
    const data = await EventService.detail(router.query.eventId as string);

    setEvent(data);
    setLoading("");
  };

  useEffect(() => {
    if (router.query.eventId && user) {
      getEvent();
    }
  }, [router.query, user]);

  const value = useMemo(
    () => ({
      event,
      setEvent,
      loading,
      setLoading,
    }),
    [event, loading]
  );

  if (authLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Redirect to="/auth/login" />;
  }

  return (
    <EventContext.Provider value={value}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
