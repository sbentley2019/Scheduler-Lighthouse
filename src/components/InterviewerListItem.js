import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { selected, setInterviewer, name, avatar } = props;
  const interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });
  return (
    <li className={interviewClass} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
