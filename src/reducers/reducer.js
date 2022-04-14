export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_DAY = "SET_DAY";
export const SET_INTERVIEW = "SET_INTERVIEW";

export function reducer(state, action) {
  switch (action.type) {
    case SET_APPLICATION_DATA: {
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers,
      };
    }
    case SET_DAY: {
      return { ...state, day: action.day };
    }
    case SET_INTERVIEW: {
      const appointment = {
        ...state.appointments[action.id],
        interview: action.interview,
      };
      const appointments = {
        ...state.appointments,
        [action.id]: appointment,
      };

      const days = state.days;
      days.find((e) => e.name === state.day).spots += action.interview ? -1 : 1;
      return {
        ...state,
        appointments,
        days,
      };
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
