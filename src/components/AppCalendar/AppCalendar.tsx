import dayjs from "dayjs";
import { useMemo } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";

import "@/styles/calendar.scss";

import CustomToolbar from "./CustomToolbar";
import CustomEventWrapper from "./CustomEventWrapper";
import { AppCalendarProps } from "./AppCalendar.types";
import CustomTimeSlotWrapper from "./CustomTimeSlotWrapper";

const localizer = dayjsLocalizer(dayjs);

const MIN_HOUR = new Date(2000, 0, 1, 9, 0);
const MAX_HOUR = new Date(3000, 0, 1, 17, 0);

export default function AppCalendar({ events, date }: AppCalendarProps) {
  const { components, defaultDate } = useMemo(
    () => ({
      components: {
        toolbar: CustomToolbar,
        eventWrapper: CustomEventWrapper,
        timeSlotWrapper: CustomTimeSlotWrapper,
      },
      defaultDate: new Date(2025, 0, 23, 9, 0),
    }),
    []
  );

  return (
    <Calendar
      ref={null}
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
