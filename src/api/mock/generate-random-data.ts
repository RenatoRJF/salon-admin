import {
  CustomEventProps,
  Statuses as ScheduleStatuses,
} from "@/types/schedule";
import { users } from "./users";

const Statuses = {
  COMPLETED: ScheduleStatuses.COMPLETED,
  CANCELED: ScheduleStatuses.CANCELED,
  BOOKED: ScheduleStatuses.BOOKED,
};

const services = [
  "Hair cut & color",
  "Nail cut & paint",
  "Skin cleaning",
  "Eyebrow shaping",
  "Facial treatment",
  "Hair wash & blow dry",
  "Makeup application",
  "Manicure & pedicure",
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateSchedules(): CustomEventProps[] {
  const schedules: CustomEventProps[] = [];
  const startDate = new Date(2024, 11, 1); // December 1, 2024
  const endDate = new Date(2025, 0, 31); // January 31, 2025

  const currentDate = new Date(startDate);
  const validDurations = [30, 45, 60]; // Allowed durations in minutes

  while (currentDate <= endDate) {
    if (Math.random() > 0.2) {
      let startHour = 9;
      const dailySchedules: CustomEventProps[] = [];

      // Ensure at least 15 schedules per day, with some extra (15-19)
      const numAppointments = 15 + Math.floor(Math.random() * 5);

      Array.from({ length: numAppointments }).forEach(() => {
        const startMinutes = Math.random() > 0.5 ? 0 : 30;
        const duration = getRandomItem(validDurations);
        const endHour = startHour + Math.floor(duration / 60);
        const endMinutes = (startMinutes + duration) % 60;

        if (endHour >= 17) return;
        if (
          endHour < startHour ||
          (endHour === startHour && endMinutes <= startMinutes)
        ) {
          return;
        }

        const schedule = {
          id: crypto.randomUUID(),
          title: getRandomItem(services),
          status: getRandomItem(Object.values(Statuses)),
          start: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            startHour,
            startMinutes
          ),
          end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            endHour,
            endMinutes
          ),
          user: getRandomItem(users),
        };

        dailySchedules.push(schedule);

        // Ensure overlaps by randomly keeping the same hour or slightly shifting it
        if (Math.random() > 0.3) {
          startHour += Math.floor(Math.random() * 2);
        }
      });

      schedules.push(...dailySchedules);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return schedules;
}
