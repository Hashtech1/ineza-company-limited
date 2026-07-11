import dayjs from "@/lib/dayjs";

export const formatDate = (date: string | Date, pattern = "MMM D, YYYY") =>
  dayjs(date).format(pattern);

export const formatDateTime = (date: string | Date) =>
  dayjs(date).format("MMM D, YYYY · h:mm A");

export const timeAgo = (date: string | Date) => dayjs(date).fromNow();

export const isPast = (date: string | Date) => dayjs(date).isBefore(dayjs());
