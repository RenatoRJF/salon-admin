"use client";

import { create } from "zustand";

interface StorePros {
  isAppLoading: boolean;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setIsAppLoading: (value: boolean) => void;
}

const useAppStore = create<StorePros>((set) => {
  return {
    isAppLoading: true,
    isSidebarOpen: true,

    setIsAppLoading: (value) => {
      return set(() => ({ isAppLoading: value }));
    },
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
