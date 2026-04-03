export const getFormattedMonthYear = (date) => {
  date = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  return `${monthName} ${year}`;
};

export const getTimeline = (startDate, endDate) => {
  if (startDate && endDate) {
    return `${getFormattedMonthYear(startDate)} - ${getFormattedMonthYear(
      endDate
    )}`;
  } else if (startDate && !endDate) {
    return `${getFormattedMonthYear(startDate)} - Present`;
  } else if (!startDate && endDate) {
    return `${getFormattedMonthYear(endDate)}`;
  } else {
    return "Invalid Dates";
  }
};

export const transformSkillsData = (resumeData) => {
  const transformedData = {
    ...resumeData,
    skills: resumeData.skills.reduce((acc, skill) => {
      const parentKey = skill.skillCategory;

      if (!acc[parentKey]) {
        acc[parentKey] = [];
      }

      acc[parentKey].push(skill);

      return acc;
    }, {}),
  };
  return transformedData;
};
