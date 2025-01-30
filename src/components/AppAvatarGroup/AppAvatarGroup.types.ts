import { UserInfo } from "@/types/user";
import { AvatarGroupProps } from "primereact/avatargroup";

export interface AppAvatarGroupProps extends AvatarGroupProps {
  users: UserInfo[];
  selectedUser?: UserInfo;
  onSelectAvatar: (user: UserInfo | undefined) => void;
}
