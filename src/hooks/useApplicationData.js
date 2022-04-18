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
    const ws = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      if (typeof message === "object" && message.type === SET_INTERVIEW) {
        dispatch(message);
      } else {
        console.log(`message received: ${message}`);
      }
    };
    return () => ws.close();
  }, []);

  const bookInterview = function (id, interview) {
    return axios.put(`/api/appointments/${id}`, { id, interview });
  };

  const cancelInterview = function (id) {
    return axios.delete(`/api/appointments/${id}`);
  };

  return { state, setDay, bookInterview, cancelInterview };
}
