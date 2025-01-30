import { UserInfo } from "./user";

export interface CustomEventProps {
  end: Date;
  id: string;
  start: Date;
  title: string;
  user: UserInfo;
  status: Statuses;
}

export enum Statuses {
  COMPLETED = "completed",
  BOOKED = "booked",
  CANCELED = "canceled",
}
