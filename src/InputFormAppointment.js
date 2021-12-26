import React from "react"

function InputFormAppointment({ newAppointment, handleSubmitAppointment, dentists, assistants, clients, appointments, handleChangeAppointment }) {

    const dentistsList = [...new Set(dentists.filter(item => item.sick !== '1').map(item => item.firstname + ' ' + item.lastname))].sort(function (a, b) {
        let x = a.toLowerCase();
        let y = b.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    })

    const assistantsList = [...new Set(assistants.filter(item => item.sick !== '1').map(item => item.firstname + ' ' + item.lastname))].sort(function (a, b) {
        let x = a.toLowerCase();
        let y = b.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    })

    const clientsList = [...new Set(clients.filter(item => item.sick !== '1').map(item => item.firstname + ' ' + item.lastname))].sort(function (a, b) {
        let x = a.toLowerCase();
        let y = b.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    })

    let freeDentist = []
    if (newAppointment.day !== '' && newAppointment.time !== '') {
        const day = Number(newAppointment.day)
        const time = Number(newAppointment.time)
        let busy = appointments.filter(item => item.day === day && item.time === time).map(item => item.dentist)
        if (busy.length !== 0) {
            busy.map(item => {
                freeDentist = dentistsList.filter(dent => dent !== item)
                return freeDentist
            })
        } else {
            freeDentist = dentistsList
        }
    }

    let freeAssistant = []
    if (newAppointment.day !== '' && newAppointment.time !== '') {
        const day = Number(newAppointment.day)
        const time = Number(newAppointment.time)
        const busy = appointments.filter(item => item.day === day && item.time === time).map(item => item.assistant)
        if (busy.length !== 0) {
            busy.map(item => {
                freeAssistant = assistantsList.filter(dent => dent !== item)
                return freeAssistant
            })
        } else {
            freeAssistant = assistantsList
        }
    }

    const days = [];
    for (let i = 1; i < 29; i++) {
        let obj = 0
        obj = i
        days.push(obj)
    }

    const times = [];
    for (var j = 8; j < 19; j++) {
        var time = []
        time['value'] = j
        let format_time = j => (j < 10 ? `0${j}:00u` : `${j}:00u`);
        time['label'] = [format_time(j)];
        times.push(time)
    }

    return (
        <form className="input-field" onSubmit={handleSubmitAppointment}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <select
                                className="field"
                                name="patient"
                                id="patient"
                                value={newAppointment.patient}
                                onChange={handleChangeAppointment}
                            >
                                <option key="emptyPatient" value=''>Patient</option>
                                {clientsList.map(item =>
                                    <option key={item + clientsList.length} value={item}>{item}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <select
                                className="field"
                                value={newAppointment.day}
                                name="day"
                                onChange={handleChangeAppointment}
                            ><option key="emptyDay" value=''>Day</option>
                                {days.map(item =>
                                    <option key={item} value={item}>{item}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <select
                                className="field"
                                value={newAppointment.time}
                                name="time"
                                onChange={handleChangeAppointment}
                            ><option key="emptyTime" value=''>Time</option>
                                {times.map(item =>
                                    <option key={item.value} value={item.value}>{item.label}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <select
                                className="field"
                                name="dentist"
                                id="dentist"
                                value={newAppointment.dentist}
                                onChange={handleChangeAppointment}
                            >
                                <option key="emptyDentist" value=''>Dentist</option>
                                {freeDentist.map(item =>
                                    <option key={item + freeDentist.length} value={item}>{item}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <select
                                className="field"
                                name="assistant"
                                id="assistant"
                                value={newAppointment.assistant}
                                onChange={handleChangeAppointment}
                            >
                                <option key="emptyAssistant" value=''>Assistant</option>
                                {freeAssistant.map(item =>
                                    <option key={item + freeAssistant.length} value={item}>{item}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <button>Voeg toe</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default InputFormAppointment