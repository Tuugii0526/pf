export const getDateString = ({ date }: { date: Date }) => {
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
