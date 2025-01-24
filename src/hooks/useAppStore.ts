"use client";

import { create } from "zustand";

interface StorePros {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const useAppStore = create<StorePros>((set) => {
  let isSidebarOpen: string | null = "yes";

  if (typeof window !== "undefined") {
    isSidebarOpen = window.localStorage.getItem("isSidebarOpen");
  }

  return {
    isSidebarOpen: isSidebarOpen === "yes",
    toggleSidebar: () => {
      return set((state) => {
        const isOpen = !state.isSidebarOpen;

        window.localStorage.setItem("isSidebarOpen", isOpen ? "yes" : "no");

        return { isSidebarOpen: isOpen };
      });
    },
  };
});

export default useAppStore;
