// src/utils/date.js
export const getDayOfWeek = (date) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const d = new Date(date);
  return days[d.getDay()];
};