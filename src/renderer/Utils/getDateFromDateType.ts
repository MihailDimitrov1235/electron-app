export default function getDateFromDateType(date: string | Date): {
  year: number;
  month: number;
  day: number;
} {
  let newDate: Date;
  if (typeof date === 'string') {
    newDate = new Date(date);
  } else {
    newDate = date;
  }

  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
    day: newDate.getDate(),
  };
}
