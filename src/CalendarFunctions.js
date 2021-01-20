export const getDates = (month, year) => {
  const numberOfDays = new Date(year, month + 1, 0).getDate();
  const datesForMonth = [];
  for (let i = 1; i <= numberOfDays; i++) {
    const dt = new Date(year, month, i);
    datesForMonth.push({ date: dt });
  }
  return datesForMonth;
};

const datesBefore = (month, year) => {
  const firstDayIndex = new Date(year, month, 1).getDay(); //Day of the week Sun-Sat : 0-6
  const beforeDates = [];
  for (let i = 0; i > -firstDayIndex; i--) {
    beforeDates.unshift({ date: new Date(year, month, i) });
  }
  return beforeDates;
};

const datesAfter = (month, year) => {
  const lastDay = new Date(year, month + 1, 0).getDate();
  const lastDayIndex = new Date(year, month, lastDay).getDay();
  const afterDates = [];
  for (let i = 1; i <= 6 - lastDayIndex; i++) {
    afterDates.push({ date: new Date(year, month + 1, i) });
  }
  return afterDates;
};

export const isDateEqual = (date1, date2) => {
  let [m1, d1, y1] = date1.toLocaleDateString("en-US").split("/");
  let [m2, d2, y2] = date2.toLocaleDateString("en-US").split("/");
  return m1 === m2 && d1 === d2 && y1 === y2;
};

export const buildCalendar = (month, year) => {
  const calDates = getDates(month, year);
  const datesB = datesBefore(month, year);
  const datesA = datesAfter(month, year);
  return [...datesB, ...calDates, ...datesA];
};
