export const generateGoogleCalendarLink = ({
    title,
    description,
    location,
    startDate,
  }) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  
    const start = startDate.replace(/-/g, "");
    const end = start;                          

  
    const url = `${baseUrl}&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
    
    return url;
  };
  