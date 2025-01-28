import dayjs from "dayjs";
import cx from "classnames";
import { useMemo } from "react";
import { Tag } from "primereact/tag";
import { EventWrapperProps } from "react-big-calendar";

import UserInfo from "../UserInfo/UserInfo";
import { CustomEventProps, Statuses } from "@/@types/schedule";

const CustomEventWrapper = ({
  event,
  style,
  onClick,
}: EventWrapperProps<CustomEventProps>) => {
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
    const endTime = dayjs(event.start).format("hh:mm A");

    return `${startTime} - ${endTime}`;
  }, [event]);

  return (
    <div
      role="button"
      onClick={onClick}
      className={buttonClasses}
      title={`${formattedTime} ${event.title}`}
      style={{ top: `${style?.top}%`, height: `${style?.height}%` }}
    >
      <div className="relative px-4 py-2 bg-white rounded-m text-gray-900">
        <div className="absolute -top-0.5 -right-0">
          <Tag value={event.status} className={tagClasses} />
        </div>

        <UserInfo
          name={event.name}
          image={event.avatar}
          occupation={event.occupation}
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
