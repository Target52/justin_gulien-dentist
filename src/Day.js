import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

export default ({ appointments, sickDentists }) => {
  const appointmentsJSX = appointments.sort(function (a, b) {
    return a.time - b.time
  }).map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        sickDentists={sickDentists}
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};