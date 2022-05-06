import { format } from "date-fns";

export default function formatToDate(dateTime: string) {
  return format(new Date(dateTime), "yyyy年MM月dd日");
}
