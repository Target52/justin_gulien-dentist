import React from "react"

function InputForm({ newPerson, handleChange, handleSubmit }) {

    let stMail = () => {
        if (newPerson.role !== 'client') {
            return <td>
                <input
                    className="field"
                    type="email"
                    value={newPerson.lastname.toLowerCase() + '@dentistcompanybvt.com'}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </td>
        } else {
            return <td>
                <input
                    className="field"
                    type="email"
                    value={newPerson.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </td>
        }
    }

    return (
        <form className="input-field" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <select
                                className="field"
                                value={newPerson.role}
                                name="role"
                                placeholder=""
                                onChange={handleChange}
                            >
                                <option value=""></option>
                                <option value="client">Client</option>
                                <option value="dentist">Dentist</option>
                                <option value="assistant">Assistant</option>
                            </select>
                        </td>
                        <td>
                            <input
                                className="field"
                                type="text"
                                name="firstname"
                                value={newPerson.firstname}
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                className="field"
                                type="text"
                                value={newPerson.lastname}
                                name="lastname"
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                className="field"
                                type="tel"
                                value={newPerson.phone}
                                name="phone"
                                placeholder="Phone"
                                onChange={handleChange}
                            />
                        </td>
                        {stMail()}
                        <td>
                            <input
                                style={{
                                    visibility: newPerson.role === 'client' ? 'visible' : 'hidden'
                                }}
                                className="field"
                                type="number"
                                value={newPerson.birthyear}
                                name="birthyear"
                                placeholder="Birth Year"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <button>Voeg toe</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form >
    )
}

export default InputForm