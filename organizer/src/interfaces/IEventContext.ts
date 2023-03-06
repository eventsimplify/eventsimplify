import { Dispatch, SetStateAction } from "react";
import IEvent from "./IEvent";
import ISpeaker from "./ISpeaker";

export default interface IEventContext {
  event: IEvent | null;
  setEvent: Dispatch<SetStateAction<IEvent | null>>;
  loading: string;
  setLoading: Dispatch<SetStateAction<string>>;

  speakers: ISpeaker[];

  getSpeakers: () => {};

  speaker: ISpeaker | null;
  setSpeaker: Dispatch<SetStateAction<ISpeaker | null>>;

  createSpeaker: (formData: Partial<ISpeaker>) => {};
  updateSpeaker: (formData: Partial<ISpeaker>) => {};
  deleteSpeaker: (id: number) => {};
}
