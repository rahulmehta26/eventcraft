import { addDays, addMonths, addWeeks, addYears, isAfter, parseISO } from "date-fns";

export const getEventsFromStorage = () => {
  const data = localStorage.getItem("events");
  return data ? JSON.parse(data) : [];
};

export const saveEventsToStorage = (events) => {
  localStorage.setItem("events", JSON.stringify(events));
};

export const generateRecurringDates = (start, end, recurrence) => {
  const result = [];
  const max = 50; 

  let current = parseISO(start);
  const until = end ? parseISO(end) : addYears(current, 1);
  let count = 0;

  while (!isAfter(current, until) && count < max) {
    result.push(current.toISOString());
    count++;

    switch (recurrence.type) {
      case "daily":
        current = addDays(current, recurrence.interval);
        break;
      case "weekly":
        current = addWeeks(current, recurrence.interval);
        break;
      case "monthly":
        current = addMonths(current, recurrence.interval);
        break;
      case "yearly":
        current = addYears(current, recurrence.interval);
        break;
      default:
        return result;
    }
  }

  return result;
};