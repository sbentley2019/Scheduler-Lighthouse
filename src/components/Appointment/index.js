import React from "react";
import "components/Appointment/styles.scss";

export default function Appointment(props) {
  return (
    <article className="appointment">
      {props.time && <p>appointment at {props.time}</p>}
      {!props.time && <p>no appointments</p>}
    </article>
  );
}
