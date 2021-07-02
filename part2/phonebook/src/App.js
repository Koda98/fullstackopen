import React, { useState } from 'react'

const Person = ({ person }) => (<div>{person.name} {person.number}</div>)

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personsObject = { 
            name: newName,
            number: newNumber
        }
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        }
        else{
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

    const peopleToShow = persons.filter(person => 
        person.name.toUpperCase().includes(filter.toUpperCase())
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input onChange={handleFilter} />
            </div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleAddName} />
                </div>
                <div>
                    number: <input onChange={handleAddNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>

            <h2>Numbers</h2>
            <div>
                {peopleToShow.map(person => 
                    <Person 
                        key={person.name} 
                        person={person} 
                    />
                )}
            </div>
        </div>
    )
}

export default App