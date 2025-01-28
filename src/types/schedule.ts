export interface CustomEventProps {
  end: Date;
  id: string;
  start: Date;
  name: string;
  title: string;
  avatar?: string;
  status: Statuses;
  occupation: string;
}

export enum Statuses {
  COMPLETED = "completed",
  BOOKED = "booked",
  CANCELED = "canceled",
}
