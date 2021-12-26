import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments, sickDentists, handleClick, }) => {
  const appointmentsJSX = appointments.sort(function (a, b) {
    return a.time - b.time
  }).map(({ time, patient, dentist }, index) => (

    <AppointmentInMonth
      handleClick={handleClick} sickDentists={sickDentists} time={time} patient={patient} dentist={dentist} key={index} />
  ))
  return <div className="day">{appointmentsJSX} </div>;
};