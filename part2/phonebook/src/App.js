import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        phonebookService
            .getAll()
            .then(response => {
                setPersons(response)
            })
    }, [])

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
            phonebookService
                .create(personsObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
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