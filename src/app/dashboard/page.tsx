"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Nullable } from "primereact/ts-helpers";
import { useQuery } from "@tanstack/react-query";

import useAppStore from "@/hooks/useAppStore";
import { getSchedulesByDate } from "@/api/api";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import AppCalendar from "@/components/AppCalendar/AppCalendar";
import { ProgressBar } from "primereact/progressbar";

const options = [{ value: "all", label: "All appointments" }];

export default function DashboardPage() {
  const { isSmall } = useIsSmallScreen();
  const [filter, setFilter] = useState("all");
  const { isSidebarOpen, toggleSidebar } = useAppStore();
  const [date, setDate] = useState<Nullable<Date>>(new Date());

  const { data, isFetching } = useQuery({
    queryKey: ["get-schedules-by-date", date],
    queryFn: () => getSchedulesByDate(date as Date),
  });

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

      <div className="flex-1 overflow-auto relative">
        {isFetching && (
          <div className="absolute top-0 w-full">
            <ProgressBar mode="indeterminate" className="!h-[2px]" />
          </div>
        )}
        <AppCalendar events={data ?? []} />
      </div>
    </div>
  );
}
