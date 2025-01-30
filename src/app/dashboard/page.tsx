"use client";

import cx from "classnames";
import { useMemo, useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Nullable } from "primereact/ts-helpers";
import { useQuery } from "@tanstack/react-query";
import { ProgressBar } from "primereact/progressbar";

import { UserInfo } from "@/types/user";
import { users } from "@/api/mock/users";
import useAppStore from "@/hooks/useAppStore";
import { CustomEventProps } from "@/types/schedule";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import AppCalendar from "@/components/AppCalendar/AppCalendar";
import { getSchedulesByDate, getSchedulesDates } from "@/api/api";

const options = [{ value: "all", label: "All appointments" }];

export default function DashboardPage() {
  const { isSmall } = useIsSmallScreen();
  const [filter, setFilter] = useState("all");
  const { isSidebarOpen, toggleSidebar } = useAppStore();
  const [date, setDate] = useState<Nullable<Date>>(new Date());
  const [filterByUser, setFilterByUser] = useState<UserInfo | undefined>();

  const { data: schedules, isFetching } = useQuery({
    queryKey: ["get-schedules-by-date", date],
    queryFn: () => getSchedulesByDate(date as Date),
    initialData: [],
  });

  const { data: enabledDates, isFetching: isFetchingEnabledDates } = useQuery({
    queryKey: ["get-schedules-dates"],
    queryFn: getSchedulesDates,
    initialData: [],
  });

  const schedulesWithLeftPosition = useMemo(() => {
    // Sort schedules by start time
    schedules.sort((a, b) => {
      if (a.start.getTime() !== b.start.getTime()) {
        return a.start.getTime() - b.start.getTime(); // Sort by start time first
      }
      return a.end.getTime() - b.end.getTime(); // If start times are the same, sort by earliest end time
    });

    // Group schedules by the same hour
    const groupedSchedules: Record<string, CustomEventProps[]> = {};

    for (const schedule of schedules) {
      const hourKey = `${schedule.start.getFullYear()}-${schedule.start.getMonth()}-${schedule.start.getDate()}-${schedule.start.getHours()}`;

      if (!groupedSchedules[hourKey]) {
        groupedSchedules[hourKey] = [];
      }

      groupedSchedules[hourKey].push(schedule);
    }

    // Assign leftPosition within each group
    return Object.values(groupedSchedules).flatMap((group) =>
      group.map((schedule, index) => ({
        ...schedule,
        leftPosition: index === 0 ? 0 : index * 272, // Assign position within the group
      }))
    );
  }, [schedules]);

  const filteredSchedules = useMemo(() => {
    if (filterByUser) {
      return schedulesWithLeftPosition.filter(
        (schedule) => schedule.user.id === filterByUser.id
      );
    }

    return schedulesWithLeftPosition;
  }, [schedulesWithLeftPosition, filterByUser]);

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
            enabledDates={enabledDates}
            className="flex-1 md:flex-none"
            onChange={(e) => setDate(e.value)}
            icon={cx("pi pi-calendar", {
              "pi-spin pi-spinner": isFetchingEnabledDates,
            })}
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

        <AppCalendar
          date={date}
          users={users}
          events={filteredSchedules}
          filteredByUser={filterByUser}
          onSelectUser={setFilterByUser}
        />
      </div>
    </div>
  );
}
