import dayjs from "dayjs";
import { useMemo, useRef } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";

import "@/styles/calendar.scss";

import {
  AppCalendarProps,
  CalendarToolbarProps,
  CalendarEventWrapperProps,
  CalendarEventProps,
} from "./AppCalendar.types";
import CustomToolbar from "./CustomToolbar";
import CustomEventWrapper from "./CustomEventWrapper";
import CustomTimeSlotWrapper from "./CustomTimeSlotWrapper";
import AppAvatarGroup from "../AppAvatarGroup/AppAvatarGroup";

const localizer = dayjsLocalizer(dayjs);

const MIN_HOUR = new Date(2000, 0, 1, 9, 0);
const MAX_HOUR = new Date(3000, 0, 1, 17, 0);

export default function AppCalendar({
  date,
  events,
  users,
  filteredByUser,
  onSelectUser = () => null,
}: AppCalendarProps) {
  const calendarRef = useRef<Calendar<CalendarEventProps>>(null);

  const { components, defaultDate } = useMemo(
    () => ({
      components: {
        toolbar: (toolbarProps: CalendarToolbarProps) => (
          <CustomToolbar {...toolbarProps}>
            <div className="flex flex-1 justify-end">
              <AppAvatarGroup
                users={users}
                selectedUser={filteredByUser}
                onSelectAvatar={onSelectUser}
              />
            </div>
          </CustomToolbar>
        ),
        eventWrapper: (eventWrapperProps: CalendarEventWrapperProps) => (
          <CustomEventWrapper
            {...eventWrapperProps}
            viewMode={filteredByUser ? "single" : "all"}
          />
        ),
        timeSlotWrapper: CustomTimeSlotWrapper,
      },
      defaultDate: new Date(),
    }),
    [users, filteredByUser, onSelectUser]
  );

  return (
    <Calendar
      ref={calendarRef}
      min={MIN_HOUR}
      max={MAX_HOUR}
      events={events}
      views={["day"]}
      defaultView="day"
      localizer={localizer}
      components={components}
      defaultDate={defaultDate}
      date={date ?? defaultDate}
    />
  );
}
