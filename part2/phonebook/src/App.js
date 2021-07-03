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
        const person = persons.find(p => p.name === newName)
        if (person) {
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                const changedPerson = {...person, number: newNumber}
                phonebookService
                    .update(person.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
                        console.log(`Updated ${person.name}`)
                    })
            }

        }
        else {
            phonebookService
                .create(personsObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    console.log(`Added ${newName}`)
                })
        }
        document.getElementById("FORM").reset()
    }

    const handleAddName = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleAddNumber = (event) => {
        // console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) => {
        // console.log(event.target.value)
        setFilter(event.target.value)
    }

    const deletePerson = person => {
        if (window.confirm(`Delete ${person.name} ?`)) {
            phonebookService
            .deletePerson(person.id)
            .then(response => {
                setPersons(persons.filter(p => p.id !== person.id))
                console.log(`Deleted ${person.name} with id ${person.id}`)
            })
        }
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
        <Persons 
            persons_array={personsToShow}
            deletePerson={deletePerson}
        />
    </div>
)
}

export default App