import { format } from "date-fns";

export default function Time({ dateTime }: { dateTime: string }) {
  return (
    <time dateTime={dateTime} title={dateTime}>
      {format(new Date(dateTime), "yyyy年MM月dd日")}
    </time>
  );
}
