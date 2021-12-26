import React from "react";
import trash from './img/trash.png'

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
let sickDentist = (dentist, sickDentists, patient) => {
  let sick = false
  if (patient !== 'Geen Afspraken') {
    dentist = dentist.substr((dentist.indexOf(' ') + 1))
    sick = sickDentists.search(dentist) !== -1 && true
  } else {
    sick = false
  }
  return sick
}

export default ({ time, patient, dentist, sickDentists, handleClick, }) => (
  <div className="appointment">
    <span className="time">{format_time(time)}</span>
    <span value={time} name={patient} style={{ backgroundColor: sickDentist(dentist, sickDentists, patient) && 'red' }} className="patient">{patient}</span>
    <span style={{ visibility: patient !== 'Geen Afspraken' ? 'visible' : 'hidden' }}><button value={time} name={patient} onClick={handleClick} style={{ backgroundColor: '#FFFFE0', border: "none" }}><img src={trash} alt="trashcan" className="trashcan" /></button></span>
  </div>
);
