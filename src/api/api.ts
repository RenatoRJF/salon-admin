import dayjs from "dayjs";
import { CustomEventProps, Statuses } from "../@types/schedule";

const schedules: CustomEventProps[] = [
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

export function getSchedulesByDate(date: Date): Promise<CustomEventProps[]> {
  const promise = new Promise<CustomEventProps[]>((accept, reject) => {
    setTimeout(() => {
      try {
        accept(
          schedules.filter((schedule) =>
            dayjs(schedule.start).isSame(date, "D")
          )
        );
      } catch {
        reject({
          error: { message: "Error while getting the schedules data" },
        });
      }
    }, 1000);
  });

  return promise;
}
