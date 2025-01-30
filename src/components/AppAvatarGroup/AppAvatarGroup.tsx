import cx from "classnames";
import { AvatarGroup } from "primereact/avatargroup";

import { AppAvatarGroupProps } from "./AppAvatarGroup.types";
import { Avatar } from "primereact/avatar";

export default function AppAvatarGroup({
  users,
  selectedUser,
  onSelectAvatar,
}: AppAvatarGroupProps) {
  return (
    <AvatarGroup>
      {users.map((user) => {
        const isUserSelected = selectedUser && selectedUser?.id == user.id;
        const unselectUsers = selectedUser && selectedUser?.id !== user.id;

        return (
          <Avatar
            size="large"
            key={user.id}
            shape="circle"
            image={user.image}
            onClick={() => onSelectAvatar(isUserSelected ? undefined: user)}
            pt={{
              root: {
                className: cx("hover:opacity-100 hover:border-indigo-400", {
                  "opacity-70 border ": unselectUsers,
                  "border !border-indigo-400": isUserSelected,
                }),
              },
            }}
          />
        );
      })}

      <Avatar label="+2" shape="circle" size="large" />
    </AvatarGroup>
  );
}
