import { NavbarListItem } from "@/components/NavbarList/NavbarList.types";

export const dashboardRoutes: NavbarListItem[] = [
  { label: "Scheduler", icon: "pi-calendar", href: "/dashboard" },
  {
    label: "Previous Bookings",
    icon: "pi-book",
    href: "/dashboard",
  },
  { label: "Profile", icon: "pi-user", href: "/dashboard" },
  { label: "Notifications", icon: "pi-cog", href: "/dashboard" },
];
