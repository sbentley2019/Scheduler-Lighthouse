import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, day, name, setDay } = props;
  return (
    <ul>
      {days.map((e) => {
        return (
          <DayListItem
            {...e}
            key={e.id}
            selected={day === e.name}
            setDay={setDay}
          />
        );
      })}
    </ul>
  );
}
