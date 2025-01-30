import dayjs from "dayjs";
import cx from "classnames";
import { useMemo } from "react";
import { Tag } from "primereact/tag";

import UserInfo from "../UserInfo/UserInfo";
import { Statuses } from "@/types/schedule";
import { CalendarEventWrapperProps } from "./AppCalendar.types";

const CustomEventWrapper = ({
  event,
  style,
  onClick,
  viewMode = "single",
}: CalendarEventWrapperProps) => {
  const buttonClasses = cx(
    "absolute bg-white rounded-md min-w-[260px] min-h-[114px] border-2",
    {
      "border-green-500": event.status === Statuses.COMPLETED,
      "border-indigo-400": event.status === Statuses.BOOKED,
      "border-red-400": event.status == Statuses.CANCELED,
    }
  );

  const tagClasses = cx(
    "!rounded-tr-sm !rounded-br-none !rounded-tl-none !text-white capitalize",
    {
      "!bg-green-500": event.status === Statuses.COMPLETED,
      "!bg-indigo-400": event.status === Statuses.BOOKED,
      "!bg-red-400": event.status == Statuses.CANCELED,
    }
  );

  const formattedTime = useMemo(() => {
    const startTime = dayjs(event.start).format("hh:mm A");
    const endTime = dayjs(event.end).format("hh:mm A");

    return `${startTime} - ${endTime}`;
  }, [event]);

  const height = viewMode === "single" ? `${style?.height}%` : "auto";

  return (
    <div
      role="button"
      onClick={onClick}
      className={buttonClasses}
      title={`${formattedTime} ${event.title}`}
      style={{
        height,
        top: `${style?.top}%`,
        left: `${event.leftPosition}px`,
      }}
    >
      <div className="relative px-4 py-2 bg-white rounded-m text-gray-900">
        <div className="absolute -top-0.5 -right-0">
          <Tag value={event.status} className={tagClasses} />
        </div>

        <UserInfo
          name={event.user.name}
          image={event.user.image}
          occupation={event.user.occupation}
        />

        <div className="mt-2 text-lg font-semibold">{event.title}</div>

        <div className="flex items-center gap-2">
          <i className="pi pi-calendar text-lg" />
          <span className="text-md mt-[2px]">{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomEventWrapper;
