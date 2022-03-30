import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;
  return (
    <ul>
      {days.map((e) => {
        return (
          <DayListItem
            key={e.id}
            name={e.name}
            spots={e.spots}
            selected={e.name === value}
            setDay={(event) => onChange(e.name)}
          />
        );
      })}
    </ul>
  );
}
