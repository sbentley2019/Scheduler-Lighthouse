import React from "react";
import classNames from "classnames";

export default function DayListItem(props) {
  let dayClass = classNames({ "day-list__item--full": !props.spots });
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">
        {props.spots || "no"} spot{props.spots === 1 ? "" : "s"} remaining
      </h3>
    </li>
  );
}
