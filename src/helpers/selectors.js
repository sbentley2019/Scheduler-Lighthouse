export default function getAppointmentsForDay(state, day) {
  const ids = state.days.find((e) => e.name === day);
  if (!ids || !ids.appointments.length) return [];
  const appointments = ids.appointments.map((e) => state.appointments[e]);
  console.log("appointments: ", appointments);
  return appointments;
}