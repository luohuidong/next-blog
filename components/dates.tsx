import React from "react";

export default function formatDate({ timestamp }: { timestamp: string }) {
  const time = new Date(Number(timestamp));
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const formattedDate = `${year}-${month}-${date}`;
  return <time dateTime={formattedDate}>{formattedDate}</time>;
}
