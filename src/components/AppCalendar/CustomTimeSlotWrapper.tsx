import { ComponentProps } from "react";

export default function CustomTimeSlotWrapper({
  children,
}: ComponentProps<"div">) {
  return <div className="text-gray-400 text-sm pl-4 pr-12">{children}</div>;
}
