import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  return (
    <ul>
      {props.days.map((day) => {
        return (
          <DayListItem
            {...day}
            key={day.id}
            selected={props.day === day.name}
            setDay={props.setDay}
          />
        );
      })}
    </ul>
  );
}
