import { Avatar } from "primereact/avatar";

import { UserInfoProps } from "./UserInfo.types";

export default function UserInfo({ name, occupation, image }: UserInfoProps) {
  return (
    <div className="flex gap-4 items-center">
      <Avatar
        size="large"
        image={image}
        label={name.charAt(0)}
        className="!bg-gray-200"
        pt={{ image: { className: "rounded-lg" } }}
      />

      <div className="space-y-1 py-1">
        <h3 className="text-sm font-bold text-inherit">{name}</h3>
        <p className="text-xs text-gray-500 uppercase">{occupation}</p>
      </div>
    </div>
  );
}
