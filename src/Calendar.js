import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";
import CalendarHeader from "./CalendarHeader";
import { buildCalendar, isDateEqual } from "./CalendarFunctions";

export const Calendar = ({ events, startingDate, onClickDate }) => {
  let [m, d, y] = startingDate.toLocaleDateString("en-US").split("/");

  const [currentM, setCurrentM] = useState(m - 1);
  const [currentY, setCurrentY] = useState(y);
  const [calArray, setCalArray] = useState([]);

  useEffect(() => {
    const cal = buildCalendar(currentM, currentY);
    setCalArray(cal);
  }, [currentM, currentY]);

  const RenderEvents = ({ events, date }) => {
    const dEvents = events.filter((el) => isDateEqual(el.date, date));
    return dEvents.length > 0 ? (
      <div className="event-list">
        {dEvents.map((el) => (
          <div key={uuidv4()} className="event">
            {el.title}
          </div>
        ))}
      </div>
    ) : null;
  };

  return (
    <div className="calendar-container">
      <CalendarHeader
        currentM={currentM}
        setCurrentM={setCurrentM}
        currentY={currentY}
        setCurrentY={setCurrentY}
      />

      <div className="days-container">
        {calArray.map((d) => (
          <div
            onClick={() => onClickDate(d.date)}
            key={uuidv4()}
            className={`item ${
              d.date.getMonth() !== currentM ? "item-dark" : "item-light"
            }`}
          >
            <div className="date">{d.date.getDate()}</div>
            <RenderEvents date={d.date} events={events} />
          </div>
        ))}
      </div>
    </div>
  );
};
