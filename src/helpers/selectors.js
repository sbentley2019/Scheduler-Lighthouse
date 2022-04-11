export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];
  const ids = state.days.find((e) => e.name === day);
  if (!ids || !ids.appointments.length) return [];
  return ids.appointments.map((e) => state.appointments[e]);
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer };
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) return [];
  const ids = state.days.find((e) => e.name === day);
  if (!ids || !ids.interviewers.length) return [];
  return ids.interviewers.map((e) => state.interviewers[e]);
}
