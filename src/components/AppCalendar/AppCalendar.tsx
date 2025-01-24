import dayjs from "dayjs";
import { useMemo } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";

import "@/styles/calendar.scss";

import CustomToolbar from "./CustomToolbar";
import CustomEventWrapper from "./CustomEventWrapper";
import { AppCalendarProps } from "./AppCalendar.types";
import CustomTimeSlotWrapper from "./CustomTimeSlotWrapper";

const localizer = dayjsLocalizer(dayjs);

export default function AppCalendar({ events }: AppCalendarProps) {
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
      events={events}
      views={["day"]}
      defaultView="day"
      localizer={localizer}
      components={components}
      defaultDate={defaultDate}
      min={new Date(2025, 0, 23, 9, 0)}
      max={new Date(2025, 0, 23, 18, 0)}
    />
  );
}
