import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { IEvent, IEventContext, ISpeaker } from "@/interfaces";
import { useRouter } from "next/router";
import { EventService, SpeakerService } from "@/services";
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
  const [loading, setLoading] = useState("event");
  const [speakers, setSpeakers] = useState<ISpeaker[]>([]);

  const [speaker, setSpeaker] = useState<ISpeaker | null>(null);

  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  const getEvent = async () => {
    setLoading("event");
    const data = await EventService.detail(router.query.eventId as string);
    setEvent(data);
    setLoading("");
  };

  const getSpeakers = async () => {
    setLoading("speakers");
    const response = await SpeakerService.list();
    setSpeakers(response);
    setLoading("");
  };

  const updateSpeaker = async (formData: any) => {
    setLoading("edit-speaker");
    if (!speaker?.id) return;
    const response = await SpeakerService.update({
      id: speaker.id,
      formData,
    });
    await getSpeakers();
    setLoading("");
    return response;
  };

  const createSpeaker = async (formData: any) => {
    setLoading("create-speaker");
    const response = await SpeakerService.create(formData);
    await getSpeakers();
    setLoading("");
    return response;
  };

  const deleteSpeaker = async (id: number) => {
    setLoading("delete-speaker");
    await SpeakerService.remove(id);
    await getSpeakers();
    setLoading("");
  };

  useEffect(() => {
    if (router.query.eventId && user) {
      getEvent();
    }
  }, [router.query.eventId, user]);

  const value = useMemo(
    () => ({
      event,
      setEvent,
      loading,
      setLoading,
      speakers,
      getSpeakers,
      speaker,
      setSpeaker,
      createSpeaker,
      updateSpeaker,
      deleteSpeaker,
    }),
    [event, loading, speakers, speaker]
  );

  if (authLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Redirect to="/auth/login" redirect={window.location.href} />;
  }

  return (
    <EventContext.Provider value={value}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
