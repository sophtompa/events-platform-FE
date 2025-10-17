export const generateGoogleCalendarLink = ({
  title,
  description,
  location,
  startDate,
  startTime = "10:00",
  durationMinutes = 60
}) => {
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";

  const isoDate = new Date(startDate);

  const [hour, minute] = startTime.split(":");
  isoDate.setHours(parseInt(hour, 10));
  isoDate.setMinutes(parseInt(minute, 10));

  const endDate = new Date(isoDate.getTime() + durationMinutes * 60000);

  const formatDate = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const url = `${baseUrl}&text=${encodeURIComponent(title)}&dates=${formatDate(isoDate)}/${formatDate(endDate)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

  return url;
};
