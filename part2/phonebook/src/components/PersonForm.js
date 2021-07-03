import React from "react"

const PersonForm = ({ addPerson, handleAddName, handleAddNumber }) => (
    <form id="FORM" onSubmit={addPerson}>
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
    
)

export default PersonForm