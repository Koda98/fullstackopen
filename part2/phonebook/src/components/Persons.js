import React from "react"
// import phonebookService from "../services/phonebook"

const Person = ({ person, deletePerson }) => (
    <div>
        {person.name} {person.number}
        <button onClick={deletePerson}>delete</button>
    </div>
)

const Persons = ({ persons_array, deletePerson }) => (
    <div>
        {persons_array.map(person =>
            <Person
                key={person.name}
                person={person}
                deletePerson={() => deletePerson(person)}
            />
        )}
    </div>
)

export default Persons