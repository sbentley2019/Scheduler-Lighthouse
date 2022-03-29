import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--full": !props.spots,
    "day-list__item--selected": props.selected,
  });

  const formatSpot = function (num) {
    return `${num || "no"} spot${num === 1 ? "" : "s"} remaining`;
  };
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpot(props.spots)}</h3>
    </li>
  );
}
