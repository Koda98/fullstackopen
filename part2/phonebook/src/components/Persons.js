import React from "react"

const Person = ({ person }) => (<div>{person.name} {person.number}</div>)

const Persons = ({ persons_array }) => (
    <div>
        {persons_array.map(person =>
            <Person
                key={person.name}
                person={person}
            />
        )}
    </div>
)

export default Persons