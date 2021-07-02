import React, { useState } from 'react'

const Person = ({ person }) => (<div>{person.name} {person.number}</div>)

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1234567' 
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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

    return (
        <div>
            <h2>Phonebook</h2>
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
                {persons.map(person => 
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