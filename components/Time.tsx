import { format } from "date-fns";
import formatToDate from "../lib/time";

export default function Time({ dateTime }: { dateTime: string }) {
  return (
    <time dateTime={dateTime} title={dateTime}>
      {formatToDate(dateTime)}
    </time>
  );
}
