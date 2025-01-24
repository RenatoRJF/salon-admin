"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Nullable } from "primereact/ts-helpers";

import {
  Statuses,
  CustomEventProps,
} from "@/components/AppCalendar/AppCalendar.types";
import useAppStore from "@/hooks/useAppStore";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import AppCalendar from "@/components/AppCalendar/AppCalendar";

const options = [{ value: "all", label: "All appointments" }];

const events: CustomEventProps[] = [
  {
    name: "Sandra Black",
    title: "Hair cut & color",
    status: Statuses.COMPLETED,
    occupation: "Hair cut & makeup",
    end: new Date(2025, 0, 23, 10, 30),
    start: new Date(2025, 0, 23, 9, 30),
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Miguel Peterson",
    title: "Nail cut & paint",
    status: Statuses.CANCELED,
    occupation: "Hair cut & makeup",
    start: new Date(2025, 0, 23, 10, 30),
    end: new Date(2025, 0, 23, 11, 0),
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Janet Smith",
    title: "Skin cleaning",
    status: Statuses.BOOKED,
    occupation: "Hair cut & makeup",
    start: new Date(2025, 0, 23, 12, 0),
    end: new Date(2025, 0, 23, 13, 0),
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

export default function DashboardPage() {
  const { isSmall } = useIsSmallScreen();
  const [filter, setFilter] = useState("all");
  const { isSidebarOpen, toggleSidebar } = useAppStore();
  const [date, setDate] = useState<Nullable<Date>>(new Date());

  return (
    <div className="h-screen flex flex-col">
      <header className="px-6 md:px-12 py-6 flex flex-col justify-between md:flex-row gap-8 md:relative">
        <Button
          rounded
          icon="pi pi-bars"
          onClick={toggleSidebar}
          visible={!isSidebarOpen || isSmall}
        />

        <div className="flex flex-col gap-2 mt-2 md:flex-1 md:mt-0 sm:gap-4 sm:flex-row md:items-center md:justify-between">
          <Calendar
            showIcon
            value={date}
            iconPos="left"
            icon="pi pi-calendar"
            className="flex-1 md:flex-none"
            onChange={(e) => setDate(e.value)}
          />

          <Dropdown
            value={filter}
            options={options}
            defaultValue="all"
            optionLabel="label"
            className="flex-1 md:flex-none"
            onChange={(e) => setFilter(e.value)}
          />
        </div>

        <div className="absolute right-6 top-6 md:top-0 md:right-0 md:relative">
          <Button rounded icon="pi pi-cog" />
        </div>
      </header>

      <div className="flex-1 overflow-auto">
        <AppCalendar events={events} />
      </div>
    </div>
  );
}
