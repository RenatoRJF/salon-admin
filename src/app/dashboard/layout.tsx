"use client";

import cx from "classnames";
import { ReactNode } from "react";

import useAppStore from "@/hooks/useAppStore";
import AppSidebar from "@/components/AppSidebar/AppSidebar";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isSmall } = useIsSmallScreen();
  const { isSidebarOpen, toggleSidebar } = useAppStore();
  const mainClasses = cx("transition-all", {
    "pl-[280px]": isSidebarOpen && !isSmall,
  });

  return (
    <div className="min-h-screen">
      <AppSidebar onHide={toggleSidebar} visible={isSidebarOpen} />

      <main className={mainClasses}>{children}</main>
    </div>
  );
}
