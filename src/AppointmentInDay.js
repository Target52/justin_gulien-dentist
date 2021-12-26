import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
let sickDentist = (dentist, sickDentists) => {
  dentist = dentist.substr((dentist.indexOf(' ') + 1))
  const sick = sickDentists.search(dentist) !== -1 && true
  return sick
}

export default ({ time, dentist, assistant, patient, sickDentists }) => (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patiënt: {patient}</div>
    <div
      style={{ backgroundColor: sickDentist(dentist, sickDentists) && 'red' }}
      className="dentist"
    >
      Tandarts: {dentist}
    </div>
    <div className="assistant">Assistent: {assistant}</div>
  </li>
)