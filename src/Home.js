import React from "react";
import "./App.css";
import InputForm from "./InputForm"
import InputFormSick from "./InputFormSick"
import InputFormAppointment from "./InputFormAppointment"
import InputFormChangeAppointment from "./InputFormChangeAppointment"

export default ({ handleSubmitChangedAppointment, tobeChangedAppointment, handleAppointment, handleAppointment2, ChangedAppointment, newPerson, handleChange, handleSubmitAppointment, appointments, handleChangeAppointment, handleChangeSick, handleSubmit, handleSubmitSick, dentists, assistants, clients, sickPerson, newAppointment }) => <div>
    <h2>Add new client, dentist or assistant</h2>
    <InputForm
        handleChange={handleChange}
        newPerson={newPerson}
        handleSubmit={handleSubmit}
    />
    <h2 className="sick">Add sickness</h2>
    <InputFormSick
        handleChangeSick={handleChangeSick}
        dentists={dentists}
        handleSubmitSick={handleSubmitSick}
        sickPerson={sickPerson}
        assistants={assistants}
        clients={clients}
    />
    * when clients are reported sick all appointments on his or her name are deleted
    <h2 className="sick">Add appointment</h2>
    <InputFormAppointment
        newAppointment={newAppointment}
        handleChangeAppointment={handleChangeAppointment}
        appointments={appointments}
        dentists={dentists}
        assistants={assistants}
        clients={clients}
        handleSubmitAppointment={handleSubmitAppointment}
    />
    <h2 className="sick">Change appointment</h2>
    <InputFormChangeAppointment
        handleChangeAppointment={handleChangeAppointment}
        appointments={appointments}
        tobeChangedAppointment={tobeChangedAppointment}
        ChangedAppointment={ChangedAppointment}
        handleAppointment2={handleAppointment2}
        handleAppointment={handleAppointment}
        handleSubmitChangedAppointment={handleSubmitChangedAppointment}
    />
</div>