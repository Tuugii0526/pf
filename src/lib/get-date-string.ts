import { getMonthString } from "./get-month-string";

export const getDateString = ({ date }: { date: Date }) => {
  const month = getMonthString(date.getMonth());
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};
