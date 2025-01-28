"use client";

import cx from "classnames";
import { ReactNode, useEffect } from "react";

import useAppStore from "@/hooks/useAppStore";
import AppSidebar from "@/components/AppSidebar/AppSidebar";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isSmall } = useIsSmallScreen();
  const { isSidebarOpen, isAppLoading, setIsAppLoading, toggleSidebar } =
    useAppStore();
  const mainClasses = cx("transition-all", {
    "pl-[280px]": isSidebarOpen && !isSmall,
  });

  useEffect(() => {
    if (isAppLoading) {
      const isOpen = window.localStorage.getItem("isSidebarOpen");

      if (isOpen === "no") {
        toggleSidebar(); // closes the sidebar
      }

      setIsAppLoading(false);
    }
  }, [isAppLoading, toggleSidebar, setIsAppLoading]);

  if (isAppLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AppSidebar onHide={toggleSidebar} visible={isSidebarOpen} />

      <main className={mainClasses}>{children}</main>
    </div>
  );
}
