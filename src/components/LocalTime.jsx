import { useEffect, useState } from "react";

const format = (timeZone) =>
  new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit" }).format(new Date());

// Live clock in the owner's time zone; tells visitors when a reply is realistic.
export const LocalTime = ({ timeZone, label }) => {
  const [time, setTime] = useState(() => format(timeZone));

  useEffect(() => {
    const id = setInterval(() => setTime(format(timeZone)), 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className="tabular-nums">
      <time>{time}</time> {label}
    </span>
  );
};
