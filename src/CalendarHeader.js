import React from "react";

const CalendarHeader = ({ currentM, setCurrentM, currentY, setCurrentY }) => {
  const nextMonth = () => {
    if (currentM === 11) {
      setCurrentM(0);
      setCurrentY(parseInt(currentY) + 1);
    } else {
      setCurrentM(currentM + 1);
    }
  };

  const prevMonth = () => {
    if (currentM === 0) {
      setCurrentM(11);
      setCurrentY(parseInt(currentY) - 1);
    } else {
      setCurrentM(currentM - 1);
    }
  };

  const getMonthLong = (month) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  };

  return (
    <div className="header">
      <button className="btn-prev" type="button" onClick={() => prevMonth()}>
        &#171;
      </button>
      <h1>
        {getMonthLong(currentM)} {currentY}
      </h1>
      <button className="btn-next" type="button" onClick={() => nextMonth()}>
        &#187;
      </button>
    </div>
  );
};

export default CalendarHeader;
