import { IEvent, IQuestion } from ".";
import IBase from "./IBase";

export default interface IRegistrationForm extends IBase {
  name: string;
  questions: IQuestion[];
  additionalQuestions: IQuestion[];
  event: IEvent;
  eventId: string;
}
