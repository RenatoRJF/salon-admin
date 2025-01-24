import { ToolbarProps } from "react-big-calendar";

export enum Statuses {
  COMPLETED = "completed",
  BOOKED = "booked",
  CANCELED = "canceled",
}

export interface CustomEventProps {
  end: Date;
  start: Date;
  name: string;
  title: string;
  avatar?: string;
  status: Statuses;
  occupation: string;
}

export type CalendarToolbarProps = ToolbarProps<CustomEventProps>;

export interface AppCalendarProps {
  events: CustomEventProps[];
}
