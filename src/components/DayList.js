import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;
  return (
    <ul>
      {days.map((e) => {
        return (
          <DayListItem
            key={e.id}
            name={e.name}
            spots={e.spots}
            selected={day === e.name}
            setDay={(event) => setDay(e.name)}
          />
        );
      })}
    </ul>
  );
}
