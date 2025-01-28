import cx from "classnames";
import { Chip } from "primereact/chip";
import { Statuses } from "@/types/schedule";

import { CalendarToolbarProps } from "./AppCalendar.types";

export default function CustomToolbar({ children }: CalendarToolbarProps) {
  const renderChip = (status: Statuses) => {
    const chipClasses = cx("bg-transparent border", {
      "border-green-500": status === Statuses.COMPLETED,
      "border-indigo-400": status === Statuses.BOOKED,
      "border-red-400": status == Statuses.CANCELED,
    });

    const iconClasses = cx("pi pi-circle-fill", {
      "text-green-500": status === Statuses.COMPLETED,
      "text-indigo-400": status === Statuses.BOOKED,
      "text-red-400": status == Statuses.CANCELED,
    });

    return (
      <Chip
        label={status}
        icon={iconClasses}
        className={chipClasses}
        pt={{ label: { className: "text-sm sm:text-lg" } }}
      />
    );
  };

  return (
    <div className="flex items-center py-6 justify-evenly sm:justify-start sm:px-8 sm:gap-8">
      {renderChip(Statuses.COMPLETED)}
      {renderChip(Statuses.BOOKED)}
      {renderChip(Statuses.CANCELED)}

      {children}
    </div>
  );
}
