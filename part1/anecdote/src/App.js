import React, { useState } from 'react'

// Anecdote component
const Anecdote = ({ text, num_votes}) => (
    <div>
        <p>{text}</p>
        <p>has {num_votes} votes</p>
    </div>
)

// Button component
const Button = ({ handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const next_anecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length))
    const vote = () => {
        const anecdotes_copy = [...votes]
        anecdotes_copy[selected] += 1
        setVotes(anecdotes_copy)
    }

    return (
        <>
            <Anecdote text={anecdotes[selected]} num_votes={votes[selected]} />
            <Button handleClick={vote} text = "vote" />
            <Button handleClick={next_anecdote} text="next anecdote" />
        </>
    )
}

export default App