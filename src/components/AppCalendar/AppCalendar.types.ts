import { CustomEventProps } from "@/@types/schedule";
import { ToolbarProps } from "react-big-calendar";

export type CalendarToolbarProps = ToolbarProps<CustomEventProps>;

export interface AppCalendarProps {
  events: CustomEventProps[];
}
