import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const hook = () => {
        console.log("Effect")
        axios
            .get("http://localhost:3001/persons")
            .then(response => {
                console.log("Promise fulfilled")
                setPersons(response.data)
            })
    }

    useEffect(hook, [])

    const addPerson = (event) => {
        event.preventDefault()
        const personsObject = {
            name: newName,
            number: newNumber
        }
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        }
        else {
            setPersons(persons.concat(personsObject))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleAddName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleAddNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    const personsToShow = persons.filter(person =>
        person.name.toUpperCase().includes(filter.toUpperCase())
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter eventHandler={handleFilter} />

            <h3>add a new</h3>
            <PersonForm
                addPerson={addPerson}
                handleAddName={handleAddName}
                handleAddNumber={handleAddNumber}
            />

            <h3>Numbers</h3>
            <Persons persons_array={personsToShow} />
        </div>
    )
}

export default App