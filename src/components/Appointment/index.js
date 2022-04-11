import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import Status from "components/Appointment/Status";

import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const EDIT = "EDIT";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === SHOW && <Show {...props.interview} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={() => console.log("onSave")}
          onCancel={() => back()}
        />
      )}
      {/* interviewers={interviewers}
      onSave={action("onSave")}
      onCancel={action("onCancel")} */}
      {/* {status.mode === EDIT && <Form />} */}
      {/* {status.mode === SAVING && <Status message="SAVING" />} */}
      {/* {status.mode === DELETING && <Status message="DELETING" />} */}
    </article>
  );
}
