import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";

const divideByDay = appointments => {
  const appointmentsByDay = {}
  for (let i = 1; i < 29; i++) {
    let appDay = []
    appDay = appointments.filter(item => item.day === i)
    const day = i
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = []
    }
    if (appDay.length !== 0) {
      appDay.forEach(appointment => {
        appointmentsByDay[day].push(appointment)
      })
    } else {
      const app = { day: i, time: 9, patient: 'Geen Afspraken', assistant: '', dentist: '' }
      appointmentsByDay[i].push(app)
    }
  }
  return appointmentsByDay
}

export default ({ appointments, sickDentists, handleClick, }) => {
  const appointmentsByDay = divideByDay(appointments);

  const daysInMonthJSX = Object.values(
    appointmentsByDay
  ).map((appointmentsInDay, index) => (
    <DayInMonth handleClick={handleClick} sickDentists={sickDentists} appointments={appointmentsInDay} key={index} />
  ));

  return (
    <div className="calendarview">
      <div className="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div className="table">{daysInMonthJSX}</div>

    </div>
  );
};