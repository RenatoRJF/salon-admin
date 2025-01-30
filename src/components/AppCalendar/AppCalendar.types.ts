import { Nullable } from "primereact/ts-helpers";
import { EventWrapperProps, ToolbarProps } from "react-big-calendar";

import { UserInfo } from "@/types/user";
import { CustomEventProps } from "@/types/schedule";

export interface CalendarEventProps extends CustomEventProps {
  leftPosition: number;
}

export type CalendarToolbarProps = ToolbarProps<CalendarEventProps>;

export type ViewMode = "single" | "all";
export interface CalendarEventWrapperProps
  extends EventWrapperProps<CalendarEventProps> {
  viewMode?: ViewMode;
}

export interface AppCalendarProps {
  users: UserInfo[];
  date: Nullable<Date>;
  filteredByUser?: UserInfo;
  events: CalendarEventProps[];
  onSelectUser?: (user: UserInfo | undefined) => void;
}
