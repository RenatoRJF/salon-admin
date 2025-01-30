import { HTMLAttributes } from "react";

import { UserInfo } from "@/types/user";

export type UserInfoProps = HTMLAttributes<HTMLDivElement> & Omit<UserInfo, 'id'>;
