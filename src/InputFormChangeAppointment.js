import React from "react"

function InputFormChangeAppointment({ appointments, handleSubmitChangedAppointment, tobeChangedAppointment, ChangedAppointment, handleAppointment, handleAppointment2 }) {

    const dayList = [...new Set(appointments.map(item => item.day))].sort(function (a, b) {
        return a - b;
    })

    const timeList = [...new Set(appointments.filter(item => item.day === Number(tobeChangedAppointment.day)).map(item => item.time))].sort(function (a, b) {
        return a - b;
    })

    let times = []
    times = timeList.map(j => {
        let time = []
        time['value'] = j
        let format_time = j => (j < 10 ? `0${j}:00u` : `${j}:00u`)
        time['label'] = [format_time(j)]
        return time
    })

    const patientList = [...new Set(appointments.filter(item => item.day === Number(tobeChangedAppointment.day) && item.time === Number(tobeChangedAppointment.time)).map(item => item.patient))].sort(function (a, b) {
        let x = a.toLowerCase();
        let y = b.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    })

    const dentist = [...new Set(appointments.filter(item => item.day === Number(tobeChangedAppointment.day) && item.time === Number(tobeChangedAppointment.time) && item.patient === tobeChangedAppointment.patient).map(item => item.dentist))]
    const assistant = [...new Set(appointments.filter(item => item.day === Number(tobeChangedAppointment.day) && item.time === Number(tobeChangedAppointment.time) && item.patient === tobeChangedAppointment.patient).map(item => item.assistant))]
    tobeChangedAppointment.dentist = dentist[0]
    tobeChangedAppointment.assistant = assistant[0]
    ChangedAppointment.dentist = dentist[0]
    ChangedAppointment.assistant = assistant[0]
    ChangedAppointment.patient = tobeChangedAppointment.patient

    const days = [];
    for (let i = 1; i < 29; i++) {
        let obj = 0
        obj = i
        days.push(obj)
    }

    let dentist2 = dentist.join()
    let assistant2 = assistant.join()

    const timesNotFree = [...new Set(appointments.filter(item => item.day === Number(ChangedAppointment.day) && (item.dentist === dentist2 || item.assistant === assistant2)).map(item => item.time))]
    const timesAllowed = []
    for (let j = 8; j < 19; j++) {
        if (timesNotFree.find(item => item === j) === undefined) {
            let time = []
            time['value'] = j
            let format_time = j => (j < 10 ? `0${j}:00u` : `${j}:00u`);
            time['label'] = [format_time(j)];
            timesAllowed.push(time)
        }
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <select
                                className="field"
                                value={tobeChangedAppointment.day}
                                name="day"
                                onChange={handleAppointment}
                            ><option key="emptyDay" value=''>Day</option>
                                {dayList.map(item =>
                                    <option key={item} value={item}>{item}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <select
                                className="field"
                                value={tobeChangedAppointment.time}
                                name="time"
                                onChange={handleAppointment}
                            ><option key="emptyTime" value=''>Time</option>
                                {times.map(item =>
                                    <option key={item.value} value={item.value}>{item.label}</option>
                                    //<option key={item} value={item}>{item}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <select
                                className="field"
                                name="patient"
                                id="patient"
                                value={tobeChangedAppointment.patient}
                                onChange={handleAppointment}
                            >
                                <option key="emptyPatient" value=''>Patient</option>
                                {patientList.map(item =>
                                    <option key={item + patientList.length} value={item}>{item}</option>
                                )}
                            </select>
                        </td>
                        <td name='dentist' value={dentist}>
                            Dentist: {dentist}
                        </td>

                        <td>
                            Assistant: {assistant}
                        </td>
                    </tr>
                </tbody>
            </table>
            Change to:
            <form className="input-field" onSubmit={handleSubmitChangedAppointment}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <select
                                    className="field"
                                    value={ChangedAppointment.day}
                                    name="day"
                                    onChange={handleAppointment2}
                                ><option key="emptyDay" value=''>Day</option>
                                    {days.map(item =>
                                        <option key={item} value={item}>{item}</option>
                                    )}
                                </select>
                            </td>
                            <td>
                                <select
                                    className="field"
                                    value={ChangedAppointment.time}
                                    name="time"
                                    onChange={handleAppointment2}
                                ><option key="emptyTime" value=''>Time</option>
                                    {timesAllowed.map(item =>
                                        <option key={item.value} value={item.value}>{item.label}</option>
                                        //<option key={item} value={item}>{item}</option>
                                    )}
                                </select>
                            </td>
                            <td>
                                Patient: {tobeChangedAppointment.patient}
                            </td>
                            <td>
                                Dentist: {dentist}
                            </td>
                            <td>
                                Assistant: {assistant}
                            </td>
                            <td>
                                <button>Voeg toe</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default InputFormChangeAppointment