import { useEffect, useReducer } from "react";
import axios from "axios";
import {
  reducer,
  SET_APPLICATION_DATA,
  SET_DAY,
  SET_INTERVIEW,
} from "reducers/reducer";

const initialState = {
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {},
};
export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDay = (day) => dispatch({ type: SET_DAY, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        dispatch({
          type: SET_APPLICATION_DATA,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const bookInterview = function (id, interview) {
    return axios
      .put(`/api/appointments/${id}`, { id, interview })
      .then((res) => {
        dispatch({
          type: SET_INTERVIEW,
          id,
          interview,
        });
      });
  };

  const cancelInterview = function (id) {
    return axios
      .delete(`/api/appointments/${id}`)
      .then((res) => dispatch({ type: SET_INTERVIEW, id, interview: null }));
  };

  return { state, setDay, bookInterview, cancelInterview };
}
