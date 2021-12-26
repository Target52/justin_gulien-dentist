import React, { Component } from "react"
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import {
  generateRandomAppointments,
  clients, dentists, assistants
} from "./utils";

class App extends Component {

  constructor() {
    super()
    this.state =
    {
      tobeChangedAppointment: {
        id: '',
        day: '',
        time: '',
        patient: '',
        dentist: '',
        assistant: ''
      },
      ChangedAppointment: {
        id: '',
        day: '',
        time: '',
        patient: '',
        dentist: '',
        assistant: ''
      },
      newAppointment: {
        id: 1,
        day: '',
        time: '',
        patient: '',
        dentist: '',
        assistant: ''
      },
      sickDentists: '',
      appointments: [],
      newPerson: {
        id: 1,
        role: '',
        firstname: '',
        lastname: '',
        phone: '',
        birthyear: '',
        email: ''
      },
      sickPerson: {
        id: 1,
        role: '',
        sick: '',
        lastname: '',
        phone: '',
        birthyear: '',
        email: ''
      },
      clients: clients,
      dentists: dentists,
      assistants: assistants
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeSick = this.handleChangeSick.bind(this)
    this.handleChangeAppointment = this.handleChangeAppointment.bind(this)
    this.handleAppointment = this.handleAppointment.bind(this)
    this.handleAppointment2 = this.handleAppointment2.bind(this)
  }

  addDentist = () => {
    let newId = this.state.dentists.length + 1
    let newArray = {
      id: newId,
      firstname: this.state.newPerson.firstname,
      lastname: this.state.newPerson.lastname,
      phone: this.state.newPerson.phone,
      email: this.state.newPerson.email,
      sick: '0'
    }
    this.setState({
      dentists: [...this.state.dentists].concat(newArray),
      newPerson: {
        id: 1,
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        sick: '',
        birthyear: ''
      }
    })
  }

  addAssitant = () => {
    let newId = this.state.dentists.length + 1
    let newArray = {
      id: newId,
      firstname: this.state.newPerson.firstname,
      lastname: this.state.newPerson.lastname,
      phone: this.state.newPerson.phone,
      email: this.state.newPerson.email,
      sick: '0'
    }
    this.setState({
      assistants: [...this.state.assistants].concat(newArray),
      newPerson: {
        id: 1,
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        sick: '',
        birthyear: ''
      }
    })
  }

  addClient = () => {
    let newId = this.state.clients.length + 1
    let newArray = {
      id: newId,
      firstname: this.state.newPerson.firstname,
      lastname: this.state.newPerson.lastname,
      phone: this.state.newPerson.phone,
      email: this.state.newPerson.email,
      birthyear: Number(this.state.newPerson.birthyear)
    }
    this.setState({
      clients: [...this.state.clients].concat(newArray),
      newPerson: {
        id: 1,
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        birthyear: ''
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const role = this.state.newPerson.role
    if (role === 'client') {
      this.addClient()
    } else if (role === 'dentist') {
      this.addDentist()
    } else {
      this.addAssitant()
    }
  }

  handleClick = (event) => {
    let time = event.currentTarget.getAttribute("value")
    let patient = event.currentTarget.getAttribute("name")
    let newAppointments = this.state.appointments
    const newData = newAppointments.filter(item => item.time !== time && item.patient !== patient)
    this.setState({
      appointments: newData
    })
  }

  componentDidMount() {
    const appointments = generateRandomAppointments(150);
    this.setState({ appointments: appointments })
    const sickDentist = (this.state.dentists.filter(item => item.sick === "1").map(filteredItem => filteredItem.lastname)).join()
    this.setState({
      sickDentists: sickDentist
    })
  }

  handleChangeAppointment(event) {
    const { name, value } = event.target
    this.setState(prevState => ({
      newAppointment: { ...prevState.newAppointment, [name]: value }
    }))
  }

  handleAppointment(event) {
    const { name, value } = event.target
    this.setState(prevState => ({
      tobeChangedAppointment: { ...prevState.tobeChangedAppointment, [name]: value }
    }))
  }

  handleAppointment2(event) {
    const { name, value } = event.target
    this.setState(prevState => ({
      ChangedAppointment: { ...prevState.ChangedAppointment, [name]: value }
    }))
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState(prevState => ({
      newPerson: { ...prevState.newPerson, [name]: value }
    }))
  }

  handleSubmitAppointment = (event) => {
    event.preventDefault()
    let newId = this.state.appointments.length
    let newArray = {
      id: newId,
      patient: this.state.newAppointment.patient,
      dentist: this.state.newAppointment.dentist,
      assistant: this.state.newAppointment.assistant,
      day: Number(this.state.newAppointment.day),
      time: Number(this.state.newAppointment.time)
    }
    this.setState({
      appointments: [...this.state.appointments].concat(newArray),
      newAppointment: {
        id: 1,
        patient: '',
        dentist: '',
        assistant: '',
        time: '',
        day: ''
      }
    })
  }

  handleSubmitChangedAppointment = (event) => {
    event.preventDefault()
    let timeOld = Number(this.state.tobeChangedAppointment.time)
    let dayOld = Number(this.state.tobeChangedAppointment.day)
    let patient = this.state.tobeChangedAppointment.patient

    const filter = {
      patient: patient,
      day: dayOld,
      time: timeOld
    }

    const newAppointments = this.state.appointments.filter(item => {
      for (const key in filter) {
        if (item[key] !== filter[key])
          return true
      }
      return false
    })

    let newArray = {
      patient: this.state.ChangedAppointment.patient,
      dentist: this.state.ChangedAppointment.dentist,
      assistant: this.state.ChangedAppointment.assistant,
      day: Number(this.state.ChangedAppointment.day),
      time: Number(this.state.ChangedAppointment.time)
    }
    this.setState({
      appointments: newAppointments.concat(newArray),
      ChangedAppointment: {
        id: '',
        patient: '',
        dentist: '',
        assistant: '',
        time: '',
        day: ''
      },
      tobeChangedAppointment: {
        id: '',
        patient: '',
        dentist: '',
        assistant: '',
        time: '',
        day: ''
      }
    })
  }

  handleClick = (event) => {
    let time = event.currentTarget.getAttribute("value")
    let patient = event.currentTarget.getAttribute("name")
    let newAppointments = this.state.appointments
    const newData = newAppointments.filter(item => item.time !== time && item.patient !== patient)
    this.setState({
      appointments: newData
    })
  }

  handleChangeSick(event) {
    const { name, value } = event.target
    this.setState(prevState => ({
      sickPerson: { ...prevState.sickPerson, [name]: value }
    }))
  }

  addSick = (array, name) => {
    const oldPerson = array.filter(item => item.lastname === this.state.sickPerson.lastname)
    const newArray = array.filter(item => item.lastname !== this.state.sickPerson.lastname)
    oldPerson[0].sick = this.state.sickPerson.sick
    this.setState({
      [name]: newArray.concat(oldPerson),
      sickPerson: {
        id: 1,
        role: '',
        sick: '',
        lastname: '',
        phone: '',
        birthyear: '',
        email: ''
      }
    }, () => {
      const sickDentist = (this.state.dentists.filter(item => item.sick === "1").map(filteredItem => filteredItem.lastname)).join()
      this.setState({
        sickDentists: sickDentist
      })
      if (name === 'clients') {
        let newApp = []
        const sickClients = (this.state.clients.filter(item => item.sick === "1"))
        if (sickClients !== 0) {

          sickClients.map(client => {
            const sickClient = client.firstname + ' ' + client.lastname
            newApp = (this.state.appointments.filter(item => item.patient !== sickClient))
            return newApp
          })
        }
        this.setState({
          appointments: newApp
        })
      }
    })
  }

  handleSubmitSick = (event) => {
    event.preventDefault()
    const role = this.state.sickPerson.role
    if (role === 'dentist') {
      this.addSick(this.state.dentists, 'dentists')
    } else if (role === 'assistant') {
      this.addSick(this.state.assistants, 'assistants')
    } else {
      this.addSick(this.state.clients, 'clients')
    }

  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>

              </li>
              <li>
                <Link to="/calendar">Calendar view</Link>
              </li>
              <li>
                <Link to="/day">Day view</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/calendar">
                <Calendar handleClick={this.handleClick} sickDentists={this.state.sickDentists} appointments={this.state.appointments} />
              </Route>
              <Route path="/day">
                <Day sickDentists={this.state.sickDentists} appointments={this.state.appointments.filter(app => app.day === 1)} />
              </Route>
              <Route path="/">
                <Home
                  newPerson={this.state.newPerson}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  handleSubmitSick={this.handleSubmitSick}
                  handleChangeSick={this.handleChangeSick}
                  dentists={this.state.dentists}
                  assistants={this.state.assistants}
                  clients={this.state.clients}
                  sickPerson={this.state.sickPerson}
                  newAppointment={this.state.newAppointment}
                  handleChangeAppointment={this.handleChangeAppointment}
                  appointments={this.state.appointments}
                  handleSubmitAppointment={this.handleSubmitAppointment}
                  tobeChangedAppointment={this.state.tobeChangedAppointment}
                  ChangedAppointment={this.state.ChangedAppointment}
                  handleAppointment={this.handleAppointment}
                  handleAppointment2={this.handleAppointment2}
                  handleSubmitChangedAppointment={this.handleSubmitChangedAppointment}
                />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>

    )
  }
}

export default App