import { useState } from "react";
import { Calendar } from "./Calendar";

const fakeEvents = [
  {
    date: new Date(),
    title: "Trash day!",
  },
  {
    date: new Date(),
    title: "Other stuff",
  },
];

export const App = () => {
  const today = new Date();
  const [events, setEvents] = useState(fakeEvents);

  const onClickDate = (selectedDate) => {
    let newEvent = prompt("Please enter new event");
    setEvents([...events, { date: selectedDate, title: newEvent }]);
  };

  return (
    <div>
      <Calendar
        events={events}
        onClickDate={onClickDate}
        startingDate={today}
      />
    </div>
  );
};
