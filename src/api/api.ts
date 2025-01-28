import dayjs from "dayjs";
import { CustomEventProps } from "@/types/schedule";
import { generateSchedules } from "./generate-random-data";

const randomSchedules = generateSchedules();

export function getSchedulesByDate(date: Date): Promise<CustomEventProps[]> {
  const promise = new Promise<CustomEventProps[]>((accept) => {
    setTimeout(() => {
      accept(
        randomSchedules.filter((schedule) =>
          dayjs(schedule.start).isSame(date, "D")
        )
      );
    }, 1000);
  });

  return promise;
}

export function getSchedulesDates(): Promise<Date[]> {
  const promise = new Promise<Date[]>((accept) => {
    setTimeout(() => {
      accept(randomSchedules.map((schedule) => schedule.start));
    }, 1000);
  });

  return promise;
}
