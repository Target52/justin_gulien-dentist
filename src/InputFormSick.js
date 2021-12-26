import React from "react"

function InputFormSick({ handleChangeSick, handleSubmitSick, dentists, assistants, clients, sickPerson }) {

    const dentistsList = [...new Set(dentists.map(item => item.lastname))].sort(function (a, b) {
        let x = a.toLowerCase();
        let y = b.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    })

    const assistantsList = [...new Set(assistants.map(item => item.lastname))].sort(function (a, b) {
        let x = a.toLowerCase();
        let y = b.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    })

    const clientsList = [...new Set(clients.map(item => item.lastname))].sort(function (a, b) {
        let x = a.toLowerCase();
        let y = b.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    })

    let sickList = []
    if (sickPerson.role === 'dentist') {
        sickList = dentistsList
    } else if (sickPerson.role === 'assistant') {
        sickList = assistantsList
    } else if (sickPerson.role === 'client') {
        sickList = clientsList
    }

    return (
        <form className="input-field" onSubmit={handleSubmitSick}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <select
                                className="field"
                                value={sickPerson.role}
                                name="role"
                                placeholder=""
                                onChange={handleChangeSick}
                            >
                                <option value=""></option>
                                <option value="client">Client</option>
                                <option value="dentist">Dentist</option>
                                <option value="assistant">Assistant</option>
                            </select>
                        </td>
                        <td>
                            <select
                                name="lastname"
                                id="lastname"
                                value={sickPerson.lastname}
                                onChange={handleChangeSick}
                            >
                                <option key="emptySick" value=''>Name</option>
                                {sickList.map(item =>
                                    <option key={item + sickList.length} value={item}>{item}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <select
                                className="field"
                                name="sick"
                                value={sickPerson.sick}
                                onChange={handleChangeSick}
                            >
                                <option value=""></option>
                                <option value='1'>Sick</option>
                                <option value='0'>Not Sick</option>
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

export default InputFormSick