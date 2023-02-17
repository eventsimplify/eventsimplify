import { Dispatch, SetStateAction } from "react";
import IEvent from "./IEvent";

export default interface IEventContext {
  event: IEvent | null;
  setEvent: Dispatch<SetStateAction<IEvent | null>>;
  loading: string;
  setLoading: Dispatch<SetStateAction<string>>;
}
