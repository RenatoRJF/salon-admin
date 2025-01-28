import { Nullable } from "primereact/ts-helpers";
import { ToolbarProps } from "react-big-calendar";

import { CustomEventProps } from "@/types/schedule";

export type CalendarToolbarProps = ToolbarProps<CustomEventProps>;

export interface AppCalendarProps {
  date: Nullable<Date>;
  events: CustomEventProps[];
}
