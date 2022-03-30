import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map((e) => {
          return (
            <InterviewerListItem
              key={e.id}
              name={e.name}
              avatar={e.avatar}
              selected={interviewer === e.id}
              setInterviewer={(event) => setInterviewer(e.id)}
            />
          );
        })}
      </ul>
    </section>
  );
}
