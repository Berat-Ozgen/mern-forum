import { useState, useEffect } from "react";

function useRealDate(): string {
  const [realDate, setRealDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setRealDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return realDate.toLocaleDateString("tr-TR", options);
}

export default useRealDate;
