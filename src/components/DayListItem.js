import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const { spots, selected, setDay, name } = props;
  let dayClass = classNames("day-list__item", {
    "day-list__item--full": !spots,
    "day-list__item--selected": selected,
  });

  const formatSpot = function (num) {
    return `${num || "no"} spot${num === 1 ? "" : "s"} remaining`;
  };
  return (
    <li className={dayClass} onClick={setDay} selected={selected}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpot(spots)}</h3>
    </li>
  );
}
