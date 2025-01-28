import {
  CustomEventProps,
  Statuses as ScheduleStatuses,
} from "@/types/schedule";

const Statuses = {
  COMPLETED: ScheduleStatuses.COMPLETED,
  CANCELED: ScheduleStatuses.CANCELED,
  BOOKED: ScheduleStatuses.BOOKED,
};

const names = [
  "Sandra Black",
  "Miguel Peterson",
  "Janet Smith",
  "Marcus Hodges",
  "Christina Hall",
  "Jacob Lester",
  "Lawrence Turner",
  "Michael Edwards",
  "Sophia Carter",
  "Emma Taylor",
];

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
  const schedules = [];
  const startDate = new Date(2024, 11, 1); // December 1, 2024
  const endDate = new Date(2025, 0, 31); // January 31, 2025

  const currentDate = new Date(startDate);

  const validDurations = [30, 45, 60, 120]; // Allowed durations in minutes

  while (currentDate <= endDate) {
    if (Math.random() > 0.2) {
      // Skip some days
      let startHour = 9;

      for (let i = 0; i < Math.floor(Math.random() * 4) + 3; i++) {
        // 3-6 appointments per day
        const startMinutes = 0;
        const duration = getRandomItem(validDurations); // Randomly pick from valid durations
        const endHour = startHour + Math.floor(duration / 60);
        const endMinutes = (startMinutes + duration) % 60;

        // Ensure the end time is valid
        if (endHour >= 17) break; // Limit appointments to 9 AM - 5 PM
        if (endHour < startHour || (endHour === startHour && endMinutes <= startMinutes)) {
          // Invalid time range detected!
          continue;
        }

        schedules.push({
          id: crypto.randomUUID(),
          name: getRandomItem(names),
          title: getRandomItem(services),
          status: getRandomItem(Object.values(Statuses)),
          occupation: "Hair cut & makeup",
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
          avatar: `https://randomuser.me/api/portraits/${
            Math.random() > 0.5 ? "women" : "men"
          }/${Math.floor(Math.random() * 100)}.jpg`,
        });

        startHour = endHour + 1; // Ensure no overlap
      }
    }

    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return schedules;
}

